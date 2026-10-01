import { IsEnum, IsOptional, IsString } from "class-validator";
import { StatutSessionEvaluation } from "../../generated/prisma/enums.js";

export class ListSessionsQueryDto {
  @IsOptional()
  @IsEnum(StatutSessionEvaluation)
  statut?: StatutSessionEvaluation;
}

export class EvolutionQueryDto {
  @IsOptional()
  @IsString()
  grilleNom?: string;
}
