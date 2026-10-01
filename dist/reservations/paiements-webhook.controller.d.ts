import { PrismaService } from "../prisma/prisma.service.js";
import { KkiapayService } from "../paiements/kkiapay.service.js";
import { ReservationsService } from "./reservations.service.js";
interface PayloadWebhookKkiapay {
    transactionId: string;
    isPaymentSucces: boolean;
    amount: number;
    event: "transaction.success" | "transaction.failed";
}
export declare class PaiementsWebhookController {
    private readonly prisma;
    private readonly kkiapay;
    private readonly reservationsService;
    private readonly logger;
    constructor(prisma: PrismaService, kkiapay: KkiapayService, reservationsService: ReservationsService);
    webhook(payload: PayloadWebhookKkiapay, signature?: string): Promise<{
        received: boolean;
    }>;
}
export {};
