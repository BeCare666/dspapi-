import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { TypesEiService } from "./types-ei.service.js";
import { CreateTypeEiDto } from "./dto/create-type-ei.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";

@Controller("types-ei")
export class TypesEiController {
  constructor(private readonly typesEiService: TypesEiService) {}

  @Get()
  lister(@Query("inclureInactifs") inclureInactifs?: string) {
    return this.typesEiService.lister(inclureInactifs === "true");
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Post()
  creer(@Body() dto: CreateTypeEiDto) {
    return this.typesEiService.creer(dto);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Post(":id/desactiver")
  desactiver(@Param("id") id: string) {
    return this.typesEiService.desactiver(id);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Post(":id/reactiver")
  reactiver(@Param("id") id: string) {
    return this.typesEiService.reactiver(id);
  }
}
