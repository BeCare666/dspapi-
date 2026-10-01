import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Organisation: "Organisation";
    readonly Utilisateur: "Utilisateur";
    readonly RefreshToken: "RefreshToken";
    readonly PasswordResetToken: "PasswordResetToken";
    readonly EmailVerificationToken: "EmailVerificationToken";
    readonly UtilisateurRole: "UtilisateurRole";
    readonly Service: "Service";
    readonly JournalAudit: "JournalAudit";
    readonly Grille: "Grille";
    readonly Domaine: "Domaine";
    readonly Norme: "Norme";
    readonly Critere: "Critere";
    readonly ElementMesurable: "ElementMesurable";
    readonly SessionEvaluation: "SessionEvaluation";
    readonly Reponse: "Reponse";
    readonly RapportPdf: "RapportPdf";
    readonly AbonnementModule: "AbonnementModule";
    readonly Patient: "Patient";
    readonly MesureNews: "MesureNews";
    readonly Alerte: "Alerte";
    readonly Intervention: "Intervention";
    readonly TypeEi: "TypeEi";
    readonly EvenementIndesirable: "EvenementIndesirable";
    readonly EvenementTransition: "EvenementTransition";
    readonly Cause: "Cause";
    readonly ActionCorrective: "ActionCorrective";
    readonly PieceJointe: "PieceJointe";
    readonly Formation: "Formation";
    readonly Reservation: "Reservation";
    readonly Facture: "Facture";
    readonly Notification: "Notification";
    readonly ParametrePlateforme: "ParametrePlateforme";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const OrganisationScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly ifu: "ifu";
    readonly type: "type";
    readonly adresse: "adresse";
    readonly telephone: "telephone";
    readonly email: "email";
    readonly actif: "actif";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrganisationScalarFieldEnum = (typeof OrganisationScalarFieldEnum)[keyof typeof OrganisationScalarFieldEnum];
export declare const UtilisateurScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly serviceId: "serviceId";
    readonly typeCompte: "typeCompte";
    readonly email: "email";
    readonly motDePasseHash: "motDePasseHash";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly telephone: "telephone";
    readonly actif: "actif";
    readonly emailVerifieLe: "emailVerifieLe";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const PasswordResetTokenScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum];
export declare const EmailVerificationTokenScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type EmailVerificationTokenScalarFieldEnum = (typeof EmailVerificationTokenScalarFieldEnum)[keyof typeof EmailVerificationTokenScalarFieldEnum];
export declare const UtilisateurRoleScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly role: "role";
    readonly createdAt: "createdAt";
};
export type UtilisateurRoleScalarFieldEnum = (typeof UtilisateurRoleScalarFieldEnum)[keyof typeof UtilisateurRoleScalarFieldEnum];
export declare const ServiceScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly nom: "nom";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];
export declare const JournalAuditScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly utilisateurId: "utilisateurId";
    readonly action: "action";
    readonly entite: "entite";
    readonly entiteId: "entiteId";
    readonly donneesAvant: "donneesAvant";
    readonly donneesApres: "donneesApres";
    readonly createdAt: "createdAt";
};
export type JournalAuditScalarFieldEnum = (typeof JournalAuditScalarFieldEnum)[keyof typeof JournalAuditScalarFieldEnum];
export declare const GrilleScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly type: "type";
    readonly version: "version";
    readonly statut: "statut";
    readonly publieeLe: "publieeLe";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GrilleScalarFieldEnum = (typeof GrilleScalarFieldEnum)[keyof typeof GrilleScalarFieldEnum];
