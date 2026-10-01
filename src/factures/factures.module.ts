import { Global, Module } from "@nestjs/common";
import { FacturesService } from "./factures.service.js";
import { FacturesController } from "./factures.controller.js";

@Global()
@Module({
  controllers: [FacturesController],
  providers: [FacturesService],
  exports: [FacturesService],
})
export class FacturesModule {}
