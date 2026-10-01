import { IsString, MinLength } from "class-validator";

export class CreateTypeEiDto {
  @IsString()
  @MinLength(2)
  libelle!: string;
}
