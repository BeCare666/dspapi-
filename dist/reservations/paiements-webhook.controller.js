var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PaiementsWebhookController_1;
import { Body, Controller, HttpCode, HttpStatus, Logger, Post, Headers } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { KkiapayService } from "../paiements/kkiapay.service.js";
import { ReservationsService } from "./reservations.service.js";
import { StatutReservation } from "../generated/prisma/enums.js";
import { Public } from "../auth/decorators/public.decorator.js";
let PaiementsWebhookController = PaiementsWebhookController_1 = class PaiementsWebhookController {
    prisma;
    kkiapay;
    reservationsService;
    logger = new Logger(PaiementsWebhookController_1.name);
    constructor(prisma, kkiapay, reservationsService) {
        this.prisma = prisma;
        this.kkiapay = kkiapay;
        this.reservationsService = reservationsService;
    }
    async webhook(payload, signature) {
        if (!signature || signature !== process.env.KKIAPAY_SECRET) {
            this.logger.warn("Webhook KKiaPay reçu avec une signature invalide — ignoré");
            return { received: true };
        }
        if (payload.event !== "transaction.success" || !payload.isPaymentSucces) {
            return { received: true };
        }
        const reservation = await this.prisma.reservation.findFirst({
            where: { kkiapayTransactionId: payload.transactionId },
        });
        if (reservation && reservation.statut === StatutReservation.ATTENTE_PAIEMENT) {
            try {
                const transaction = await this.kkiapay.verifierTransaction(payload.transactionId);
                if (transaction.status === "SUCCESS" && Number(transaction.amount) === reservation.tarifApplique) {
                    await this.reservationsService.confirmerPaiement(reservation, payload.transactionId);
                }
            }
            catch (erreur) {
                this.logger.error(`Échec de vérification KKiaPay depuis le webhook : ${erreur}`);
            }
        }
        else if (!reservation) {
            this.logger.warn(`Webhook KKiaPay pour une transaction sans réservation associée (${payload.transactionId}) — ignoré pour l'instant`);
        }
        return { received: true };
    }
};
__decorate([
    Public(),
    HttpCode(HttpStatus.OK),
    Post("webhook"),
    __param(0, Body()),
    __param(1, Headers("x-kkiapay-secret")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PaiementsWebhookController.prototype, "webhook", null);
PaiementsWebhookController = PaiementsWebhookController_1 = __decorate([
    Controller("paiements/kkiapay"),
    __metadata("design:paramtypes", [PrismaService,
        KkiapayService,
        ReservationsService])
], PaiementsWebhookController);
export { PaiementsWebhookController };
//# sourceMappingURL=paiements-webhook.controller.js.map