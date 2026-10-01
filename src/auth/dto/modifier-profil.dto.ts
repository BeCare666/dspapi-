import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

// Auto-édition du profil personnel (nom/prénom/téléphone) — email
// volontairement exclu : lié à `emailVerifieLe` (5.9), une modification
// demanderait une politique de re-vérification non définie, hors périmètre
// de cette demande ("modifier certains nombre d'infos", pas l'email).
export class ModifierProfilDto {
  // 191 = largeur réelle de la colonne MySQL (VARCHAR(191), défaut Prisma) —
  // même convention que ModifierOrganisationDto (D8.1).
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(191)
  nom?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(191)
  prenom?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  telephone?: string;
}
