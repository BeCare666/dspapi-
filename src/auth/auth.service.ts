import { ConflictException, ForbiddenException, Injectable, UnauthorizedException, BadRequestException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { NotificationsInternesService } from "../notifications-internes/notifications-internes.service.js";
import { RoleUtilisateur, TypeCompte } from "../generated/prisma/enums.js";
import type { Utilisateur, UtilisateurRole } from "../generated/prisma/client.js";
import type { RegisterOrganisationDto } from "./dto/register-organisation.dto.js";
import type { RegisterIndividuelDto } from "./dto/register-individuel.dto.js";
import type { LoginDto } from "./dto/login.dto.js";
import type { ModifierProfilDto } from "./dto/modifier-profil.dto.js";
import type { JwtAccessPayload } from "./types/jwt-payload.type.js";
import { generateOpaqueToken, hashOpaqueToken, ttlToMs } from "./auth.util.js";

const BCRYPT_ROUNDS = 12;
const RESET_TOKEN_TTL_MS = 60 * 60 * 1000; // 1h
const VERIFICATION_TOKEN_TTL_MS = 48 * 60 * 60 * 1000; // 48h

type UtilisateurAvecRoles = Utilisateur & { roles: UtilisateurRole[] };

export interface TokensEtUtilisateur {
  accessToken: string;
  refreshToken: string;
  utilisateur: UtilisateurAvecRoles;
}

export interface CompteEnregistre {
  utilisateur: UtilisateurAvecRoles;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly mailer: MailerService,
    private readonly notifications: NotificationsInternesService,
  ) {}

  async registerOrganisation(dto: RegisterOrganisationDto): Promise<CompteEnregistre> {
    const [ifuExistant, emailExistant, emailOrganisationExistant] = await Promise.all([
      this.prisma.organisation.findUnique({ where: { ifu: dto.organisationIfu } }),
      this.prisma.utilisateur.findUnique({ where: { email: dto.responsableEmail } }),
      this.prisma.organisation.findUnique({ where: { email: dto.organisationEmail } }),
    ]);
    if (ifuExistant) throw new ConflictException("Une organisation avec cet IFU existe déjà");
    if (emailExistant) throw new ConflictException("Un compte existe déjà avec cet email");
    if (emailOrganisationExistant) throw new ConflictException("Un établissement utilise déjà cet email");

    const motDePasseHash = await bcrypt.hash(dto.motDePasse, BCRYPT_ROUNDS);

    const utilisateur = await this.prisma.$transaction(async (tx) => {
      const organisation = await tx.organisation.create({
        data: {
          nom: dto.organisationNom,
          raisonSociale: dto.organisationRaisonSociale,
          typeStructure: dto.organisationTypeStructure,
          ifu: dto.organisationIfu,
          type: dto.organisationType,
          adresse: dto.organisationAdresse,
          ville: dto.organisationVille,
          pays: dto.organisationPays,
          telephone: dto.organisationTelephone,
          email: dto.organisationEmail,
        },
      });

      return tx.utilisateur.create({
        data: {
          organisationId: organisation.id,
          typeCompte: TypeCompte.ORGANISATION,
          civilite: dto.responsableCivilite,
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

  async registerIndividuel(dto: RegisterIndividuelDto): Promise<CompteEnregistre> {
    const emailExistant = await this.prisma.utilisateur.findUnique({ where: { email: dto.email } });
    if (emailExistant) throw new ConflictException("Un compte existe déjà avec cet email");

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

  // Profil affichable (en-tête admin/organisation) — le payload du JWT
  // (JwtAccessPayload) ne contient volontairement que l'id/rôles/organisation,
  // pas le nom ni l'email, pour rester léger sur chaque requête authentifiée.
  async obtenirProfil(userId: string) {
    const utilisateur = await this.prisma.utilisateur.findUnique({
      where: { id: userId },
      select: { id: true, civilite: true, nom: true, prenom: true, email: true, telephone: true, typeCompte: true },
    });
    return utilisateur;
  }

  // Auto-édition du profil personnel — même pattern que
  // OrganisationsService.modifierMesInfos (D8.1) : scope strictement
  // `user.sub` côté contrôleur, jamais un `:id` fourni par le frontend.
  async modifierMonProfil(userId: string, dto: ModifierProfilDto) {
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

  async login(dto: LoginDto): Promise<TokensEtUtilisateur> {
    const utilisateur = await this.prisma.utilisateur.findUnique({
      where: { email: dto.email },
      include: { roles: true, organisation: { select: { actif: true } } },
    });
    if (!utilisateur || !utilisateur.actif) {
      throw new UnauthorizedException("Identifiants invalides");
    }

    const motDePasseValide = await bcrypt.compare(dto.motDePasse, utilisateur.motDePasseHash);
    if (!motDePasseValide) {
      throw new UnauthorizedException("Identifiants invalides");
    }

    // Email non confirmé : on ne révèle cette information qu'après validation
    // du mot de passe (ne pas aider un attaquant à distinguer les comptes).
    if (!utilisateur.emailVerifieLe) {
      throw new ForbiddenException("Veuillez confirmer votre adresse email avant de vous connecter");
    }
    // §12.1 — un établissement désactivé par l'administrateur ne peut plus se connecter.
    if (utilisateur.organisation && !utilisateur.organisation.actif) {
      throw new ForbiddenException("L'accès de votre établissement est suspendu. Contactez l'équipe DSP.");
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

  async refresh(rawRefreshToken: string): Promise<TokensEtUtilisateur> {
    const tokenHash = hashOpaqueToken(rawRefreshToken);
    const tokenEnBase = await this.prisma.refreshToken.findUnique({ where: { tokenHash } });

    if (!tokenEnBase || tokenEnBase.revokedAt || tokenEnBase.expiresAt < new Date()) {
      throw new UnauthorizedException("Session expirée, veuillez vous reconnecter");
    }

    const utilisateur = await this.prisma.utilisateur.findUnique({
      where: { id: tokenEnBase.utilisateurId },
      include: { roles: true, organisation: { select: { actif: true } } },
    });
    if (!utilisateur || !utilisateur.actif || (utilisateur.organisation && !utilisateur.organisation.actif)) {
      throw new UnauthorizedException("Session expirée, veuillez vous reconnecter");
    }

    await this.prisma.refreshToken.update({
      where: { id: tokenEnBase.id },
      data: { revokedAt: new Date() },
    });

    return this.issueTokens(utilisateur);
  }

  async logout(rawRefreshToken: string | undefined): Promise<void> {
    if (!rawRefreshToken) return;
    const tokenHash = hashOpaqueToken(rawRefreshToken);
    const token = await this.prisma.refreshToken.findUnique({ where: { tokenHash } });
    if (!token || token.revokedAt) return;

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

  // Réponse volontairement identique que l'email existe ou non, pour ne pas
  // révéler quels emails sont enregistrés.
  async forgotPassword(email: string): Promise<void> {
    const utilisateur = await this.prisma.utilisateur.findUnique({ where: { email } });
    if (!utilisateur || !utilisateur.actif) return;

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

  async resetPassword(rawToken: string, nouveauMotDePasse: string): Promise<void> {
    const tokenHash = hashOpaqueToken(rawToken);
    const tokenEnBase = await this.prisma.passwordResetToken.findUnique({ where: { tokenHash } });

    if (!tokenEnBase || tokenEnBase.usedAt || tokenEnBase.expiresAt < new Date()) {
      throw new BadRequestException("Lien de réinitialisation invalide ou expiré");
    }

    const utilisateur = await this.prisma.utilisateur.findUniqueOrThrow({ where: { id: tokenEnBase.utilisateurId } });
    const motDePasseHash = await bcrypt.hash(nouveauMotDePasse, BCRYPT_ROUNDS);

    await this.prisma.$transaction([
      // Le lien a été reçu à cette adresse : elle est donc vérifiée. C'est ce qui
      // active un utilisateur interne invité par son établissement (§4.2).
      this.prisma.utilisateur.update({
        where: { id: tokenEnBase.utilisateurId },
        data: { motDePasseHash, emailVerifieLe: utilisateur.emailVerifieLe ?? new Date() },
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

  async verifyEmail(rawToken: string): Promise<void> {
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

    // §11.2 — confirmation d'inscription : email + notification dans l'espace personnel.
    const utilisateur = await this.prisma.utilisateur.findUnique({
      where: { id: tokenEnBase.utilisateurId },
      select: { id: true, email: true, prenom: true },
    });
    if (utilisateur) {
      await this.mailer.sendInscriptionConfirmee(utilisateur.email, utilisateur.prenom);
      await this.notifications.creerPour([utilisateur.id], {
        type: "INSCRIPTION_CONFIRMEE",
        titre: "Inscription confirmée",
        message: "Bienvenue sur DSP : votre compte est actif.",
      });
    }
  }

  // Réponse volontairement identique que l'email existe/soit déjà vérifié ou
  // non, même logique que `forgotPassword`.
  async resendVerificationEmail(email: string): Promise<void> {
    const utilisateur = await this.prisma.utilisateur.findUnique({ where: { email } });
    if (!utilisateur || utilisateur.emailVerifieLe) return;
    await this.envoyerEmailVerification(utilisateur);
  }

  private async envoyerEmailVerification(utilisateur: { id: string; email: string; prenom: string }): Promise<void> {
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

  private async issueTokens(utilisateur: UtilisateurAvecRoles): Promise<TokensEtUtilisateur> {
    const payload: JwtAccessPayload = {
      sub: utilisateur.id,
      typeCompte: utilisateur.typeCompte,
      organisationId: utilisateur.organisationId,
      serviceId: utilisateur.serviceId,
      roles: utilisateur.roles.map((r) => r.role),
    };

    const accessToken = await this.jwt.signAsync(payload, {
      secret: process.env.JWT_SECRET!,
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
}
