import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { CreateTypeEiDto } from "./dto/create-type-ei.dto.js";

@Injectable()
export class TypesEiService {
  constructor(private readonly prisma: PrismaService) {}

  async lister(inclureInactifs: boolean) {
    return this.prisma.typeEi.findMany({
      where: inclureInactifs ? undefined : { actif: true },
      orderBy: { libelle: "asc" },
    });
  }

  async creer(dto: CreateTypeEiDto) {
    return this.prisma.typeEi.create({ data: { libelle: dto.libelle } });
  }

  async desactiver(id: string) {
    const type = await this.prisma.typeEi.findUnique({ where: { id } });
    if (!type) throw new NotFoundException("Type d'EI introuvable");
    return this.prisma.typeEi.update({ where: { id }, data: { actif: false } });
  }

  async reactiver(id: string) {
    const type = await this.prisma.typeEi.findUnique({ where: { id } });
    if (!type) throw new NotFoundException("Type d'EI introuvable");
    return this.prisma.typeEi.update({ where: { id }, data: { actif: true } });
  }
}
