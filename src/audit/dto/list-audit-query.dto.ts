import { IsOptional, IsString } from "class-validator";

export class ListAuditQueryDto {
  @IsOptional()
  @IsString()
  organisationId?: string;

  @IsOptional()
  @IsString()
  utilisateurId?: string;

  @IsOptional()
  @IsString()
  entite?: string;

  @IsOptional()
  @IsString()
  action?: string;
}
