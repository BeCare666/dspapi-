import { PrismaService } from "../prisma/prisma.service.js";
import type { CreateFormationDto } from "./dto/create-formation.dto.js";
export declare class FormationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    lister(inclureInactives: boolean): Promise<{
        id: string;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        titre: string;
        dureeHeures: number | null;
        prixIndividuel: number;
        prixGroupe5: number;
        prixGroupe10: number;
    }[]>;
    obtenir(id: string): Promise<{
        id: string;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        titre: string;
        dureeHeures: number | null;
        prixIndividuel: number;
        prixGroupe5: number;
        prixGroupe10: number;
    }>;
    creer(dto: CreateFormationDto): Promise<{
        id: string;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        titre: string;
        dureeHeures: number | null;
        prixIndividuel: number;
        prixGroupe5: number;
        prixGroupe10: number;
    }>;
    mettreAJour(id: string, dto: CreateFormationDto): Promise<{
        id: string;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        titre: string;
        dureeHeures: number | null;
        prixIndividuel: number;
        prixGroupe5: number;
        prixGroupe10: number;
    }>;
    desactiver(id: string): Promise<{
        id: string;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        titre: string;
        dureeHeures: number | null;
        prixIndividuel: number;
        prixGroupe5: number;
        prixGroupe10: number;
    }>;
    reactiver(id: string): Promise<{
        id: string;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        titre: string;
        dureeHeures: number | null;
        prixIndividuel: number;
        prixGroupe5: number;
        prixGroupe10: number;
    }>;
}
