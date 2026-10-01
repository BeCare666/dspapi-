import { IsEnum } from "class-validator";
import { StatutEi } from "../../generated/prisma/enums.js";

export class ChangerStatutEiDto {
  @IsEnum(StatutEi)
  statut!: StatutEi;
}
