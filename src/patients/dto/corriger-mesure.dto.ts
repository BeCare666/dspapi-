import { IsString, MaxLength, MinLength } from "class-validator";
import { SaisirMesureDto } from "./saisir-mesure.dto.js";

// §13.4 — correction tracée : nouvelles valeurs + motif obligatoire.
export class CorrigerMesureDto extends SaisirMesureDto {
  @IsString()
  @MinLength(5)
  @MaxLength(1000)
  motif!: string;
}
