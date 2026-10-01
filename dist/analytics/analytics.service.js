var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { StatutSessionEvaluation } from "../generated/prisma/enums.js";
let AnalyticsService = class AnalyticsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async obtenirAnalytics() {
        const [etablissements, etablissementsParType, utilisateursTotal, utilisateursActifs, rolesGroupes, reservationsGroupees, formationsTotal, formationsActives, sessionsSoumises, eiBruts, newsGroupees,] = await Promise.all([
            this.prisma.organisation.groupBy({ by: ["actif"], _count: { _all: true } }),
            this.prisma.organisation.groupBy({ by: ["type"], _count: { _all: true } }),
            this.prisma.utilisateur.count(),
            this.prisma.utilisateur.count({ where: { actif: true } }),
            this.prisma.utilisateurRole.groupBy({ by: ["role"], _count: { _all: true } }),
            this.prisma.reservation.groupBy({ by: ["statut"], _count: { _all: true } }),
            this.prisma.formation.count(),
            this.prisma.formation.count({ where: { actif: true } }),
            this.prisma.sessionEvaluation.findMany({
                where: { statut: StatutSessionEvaluation.SOUMISE },
                select: { scoreGlobal: true, organisation: { select: { type: true } } },
            }),
            this.prisma.evenementIndesirable.findMany({
                select: { statut: true, gravite: true, dateDeclaration: true, dateCloture: true },
            }),
            this.prisma.mesureNews.groupBy({ by: ["niveauRisque"], _count: { _all: true } }),
        ]);
        const m1Etablissements = {
            total: etablissementsParType.reduce((s, g) => s + g._count._all, 0),
            actifs: etablissements.find((g) => g.actif)?._count._all ?? 0,
            inactifs: etablissements.find((g) => !g.actif)?._count._all ?? 0,
            parType: Object.fromEntries(etablissementsParType.map((g) => [g.type, g._count._all])),
        };
        const m2Utilisateurs = {
            total: utilisateursTotal,
            actifs: utilisateursActifs,
            inactifs: utilisateursTotal - utilisateursActifs,
            parRole: Object.fromEntries(rolesGroupes.map((g) => [g.role, g._count._all])),
        };
        const m3Reservations = Object.fromEntries(reservationsGroupees.map((g) => [g.statut, g._count._all]));
        const m4Formations = { total: formationsTotal, actives: formationsActives, inactives: formationsTotal - formationsActives };
        const scoresParType = new Map();
        for (const s of sessionsSoumises) {
            if (s.scoreGlobal === null)
                continue;
            const type = s.organisation.type;
            if (!scoresParType.has(type))
                scoresParType.set(type, []);
            scoresParType.get(type).push(s.scoreGlobal);
        }
        const m5AutoEvaluation = {
            nombreSessionsSoumises: sessionsSoumises.length,
            scoreMoyenParType: Object.fromEntries([...scoresParType.entries()].map(([type, scores]) => [
                type,
                Math.round((scores.reduce((s, v) => s + v, 0) / scores.length) * 10) / 10,
            ])),
        };
        const parStatutEi = {};
        const parGraviteEi = {};
        let sommeDelaisJours = 0;
        let nombreClotures = 0;
        for (const e of eiBruts) {
            parStatutEi[e.statut] = (parStatutEi[e.statut] ?? 0) + 1;
            if (e.gravite)
                parGraviteEi[e.gravite] = (parGraviteEi[e.gravite] ?? 0) + 1;
            if (e.dateCloture) {
                nombreClotures++;
                sommeDelaisJours += (e.dateCloture.getTime() - e.dateDeclaration.getTime()) / 86_400_000;
            }
        }
        const m6EvenementsIndesirables = {
            total: eiBruts.length,
            parStatut: parStatutEi,
            parGravite: parGraviteEi,
            tauxClotureePct: eiBruts.length ? Math.round((nombreClotures / eiBruts.length) * 10000) / 100 : 0,
            delaiMoyenClotureJours: nombreClotures ? Math.round((sommeDelaisJours / nombreClotures) * 10) / 10 : null,
        };
        const m7MesuresNews = Object.fromEntries(newsGroupees.map((g) => [g.niveauRisque, g._count._all]));
        return {
            etablissements: m1Etablissements,
            utilisateurs: m2Utilisateurs,
            reservationsParStatut: m3Reservations,
            formations: m4Formations,
            autoEvaluation: m5AutoEvaluation,
            evenementsIndesirables: m6EvenementsIndesirables,
            mesuresNewsParNiveau: m7MesuresNews,
        };
    }
};
AnalyticsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], AnalyticsService);
export { AnalyticsService };
//# sourceMappingURL=analytics.service.js.map