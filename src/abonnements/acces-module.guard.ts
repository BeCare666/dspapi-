import { applyDecorators, Injectable, SetMetadata, UseGuards, type CanActivate, type ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import type { Request } from "express";
import { AbonnementsService } from "./abonnements.service.js";
import type { ModuleMetier } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

export const MODULE_ABONNE_KEY = "moduleAbonne";

// §5 / §10.5 — déclare qu'un contrôleur (ou une route) relève d'un module
// soumis à abonnement (NEWS ou EI). Le statut d'abonnement de l'établissement
// est alors vérifié à chaque requête : lecture (GET) ou écriture (autres verbes).
// Garde posée au niveau du contrôleur : elle s'exécute après les gardes
// globales (authentification, rôles), donc `request.user` est disponible.
export const ModuleAbonne = (module: ModuleMetier) =>
  applyDecorators(SetMetadata(MODULE_ABONNE_KEY, module), UseGuards(AccesModuleGuard));

@Injectable()
export class AccesModuleGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly abonnements: AbonnementsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const module = this.reflector.getAllAndOverride<ModuleMetier | undefined>(MODULE_ABONNE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!module) return true;

    const requete = context.switchToHttp().getRequest<Request & { user?: JwtAccessPayload }>();
    // Compte sans organisation (admin, individuel) : refusé plus loin par les
    // services (exigerOrganisation), comportement inchangé.
    const organisationId = requete.user?.organisationId;
    if (!organisationId) return true;

    const mode = requete.method === "GET" ? "lecture" : "ecriture";
    await this.abonnements.verifierAcces(organisationId, module, mode);
    return true;
  }
}
