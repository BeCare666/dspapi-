import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { NiveauxGraviteService } from "./niveaux-gravite.service.js";
import { CreerNiveauGraviteDto, ModifierNiveauGraviteDto } from "./dto/niveau-gravite.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";

// §12.4 — échelle de gravité des EI : lecture par tout utilisateur connecté
// (formulaires de déclaration et de qualification), écriture par l'admin.
@Controller("niveaux-gravite-ei")
export class NiveauxGraviteController {
  constructor(private readonly niveaux: NiveauxGraviteService) {}

  @Get()
  lister(@Query("inclureInactifs") inclureInactifs?: string) {
    return this.niveaux.lister(inclureInactifs === "true");
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Post()
  creer(@Body() dto: CreerNiveauGraviteDto) {
    return this.niveaux.creer(dto);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Patch(":id")
  modifier(@Param("id") id: string, @Body() dto: ModifierNiveauGraviteDto) {
    return this.niveaux.modifier(id, dto);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @HttpCode(HttpStatus.OK)
  @Post(":id/desactiver")
  desactiver(@Param("id") id: string) {
    return this.niveaux.basculer(id, false);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @HttpCode(HttpStatus.OK)
  @Post(":id/reactiver")
  reactiver(@Param("id") id: string) {
    return this.niveaux.basculer(id, true);
  }
}
