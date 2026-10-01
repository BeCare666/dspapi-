import { Module } from "@nestjs/common";
import { PatientsService } from "./patients.service.js";
import { PatientsController } from "./patients.controller.js";
import { ParametrageNewsService } from "./parametrage-news.service.js";
import { AbonnementsModule } from "../abonnements/abonnements.module.js";

@Module({
  imports: [AbonnementsModule],
  controllers: [PatientsController],
  providers: [PatientsService, ParametrageNewsService],
  exports: [PatientsService],
})
export class PatientsModule {}
