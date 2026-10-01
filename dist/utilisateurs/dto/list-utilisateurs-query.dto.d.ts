import { RoleUtilisateur } from "../../generated/prisma/enums.js";
export declare class ListUtilisateursQueryDto {
    organisationId?: string;
    role?: RoleUtilisateur;
    actif?: string;
}
