import { PrismaService } from "../prisma/prisma.service.js";
export declare class ParametresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listerTous(): Promise<{
        id: string;
        type: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        valeur: string;
        cle: string;
        valeurDefaut: string;
    }[]>;
    obtenirValeurEntiere(cle: string, defaut: number): Promise<number>;
    modifier(cle: string, valeur: string, acteurId: string): Promise<{
        id: string;
        type: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        valeur: string;
        cle: string;
        valeurDefaut: string;
    }>;
}
