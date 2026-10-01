import { OrganisationsService } from "./organisations.service.js";
import { ListOrganisationsQueryDto } from "./dto/list-organisations-query.dto.js";
import { ModifierOrganisationDto } from "./dto/modifier-organisation.dto.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
export declare class OrganisationsController {
    private readonly organisationsService;
    constructor(organisationsService: OrganisationsService);
    moi(user: JwtAccessPayload): Promise<{
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
    modifierMesInfos(dto: ModifierOrganisationDto, user: JwtAccessPayload): Promise<{
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
    obtenirDetailAdmin(id: string): Promise<{
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
    activer(id: string, user: JwtAccessPayload): Promise<{
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
    desactiver(id: string, user: JwtAccessPayload): Promise<{
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
}
