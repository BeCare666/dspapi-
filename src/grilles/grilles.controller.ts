import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { GrillesService } from "./grilles.service.js";
import { CreateGrilleDto } from "./dto/create-grille.dto.js";
import { ListGrillesQueryDto } from "./dto/list-grilles-query.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

@Controller("grilles")
export class GrillesController {
  constructor(private readonly grillesService: GrillesService) {}

  @Get()
  lister(@Query() query: ListGrillesQueryDto, @CurrentUser() user: JwtAccessPayload) {
    return this.grillesService.lister(query, user.roles.includes(RoleUtilisateur.ADMIN_PLATEFORME));
  }

  @Get(":id")
  obtenir(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.grillesService.obtenir(id, user.roles.includes(RoleUtilisateur.ADMIN_PLATEFORME));
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Post()
  creer(@Body() dto: CreateGrilleDto) {
    return this.grillesService.creer(dto);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Patch(":id")
  mettreAJour(@Param("id") id: string, @Body() dto: CreateGrilleDto) {
    return this.grillesService.mettreAJour(id, dto);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Post(":id/publier")
  publier(@Param("id") id: string) {
    return this.grillesService.publier(id);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Post(":id/archiver")
  archiver(@Param("id") id: string) {
    return this.grillesService.archiver(id);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Post(":id/nouvelle-version")
  nouvelleVersion(@Param("id") id: string) {
    return this.grillesService.nouvelleVersion(id);
  }
}
