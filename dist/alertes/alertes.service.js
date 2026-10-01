var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { StatutAlerte } from "../generated/prisma/enums.js";
const ORDRE_STATUT = {
    [StatutAlerte.OUVERTE]: 0,
    [StatutAlerte.EN_COURS]: 1,
    [StatutAlerte.CLOTUREE]: 2,
};
let AlertesService = class AlertesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async lister(query, user) {
        const organisationId = this.exigerOrganisation(user);
        return this.prisma.alerte.findMany({
            where: { organisationId, statut: query.statut, niveauRisque: query.niveauRisque },
            include: { patient: true, mesure: true },
            orderBy: { createdAt: "desc" },
        });
    }
    async obtenir(id, user) {
        const alerte = await this.prisma.alerte.findUnique({
            where: { id },
            include: { patient: true, mesure: true, interventions: { orderBy: { createdAt: "asc" } } },
        });
        this.verifierAppartenance(alerte, user);
        return alerte;
    }
    async ajouterIntervention(alerteId, dto, user) {
        const alerte = await this.prisma.alerte.findUnique({ where: { id: alerteId } });
        this.verifierAppartenance(alerte, user);
        if (alerte.statut === StatutAlerte.CLOTUREE) {
            throw new ConflictException("Alerte déjà clôturée");
        }
        const intervention = await this.prisma.intervention.create({
            data: { alerteId, utilisateurId: user.sub, note: dto.note },
        });
        if (alerte.statut === StatutAlerte.OUVERTE) {
            await this.prisma.alerte.update({ where: { id: alerteId }, data: { statut: StatutAlerte.EN_COURS } });
        }
        return intervention;
    }
    async changerStatut(alerteId, dto, user) {
        const alerte = await this.prisma.alerte.findUnique({ where: { id: alerteId } });
        this.verifierAppartenance(alerte, user);
        if (ORDRE_STATUT[dto.statut] <= ORDRE_STATUT[alerte.statut]) {
            throw new ConflictException(`Transition invalide : une alerte ${alerte.statut} ne peut pas repasser à ${dto.statut}`);
        }
        return this.prisma.alerte.update({ where: { id: alerteId }, data: { statut: dto.statut } });
    }
    exigerOrganisation(user) {
        if (!user.organisationId) {
            throw new ForbiddenException("Réservé aux comptes organisation");
        }
        return user.organisationId;
    }
    verifierAppartenance(alerte, user) {
        if (!alerte || alerte.organisationId !== user.organisationId) {
            throw new NotFoundException("Alerte introuvable");
        }
    }
};
AlertesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], AlertesService);
export { AlertesService };
//# sourceMappingURL=alertes.service.js.map