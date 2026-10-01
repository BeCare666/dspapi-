import { IsDateString, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

// §13.4 — correction tracée d'une fiche EI : motif obligatoire.
export class CorrigerEiDto {
  @IsOptional()
  @IsString()
  @MinLength(5)
  description?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(2000)
  personnesImpliquees?: string;

  @IsOptional()
  @IsDateString()
  dateSurvenue?: string;

  @IsOptional()
  @IsString()
  @MaxLength(191)
  lieu?: string;

  // Chaîne vide = retirer le service.
  @IsOptional()
  @IsString()
  serviceId?: string;

  @IsString()
  @MinLength(5)
  @MaxLength(1000)
  motif!: string;
}
