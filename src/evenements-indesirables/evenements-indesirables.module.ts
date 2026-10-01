import { Module } from "@nestjs/common";
import { EvenementsIndesirablesService } from "./evenements-indesirables.service.js";
import { EvenementsIndesirablesController } from "./evenements-indesirables.controller.js";
import { AbonnementsModule } from "../abonnements/abonnements.module.js";

@Module({
  imports: [AbonnementsModule],
  controllers: [EvenementsIndesirablesController],
  providers: [EvenementsIndesirablesService],
})
export class EvenementsIndesirablesModule {}
