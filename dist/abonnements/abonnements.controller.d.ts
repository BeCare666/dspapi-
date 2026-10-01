import { AbonnementsService } from "./abonnements.service.js";
import { ModuleMetier } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
export declare class AbonnementsController {
    private readonly abonnementsService;
    constructor(abonnementsService: AbonnementsService);
    monStatut(module: ModuleMetier, user: JwtAccessPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        statut: import("../generated/prisma/enums.js").StatutAbonnement;
        module: ModuleMetier;
        essaiDebut: Date;
        essaiFin: Date;
        activeLe: Date | null;
    } | null>;
    activer(organisationId: string, module: ModuleMetier): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        statut: import("../generated/prisma/enums.js").StatutAbonnement;
        module: ModuleMetier;
        essaiDebut: Date;
        essaiFin: Date;
        activeLe: Date | null;
    }>;
}
