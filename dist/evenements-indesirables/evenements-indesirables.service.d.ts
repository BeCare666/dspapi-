import { PrismaService } from "../prisma/prisma.service.js";
import { AbonnementsService } from "../abonnements/abonnements.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { CloudinaryService } from "../cloudinary/cloudinary.service.js";
import { GraviteEi, StatutEi } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
import type { DeclarerEiDto } from "./dto/declarer-ei.dto.js";
import type { QualifierEiDto } from "./dto/qualifier-ei.dto.js";
import type { CreerCauseDto } from "./dto/creer-cause.dto.js";
import type { CreerActionCorrectiveDto } from "./dto/creer-action-corrective.dto.js";
import type { ChangerStatutActionDto } from "./dto/changer-statut-action.dto.js";
import type { ChangerStatutEiDto } from "./dto/changer-statut-ei.dto.js";
import type { ListEiQueryDto } from "./dto/list-ei-query.dto.js";
import type { ExportEiQueryDto } from "./dto/export-ei-query.dto.js";
export declare class EvenementsIndesirablesService {
    private readonly prisma;
    private readonly abonnements;
    private readonly mailer;
    private readonly cloudinary;
    constructor(prisma: PrismaService, abonnements: AbonnementsService, mailer: MailerService, cloudinary: CloudinaryService);
    declarer(dto: DeclarerEiDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        serviceId: string | null;
        description: string;
        statut: StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: GraviteEi | null;
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
        statut: StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: GraviteEi | null;
        dateDeclaration: Date;
        dateCloture: Date | null;
    })[]>;
    fileAttenteQualification(user: JwtAccessPayload): Promise<({
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
        statut: StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: GraviteEi | null;
        dateDeclaration: Date;
        dateCloture: Date | null;
    })[]>;
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
            ancienStatut: StatutEi;
            nouveauStatut: StatutEi;
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
        statut: StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: GraviteEi | null;
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
        statut: StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: GraviteEi | null;
        dateDeclaration: Date;
        dateCloture: Date | null;
    }>;
    ajouterCause(evenementId: string, dto: CreerCauseDto, user: JwtAccessPayload): Promise<{
        id: string;
        type: import("../generated/prisma/enums.js").TypeCause;
        createdAt: Date;
        description: string;
        evenementId: string;
    }>;
    ajouterActionCorrective(evenementId: string, dto: CreerActionCorrectiveDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        statut: import("../generated/prisma/enums.js").StatutActionCorrective;
        evenementId: string;
        responsableId: string;
        echeance: Date;
    }>;
    changerStatutAction(evenementId: string, actionId: string, dto: ChangerStatutActionDto, user: JwtAccessPayload): Promise<{
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
        statut: StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: GraviteEi | null;
        dateDeclaration: Date;
        dateCloture: Date | null;
    }>;
    ajouterPieceJointe(evenementId: string, fichier: {
        buffer: Buffer;
        mimetype: string;
        originalname: string;
        size: number;
    }, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        url: string;
        evenementId: string;
        cloudinaryId: string;
        nomFichier: string;
        typeMime: string | null;
        tailleOctets: number | null;
    }>;
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
        statut: StatutEi;
        critereId: string | null;
        typeEiId: string | null;
        declareParId: string;
        gravite: GraviteEi | null;
        dateDeclaration: Date;
        dateCloture: Date | null;
    })[]>;
    private notifierGraviteElevee;
    private exigerOrganisation;
    private verifierAppartenance;
}
