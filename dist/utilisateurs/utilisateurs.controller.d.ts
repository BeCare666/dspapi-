import { UtilisateursService } from "./utilisateurs.service.js";
import { ListUtilisateursQueryDto } from "./dto/list-utilisateurs-query.dto.js";
import { AjouterRoleDto } from "./dto/ajouter-role.dto.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
export declare class UtilisateursController {
    private readonly utilisateursService;
    constructor(utilisateursService: UtilisateursService);
    lister(query: ListUtilisateursQueryDto): Promise<{
        id: string;
        nom: string;
        email: string;
        actif: boolean;
        createdAt: Date;
        organisationId: string | null;
        serviceId: string | null;
        typeCompte: import("../generated/prisma/enums.js").TypeCompte;
        prenom: string;
        emailVerifieLe: Date | null;
        organisation: {
            id: string;
            nom: string;
        } | null;
        roles: {
            role: RoleUtilisateur;
        }[];
    }[]>;
    obtenir(id: string): Promise<{
        id: string;
        nom: string;
        email: string;
        actif: boolean;
        createdAt: Date;
        organisationId: string | null;
        serviceId: string | null;
        typeCompte: import("../generated/prisma/enums.js").TypeCompte;
        prenom: string;
        emailVerifieLe: Date | null;
        organisation: {
            id: string;
            nom: string;
        } | null;
        roles: {
            role: RoleUtilisateur;
        }[];
    }>;
    desactiver(id: string, user: JwtAccessPayload): Promise<{
        id: string;
        nom: string;
        email: string;
        actif: boolean;
        createdAt: Date;
        organisationId: string | null;
        serviceId: string | null;
        typeCompte: import("../generated/prisma/enums.js").TypeCompte;
        prenom: string;
        emailVerifieLe: Date | null;
        organisation: {
            id: string;
            nom: string;
        } | null;
        roles: {
            role: RoleUtilisateur;
        }[];
    }>;
    reactiver(id: string, user: JwtAccessPayload): Promise<{
        id: string;
        nom: string;
        email: string;
        actif: boolean;
        createdAt: Date;
        organisationId: string | null;
        serviceId: string | null;
        typeCompte: import("../generated/prisma/enums.js").TypeCompte;
        prenom: string;
        emailVerifieLe: Date | null;
        organisation: {
            id: string;
            nom: string;
        } | null;
        roles: {
            role: RoleUtilisateur;
        }[];
    }>;
    listerSessions(id: string): Promise<{
        id: string;
        createdAt: Date;
        expiresAt: Date;
        revokedAt: Date | null;
    }[]>;
    revoquerSession(id: string, sessionId: string): Promise<{
        id: string;
        createdAt: Date;
        utilisateurId: string;
        tokenHash: string;
        expiresAt: Date;
        revokedAt: Date | null;
    }>;
    ajouterRole(id: string, dto: AjouterRoleDto, user: JwtAccessPayload): Promise<{
        id: string;
        nom: string;
        email: string;
        actif: boolean;
        createdAt: Date;
        organisationId: string | null;
        serviceId: string | null;
        typeCompte: import("../generated/prisma/enums.js").TypeCompte;
        prenom: string;
        emailVerifieLe: Date | null;
        organisation: {
            id: string;
            nom: string;
        } | null;
        roles: {
            role: RoleUtilisateur;
        }[];
    }>;
    retirerRole(id: string, role: string, user: JwtAccessPayload): Promise<{
        id: string;
        nom: string;
        email: string;
        actif: boolean;
        createdAt: Date;
        organisationId: string | null;
        serviceId: string | null;
        typeCompte: import("../generated/prisma/enums.js").TypeCompte;
        prenom: string;
        emailVerifieLe: Date | null;
        organisation: {
            id: string;
            nom: string;
        } | null;
        roles: {
            role: RoleUtilisateur;
        }[];
    }>;
}
