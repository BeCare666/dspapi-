import { IsEnum, IsIn, IsOptional, IsString } from "class-validator";
import { StatutEi } from "../../generated/prisma/enums.js";

export class ListEiQueryDto {
  @IsOptional()
  @IsEnum(StatutEi)
  statut?: StatutEi;

  @IsOptional()
  @IsString()
  niveauGraviteId?: string;

  // "true" = uniquement les EI d'un niveau de gravité élevée (critique).
  @IsOptional()
  @IsIn(["true", "false"])
  critique?: string;

  @IsOptional()
  @IsString()
  serviceId?: string;

  @IsOptional()
  @IsString()
  typeEiId?: string;
}
