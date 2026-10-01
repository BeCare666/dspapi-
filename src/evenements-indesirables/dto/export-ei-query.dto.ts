import { IsDateString, IsOptional } from "class-validator";

export class ExportEiQueryDto {
  @IsOptional()
  @IsDateString()
  debut?: string;

  @IsOptional()
  @IsDateString()
  fin?: string;
}
