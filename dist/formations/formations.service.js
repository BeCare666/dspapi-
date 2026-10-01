var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
let FormationsService = class FormationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async lister(inclureInactives) {
        return this.prisma.formation.findMany({
            where: inclureInactives ? undefined : { actif: true },
            orderBy: { titre: "asc" },
        });
    }
    async obtenir(id) {
        const formation = await this.prisma.formation.findUnique({ where: { id } });
        if (!formation)
            throw new NotFoundException("Formation introuvable");
        return formation;
    }
    async creer(dto) {
        return this.prisma.formation.create({ data: dto });
    }
    async mettreAJour(id, dto) {
        await this.obtenir(id);
        return this.prisma.formation.update({ where: { id }, data: dto });
    }
    async desactiver(id) {
        await this.obtenir(id);
        return this.prisma.formation.update({ where: { id }, data: { actif: false } });
    }
    async reactiver(id) {
        await this.obtenir(id);
        return this.prisma.formation.update({ where: { id }, data: { actif: true } });
    }
};
FormationsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], FormationsService);
export { FormationsService };
//# sourceMappingURL=formations.service.js.map