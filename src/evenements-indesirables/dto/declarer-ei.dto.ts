import { IsDateString, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

// §8.1 — fiche standardisée de déclaration.
export class DeclarerEiDto {
  @IsDateString()
  dateSurvenue!: string;

  // Service OU lieu concerné : au moins l'un des deux (vérifié dans le service).
  @IsOptional()
  @IsString()
  serviceId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(191)
  lieu?: string;

  @IsOptional()
  @IsString()
  typeEiId?: string;

  @IsString()
  @MinLength(5)
  description!: string;

  @IsString()
  niveauGraviteId!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(2000)
  personnesImpliquees!: string;

  // RM10 / §8.4 — lien optionnel vers un critère d'auto-évaluation, sans effet sur le score.
  @IsOptional()
  @IsString()
  critereId?: string;
}
