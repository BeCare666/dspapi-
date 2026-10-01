import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { RoleUtilisateur, TypeCompte } from "../generated/prisma/enums.js";
import type { Prisma } from "../generated/prisma/client.js";
import { generateOpaqueToken, hashOpaqueToken } from "../auth/auth.util.js";
import type { CreerServiceDto, ModifierServiceDto } from "./dto/service-etablissement.dto.js";
import type { CreerMembreDto, ModifierMembreDto } from "./dto/membre.dto.js";

// Lien d'activation d'un utilisateur interne : 72 h (le destinataire n'attend
// pas forcément l'email, contrairement à une réinitialisation demandée par lui-même).
const INVITATION_TTL_MS = 72 * 60 * 60 * 1000;

// Jamais motDePasseHash.
const SELECTION_MEMBRE = {
  id: true,
  civilite: true,
  nom: true,
  prenom: true,
  email: true,
  telephone: true,
  actif: true,
  emailVerifieLe: true,
  serviceId: true,
  createdAt: true,
  service: { select: { id: true, nom: true } },
  roles: { select: { role: true } },
} as const;

// §4.2 — gestion, par l'établissement lui-même, de ses services et de ses
// utilisateurs internes. `organisationId` vient toujours du jeton de l'acteur
// (RM7) ; toute cible hors de cette organisation répond 404.
@Injectable()
export class EquipeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailer: MailerService,
  ) {}

  // ---------------------------------------------------------------------------
  // Services
  // ---------------------------------------------------------------------------

  listerServices(organisationId: string, inclureInactifs: boolean) {
    return this.prisma.service.findMany({
      where: { organisationId, actif: inclureInactifs ? undefined : true },
      select: { id: true, nom: true, description: true, actif: true, createdAt: true },
      orderBy: { nom: "asc" },
    });
  }

  async creerService(organisationId: string, dto: CreerServiceDto, acteurId: string) {
    await this.verifierNomServiceLibre(organisationId, dto.nom);
    const service = await this.prisma.service.create({
      data: { organisationId, nom: dto.nom.trim(), description: dto.description?.trim() || null },
    });
    await this.tracer(organisationId, acteurId, "service.creer", "Service", service.id, null, { nom: service.nom });
    return service;
  }

  async modifierService(organisationId: string, serviceId: string, dto: ModifierServiceDto, acteurId: string) {
    const avant = await this.obtenirServiceDeLOrganisation(organisationId, serviceId);
    if (dto.nom && dto.nom.trim() !== avant.nom) {
      await this.verifierNomServiceLibre(organisationId, dto.nom);
    }
    const apres = await this.prisma.service.update({
      where: { id: serviceId },
      data: {
        nom: dto.nom?.trim(),
        description: dto.description === undefined ? undefined : dto.description.trim() || null,
      },
    });
    await this.tracer(organisationId, acteurId, "service.modifier", "Service", serviceId,
      { nom: avant.nom, description: avant.description },
      { nom: apres.nom, description: apres.description });
    return apres;
  }

  // Un service n'est jamais supprimé (patients, EI et utilisateurs peuvent y
  // être rattachés) : il est désactivé et n'est plus proposé dans les formulaires.
  async basculerService(organisationId: string, serviceId: string, actif: boolean, acteurId: string) {
    const avant = await this.obtenirServiceDeLOrganisation(organisationId, serviceId);
    const apres = await this.prisma.service.update({ where: { id: serviceId }, data: { actif } });
    await this.tracer(organisationId, acteurId, actif ? "service.activer" : "service.desactiver", "Service", serviceId,
      { actif: avant.actif }, { actif: apres.actif });
    return apres;
  }

  // ---------------------------------------------------------------------------
  // Membres (utilisateurs internes)
  // ---------------------------------------------------------------------------

  listerMembres(organisationId: string) {
    return this.prisma.utilisateur.findMany({
      where: { organisationId },
      select: SELECTION_MEMBRE,
      orderBy: [{ nom: "asc" }, { prenom: "asc" }],
    });
  }

  async obtenirMembre(organisationId: string, membreId: string) {
    const membre = await this.prisma.utilisateur.findFirst({
      where: { id: membreId, organisationId },
      select: SELECTION_MEMBRE,
    });
    if (!membre) throw new NotFoundException("Membre introuvable");
    return membre;
  }

  // Le mot de passe n'est jamais choisi par le responsable : le compte est créé
  // avec un secret aléatoire inconnu de tous, et l'utilisateur reçoit un lien
  // d'activation pour définir lui-même son mot de passe personnel (§4.2, §13.2).
  async creerMembre(organisationId: string, dto: CreerMembreDto, acteurId: string) {
    const email = dto.email.trim().toLowerCase();
    const existant = await this.prisma.utilisateur.findUnique({ where: { email } });
    if (existant) throw new ConflictException("Un compte existe déjà avec cet email");

    const serviceId = dto.serviceId ? (await this.obtenirServiceActif(organisationId, dto.serviceId)).id : null;
    const motDePasseHash = await bcrypt.hash(generateOpaqueToken(), 12);

    const membre = await this.prisma.utilisateur.create({
      data: {
        organisationId,
        typeCompte: TypeCompte.ORGANISATION,
        civilite: dto.civilite,
        nom: dto.nom.trim(),
        prenom: dto.prenom.trim(),
        email,
        telephone: dto.telephone?.trim() || null,
        motDePasseHash,
        serviceId,
        roles: { create: dto.roles.map((role) => ({ role })) },
      },
      select: SELECTION_MEMBRE,
    });

    await this.tracer(organisationId, acteurId, "membre.creer", "Utilisateur", membre.id, null, {
      email: membre.email,
      roles: dto.roles,
      serviceId,
    });
    await this.envoyerInvitation(organisationId, membre.id);
    return membre;
  }

  async modifierMembre(organisationId: string, membreId: string, dto: ModifierMembreDto, acteurId: string) {
    const avant = await this.obtenirMembre(organisationId, membreId);
    const rolesAvant = avant.roles.map((r) => r.role);

    if (dto.roles && membreId === acteurId && !dto.roles.includes(RoleUtilisateur.RESPONSABLE_COMPTE)) {
      throw new BadRequestException("Vous ne pouvez pas retirer votre propre rôle de responsable du compte");
    }

    let serviceId: string | null | undefined;
    if (dto.serviceId === null) serviceId = null;
    else if (dto.serviceId !== undefined) serviceId = (await this.obtenirServiceActif(organisationId, dto.serviceId)).id;

    await this.prisma.$transaction(async (tx) => {
      await tx.utilisateur.update({
        where: { id: membreId },
        data: {
          civilite: dto.civilite,
          nom: dto.nom?.trim(),
          prenom: dto.prenom?.trim(),
          serviceId,
        },
      });
      if (dto.roles) {
        await tx.utilisateurRole.deleteMany({ where: { utilisateurId: membreId } });
        await tx.utilisateurRole.createMany({ data: dto.roles.map((role) => ({ utilisateurId: membreId, role })) });
      }
    });

    const apres = await this.obtenirMembre(organisationId, membreId);
    await this.tracer(organisationId, acteurId, "membre.modifier", "Utilisateur", membreId,
      { civilite: avant.civilite, nom: avant.nom, prenom: avant.prenom, serviceId: avant.serviceId, roles: rolesAvant },
      { civilite: apres.civilite, nom: apres.nom, prenom: apres.prenom, serviceId: apres.serviceId, roles: apres.roles.map((r) => r.role) });
    return apres;
  }

  async basculerMembre(organisationId: string, membreId: string, actif: boolean, acteurId: string) {
    if (membreId === acteurId && !actif) {
      throw new BadRequestException("Vous ne pouvez pas désactiver votre propre compte");
    }
    const avant = await this.obtenirMembre(organisationId, membreId);
    await this.prisma.$transaction(async (tx) => {
      await tx.utilisateur.update({ where: { id: membreId }, data: { actif } });
      // Désactivation : les sessions en cours sont révoquées immédiatement.
      if (!actif) {
        await tx.refreshToken.updateMany({ where: { utilisateurId: membreId, revokedAt: null }, data: { revokedAt: new Date() } });
      }
    });
    await this.tracer(organisationId, acteurId, actif ? "membre.reactiver" : "membre.desactiver", "Utilisateur", membreId,
      { actif: avant.actif }, { actif });
    return this.obtenirMembre(organisationId, membreId);
  }

  // Renvoi du lien d'activation, uniquement pour un compte jamais activé.
  async renvoyerInvitation(organisationId: string, membreId: string) {
    const membre = await this.obtenirMembre(organisationId, membreId);
    if (membre.emailVerifieLe) {
      throw new ConflictException("Ce compte est déjà activé");
    }
    if (!membre.actif) {
      throw new ConflictException("Ce compte est désactivé");
    }
    await this.envoyerInvitation(organisationId, membreId);
    return { success: true };
  }

  // ---------------------------------------------------------------------------

  private async envoyerInvitation(organisationId: string, membreId: string): Promise<void> {
    const [membre, organisation] = await Promise.all([
      this.prisma.utilisateur.findUniqueOrThrow({ where: { id: membreId } }),
      this.prisma.organisation.findUniqueOrThrow({ where: { id: organisationId } }),
    ]);
    const rawToken = generateOpaqueToken();
    await this.prisma.passwordResetToken.create({
      data: {
        utilisateurId: membre.id,
        tokenHash: hashOpaqueToken(rawToken),
        expiresAt: new Date(Date.now() + INVITATION_TTL_MS),
      },
    });
    const lien = `${process.env.WEB_APP_URL}/activer-compte?token=${rawToken}`;
    await this.mailer.sendInvitationEmail(membre.email, membre.prenom, organisation.nom, lien);
  }

  private async obtenirServiceDeLOrganisation(organisationId: string, serviceId: string) {
    const service = await this.prisma.service.findFirst({ where: { id: serviceId, organisationId } });
    if (!service) throw new NotFoundException("Service introuvable");
    return service;
  }

  private async obtenirServiceActif(organisationId: string, serviceId: string) {
    const service = await this.obtenirServiceDeLOrganisation(organisationId, serviceId);
    if (!service.actif) throw new BadRequestException("Ce service est désactivé");
    return service;
  }

  private async verifierNomServiceLibre(organisationId: string, nom: string) {
    const doublon = await this.prisma.service.findUnique({
      where: { organisationId_nom: { organisationId, nom: nom.trim() } },
    });
    if (doublon) throw new ConflictException("Un service porte déjà ce nom");
  }

  private async tracer(
    organisationId: string,
    acteurId: string,
    action: string,
    entite: string,
    entiteId: string,
    donneesAvant: Prisma.InputJsonValue | null,
    donneesApres: Prisma.InputJsonValue | null,
  ) {
    await this.prisma.journalAudit.create({
      data: {
        organisationId,
        utilisateurId: acteurId,
        action,
        entite,
        entiteId,
        donneesAvant: donneesAvant ?? undefined,
        donneesApres: donneesApres ?? undefined,
      },
    });
  }
}
