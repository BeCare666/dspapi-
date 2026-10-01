import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

// §7.1 — fiche patient minimale : identifiant interne, service, numéro de lit.
// Aucune donnée d'identité n'est acceptée (le ValidationPipe global rejette
// tout champ non déclaré, ex. nom/prénom).
export class CreatePatientDto {
  @IsString()
  @MinLength(1)
  @MaxLength(64)
  identifiantInterne!: string;

  @IsOptional()
  @IsString()
  serviceId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  numeroLit?: string;
}
