import { IsEnum, IsOptional, IsString } from "class-validator";
import { TypeEtablissement } from "../../generated/prisma/enums.js";

export class ListOrganisationsQueryDto {
  @IsOptional()
  @IsEnum(TypeEtablissement)
  type?: TypeEtablissement;

  // "true" / "false" — même convention que inclureInactives/inclureInactifs
  // (FormationsController/TypesEiController), pas de DTO booléen dédié ici.
  @IsOptional()
  @IsString()
  actif?: string;
}
