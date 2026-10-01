import { FormationsService } from "./formations.service.js";
import { CreateFormationDto } from "./dto/create-formation.dto.js";
export declare class FormationsController {
    private readonly formationsService;
    constructor(formationsService: FormationsService);
    lister(inclureInactives?: string): Promise<{
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
