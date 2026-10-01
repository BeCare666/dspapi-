import { StatutPatient } from "../../generated/prisma/enums.js";
export declare class ListPatientsQueryDto {
    statut?: StatutPatient;
    serviceId?: string;
}
