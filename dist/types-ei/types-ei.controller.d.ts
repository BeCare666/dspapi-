import { TypesEiService } from "./types-ei.service.js";
import { CreateTypeEiDto } from "./dto/create-type-ei.dto.js";
export declare class TypesEiController {
    private readonly typesEiService;
    constructor(typesEiService: TypesEiService);
    lister(inclureInactifs?: string): Promise<{
        id: string;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
        libelle: string;
    }[]>;
    creer(dto: CreateTypeEiDto): Promise<{
        id: string;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
        libelle: string;
    }>;
    desactiver(id: string): Promise<{
        id: string;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
        libelle: string;
    }>;
    reactiver(id: string): Promise<{
        id: string;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
        libelle: string;
    }>;
}
