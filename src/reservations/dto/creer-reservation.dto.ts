import { IsEnum, IsString } from "class-validator";
import { FormuleFormation } from "../../generated/prisma/enums.js";

export class CreerReservationDto {
  @IsString()
  formationId!: string;

  @IsEnum(FormuleFormation)
  formule!: FormuleFormation;
}
