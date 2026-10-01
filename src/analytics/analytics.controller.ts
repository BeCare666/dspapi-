import { Controller, Get, Query } from "@nestjs/common";
import { ActiviteQueryDto } from "./dto/activite-query.dto.js";
import { AnalyticsService } from "./analytics.service.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Permissions } from "../auth/decorators/permissions.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";

@Roles(RoleUtilisateur.ADMIN_PLATEFORME)
@Controller("analytics")
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Permissions("ANALYTICS_READ")
  @Get()
  obtenirAnalytics() {
    return this.analyticsService.obtenirAnalytics();
  }

  // §12.6 — activité par période et évolution mensuelle ; établissements actifs par module.
  @Permissions("ANALYTICS_READ")
  @Get("activite")
  activite(@Query() query: ActiviteQueryDto) {
    return this.analyticsService.activite(query.debut, query.fin);
  }

  // §6.5 — comparaison des niveaux de conformité entre établissements.
  @Permissions("ANALYTICS_READ")
  @Get("conformite")
  conformite() {
    return this.analyticsService.conformiteParEtablissement();
  }
}
