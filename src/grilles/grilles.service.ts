import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { StatutGrille, TypeElementMesurable } from "../generated/prisma/enums.js";
import type { Prisma } from "../generated/prisma/client.js";
import type { CreateGrilleDto } from "./dto/create-grille.dto.js";
import type { ListGrillesQueryDto } from "./dto/list-grilles-query.dto.js";

export const grilleStructureInclude = {
  domaines: {
    orderBy: { ordre: "asc" },
    include: {
      normes: {
        orderBy: { ordre: "asc" },
        include: {
          criteres: {
            orderBy: { ordre: "asc" },
            include: {
              elementsMesurables: { orderBy: { ordre: "asc" } },
            },
          },
        },
      },
    },
  },
} satisfies Prisma.GrilleInclude;

@Injectable()
export class GrillesService {
  constructor(private readonly prisma: PrismaService) {}

  async lister(query: ListGrillesQueryDto, estAdmin: boolean) {
    return this.prisma.grille.findMany({
      where: {
        type: query.type,
        // Un non-admin ne peut jamais voir un brouillon/archive d'un autre statut que PUBLIEE.
        statut: estAdmin ? query.statut : StatutGrille.PUBLIEE,
      },
      orderBy: [{ nom: "asc" }, { version: "desc" }],
    });
  }

  async obtenir(id: string, estAdmin: boolean) {
    const grille = await this.prisma.grille.findUnique({ where: { id }, include: grilleStructureInclude });
    if (!grille || (!estAdmin && grille.statut !== StatutGrille.PUBLIEE)) {
      throw new NotFoundException("Grille introuvable");
    }
    return grille;
  }

  async creer(dto: CreateGrilleDto) {
    const version = await this.prochaineVersion(dto.nom);
    return this.prisma.grille.create({
      data: {
        nom: dto.nom,
        type: dto.type,
        version,
        statut: StatutGrille.BROUILLON,
        domaines: { create: dto.domaines.map(this.mapDomaine) },
      },
      include: grilleStructureInclude,
    });
  }

  async mettreAJour(id: string, dto: CreateGrilleDto) {
    const grille = await this.prisma.grille.findUnique({ where: { id } });
    if (!grille) throw new NotFoundException("Grille introuvable");
    if (grille.statut !== StatutGrille.BROUILLON) {
      throw new ConflictException(
        "Une grille publiée ou archivée ne peut plus être modifiée. Créez une nouvelle version pour la faire évoluer.",
      );
    }

    return this.prisma.$transaction(async (tx) => {
      await tx.domaine.deleteMany({ where: { grilleId: id } });
      return tx.grille.update({
        where: { id },
        data: {
          nom: dto.nom,
          type: dto.type,
          domaines: { create: dto.domaines.map(this.mapDomaine) },
        },
        include: grilleStructureInclude,
      });
    });
  }

  async publier(id: string) {
    const grille = await this.prisma.grille.findUnique({ where: { id } });
    if (!grille) throw new NotFoundException("Grille introuvable");
    if (grille.statut !== StatutGrille.BROUILLON) {
      throw new ConflictException("Seule une grille en brouillon peut être publiée");
    }
    return this.prisma.grille.update({
      where: { id },
      data: { statut: StatutGrille.PUBLIEE, publieeLe: new Date() },
    });
  }

  async archiver(id: string) {
    const grille = await this.prisma.grille.findUnique({ where: { id } });
    if (!grille) throw new NotFoundException("Grille introuvable");
    if (grille.statut !== StatutGrille.PUBLIEE) {
      throw new ConflictException("Seule une grille publiée peut être archivée");
    }
    return this.prisma.grille.update({ where: { id }, data: { statut: StatutGrille.ARCHIVEE } });
  }

  // Versionnage figé (6.12) : jamais de mutation d'une grille publiée/archivée,
  // on clone sa structure dans un nouveau brouillon à la version suivante.
  async nouvelleVersion(id: string) {
    const source = await this.prisma.grille.findUnique({ where: { id }, include: grilleStructureInclude });
    if (!source) throw new NotFoundException("Grille introuvable");

    const version = await this.prochaineVersion(source.nom);
    return this.prisma.grille.create({
      data: {
        nom: source.nom,
        type: source.type,
        version,
        statut: StatutGrille.BROUILLON,
        domaines: {
          create: source.domaines.map((domaine) => ({
            nom: domaine.nom,
            ordre: domaine.ordre,
            normes: {
              create: domaine.normes.map((norme) => ({
                code: norme.code,
                libelle: norme.libelle,
                ordre: norme.ordre,
                criteres: {
                  create: norme.criteres.map((critere) => ({
                    code: critere.code,
                    libelle: critere.libelle,
                    categorie: critere.categorie,
                    recommandation: critere.recommandation,
                    ordre: critere.ordre,
                    elementsMesurables: {
                      create: critere.elementsMesurables.map((element) => ({
                        libelle: element.libelle,
                        typeReponse: element.typeReponse,
                        optionsChoix: element.optionsChoix ?? undefined,
                        typeElement: element.typeElement,
                        entreDansScore: element.entreDansScore,
                        ordre: element.ordre,
                      })),
                    },
                  })),
                },
              })),
            },
          })),
        },
      },
      include: grilleStructureInclude,
    });
  }

  private async prochaineVersion(nom: string): Promise<number> {
    const derniere = await this.prisma.grille.findFirst({ where: { nom }, orderBy: { version: "desc" } });
    return (derniere?.version ?? 0) + 1;
  }

  private mapDomaine(domaine: CreateGrilleDto["domaines"][number]): Prisma.DomaineCreateWithoutGrilleInput {
    return {
      nom: domaine.nom,
      ordre: domaine.ordre,
      normes: {
        create: domaine.normes.map((norme) => ({
          code: norme.code,
          libelle: norme.libelle,
          ordre: norme.ordre,
          criteres: {
            create: norme.criteres.map((critere) => ({
              code: critere.code,
              libelle: critere.libelle,
              categorie: critere.categorie?.trim() || null,
              recommandation: critere.recommandation?.trim() || null,
              ordre: critere.ordre,
              elementsMesurables: {
                create: critere.elementsMesurables.map((element) => {
                  const typeElement = element.typeElement ?? TypeElementMesurable.DOCUMENT_A_EXAMINER;
                  return {
                    libelle: element.libelle,
                    typeReponse: element.typeReponse,
                    optionsChoix: element.optionsChoix,
                    typeElement,
                    // §6.6 — par défaut, seul un document à examiner entre dans le score.
                    entreDansScore: element.entreDansScore ?? typeElement === TypeElementMesurable.DOCUMENT_A_EXAMINER,
                    ordre: element.ordre,
                  };
                }),
              },
            })),
          },
        })),
      },
    };
  }
}
