import { Global, Module } from "@nestjs/common";
import { KkiapayService } from "./kkiapay.service.js";

@Global()
@Module({
  providers: [KkiapayService],
  exports: [KkiapayService],
})
export class PaiementsModule {}
