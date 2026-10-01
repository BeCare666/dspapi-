import { Body, Controller, HttpCode, HttpStatus, Param, Patch, Post, Query, Req, Res, Get, UseGuards } from "@nestjs/common";
import { Throttle, ThrottlerGuard } from "@nestjs/throttler";
import type { Request, Response } from "express";
import { AuthService, type CompteEnregistre, type TokensEtUtilisateur } from "./auth.service.js";
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
import type { JwtAccessPayload } from "./types/jwt-payload.type.js";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE, accessTokenCookieOptions, refreshTokenCookieOptions } from "./auth.util.js";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly utilisateursService: UtilisateursService,
  ) {}

  // D9 — 5 requêtes/60s par IP : abus de création de compte (écrit en base +
  // déclenche un envoi d'email de vérification à chaque appel).
  @Public()
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  @Post("register/organisation")
  async registerOrganisation(@Body() dto: RegisterOrganisationDto) {
    const resultat = await this.authService.registerOrganisation(dto);
    return this.repondreCompteEnregistre(resultat);
  }

  // D9 — même justification que register/organisation.
  @Public()
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  @Post("register/individuel")
  async registerIndividuel(@Body() dto: RegisterIndividuelDto) {
    const resultat = await this.authService.registerIndividuel(dto);
    return this.repondreCompteEnregistre(resultat);
  }

  // D9 — 5 requêtes/60s par IP : protection brute-force sur le mot de passe.
  @Public()
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  @HttpCode(HttpStatus.OK)
  @Post("login")
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const resultat = await this.authService.login(dto);
    return this.repondreAvecTokens(res, resultat);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post("refresh")
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const rawRefreshToken = req.cookies?.[REFRESH_TOKEN_COOKIE];
    const resultat = await this.authService.refresh(rawRefreshToken);
    return this.repondreAvecTokens(res, resultat);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post("logout")
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const rawRefreshToken = req.cookies?.[REFRESH_TOKEN_COOKIE];
    await this.authService.logout(rawRefreshToken);
    res.clearCookie(ACCESS_TOKEN_COOKIE, { path: "/" });
    res.clearCookie(REFRESH_TOKEN_COOKIE, { path: "/auth" });
    return { success: true };
  }

  // D9 — 3 requêtes/60s par IP : limite l'email-bombing d'une adresse cible
  // et les tentatives d'énumération de comptes.
  @Public()
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { limit: 3, ttl: 60_000 } })
  @HttpCode(HttpStatus.OK)
  @Post("forgot-password")
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    await this.authService.forgotPassword(dto.email);
    return { success: true };
  }

  // D9 — 5 requêtes/60s par IP : protection contre le devinage de token.
  @Public()
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  @HttpCode(HttpStatus.OK)
  @Post("reset-password")
  async resetPassword(@Body() dto: ResetPasswordDto) {
    await this.authService.resetPassword(dto.token, dto.nouveauMotDePasse);
    return { success: true };
  }

  // Lien cliqué depuis l'email (hors SPA) : redirige vers la page de connexion
  // du frontend plutôt que de renvoyer du JSON.
  @Public()
  @Get("verify-email")
  async verifyEmail(@Query("token") token: string, @Res() res: Response) {
    const base = process.env.WEB_APP_URL ?? "http://localhost:3000";
    try {
      await this.authService.verifyEmail(token);
      return res.redirect(`${base}/login?verified=true`);
    } catch {
      return res.redirect(`${base}/login?verified=false`);
    }
  }

  // D9 — 3 requêtes/60s par IP : limite l'email-bombing d'une adresse cible.
  @Public()
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { limit: 3, ttl: 60_000 } })
  @HttpCode(HttpStatus.OK)
  @Post("resend-verification")
  async resendVerification(@Body() dto: ResendVerificationDto) {
    await this.authService.resendVerificationEmail(dto.email);
    return { success: true };
  }

  @Get("me")
  me(@CurrentUser() user: JwtAccessPayload) {
    return user;
  }

  // Profil affichable (nom/prénom/email) — voir la note dans AuthService.obtenirProfil.
  @Get("me/profil")
  profil(@CurrentUser() user: JwtAccessPayload) {
    return this.authService.obtenirProfil(user.sub);
  }

  // Auto-édition du profil personnel — même convention que D8.1/D8.2 :
  // aucune permission ni @Roles(), scope = identité du token (user.sub),
  // jamais un :id fourni par le frontend. Ouvert à tout compte authentifié.
  @Patch("me/profil")
  modifierProfil(@Body() dto: ModifierProfilDto, @CurrentUser() user: JwtAccessPayload) {
    return this.authService.modifierMonProfil(user.sub, dto);
  }

  // D8.2 (U-01) — auto-gestion des sessions. Scope strictement user.sub (jamais
  // un :id fourni par le frontend) : réutilise UtilisateursService.listerSessions/
  // revoquerSession (D3, déjà testées), qui vérifient déjà que la session
  // appartient bien à l'utilisateurId passé — ici toujours soi-même, donc un
  // utilisateur ne peut jamais lister/révoquer la session d'un autre. Aucune
  // permission ni @Roles() : ouvert à tout compte authentifié, quel que soit
  // son rôle (§ROADMAP.md D8, U-01 : "scope = identité du token, pas une
  // permission").
  @Get("me/sessions")
  mesSessions(@CurrentUser() user: JwtAccessPayload) {
    return this.utilisateursService.listerSessions(user.sub);
  }

  @HttpCode(HttpStatus.OK)
  @Post("me/sessions/:sessionId/revoquer")
  revoquerMaSession(@Param("sessionId") sessionId: string, @CurrentUser() user: JwtAccessPayload) {
    return this.utilisateursService.revoquerSession(user.sub, sessionId);
  }

  private repondreAvecTokens(res: Response, resultat: TokensEtUtilisateur) {
    res.cookie(ACCESS_TOKEN_COOKIE, resultat.accessToken, accessTokenCookieOptions());
    res.cookie(REFRESH_TOKEN_COOKIE, resultat.refreshToken, refreshTokenCookieOptions());

    const { motDePasseHash: _motDePasseHash, ...utilisateurSansMdp } = resultat.utilisateur;
    return { utilisateur: utilisateurSansMdp };
  }

  private repondreCompteEnregistre(resultat: CompteEnregistre) {
    const { motDePasseHash: _motDePasseHash, ...utilisateurSansMdp } = resultat.utilisateur;
    return {
      utilisateur: utilisateurSansMdp,
      message: "Compte créé. Vérifiez votre boîte email pour confirmer votre adresse avant de vous connecter.",
    };
  }
}
