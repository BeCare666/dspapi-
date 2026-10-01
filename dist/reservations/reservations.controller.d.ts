import { ReservationsService } from "./reservations.service.js";
import { CreerReservationDto } from "./dto/creer-reservation.dto.js";
import { VerifierPaiementDto } from "./dto/verifier-paiement.dto.js";
import { FixerDateRdvDto } from "./dto/fixer-date-rdv.dto.js";
import { MarquerRealiseeDto } from "./dto/marquer-realisee.dto.js";
import { ListReservationsQueryDto } from "./dto/list-reservations-query.dto.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
export declare class ReservationsController {
    private readonly reservationsService;
    constructor(reservationsService: ReservationsService);
    creer(dto: CreerReservationDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string | null;
        utilisateurId: string;
        statut: import("../generated/prisma/enums.js").StatutReservation;
        formationId: string;
        formule: import("../generated/prisma/enums.js").FormuleFormation;
        tarifApplique: number;
        kkiapayTransactionId: string | null;
        dateRdv: Date | null;
        presenceConfirmee: boolean;
    }>;
    lister(query: ListReservationsQueryDto, user: JwtAccessPayload): Promise<({
        organisation: {
            id: string;
            nom: string;
        } | null;
        utilisateur: {
            id: string;
            nom: string;
            email: string;
            prenom: string;
        };
        formation: {
            id: string;
            actif: boolean;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            titre: string;
            dureeHeures: number | null;
            prixIndividuel: number;
            prixGroupe5: number;
            prixGroupe10: number;
        };
        facture: {
            id: string;
            createdAt: Date;
            reservationId: string;
            numero: string;
            montant: number;
            emiseLe: Date;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string | null;
        utilisateurId: string;
        statut: import("../generated/prisma/enums.js").StatutReservation;
        formationId: string;
        formule: import("../generated/prisma/enums.js").FormuleFormation;
        tarifApplique: number;
        kkiapayTransactionId: string | null;
        dateRdv: Date | null;
        presenceConfirmee: boolean;
    })[]>;
    obtenir(id: string, user: JwtAccessPayload): Promise<{
        formation: {
            id: string;
            actif: boolean;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            titre: string;
            dureeHeures: number | null;
            prixIndividuel: number;
            prixGroupe5: number;
            prixGroupe10: number;
        };
        facture: {
            id: string;
            createdAt: Date;
            reservationId: string;
            numero: string;
            montant: number;
            emiseLe: Date;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string | null;
        utilisateurId: string;
        statut: import("../generated/prisma/enums.js").StatutReservation;
        formationId: string;
        formule: import("../generated/prisma/enums.js").FormuleFormation;
        tarifApplique: number;
        kkiapayTransactionId: string | null;
        dateRdv: Date | null;
        presenceConfirmee: boolean;
    }>;
    verifierPaiement(id: string, dto: VerifierPaiementDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string | null;
        utilisateurId: string;
        statut: import("../generated/prisma/enums.js").StatutReservation;
        formationId: string;
        formule: import("../generated/prisma/enums.js").FormuleFormation;
        tarifApplique: number;
        kkiapayTransactionId: string | null;
        dateRdv: Date | null;
        presenceConfirmee: boolean;
    }>;
    annuler(id: string, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string | null;
        utilisateurId: string;
        statut: import("../generated/prisma/enums.js").StatutReservation;
        formationId: string;
        formule: import("../generated/prisma/enums.js").FormuleFormation;
        tarifApplique: number;
        kkiapayTransactionId: string | null;
        dateRdv: Date | null;
        presenceConfirmee: boolean;
    }>;
    fixerDateRdv(id: string, dto: FixerDateRdvDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string | null;
        utilisateurId: string;
        statut: import("../generated/prisma/enums.js").StatutReservation;
        formationId: string;
        formule: import("../generated/prisma/enums.js").FormuleFormation;
        tarifApplique: number;
        kkiapayTransactionId: string | null;
        dateRdv: Date | null;
        presenceConfirmee: boolean;
    }>;
    marquerRealisee(id: string, dto: MarquerRealiseeDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string | null;
        utilisateurId: string;
        statut: import("../generated/prisma/enums.js").StatutReservation;
        formationId: string;
        formule: import("../generated/prisma/enums.js").FormuleFormation;
        tarifApplique: number;
        kkiapayTransactionId: string | null;
        dateRdv: Date | null;
        presenceConfirmee: boolean;
    }>;
}
