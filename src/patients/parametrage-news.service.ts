import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { NiveauRisqueNews } from "../generated/prisma/enums.js";
import { SEUILS_NEWS_DEFAUT, type SeuilsNews } from "./news-scoring.util.js";

// §7.3 — exemples de fréquence de surveillance donnés par le CDC, utilisés
// uniquement si l'administrateur n'a rien paramétré (§12.3).
export const FREQUENCES_NEWS_DEFAUT: Record<NiveauRisqueNews, string> = {
  [NiveauRisqueNews.BAS]: "Toutes les 12 heures",
  [NiveauRisqueNews.MOYEN]: "Toutes les 4 à 6 heures",
  [NiveauRisqueNews.ELEVE]: "Surveillance continue",
};

export const CLES_PARAMETRAGE_NEWS = {
  seuilMoyen: "news_seuil_moyen",
  seuilEleve: "news_seuil_eleve",
  frequenceBas: "news_frequence_bas",
  frequenceMoyen: "news_frequence_moyen",
  frequenceEleve: "news_frequence_eleve",
} as const;

export interface ParametrageNews {
  seuils: SeuilsNews;
  frequences: Record<NiveauRisqueNews, string>;
}

// §12.3 — seuils de niveau de risque et fréquences de surveillance,
// paramétrables par l'administrateur (table ParametrePlateforme, page
// /admin/parametres). Lu à chaque saisie : une modification s'applique aux
// mesures suivantes, jamais aux mesures déjà enregistrées (§13.5).
@Injectable()
export class ParametrageNewsService {
  constructor(private readonly prisma: PrismaService) {}

  async obtenir(): Promise<ParametrageNews> {
    const lignes = await this.prisma.parametrePlateforme.findMany({
      where: { cle: { in: Object.values(CLES_PARAMETRAGE_NEWS) } },
    });
    const valeur = (cle: string) => lignes.find((l) => l.cle === cle)?.valeur;
    const entier = (cle: string, defaut: number) => {
      const n = Number(valeur(cle));
      return Number.isInteger(n) && n > 0 ? n : defaut;
    };

    let moyen = entier(CLES_PARAMETRAGE_NEWS.seuilMoyen, SEUILS_NEWS_DEFAUT.moyen);
    let eleve = entier(CLES_PARAMETRAGE_NEWS.seuilEleve, SEUILS_NEWS_DEFAUT.eleve);
    // Garde-fou : une paire incohérente retombe sur les valeurs du CDC.
    if (moyen >= eleve) {
      moyen = SEUILS_NEWS_DEFAUT.moyen;
      eleve = SEUILS_NEWS_DEFAUT.eleve;
    }

    return {
      seuils: { moyen, eleve },
      frequences: {
        [NiveauRisqueNews.BAS]: valeur(CLES_PARAMETRAGE_NEWS.frequenceBas) || FREQUENCES_NEWS_DEFAUT.BAS,
        [NiveauRisqueNews.MOYEN]: valeur(CLES_PARAMETRAGE_NEWS.frequenceMoyen) || FREQUENCES_NEWS_DEFAUT.MOYEN,
        [NiveauRisqueNews.ELEVE]: valeur(CLES_PARAMETRAGE_NEWS.frequenceEleve) || FREQUENCES_NEWS_DEFAUT.ELEVE,
      },
    };
  }
}
