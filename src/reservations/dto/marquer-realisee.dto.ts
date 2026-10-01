import { IsBoolean, IsInt, IsOptional, Max, Min } from "class-validator";

// §12.5 — clôture d'une session et suivi des présences.
export class MarquerRealiseeDto {
  @IsOptional()
  @IsBoolean()
  presenceConfirmee?: boolean;

  // Nombre de participants présents (au plus la taille de la formule).
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(10)
  participantsPresents?: number;
}
