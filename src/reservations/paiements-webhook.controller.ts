import { Body, Controller, HttpCode, HttpStatus, Logger, Post, Headers } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { KkiapayService } from "../paiements/kkiapay.service.js";
import { ReservationsService } from "./reservations.service.js";
import { AbonnementsService } from "../abonnements/abonnements.service.js";
import { StatutPaiementAbonnement, StatutReservation } from "../generated/prisma/enums.js";
import { Public } from "../auth/decorators/public.decorator.js";

// Champs documentés du webhook KKiaPay (docs.kkiapay.me, « Webhook ») :
// `partnerId` reprend l'option `partnerId` passée au widget.
interface PayloadWebhookKkiapay {
  transactionId: string;
  isPaymentSucces: boolean;
  amount: number;
  partnerId?: string;
  event: "transaction.success" | "transaction.failed";
}

// Référence transmise au widget : RES-<id réservation> ou ABO-<id paiement d'abonnement>.
export const PREFIXE_RESERVATION = "RES-";
export const PREFIXE_ABONNEMENT = "ABO-";

// §10.4 — webhook KKiaPay : couvre les paiements finalisés après la fermeture
// de la page (ex. validation USSD tardive). La référence `partnerId` permet de
// retrouver la réservation ou l'abonnement concerné ; la transaction est
// toujours revérifiée auprès de l'API KKiaPay (RM11) avant confirmation.
// Signature : en-tête `x-kkiapay-secret` = secret configuré dans le tableau de
// bord KKiaPay (KKIAPAY_SECRET).
@Controller("paiements/kkiapay")
export class PaiementsWebhookController {
  private readonly logger = new Logger(PaiementsWebhookController.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly kkiapay: KkiapayService,
    private readonly reservationsService: ReservationsService,
    private readonly abonnementsService: AbonnementsService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post("webhook")
  async webhook(@Body() payload: PayloadWebhookKkiapay, @Headers("x-kkiapay-secret") signature?: string) {
    if (!signature || signature !== process.env.KKIAPAY_SECRET) {
      this.logger.warn("Webhook KKiaPay reçu avec une signature invalide — ignoré");
      return { received: true };
    }
    if (payload.event !== "transaction.success" || !payload.isPaymentSucces || !payload.transactionId) {
      return { received: true };
    }

    try {
      const reference = payload.partnerId ?? "";
      if (reference.startsWith(PREFIXE_ABONNEMENT)) {
        await this.confirmerAbonnement(reference.slice(PREFIXE_ABONNEMENT.length), payload.transactionId);
      } else {
        const reservationId = reference.startsWith(PREFIXE_RESERVATION) ? reference.slice(PREFIXE_RESERVATION.length) : null;
        await this.confirmerReservation(reservationId, payload.transactionId);
      }
    } catch (erreur) {
      this.logger.error(`Échec de traitement du webhook KKiaPay ${payload.transactionId} : ${erreur}`);
    }
    return { received: true };
  }

  private async confirmerReservation(reservationId: string | null, transactionId: string) {
    const reservation = reservationId
      ? await this.prisma.reservation.findUnique({ where: { id: reservationId } })
      : await this.prisma.reservation.findFirst({ where: { kkiapayTransactionId: transactionId } });
    if (!reservation) {
      this.logger.warn(`Webhook KKiaPay : aucune réservation pour la transaction ${transactionId}`);
      return;
    }
    if (reservation.statut !== StatutReservation.ATTENTE_PAIEMENT) return;
    const transaction = await this.kkiapay.verifierTransaction(transactionId);
    if (transaction.status === "SUCCESS" && Number(transaction.amount) === reservation.tarifApplique) {
      await this.reservationsService.confirmerPaiement(reservation, transactionId);
    }
  }

  private async confirmerAbonnement(paiementId: string, transactionId: string) {
    const paiement = await this.prisma.paiementAbonnement.findUnique({ where: { id: paiementId } });
    if (!paiement) {
      this.logger.warn(`Webhook KKiaPay : aucun paiement d'abonnement ${paiementId}`);
      return;
    }
    if (paiement.statut === StatutPaiementAbonnement.PAYE) return;
    const transaction = await this.kkiapay.verifierTransaction(transactionId);
    if (transaction.status === "SUCCESS" && Number(transaction.amount) === paiement.montant) {
      await this.abonnementsService.confirmerPaiement(paiement, transactionId);
    }
  }
}
