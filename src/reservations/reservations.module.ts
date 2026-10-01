import { Module } from "@nestjs/common";
import { ReservationsService } from "./reservations.service.js";
import { ReservationsController } from "./reservations.controller.js";
import { PaiementsWebhookController } from "./paiements-webhook.controller.js";
import { AbonnementsModule } from "../abonnements/abonnements.module.js";

@Module({
  imports: [AbonnementsModule],
  controllers: [ReservationsController, PaiementsWebhookController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
