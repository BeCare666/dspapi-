import { NiveauConscience } from "../../generated/prisma/enums.js";
export declare class SaisirMesureDto {
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: NiveauConscience;
}
