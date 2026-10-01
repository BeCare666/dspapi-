import { NiveauConscience, NiveauRisqueNews } from "../generated/prisma/enums.js";
function scoreFrequenceRespiratoire(v) {
    if (v <= 8)
        return 3;
    if (v <= 11)
        return 1;
    if (v <= 20)
        return 0;
    if (v <= 24)
        return 2;
    return 3;
}
function scoreSaturationOxygene(v) {
    if (v <= 91)
        return 3;
    if (v <= 93)
        return 2;
    if (v <= 95)
        return 1;
    return 0;
}
function scoreOxygenoSupplementation(enOxygene) {
    return enOxygene ? 2 : 0;
}
function scorePressionArterielleSystolique(v) {
    if (v <= 90)
        return 3;
    if (v <= 100)
        return 2;
    if (v <= 110)
        return 1;
    if (v <= 219)
        return 0;
    return 3;
}
function scoreFrequenceCardiaque(v) {
    if (v <= 40)
        return 3;
    if (v <= 50)
        return 1;
    if (v <= 90)
        return 0;
    if (v <= 110)
        return 1;
    if (v <= 130)
        return 2;
    return 3;
}
function scoreTemperature(v) {
    if (v <= 35.0)
        return 3;
    if (v <= 36.0)
        return 1;
    if (v <= 38.0)
        return 0;
    if (v <= 39.0)
        return 1;
    return 2;
}
function scoreNiveauConscience(v) {
    return v === NiveauConscience.ALERTE ? 0 : 3;
}
export function calculerScoreNews(parametres) {
    const detailParParametre = {
        frequenceRespiratoire: scoreFrequenceRespiratoire(parametres.frequenceRespiratoire),
        saturationOxygene: scoreSaturationOxygene(parametres.saturationOxygene),
        oxygenoSupplementation: scoreOxygenoSupplementation(parametres.oxygenoSupplementation),
        temperature: scoreTemperature(parametres.temperature),
        pressionArterielleSystolique: scorePressionArterielleSystolique(parametres.pressionArterielleSystolique),
        frequenceCardiaque: scoreFrequenceCardiaque(parametres.frequenceCardiaque),
        niveauConscience: scoreNiveauConscience(parametres.niveauConscience),
    };
    const scoreTotal = Object.values(detailParParametre).reduce((somme, v) => somme + v, 0);
    const unParametreATrois = Object.values(detailParParametre).some((v) => v === 3);
    let niveauRisque;
    if (scoreTotal >= 7) {
        niveauRisque = NiveauRisqueNews.ELEVE;
    }
    else if (scoreTotal >= 5 || unParametreATrois) {
        niveauRisque = NiveauRisqueNews.MOYEN;
    }
    else {
        niveauRisque = NiveauRisqueNews.BAS;
    }
    return { scoreTotal, niveauRisque, detailParParametre };
}
//# sourceMappingURL=news-scoring.util.js.map