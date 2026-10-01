import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

// §4.2 — service de l'établissement (ex. maternité, bloc opératoire, urgences).
export class CreerServiceDto {
  @IsString()
  @MinLength(2)
  @MaxLength(191)
  nom!: string;

  @IsOptional()
  @IsString()
  @MaxLength(191)
  description?: string;
}

export class ModifierServiceDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(191)
  nom?: string;

  @IsOptional()
  @IsString()
  @MaxLength(191)
  description?: string;
}
