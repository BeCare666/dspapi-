import { IsString } from "class-validator";

export class DemarrerSessionDto {
  @IsString()
  grilleId!: string;
}
