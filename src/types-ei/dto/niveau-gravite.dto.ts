import { IsBoolean, IsInt, IsOptional, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

// §12.4 — niveau de l'échelle de gravité des EI.
export class CreerNiveauGraviteDto {
  @IsString()
  @MinLength(2)
  @MaxLength(191)
  libelle!: string;

  @IsInt()
  @Min(1)
  @Max(100)
  ordre!: number;

  @IsBoolean()
  critique!: boolean;
}

export class ModifierNiveauGraviteDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(191)
  libelle?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  ordre?: number;

  @IsOptional()
  @IsBoolean()
  critique?: boolean;
}
