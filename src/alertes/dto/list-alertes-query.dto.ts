import { IsEnum, IsOptional } from "class-validator";
import { NiveauRisqueNews, StatutAlerte } from "../../generated/prisma/enums.js";

export class ListAlertesQueryDto {
  @IsOptional()
  @IsEnum(StatutAlerte)
  statut?: StatutAlerte;

  @IsOptional()
  @IsEnum(NiveauRisqueNews)
  niveauRisque?: NiveauRisqueNews;
}
