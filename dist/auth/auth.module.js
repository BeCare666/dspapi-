var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    Module({
        imports: [
            JwtModule.register({}),
            ThrottlerModule.forRoot([{ name: "default", ttl: 60_000, limit: 20 }]),
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
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map