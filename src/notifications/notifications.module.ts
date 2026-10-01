import { Global, Module } from "@nestjs/common";
import { BrevoService } from "./brevo.service.js";
import { MailerService } from "./mailer.service.js";

@Global()
@Module({
  providers: [BrevoService, MailerService],
  exports: [MailerService],
})
export class NotificationsModule {}
