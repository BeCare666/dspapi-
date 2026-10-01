import { PrismaService } from "../prisma/prisma.service.js";
export type StatutIntegration = "verifie_ok" | "verifie_erreur" | "configure" | "non_configure";
export interface EtatIntegration {
    nom: string;
    statut: StatutIntegration;
    details: string;
}
export declare class IntegrationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    verifierEtat(): Promise<EtatIntegration[]>;
    private verifierConfig;
}
