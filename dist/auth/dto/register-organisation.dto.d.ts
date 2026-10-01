import { TypeEtablissement } from "../../generated/prisma/enums.js";
export declare class RegisterOrganisationDto {
    organisationNom: string;
    organisationIfu: string;
    organisationType: TypeEtablissement;
    organisationAdresse?: string;
    organisationTelephone?: string;
    organisationEmail?: string;
    responsableNom: string;
    responsablePrenom: string;
    responsableEmail: string;
    responsableTelephone?: string;
    motDePasse: string;
}
