import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Organisation: 'Organisation',
    Utilisateur: 'Utilisateur',
    RefreshToken: 'RefreshToken',
    PasswordResetToken: 'PasswordResetToken',
    EmailVerificationToken: 'EmailVerificationToken',
    UtilisateurRole: 'UtilisateurRole',
    Service: 'Service',
    JournalAudit: 'JournalAudit',
    Grille: 'Grille',
    Domaine: 'Domaine',
    Norme: 'Norme',
    Critere: 'Critere',
    ElementMesurable: 'ElementMesurable',
    SessionEvaluation: 'SessionEvaluation',
    Reponse: 'Reponse',
    RapportPdf: 'RapportPdf',
    AbonnementModule: 'AbonnementModule',
    Patient: 'Patient',
    MesureNews: 'MesureNews',
    Alerte: 'Alerte',
    Intervention: 'Intervention',
    TypeEi: 'TypeEi',
    EvenementIndesirable: 'EvenementIndesirable',
    EvenementTransition: 'EvenementTransition',
    Cause: 'Cause',
    ActionCorrective: 'ActionCorrective',
    PieceJointe: 'PieceJointe',
    Formation: 'Formation',
    Reservation: 'Reservation',
    Facture: 'Facture',
    Notification: 'Notification',
    ParametrePlateforme: 'ParametrePlateforme'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const OrganisationScalarFieldEnum = {
    id: 'id',
    nom: 'nom',
    ifu: 'ifu',
    type: 'type',
    adresse: 'adresse',
    telephone: 'telephone',
    email: 'email',
    actif: 'actif',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const UtilisateurScalarFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    serviceId: 'serviceId',
    typeCompte: 'typeCompte',
    email: 'email',
    motDePasseHash: 'motDePasseHash',
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone',
    actif: 'actif',
    emailVerifieLe: 'emailVerifieLe',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const RefreshTokenScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
};
export const PasswordResetTokenScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
};
export const EmailVerificationTokenScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
};
export const UtilisateurRoleScalarFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    role: 'role',
    createdAt: 'createdAt'
};
export const ServiceScalarFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    nom: 'nom',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const JournalAuditScalarFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    utilisateurId: 'utilisateurId',
    action: 'action',
    entite: 'entite',
    entiteId: 'entiteId',
    donneesAvant: 'donneesAvant',
    donneesApres: 'donneesApres',
    createdAt: 'createdAt'
};
export const GrilleScalarFieldEnum = {
    id: 'id',
    nom: 'nom',
    type: 'type',
    version: 'version',
    statut: 'statut',
    publieeLe: 'publieeLe',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const DomaineScalarFieldEnum = {
    id: 'id',
    grilleId: 'grilleId',
    nom: 'nom',
    ordre: 'ordre',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const NormeScalarFieldEnum = {
    id: 'id',
    domaineId: 'domaineId',
    code: 'code',
    libelle: 'libelle',
    ordre: 'ordre',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CritereScalarFieldEnum = {
    id: 'id',
    normeId: 'normeId',
    code: 'code',
    libelle: 'libelle',
    ordre: 'ordre',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ElementMesurableScalarFieldEnum = {
    id: 'id',
    critereId: 'critereId',
    libelle: 'libelle',
    typeReponse: 'typeReponse',
    optionsChoix: 'optionsChoix',
    ordre: 'ordre',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SessionEvaluationScalarFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    grilleId: 'grilleId',
    demarreeParId: 'demarreeParId',
    soumiseParId: 'soumiseParId',
    statut: 'statut',
    scoreGlobal: 'scoreGlobal',
    dateDebut: 'dateDebut',
    dateSoumission: 'dateSoumission',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ReponseScalarFieldEnum = {
    id: 'id',
    sessionId: 'sessionId',
    elementMesurableId: 'elementMesurableId',
    valeur: 'valeur',
    commentaire: 'commentaire',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const RapportPdfScalarFieldEnum = {
    id: 'id',
    sessionId: 'sessionId',
    statut: 'statut',
    url: 'url',
    genereLe: 'genereLe',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const AbonnementModuleScalarFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    module: 'module',
    statut: 'statut',
    essaiDebut: 'essaiDebut',
    essaiFin: 'essaiFin',
    activeLe: 'activeLe',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PatientScalarFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    serviceId: 'serviceId',
    nom: 'nom',
    prenom: 'prenom',
    dateNaissance: 'dateNaissance',
    sexe: 'sexe',
    numeroDossier: 'numeroDossier',
    statut: 'statut',
    dateAdmission: 'dateAdmission',
    dateSortie: 'dateSortie',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const MesureNewsScalarFieldEnum = {
    id: 'id',
    patientId: 'patientId',
    saisieParId: 'saisieParId',
    frequenceRespiratoire: 'frequenceRespiratoire',
    saturationOxygene: 'saturationOxygene',
    oxygenoSupplementation: 'oxygenoSupplementation',
    temperature: 'temperature',
    pressionArterielleSystolique: 'pressionArterielleSystolique',
    frequenceCardiaque: 'frequenceCardiaque',
    niveauConscience: 'niveauConscience',
    scoreTotal: 'scoreTotal',
    niveauRisque: 'niveauRisque',
    dateMesure: 'dateMesure',
    createdAt: 'createdAt'
};
export const AlerteScalarFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    patientId: 'patientId',
    mesureId: 'mesureId',
    niveauRisque: 'niveauRisque',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const InterventionScalarFieldEnum = {
    id: 'id',
    alerteId: 'alerteId',
    utilisateurId: 'utilisateurId',
    note: 'note',
    createdAt: 'createdAt'
};
export const TypeEiScalarFieldEnum = {
    id: 'id',
    libelle: 'libelle',
    actif: 'actif',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const EvenementIndesirableScalarFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    typeEiId: 'typeEiId',
    serviceId: 'serviceId',
    critereId: 'critereId',
    declareParId: 'declareParId',
    description: 'description',
    gravite: 'gravite',
    statut: 'statut',
    dateDeclaration: 'dateDeclaration',
    dateCloture: 'dateCloture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const EvenementTransitionScalarFieldEnum = {
    id: 'id',
    evenementId: 'evenementId',
    ancienStatut: 'ancienStatut',
    nouveauStatut: 'nouveauStatut',
    utilisateurId: 'utilisateurId',
    createdAt: 'createdAt'
};
export const CauseScalarFieldEnum = {
    id: 'id',
    evenementId: 'evenementId',
    type: 'type',
    description: 'description',
    createdAt: 'createdAt'
};
export const ActionCorrectiveScalarFieldEnum = {
    id: 'id',
    evenementId: 'evenementId',
    description: 'description',
    responsableId: 'responsableId',
    echeance: 'echeance',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PieceJointeScalarFieldEnum = {
    id: 'id',
    evenementId: 'evenementId',
    url: 'url',
    cloudinaryId: 'cloudinaryId',
    nomFichier: 'nomFichier',
    typeMime: 'typeMime',
    tailleOctets: 'tailleOctets',
    createdAt: 'createdAt'
};
export const FormationScalarFieldEnum = {
    id: 'id',
    titre: 'titre',
    description: 'description',
    dureeHeures: 'dureeHeures',
    prixIndividuel: 'prixIndividuel',
    prixGroupe5: 'prixGroupe5',
    prixGroupe10: 'prixGroupe10',
    actif: 'actif',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ReservationScalarFieldEnum = {
    id: 'id',
    formationId: 'formationId',
    utilisateurId: 'utilisateurId',
    organisationId: 'organisationId',
    formule: 'formule',
    tarifApplique: 'tarifApplique',
    statut: 'statut',
    kkiapayTransactionId: 'kkiapayTransactionId',
    dateRdv: 'dateRdv',
    presenceConfirmee: 'presenceConfirmee',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const FactureScalarFieldEnum = {
    id: 'id',
    reservationId: 'reservationId',
    numero: 'numero',
    montant: 'montant',
    emiseLe: 'emiseLe',
    createdAt: 'createdAt'
};
export const NotificationScalarFieldEnum = {
    id: 'id',
    destinataireId: 'destinataireId',
    type: 'type',
    titre: 'titre',
    message: 'message',
    lienUrl: 'lienUrl',
    luLe: 'luLe',
    createdAt: 'createdAt'
};
export const ParametrePlateformeScalarFieldEnum = {
    id: 'id',
    cle: 'cle',
    valeur: 'valeur',
    type: 'type',
    description: 'description',
    valeurDefaut: 'valeurDefaut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const JsonNullValueInput = {
    JsonNull: JsonNull
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const OrganisationOrderByRelevanceFieldEnum = {
    id: 'id',
    nom: 'nom',
    ifu: 'ifu',
    adresse: 'adresse',
    telephone: 'telephone',
    email: 'email'
};
export const UtilisateurOrderByRelevanceFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    serviceId: 'serviceId',
    email: 'email',
    motDePasseHash: 'motDePasseHash',
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone'
};
export const RefreshTokenOrderByRelevanceFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    tokenHash: 'tokenHash'
};
export const PasswordResetTokenOrderByRelevanceFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    tokenHash: 'tokenHash'
};
export const EmailVerificationTokenOrderByRelevanceFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId',
    tokenHash: 'tokenHash'
};
export const UtilisateurRoleOrderByRelevanceFieldEnum = {
    id: 'id',
    utilisateurId: 'utilisateurId'
};
export const ServiceOrderByRelevanceFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    nom: 'nom',
    description: 'description'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const JournalAuditOrderByRelevanceFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    utilisateurId: 'utilisateurId',
    action: 'action',
    entite: 'entite',
    entiteId: 'entiteId'
};
export const GrilleOrderByRelevanceFieldEnum = {
    id: 'id',
    nom: 'nom'
};
export const DomaineOrderByRelevanceFieldEnum = {
    id: 'id',
    grilleId: 'grilleId',
    nom: 'nom'
};
export const NormeOrderByRelevanceFieldEnum = {
    id: 'id',
    domaineId: 'domaineId',
    code: 'code',
    libelle: 'libelle'
};
export const CritereOrderByRelevanceFieldEnum = {
    id: 'id',
    normeId: 'normeId',
    code: 'code',
    libelle: 'libelle'
};
export const ElementMesurableOrderByRelevanceFieldEnum = {
    id: 'id',
    critereId: 'critereId',
    libelle: 'libelle'
};
export const SessionEvaluationOrderByRelevanceFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    grilleId: 'grilleId',
    demarreeParId: 'demarreeParId',
    soumiseParId: 'soumiseParId'
};
export const ReponseOrderByRelevanceFieldEnum = {
    id: 'id',
    sessionId: 'sessionId',
    elementMesurableId: 'elementMesurableId',
    commentaire: 'commentaire'
};
export const RapportPdfOrderByRelevanceFieldEnum = {
    id: 'id',
    sessionId: 'sessionId',
    url: 'url'
};
export const AbonnementModuleOrderByRelevanceFieldEnum = {
    id: 'id',
    organisationId: 'organisationId'
};
export const PatientOrderByRelevanceFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    serviceId: 'serviceId',
    nom: 'nom',
    prenom: 'prenom',
    sexe: 'sexe',
    numeroDossier: 'numeroDossier'
};
export const MesureNewsOrderByRelevanceFieldEnum = {
    id: 'id',
    patientId: 'patientId',
    saisieParId: 'saisieParId'
};
export const AlerteOrderByRelevanceFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    patientId: 'patientId',
    mesureId: 'mesureId'
};
export const InterventionOrderByRelevanceFieldEnum = {
    id: 'id',
    alerteId: 'alerteId',
    utilisateurId: 'utilisateurId',
    note: 'note'
};
export const TypeEiOrderByRelevanceFieldEnum = {
    id: 'id',
    libelle: 'libelle'
};
export const EvenementIndesirableOrderByRelevanceFieldEnum = {
    id: 'id',
    organisationId: 'organisationId',
    typeEiId: 'typeEiId',
    serviceId: 'serviceId',
    critereId: 'critereId',
    declareParId: 'declareParId',
    description: 'description'
};
export const EvenementTransitionOrderByRelevanceFieldEnum = {
    id: 'id',
    evenementId: 'evenementId',
    utilisateurId: 'utilisateurId'
};
export const CauseOrderByRelevanceFieldEnum = {
    id: 'id',
    evenementId: 'evenementId',
    description: 'description'
};
export const ActionCorrectiveOrderByRelevanceFieldEnum = {
    id: 'id',
    evenementId: 'evenementId',
    description: 'description',
    responsableId: 'responsableId'
};
export const PieceJointeOrderByRelevanceFieldEnum = {
    id: 'id',
    evenementId: 'evenementId',
    url: 'url',
    cloudinaryId: 'cloudinaryId',
    nomFichier: 'nomFichier',
    typeMime: 'typeMime'
};
export const FormationOrderByRelevanceFieldEnum = {
    id: 'id',
    titre: 'titre',
    description: 'description'
};
export const ReservationOrderByRelevanceFieldEnum = {
    id: 'id',
    formationId: 'formationId',
    utilisateurId: 'utilisateurId',
    organisationId: 'organisationId',
    kkiapayTransactionId: 'kkiapayTransactionId'
};
export const FactureOrderByRelevanceFieldEnum = {
    id: 'id',
    reservationId: 'reservationId',
    numero: 'numero'
};
export const NotificationOrderByRelevanceFieldEnum = {
    id: 'id',
    destinataireId: 'destinataireId',
    type: 'type',
    titre: 'titre',
    message: 'message',
    lienUrl: 'lienUrl'
};
export const ParametrePlateformeOrderByRelevanceFieldEnum = {
    id: 'id',
    cle: 'cle',
    valeur: 'valeur',
    type: 'type',
    description: 'description',
    valeurDefaut: 'valeurDefaut'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map