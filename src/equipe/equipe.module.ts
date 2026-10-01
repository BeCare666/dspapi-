import { Module } from "@nestjs/common";
import { EquipeService } from "./equipe.service.js";
import { MembresController, ServicesEtablissementController } from "./equipe.controller.js";

@Module({
  controllers: [ServicesEtablissementController, MembresController],
  providers: [EquipeService],
  exports: [EquipeService],
})
export class EquipeModule {}
