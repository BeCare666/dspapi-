import { Module } from "@nestjs/common";
import { RappelsService } from "./rappels.service.js";

@Module({
  providers: [RappelsService],
  exports: [RappelsService],
})
export class RappelsModule {}
