import { IsEnum, IsString } from "class-validator";
import { PrioriteEi } from "../../generated/prisma/enums.js";

// §8.2 — qualification : confirmation de la gravité et de la catégorie, priorisation.
export class QualifierEiDto {
  @IsString()
  niveauGraviteId!: string;

  @IsString()
  typeEiId!: string;

  @IsEnum(PrioriteEi)
  priorite!: PrioriteEi;
}
