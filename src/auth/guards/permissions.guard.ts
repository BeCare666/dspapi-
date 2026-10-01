import { Injectable, ForbiddenException, type CanActivate, type ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import type { Request } from "express";
import { resoudrePermissions, type Permission } from "@dps/shared";
import { PERMISSIONS_KEY } from "../decorators/permissions.decorator.js";
import type { JwtAccessPayload } from "../types/jwt-payload.type.js";

// Couche additive, jamais un remplacement de RolesGuard (voir ROADMAP.md,
// Phase 1 permissions) : no-op tant qu'aucune route ne porte @Permissions(...),
// donc sans aucun effet sur le comportement actuel tant qu'on ne migre pas
// explicitement un contrôleur. Sémantique AND (toutes les permissions listées
// sont requises), à la différence de RolesGuard qui est en OR (un seul rôle
// suffit) — un choix délibéré, les permissions étant plus atomiques/composables
// que les rôles.
@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<Permission[]>(PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredPermissions || requiredPermissions.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request & { user?: JwtAccessPayload }>();
    const userRoles = request.user?.roles ?? [];
    const permissionsUtilisateur = resoudrePermissions(userRoles);
    const autorise = requiredPermissions.every((permission) => permissionsUtilisateur.includes(permission));
    if (!autorise) {
      throw new ForbiddenException("Permission insuffisante pour cette action");
    }
    return true;
  }
}
