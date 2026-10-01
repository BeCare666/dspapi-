import { Module } from "@nestjs/common";
import { GrillesService } from "./grilles.service.js";
import { GrillesController } from "./grilles.controller.js";

@Module({
  controllers: [GrillesController],
  providers: [GrillesService],
  exports: [GrillesService],
})
export class GrillesModule {}
