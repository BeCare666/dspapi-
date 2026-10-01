var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { StatutGrille } from "../generated/prisma/enums.js";
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
};
let GrillesService = class GrillesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async lister(query, estAdmin) {
        return this.prisma.grille.findMany({
            where: {
                type: query.type,
                statut: estAdmin ? query.statut : StatutGrille.PUBLIEE,
            },
            orderBy: [{ nom: "asc" }, { version: "desc" }],
        });
    }
    async obtenir(id, estAdmin) {
        const grille = await this.prisma.grille.findUnique({ where: { id }, include: grilleStructureInclude });
        if (!grille || (!estAdmin && grille.statut !== StatutGrille.PUBLIEE)) {
            throw new NotFoundException("Grille introuvable");
        }
        return grille;
    }
    async creer(dto) {
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
    async mettreAJour(id, dto) {
        const grille = await this.prisma.grille.findUnique({ where: { id } });
        if (!grille)
            throw new NotFoundException("Grille introuvable");
        if (grille.statut !== StatutGrille.BROUILLON) {
            throw new ConflictException("Une grille publiée ou archivée ne peut plus être modifiée. Créez une nouvelle version pour la faire évoluer.");
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
    async publier(id) {
        const grille = await this.prisma.grille.findUnique({ where: { id } });
        if (!grille)
            throw new NotFoundException("Grille introuvable");
        if (grille.statut !== StatutGrille.BROUILLON) {
            throw new ConflictException("Seule une grille en brouillon peut être publiée");
        }
        return this.prisma.grille.update({
            where: { id },
            data: { statut: StatutGrille.PUBLIEE, publieeLe: new Date() },
        });
    }
    async archiver(id) {
        const grille = await this.prisma.grille.findUnique({ where: { id } });
        if (!grille)
            throw new NotFoundException("Grille introuvable");
        if (grille.statut !== StatutGrille.PUBLIEE) {
            throw new ConflictException("Seule une grille publiée peut être archivée");
        }
        return this.prisma.grille.update({ where: { id }, data: { statut: StatutGrille.ARCHIVEE } });
    }
    async nouvelleVersion(id) {
        const source = await this.prisma.grille.findUnique({ where: { id }, include: grilleStructureInclude });
        if (!source)
            throw new NotFoundException("Grille introuvable");
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
                                        ordre: critere.ordre,
                                        elementsMesurables: {
                                            create: critere.elementsMesurables.map((element) => ({
                                                libelle: element.libelle,
                                                typeReponse: element.typeReponse,
                                                optionsChoix: element.optionsChoix ?? undefined,
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
    async prochaineVersion(nom) {
        const derniere = await this.prisma.grille.findFirst({ where: { nom }, orderBy: { version: "desc" } });
        return (derniere?.version ?? 0) + 1;
    }
    mapDomaine(domaine) {
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
                            ordre: critere.ordre,
                            elementsMesurables: {
                                create: critere.elementsMesurables.map((element) => ({
                                    libelle: element.libelle,
                                    typeReponse: element.typeReponse,
                                    optionsChoix: element.optionsChoix,
                                    ordre: element.ordre,
                                })),
                            },
                        })),
                    },
                })),
            },
        };
    }
};
GrillesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], GrillesService);
export { GrillesService };
//# sourceMappingURL=grilles.service.js.map