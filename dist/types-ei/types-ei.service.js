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
let TypesEiService = class TypesEiService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async lister(inclureInactifs) {
        return this.prisma.typeEi.findMany({
            where: inclureInactifs ? undefined : { actif: true },
            orderBy: { libelle: "asc" },
        });
    }
    async creer(dto) {
        return this.prisma.typeEi.create({ data: { libelle: dto.libelle } });
    }
    async desactiver(id) {
        const type = await this.prisma.typeEi.findUnique({ where: { id } });
        if (!type)
            throw new NotFoundException("Type d'EI introuvable");
        return this.prisma.typeEi.update({ where: { id }, data: { actif: false } });
    }
    async reactiver(id) {
        const type = await this.prisma.typeEi.findUnique({ where: { id } });
        if (!type)
            throw new NotFoundException("Type d'EI introuvable");
        return this.prisma.typeEi.update({ where: { id }, data: { actif: true } });
    }
};
TypesEiService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], TypesEiService);
export { TypesEiService };
//# sourceMappingURL=types-ei.service.js.map