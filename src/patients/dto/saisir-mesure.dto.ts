import { IsBoolean, IsEnum, IsInt, IsNumber, Max, Min } from "class-validator";
import { NiveauConscience } from "../../generated/prisma/enums.js";

export class SaisirMesureDto {
  @IsInt()
  @Min(0)
  @Max(60)
  frequenceRespiratoire!: number;

  @IsInt()
  @Min(0)
  @Max(100)
  saturationOxygene!: number;

  @IsBoolean()
  oxygenoSupplementation!: boolean;

  @IsNumber()
  @Min(25)
  @Max(45)
  temperature!: number;

  @IsInt()
  @Min(0)
  @Max(300)
  pressionArterielleSystolique!: number;

  @IsInt()
  @Min(0)
  @Max(250)
  frequenceCardiaque!: number;

  @IsEnum(NiveauConscience)
  niveauConscience!: NiveauConscience;
}
