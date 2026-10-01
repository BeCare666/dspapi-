import { IsString } from "class-validator";

export class ModifierParametreDto {
  @IsString()
  valeur!: string;
}
