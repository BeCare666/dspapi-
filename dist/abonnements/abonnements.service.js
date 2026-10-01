var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { ParametresService } from "../parametres/parametres.service.js";
import { StatutAbonnement } from "../generated/prisma/enums.js";
const DEFAUT_DUREE_ESSAI_JOURS = Number(process.env.DUREE_ESSAI_MODULE_JOURS ?? 90);
let AbonnementsService = class AbonnementsService {
    prisma;
    parametres;
    constructor(prisma, parametres) {
        this.prisma = prisma;
        this.parametres = parametres;
    }
    async verifierAcces(organisationId, module) {
        let abonnement = await this.prisma.abonnementModule.findUnique({
            where: { organisationId_module: { organisationId, module } },
        });
        if (!abonnement) {
            const dureeEssaiJours = await this.parametres.obtenirValeurEntiere("duree_essai_module_jours", DEFAUT_DUREE_ESSAI_JOURS);
            const maintenant = new Date();
            abonnement = await this.prisma.abonnementModule.create({
                data: {
                    organisationId,
                    module,
                    statut: StatutAbonnement.ESSAI,
                    essaiDebut: maintenant,
                    essaiFin: new Date(maintenant.getTime() + dureeEssaiJours * 86_400_000),
                },
            });
        }
        if (abonnement.statut === StatutAbonnement.ESSAI && abonnement.essaiFin < new Date()) {
            abonnement = await this.prisma.abonnementModule.update({
                where: { id: abonnement.id },
                data: { statut: StatutAbonnement.EXPIRE },
            });
        }
        if (abonnement.statut === StatutAbonnement.EXPIRE) {
            throw new ForbiddenException(`Accès au module ${module} expiré. Un abonnement est nécessaire pour continuer.`);
        }
        return abonnement;
    }
    async obtenirStatut(organisationId, module) {
        return this.prisma.abonnementModule.findUnique({
            where: { organisationId_module: { organisationId, module } },
        });
    }
    async activerManuellement(organisationId, module) {
        return this.prisma.abonnementModule.upsert({
            where: { organisationId_module: { organisationId, module } },
            update: { statut: StatutAbonnement.ACTIF, activeLe: new Date() },
            create: {
                organisationId,
                module,
                statut: StatutAbonnement.ACTIF,
                essaiDebut: new Date(),
                essaiFin: new Date(),
                activeLe: new Date(),
            },
        });
    }
    async expirerEssaisEchus() {
        const resultat = await this.prisma.abonnementModule.updateMany({
            where: { statut: StatutAbonnement.ESSAI, essaiFin: { lt: new Date() } },
            data: { statut: StatutAbonnement.EXPIRE },
        });
        return resultat.count;
    }
};
AbonnementsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        ParametresService])
], AbonnementsService);
export { AbonnementsService };
//# sourceMappingURL=abonnements.service.js.map