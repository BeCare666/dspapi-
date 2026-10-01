import { TypeReponse } from "../generated/prisma/enums.js";
export function elementEstPositif(typeReponse, valeur) {
    if (typeReponse === TypeReponse.OUI_NON) {
        return valeur === true;
    }
    if (valeur === null || valeur === undefined)
        return false;
    if (typeof valeur === "string")
        return valeur.trim().length > 0;
    return true;
}
function arrondiPourcentage(numerateur, denominateur) {
    if (denominateur === 0)
        return 0;
    return Math.round((numerateur / denominateur) * 10000) / 100;
}
export function calculerScore(grille, reponsesParElement) {
    const parDomaine = [];
    const criteresNonValides = [];
    let critieresValidesTotal = 0;
    let criteresTotal = 0;
    for (const domaine of grille.domaines) {
        let validesDansDomaine = 0;
        let totalDansDomaine = 0;
        for (const norme of domaine.normes) {
            for (const critere of norme.criteres) {
                totalDansDomaine++;
                criteresTotal++;
                const valide = critere.elementsMesurables.length > 0 &&
                    critere.elementsMesurables.every((element) => elementEstPositif(element.typeReponse, reponsesParElement.get(element.id)));
                if (valide) {
                    validesDansDomaine++;
                    critieresValidesTotal++;
                }
                else {
                    criteresNonValides.push({
                        critereId: critere.id,
                        code: critere.code,
                        libelle: critere.libelle,
                        domaineNom: domaine.nom,
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
//# sourceMappingURL=scoring.util.js.map