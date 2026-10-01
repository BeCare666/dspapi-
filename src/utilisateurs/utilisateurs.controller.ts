import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query } from "@nestjs/common";
import { UtilisateursService } from "./utilisateurs.service.js";
import { ListUtilisateursQueryDto } from "./dto/list-utilisateurs-query.dto.js";
import { AjouterRoleDto } from "./dto/ajouter-role.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Permissions } from "../auth/decorators/permissions.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

// D3 — annuaire plateforme. USERS_CREATE volontairement absent (voir
// ROADMAP.md D3 : aucun flux métier défini pour la création d'un utilisateur
// par l'admin — point de décision explicite, pas assumé ici).
@Roles(RoleUtilisateur.ADMIN_PLATEFORME)
@Controller("utilisateurs")
export class UtilisateursController {
  constructor(private readonly utilisateursService: UtilisateursService) {}

  @Permissions("USERS_READ")
  @Get()
  lister(@Query() query: ListUtilisateursQueryDto) {
    return this.utilisateursService.lister(query);
  }

  @Permissions("USERS_READ")
  @Get(":id")
  obtenir(@Param("id") id: string) {
    return this.utilisateursService.obtenir(id);
  }

  @Permissions("USERS_DISABLE")
  @HttpCode(HttpStatus.OK)
  @Post(":id/desactiver")
  desactiver(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.utilisateursService.desactiver(id, user.sub);
  }

  @Permissions("USERS_UPDATE")
  @HttpCode(HttpStatus.OK)
  @Post(":id/reactiver")
  reactiver(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.utilisateursService.reactiver(id, user.sub);
  }

  @Permissions("USERS_READ")
  @Get(":id/sessions")
  listerSessions(@Param("id") id: string) {
    return this.utilisateursService.listerSessions(id);
  }

  @Permissions("USERS_UPDATE")
  @HttpCode(HttpStatus.OK)
  @Post(":id/sessions/:sessionId/revoquer")
  revoquerSession(@Param("id") id: string, @Param("sessionId") sessionId: string) {
    return this.utilisateursService.revoquerSession(id, sessionId);
  }

  @Permissions("USERS_UPDATE")
  @HttpCode(HttpStatus.OK)
  @Post(":id/roles")
  ajouterRole(@Param("id") id: string, @Body() dto: AjouterRoleDto, @CurrentUser() user: JwtAccessPayload) {
    return this.utilisateursService.ajouterRole(id, dto.role, user.sub);
  }

  @Permissions("USERS_UPDATE")
  @HttpCode(HttpStatus.OK)
  @Delete(":id/roles/:role")
  retirerRole(@Param("id") id: string, @Param("role") role: string, @CurrentUser() user: JwtAccessPayload) {
    if (!Object.values(RoleUtilisateur).includes(role as RoleUtilisateur)) {
      throw new BadRequestException(`Rôle inconnu : ${role}`);
    }
    return this.utilisateursService.retirerRole(id, role as RoleUtilisateur, user.sub);
  }
}
