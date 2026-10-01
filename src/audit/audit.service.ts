import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import type { ListAuditQueryDto } from "./dto/list-audit-query.dto.js";

// D7 — ne jamais charger toute la table (rule 20) : les 200 entrées les plus
// récentes, filtrables. Pas de pagination serveur pour l'instant (même
// convention que le reste du dashboard admin, cf. ROADMAP.md §10.8).
const LIMITE = 200;

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  async lister(query: ListAuditQueryDto) {
    return this.prisma.journalAudit.findMany({
      where: {
        organisationId: query.organisationId,
        utilisateurId: query.utilisateurId,
        entite: query.entite,
        action: query.action,
      },
      include: {
        utilisateur: { select: { id: true, nom: true, prenom: true, email: true } },
        organisation: { select: { id: true, nom: true } },
      },
      orderBy: { createdAt: "desc" },
      take: LIMITE,
    });
  }
}
