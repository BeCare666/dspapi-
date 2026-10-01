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
import { AbonnementsService } from "../abonnements/abonnements.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { CloudinaryService } from "../cloudinary/cloudinary.service.js";
import { GraviteEi, ModuleMetier, RoleUtilisateur, StatutEi } from "../generated/prisma/enums.js";
const ORDRE_STATUT = {
    [StatutEi.DECLARE]: 0,
    [StatutEi.EN_TRAITEMENT]: 1,
    [StatutEi.CLOTURE]: 2,
};
let EvenementsIndesirablesService = class EvenementsIndesirablesService {
    prisma;
    abonnements;
    mailer;
    cloudinary;
    constructor(prisma, abonnements, mailer, cloudinary) {
        this.prisma = prisma;
        this.abonnements = abonnements;
        this.mailer = mailer;
        this.cloudinary = cloudinary;
    }
    async declarer(dto, user) {
        const organisationId = this.exigerOrganisation(user);
        await this.abonnements.verifierAcces(organisationId, ModuleMetier.EI);
        return this.prisma.evenementIndesirable.create({
            data: {
                organisationId,
                declareParId: user.sub,
                description: dto.description,
                typeEiId: dto.typeEiId,
                serviceId: dto.serviceId ?? user.serviceId ?? undefined,
                critereId: dto.critereId,
            },
        });
    }
    async lister(query, user) {
        const organisationId = this.exigerOrganisation(user);
        return this.prisma.evenementIndesirable.findMany({
            where: {
                organisationId,
                statut: query.statut,
                gravite: query.gravite,
                serviceId: query.serviceId,
                typeEiId: query.typeEiId,
            },
            include: { typeEi: true, service: true },
            orderBy: { dateDeclaration: "desc" },
        });
    }
    async fileAttenteQualification(user) {
        const organisationId = this.exigerOrganisation(user);
        return this.prisma.evenementIndesirable.findMany({
            where: { organisationId, gravite: null },
            include: { typeEi: true, service: true },
            orderBy: { dateDeclaration: "asc" },
        });
    }
    async obtenir(id, user) {
        const evenement = await this.prisma.evenementIndesirable.findUnique({
            where: { id },
            include: {
                typeEi: true,
                service: true,
                critere: true,
                declarePar: { select: { id: true, nom: true, prenom: true, email: true } },
                causes: { orderBy: { createdAt: "asc" } },
                actionsCorrectives: { orderBy: { createdAt: "asc" } },
                transitions: { orderBy: { createdAt: "asc" } },
                piecesJointes: { orderBy: { createdAt: "asc" } },
            },
        });
        this.verifierAppartenance(evenement, user);
        return evenement;
    }
    async qualifier(id, dto, user) {
        const evenement = await this.prisma.evenementIndesirable.findUnique({ where: { id } });
        this.verifierAppartenance(evenement, user);
        const misAJour = await this.prisma.evenementIndesirable.update({
            where: { id },
            data: { gravite: dto.gravite },
        });
        if (dto.gravite === GraviteEi.ELEVEE) {
            await this.notifierGraviteElevee(misAJour);
        }
        return misAJour;
    }
    async ajouterCause(evenementId, dto, user) {
        const evenement = await this.prisma.evenementIndesirable.findUnique({ where: { id: evenementId } });
        this.verifierAppartenance(evenement, user);
        return this.prisma.cause.create({
            data: { evenementId, type: dto.type, description: dto.description },
        });
    }
    async ajouterActionCorrective(evenementId, dto, user) {
        const evenement = await this.prisma.evenementIndesirable.findUnique({ where: { id: evenementId } });
        this.verifierAppartenance(evenement, user);
        return this.prisma.actionCorrective.create({
            data: {
                evenementId,
                description: dto.description,
                responsableId: dto.responsableId,
                echeance: new Date(dto.echeance),
            },
        });
    }
    async changerStatutAction(evenementId, actionId, dto, user) {
        const evenement = await this.prisma.evenementIndesirable.findUnique({ where: { id: evenementId } });
        this.verifierAppartenance(evenement, user);
        const action = await this.prisma.actionCorrective.findUnique({ where: { id: actionId } });
        if (!action || action.evenementId !== evenementId) {
            throw new NotFoundException("Action corrective introuvable");
        }
        return this.prisma.actionCorrective.update({ where: { id: actionId }, data: { statut: dto.statut } });
    }
    async changerStatut(id, dto, user) {
        const evenement = await this.prisma.evenementIndesirable.findUnique({ where: { id } });
        this.verifierAppartenance(evenement, user);
        if (ORDRE_STATUT[dto.statut] <= ORDRE_STATUT[evenement.statut]) {
            throw new ConflictException(`Transition invalide : un EI ${evenement.statut} ne peut pas repasser à ${dto.statut}`);
        }
        const [misAJour] = await this.prisma.$transaction([
            this.prisma.evenementIndesirable.update({
                where: { id },
                data: {
                    statut: dto.statut,
                    dateCloture: dto.statut === StatutEi.CLOTURE ? new Date() : undefined,
                },
            }),
            this.prisma.evenementTransition.create({
                data: {
                    evenementId: id,
                    ancienStatut: evenement.statut,
                    nouveauStatut: dto.statut,
                    utilisateurId: user.sub,
                },
            }),
        ]);
        return misAJour;
    }
    async ajouterPieceJointe(evenementId, fichier, user) {
        const evenement = await this.prisma.evenementIndesirable.findUnique({ where: { id: evenementId } });
        this.verifierAppartenance(evenement, user);
        const { url, cloudinaryId } = await this.cloudinary.uploadBuffer(fichier.buffer, fichier.mimetype, fichier.originalname);
        return this.prisma.pieceJointe.create({
            data: {
                evenementId,
                url,
                cloudinaryId,
                nomFichier: fichier.originalname,
                typeMime: fichier.mimetype,
                tailleOctets: fichier.size,
            },
        });
    }
    async tableauDeBord(user) {
        const organisationId = this.exigerOrganisation(user);
        const evenements = await this.prisma.evenementIndesirable.findMany({
            where: { organisationId },
            select: {
                statut: true,
                gravite: true,
                serviceId: true,
                typeEiId: true,
                dateDeclaration: true,
                dateCloture: true,
            },
        });
        const parStatut = {};
        const parGravite = {};
        const parService = {};
        let sommeDelaisClotureJours = 0;
        let nombreClotures = 0;
        for (const e of evenements) {
            parStatut[e.statut] = (parStatut[e.statut] ?? 0) + 1;
            if (e.gravite)
                parGravite[e.gravite] = (parGravite[e.gravite] ?? 0) + 1;
            if (e.serviceId)
                parService[e.serviceId] = (parService[e.serviceId] ?? 0) + 1;
            if (e.dateCloture) {
                nombreClotures++;
                sommeDelaisClotureJours += (e.dateCloture.getTime() - e.dateDeclaration.getTime()) / 86_400_000;
            }
        }
        return {
            total: evenements.length,
            parStatut,
            parGravite,
            parService,
            tauxCloture: evenements.length ? Math.round((nombreClotures / evenements.length) * 10000) / 100 : 0,
            delaiMoyenClotureJours: nombreClotures ? Math.round((sommeDelaisClotureJours / nombreClotures) * 10) / 10 : null,
        };
    }
    async exporter(query, user) {
        const organisationId = this.exigerOrganisation(user);
        return this.prisma.evenementIndesirable.findMany({
            where: {
                organisationId,
                dateDeclaration: {
                    gte: query.debut ? new Date(query.debut) : undefined,
                    lte: query.fin ? new Date(query.fin) : undefined,
                },
            },
            include: { typeEi: true, service: true, causes: true, actionsCorrectives: true },
            orderBy: { dateDeclaration: "asc" },
        });
    }
    async notifierGraviteElevee(evenement) {
        const destinataires = await this.prisma.utilisateur.findMany({
            where: {
                organisationId: evenement.organisationId,
                actif: true,
                roles: { some: { role: { in: [RoleUtilisateur.RESP_QUALITE, RoleUtilisateur.RESPONSABLE_COMPTE] } } },
            },
            select: { email: true },
        });
        await Promise.all(destinataires.map((d) => this.mailer.sendAlerteEiGraviteElevee(d.email, evenement.id)));
    }
    exigerOrganisation(user) {
        if (!user.organisationId) {
            throw new ForbiddenException("Réservé aux comptes organisation");
        }
        return user.organisationId;
    }
    verifierAppartenance(evenement, user) {
        if (!evenement || evenement.organisationId !== user.organisationId) {
            throw new NotFoundException("Événement indésirable introuvable");
        }
    }
};
EvenementsIndesirablesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        AbonnementsService,
        MailerService,
        CloudinaryService])
], EvenementsIndesirablesService);
export { EvenementsIndesirablesService };
//# sourceMappingURL=evenements-indesirables.service.js.map