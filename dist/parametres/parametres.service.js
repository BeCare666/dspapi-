var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
const VALIDATEURS = {
    duree_essai_module_jours: (valeur) => {
        const n = Number(valeur);
        if (!Number.isInteger(n) || n < 1 || n > 3650) {
            throw new BadRequestException("duree_essai_module_jours doit être un entier entre 1 et 3650 (jours)");
        }
    },
};
let ParametresService = class ParametresService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listerTous() {
        return this.prisma.parametrePlateforme.findMany({ orderBy: { cle: "asc" } });
    }
    async obtenirValeurEntiere(cle, defaut) {
        const parametre = await this.prisma.parametrePlateforme.findUnique({ where: { cle } });
        if (!parametre)
            return defaut;
        const n = Number(parametre.valeur);
        return Number.isFinite(n) ? n : defaut;
    }
    async modifier(cle, valeur, acteurId) {
        const existant = await this.prisma.parametrePlateforme.findUnique({ where: { cle } });
        if (!existant) {
            throw new NotFoundException(`Paramètre inconnu : ${cle}`);
        }
        const validateur = VALIDATEURS[cle];
        if (validateur)
            validateur(valeur);
        const misAJour = await this.prisma.parametrePlateforme.update({ where: { cle }, data: { valeur } });
        await this.prisma.journalAudit.create({
            data: {
                organisationId: null,
                utilisateurId: acteurId,
                action: "parametre.modifier",
                entite: "ParametrePlateforme",
                entiteId: cle,
                donneesAvant: { valeur: existant.valeur },
                donneesApres: { valeur: misAJour.valeur },
            },
        });
        return misAJour;
    }
};
ParametresService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ParametresService);
export { ParametresService };
//# sourceMappingURL=parametres.service.js.map