import { PrismaService } from "../prisma/prisma.service.js";
import { StatutAlerte } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
import type { CreerInterventionDto } from "./dto/creer-intervention.dto.js";
import type { ChangerStatutAlerteDto } from "./dto/changer-statut-alerte.dto.js";
import type { ListAlertesQueryDto } from "./dto/list-alertes-query.dto.js";
export declare class AlertesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    lister(query: ListAlertesQueryDto, user: JwtAccessPayload): Promise<({
        patient: {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            organisationId: string;
            serviceId: string | null;
            prenom: string;
            statut: import("../generated/prisma/enums.js").StatutPatient;
            dateNaissance: Date | null;
            sexe: string | null;
            numeroDossier: string | null;
            dateAdmission: Date;
            dateSortie: Date | null;
        };
        mesure: {
            id: string;
            createdAt: Date;
            patientId: string;
            saisieParId: string;
            frequenceRespiratoire: number;
            saturationOxygene: number;
            oxygenoSupplementation: boolean;
            temperature: number;
            pressionArterielleSystolique: number;
            frequenceCardiaque: number;
            niveauConscience: import("../generated/prisma/enums.js").NiveauConscience;
            scoreTotal: number;
            niveauRisque: import("../generated/prisma/enums.js").NiveauRisqueNews;
            dateMesure: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        statut: StatutAlerte;
        patientId: string;
        niveauRisque: import("../generated/prisma/enums.js").NiveauRisqueNews;
        mesureId: string;
    })[]>;
    obtenir(id: string, user: JwtAccessPayload): Promise<{
        patient: {
            id: string;
            nom: string;
            createdAt: Date;
            updatedAt: Date;
            organisationId: string;
            serviceId: string | null;
            prenom: string;
            statut: import("../generated/prisma/enums.js").StatutPatient;
            dateNaissance: Date | null;
            sexe: string | null;
            numeroDossier: string | null;
            dateAdmission: Date;
            dateSortie: Date | null;
        };
        interventions: {
            id: string;
            createdAt: Date;
            utilisateurId: string;
            alerteId: string;
            note: string;
        }[];
        mesure: {
            id: string;
            createdAt: Date;
            patientId: string;
            saisieParId: string;
            frequenceRespiratoire: number;
            saturationOxygene: number;
            oxygenoSupplementation: boolean;
            temperature: number;
            pressionArterielleSystolique: number;
            frequenceCardiaque: number;
            niveauConscience: import("../generated/prisma/enums.js").NiveauConscience;
            scoreTotal: number;
            niveauRisque: import("../generated/prisma/enums.js").NiveauRisqueNews;
            dateMesure: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        statut: StatutAlerte;
        patientId: string;
        niveauRisque: import("../generated/prisma/enums.js").NiveauRisqueNews;
        mesureId: string;
    }>;
    ajouterIntervention(alerteId: string, dto: CreerInterventionDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        utilisateurId: string;
        alerteId: string;
        note: string;
    }>;
    changerStatut(alerteId: string, dto: ChangerStatutAlerteDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        statut: StatutAlerte;
        patientId: string;
        niveauRisque: import("../generated/prisma/enums.js").NiveauRisqueNews;
        mesureId: string;
    }>;
    private exigerOrganisation;
    private verifierAppartenance;
}
