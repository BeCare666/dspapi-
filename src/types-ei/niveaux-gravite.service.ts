import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { CreerNiveauGraviteDto, ModifierNiveauGraviteDto } from "./dto/niveau-gravite.dto.js";

// §12.4 — l'administrateur paramètre l'échelle de gravité. §13.5 : un niveau
// déjà utilisé par au moins un EI n'est plus modifiable (les fiches existantes
// restent consultables dans leur forme d'origine) ; on le désactive et on en
// crée un nouveau.
@Injectable()
export class NiveauxGraviteService {
  constructor(private readonly prisma: PrismaService) {}

  lister(inclureInactifs: boolean) {
    return this.prisma.niveauGraviteEi.findMany({
      where: inclureInactifs ? undefined : { actif: true },
      include: { _count: { select: { evenements: true } } },
      orderBy: { ordre: "asc" },
    });
  }

  async creer(dto: CreerNiveauGraviteDto) {
    await this.verifierLibelleLibre(dto.libelle);
    return this.prisma.niveauGraviteEi.create({ data: { libelle: dto.libelle.trim(), ordre: dto.ordre, critique: dto.critique } });
  }

  async modifier(id: string, dto: ModifierNiveauGraviteDto) {
    const niveau = await this.obtenir(id);
    const utilisations = await this.prisma.evenementIndesirable.count({ where: { niveauGraviteId: id } });
    if (utilisations > 0) {
      throw new ConflictException(
        "Ce niveau est déjà utilisé par des événements : désactivez-le et créez un nouveau niveau pour faire évoluer l'échelle",
      );
    }
    if (dto.libelle && dto.libelle.trim() !== niveau.libelle) await this.verifierLibelleLibre(dto.libelle);
    return this.prisma.niveauGraviteEi.update({
      where: { id },
      data: { libelle: dto.libelle?.trim(), ordre: dto.ordre, critique: dto.critique },
    });
  }

  async basculer(id: string, actif: boolean) {
    await this.obtenir(id);
    return this.prisma.niveauGraviteEi.update({ where: { id }, data: { actif } });
  }

  private async obtenir(id: string) {
    const niveau = await this.prisma.niveauGraviteEi.findUnique({ where: { id } });
    if (!niveau) throw new NotFoundException("Niveau de gravité introuvable");
    return niveau;
  }

  private async verifierLibelleLibre(libelle: string) {
    const existant = await this.prisma.niveauGraviteEi.findUnique({ where: { libelle: libelle.trim() } });
    if (existant) throw new ConflictException("Un niveau porte déjà ce libellé");
  }
}
