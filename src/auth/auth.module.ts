import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerModule } from "@nestjs/throttler";
import { AuthService } from "./auth.service.js";
import { AuthController } from "./auth.controller.js";
import { JwtAccessStrategy } from "./strategies/jwt-access.strategy.js";
import { JwtAuthGuard } from "./guards/jwt-auth.guard.js";
import { RolesGuard } from "./guards/roles.guard.js";
import { PermissionsGuard } from "./guards/permissions.guard.js";
import { UtilisateursModule } from "../utilisateurs/utilisateurs.module.js";

@Module({
  imports: [
    JwtModule.register({}),
    // D9 — enregistré ici (pas dans AppModule) et jamais posé en APP_GUARD
    // global : seuls les endpoints explicitement décorés @UseGuards(ThrottlerGuard)
    // dans AuthController sont réellement limités, le reste de l'application
    // n'est pas concerné (cf. ROADMAP.md D9).
    ThrottlerModule.forRoot([{ name: "default", ttl: 60_000, limit: 20 }]),
    // D8.2 — réutilise UtilisateursService.listerSessions/revoquerSession
    // (déjà testées côté admin en D3) pour /auth/me/sessions.
    UtilisateursModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtAccessStrategy,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    { provide: APP_GUARD, useClass: PermissionsGuard },
  ],
})
export class AuthModule {}
