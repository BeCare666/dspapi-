import { calculerScoreNews, SEUILS_NEWS_DEFAUT, type ParametresNews } from "./news-scoring.util.js";
import { NiveauConscience, NiveauRisqueNews } from "../generated/prisma/enums.js";

function base(overrides: Partial<ParametresNews> = {}): ParametresNews {
  return {
    frequenceRespiratoire: 16,
    saturationOxygene: 98,
    oxygenoSupplementation: false,
    temperature: 37,
    pressionArterielleSystolique: 120,
    frequenceCardiaque: 70,
    niveauConscience: NiveauConscience.ALERTE,
    ...overrides,
  };
}

describe("calculerScoreNews — seuils par paramètre", () => {
  it.each([
    [8, 3],
    [9, 1],
    [11, 1],
    [12, 0],
    [20, 0],
    [21, 2],
    [24, 2],
    [25, 3],
  ])("fréquence respiratoire %i -> %i points", (valeur, points) => {
    const resultat = calculerScoreNews(base({ frequenceRespiratoire: valeur }));
    expect(resultat.detailParParametre.frequenceRespiratoire).toBe(points);
  });

  it.each([
    [91, 3],
    [92, 2],
    [93, 2],
    [94, 1],
    [95, 1],
    [96, 0],
    [100, 0],
  ])("SpO2 %i%% -> %i points", (valeur, points) => {
    const resultat = calculerScoreNews(base({ saturationOxygene: valeur }));
    expect(resultat.detailParParametre.saturationOxygene).toBe(points);
  });

  it("oxygénothérapie ajoute 2 points", () => {
    expect(calculerScoreNews(base({ oxygenoSupplementation: true })).detailParParametre.oxygenoSupplementation).toBe(
      2,
    );
    expect(calculerScoreNews(base({ oxygenoSupplementation: false })).detailParParametre.oxygenoSupplementation).toBe(
      0,
    );
  });

  it.each([
    [90, 3],
    [91, 2],
    [100, 2],
    [101, 1],
    [110, 1],
    [111, 0],
    [219, 0],
    [220, 3],
  ])("pression artérielle systolique %i -> %i points", (valeur, points) => {
    const resultat = calculerScoreNews(base({ pressionArterielleSystolique: valeur }));
    expect(resultat.detailParParametre.pressionArterielleSystolique).toBe(points);
  });

  it.each([
    [40, 3],
    [41, 1],
    [50, 1],
    [51, 0],
    [90, 0],
    [91, 1],
    [110, 1],
    [111, 2],
    [130, 2],
    [131, 3],
  ])("fréquence cardiaque %i -> %i points", (valeur, points) => {
    const resultat = calculerScoreNews(base({ frequenceCardiaque: valeur }));
    expect(resultat.detailParParametre.frequenceCardiaque).toBe(points);
  });

  it.each([
    [35.0, 3],
    [35.1, 1],
    [36.0, 1],
    [36.1, 0],
    [38.0, 0],
    [38.1, 1],
    [39.0, 1],
    [39.1, 2],
  ])("température %f -> %i points", (valeur, points) => {
    const resultat = calculerScoreNews(base({ temperature: valeur }));
    expect(resultat.detailParParametre.temperature).toBe(points);
  });

  it("niveau de conscience : seul ALERTE vaut 0, tout le reste vaut 3", () => {
    expect(calculerScoreNews(base({ niveauConscience: NiveauConscience.ALERTE })).detailParParametre.niveauConscience).toBe(0);
    for (const niveau of [
      NiveauConscience.CONFUSION,
      NiveauConscience.VOIX,
      NiveauConscience.DOULEUR,
      NiveauConscience.INCONSCIENT,
    ]) {
      expect(calculerScoreNews(base({ niveauConscience: niveau })).detailParParametre.niveauConscience).toBe(3);
    }
  });
});

describe("calculerScoreNews — niveau de risque global", () => {
  it("tous paramètres normaux -> score 0, risque BAS", () => {
    const resultat = calculerScoreNews(base());
    expect(resultat.scoreTotal).toBe(0);
    expect(resultat.niveauRisque).toBe(NiveauRisqueNews.BAS);
  });

  it("score cumulé 5-6 -> risque MOYEN même sans paramètre isolé à 3", () => {
    // 21-24 resp (2) + 92-93 SpO2 (2) + PAS 101-110 (1) = 5, aucun parametre à 3
    const resultat = calculerScoreNews(
      base({ frequenceRespiratoire: 22, saturationOxygene: 93, pressionArterielleSystolique: 105 }),
    );
    expect(resultat.scoreTotal).toBe(5);
    expect(resultat.niveauRisque).toBe(NiveauRisqueNews.MOYEN);
  });

  it("un seul paramètre à 3 déclenche MOYEN même si le score total est bas (règle du 'red score')", () => {
    const resultat = calculerScoreNews(base({ frequenceCardiaque: 35 })); // 3 points, total = 3
    expect(resultat.scoreTotal).toBe(3);
    expect(resultat.niveauRisque).toBe(NiveauRisqueNews.MOYEN);
  });

  it("score total >= 7 -> risque ELEVE", () => {
    const resultat = calculerScoreNews(
      base({ frequenceRespiratoire: 26, saturationOxygene: 90, frequenceCardiaque: 135 }), // 3+3+3 = 9
    );
    expect(resultat.scoreTotal).toBe(9);
    expect(resultat.niveauRisque).toBe(NiveauRisqueNews.ELEVE);
  });
});

// §12.3 — seuils de niveau de risque paramétrés par l'administrateur.
describe("calculerScoreNews — seuils paramétrables (§12.3)", () => {
  // 21-24 resp (2) + 92-93 SpO2 (2) + PAS 101-110 (1) = 5, aucun paramètre à 3
  const scoreCinq = () => base({ frequenceRespiratoire: 22, saturationOxygene: 93, pressionArterielleSystolique: 105 });

  it("seuils par défaut = CDC (moyen 5, élevé 7)", () => {
    expect(SEUILS_NEWS_DEFAUT).toEqual({ moyen: 5, eleve: 7 });
  });

  it("un seuil moyen relevé à 6 fait passer un score de 5 en risque BAS", () => {
    const resultat = calculerScoreNews(scoreCinq(), { moyen: 6, eleve: 8 });
    expect(resultat.scoreTotal).toBe(5);
    expect(resultat.niveauRisque).toBe(NiveauRisqueNews.BAS);
  });

  it("un seuil élevé abaissé à 5 fait passer un score de 5 en risque ELEVE", () => {
    const resultat = calculerScoreNews(scoreCinq(), { moyen: 3, eleve: 5 });
    expect(resultat.niveauRisque).toBe(NiveauRisqueNews.ELEVE);
  });

  it("la règle « un paramètre isolé à 3 » reste appliquée quels que soient les seuils", () => {
    const resultat = calculerScoreNews(base({ frequenceCardiaque: 35 }), { moyen: 9, eleve: 12 });
    expect(resultat.scoreTotal).toBe(3);
    expect(resultat.niveauRisque).toBe(NiveauRisqueNews.MOYEN);
  });
});
