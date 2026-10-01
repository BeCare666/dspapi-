import { PrismaService } from "../prisma/prisma.service.js";
export declare class AnalyticsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    obtenirAnalytics(): Promise<{
        etablissements: {
            total: number;
            actifs: number;
            inactifs: number;
            parType: {
                [k: string]: number;
            };
        };
        utilisateurs: {
            total: number;
            actifs: number;
            inactifs: number;
            parRole: {
                [k: string]: number;
            };
        };
        reservationsParStatut: {
            [k: string]: number;
        };
        formations: {
            total: number;
            actives: number;
            inactives: number;
        };
        autoEvaluation: {
            nombreSessionsSoumises: number;
            scoreMoyenParType: {
                [k: string]: number;
            };
        };
        evenementsIndesirables: {
            total: number;
            parStatut: Record<string, number>;
            parGravite: Record<string, number>;
            tauxClotureePct: number;
            delaiMoyenClotureJours: number | null;
        };
        mesuresNewsParNiveau: {
            [k: string]: number;
        };
    }>;
}
