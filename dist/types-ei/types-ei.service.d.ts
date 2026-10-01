import { PrismaService } from "../prisma/prisma.service.js";
import type { CreateTypeEiDto } from "./dto/create-type-ei.dto.js";
export declare class TypesEiService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    lister(inclureInactifs: boolean): Promise<{
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
