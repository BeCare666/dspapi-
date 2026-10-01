import { ArrayMinSize, ArrayUnique, IsArray, IsEmail, IsEnum, IsOptional, IsString, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Civilite, RoleUtilisateur } from "../../generated/prisma/enums.js";

// §4.2 — rôles qu'un établissement peut attribuer à ses utilisateurs internes.
// ADMIN_PLATEFORME est exclu : réservé à l'éditeur de la plateforme.
export const ROLES_ETABLISSEMENT = [
  RoleUtilisateur.RESPONSABLE_COMPTE,
  RoleUtilisateur.RESP_QUALITE,
  RoleUtilisateur.PERSONNEL_SOIGNANT,
  RoleUtilisateur.GESTIONNAIRE_FORMATION,
] as const;

export type RoleEtablissement = (typeof ROLES_ETABLISSEMENT)[number];

export class CreerMembreDto {
  @IsEnum(Civilite)
  civilite!: Civilite;

  @IsString()
  @MinLength(2)
  @MaxLength(191)
  nom!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(191)
  prenom!: string;

  @IsEmail()
  @MaxLength(191)
  email!: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  telephone?: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayUnique()
  @IsEnum(ROLES_ETABLISSEMENT, { each: true })
  roles!: RoleEtablissement[];

  @IsOptional()
  @IsString()
  serviceId?: string;
}

// `serviceId: null` retire le rattachement ; champ absent = inchangé.
export class ModifierMembreDto {
  @IsOptional()
  @IsEnum(Civilite)
  civilite?: Civilite;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(191)
  nom?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(191)
  prenom?: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayUnique()
  @IsEnum(ROLES_ETABLISSEMENT, { each: true })
  roles?: RoleEtablissement[];

  @IsOptional()
  @ValidateIf((_o, v) => v !== null)
  @IsString()
  serviceId?: string | null;
}
