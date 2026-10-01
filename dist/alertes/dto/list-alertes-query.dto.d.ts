import { NiveauRisqueNews, StatutAlerte } from "../../generated/prisma/enums.js";
export declare class ListAlertesQueryDto {
    statut?: StatutAlerte;
    niveauRisque?: NiveauRisqueNews;
}
