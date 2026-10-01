import { IsDateString, IsString, MinLength } from "class-validator";

export class CreerActionCorrectiveDto {
  @IsString()
  @MinLength(3)
  description!: string;

  @IsString()
  responsableId!: string;

  @IsDateString()
  echeance!: string;
}
