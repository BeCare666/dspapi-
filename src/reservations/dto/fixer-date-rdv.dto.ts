import { IsDateString } from "class-validator";

export class FixerDateRdvDto {
  @IsDateString()
  dateRdv!: string;
}
