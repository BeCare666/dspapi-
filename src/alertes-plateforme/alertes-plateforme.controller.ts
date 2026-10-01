import { Controller, Get } from "@nestjs/common";
import { AlertesPlateformeService } from "./alertes-plateforme.service.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Permissions } from "../auth/decorators/permissions.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";

@Roles(RoleUtilisateur.ADMIN_PLATEFORME)
@Controller("alertes-plateforme")
export class AlertesPlateformeController {
  constructor(private readonly alertesPlateformeService: AlertesPlateformeService) {}

  @Permissions("ALERTES_READ")
  @Get()
  obtenirAlertes() {
    return this.alertesPlateformeService.obtenirAlertes();
  }
}
