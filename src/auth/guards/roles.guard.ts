import { Injectable, ForbiddenException, type CanActivate, type ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import type { Request } from "express";
import { ROLES_KEY } from "../decorators/roles.decorator.js";
import type { RoleUtilisateur } from "../../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../types/jwt-payload.type.js";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<RoleUtilisateur[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request & { user?: JwtAccessPayload }>();
    const userRoles = request.user?.roles ?? [];
    const autorise = requiredRoles.some((role) => userRoles.includes(role));
    if (!autorise) {
      throw new ForbiddenException("Rôle insuffisant pour cette action");
    }
    return true;
  }
}
