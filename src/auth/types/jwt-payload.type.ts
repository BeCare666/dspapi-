import type { RoleUtilisateur, TypeCompte } from "../../generated/prisma/enums.js";

export interface JwtAccessPayload {
  sub: string;
  typeCompte: TypeCompte;
  organisationId: string | null;
  serviceId: string | null;
  roles: RoleUtilisateur[];
}
