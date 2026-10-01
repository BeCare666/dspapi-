import { IsEnum } from "class-validator";
import { RoleUtilisateur } from "../../generated/prisma/enums.js";

export class AjouterRoleDto {
  @IsEnum(RoleUtilisateur)
  role!: RoleUtilisateur;
}
