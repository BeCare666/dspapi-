import { Global, Module } from "@nestjs/common";
import { ParametresService } from "./parametres.service.js";
import { ParametresController } from "./parametres.controller.js";

@Global()
@Module({
  controllers: [ParametresController],
  providers: [ParametresService],
  exports: [ParametresService],
})
export class ParametresModule {}
