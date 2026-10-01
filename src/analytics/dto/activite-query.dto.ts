import { IsDateString, IsOptional } from "class-validator";

// §12.6 — période d'analyse (dates incluses). Défaut : les 12 derniers mois.
export class ActiviteQueryDto {
  @IsOptional()
  @IsDateString()
  debut?: string;

  @IsOptional()
  @IsDateString()
  fin?: string;
}
