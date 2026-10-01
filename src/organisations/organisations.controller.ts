import { Body, Controller, ForbiddenException, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { OrganisationsService } from "./organisations.service.js";
import { ListOrganisationsQueryDto } from "./dto/list-organisations-query.dto.js";
import { ModifierOrganisationDto } from "./dto/modifier-organisation.dto.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Permissions } from "../auth/decorators/permissions.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

@Controller("organisations")
export class OrganisationsController {
  constructor(private readonly organisationsService: OrganisationsService) {}

  @Get("me")
  moi(@CurrentUser() user: JwtAccessPayload) {
    if (!user.organisationId) {
      throw new ForbiddenException("Réservé aux comptes organisation");
    }
    return this.organisationsService.obtenir(user.organisationId);
  }

  // D8.1 — auto-édition des coordonnées de SA PROPRE organisation, réservée à
  // RESPONSABLE_COMPTE. Distinct de PATCH /organisations/:id (qui n'existe pas
  // pour l'admin aujourd'hui — non demandé) : `organisationId` provient
  // uniquement du token (`user.organisationId`), jamais d'un paramètre d'URL
  // fourni par le frontend — élimine toute possibilité de modifier une autre
  // organisation via cet endpoint.
  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @Patch("me")
  modifierMesInfos(@Body() dto: ModifierOrganisationDto, @CurrentUser() user: JwtAccessPayload) {
    if (!user.organisationId) {
      throw new ForbiddenException("Réservé aux comptes organisation");
    }
    return this.organisationsService.modifierMesInfos(user.organisationId, dto, user.sub);
  }

  // D2 — vue plateforme, premier contrôleur migré vers @Permissions() en plus
  // de @Roles() existant (coexistence, pas de remplacement — voir Phase 1).
  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Permissions("ORGANISATIONS_READ")
  @Get()
  lister(@Query() query: ListOrganisationsQueryDto) {
    return this.organisationsService.lister(query);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Permissions("ORGANISATIONS_READ")
  @Get(":id")
  obtenirDetailAdmin(@Param("id") id: string) {
    return this.organisationsService.obtenirDetailAdmin(id);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Permissions("ORGANISATIONS_MANAGE")
  @HttpCode(HttpStatus.OK)
  @Post(":id/activer")
  activer(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.organisationsService.activer(id, user.sub);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Permissions("ORGANISATIONS_MANAGE")
  @HttpCode(HttpStatus.OK)
  @Post(":id/desactiver")
  desactiver(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.organisationsService.desactiver(id, user.sub);
  }
}
