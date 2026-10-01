import { Controller, Get, Query } from "@nestjs/common";
import { AuditService } from "./audit.service.js";
import { ListAuditQueryDto } from "./dto/list-audit-query.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Permissions } from "../auth/decorators/permissions.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";

@Roles(RoleUtilisateur.ADMIN_PLATEFORME)
@Controller("audit")
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Permissions("AUDIT_READ")
  @Get()
  lister(@Query() query: ListAuditQueryDto) {
    return this.auditService.lister(query);
  }
}
