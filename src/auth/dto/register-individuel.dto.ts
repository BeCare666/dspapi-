import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class RegisterIndividuelDto {
  @IsString()
  @MinLength(2)
  nom!: string;

  @IsString()
  @MinLength(2)
  prenom!: string;

  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  telephone?: string;

  @IsString()
  @MinLength(8)
  motDePasse!: string;
}
