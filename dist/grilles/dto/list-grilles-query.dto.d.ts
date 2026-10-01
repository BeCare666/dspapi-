import { StatutGrille, TypeEtablissement } from "../../generated/prisma/enums.js";
export declare class ListGrillesQueryDto {
    type?: TypeEtablissement;
    statut?: StatutGrille;
}
