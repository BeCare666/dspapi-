import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { AbonnementsService } from "./abonnements.service.js";

@Injectable()
export class ExpirationEssaisScheduler {
  private readonly logger = new Logger(ExpirationEssaisScheduler.name);

  constructor(private readonly abonnements: AbonnementsService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleCron() {
    const nombre = await this.abonnements.expirerEchus();
    if (nombre > 0) {
      this.logger.log(`${nombre} essai(s) ou abonnement(s) échu(s) basculé(s) en EXPIRE`);
    }
  }
}
