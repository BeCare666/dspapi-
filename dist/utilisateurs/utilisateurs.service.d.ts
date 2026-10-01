import { PrismaService } from "../prisma/prisma.service.js";
import type { RoleUtilisateur } from "../generated/prisma/enums.js";
import type { ListUtilisateursQueryDto } from "./dto/list-utilisateurs-query.dto.js";
export declare class UtilisateursService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    desactiver(id: string, acteurId: string): Promise<{
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
    reactiver(id: string, acteurId: string): Promise<{
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
    listerSessions(utilisateurId: string): Promise<{
        id: string;
        createdAt: Date;
        expiresAt: Date;
        revokedAt: Date | null;
    }[]>;
    revoquerSession(utilisateurId: string, sessionId: string): Promise<{
        id: string;
        createdAt: Date;
        utilisateurId: string;
        tokenHash: string;
        expiresAt: Date;
        revokedAt: Date | null;
    }>;
    ajouterRole(utilisateurId: string, role: RoleUtilisateur, acteurId: string): Promise<{
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
    retirerRole(utilisateurId: string, role: RoleUtilisateur, acteurId: string): Promise<{
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
    private tracer;
}
