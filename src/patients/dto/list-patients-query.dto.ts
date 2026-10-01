import { IsEnum, IsOptional, IsString } from "class-validator";
import { StatutPatient } from "../../generated/prisma/enums.js";

export class ListPatientsQueryDto {
  @IsOptional()
  @IsEnum(StatutPatient)
  statut?: StatutPatient;

  @IsOptional()
  @IsString()
  serviceId?: string;
}
