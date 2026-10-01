import { AuditService } from "./audit.service.js";
import { ListAuditQueryDto } from "./dto/list-audit-query.dto.js";
export declare class AuditController {
    private readonly auditService;
    constructor(auditService: AuditService);
    lister(query: ListAuditQueryDto): Promise<({
        organisation: {
            id: string;
            nom: string;
        } | null;
        utilisateur: {
            id: string;
            nom: string;
            email: string;
            prenom: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        organisationId: string | null;
        utilisateurId: string | null;
        action: string;
        entite: string;
        entiteId: string | null;
        donneesAvant: import("@prisma/client/runtime/client").JsonValue | null;
        donneesApres: import("@prisma/client/runtime/client").JsonValue | null;
    })[]>;
}
