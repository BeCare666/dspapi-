import { IsEnum, IsOptional, IsString } from "class-validator";
import { RoleUtilisateur } from "../../generated/prisma/enums.js";

export class ListUtilisateursQueryDto {
  @IsOptional()
  @IsString()
  organisationId?: string;

  @IsOptional()
  @IsEnum(RoleUtilisateur)
  role?: RoleUtilisateur;

  // "true" / "false" — même convention que ListOrganisationsQueryDto (D2).
  @IsOptional()
  @IsString()
  actif?: string;
}
