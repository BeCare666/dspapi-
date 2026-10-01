import { Module } from "@nestjs/common";
import { AlertesPlateformeService } from "./alertes-plateforme.service.js";
import { AlertesPlateformeController } from "./alertes-plateforme.controller.js";

@Module({
  controllers: [AlertesPlateformeController],
  providers: [AlertesPlateformeService],
})
export class AlertesPlateformeModule {}
