import { IsEnum } from "class-validator";
import { StatutAlerte } from "../../generated/prisma/enums.js";

export class ChangerStatutAlerteDto {
  @IsEnum(StatutAlerte)
  statut!: StatutAlerte;
}
