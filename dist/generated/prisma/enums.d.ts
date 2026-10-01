export declare const TypeCompte: {
    readonly ORGANISATION: "ORGANISATION";
    readonly INDIVIDUEL: "INDIVIDUEL";
    readonly ADMIN_PLATEFORME: "ADMIN_PLATEFORME";
};
export type TypeCompte = (typeof TypeCompte)[keyof typeof TypeCompte];
export declare const RoleUtilisateur: {
    readonly RESPONSABLE_COMPTE: "RESPONSABLE_COMPTE";
    readonly RESP_QUALITE: "RESP_QUALITE";
    readonly PERSONNEL_SOIGNANT: "PERSONNEL_SOIGNANT";
    readonly GESTIONNAIRE_FORMATION: "GESTIONNAIRE_FORMATION";
    readonly ADMIN_PLATEFORME: "ADMIN_PLATEFORME";
};
export type RoleUtilisateur = (typeof RoleUtilisateur)[keyof typeof RoleUtilisateur];
export declare const TypeEtablissement: {
    readonly EH: "EH";
    readonly ESPC: "ESPC";
};
export type TypeEtablissement = (typeof TypeEtablissement)[keyof typeof TypeEtablissement];
export declare const StatutGrille: {
    readonly BROUILLON: "BROUILLON";
    readonly PUBLIEE: "PUBLIEE";
    readonly ARCHIVEE: "ARCHIVEE";
};
export type StatutGrille = (typeof StatutGrille)[keyof typeof StatutGrille];
export declare const StatutSessionEvaluation: {
    readonly EN_COURS: "EN_COURS";
    readonly SOUMISE: "SOUMISE";
};
export type StatutSessionEvaluation = (typeof StatutSessionEvaluation)[keyof typeof StatutSessionEvaluation];
export declare const TypeReponse: {
    readonly OUI_NON: "OUI_NON";
    readonly TEXTE: "TEXTE";
    readonly CHOIX: "CHOIX";
};
export type TypeReponse = (typeof TypeReponse)[keyof typeof TypeReponse];
export declare const StatutRapportPdf: {
    readonly EN_COURS: "EN_COURS";
    readonly DISPONIBLE: "DISPONIBLE";
    readonly ECHEC: "ECHEC";
};
export type StatutRapportPdf = (typeof StatutRapportPdf)[keyof typeof StatutRapportPdf];
export declare const ModuleMetier: {
    readonly NEWS: "NEWS";
    readonly EI: "EI";
};
export type ModuleMetier = (typeof ModuleMetier)[keyof typeof ModuleMetier];
export declare const StatutAbonnement: {
    readonly ESSAI: "ESSAI";
    readonly ACTIF: "ACTIF";
    readonly EXPIRE: "EXPIRE";
};
export type StatutAbonnement = (typeof StatutAbonnement)[keyof typeof StatutAbonnement];
export declare const StatutPatient: {
    readonly HOSPITALISE: "HOSPITALISE";
    readonly SORTI: "SORTI";
};
export type StatutPatient = (typeof StatutPatient)[keyof typeof StatutPatient];
export declare const NiveauConscience: {
    readonly ALERTE: "ALERTE";
    readonly CONFUSION: "CONFUSION";
    readonly VOIX: "VOIX";
    readonly DOULEUR: "DOULEUR";
    readonly INCONSCIENT: "INCONSCIENT";
};
export type NiveauConscience = (typeof NiveauConscience)[keyof typeof NiveauConscience];
export declare const NiveauRisqueNews: {
    readonly BAS: "BAS";
    readonly MOYEN: "MOYEN";
    readonly ELEVE: "ELEVE";
};
export type NiveauRisqueNews = (typeof NiveauRisqueNews)[keyof typeof NiveauRisqueNews];
export declare const StatutAlerte: {
    readonly OUVERTE: "OUVERTE";
    readonly EN_COURS: "EN_COURS";
    readonly CLOTUREE: "CLOTUREE";
};
export type StatutAlerte = (typeof StatutAlerte)[keyof typeof StatutAlerte];
export declare const GraviteEi: {
    readonly FAIBLE: "FAIBLE";
    readonly MODEREE: "MODEREE";
    readonly ELEVEE: "ELEVEE";
};
export type GraviteEi = (typeof GraviteEi)[keyof typeof GraviteEi];
export declare const StatutEi: {
    readonly DECLARE: "DECLARE";
    readonly EN_TRAITEMENT: "EN_TRAITEMENT";
    readonly CLOTURE: "CLOTURE";
};
export type StatutEi = (typeof StatutEi)[keyof typeof StatutEi];
export declare const TypeCause: {
    readonly IMMEDIATE: "IMMEDIATE";
    readonly PROFONDE: "PROFONDE";
};
export type TypeCause = (typeof TypeCause)[keyof typeof TypeCause];
export declare const StatutActionCorrective: {
    readonly A_FAIRE: "A_FAIRE";
    readonly EN_COURS: "EN_COURS";
    readonly REALISEE: "REALISEE";
};
export type StatutActionCorrective = (typeof StatutActionCorrective)[keyof typeof StatutActionCorrective];
export declare const FormuleFormation: {
    readonly INDIVIDUEL: "INDIVIDUEL";
    readonly GROUPE_5: "GROUPE_5";
    readonly GROUPE_10: "GROUPE_10";
};
export type FormuleFormation = (typeof FormuleFormation)[keyof typeof FormuleFormation];
export declare const StatutReservation: {
    readonly ATTENTE_PAIEMENT: "ATTENTE_PAIEMENT";
    readonly PAYEE: "PAYEE";
    readonly CONFIRMEE: "CONFIRMEE";
    readonly REALISEE: "REALISEE";
    readonly ANNULEE: "ANNULEE";
};
export type StatutReservation = (typeof StatutReservation)[keyof typeof StatutReservation];
