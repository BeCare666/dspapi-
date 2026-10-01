import { NiveauConscience, NiveauRisqueNews } from "../generated/prisma/enums.js";

// Échelle NEWS2 (National Early Warning Score 2, Royal College of Physicians) —
// scale 1 pour la SpO2 (pas de prise en charge distincte des patients BPCO en
// hypercapnie chronique pour l'instant). RM (équivalent) : calcul exclusivement
// serveur, jamais fié à une valeur envoyée par le client.
export interface ParametresNews {
  frequenceRespiratoire: number;
  saturationOxygene: number;
  oxygenoSupplementation: boolean;
  temperature: number;
  pressionArterielleSystolique: number;
  frequenceCardiaque: number;
  niveauConscience: NiveauConscience;
}

// §7.3 / §12.3 — seuils de niveau de risque (paramétrables par l'admin).
// Valeurs par défaut = CDC : moyen à partir de 5, élevé à partir de 7.
export interface SeuilsNews {
  moyen: number;
  eleve: number;
}

export const SEUILS_NEWS_DEFAUT: SeuilsNews = { moyen: 5, eleve: 7 };

export interface ResultatNews {
  scoreTotal: number;
  niveauRisque: NiveauRisqueNews;
  detailParParametre: Record<keyof ParametresNews, number>;
}

function scoreFrequenceRespiratoire(v: number): number {
  if (v <= 8) return 3;
  if (v <= 11) return 1;
  if (v <= 20) return 0;
  if (v <= 24) return 2;
  return 3;
}

function scoreSaturationOxygene(v: number): number {
  if (v <= 91) return 3;
  if (v <= 93) return 2;
  if (v <= 95) return 1;
  return 0;
}

function scoreOxygenoSupplementation(enOxygene: boolean): number {
  return enOxygene ? 2 : 0;
}

function scorePressionArterielleSystolique(v: number): number {
  if (v <= 90) return 3;
  if (v <= 100) return 2;
  if (v <= 110) return 1;
  if (v <= 219) return 0;
  return 3;
}

function scoreFrequenceCardiaque(v: number): number {
  if (v <= 40) return 3;
  if (v <= 50) return 1;
  if (v <= 90) return 0;
  if (v <= 110) return 1;
  if (v <= 130) return 2;
  return 3;
}

function scoreTemperature(v: number): number {
  if (v <= 35.0) return 3;
  if (v <= 36.0) return 1;
  if (v <= 38.0) return 0;
  if (v <= 39.0) return 1;
  return 2;
}

function scoreNiveauConscience(v: NiveauConscience): number {
  return v === NiveauConscience.ALERTE ? 0 : 3;
}

export function calculerScoreNews(parametres: ParametresNews, seuils: SeuilsNews = SEUILS_NEWS_DEFAUT): ResultatNews {
  const detailParParametre: Record<keyof ParametresNews, number> = {
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

  let niveauRisque: NiveauRisqueNews;
  if (scoreTotal >= seuils.eleve) {
    niveauRisque = NiveauRisqueNews.ELEVE;
  } else if (scoreTotal >= seuils.moyen || unParametreATrois) {
    niveauRisque = NiveauRisqueNews.MOYEN;
  } else {
    niveauRisque = NiveauRisqueNews.BAS;
  }

  return { scoreTotal, niveauRisque, detailParParametre };
}
