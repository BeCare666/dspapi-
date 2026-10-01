import type { Response } from "express";
import { EvenementsIndesirablesService } from "./evenements-indesirables.service.js";
import { DeclarerEiDto } from "./dto/declarer-ei.dto.js";
import { QualifierEiDto } from "./dto/qualifier-ei.dto.js";
import { CreerCauseDto } from "./dto/creer-cause.dto.js";
import { CreerActionCorrectiveDto } from "./dto/creer-action-corrective.dto.js";
import { ChangerStatutActionDto } from "./dto/changer-statut-action.dto.js";
import { ChangerStatutEiDto } from "./dto/changer-statut-ei.dto.js";
import { ListEiQueryDto } from "./dto/list-ei-query.dto.js";
import { ExportEiQueryDto } from "./dto/export-ei-query.dto.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
export declare class EvenementsIndesirablesController {
    private readonly evenementsService;
    constructor(evenementsService: EvenementsIndesirablesService);
    declarer(dto: DeclarerEiDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        serviceId: string | null;
        description: string;
        statut: import("../generated/prisma/enums.js").StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: import("../generated/prisma/enums.js").GraviteEi | null;
        dateDeclaration: Date;
        dateCloture: Date | null;
    }>;
    lister(query: ListEiQueryDto, user: JwtAccessPayload): Promise<({
        service: {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            organisationId: string;
            description: string | null;
        } | null;
        typeEi: {
            id: string;
            actif: boolean;
            createdAt: Date;
            updatedAt: Date;
            libelle: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        serviceId: string | null;
        description: string;
        statut: import("../generated/prisma/enums.js").StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: import("../generated/prisma/enums.js").GraviteEi | null;
        dateDeclaration: Date;
        dateCloture: Date | null;
    })[]>;
    fileAttente(user: JwtAccessPayload): Promise<({
        service: {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            organisationId: string;
            description: string | null;
        } | null;
        typeEi: {
            id: string;
            actif: boolean;
            createdAt: Date;
            updatedAt: Date;
            libelle: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        serviceId: string | null;
        description: string;
        statut: import("../generated/prisma/enums.js").StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: import("../generated/prisma/enums.js").GraviteEi | null;
        dateDeclaration: Date;
        dateCloture: Date | null;
    })[]>;
    tableauDeBord(user: JwtAccessPayload): Promise<{
        total: number;
        parStatut: Record<string, number>;
        parGravite: Record<string, number>;
        parService: Record<string, number>;
        tauxCloture: number;
        delaiMoyenClotureJours: number | null;
    }>;
    exporter(query: ExportEiQueryDto, user: JwtAccessPayload): Promise<({
        service: {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            organisationId: string;
            description: string | null;
        } | null;
        typeEi: {
            id: string;
            actif: boolean;
            createdAt: Date;
            updatedAt: Date;
            libelle: string;
        } | null;
        causes: {
            id: string;
            type: import("../generated/prisma/enums.js").TypeCause;
            createdAt: Date;
            description: string;
            evenementId: string;
        }[];
        actionsCorrectives: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            statut: import("../generated/prisma/enums.js").StatutActionCorrective;
            evenementId: string;
            responsableId: string;
            echeance: Date;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        serviceId: string | null;
        description: string;
        statut: import("../generated/prisma/enums.js").StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: import("../generated/prisma/enums.js").GraviteEi | null;
        dateDeclaration: Date;
        dateCloture: Date | null;
    })[]>;
    exporterCsv(query: ExportEiQueryDto, user: JwtAccessPayload, res: Response): Promise<void>;
    obtenir(id: string, user: JwtAccessPayload): Promise<{
        service: {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            organisationId: string;
            description: string | null;
        } | null;
        critere: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            ordre: number;
            code: string;
            libelle: string;
            normeId: string;
        } | null;
        typeEi: {
            id: string;
            actif: boolean;
            createdAt: Date;
            updatedAt: Date;
            libelle: string;
        } | null;
        declarePar: {
            id: string;
            nom: string;
            email: string;
            prenom: string;
        };
        causes: {
            id: string;
            type: import("../generated/prisma/enums.js").TypeCause;
            createdAt: Date;
            description: string;
            evenementId: string;
        }[];
        actionsCorrectives: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            statut: import("../generated/prisma/enums.js").StatutActionCorrective;
            evenementId: string;
            responsableId: string;
            echeance: Date;
        }[];
        transitions: {
            id: string;
            createdAt: Date;
            utilisateurId: string;
            evenementId: string;
            ancienStatut: import("../generated/prisma/enums.js").StatutEi;
            nouveauStatut: import("../generated/prisma/enums.js").StatutEi;
        }[];
        piecesJointes: {
            id: string;
            createdAt: Date;
            url: string;
            evenementId: string;
            cloudinaryId: string;
            nomFichier: string;
            typeMime: string | null;
            tailleOctets: number | null;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        serviceId: string | null;
        description: string;
        statut: import("../generated/prisma/enums.js").StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: import("../generated/prisma/enums.js").GraviteEi | null;
        dateDeclaration: Date;
        dateCloture: Date | null;
    }>;
    qualifier(id: string, dto: QualifierEiDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        serviceId: string | null;
        description: string;
        statut: import("../generated/prisma/enums.js").StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: import("../generated/prisma/enums.js").GraviteEi | null;
        dateDeclaration: Date;
        dateCloture: Date | null;
    }>;
    ajouterCause(id: string, dto: CreerCauseDto, user: JwtAccessPayload): Promise<{
        id: string;
        type: import("../generated/prisma/enums.js").TypeCause;
        createdAt: Date;
        description: string;
        evenementId: string;
    }>;
    ajouterActionCorrective(id: string, dto: CreerActionCorrectiveDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        statut: import("../generated/prisma/enums.js").StatutActionCorrective;
        evenementId: string;
        responsableId: string;
        echeance: Date;
    }>;
    changerStatutAction(id: string, actionId: string, dto: ChangerStatutActionDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        statut: import("../generated/prisma/enums.js").StatutActionCorrective;
        evenementId: string;
        responsableId: string;
        echeance: Date;
    }>;
    changerStatut(id: string, dto: ChangerStatutEiDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        serviceId: string | null;
        description: string;
        statut: import("../generated/prisma/enums.js").StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: import("../generated/prisma/enums.js").GraviteEi | null;
        dateDeclaration: Date;
        dateCloture: Date | null;
    }>;
    ajouterPieceJointe(id: string, fichier: Express.Multer.File, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        url: string;
        evenementId: string;
        cloudinaryId: string;
        nomFichier: string;
        typeMime: string | null;
        tailleOctets: number | null;
    }>;
}
