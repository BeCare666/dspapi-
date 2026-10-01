import { NiveauConscience, NiveauRisqueNews } from "../generated/prisma/enums.js";
export interface ParametresNews {
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: NiveauConscience;
}
export interface ResultatNews {
    scoreTotal: number;
    niveauRisque: NiveauRisqueNews;
    detailParParametre: Record<keyof ParametresNews, number>;
}
export declare function calculerScoreNews(parametres: ParametresNews): ResultatNews;
