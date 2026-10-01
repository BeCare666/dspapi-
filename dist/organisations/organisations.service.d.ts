import { PrismaService } from "../prisma/prisma.service.js";
import type { ListOrganisationsQueryDto } from "./dto/list-organisations-query.dto.js";
import type { ModifierOrganisationDto } from "./dto/modifier-organisation.dto.js";
export declare class OrganisationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    obtenir(organisationId: string): Promise<{
        id: string;
        nom: string;
        ifu: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        adresse: string | null;
        telephone: string | null;
        email: string | null;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    lister(query: ListOrganisationsQueryDto): Promise<{
        id: string;
        nom: string;
        ifu: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        adresse: string | null;
        telephone: string | null;
        email: string | null;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    obtenirDetailAdmin(organisationId: string): Promise<{
        _count: {
            reservations: number;
            utilisateurs: number;
            patients: number;
            evenementsIndesirables: number;
        };
    } & {
        id: string;
        nom: string;
        ifu: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        adresse: string | null;
        telephone: string | null;
        email: string | null;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    activer(organisationId: string, acteurId: string): Promise<{
        id: string;
        nom: string;
        ifu: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        adresse: string | null;
        telephone: string | null;
        email: string | null;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    desactiver(organisationId: string, acteurId: string): Promise<{
        id: string;
        nom: string;
        ifu: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        adresse: string | null;
        telephone: string | null;
        email: string | null;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    modifierMesInfos(organisationId: string, dto: ModifierOrganisationDto, acteurId: string): Promise<{
        id: string;
        nom: string;
        ifu: string;
        type: import("../generated/prisma/enums.js").TypeEtablissement;
        adresse: string | null;
        telephone: string | null;
        email: string | null;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private tracer;
}
