import { SessionsEvaluationService } from "./sessions-evaluation.service.js";
import { DemarrerSessionDto } from "./dto/demarrer-session.dto.js";
import { EnregistrerReponseDto } from "./dto/enregistrer-reponse.dto.js";
import { EvolutionQueryDto, ListSessionsQueryDto } from "./dto/list-sessions-query.dto.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
export declare class SessionsEvaluationController {
    private readonly sessionsService;
    constructor(sessionsService: SessionsEvaluationService);
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
            statut: import("../generated/prisma/enums.js").StatutGrille;
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
        statut: import("../generated/prisma/enums.js").StatutSessionEvaluation;
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
        statut: import("../generated/prisma/enums.js").StatutSessionEvaluation;
        grilleId: string;
        demarreeParId: string;
        soumiseParId: string | null;
        scoreGlobal: number | null;
        dateDebut: Date;
        dateSoumission: Date | null;
    })[]>;
    evolution(query: EvolutionQueryDto, user: JwtAccessPayload): Promise<{
        id: string;
        scoreGlobal: number | null;
        dateSoumission: Date | null;
        grille: {
            nom: string;
            version: number;
        };
    }[]>;
    obtenir(id: string, user: JwtAccessPayload): Promise<{
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
            statut: import("../generated/prisma/enums.js").StatutGrille;
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
        statut: import("../generated/prisma/enums.js").StatutSessionEvaluation;
        grilleId: string;
        demarreeParId: string;
        soumiseParId: string | null;
        scoreGlobal: number | null;
        dateDebut: Date;
        dateSoumission: Date | null;
    }>;
    enregistrerReponse(id: string, elementMesurableId: string, dto: EnregistrerReponseDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        sessionId: string;
        elementMesurableId: string;
        valeur: import("@prisma/client/runtime/client").JsonValue;
        commentaire: string | null;
    }>;
    soumettre(id: string, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        statut: import("../generated/prisma/enums.js").StatutSessionEvaluation;
        grilleId: string;
        demarreeParId: string;
        soumiseParId: string | null;
        scoreGlobal: number | null;
        dateDebut: Date;
        dateSoumission: Date | null;
    }>;
    resultats(id: string, user: JwtAccessPayload): Promise<import("./scoring.util.js").ResultatScore>;
}
