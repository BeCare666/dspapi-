import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { FormationsService } from "./formations.service.js";
import { CreateFormationDto } from "./dto/create-formation.dto.js";
import { Public } from "../auth/decorators/public.decorator.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";

@Controller("formations")
export class FormationsController {
  constructor(private readonly formationsService: FormationsService) {}

  // 10.1 — catalogue public (page d'accueil / présentation), pas d'auth requise.
  @Public()
  @Get()
  lister(@Query("inclureInactives") inclureInactives?: string) {
    return this.formationsService.lister(inclureInactives === "true");
  }

  @Public()
  @Get(":id")
  obtenir(@Param("id") id: string) {
    return this.formationsService.obtenir(id);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Post()
  creer(@Body() dto: CreateFormationDto) {
    return this.formationsService.creer(dto);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Patch(":id")
  mettreAJour(@Param("id") id: string, @Body() dto: CreateFormationDto) {
    return this.formationsService.mettreAJour(id, dto);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Post(":id/desactiver")
  desactiver(@Param("id") id: string) {
    return this.formationsService.desactiver(id);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Post(":id/reactiver")
  reactiver(@Param("id") id: string) {
    return this.formationsService.reactiver(id);
  }
}
