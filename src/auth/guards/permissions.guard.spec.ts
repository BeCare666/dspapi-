import { ForbiddenException, type ExecutionContext } from "@nestjs/common";
import type { Reflector } from "@nestjs/core";
import { PermissionsGuard } from "./permissions.guard.js";
import type { Permission } from "@dps/shared";
import type { JwtAccessPayload } from "../types/jwt-payload.type.js";
import type { RoleUtilisateur } from "../../generated/prisma/enums.js";

function buildContext(user?: Partial<JwtAccessPayload>): ExecutionContext {
  const request = { user };
  return {
    getHandler: () => vi.fn(),
    getClass: () => vi.fn(),
    switchToHttp: () => ({ getRequest: () => request }),
  } as unknown as ExecutionContext;
}

function buildReflector(requiredPermissions: Permission[] | undefined): Reflector {
  return { getAllAndOverride: vi.fn().mockReturnValue(requiredPermissions) } as unknown as Reflector;
}

describe("PermissionsGuard", () => {
  it("autorise sans condition si la route ne porte pas @Permissions()", () => {
    const guard = new PermissionsGuard(buildReflector(undefined));
    const context = buildContext({ roles: [] as RoleUtilisateur[] });
    expect(guard.canActivate(context)).toBe(true);
  });

  it("autorise si le rôle de l'utilisateur donne la permission requise", () => {
    const guard = new PermissionsGuard(buildReflector(["EI_READ"]));
    const context = buildContext({ roles: ["RESPONSABLE_COMPTE"] as RoleUtilisateur[] });
    expect(guard.canActivate(context)).toBe(true);
  });

  it("refuse si aucun rôle de l'utilisateur ne donne la permission requise", () => {
    const guard = new PermissionsGuard(buildReflector(["USERS_READ"]));
    const context = buildContext({ roles: ["PERSONNEL_SOIGNANT"] as RoleUtilisateur[] });
    expect(() => guard.canActivate(context)).toThrow(ForbiddenException);
  });

  it("exige TOUTES les permissions listées (sémantique AND)", () => {
    const guard = new PermissionsGuard(buildReflector(["EI_READ", "USERS_READ"]));
    // RESPONSABLE_COMPTE a EI_READ mais pas USERS_READ.
    const context = buildContext({ roles: ["RESPONSABLE_COMPTE"] as RoleUtilisateur[] });
    expect(() => guard.canActivate(context)).toThrow(ForbiddenException);
  });

  it("cumule les permissions de plusieurs rôles (multi-rôle)", () => {
    const guard = new PermissionsGuard(buildReflector(["EI_READ", "RESERVATIONS_MANAGE"]));
    // Aucun rôle seul n'a les deux, mais leur cumul les a.
    const context = buildContext({
      roles: ["RESPONSABLE_COMPTE", "GESTIONNAIRE_FORMATION"] as RoleUtilisateur[],
    });
    expect(guard.canActivate(context)).toBe(true);
  });

  it("refuse un utilisateur sans rôle du tout", () => {
    const guard = new PermissionsGuard(buildReflector(["EI_READ"]));
    const context = buildContext(undefined);
    expect(() => guard.canActivate(context)).toThrow(ForbiddenException);
  });

  it("ADMIN_PLATEFORME n'a pas de permission NEWS/EI (pas d'organisationId, RM7)", () => {
    const guard = new PermissionsGuard(buildReflector(["NEWS_READ"]));
    const context = buildContext({ roles: ["ADMIN_PLATEFORME"] as RoleUtilisateur[] });
    expect(() => guard.canActivate(context)).toThrow(ForbiddenException);
  });
});
