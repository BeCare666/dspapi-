import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { StatutAlerte, StatutEi } from "../generated/prisma/enums.js";

// D5 — couche de lecture agrégée au-dessus des sources d'alertes RÉELLEMENT
// existantes (Alerte NEWS, EI de gravité critique non clôturés). Aucune
// nouvelle table. Volontairement agrégé par (organisation, catégorie, statut)
// — jamais au niveau du patient/de l'incident individuel : RM7 interdit
// d'exposer des données patient à un compte ADMIN_PLATEFORME, même agrégées
// par établissement mais nominatives au niveau ligne. Voir ROADMAP.md D5.
export interface LigneAlertePlateforme {
  organisationId: string;
  organisationNom: string;
  source: "NEWS" | "EI";
  niveau: string;
  statut: string;
  nombre: number;
  depuisLe: string;
}

@Injectable()
export class AlertesPlateformeService {
  constructor(private readonly prisma: PrismaService) {}

  async obtenirAlertes(): Promise<{ lignes: LigneAlertePlateforme[]; totalNews: number; totalEi: number }> {
    const [groupesNews, groupesEi] = await Promise.all([
      this.prisma.alerte.groupBy({
        by: ["organisationId", "niveauRisque", "statut"],
        where: { statut: { not: StatutAlerte.CLOTUREE } },
        _count: { _all: true },
        _min: { createdAt: true },
      }),
      this.prisma.evenementIndesirable.groupBy({
        by: ["organisationId", "statut"],
        where: { niveauGravite: { critique: true }, statut: { not: StatutEi.CLOTURE } },
        _count: { _all: true },
        _min: { dateDeclaration: true },
      }),
    ]);

    const idsOrganisations = [
      ...new Set([...groupesNews.map((g) => g.organisationId), ...groupesEi.map((g) => g.organisationId)]),
    ];
    const organisations = await this.prisma.organisation.findMany({
      where: { id: { in: idsOrganisations } },
      select: { id: true, nom: true },
    });
    const nomOrganisation = new Map(organisations.map((o) => [o.id, o.nom]));

    const lignes: LigneAlertePlateforme[] = [
      ...groupesNews.map((g) => ({
        organisationId: g.organisationId,
        organisationNom: nomOrganisation.get(g.organisationId) ?? "Établissement inconnu",
        source: "NEWS" as const,
        niveau: g.niveauRisque,
        statut: g.statut,
        nombre: g._count._all,
        depuisLe: (g._min.createdAt ?? new Date()).toISOString(),
      })),
      ...groupesEi.map((g) => ({
        organisationId: g.organisationId,
        organisationNom: nomOrganisation.get(g.organisationId) ?? "Établissement inconnu",
        source: "EI" as const,
        niveau: "ELEVE",
        statut: g.statut,
        nombre: g._count._all,
        depuisLe: (g._min.dateDeclaration ?? new Date()).toISOString(),
      })),
    ].sort((a, b) => a.depuisLe.localeCompare(b.depuisLe));

    return {
      lignes,
      totalNews: groupesNews.reduce((s, g) => s + g._count._all, 0),
      totalEi: groupesEi.reduce((s, g) => s + g._count._all, 0),
    };
  }
}
