import { Module } from "@nestjs/common";
import { AlertesService } from "./alertes.service.js";
import { AlertesController } from "./alertes.controller.js";
import { PatientsModule } from "../patients/patients.module.js";
import { AbonnementsModule } from "../abonnements/abonnements.module.js";

@Module({
  imports: [PatientsModule, AbonnementsModule],
  controllers: [AlertesController],
  providers: [AlertesService],
})
export class AlertesModule {}
