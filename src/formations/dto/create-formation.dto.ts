import { IsInt, IsOptional, IsString, Min, MinLength } from "class-validator";

export class CreateFormationDto {
  @IsString()
  @MinLength(3)
  titre!: string;

  @IsString()
  @MinLength(10)
  description!: string;

  // §9 — objectifs de la formation.
  @IsOptional()
  @IsString()
  objectifs?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  dureeHeures?: number;

  @IsInt()
  @Min(0)
  prixIndividuel!: number;

  @IsInt()
  @Min(0)
  prixGroupe5!: number;

  @IsInt()
  @Min(0)
  prixGroupe10!: number;
}
