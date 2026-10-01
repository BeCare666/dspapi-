import { PrismaService } from "../prisma/prisma.service.js";
import { StatutGrille, StatutSessionEvaluation } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
import type { DemarrerSessionDto } from "./dto/demarrer-session.dto.js";
import type { EnregistrerReponseDto } from "./dto/enregistrer-reponse.dto.js";
import type { EvolutionQueryDto, ListSessionsQueryDto } from "./dto/list-sessions-query.dto.js";
export declare class SessionsEvaluationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    demarrer(dto: DemarrerSessionDto, user: JwtAccessPayload): Promise<{
        grille: {
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
        };
        reponses: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            sessionId: string;
            elementMesurableId: string;
            valeur: import("@prisma/client/runtime/client").JsonValue;
            commentaire: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        statut: StatutSessionEvaluation;
        grilleId: string;
        demarreeParId: string;
        soumiseParId: string | null;
        scoreGlobal: number | null;
        dateDebut: Date;
        dateSoumission: Date | null;
    }>;
    lister(query: ListSessionsQueryDto, user: JwtAccessPayload): Promise<({
        grille: {
            id: string;
            nom: string;
            type: import("../generated/prisma/enums.js").TypeEtablissement;
            version: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        statut: StatutSessionEvaluation;
        grilleId: string;
        demarreeParId: string;
        soumiseParId: string | null;
        scoreGlobal: number | null;
        dateDebut: Date;
        dateSoumission: Date | null;
    })[]>;
    obtenir(sessionId: string, user: JwtAccessPayload): Promise<{
        grille: {
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
        };
        reponses: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            sessionId: string;
            elementMesurableId: string;
            valeur: import("@prisma/client/runtime/client").JsonValue;
            commentaire: string | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        statut: StatutSessionEvaluation;
        grilleId: string;
        demarreeParId: string;
        soumiseParId: string | null;
        scoreGlobal: number | null;
        dateDebut: Date;
        dateSoumission: Date | null;
    }>;
    enregistrerReponse(sessionId: string, elementMesurableId: string, dto: EnregistrerReponseDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        sessionId: string;
        elementMesurableId: string;
        valeur: import("@prisma/client/runtime/client").JsonValue;
        commentaire: string | null;
    }>;
    soumettre(sessionId: string, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        statut: StatutSessionEvaluation;
        grilleId: string;
        demarreeParId: string;
        soumiseParId: string | null;
        scoreGlobal: number | null;
        dateDebut: Date;
        dateSoumission: Date | null;
    }>;
    resultats(sessionId: string, user: JwtAccessPayload): Promise<import("./scoring.util.js").ResultatScore>;
    evolution(query: EvolutionQueryDto, user: JwtAccessPayload): Promise<{
        id: string;
        scoreGlobal: number | null;
        dateSoumission: Date | null;
        grille: {
            nom: string;
            version: number;
        };
    }[]>;
    private exigerOrganisation;
    private verifierAppartenance;
}
