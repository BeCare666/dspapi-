import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { AlertesService } from "./alertes.service.js";
import { CreerInterventionDto } from "./dto/creer-intervention.dto.js";
import { ChangerStatutAlerteDto } from "./dto/changer-statut-alerte.dto.js";
import { ListAlertesQueryDto } from "./dto/list-alertes-query.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { ModuleMetier, RoleUtilisateur } from "../generated/prisma/enums.js";
import { ModuleAbonne } from "../abonnements/acces-module.guard.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

@Roles(RoleUtilisateur.PERSONNEL_SOIGNANT, RoleUtilisateur.RESP_QUALITE, RoleUtilisateur.RESPONSABLE_COMPTE)
// §5 — accès soumis au statut d'abonnement NEWS (lecture / écriture).
@ModuleAbonne(ModuleMetier.NEWS)
@Controller("alertes")
export class AlertesController {
  constructor(private readonly alertesService: AlertesService) {}

  @Get()
  lister(@Query() query: ListAlertesQueryDto, @CurrentUser() user: JwtAccessPayload) {
    return this.alertesService.lister(query, user);
  }

  @Get(":id")
  obtenir(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.alertesService.obtenir(id, user);
  }

  @Post(":id/interventions")
  ajouterIntervention(
    @Param("id") id: string,
    @Body() dto: CreerInterventionDto,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    return this.alertesService.ajouterIntervention(id, dto, user);
  }

  @Patch(":id/statut")
  changerStatut(@Param("id") id: string, @Body() dto: ChangerStatutAlerteDto, @CurrentUser() user: JwtAccessPayload) {
    return this.alertesService.changerStatut(id, dto, user);
  }
}
