var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, HttpCode, HttpStatus, Param, Patch, Post, Query, Req, Res, Get, UseGuards } from "@nestjs/common";
import { Throttle, ThrottlerGuard } from "@nestjs/throttler";
import { AuthService } from "./auth.service.js";
import { UtilisateursService } from "../utilisateurs/utilisateurs.service.js";
import { RegisterOrganisationDto } from "./dto/register-organisation.dto.js";
import { RegisterIndividuelDto } from "./dto/register-individuel.dto.js";
import { LoginDto } from "./dto/login.dto.js";
import { ForgotPasswordDto } from "./dto/forgot-password.dto.js";
import { ResetPasswordDto } from "./dto/reset-password.dto.js";
import { ResendVerificationDto } from "./dto/resend-verification.dto.js";
import { ModifierProfilDto } from "./dto/modifier-profil.dto.js";
import { Public } from "./decorators/public.decorator.js";
import { CurrentUser } from "./decorators/current-user.decorator.js";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE, accessTokenCookieOptions, refreshTokenCookieOptions } from "./auth.util.js";
let AuthController = class AuthController {
    authService;
    utilisateursService;
    constructor(authService, utilisateursService) {
        this.authService = authService;
        this.utilisateursService = utilisateursService;
    }
    async registerOrganisation(dto) {
        const resultat = await this.authService.registerOrganisation(dto);
        return this.repondreCompteEnregistre(resultat);
    }
    async registerIndividuel(dto) {
        const resultat = await this.authService.registerIndividuel(dto);
        return this.repondreCompteEnregistre(resultat);
    }
    async login(dto, res) {
        const resultat = await this.authService.login(dto);
        return this.repondreAvecTokens(res, resultat);
    }
    async refresh(req, res) {
        const rawRefreshToken = req.cookies?.[REFRESH_TOKEN_COOKIE];
        const resultat = await this.authService.refresh(rawRefreshToken);
        return this.repondreAvecTokens(res, resultat);
    }
    async logout(req, res) {
        const rawRefreshToken = req.cookies?.[REFRESH_TOKEN_COOKIE];
        await this.authService.logout(rawRefreshToken);
        res.clearCookie(ACCESS_TOKEN_COOKIE, { path: "/" });
        res.clearCookie(REFRESH_TOKEN_COOKIE, { path: "/auth" });
        return { success: true };
    }
    async forgotPassword(dto) {
        await this.authService.forgotPassword(dto.email);
        return { success: true };
    }
    async resetPassword(dto) {
        await this.authService.resetPassword(dto.token, dto.nouveauMotDePasse);
        return { success: true };
    }
    async verifyEmail(token, res) {
        const base = process.env.WEB_APP_URL ?? "http://localhost:3000";
        try {
            await this.authService.verifyEmail(token);
            return res.redirect(`${base}/login?verified=true`);
        }
        catch {
            return res.redirect(`${base}/login?verified=false`);
        }
    }
    async resendVerification(dto) {
        await this.authService.resendVerificationEmail(dto.email);
        return { success: true };
    }
    me(user) {
        return user;
    }
    profil(user) {
        return this.authService.obtenirProfil(user.sub);
    }
    modifierProfil(dto, user) {
        return this.authService.modifierMonProfil(user.sub, dto);
    }
    mesSessions(user) {
        return this.utilisateursService.listerSessions(user.sub);
    }
    revoquerMaSession(sessionId, user) {
        return this.utilisateursService.revoquerSession(user.sub, sessionId);
    }
    repondreAvecTokens(res, resultat) {
        res.cookie(ACCESS_TOKEN_COOKIE, resultat.accessToken, accessTokenCookieOptions());
        res.cookie(REFRESH_TOKEN_COOKIE, resultat.refreshToken, refreshTokenCookieOptions());
        const { motDePasseHash: _motDePasseHash, ...utilisateurSansMdp } = resultat.utilisateur;
        return { utilisateur: utilisateurSansMdp };
    }
    repondreCompteEnregistre(resultat) {
        const { motDePasseHash: _motDePasseHash, ...utilisateurSansMdp } = resultat.utilisateur;
        return {
            utilisateur: utilisateurSansMdp,
            message: "Compte créé. Vérifiez votre boîte email pour confirmer votre adresse avant de vous connecter.",
        };
    }
};
__decorate([
    Public(),
    UseGuards(ThrottlerGuard),
    Throttle({ default: { limit: 5, ttl: 60_000 } }),
    Post("register/organisation"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterOrganisationDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerOrganisation", null);
__decorate([
    Public(),
    UseGuards(ThrottlerGuard),
    Throttle({ default: { limit: 5, ttl: 60_000 } }),
    Post("register/individuel"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterIndividuelDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerIndividuel", null);
__decorate([
    Public(),
    UseGuards(ThrottlerGuard),
    Throttle({ default: { limit: 5, ttl: 60_000 } }),
    HttpCode(HttpStatus.OK),
    Post("login"),
    __param(0, Body()),
    __param(1, Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    Public(),
    HttpCode(HttpStatus.OK),
    Post("refresh"),
    __param(0, Req()),
    __param(1, Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    Public(),
    HttpCode(HttpStatus.OK),
    Post("logout"),
    __param(0, Req()),
    __param(1, Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    Public(),
    UseGuards(ThrottlerGuard),
    Throttle({ default: { limit: 3, ttl: 60_000 } }),
    HttpCode(HttpStatus.OK),
    Post("forgot-password"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    Public(),
    UseGuards(ThrottlerGuard),
    Throttle({ default: { limit: 5, ttl: 60_000 } }),
    HttpCode(HttpStatus.OK),
    Post("reset-password"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    Public(),
    Get("verify-email"),
    __param(0, Query("token")),
    __param(1, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    Public(),
    UseGuards(ThrottlerGuard),
    Throttle({ default: { limit: 3, ttl: 60_000 } }),
    HttpCode(HttpStatus.OK),
    Post("resend-verification"),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ResendVerificationDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resendVerification", null);
__decorate([
    Get("me"),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "me", null);
__decorate([
    Get("me/profil"),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "profil", null);
__decorate([
    Patch("me/profil"),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ModifierProfilDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "modifierProfil", null);
__decorate([
    Get("me/sessions"),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "mesSessions", null);
__decorate([
    HttpCode(HttpStatus.OK),
    Post("me/sessions/:sessionId/revoquer"),
    __param(0, Param("sessionId")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "revoquerMaSession", null);
AuthController = __decorate([
    Controller("auth"),
    __metadata("design:paramtypes", [AuthService,
        UtilisateursService])
], AuthController);
export { AuthController };
//# sourceMappingURL=auth.controller.js.map