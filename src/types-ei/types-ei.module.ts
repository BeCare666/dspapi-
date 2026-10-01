import { Module } from "@nestjs/common";
import { TypesEiService } from "./types-ei.service.js";
import { TypesEiController } from "./types-ei.controller.js";
import { NiveauxGraviteController } from "./niveaux-gravite.controller.js";
import { NiveauxGraviteService } from "./niveaux-gravite.service.js";

@Module({
  controllers: [TypesEiController, NiveauxGraviteController],
  providers: [TypesEiService, NiveauxGraviteService],
  exports: [TypesEiService],
})
export class TypesEiModule {}
