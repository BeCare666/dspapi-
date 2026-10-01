import { Module } from "@nestjs/common";
import { SecuriteService } from "./securite.service.js";
import { SecuriteController } from "./securite.controller.js";

@Module({
  controllers: [SecuriteController],
  providers: [SecuriteService],
})
export class SecuriteModule {}
