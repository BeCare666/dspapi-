import { PrismaService } from "../prisma/prisma.service.js";
import { StatutGrille } from "../generated/prisma/enums.js";
import type { CreateGrilleDto } from "./dto/create-grille.dto.js";
import type { ListGrillesQueryDto } from "./dto/list-grilles-query.dto.js";
export declare const grilleStructureInclude: {
    domaines: {
        orderBy: {
            ordre: "asc";
        };
        include: {
            normes: {
                orderBy: {
                    ordre: "asc";
                };
                include: {
                    criteres: {
                        orderBy: {
                            ordre: "asc";
                        };
                        include: {
                            elementsMesurables: {
                                orderBy: {
                                    ordre: "asc";
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare class GrillesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    lister(query: ListGrillesQueryDto, estAdmin: boolean): Promise<{
        id: string;
        nom: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        createdAt: Date;
        updatedAt: Date;
        version: number;
        statut: StatutGrille;
        publieeLe: Date | null;
    }[]>;
    obtenir(id: string, estAdmin: boolean): Promise<{
        domaines: ({
            normes: ({
                criteres: ({
                    elementsMesurables: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        ordre: number;
                        libelle: string;
                        critereId: string;
                        typeReponse: import("../generated/prisma/enums.js").TypeReponse;
                        optionsChoix: import("@prisma/client/runtime/client").JsonValue | null;
                    }[];
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    ordre: number;
                    code: string;
                    libelle: string;
                    normeId: string;
                })[];
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                ordre: number;
                domaineId: string;
                code: string;
                libelle: string;
            })[];
        } & {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            grilleId: string;
            ordre: number;
        })[];
    } & {
        id: string;
        nom: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        createdAt: Date;
        updatedAt: Date;
        version: number;
        statut: StatutGrille;
        publieeLe: Date | null;
    }>;
    creer(dto: CreateGrilleDto): Promise<{
        domaines: ({
            normes: ({
                criteres: ({
                    elementsMesurables: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        ordre: number;
                        libelle: string;
                        critereId: string;
                        typeReponse: import("../generated/prisma/enums.js").TypeReponse;
                        optionsChoix: import("@prisma/client/runtime/client").JsonValue | null;
                    }[];
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    ordre: number;
                    code: string;
                    libelle: string;
                    normeId: string;
                })[];
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                ordre: number;
                domaineId: string;
                code: string;
                libelle: string;
            })[];
        } & {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            grilleId: string;
            ordre: number;
        })[];
    } & {
        id: string;
        nom: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        createdAt: Date;
        updatedAt: Date;
        version: number;
        statut: StatutGrille;
        publieeLe: Date | null;
    }>;
    mettreAJour(id: string, dto: CreateGrilleDto): Promise<{
        domaines: ({
            normes: ({
                criteres: ({
                    elementsMesurables: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        ordre: number;
                        libelle: string;
                        critereId: string;
                        typeReponse: import("../generated/prisma/enums.js").TypeReponse;
                        optionsChoix: import("@prisma/client/runtime/client").JsonValue | null;
                    }[];
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    ordre: number;
                    code: string;
                    libelle: string;
                    normeId: string;
                })[];
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                ordre: number;
                domaineId: string;
                code: string;
                libelle: string;
            })[];
        } & {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            grilleId: string;
            ordre: number;
        })[];
    } & {
        id: string;
        nom: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        createdAt: Date;
        updatedAt: Date;
        version: number;
        statut: StatutGrille;
        publieeLe: Date | null;
    }>;
    publier(id: string): Promise<{
        id: string;
        nom: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        createdAt: Date;
        updatedAt: Date;
        version: number;
        statut: StatutGrille;
        publieeLe: Date | null;
    }>;
    archiver(id: string): Promise<{
        id: string;
        nom: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        createdAt: Date;
        updatedAt: Date;
        version: number;
        statut: StatutGrille;
        publieeLe: Date | null;
    }>;
    nouvelleVersion(id: string): Promise<{
        domaines: ({
            normes: ({
                criteres: ({
                    elementsMesurables: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        ordre: number;
                        libelle: string;
                        critereId: string;
                        typeReponse: import("../generated/prisma/enums.js").TypeReponse;
                        optionsChoix: import("@prisma/client/runtime/client").JsonValue | null;
                    }[];
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    ordre: number;
                    code: string;
                    libelle: string;
                    normeId: string;
                })[];
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                ordre: number;
                domaineId: string;
                code: string;
                libelle: string;
            })[];
        } & {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            grilleId: string;
            ordre: number;
        })[];
    } & {
        id: string;
        nom: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        createdAt: Date;
        updatedAt: Date;
        version: number;
        statut: StatutGrille;
        publieeLe: Date | null;
    }>;
    private prochaineVersion;
    private mapDomaine;
}
