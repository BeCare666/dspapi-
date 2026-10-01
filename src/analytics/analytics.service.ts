import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { StatutSessionEvaluation } from "../generated/prisma/enums.js";

// D6 — agrégats plateforme uniquement (comptages/moyennes), jamais de donnée
// individuelle/identifiante (RM7 + principe du moindre privilège). Chaque
// métrique est un instantané calculé en direct depuis les tables réelles —
// aucune valeur simulée, aucun Math.random(). Voir ROADMAP.md D6 pour la
// définition exacte de chaque métrique (source, portée, méthode de calcul).
@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async obtenirAnalytics() {
    const [
      etablissements,
      etablissementsParType,
      utilisateursTotal,
      utilisateursActifs,
      rolesGroupes,
      reservationsGroupees,
      formationsTotal,
      formationsActives,
      sessionsSoumises,
      eiBruts,
      newsGroupees,
    ] = await Promise.all([
      this.prisma.organisation.groupBy({ by: ["actif"], _count: { _all: true } }),
      this.prisma.organisation.groupBy({ by: ["type"], _count: { _all: true } }),
      this.prisma.utilisateur.count(),
      this.prisma.utilisateur.count({ where: { actif: true } }),
      this.prisma.utilisateurRole.groupBy({ by: ["role"], _count: { _all: true } }),
      this.prisma.reservation.groupBy({ by: ["statut"], _count: { _all: true } }),
      this.prisma.formation.count(),
      this.prisma.formation.count({ where: { actif: true } }),
      this.prisma.sessionEvaluation.findMany({
        where: { statut: StatutSessionEvaluation.SOUMISE },
        select: { scoreGlobal: true, organisation: { select: { type: true } } },
      }),
      this.prisma.evenementIndesirable.findMany({
        select: { statut: true, niveauGravite: { select: { libelle: true } }, dateDeclaration: true, dateCloture: true },
      }),
      this.prisma.mesureNews.groupBy({ by: ["niveauRisque"], _count: { _all: true } }),
    ]);

    // M1 — Établissements (Organisation.actif / .type, comptage).
    const m1Etablissements = {
      total: etablissementsParType.reduce((s, g) => s + g._count._all, 0),
      actifs: etablissements.find((g) => g.actif)?._count._all ?? 0,
      inactifs: etablissements.find((g) => !g.actif)?._count._all ?? 0,
      parType: Object.fromEntries(etablissementsParType.map((g) => [g.type, g._count._all])),
    };

    // M2 — Utilisateurs (Utilisateur.actif, UtilisateurRole groupé par rôle).
    const m2Utilisateurs = {
      total: utilisateursTotal,
      actifs: utilisateursActifs,
      inactifs: utilisateursTotal - utilisateursActifs,
      parRole: Object.fromEntries(rolesGroupes.map((g) => [g.role, g._count._all])),
    };

    // M3 — Réservations par statut (Reservation.statut, snapshot).
    const m3Reservations = Object.fromEntries(reservationsGroupees.map((g) => [g.statut, g._count._all]));

    // M4 — Formations actives/inactives (Formation.actif).
    const m4Formations = { total: formationsTotal, actives: formationsActives, inactives: formationsTotal - formationsActives };

    // M5 — Score moyen d'auto-évaluation (SessionEvaluation.scoreGlobal, sessions
    // SOUMISE uniquement), par type d'établissement — aucune donnée patient.
    const scoresParType = new Map<string, number[]>();
    for (const s of sessionsSoumises) {
      if (s.scoreGlobal === null) continue;
      const type = s.organisation.type;
      if (!scoresParType.has(type)) scoresParType.set(type, []);
      scoresParType.get(type)!.push(s.scoreGlobal);
    }
    const m5AutoEvaluation = {
      nombreSessionsSoumises: sessionsSoumises.length,
      scoreMoyenParType: Object.fromEntries(
        [...scoresParType.entries()].map(([type, scores]) => [
          type,
          Math.round((scores.reduce((s, v) => s + v, 0) / scores.length) * 10) / 10,
        ]),
      ),
    };

    // M6 — Événements indésirables plateforme (mêmes calculs que le tableau de
    // bord par organisation, sans filtre organisationId ; aucun champ
    // `description` chargé — uniquement statut/gravité/dates).
    const parStatutEi: Record<string, number> = {};
    const parGraviteEi: Record<string, number> = {};
    let sommeDelaisJours = 0;
    let nombreClotures = 0;
    for (const e of eiBruts) {
      parStatutEi[e.statut] = (parStatutEi[e.statut] ?? 0) + 1;
      if (e.niveauGravite) parGraviteEi[e.niveauGravite.libelle] = (parGraviteEi[e.niveauGravite.libelle] ?? 0) + 1;
      if (e.dateCloture) {
        nombreClotures++;
        sommeDelaisJours += (e.dateCloture.getTime() - e.dateDeclaration.getTime()) / 86_400_000;
      }
    }
    const m6EvenementsIndesirables = {
      total: eiBruts.length,
      parStatut: parStatutEi,
      parGravite: parGraviteEi,
      tauxClotureePct: eiBruts.length ? Math.round((nombreClotures / eiBruts.length) * 10000) / 100 : 0,
      delaiMoyenClotureJours: nombreClotures ? Math.round((sommeDelaisJours / nombreClotures) * 10) / 10 : null,
    };

    // M7 — Volume de mesures NEWS par niveau de risque (activité, pas
    // d'identité patient — MesureNews.niveauRisque, comptage global).
    const m7MesuresNews = Object.fromEntries(newsGroupees.map((g) => [g.niveauRisque, g._count._all]));

    return {
      etablissements: m1Etablissements,
      utilisateurs: m2Utilisateurs,
      reservationsParStatut: m3Reservations,
      formations: m4Formations,
      autoEvaluation: m5AutoEvaluation,
      evenementsIndesirables: m6EvenementsIndesirables,
      mesuresNewsParNiveau: m7MesuresNews,
    };
  }

  // §6.5 — vue globale comparant les niveaux de conformité entre
  // établissements : dernier score soumis par grille, score précédent et
  // nombre d'évaluations. Scores documentaires uniquement, aucune donnée patient.
  async conformiteParEtablissement() {
    const sessions = await this.prisma.sessionEvaluation.findMany({
      where: { statut: StatutSessionEvaluation.SOUMISE },
      select: {
        organisationId: true,
        scoreGlobal: true,
        dateSoumission: true,
        organisation: { select: { nom: true, type: true } },
        grille: { select: { nom: true, version: true } },
      },
      orderBy: { dateSoumission: "asc" },
    });

    const parCle = new Map<
      string,
      {
        organisationId: string;
        organisationNom: string;
        categorie: string;
        grille: string;
        nombreEvaluations: number;
        dernierScore: number | null;
        scorePrecedent: number | null;
        derniereSoumission: string | null;
      }
    >();
    for (const s of sessions) {
      const cle = `${s.organisationId}|${s.grille.nom}`;
      const ligne = parCle.get(cle) ?? {
        organisationId: s.organisationId,
        organisationNom: s.organisation.nom,
        categorie: s.organisation.type,
        grille: s.grille.nom,
        nombreEvaluations: 0,
        dernierScore: null,
        scorePrecedent: null,
        derniereSoumission: null,
      };
      ligne.nombreEvaluations++;
      ligne.scorePrecedent = ligne.dernierScore;
      ligne.dernierScore = s.scoreGlobal;
      ligne.derniereSoumission = s.dateSoumission?.toISOString() ?? null;
      parCle.set(cle, ligne);
    }
    return [...parCle.values()].sort((a, b) => (b.dernierScore ?? 0) - (a.dernierScore ?? 0));
  }

  // §12.6 — nombre d'établissements inscrits, d'évaluations, d'alertes
  // cliniques, d'EI déclarés et de réservations sur une période, avec leur
  // évolution mois par mois ; établissements actifs par module (instantané).
  async activite(debutIso?: string, finIso?: string) {
    const fin = finIso ? new Date(`${finIso.slice(0, 10)}T23:59:59.999Z`) : new Date();
    const debut = debutIso
      ? new Date(`${debutIso.slice(0, 10)}T00:00:00.000Z`)
      : new Date(Date.UTC(fin.getUTCFullYear() - 1, fin.getUTCMonth() + 1, 1));
    const periode = { gte: debut, lte: fin };

    const [organisations, evaluations, alertes, evenements, reservations, abonnements] = await Promise.all([
      this.prisma.organisation.findMany({ where: { createdAt: periode }, select: { createdAt: true } }),
      this.prisma.sessionEvaluation.findMany({
        where: { statut: StatutSessionEvaluation.SOUMISE, dateSoumission: periode },
        select: { dateSoumission: true },
      }),
      this.prisma.alerte.findMany({ where: { createdAt: periode }, select: { createdAt: true } }),
      this.prisma.evenementIndesirable.findMany({ where: { dateDeclaration: periode }, select: { dateDeclaration: true } }),
      this.prisma.reservation.findMany({ where: { createdAt: periode }, select: { createdAt: true } }),
      this.prisma.abonnementModule.groupBy({ by: ["module", "statut"], _count: { _all: true } }),
    ]);

    // Mois de la période (AAAA-MM), y compris ceux sans activité.
    const mois: string[] = [];
    for (let d = new Date(Date.UTC(debut.getUTCFullYear(), debut.getUTCMonth(), 1)); d <= fin; d.setUTCMonth(d.getUTCMonth() + 1)) {
      mois.push(d.toISOString().slice(0, 7));
    }
    const serie = (dates: (Date | null)[]) => {
      const compte = new Map(mois.map((m) => [m, 0]));
      for (const date of dates) {
        if (!date) continue;
        const cle = date.toISOString().slice(0, 7);
        if (compte.has(cle)) compte.set(cle, compte.get(cle)! + 1);
      }
      return mois.map((m) => compte.get(m)!);
    };

    const actifsParModule: Record<string, Record<string, number>> = {};
    for (const a of abonnements) {
      actifsParModule[a.module] ??= {};
      actifsParModule[a.module][a.statut] = a._count._all;
    }

    return {
      periode: { debut: debut.toISOString(), fin: fin.toISOString() },
      totaux: {
        etablissementsInscrits: organisations.length,
        evaluationsSoumises: evaluations.length,
        alertesNews: alertes.length,
        evenementsIndesirables: evenements.length,
        reservations: reservations.length,
      },
      mois,
      series: {
        etablissementsInscrits: serie(organisations.map((o) => o.createdAt)),
        evaluationsSoumises: serie(evaluations.map((e) => e.dateSoumission)),
        alertesNews: serie(alertes.map((a) => a.createdAt)),
        evenementsIndesirables: serie(evenements.map((e) => e.dateDeclaration)),
        reservations: serie(reservations.map((r) => r.createdAt)),
      },
      // Statut des modules payants par établissement (essai, actif, expiré, suspendu).
      modulesParStatut: actifsParModule,
    };
  }
}
