import { TypeEtablissement, TypeReponse } from "../../generated/prisma/enums.js";
export declare class CreateElementMesurableDto {
    libelle: string;
    typeReponse?: TypeReponse;
    optionsChoix?: string[];
    ordre: number;
}
export declare class CreateCritereDto {
    code: string;
    libelle: string;
    ordre: number;
    elementsMesurables: CreateElementMesurableDto[];
}
export declare class CreateNormeDto {
    code: string;
    libelle: string;
    ordre: number;
    criteres: CreateCritereDto[];
}
export declare class CreateDomaineDto {
    nom: string;
    ordre: number;
    normes: CreateNormeDto[];
}
export declare class CreateGrilleDto {
    nom: string;
    type: TypeEtablissement;
    domaines: CreateDomaineDto[];
}
