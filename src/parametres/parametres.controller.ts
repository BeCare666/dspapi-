import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch } from "@nestjs/common";
import { ParametresService } from "./parametres.service.js";
import { ModifierParametreDto } from "./dto/modifier-parametre.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Permissions } from "../auth/decorators/permissions.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

@Roles(RoleUtilisateur.ADMIN_PLATEFORME)
@Controller("parametres")
export class ParametresController {
  constructor(private readonly parametresService: ParametresService) {}

  @Permissions("PARAMETRES_READ")
  @Get()
  listerTous() {
    return this.parametresService.listerTous();
  }

  @Permissions("PARAMETRES_MANAGE")
  @HttpCode(HttpStatus.OK)
  @Patch(":cle")
  modifier(@Param("cle") cle: string, @Body() dto: ModifierParametreDto, @CurrentUser() user: JwtAccessPayload) {
    return this.parametresService.modifier(cle, dto.valeur, user.sub);
  }
}
