import { TypeReponse } from "../generated/prisma/enums.js";

// RM1 / §6.3 — un critère n'est validé que si tous ses éléments mesurables
// entrant dans le score (« document à examiner ») sont positifs ; un seul
// document manquant suffit à invalider le critère entier.
// Pour OUI_NON, positif = valeur strictement `true`. Pour TEXTE/CHOIX, faute de
// règle explicite dans le CDC, « répondu » (valeur non vide) vaut positif.
export function elementEstPositif(typeReponse: TypeReponse, valeur: unknown): boolean {
  if (typeReponse === TypeReponse.OUI_NON) {
    return valeur === true;
  }
  if (valeur === null || valeur === undefined) return false;
  if (typeof valeur === "string") return valeur.trim().length > 0;
  return true;
}

interface ElementMesurableStructure {
  id: string;
  libelle?: string;
  typeReponse: TypeReponse;
  // §6.6 — absent (anciennes données / tests) = l'élément entre dans le score.
  entreDansScore?: boolean;
}

interface CritereStructure {
  id: string;
  code: string;
  libelle: string;
  recommandation?: string | null;
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

export interface DocumentNonValide {
  elementMesurableId: string;
  libelle: string;
  // Réponse négative, ou aucune réponse.
  reponse: "NON" | "SANS_REPONSE";
}

export interface CritereNonValide {
  critereId: string;
  code: string;
  libelle: string;
  domaineNom: string;
  // §6.4 — documents à examiner manquants pour ce critère.
  documentsNonValides: DocumentNonValide[];
  recommandation: string | null;
}

export interface ResultatScore {
  scoreGlobal: number;
  parDomaine: ScoreParDomaine[];
  criteresNonValides: CritereNonValide[];
}

function arrondiPourcentage(numerateur: number, denominateur: number): number {
  if (denominateur === 0) return 0;
  return Math.round((numerateur / denominateur) * 10000) / 100;
}

function entreDansScore(element: ElementMesurableStructure): boolean {
  return element.entreDansScore ?? true;
}

export function calculerScore(grille: GrilleStructure, reponsesParElement: Map<string, unknown>): ResultatScore {
  const parDomaine: ScoreParDomaine[] = [];
  const criteresNonValides: CritereNonValide[] = [];
  let critieresValidesTotal = 0;
  let criteresTotal = 0;

  for (const domaine of grille.domaines) {
    let validesDansDomaine = 0;
    let totalDansDomaine = 0;

    for (const norme of domaine.normes) {
      for (const critere of norme.criteres) {
        totalDansDomaine++;
        criteresTotal++;

        const documents = critere.elementsMesurables.filter(entreDansScore);
        const documentsNonValides: DocumentNonValide[] = documents
          .filter((element) => !elementEstPositif(element.typeReponse, reponsesParElement.get(element.id)))
          .map((element) => ({
            elementMesurableId: element.id,
            libelle: element.libelle ?? "",
            reponse: reponsesParElement.has(element.id) ? "NON" : "SANS_REPONSE",
          }));

        // Un critère sans aucun élément entrant dans le score ne peut pas être
        // validé documentairement : il reste compté comme non validé.
        const valide = documents.length > 0 && documentsNonValides.length === 0;

        if (valide) {
          validesDansDomaine++;
          critieresValidesTotal++;
        } else {
          criteresNonValides.push({
            critereId: critere.id,
            code: critere.code,
            libelle: critere.libelle,
            domaineNom: domaine.nom,
            documentsNonValides,
            recommandation: critere.recommandation ?? null,
          });
        }
      }
    }

    parDomaine.push({
      domaineId: domaine.id,
      nom: domaine.nom,
      criteresValides: validesDansDomaine,
      criteresTotal: totalDansDomaine,
      scorePct: arrondiPourcentage(validesDansDomaine, totalDansDomaine),
    });
  }

  return {
    scoreGlobal: arrondiPourcentage(critieresValidesTotal, criteresTotal),
    parDomaine,
    criteresNonValides,
  };
}
