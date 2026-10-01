import { IsEnum } from "class-validator";
import { StatutActionCorrective } from "../../generated/prisma/enums.js";

export class ChangerStatutActionDto {
  @IsEnum(StatutActionCorrective)
  statut!: StatutActionCorrective;
}
