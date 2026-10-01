import { PrismaService } from "../prisma/prisma.service.js";
import { ParametresService } from "../parametres/parametres.service.js";
import { ModuleMetier, StatutAbonnement } from "../generated/prisma/enums.js";
import type { AbonnementModule } from "../generated/prisma/client.js";
export declare class AbonnementsService {
    private readonly prisma;
    private readonly parametres;
    constructor(prisma: PrismaService, parametres: ParametresService);
    verifierAcces(organisationId: string, module: ModuleMetier): Promise<AbonnementModule>;
    obtenirStatut(organisationId: string, module: ModuleMetier): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        statut: StatutAbonnement;
        module: ModuleMetier;
        essaiDebut: Date;
        essaiFin: Date;
        activeLe: Date | null;
    } | null>;
    activerManuellement(organisationId: string, module: ModuleMetier): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organisationId: string;
        statut: StatutAbonnement;
        module: ModuleMetier;
        essaiDebut: Date;
        essaiFin: Date;
        activeLe: Date | null;
    }>;
    expirerEssaisEchus(): Promise<number>;
}
