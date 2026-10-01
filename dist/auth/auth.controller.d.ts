import type { Request, Response } from "express";
import { AuthService } from "./auth.service.js";
import { UtilisateursService } from "../utilisateurs/utilisateurs.service.js";
import { RegisterOrganisationDto } from "./dto/register-organisation.dto.js";
import { RegisterIndividuelDto } from "./dto/register-individuel.dto.js";
import { LoginDto } from "./dto/login.dto.js";
import { ForgotPasswordDto } from "./dto/forgot-password.dto.js";
import { ResetPasswordDto } from "./dto/reset-password.dto.js";
import { ResendVerificationDto } from "./dto/resend-verification.dto.js";
import { ModifierProfilDto } from "./dto/modifier-profil.dto.js";
import type { JwtAccessPayload } from "./types/jwt-payload.type.js";
export declare class AuthController {
    private readonly authService;
    private readonly utilisateursService;
    constructor(authService: AuthService, utilisateursService: UtilisateursService);
    registerOrganisation(dto: RegisterOrganisationDto): Promise<{
        utilisateur: {
            id: string;
            nom: string;
            telephone: string | null;
            email: string;
            actif: boolean;
            createdAt: Date;
            updatedAt: Date;
            organisationId: string | null;
            serviceId: string | null;
            typeCompte: import("../generated/prisma/enums.js").TypeCompte;
            prenom: string;
            emailVerifieLe: Date | null;
            roles: import("../generated/prisma/client.js").UtilisateurRole[];
        };
        message: string;
    }>;
    registerIndividuel(dto: RegisterIndividuelDto): Promise<{
        utilisateur: {
            id: string;
            nom: string;
            telephone: string | null;
            email: string;
            actif: boolean;
            createdAt: Date;
            updatedAt: Date;
            organisationId: string | null;
            serviceId: string | null;
            typeCompte: import("../generated/prisma/enums.js").TypeCompte;
            prenom: string;
            emailVerifieLe: Date | null;
            roles: import("../generated/prisma/client.js").UtilisateurRole[];
        };
        message: string;
    }>;
    login(dto: LoginDto, res: Response): Promise<{
        utilisateur: {
            id: string;
            nom: string;
            telephone: string | null;
            email: string;
            actif: boolean;
            createdAt: Date;
            updatedAt: Date;
            organisationId: string | null;
            serviceId: string | null;
            typeCompte: import("../generated/prisma/enums.js").TypeCompte;
            prenom: string;
            emailVerifieLe: Date | null;
            roles: import("../generated/prisma/client.js").UtilisateurRole[];
        };
    }>;
    refresh(req: Request, res: Response): Promise<{
        utilisateur: {
            id: string;
            nom: string;
            telephone: string | null;
            email: string;
            actif: boolean;
            createdAt: Date;
            updatedAt: Date;
            organisationId: string | null;
            serviceId: string | null;
            typeCompte: import("../generated/prisma/enums.js").TypeCompte;
            prenom: string;
            emailVerifieLe: Date | null;
            roles: import("../generated/prisma/client.js").UtilisateurRole[];
        };
    }>;
    logout(req: Request, res: Response): Promise<{
        success: boolean;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        success: boolean;
    }>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        success: boolean;
    }>;
    verifyEmail(token: string, res: Response): Promise<void>;
    resendVerification(dto: ResendVerificationDto): Promise<{
        success: boolean;
    }>;
    me(user: JwtAccessPayload): JwtAccessPayload;
    profil(user: JwtAccessPayload): Promise<{
        id: string;
        nom: string;
        telephone: string | null;
        email: string;
        typeCompte: import("../generated/prisma/enums.js").TypeCompte;
        prenom: string;
    } | null>;
    modifierProfil(dto: ModifierProfilDto, user: JwtAccessPayload): Promise<{
        id: string;
        nom: string;
        telephone: string | null;
        email: string;
        typeCompte: import("../generated/prisma/enums.js").TypeCompte;
        prenom: string;
    }>;
    mesSessions(user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        expiresAt: Date;
        revokedAt: Date | null;
    }[]>;
    revoquerMaSession(sessionId: string, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        utilisateurId: string;
        tokenHash: string;
        expiresAt: Date;
        revokedAt: Date | null;
    }>;
    private repondreAvecTokens;
    private repondreCompteEnregistre;
}
