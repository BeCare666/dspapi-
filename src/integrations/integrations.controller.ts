import { Controller, Get } from "@nestjs/common";
import { IntegrationsService } from "./integrations.service.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Permissions } from "../auth/decorators/permissions.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";

@Roles(RoleUtilisateur.ADMIN_PLATEFORME)
@Controller("integrations")
export class IntegrationsController {
  constructor(private readonly integrationsService: IntegrationsService) {}

  @Permissions("INTEGRATIONS_READ")
  @Get()
  verifierEtat() {
    return this.integrationsService.verifierEtat();
  }
}
