var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, ForbiddenException, Injectable, UnauthorizedException, BadRequestException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { RoleUtilisateur, TypeCompte } from "../generated/prisma/enums.js";
import { generateOpaqueToken, hashOpaqueToken, ttlToMs } from "./auth.util.js";
const BCRYPT_ROUNDS = 12;
const RESET_TOKEN_TTL_MS = 60 * 60 * 1000;
const VERIFICATION_TOKEN_TTL_MS = 48 * 60 * 60 * 1000;
let AuthService = class AuthService {
    prisma;
    jwt;
    mailer;
    constructor(prisma, jwt, mailer) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.mailer = mailer;
    }
    async registerOrganisation(dto) {
        const [ifuExistant, emailExistant] = await Promise.all([
            this.prisma.organisation.findUnique({ where: { ifu: dto.organisationIfu } }),
            this.prisma.utilisateur.findUnique({ where: { email: dto.responsableEmail } }),
        ]);
        if (ifuExistant)
            throw new ConflictException("Une organisation avec cet IFU existe déjà");
        if (emailExistant)
            throw new ConflictException("Un compte existe déjà avec cet email");
        const motDePasseHash = await bcrypt.hash(dto.motDePasse, BCRYPT_ROUNDS);
        const utilisateur = await this.prisma.$transaction(async (tx) => {
            const organisation = await tx.organisation.create({
                data: {
                    nom: dto.organisationNom,
                    ifu: dto.organisationIfu,
                    type: dto.organisationType,
                    adresse: dto.organisationAdresse,
                    telephone: dto.organisationTelephone,
                    email: dto.organisationEmail,
                },
            });
            return tx.utilisateur.create({
                data: {
                    organisationId: organisation.id,
                    typeCompte: TypeCompte.ORGANISATION,
                    email: dto.responsableEmail,
                    motDePasseHash,
                    nom: dto.responsableNom,
                    prenom: dto.responsablePrenom,
                    telephone: dto.responsableTelephone,
                    roles: { create: { role: RoleUtilisateur.RESPONSABLE_COMPTE } },
                },
                include: { roles: true },
            });
        });
        await this.envoyerEmailVerification(utilisateur);
        return { utilisateur };
    }
    async registerIndividuel(dto) {
        const emailExistant = await this.prisma.utilisateur.findUnique({ where: { email: dto.email } });
        if (emailExistant)
            throw new ConflictException("Un compte existe déjà avec cet email");
        const motDePasseHash = await bcrypt.hash(dto.motDePasse, BCRYPT_ROUNDS);
        const utilisateur = await this.prisma.utilisateur.create({
            data: {
                typeCompte: TypeCompte.INDIVIDUEL,
                email: dto.email,
                motDePasseHash,
                nom: dto.nom,
                prenom: dto.prenom,
                telephone: dto.telephone,
            },
            include: { roles: true },
        });
        await this.envoyerEmailVerification(utilisateur);
        return { utilisateur };
    }
    async obtenirProfil(userId) {
        const utilisateur = await this.prisma.utilisateur.findUnique({
            where: { id: userId },
            select: { id: true, nom: true, prenom: true, email: true, telephone: true, typeCompte: true },
        });
        return utilisateur;
    }
    async modifierMonProfil(userId, dto) {
        const avant = await this.prisma.utilisateur.findUnique({
            where: { id: userId },
            select: { nom: true, prenom: true, telephone: true },
        });
        const apres = await this.prisma.utilisateur.update({
            where: { id: userId },
            data: { nom: dto.nom, prenom: dto.prenom, telephone: dto.telephone },
            select: { id: true, nom: true, prenom: true, email: true, telephone: true, typeCompte: true },
        });
        await this.prisma.journalAudit.create({
            data: {
                utilisateurId: userId,
                action: "utilisateur.modifier_profil",
                entite: "Utilisateur",
                entiteId: userId,
                donneesAvant: avant ?? {},
                donneesApres: { nom: apres.nom, prenom: apres.prenom, telephone: apres.telephone },
            },
        });
        return apres;
    }
    async login(dto) {
        const utilisateur = await this.prisma.utilisateur.findUnique({
            where: { email: dto.email },
            include: { roles: true },
        });
        if (!utilisateur || !utilisateur.actif) {
            throw new UnauthorizedException("Identifiants invalides");
        }
        const motDePasseValide = await bcrypt.compare(dto.motDePasse, utilisateur.motDePasseHash);
        if (!motDePasseValide) {
            throw new UnauthorizedException("Identifiants invalides");
        }
        if (!utilisateur.emailVerifieLe) {
            throw new ForbiddenException("Veuillez confirmer votre adresse email avant de vous connecter");
        }
        await this.prisma.journalAudit.create({
            data: {
                organisationId: utilisateur.organisationId,
                utilisateurId: utilisateur.id,
                action: "connexion",
                entite: "Utilisateur",
                entiteId: utilisateur.id,
            },
        });
        return this.issueTokens(utilisateur);
    }
    async refresh(rawRefreshToken) {
        const tokenHash = hashOpaqueToken(rawRefreshToken);
        const tokenEnBase = await this.prisma.refreshToken.findUnique({ where: { tokenHash } });
        if (!tokenEnBase || tokenEnBase.revokedAt || tokenEnBase.expiresAt < new Date()) {
            throw new UnauthorizedException("Session expirée, veuillez vous reconnecter");
        }
        const utilisateur = await this.prisma.utilisateur.findUnique({
            where: { id: tokenEnBase.utilisateurId },
            include: { roles: true },
        });
        if (!utilisateur || !utilisateur.actif) {
            throw new UnauthorizedException("Session expirée, veuillez vous reconnecter");
        }
        await this.prisma.refreshToken.update({
            where: { id: tokenEnBase.id },
            data: { revokedAt: new Date() },
        });
        return this.issueTokens(utilisateur);
    }
    async logout(rawRefreshToken) {
        if (!rawRefreshToken)
            return;
        const tokenHash = hashOpaqueToken(rawRefreshToken);
        const token = await this.prisma.refreshToken.findUnique({ where: { tokenHash } });
        if (!token || token.revokedAt)
            return;
        await this.prisma.refreshToken.update({ where: { id: token.id }, data: { revokedAt: new Date() } });
        const utilisateur = await this.prisma.utilisateur.findUnique({ where: { id: token.utilisateurId } });
        if (utilisateur) {
            await this.prisma.journalAudit.create({
                data: {
                    organisationId: utilisateur.organisationId,
                    utilisateurId: utilisateur.id,
                    action: "deconnexion",
                    entite: "Utilisateur",
                    entiteId: utilisateur.id,
                },
            });
        }
    }
    async forgotPassword(email) {
        const utilisateur = await this.prisma.utilisateur.findUnique({ where: { email } });
        if (!utilisateur || !utilisateur.actif)
            return;
        const rawToken = generateOpaqueToken();
        await this.prisma.passwordResetToken.create({
            data: {
                utilisateurId: utilisateur.id,
                tokenHash: hashOpaqueToken(rawToken),
                expiresAt: new Date(Date.now() + RESET_TOKEN_TTL_MS),
            },
        });
        await this.mailer.sendPasswordResetEmail(utilisateur.email, rawToken);
    }
    async resetPassword(rawToken, nouveauMotDePasse) {
        const tokenHash = hashOpaqueToken(rawToken);
        const tokenEnBase = await this.prisma.passwordResetToken.findUnique({ where: { tokenHash } });
        if (!tokenEnBase || tokenEnBase.usedAt || tokenEnBase.expiresAt < new Date()) {
            throw new BadRequestException("Lien de réinitialisation invalide ou expiré");
        }
        const motDePasseHash = await bcrypt.hash(nouveauMotDePasse, BCRYPT_ROUNDS);
        await this.prisma.$transaction([
            this.prisma.utilisateur.update({
                where: { id: tokenEnBase.utilisateurId },
                data: { motDePasseHash },
            }),
            this.prisma.passwordResetToken.update({
                where: { id: tokenEnBase.id },
                data: { usedAt: new Date() },
            }),
            this.prisma.refreshToken.updateMany({
                where: { utilisateurId: tokenEnBase.utilisateurId, revokedAt: null },
                data: { revokedAt: new Date() },
            }),
        ]);
    }
    async verifyEmail(rawToken) {
        const tokenHash = hashOpaqueToken(rawToken);
        const tokenEnBase = await this.prisma.emailVerificationToken.findUnique({ where: { tokenHash } });
        if (!tokenEnBase || tokenEnBase.usedAt || tokenEnBase.expiresAt < new Date()) {
            throw new BadRequestException("Lien de vérification invalide ou expiré");
        }
        await this.prisma.$transaction([
            this.prisma.utilisateur.update({
                where: { id: tokenEnBase.utilisateurId },
                data: { emailVerifieLe: new Date() },
            }),
            this.prisma.emailVerificationToken.update({
                where: { id: tokenEnBase.id },
                data: { usedAt: new Date() },
            }),
        ]);
    }
    async resendVerificationEmail(email) {
        const utilisateur = await this.prisma.utilisateur.findUnique({ where: { email } });
        if (!utilisateur || utilisateur.emailVerifieLe)
            return;
        await this.envoyerEmailVerification(utilisateur);
    }
    async envoyerEmailVerification(utilisateur) {
        const rawToken = generateOpaqueToken();
        await this.prisma.emailVerificationToken.create({
            data: {
                utilisateurId: utilisateur.id,
                tokenHash: hashOpaqueToken(rawToken),
                expiresAt: new Date(Date.now() + VERIFICATION_TOKEN_TTL_MS),
            },
        });
        const lien = `${process.env.API_URL ?? "http://localhost:3001"}/auth/verify-email?token=${rawToken}`;
        await this.mailer.sendVerificationEmail(utilisateur.email, utilisateur.prenom, lien);
    }
    async issueTokens(utilisateur) {
        const payload = {
            sub: utilisateur.id,
            typeCompte: utilisateur.typeCompte,
            organisationId: utilisateur.organisationId,
            serviceId: utilisateur.serviceId,
            roles: utilisateur.roles.map((r) => r.role),
        };
        const accessToken = await this.jwt.signAsync(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: ttlToMs(process.env.JWT_ACCESS_TTL ?? "15m") / 1000,
        });
        const rawRefreshToken = generateOpaqueToken();
        await this.prisma.refreshToken.create({
            data: {
                utilisateurId: utilisateur.id,
                tokenHash: hashOpaqueToken(rawRefreshToken),
                expiresAt: new Date(Date.now() + ttlToMs(process.env.JWT_REFRESH_TTL ?? "30d")),
            },
        });
        return { accessToken, refreshToken: rawRefreshToken, utilisateur };
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService,
        MailerService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map