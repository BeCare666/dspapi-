import { IsEnum, IsOptional } from "class-validator";
import { StatutGrille, TypeEtablissement } from "../../generated/prisma/enums.js";

export class ListGrillesQueryDto {
  @IsOptional()
  @IsEnum(TypeEtablissement)
  type?: TypeEtablissement;

  @IsOptional()
  @IsEnum(StatutGrille)
  statut?: StatutGrille;
}
