import { Controller, Get } from "@nestjs/common";
import { SecuriteService } from "./securite.service.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Permissions } from "../auth/decorators/permissions.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";

@Roles(RoleUtilisateur.ADMIN_PLATEFORME)
@Controller("securite")
export class SecuriteController {
  constructor(private readonly securiteService: SecuriteService) {}

  @Permissions("SECURITE_READ")
  @Get()
  obtenirEtat() {
    return this.securiteService.obtenirEtat();
  }
}
