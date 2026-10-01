import { PrismaService } from "../prisma/prisma.service.js";
export interface LigneAlertePlateforme {
    organisationId: string;
    organisationNom: string;
    source: "NEWS" | "EI";
    niveau: string;
    statut: string;
    nombre: number;
    depuisLe: string;
}
export declare class AlertesPlateformeService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    obtenirAlertes(): Promise<{
        lignes: LigneAlertePlateforme[];
        totalNews: number;
        totalEi: number;
    }>;
}
