var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { grilleStructureInclude } from "../grilles/grilles.service.js";
import { StatutGrille, StatutSessionEvaluation } from "../generated/prisma/enums.js";
import { calculerScore } from "./scoring.util.js";
const sessionAvecStructureInclude = {
    grille: { include: grilleStructureInclude },
    reponses: true,
};
let SessionsEvaluationService = class SessionsEvaluationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async demarrer(dto, user) {
        const organisationId = this.exigerOrganisation(user);
        const grille = await this.prisma.grille.findUnique({ where: { id: dto.grilleId } });
        if (!grille || grille.statut !== StatutGrille.PUBLIEE) {
            throw new NotFoundException("Grille introuvable ou non publiée");
        }
        const organisation = await this.prisma.organisation.findUniqueOrThrow({ where: { id: organisationId } });
        if (grille.type !== organisation.type) {
            throw new BadRequestException("Cette grille ne correspond pas au type de votre établissement");
        }
        return this.prisma.sessionEvaluation.create({
            data: { organisationId, grilleId: grille.id, demarreeParId: user.sub },
            include: sessionAvecStructureInclude,
        });
    }
    async lister(query, user) {
        const organisationId = this.exigerOrganisation(user);
        return this.prisma.sessionEvaluation.findMany({
            where: { organisationId, statut: query.statut },
            include: { grille: { select: { id: true, nom: true, type: true, version: true } } },
            orderBy: { dateDebut: "desc" },
        });
    }
    async obtenir(sessionId, user) {
        const session = await this.prisma.sessionEvaluation.findUnique({
            where: { id: sessionId },
            include: sessionAvecStructureInclude,
        });
        this.verifierAppartenance(session, user);
        return session;
    }
    async enregistrerReponse(sessionId, elementMesurableId, dto, user) {
        const session = await this.prisma.sessionEvaluation.findUnique({ where: { id: sessionId } });
        this.verifierAppartenance(session, user);
        if (session.statut !== StatutSessionEvaluation.EN_COURS) {
            throw new ConflictException("Session déjà soumise, les réponses ne peuvent plus être modifiées.");
        }
        const element = await this.prisma.elementMesurable.findUnique({
            where: { id: elementMesurableId },
            include: { critere: { include: { norme: { include: { domaine: true } } } } },
        });
        if (!element || element.critere.norme.domaine.grilleId !== session.grilleId) {
            throw new NotFoundException("Élément mesurable introuvable pour cette grille");
        }
        const valeur = dto.valeur;
        return this.prisma.reponse.upsert({
            where: { sessionId_elementMesurableId: { sessionId, elementMesurableId } },
            update: { valeur, commentaire: dto.commentaire },
            create: { sessionId, elementMesurableId, valeur, commentaire: dto.commentaire },
        });
    }
    async soumettre(sessionId, user) {
        const session = await this.prisma.sessionEvaluation.findUnique({
            where: { id: sessionId },
            include: sessionAvecStructureInclude,
        });
        this.verifierAppartenance(session, user);
        if (session.statut !== StatutSessionEvaluation.EN_COURS) {
            throw new ConflictException("Session déjà soumise");
        }
        const reponsesParElement = new Map(session.reponses.map((r) => [r.elementMesurableId, r.valeur]));
        const { scoreGlobal } = calculerScore(session.grille, reponsesParElement);
        return this.prisma.sessionEvaluation.update({
            where: { id: sessionId },
            data: {
                statut: StatutSessionEvaluation.SOUMISE,
                dateSoumission: new Date(),
                soumiseParId: user.sub,
                scoreGlobal,
            },
        });
    }
    async resultats(sessionId, user) {
        const session = await this.prisma.sessionEvaluation.findUnique({
            where: { id: sessionId },
            include: sessionAvecStructureInclude,
        });
        this.verifierAppartenance(session, user);
        if (session.statut !== StatutSessionEvaluation.SOUMISE) {
            throw new ConflictException("La session n'est pas encore soumise");
        }
        const reponsesParElement = new Map(session.reponses.map((r) => [r.elementMesurableId, r.valeur]));
        return calculerScore(session.grille, reponsesParElement);
    }
    async evolution(query, user) {
        const organisationId = this.exigerOrganisation(user);
        return this.prisma.sessionEvaluation.findMany({
            where: {
                organisationId,
                statut: StatutSessionEvaluation.SOUMISE,
                grille: query.grilleNom ? { nom: query.grilleNom } : undefined,
            },
            select: {
                id: true,
                dateSoumission: true,
                scoreGlobal: true,
                grille: { select: { nom: true, version: true } },
            },
            orderBy: { dateSoumission: "asc" },
        });
    }
    exigerOrganisation(user) {
        if (!user.organisationId) {
            throw new ForbiddenException("Réservé aux comptes organisation");
        }
        return user.organisationId;
    }
    verifierAppartenance(session, user) {
        if (!session || session.organisationId !== user.organisationId) {
            throw new NotFoundException("Session introuvable");
        }
    }
};
SessionsEvaluationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], SessionsEvaluationService);
export { SessionsEvaluationService };
//# sourceMappingURL=sessions-evaluation.service.js.map