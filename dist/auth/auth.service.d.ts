import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { TypeCompte } from "../generated/prisma/enums.js";
import type { Utilisateur, UtilisateurRole } from "../generated/prisma/client.js";
import type { RegisterOrganisationDto } from "./dto/register-organisation.dto.js";
import type { RegisterIndividuelDto } from "./dto/register-individuel.dto.js";
import type { LoginDto } from "./dto/login.dto.js";
import type { ModifierProfilDto } from "./dto/modifier-profil.dto.js";
type UtilisateurAvecRoles = Utilisateur & {
    roles: UtilisateurRole[];
};
export interface TokensEtUtilisateur {
    accessToken: string;
    refreshToken: string;
    utilisateur: UtilisateurAvecRoles;
}
export interface CompteEnregistre {
    utilisateur: UtilisateurAvecRoles;
}
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    private readonly mailer;
    constructor(prisma: PrismaService, jwt: JwtService, mailer: MailerService);
    registerOrganisation(dto: RegisterOrganisationDto): Promise<CompteEnregistre>;
    registerIndividuel(dto: RegisterIndividuelDto): Promise<CompteEnregistre>;
    obtenirProfil(userId: string): Promise<{
        id: string;
        nom: string;
        telephone: string | null;
        email: string;
        typeCompte: TypeCompte;
        prenom: string;
    } | null>;
    modifierMonProfil(userId: string, dto: ModifierProfilDto): Promise<{
        id: string;
        nom: string;
        telephone: string | null;
        email: string;
        typeCompte: TypeCompte;
        prenom: string;
    }>;
    login(dto: LoginDto): Promise<TokensEtUtilisateur>;
    refresh(rawRefreshToken: string): Promise<TokensEtUtilisateur>;
    logout(rawRefreshToken: string | undefined): Promise<void>;
    forgotPassword(email: string): Promise<void>;
    resetPassword(rawToken: string, nouveauMotDePasse: string): Promise<void>;
    verifyEmail(rawToken: string): Promise<void>;
    resendVerificationEmail(email: string): Promise<void>;
    private envoyerEmailVerification;
    private issueTokens;
}
export {};
