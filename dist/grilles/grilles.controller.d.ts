import { GrillesService } from "./grilles.service.js";
import { CreateGrilleDto } from "./dto/create-grille.dto.js";
import { ListGrillesQueryDto } from "./dto/list-grilles-query.dto.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
export declare class GrillesController {
    private readonly grillesService;
    constructor(grillesService: GrillesService);
    lister(query: ListGrillesQueryDto, user: JwtAccessPayload): Promise<{
        id: string;
        nom: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        createdAt: Date;
        updatedAt: Date;
        version: number;
        statut: import("../generated/prisma/enums.js").StatutGrille;
        publieeLe: Date | null;
    }[]>;
    obtenir(id: string, user: JwtAccessPayload): Promise<{
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
        statut: import("../generated/prisma/enums.js").StatutGrille;
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
        statut: import("../generated/prisma/enums.js").StatutGrille;
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
        statut: import("../generated/prisma/enums.js").StatutGrille;
        publieeLe: Date | null;
    }>;
    publier(id: string): Promise<{
        id: string;
        nom: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        createdAt: Date;
        updatedAt: Date;
        version: number;
        statut: import("../generated/prisma/enums.js").StatutGrille;
        publieeLe: Date | null;
    }>;
    archiver(id: string): Promise<{
        id: string;
        nom: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        createdAt: Date;
        updatedAt: Date;
        version: number;
        statut: import("../generated/prisma/enums.js").StatutGrille;
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
        statut: import("../generated/prisma/enums.js").StatutGrille;
        publieeLe: Date | null;
    }>;
}
