import { GraviteEi, StatutEi } from "../../generated/prisma/enums.js";
export declare class ListEiQueryDto {
    statut?: StatutEi;
    gravite?: GraviteEi;
    serviceId?: string;
    typeEiId?: string;
}
