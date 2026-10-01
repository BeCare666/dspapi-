import { IsInt, IsOptional, IsString, Max, Min } from "class-validator";

export class VerifierPaiementAbonnementDto {
  @IsString()
  transactionId!: string;
}

// §12.1 — durée en jours (activation manuelle facultative, prolongation obligatoire).
export class DureeJoursOptionnelleDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(3650)
  jours?: number;
}

export class DureeJoursDto {
  @IsInt()
  @Min(1)
  @Max(3650)
  jours!: number;
}
