import type { RoleUtilisateur } from "../../generated/prisma/enums.js";
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: RoleUtilisateur[]) => import("@nestjs/common").CustomDecorator<string>;
