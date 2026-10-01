import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { CreateFormationDto } from "./dto/create-formation.dto.js";

@Injectable()
export class FormationsService {
  constructor(private readonly prisma: PrismaService) {}

  // 10.1 — catalogue public : uniquement les formations actives pour les non-admins.
  async lister(inclureInactives: boolean) {
    return this.prisma.formation.findMany({
      where: inclureInactives ? undefined : { actif: true },
      orderBy: { titre: "asc" },
    });
  }

  async obtenir(id: string) {
    const formation = await this.prisma.formation.findUnique({ where: { id } });
    if (!formation) throw new NotFoundException("Formation introuvable");
    return formation;
  }

  async creer(dto: CreateFormationDto) {
    return this.prisma.formation.create({ data: dto });
  }

  async mettreAJour(id: string, dto: CreateFormationDto) {
    await this.obtenir(id);
    return this.prisma.formation.update({ where: { id }, data: dto });
  }

  async desactiver(id: string) {
    await this.obtenir(id);
    return this.prisma.formation.update({ where: { id }, data: { actif: false } });
  }

  async reactiver(id: string) {
    await this.obtenir(id);
    return this.prisma.formation.update({ where: { id }, data: { actif: true } });
  }
}
