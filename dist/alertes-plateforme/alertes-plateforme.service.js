var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { StatutAlerte, StatutEi, GraviteEi } from "../generated/prisma/enums.js";
let AlertesPlateformeService = class AlertesPlateformeService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async obtenirAlertes() {
        const [groupesNews, groupesEi] = await Promise.all([
            this.prisma.alerte.groupBy({
                by: ["organisationId", "niveauRisque", "statut"],
                where: { statut: { not: StatutAlerte.CLOTUREE } },
                _count: { _all: true },
                _min: { createdAt: true },
            }),
            this.prisma.evenementIndesirable.groupBy({
                by: ["organisationId", "statut"],
                where: { gravite: GraviteEi.ELEVEE, statut: { not: StatutEi.CLOTURE } },
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
        const lignes = [
            ...groupesNews.map((g) => ({
                organisationId: g.organisationId,
                organisationNom: nomOrganisation.get(g.organisationId) ?? "Établissement inconnu",
                source: "NEWS",
                niveau: g.niveauRisque,
                statut: g.statut,
                nombre: g._count._all,
                depuisLe: (g._min.createdAt ?? new Date()).toISOString(),
            })),
            ...groupesEi.map((g) => ({
                organisationId: g.organisationId,
                organisationNom: nomOrganisation.get(g.organisationId) ?? "Établissement inconnu",
                source: "EI",
                niveau: GraviteEi.ELEVEE,
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
};
AlertesPlateformeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], AlertesPlateformeService);
export { AlertesPlateformeService };
//# sourceMappingURL=alertes-plateforme.service.js.map