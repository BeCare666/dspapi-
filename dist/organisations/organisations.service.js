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
let OrganisationsService = class OrganisationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async obtenir(organisationId) {
        const organisation = await this.prisma.organisation.findUnique({ where: { id: organisationId } });
        if (!organisation)
            throw new NotFoundException("Organisation introuvable");
        return organisation;
    }
    async lister(query) {
        const actif = query.actif === "true" ? true : query.actif === "false" ? false : undefined;
        return this.prisma.organisation.findMany({
            where: { type: query.type, actif },
            orderBy: { nom: "asc" },
        });
    }
    async obtenirDetailAdmin(organisationId) {
        const organisation = await this.prisma.organisation.findUnique({
            where: { id: organisationId },
            include: {
                _count: {
                    select: { utilisateurs: true, patients: true, evenementsIndesirables: true, reservations: true },
                },
            },
        });
        if (!organisation)
            throw new NotFoundException("Organisation introuvable");
        return organisation;
    }
    async activer(organisationId, acteurId) {
        const avant = await this.obtenir(organisationId);
        const apres = await this.prisma.organisation.update({ where: { id: organisationId }, data: { actif: true } });
        await this.tracer(acteurId, organisationId, "etablissement.activer", avant.actif, apres.actif);
        return apres;
    }
    async desactiver(organisationId, acteurId) {
        const avant = await this.obtenir(organisationId);
        const apres = await this.prisma.organisation.update({ where: { id: organisationId }, data: { actif: false } });
        await this.tracer(acteurId, organisationId, "etablissement.desactiver", avant.actif, apres.actif);
        return apres;
    }
    async modifierMesInfos(organisationId, dto, acteurId) {
        const avant = await this.obtenir(organisationId);
        if (dto.email && dto.email !== avant.email) {
            const emailPris = await this.prisma.organisation.findUnique({ where: { email: dto.email } });
            if (emailPris)
                throw new ConflictException("Cet email est déjà utilisé par une autre organisation");
        }
        const apres = await this.prisma.organisation.update({
            where: { id: organisationId },
            data: {
                nom: dto.nom,
                adresse: dto.adresse,
                telephone: dto.telephone,
                email: dto.email,
            },
        });
        await this.prisma.journalAudit.create({
            data: {
                organisationId,
                utilisateurId: acteurId,
                action: "etablissement.modifier_coordonnees",
                entite: "Organisation",
                entiteId: organisationId,
                donneesAvant: { nom: avant.nom, adresse: avant.adresse, telephone: avant.telephone, email: avant.email },
                donneesApres: { nom: apres.nom, adresse: apres.adresse, telephone: apres.telephone, email: apres.email },
            },
        });
        return apres;
    }
    async tracer(acteurId, organisationId, action, actifAvant, actifApres) {
        await this.prisma.journalAudit.create({
            data: {
                organisationId,
                utilisateurId: acteurId,
                action,
                entite: "Organisation",
                entiteId: organisationId,
                donneesAvant: { actif: actifAvant },
                donneesApres: { actif: actifApres },
            },
        });
    }
};
OrganisationsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], OrganisationsService);
export { OrganisationsService };
//# sourceMappingURL=organisations.service.js.map