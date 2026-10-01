import { IsEnum, IsOptional } from "class-validator";
import { StatutReservation } from "../../generated/prisma/enums.js";

export class ListReservationsQueryDto {
  @IsOptional()
  @IsEnum(StatutReservation)
  statut?: StatutReservation;
}
