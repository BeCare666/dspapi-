import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { ListOrganisationsQueryDto } from "./dto/list-organisations-query.dto.js";
import type { ModifierOrganisationDto } from "./dto/modifier-organisation.dto.js";

@Injectable()
export class OrganisationsService {
  constructor(private readonly prisma: PrismaService) {}

  async obtenir(organisationId: string) {
    const organisation = await this.prisma.organisation.findUnique({ where: { id: organisationId } });
    if (!organisation) throw new NotFoundException("Organisation introuvable");
    return organisation;
  }

  // D2 — vue plateforme (admin) : tous les établissements, pas de filtrage par
  // organisationId (endpoint explicitement réservé à ADMIN_PLATEFORME).
  async lister(query: ListOrganisationsQueryDto) {
    const actif = query.actif === "true" ? true : query.actif === "false" ? false : undefined;
    return this.prisma.organisation.findMany({
      where: { type: query.type, actif },
      // §12.1 — statut de chacun des modules de l'établissement.
      include: { abonnementsModule: { select: { id: true, module: true, statut: true, essaiDebut: true, essaiFin: true, activeLe: true, expireLe: true } } },
      orderBy: { nom: "asc" },
    });
  }

  // Fiche établissement (admin) : infos + compteurs réels (utilisateurs,
  // patients, EI, réservations) — périmètre exact validé dans ROADMAP.md (D2).
  async obtenirDetailAdmin(organisationId: string) {
    const organisation = await this.prisma.organisation.findUnique({
      where: { id: organisationId },
      include: {
        _count: {
          select: { utilisateurs: true, patients: true, evenementsIndesirables: true, reservations: true },
        },
        abonnementsModule: { select: { id: true, module: true, statut: true, essaiDebut: true, essaiFin: true, activeLe: true, expireLe: true } },
        // §6.5 / §12.1 — historique des évaluations (scores uniquement).
        sessionsEvaluation: {
          where: { statut: "SOUMISE" },
          select: {
            id: true,
            scoreGlobal: true,
            dateSoumission: true,
            grille: { select: { nom: true, version: true } },
          },
          orderBy: { dateSoumission: "desc" },
        },
      },
    });
    if (!organisation) throw new NotFoundException("Organisation introuvable");

    // §12.1 / §12.3 — alertes cliniques et EI : agrégats uniquement (aucune
    // donnée patient ni description d'EI), réservations de formation.
    const [alertes, evenements, reservations] = await Promise.all([
      this.prisma.alerte.groupBy({ by: ["niveauRisque", "statut"], where: { organisationId }, _count: { _all: true } }),
      this.prisma.evenementIndesirable.groupBy({ by: ["statut"], where: { organisationId }, _count: { _all: true } }),
      this.prisma.reservation.findMany({
        where: { organisationId },
        select: {
          id: true,
          formule: true,
          statut: true,
          tarifApplique: true,
          dateRdv: true,
          createdAt: true,
          formation: { select: { titre: true } },
        },
        orderBy: { createdAt: "desc" },
      }),
    ]);
    return {
      ...organisation,
      alertesNews: alertes.map((a) => ({ niveauRisque: a.niveauRisque, statut: a.statut, nombre: a._count._all })),
      evenementsParStatut: Object.fromEntries(evenements.map((e) => [e.statut, e._count._all])),
      reservationsFormations: reservations,
    };
  }

  async activer(organisationId: string, acteurId: string) {
    const avant = await this.obtenir(organisationId);
    const apres = await this.prisma.organisation.update({ where: { id: organisationId }, data: { actif: true } });
    await this.tracer(acteurId, organisationId, "etablissement.activer", avant.actif, apres.actif);
    return apres;
  }

  async desactiver(organisationId: string, acteurId: string) {
    const avant = await this.obtenir(organisationId);
    const [apres] = await this.prisma.$transaction([
      this.prisma.organisation.update({ where: { id: organisationId }, data: { actif: false } }),
      // §12.1 — désactivation effective : les sessions en cours sont fermées.
      this.prisma.refreshToken.updateMany({
        where: { revokedAt: null, utilisateur: { organisationId } },
        data: { revokedAt: new Date() },
      }),
    ]);
    await this.tracer(acteurId, organisationId, "etablissement.desactiver", avant.actif, apres.actif);
    return apres;
  }

  // D8.1 — auto-édition des coordonnées par le RESPONSABLE_COMPTE de
  // l'organisation elle-même (jamais un organisationId arbitraire : le
  // contrôleur ne passe ici que `user.organisationId` issu du token, voir
  // OrganisationsController.modifierMesInfos).
  async modifierMesInfos(organisationId: string, dto: ModifierOrganisationDto, acteurId: string) {
    const avant = await this.obtenir(organisationId);

    if (dto.email && dto.email !== avant.email) {
      const emailPris = await this.prisma.organisation.findUnique({ where: { email: dto.email } });
      if (emailPris) throw new ConflictException("Cet email est déjà utilisé par une autre organisation");
    }

    const apres = await this.prisma.organisation.update({
      where: { id: organisationId },
      data: {
        nom: dto.nom,
        raisonSociale: dto.raisonSociale,
        typeStructure: dto.typeStructure,
        adresse: dto.adresse,
        ville: dto.ville,
        pays: dto.pays,
        telephone: dto.telephone,
        email: dto.email,
      },
    });
    const champs = (o: typeof avant) => ({
      nom: o.nom,
      raisonSociale: o.raisonSociale,
      typeStructure: o.typeStructure,
      adresse: o.adresse,
      ville: o.ville,
      pays: o.pays,
      telephone: o.telephone,
      email: o.email,
    });

    await this.prisma.journalAudit.create({
      data: {
        organisationId,
        utilisateurId: acteurId,
        action: "etablissement.modifier_coordonnees",
        entite: "Organisation",
        entiteId: organisationId,
        donneesAvant: champs(avant),
        donneesApres: champs(apres),
      },
    });

    return apres;
  }

  // D7 — audit : qui (acteurId, l'admin), quoi (action), sur quelle
  // organisation (organisationId sert ici de cible, pas de portée de l'acteur).
  private async tracer(
    acteurId: string,
    organisationId: string,
    action: string,
    actifAvant: boolean,
    actifApres: boolean,
  ): Promise<void> {
    await this.prisma.journalAudit.create({
      data: {
        organisationId,
        utilisateurId: acteurId,
        action,
        entite: "Organisation",
        entiteId: organisationId,
        donneesAvant: { actif: actifAvant },
        donneesApres: { actif: actifApres },
      },
    });
  }
}
