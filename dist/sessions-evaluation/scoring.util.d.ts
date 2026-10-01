import { TypeReponse } from "../generated/prisma/enums.js";
export declare function elementEstPositif(typeReponse: TypeReponse, valeur: unknown): boolean;
interface ElementMesurableStructure {
    id: string;
    typeReponse: TypeReponse;
}
interface CritereStructure {
    id: string;
    code: string;
    libelle: string;
    elementsMesurables: ElementMesurableStructure[];
}
interface NormeStructure {
    criteres: CritereStructure[];
}
interface DomaineStructure {
    id: string;
    nom: string;
    normes: NormeStructure[];
}
export interface GrilleStructure {
    domaines: DomaineStructure[];
}
export interface ScoreParDomaine {
    domaineId: string;
    nom: string;
    criteresValides: number;
    criteresTotal: number;
    scorePct: number;
}
export interface CritereNonValide {
    critereId: string;
    code: string;
    libelle: string;
    domaineNom: string;
}
export interface ResultatScore {
    scoreGlobal: number;
    parDomaine: ScoreParDomaine[];
    criteresNonValides: CritereNonValide[];
}
export declare function calculerScore(grille: GrilleStructure, reponsesParElement: Map<string, unknown>): ResultatScore;
export {};
