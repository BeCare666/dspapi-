import { calculerScore, elementEstPositif, type GrilleStructure } from "./scoring.util.js";
import { TypeReponse } from "../generated/prisma/enums.js";

describe("elementEstPositif", () => {
  it("OUI_NON n'est positif que si valeur === true", () => {
    expect(elementEstPositif(TypeReponse.OUI_NON, true)).toBe(true);
    expect(elementEstPositif(TypeReponse.OUI_NON, false)).toBe(false);
    expect(elementEstPositif(TypeReponse.OUI_NON, "oui")).toBe(false);
    expect(elementEstPositif(TypeReponse.OUI_NON, undefined)).toBe(false);
  });

  it("TEXTE est positif si non vide", () => {
    expect(elementEstPositif(TypeReponse.TEXTE, "réponse")).toBe(true);
    expect(elementEstPositif(TypeReponse.TEXTE, "   ")).toBe(false);
    expect(elementEstPositif(TypeReponse.TEXTE, "")).toBe(false);
    expect(elementEstPositif(TypeReponse.TEXTE, null)).toBe(false);
  });

  it("CHOIX est positif si une valeur est présente", () => {
    expect(elementEstPositif(TypeReponse.CHOIX, "option-a")).toBe(true);
    expect(elementEstPositif(TypeReponse.CHOIX, undefined)).toBe(false);
  });
});

describe("calculerScore", () => {
  function grilleDeTest(): GrilleStructure {
    return {
      domaines: [
        {
          id: "dom-1",
          nom: "Domaine 1",
          normes: [
            {
              criteres: [
                {
                  id: "crit-1",
                  code: "C1",
                  libelle: "Critère 1",
                  elementsMesurables: [
                    { id: "el-1", typeReponse: TypeReponse.OUI_NON },
                    { id: "el-2", typeReponse: TypeReponse.OUI_NON },
                  ],
                },
                {
                  id: "crit-2",
                  code: "C2",
                  libelle: "Critère 2",
                  elementsMesurables: [{ id: "el-3", typeReponse: TypeReponse.OUI_NON }],
                },
              ],
            },
          ],
        },
        {
          id: "dom-2",
          nom: "Domaine 2",
          normes: [
            {
              criteres: [
                {
                  id: "crit-3",
                  code: "C3",
                  libelle: "Critère 3",
                  elementsMesurables: [{ id: "el-4", typeReponse: TypeReponse.OUI_NON }],
                },
              ],
            },
          ],
        },
      ],
    };
  }

  it("un critère n'est validé que si TOUS ses éléments sont positifs (RM1)", () => {
    const reponses = new Map<string, unknown>([
      ["el-1", true],
      ["el-2", false], // fait échouer crit-1 malgré el-1 positif
      ["el-3", true],
      ["el-4", true],
    ]);

    const resultat = calculerScore(grilleDeTest(), reponses);

    expect(resultat.criteresNonValides.map((c) => c.critereId)).toEqual(["crit-1"]);
    expect(resultat.parDomaine.find((d) => d.domaineId === "dom-1")).toMatchObject({
      criteresValides: 1,
      criteresTotal: 2,
      scorePct: 50,
    });
    expect(resultat.parDomaine.find((d) => d.domaineId === "dom-2")).toMatchObject({
      criteresValides: 1,
      criteresTotal: 1,
      scorePct: 100,
    });
    expect(resultat.scoreGlobal).toBeCloseTo(66.67, 1);
  });

  it("un critère sans réponse du tout n'est pas validé", () => {
    const resultat = calculerScore(grilleDeTest(), new Map());
    expect(resultat.scoreGlobal).toBe(0);
    expect(resultat.criteresNonValides).toHaveLength(3);
  });

  it("un critère 100% répondu positivement obtient 100%", () => {
    const reponses = new Map<string, unknown>([
      ["el-1", true],
      ["el-2", true],
      ["el-3", true],
      ["el-4", true],
    ]);
    const resultat = calculerScore(grilleDeTest(), reponses);
    expect(resultat.scoreGlobal).toBe(100);
    expect(resultat.criteresNonValides).toHaveLength(0);
  });

  it("un critère sans aucun élément mesurable n'est jamais validé", () => {
    const grille: GrilleStructure = {
      domaines: [
        {
          id: "dom-1",
          nom: "Domaine 1",
          normes: [{ criteres: [{ id: "crit-vide", code: "C0", libelle: "Vide", elementsMesurables: [] }] }],
        },
      ],
    };
    const resultat = calculerScore(grille, new Map());
    expect(resultat.criteresNonValides.map((c) => c.critereId)).toEqual(["crit-vide"]);
  });
});

// §6.2 / §6.3 / §6.4 — seuls les éléments « document à examiner » (entreDansScore)
// comptent ; les documents manquants et la recommandation sont restitués.
describe("calculerScore — documents à examiner (§6.3)", () => {
  function grilleMixte(): GrilleStructure {
    return {
      domaines: [
        {
          id: "dom-1",
          nom: "Organisation",
          normes: [
            {
              criteres: [
                {
                  id: "crit-1",
                  code: "C1",
                  libelle: "Procédure de prévention des chutes",
                  recommandation: "Rédiger et diffuser la procédure.",
                  elementsMesurables: [
                    { id: "doc-1", libelle: "Procédure écrite", typeReponse: TypeReponse.OUI_NON, entreDansScore: true },
                    { id: "doc-2", libelle: "Registre des chutes", typeReponse: TypeReponse.OUI_NON, entreDansScore: true },
                    { id: "ent-1", libelle: "Entretien cadre", typeReponse: TypeReponse.OUI_NON, entreDansScore: false },
                  ],
                },
                {
                  id: "crit-2",
                  code: "C2",
                  libelle: "Observation seule",
                  elementsMesurables: [
                    { id: "obs-1", libelle: "Observation", typeReponse: TypeReponse.OUI_NON, entreDansScore: false },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  }

  it("un entretien négatif n'invalide pas un critère dont tous les documents sont présents", () => {
    const reponses = new Map<string, unknown>([
      ["doc-1", true],
      ["doc-2", true],
      ["ent-1", false],
    ]);
    const resultat = calculerScore(grilleMixte(), reponses);
    expect(resultat.criteresNonValides.map((c) => c.critereId)).not.toContain("crit-1");
  });

  it("un seul document manquant invalide le critère ; documents manquants et recommandation restitués", () => {
    const reponses = new Map<string, unknown>([["doc-1", false]]);
    const resultat = calculerScore(grilleMixte(), reponses);
    const ecart = resultat.criteresNonValides.find((c) => c.critereId === "crit-1")!;
    expect(ecart.documentsNonValides).toEqual([
      { elementMesurableId: "doc-1", libelle: "Procédure écrite", reponse: "NON" },
      { elementMesurableId: "doc-2", libelle: "Registre des chutes", reponse: "SANS_REPONSE" },
    ]);
    expect(ecart.recommandation).toBe("Rédiger et diffuser la procédure.");
  });

  it("un critère sans aucun document à examiner n'est pas validé (compté au total)", () => {
    const reponses = new Map<string, unknown>([
      ["doc-1", true],
      ["doc-2", true],
      ["obs-1", true],
    ]);
    const resultat = calculerScore(grilleMixte(), reponses);
    expect(resultat.scoreGlobal).toBe(50);
    expect(resultat.criteresNonValides.map((c) => c.critereId)).toEqual(["crit-2"]);
  });
});
