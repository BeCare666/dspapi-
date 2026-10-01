import { IsString, MinLength } from "class-validator";

export class CreerInterventionDto {
  @IsString()
  @MinLength(2)
  note!: string;
}
