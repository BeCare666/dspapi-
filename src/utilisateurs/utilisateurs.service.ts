import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { Prisma } from "../generated/prisma/client.js";
import type { RoleUtilisateur } from "../generated/prisma/enums.js";
import type { ListUtilisateursQueryDto } from "./dto/list-utilisateurs-query.dto.js";

// Jamais motDePasseHash — select explicite systématique (D3, annuaire admin).
const SELECTION_PROFIL = {
  id: true,
  nom: true,
  prenom: true,
  email: true,
  typeCompte: true,
  organisationId: true,
  serviceId: true,
  actif: true,
  emailVerifieLe: true,
  createdAt: true,
  roles: { select: { role: true } },
  organisation: { select: { id: true, nom: true } },
} as const;

@Injectable()
export class UtilisateursService {
  constructor(private readonly prisma: PrismaService) {}

  // D3 — vue plateforme (admin) : tous les utilisateurs, pas de filtrage par
  // organisationId (endpoint explicitement réservé à ADMIN_PLATEFORME).
  async lister(query: ListUtilisateursQueryDto) {
    const actif = query.actif === "true" ? true : query.actif === "false" ? false : undefined;
    return this.prisma.utilisateur.findMany({
      where: {
        organisationId: query.organisationId,
        actif,
        roles: query.role ? { some: { role: query.role } } : undefined,
      },
      select: SELECTION_PROFIL,
      orderBy: { createdAt: "desc" },
    });
  }

  async obtenir(id: string) {
    const utilisateur = await this.prisma.utilisateur.findUnique({ where: { id }, select: SELECTION_PROFIL });
    if (!utilisateur) throw new NotFoundException("Utilisateur introuvable");
    return utilisateur;
  }

  async desactiver(id: string, acteurId: string) {
    const avant = await this.obtenir(id);
    const apres = await this.prisma.utilisateur.update({
      where: { id },
      data: { actif: false },
      select: SELECTION_PROFIL,
    });
    await this.tracer(acteurId, id, avant.organisationId, "utilisateur.desactiver", { actif: avant.actif }, {
      actif: apres.actif,
    });
    return apres;
  }

  async reactiver(id: string, acteurId: string) {
    const avant = await this.obtenir(id);
    const apres = await this.prisma.utilisateur.update({
      where: { id },
      data: { actif: true },
      select: SELECTION_PROFIL,
    });
    await this.tracer(acteurId, id, avant.organisationId, "utilisateur.reactiver", { actif: avant.actif }, {
      actif: apres.actif,
    });
    return apres;
  }

  // RefreshToken.revokedAt existant (Phase 1 audit) — "active" = ni révoquée
  // ni expirée. Pas de nouvelle donnée, juste une lecture/écriture sur un champ
  // déjà là.
  async listerSessions(utilisateurId: string) {
    await this.obtenir(utilisateurId);
    return this.prisma.refreshToken.findMany({
      where: { utilisateurId },
      select: { id: true, createdAt: true, expiresAt: true, revokedAt: true },
      orderBy: { createdAt: "desc" },
    });
  }

  async revoquerSession(utilisateurId: string, sessionId: string) {
    const session = await this.prisma.refreshToken.findUnique({ where: { id: sessionId } });
    if (!session || session.utilisateurId !== utilisateurId) {
      throw new NotFoundException("Session introuvable");
    }
    return this.prisma.refreshToken.update({ where: { id: sessionId }, data: { revokedAt: new Date() } });
  }

  // D4 — assignation de rôle. UtilisateurRole est déjà cumulative (pas de
  // migration). Aucune règle de type "au moins un rôle restant" n'est
  // appliquée ici — pas validée, voir ROADMAP.md D4.
  async ajouterRole(utilisateurId: string, role: RoleUtilisateur, acteurId: string) {
    const cible = await this.obtenir(utilisateurId);
    const existant = await this.prisma.utilisateurRole.findUnique({
      where: { utilisateurId_role: { utilisateurId, role } },
    });
    if (existant) {
      throw new ConflictException("Cet utilisateur a déjà ce rôle");
    }
    await this.prisma.utilisateurRole.create({ data: { utilisateurId, role } });
    await this.tracer(acteurId, utilisateurId, cible.organisationId, "utilisateur.role.ajouter", null, { role });
    return this.obtenir(utilisateurId);
  }

  async retirerRole(utilisateurId: string, role: RoleUtilisateur, acteurId: string) {
    const cible = await this.obtenir(utilisateurId);
    const existant = await this.prisma.utilisateurRole.findUnique({
      where: { utilisateurId_role: { utilisateurId, role } },
    });
    if (!existant) {
      throw new NotFoundException("Cet utilisateur n'a pas ce rôle");
    }
    await this.prisma.utilisateurRole.delete({ where: { utilisateurId_role: { utilisateurId, role } } });
    await this.tracer(acteurId, utilisateurId, cible.organisationId, "utilisateur.role.retirer", { role }, null);
    return this.obtenir(utilisateurId);
  }

  // D7 — audit : utilisateurId = l'acteur (l'admin qui agit), entiteId = la
  // cible (l'utilisateur affecté) — ce sont deux personnes différentes ici,
  // contrairement à l'audit de connexion (§Phase 1) où acteur == sujet.
  private async tracer(
    acteurId: string,
    cibleId: string,
    organisationCibleId: string | null,
    action: string,
    donneesAvant: Prisma.InputJsonValue | null,
    donneesApres: Prisma.InputJsonValue | null,
  ): Promise<void> {
    await this.prisma.journalAudit.create({
      data: {
        organisationId: organisationCibleId,
        utilisateurId: acteurId,
        action,
        entite: "Utilisateur",
        entiteId: cibleId,
        donneesAvant: donneesAvant ?? undefined,
        donneesApres: donneesApres ?? undefined,
      },
    });
  }
}
