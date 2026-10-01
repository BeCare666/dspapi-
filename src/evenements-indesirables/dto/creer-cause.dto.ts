import { ArrayMaxSize, IsArray, IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { TypeCause } from "../../generated/prisma/enums.js";

// §8.2 — analyse des causes guidée (« 5 pourquoi ») plutôt que texte libre.
export class CreerCauseDto {
  @IsEnum(TypeCause)
  type!: TypeCause;

  // Réponses successives à « Pourquoi ? » (1 à 5).
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(5)
  @IsString({ each: true })
  @MaxLength(1000, { each: true })
  pourquois?: string[];

  // Cause identifiée au terme du questionnement.
  @IsString()
  @MinLength(3)
  description!: string;
}
