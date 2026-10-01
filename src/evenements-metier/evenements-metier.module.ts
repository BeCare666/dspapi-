import { Global, Module } from "@nestjs/common";
import { EvenementsMetierService } from "./evenements-metier.service.js";
import { NotificationsListener } from "./notifications.listener.js";

@Global()
@Module({
  providers: [EvenementsMetierService, NotificationsListener],
  exports: [EvenementsMetierService],
})
export class EvenementsMetierModule {}
