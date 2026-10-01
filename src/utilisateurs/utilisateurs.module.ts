import { Module } from "@nestjs/common";
import { UtilisateursService } from "./utilisateurs.service.js";
import { UtilisateursController } from "./utilisateurs.controller.js";

@Module({
  controllers: [UtilisateursController],
  providers: [UtilisateursService],
  // Exporté pour AuthModule (D8.2 — /auth/me/sessions réutilise listerSessions/
  // revoquerSession déjà testés, scopés sur user.sub au lieu d'un :id admin).
  exports: [UtilisateursService],
})
export class UtilisateursModule {}