export declare const DomaineScalarFieldEnum: {
    readonly id: "id";
    readonly grilleId: "grilleId";
    readonly nom: "nom";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DomaineScalarFieldEnum = (typeof DomaineScalarFieldEnum)[keyof typeof DomaineScalarFieldEnum];
export declare const NormeScalarFieldEnum: {
    readonly id: "id";
    readonly domaineId: "domaineId";
    readonly code: "code";
    readonly libelle: "libelle";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type NormeScalarFieldEnum = (typeof NormeScalarFieldEnum)[keyof typeof NormeScalarFieldEnum];
export declare const CritereScalarFieldEnum: {
    readonly id: "id";
    readonly normeId: "normeId";
    readonly code: "code";
    readonly libelle: "libelle";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CritereScalarFieldEnum = (typeof CritereScalarFieldEnum)[keyof typeof CritereScalarFieldEnum];
export declare const ElementMesurableScalarFieldEnum: {
    readonly id: "id";
    readonly critereId: "critereId";
    readonly libelle: "libelle";
    readonly typeReponse: "typeReponse";
    readonly optionsChoix: "optionsChoix";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ElementMesurableScalarFieldEnum = (typeof ElementMesurableScalarFieldEnum)[keyof typeof ElementMesurableScalarFieldEnum];
export declare const SessionEvaluationScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly grilleId: "grilleId";
    readonly demarreeParId: "demarreeParId";
    readonly soumiseParId: "soumiseParId";
    readonly statut: "statut";
    readonly scoreGlobal: "scoreGlobal";
    readonly dateDebut: "dateDebut";
    readonly dateSoumission: "dateSoumission";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SessionEvaluationScalarFieldEnum = (typeof SessionEvaluationScalarFieldEnum)[keyof typeof SessionEvaluationScalarFieldEnum];
export declare const ReponseScalarFieldEnum: {
    readonly id: "id";
    readonly sessionId: "sessionId";
    readonly elementMesurableId: "elementMesurableId";
    readonly valeur: "valeur";
    readonly commentaire: "commentaire";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReponseScalarFieldEnum = (typeof ReponseScalarFieldEnum)[keyof typeof ReponseScalarFieldEnum];
export declare const RapportPdfScalarFieldEnum: {
    readonly id: "id";
    readonly sessionId: "sessionId";
    readonly statut: "statut";
    readonly url: "url";
    readonly genereLe: "genereLe";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RapportPdfScalarFieldEnum = (typeof RapportPdfScalarFieldEnum)[keyof typeof RapportPdfScalarFieldEnum];
export declare const AbonnementModuleScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly module: "module";
    readonly statut: "statut";
    readonly essaiDebut: "essaiDebut";
    readonly essaiFin: "essaiFin";
    readonly activeLe: "activeLe";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AbonnementModuleScalarFieldEnum = (typeof AbonnementModuleScalarFieldEnum)[keyof typeof AbonnementModuleScalarFieldEnum];
export declare const PatientScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly serviceId: "serviceId";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly dateNaissance: "dateNaissance";
    readonly sexe: "sexe";
    readonly numeroDossier: "numeroDossier";
    readonly statut: "statut";
    readonly dateAdmission: "dateAdmission";
    readonly dateSortie: "dateSortie";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum];
export declare const MesureNewsScalarFieldEnum: {
    readonly id: "id";
    readonly patientId: "patientId";
    readonly saisieParId: "saisieParId";
    readonly frequenceRespiratoire: "frequenceRespiratoire";
    readonly saturationOxygene: "saturationOxygene";
    readonly oxygenoSupplementation: "oxygenoSupplementation";
    readonly temperature: "temperature";
    readonly pressionArterielleSystolique: "pressionArterielleSystolique";
    readonly frequenceCardiaque: "frequenceCardiaque";
    readonly niveauConscience: "niveauConscience";
    readonly scoreTotal: "scoreTotal";
    readonly niveauRisque: "niveauRisque";
    readonly dateMesure: "dateMesure";
    readonly createdAt: "createdAt";
};
export type MesureNewsScalarFieldEnum = (typeof MesureNewsScalarFieldEnum)[keyof typeof MesureNewsScalarFieldEnum];
export declare const AlerteScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly patientId: "patientId";
    readonly mesureId: "mesureId";
    readonly niveauRisque: "niveauRisque";
    readonly statut: "statut";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AlerteScalarFieldEnum = (typeof AlerteScalarFieldEnum)[keyof typeof AlerteScalarFieldEnum];
export declare const InterventionScalarFieldEnum: {
    readonly id: "id";
    readonly alerteId: "alerteId";
    readonly utilisateurId: "utilisateurId";
    readonly note: "note";
    readonly createdAt: "createdAt";
};
export type InterventionScalarFieldEnum = (typeof InterventionScalarFieldEnum)[keyof typeof InterventionScalarFieldEnum];
export declare const TypeEiScalarFieldEnum: {
    readonly id: "id";
    readonly libelle: "libelle";
    readonly actif: "actif";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TypeEiScalarFieldEnum = (typeof TypeEiScalarFieldEnum)[keyof typeof TypeEiScalarFieldEnum];
export declare const EvenementIndesirableScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly typeEiId: "typeEiId";
    readonly serviceId: "serviceId";
    readonly critereId: "critereId";
    readonly declareParId: "declareParId";
    readonly description: "description";
    readonly gravite: "gravite";
    readonly statut: "statut";
    readonly dateDeclaration: "dateDeclaration";
    readonly dateCloture: "dateCloture";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EvenementIndesirableScalarFieldEnum = (typeof EvenementIndesirableScalarFieldEnum)[keyof typeof EvenementIndesirableScalarFieldEnum];
export declare const EvenementTransitionScalarFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly ancienStatut: "ancienStatut";
    readonly nouveauStatut: "nouveauStatut";
    readonly utilisateurId: "utilisateurId";
    readonly createdAt: "createdAt";
};
export type EvenementTransitionScalarFieldEnum = (typeof EvenementTransitionScalarFieldEnum)[keyof typeof EvenementTransitionScalarFieldEnum];
export declare const CauseScalarFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly type: "type";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type CauseScalarFieldEnum = (typeof CauseScalarFieldEnum)[keyof typeof CauseScalarFieldEnum];
export declare const ActionCorrectiveScalarFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly description: "description";
    readonly responsableId: "responsableId";
    readonly echeance: "echeance";
    readonly statut: "statut";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ActionCorrectiveScalarFieldEnum = (typeof ActionCorrectiveScalarFieldEnum)[keyof typeof ActionCorrectiveScalarFieldEnum];
export declare const PieceJointeScalarFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly url: "url";
    readonly cloudinaryId: "cloudinaryId";
    readonly nomFichier: "nomFichier";
    readonly typeMime: "typeMime";
    readonly tailleOctets: "tailleOctets";
    readonly createdAt: "createdAt";
};
export type PieceJointeScalarFieldEnum = (typeof PieceJointeScalarFieldEnum)[keyof typeof PieceJointeScalarFieldEnum];
export declare const FormationScalarFieldEnum: {
    readonly id: "id";
    readonly titre: "titre";
    readonly description: "description";
    readonly dureeHeures: "dureeHeures";
    readonly prixIndividuel: "prixIndividuel";
    readonly prixGroupe5: "prixGroupe5";
    readonly prixGroupe10: "prixGroupe10";
    readonly actif: "actif";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FormationScalarFieldEnum = (typeof FormationScalarFieldEnum)[keyof typeof FormationScalarFieldEnum];
export declare const ReservationScalarFieldEnum: {
    readonly id: "id";
    readonly formationId: "formationId";
    readonly utilisateurId: "utilisateurId";
    readonly organisationId: "organisationId";
    readonly formule: "formule";
    readonly tarifApplique: "tarifApplique";
    readonly statut: "statut";
    readonly kkiapayTransactionId: "kkiapayTransactionId";
    readonly dateRdv: "dateRdv";
    readonly presenceConfirmee: "presenceConfirmee";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum];
export declare const FactureScalarFieldEnum: {
    readonly id: "id";
    readonly reservationId: "reservationId";
    readonly numero: "numero";
    readonly montant: "montant";
    readonly emiseLe: "emiseLe";
    readonly createdAt: "createdAt";
};
export type FactureScalarFieldEnum = (typeof FactureScalarFieldEnum)[keyof typeof FactureScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly destinataireId: "destinataireId";
    readonly type: "type";
    readonly titre: "titre";
    readonly message: "message";
    readonly lienUrl: "lienUrl";
    readonly luLe: "luLe";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const ParametrePlateformeScalarFieldEnum: {
    readonly id: "id";
    readonly cle: "cle";
    readonly valeur: "valeur";
    readonly type: "type";
    readonly description: "description";
    readonly valeurDefaut: "valeurDefaut";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParametrePlateformeScalarFieldEnum = (typeof ParametrePlateformeScalarFieldEnum)[keyof typeof ParametrePlateformeScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const OrganisationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly ifu: "ifu";
    readonly adresse: "adresse";
    readonly telephone: "telephone";
    readonly email: "email";
};
export type OrganisationOrderByRelevanceFieldEnum = (typeof OrganisationOrderByRelevanceFieldEnum)[keyof typeof OrganisationOrderByRelevanceFieldEnum];
export declare const UtilisateurOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly serviceId: "serviceId";
    readonly email: "email";
    readonly motDePasseHash: "motDePasseHash";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly telephone: "telephone";
};
export type UtilisateurOrderByRelevanceFieldEnum = (typeof UtilisateurOrderByRelevanceFieldEnum)[keyof typeof UtilisateurOrderByRelevanceFieldEnum];
export declare const RefreshTokenOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly tokenHash: "tokenHash";
};
export type RefreshTokenOrderByRelevanceFieldEnum = (typeof RefreshTokenOrderByRelevanceFieldEnum)[keyof typeof RefreshTokenOrderByRelevanceFieldEnum];
export declare const PasswordResetTokenOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly tokenHash: "tokenHash";
};
export type PasswordResetTokenOrderByRelevanceFieldEnum = (typeof PasswordResetTokenOrderByRelevanceFieldEnum)[keyof typeof PasswordResetTokenOrderByRelevanceFieldEnum];
export declare const EmailVerificationTokenOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly tokenHash: "tokenHash";
};
export type EmailVerificationTokenOrderByRelevanceFieldEnum = (typeof EmailVerificationTokenOrderByRelevanceFieldEnum)[keyof typeof EmailVerificationTokenOrderByRelevanceFieldEnum];
export declare const UtilisateurRoleOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
};
export type UtilisateurRoleOrderByRelevanceFieldEnum = (typeof UtilisateurRoleOrderByRelevanceFieldEnum)[keyof typeof UtilisateurRoleOrderByRelevanceFieldEnum];
export declare const ServiceOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly nom: "nom";
    readonly description: "description";
};
export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JournalAuditOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly utilisateurId: "utilisateurId";
    readonly action: "action";
    readonly entite: "entite";
    readonly entiteId: "entiteId";
};
export type JournalAuditOrderByRelevanceFieldEnum = (typeof JournalAuditOrderByRelevanceFieldEnum)[keyof typeof JournalAuditOrderByRelevanceFieldEnum];
export declare const GrilleOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
};
export type GrilleOrderByRelevanceFieldEnum = (typeof GrilleOrderByRelevanceFieldEnum)[keyof typeof GrilleOrderByRelevanceFieldEnum];
export declare const DomaineOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly grilleId: "grilleId";
    readonly nom: "nom";
};
export type DomaineOrderByRelevanceFieldEnum = (typeof DomaineOrderByRelevanceFieldEnum)[keyof typeof DomaineOrderByRelevanceFieldEnum];
export declare const NormeOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly domaineId: "domaineId";
    readonly code: "code";
    readonly libelle: "libelle";
};
export type NormeOrderByRelevanceFieldEnum = (typeof NormeOrderByRelevanceFieldEnum)[keyof typeof NormeOrderByRelevanceFieldEnum];
export declare const CritereOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly normeId: "normeId";
    readonly code: "code";
    readonly libelle: "libelle";
};
export type CritereOrderByRelevanceFieldEnum = (typeof CritereOrderByRelevanceFieldEnum)[keyof typeof CritereOrderByRelevanceFieldEnum];
export declare const ElementMesurableOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly critereId: "critereId";
    readonly libelle: "libelle";
};
export type ElementMesurableOrderByRelevanceFieldEnum = (typeof ElementMesurableOrderByRelevanceFieldEnum)[keyof typeof ElementMesurableOrderByRelevanceFieldEnum];
export declare const SessionEvaluationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly grilleId: "grilleId";
    readonly demarreeParId: "demarreeParId";
    readonly soumiseParId: "soumiseParId";
};
export type SessionEvaluationOrderByRelevanceFieldEnum = (typeof SessionEvaluationOrderByRelevanceFieldEnum)[keyof typeof SessionEvaluationOrderByRelevanceFieldEnum];
export declare const ReponseOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly sessionId: "sessionId";
    readonly elementMesurableId: "elementMesurableId";
    readonly commentaire: "commentaire";
};
export type ReponseOrderByRelevanceFieldEnum = (typeof ReponseOrderByRelevanceFieldEnum)[keyof typeof ReponseOrderByRelevanceFieldEnum];
export declare const RapportPdfOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly sessionId: "sessionId";
    readonly url: "url";
};
export type RapportPdfOrderByRelevanceFieldEnum = (typeof RapportPdfOrderByRelevanceFieldEnum)[keyof typeof RapportPdfOrderByRelevanceFieldEnum];
export declare const AbonnementModuleOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
};
export type AbonnementModuleOrderByRelevanceFieldEnum = (typeof AbonnementModuleOrderByRelevanceFieldEnum)[keyof typeof AbonnementModuleOrderByRelevanceFieldEnum];
export declare const PatientOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly serviceId: "serviceId";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly sexe: "sexe";
    readonly numeroDossier: "numeroDossier";
};
export type PatientOrderByRelevanceFieldEnum = (typeof PatientOrderByRelevanceFieldEnum)[keyof typeof PatientOrderByRelevanceFieldEnum];
export declare const MesureNewsOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly patientId: "patientId";
    readonly saisieParId: "saisieParId";
};
export type MesureNewsOrderByRelevanceFieldEnum = (typeof MesureNewsOrderByRelevanceFieldEnum)[keyof typeof MesureNewsOrderByRelevanceFieldEnum];
export declare const AlerteOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly patientId: "patientId";
    readonly mesureId: "mesureId";
};
export type AlerteOrderByRelevanceFieldEnum = (typeof AlerteOrderByRelevanceFieldEnum)[keyof typeof AlerteOrderByRelevanceFieldEnum];
export declare const InterventionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly alerteId: "alerteId";
    readonly utilisateurId: "utilisateurId";
    readonly note: "note";
};
export type InterventionOrderByRelevanceFieldEnum = (typeof InterventionOrderByRelevanceFieldEnum)[keyof typeof InterventionOrderByRelevanceFieldEnum];
export declare const TypeEiOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly libelle: "libelle";
};
export type TypeEiOrderByRelevanceFieldEnum = (typeof TypeEiOrderByRelevanceFieldEnum)[keyof typeof TypeEiOrderByRelevanceFieldEnum];
export declare const EvenementIndesirableOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly typeEiId: "typeEiId";
    readonly serviceId: "serviceId";
    readonly critereId: "critereId";
    readonly declareParId: "declareParId";
    readonly description: "description";
};
export type EvenementIndesirableOrderByRelevanceFieldEnum = (typeof EvenementIndesirableOrderByRelevanceFieldEnum)[keyof typeof EvenementIndesirableOrderByRelevanceFieldEnum];
export declare const EvenementTransitionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly utilisateurId: "utilisateurId";
};
export type EvenementTransitionOrderByRelevanceFieldEnum = (typeof EvenementTransitionOrderByRelevanceFieldEnum)[keyof typeof EvenementTransitionOrderByRelevanceFieldEnum];
export declare const CauseOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly description: "description";
};
export type CauseOrderByRelevanceFieldEnum = (typeof CauseOrderByRelevanceFieldEnum)[keyof typeof CauseOrderByRelevanceFieldEnum];
export declare const ActionCorrectiveOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly description: "description";
    readonly responsableId: "responsableId";
};
export type ActionCorrectiveOrderByRelevanceFieldEnum = (typeof ActionCorrectiveOrderByRelevanceFieldEnum)[keyof typeof ActionCorrectiveOrderByRelevanceFieldEnum];
export declare const PieceJointeOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly url: "url";
    readonly cloudinaryId: "cloudinaryId";
    readonly nomFichier: "nomFichier";
    readonly typeMime: "typeMime";
};
export type PieceJointeOrderByRelevanceFieldEnum = (typeof PieceJointeOrderByRelevanceFieldEnum)[keyof typeof PieceJointeOrderByRelevanceFieldEnum];
export declare const FormationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly titre: "titre";
    readonly description: "description";
};
export type FormationOrderByRelevanceFieldEnum = (typeof FormationOrderByRelevanceFieldEnum)[keyof typeof FormationOrderByRelevanceFieldEnum];
export declare const ReservationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly formationId: "formationId";
    readonly utilisateurId: "utilisateurId";
    readonly organisationId: "organisationId";
    readonly kkiapayTransactionId: "kkiapayTransactionId";
};
export type ReservationOrderByRelevanceFieldEnum = (typeof ReservationOrderByRelevanceFieldEnum)[keyof typeof ReservationOrderByRelevanceFieldEnum];
export declare const FactureOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly reservationId: "reservationId";
    readonly numero: "numero";
};
export type FactureOrderByRelevanceFieldEnum = (typeof FactureOrderByRelevanceFieldEnum)[keyof typeof FactureOrderByRelevanceFieldEnum];
export declare const NotificationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly destinataireId: "destinataireId";
    readonly type: "type";
    readonly titre: "titre";
    readonly message: "message";
    readonly lienUrl: "lienUrl";
};
export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum];
export declare const ParametrePlateformeOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly cle: "cle";
    readonly valeur: "valeur";
    readonly type: "type";
    readonly description: "description";
    readonly valeurDefaut: "valeurDefaut";
};
export type ParametrePlateformeOrderByRelevanceFieldEnum = (typeof ParametrePlateformeOrderByRelevanceFieldEnum)[keyof typeof ParametrePlateformeOrderByRelevanceFieldEnum];
