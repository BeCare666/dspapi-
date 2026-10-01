import { Global, Module } from "@nestjs/common";
import { NotificationsInternesService } from "./notifications-internes.service.js";
import { NotificationsInternesController } from "./notifications-internes.controller.js";

@Global()
@Module({
  controllers: [NotificationsInternesController],
  providers: [NotificationsInternesService],
  exports: [NotificationsInternesService],
})
export class NotificationsInternesModule {}
