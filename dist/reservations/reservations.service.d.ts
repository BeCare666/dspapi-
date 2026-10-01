import { PrismaService } from "../prisma/prisma.service.js";
import { KkiapayService } from "../paiements/kkiapay.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { NotificationsInternesService } from "../notifications-internes/notifications-internes.service.js";
import { FormuleFormation, StatutReservation } from "../generated/prisma/enums.js";
import type { Reservation } from "../generated/prisma/client.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
import type { CreerReservationDto } from "./dto/creer-reservation.dto.js";
import type { VerifierPaiementDto } from "./dto/verifier-paiement.dto.js";
import type { FixerDateRdvDto } from "./dto/fixer-date-rdv.dto.js";
import type { MarquerRealiseeDto } from "./dto/marquer-realisee.dto.js";
import type { ListReservationsQueryDto } from "./dto/list-reservations-query.dto.js";
export declare class ReservationsService {
    private readonly prisma;
    private readonly kkiapay;
    private readonly mailer;
    private readonly notificationsInternes;
    private readonly logger;
    constructor(prisma: PrismaService, kkiapay: KkiapayService, mailer: MailerService, notificationsInternes: NotificationsInternesService);
    creer(dto: CreerReservationDto, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string | null;
        utilisateurId: string;
        statut: StatutReservation;
        formationId: string;
        formule: FormuleFormation;
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
        statut: StatutReservation;
        formationId: string;
        formule: FormuleFormation;
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
        statut: StatutReservation;
        formationId: string;
        formule: FormuleFormation;
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
        statut: StatutReservation;
        formationId: string;
        formule: FormuleFormation;
        tarifApplique: number;
        kkiapayTransactionId: string | null;
        dateRdv: Date | null;
        presenceConfirmee: boolean;
    }>;
    confirmerPaiement(reservation: Reservation, transactionId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string | null;
        utilisateurId: string;
        statut: StatutReservation;
        formationId: string;
        formule: FormuleFormation;
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
        statut: StatutReservation;
        formationId: string;
        formule: FormuleFormation;
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
        statut: StatutReservation;
        formationId: string;
        formule: FormuleFormation;
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
        statut: StatutReservation;
        formationId: string;
        formule: FormuleFormation;
        tarifApplique: number;
        kkiapayTransactionId: string | null;
        dateRdv: Date | null;
        presenceConfirmee: boolean;
    }>;
    private tarifPourFormule;
    private genererNumeroFacture;
    private notifierUtilisateur;
    private verifierAcces;
}
