import { Module } from "@nestjs/common";
import { FormationsService } from "./formations.service.js";
import { FormationsController } from "./formations.controller.js";

@Module({
  controllers: [FormationsController],
  providers: [FormationsService],
  exports: [FormationsService],
})
export class FormationsModule {}
