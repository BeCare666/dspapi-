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
const SELECTION_PROFIL = {
    id: true,
    nom: true,
    prenom: true,
    email: true,
    typeCompte: true,
    organisationId: true,
    serviceId: true,
    actif: true,
    emailVerifieLe: true,
    createdAt: true,
    roles: { select: { role: true } },
    organisation: { select: { id: true, nom: true } },
};
let UtilisateursService = class UtilisateursService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async lister(query) {
        const actif = query.actif === "true" ? true : query.actif === "false" ? false : undefined;
        return this.prisma.utilisateur.findMany({
            where: {
                organisationId: query.organisationId,
                actif,
                roles: query.role ? { some: { role: query.role } } : undefined,
            },
            select: SELECTION_PROFIL,
            orderBy: { createdAt: "desc" },
        });
    }
    async obtenir(id) {
        const utilisateur = await this.prisma.utilisateur.findUnique({ where: { id }, select: SELECTION_PROFIL });
        if (!utilisateur)
            throw new NotFoundException("Utilisateur introuvable");
        return utilisateur;
    }
    async desactiver(id, acteurId) {
        const avant = await this.obtenir(id);
        const apres = await this.prisma.utilisateur.update({
            where: { id },
            data: { actif: false },
            select: SELECTION_PROFIL,
        });
        await this.tracer(acteurId, id, avant.organisationId, "utilisateur.desactiver", { actif: avant.actif }, {
            actif: apres.actif,
        });
        return apres;
    }
    async reactiver(id, acteurId) {
        const avant = await this.obtenir(id);
        const apres = await this.prisma.utilisateur.update({
            where: { id },
            data: { actif: true },
            select: SELECTION_PROFIL,
        });
        await this.tracer(acteurId, id, avant.organisationId, "utilisateur.reactiver", { actif: avant.actif }, {
            actif: apres.actif,
        });
        return apres;
    }
    async listerSessions(utilisateurId) {
        await this.obtenir(utilisateurId);
        return this.prisma.refreshToken.findMany({
            where: { utilisateurId },
            select: { id: true, createdAt: true, expiresAt: true, revokedAt: true },
            orderBy: { createdAt: "desc" },
        });
    }
    async revoquerSession(utilisateurId, sessionId) {
        const session = await this.prisma.refreshToken.findUnique({ where: { id: sessionId } });
        if (!session || session.utilisateurId !== utilisateurId) {
            throw new NotFoundException("Session introuvable");
        }
        return this.prisma.refreshToken.update({ where: { id: sessionId }, data: { revokedAt: new Date() } });
    }
    async ajouterRole(utilisateurId, role, acteurId) {
        const cible = await this.obtenir(utilisateurId);
        const existant = await this.prisma.utilisateurRole.findUnique({
            where: { utilisateurId_role: { utilisateurId, role } },
        });
        if (existant) {
            throw new ConflictException("Cet utilisateur a déjà ce rôle");
        }
        await this.prisma.utilisateurRole.create({ data: { utilisateurId, role } });
        await this.tracer(acteurId, utilisateurId, cible.organisationId, "utilisateur.role.ajouter", null, { role });
        return this.obtenir(utilisateurId);
    }
    async retirerRole(utilisateurId, role, acteurId) {
        const cible = await this.obtenir(utilisateurId);
        const existant = await this.prisma.utilisateurRole.findUnique({
            where: { utilisateurId_role: { utilisateurId, role } },
        });
        if (!existant) {
            throw new NotFoundException("Cet utilisateur n'a pas ce rôle");
        }
        await this.prisma.utilisateurRole.delete({ where: { utilisateurId_role: { utilisateurId, role } } });
        await this.tracer(acteurId, utilisateurId, cible.organisationId, "utilisateur.role.retirer", { role }, null);
        return this.obtenir(utilisateurId);
    }
    async tracer(acteurId, cibleId, organisationCibleId, action, donneesAvant, donneesApres) {
        await this.prisma.journalAudit.create({
            data: {
                organisationId: organisationCibleId,
                utilisateurId: acteurId,
                action,
                entite: "Utilisateur",
                entiteId: cibleId,
                donneesAvant: donneesAvant ?? undefined,
                donneesApres: donneesApres ?? undefined,
            },
        });
    }
};
UtilisateursService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], UtilisateursService);
export { UtilisateursService };
//# sourceMappingURL=utilisateurs.service.js.map