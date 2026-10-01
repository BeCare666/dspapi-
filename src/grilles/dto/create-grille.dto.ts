import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsBoolean, IsEnum, IsInt, IsOptional, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { TypeElementMesurable, TypeEtablissement, TypeReponse } from "../../generated/prisma/enums.js";

export class CreateElementMesurableDto {
  @IsString()
  @MinLength(2)
  libelle!: string;

  @IsOptional()
  @IsEnum(TypeReponse)
  typeReponse?: TypeReponse;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  optionsChoix?: string[];

  // §6.2 / §6.6 — nature de l'élément (défaut : document à examiner).
  @IsOptional()
  @IsEnum(TypeElementMesurable)
  typeElement?: TypeElementMesurable;

  // §6.6 — défaut : vrai pour un document à examiner, faux sinon.
  @IsOptional()
  @IsBoolean()
  entreDansScore?: boolean;

  @IsInt()
  ordre!: number;
}

export class CreateCritereDto {
  @IsString()
  code!: string;

  @IsString()
  @MinLength(2)
  libelle!: string;

  @IsOptional()
  @IsString()
  @MaxLength(191)
  categorie?: string;

  // §6.4 — recommandation synthétique affichée si le critère est en écart.
  @IsOptional()
  @IsString()
  recommandation?: string;

  @IsInt()
  ordre!: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateElementMesurableDto)
  elementsMesurables!: CreateElementMesurableDto[];
}

export class CreateNormeDto {
  @IsString()
  code!: string;

  @IsString()
  @MinLength(2)
  libelle!: string;

  @IsInt()
  ordre!: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateCritereDto)
  criteres!: CreateCritereDto[];
}

export class CreateDomaineDto {
  @IsString()
  @MinLength(2)
  nom!: string;

  @IsInt()
  ordre!: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateNormeDto)
  normes!: CreateNormeDto[];
}

export class CreateGrilleDto {
  @IsString()
  @MinLength(2)
  nom!: string;

  @IsEnum(TypeEtablissement)
  type!: TypeEtablissement;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateDomaineDto)
  domaines!: CreateDomaineDto[];
}
