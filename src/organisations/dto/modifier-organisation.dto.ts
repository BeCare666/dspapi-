import { IsEmail, IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { TypeStructure } from "../../generated/prisma/enums.js";

// D8.1 — auto-édition des coordonnées de sa propre organisation par
// RESPONSABLE_COMPTE. Uniquement les champs déjà existants sur Organisation
// et explicitement validés (nom/adresse/telephone/email) — jamais `type` ni
// `ifu` ni `actif` (whitelist du ValidationPipe global : tout autre champ est
// rejeté en 400, pas seulement ignoré).
export class ModifierOrganisationDto {
  // 191 = largeur réelle de la colonne MySQL (VARCHAR(191), défaut Prisma pour
  // un champ String sans @db.VarChar explicite — voir schema.prisma) : borne
  // alignée sur la base, pas une valeur inventée.
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(191)
  nom?: string;

  @IsOptional()
  @IsString()
  @MaxLength(191)
  raisonSociale?: string;

  @IsOptional()
  @IsEnum(TypeStructure)
  typeStructure?: TypeStructure;

  @IsOptional()
  @IsString()
  @MaxLength(191)
  adresse?: string;

  // §4.1 — ville et pays font partie des coordonnées de l'établissement.
  @IsOptional()
  @IsString()
  @MaxLength(191)
  ville?: string;

  @IsOptional()
  @IsString()
  @MaxLength(191)
  pays?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  telephone?: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(191)
  email?: string;
}
