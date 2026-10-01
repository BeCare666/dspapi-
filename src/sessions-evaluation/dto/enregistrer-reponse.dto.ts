import { IsDefined, IsOptional, IsString } from "class-validator";

export class EnregistrerReponseDto {
  // Type dépendant du `typeReponse` de l'élément mesurable ciblé (boolean pour
  // OUI_NON, string pour TEXTE/CHOIX) — validé au niveau service, pas ici.
  @IsDefined()
  valeur!: unknown;

  @IsOptional()
  @IsString()
  commentaire?: string;
}
