import { Injectable, Logger } from "@nestjs/common";
import { BrevoService } from "./brevo.service.js";
import { rendreEmailVerification } from "./templates/email-verification.template.js";

// 11.2 — intégration Brevo réelle. Un échec d'envoi est toujours loggé bruyamment
// mais jamais renvoyé à l'appelant : une notification qui échoue ne doit pas faire
// échouer l'action métier déjà accomplie (inscription, alerte, paiement...) — le
// rattrapage se fait via un renvoi explicite (ex. `POST /auth/resend-verification`)
// plutôt qu'en bloquant la requête d'origine.
@Injectable()
export class MailerService {
  private readonly logger = new Logger(MailerService.name);

  constructor(private readonly brevo: BrevoService) {}

  async sendVerificationEmail(email: string, prenom: string, lienVerification: string): Promise<void> {
    await this.envoyerSansEchouer({
      destinataire: { email, name: prenom },
      sujet: "Confirmez votre adresse email · DSP",
      contenuHtml: rendreEmailVerification({ prenom, lienVerification }),
      contenuTexte: `Bienvenue ${prenom},\n\nConfirmez votre adresse email pour activer votre compte DSP :\n${lienVerification}\n\nCe lien expire dans 48 heures.`,
    });
  }

  async sendPasswordResetEmail(email: string, resetToken: string): Promise<void> {
    const lien = `${process.env.WEB_APP_URL}/reinitialiser-mot-de-passe?token=${resetToken}`;
    await this.envoyerSansEchouer({
      destinataire: { email },
      sujet: "Réinitialisation de votre mot de passe · DSP",
      contenuHtml: `<p>Vous avez demandé la réinitialisation de votre mot de passe.</p><p><a href="${lien}">Choisir un nouveau mot de passe</a></p><p>Ce lien expire dans 1 heure. Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.</p>`,
    });
  }

  // §4.2 — invitation d'un utilisateur interne : il définit lui-même son mot de passe.
  async sendInvitationEmail(email: string, prenom: string, organisationNom: string, lienActivation: string): Promise<void> {
    await this.envoyerSansEchouer({
      destinataire: { email, name: prenom },
      sujet: `Invitation à rejoindre ${organisationNom} sur DSP`,
      contenuHtml: `<p>Bonjour ${echapperHtml(prenom)},</p><p>Un compte a été créé pour vous sur DSP (Dispositif de Sécurité des Patients) au sein de l'établissement <strong>${echapperHtml(organisationNom)}</strong>.</p><p><a href="${lienActivation}">Activer mon compte et choisir mon mot de passe</a></p><p>Ce lien expire dans 72 heures. Si vous n'attendiez pas cette invitation, ignorez cet email.</p>`,
      contenuTexte: `Bonjour ${prenom},

Un compte a été créé pour vous sur DSP au sein de l'établissement ${organisationNom}.
Activez votre compte et choisissez votre mot de passe :
${lienActivation}

Ce lien expire dans 72 heures.`,
    });
  }

  // RM9 — notification automatique sur alerte NEWS moyen/élevé (7.6).
  // §7.1 — le patient est désigné par son identifiant interne, jamais par son identité.
  async sendAlerteNewsEmail(email: string, libellePatient: string, niveauRisque: string, service: string | null): Promise<void> {
    const lieu = service ? ` (service ${echapperHtml(service)})` : "";
    await this.envoyerSansEchouer({
      destinataire: { email },
      sujet: `Alerte NEWS ${niveauRisque} : ${libellePatient}`,
      contenuHtml: `<p>Une mesure NEWS de niveau <strong>${niveauRisque}</strong> a été enregistrée pour le <strong>${echapperHtml(libellePatient)}</strong>${lieu}.</p><p>Merci de consulter la fiche de surveillance sur DSP. Cette alerte est une aide à la priorisation, pas un diagnostic.</p>`,
    });
  }

  // RM9 — mécanisme commun avec NEWS : notification automatique sur EI gravité élevée (8.9).
  // §8.3 — alerte immédiate : envoyée dès la déclaration (ou à la qualification
  // si la gravité est réévaluée à la hausse).
  async sendAlerteEiGraviteElevee(email: string, evenementId: string, gravite: string): Promise<void> {
    const lien = `${process.env.WEB_APP_URL}/evenements-indesirables/${evenementId}`;
    await this.envoyerSansEchouer({
      destinataire: { email },
      sujet: `Événement indésirable de gravité élevée : ${gravite}`,
      contenuHtml: `<p>Un événement indésirable de gravité <strong>${echapperHtml(gravite)}</strong> vient d'être signalé dans votre établissement.</p><p><a href="${lien}">Consulter l'événement sur DSP</a> et le traiter en priorité.</p>`,
    });
  }

  // §11.2 — confirmation d'inscription (après vérification de l'adresse email).
  async sendInscriptionConfirmee(email: string, prenom: string): Promise<void> {
    const lien = `${process.env.WEB_APP_URL}/login`;
    await this.envoyerSansEchouer({
      destinataire: { email, name: prenom },
      sujet: "Votre inscription sur DSP est confirmée",
      contenuHtml: `<p>Bonjour ${echapperHtml(prenom)},</p><p>Votre adresse email est confirmée : votre compte DSP (Dispositif de Sécurité des Patients) est actif.</p><p><a href="${lien}">Se connecter</a></p>`,
    });
  }

  // §11.2 — rappel avant la fin de l'essai gratuit d'un module.
  async sendRappelFinEssai(email: string, module: string, dateFin: string, lien: string): Promise<void> {
    await this.envoyerSansEchouer({
      destinataire: { email },
      sujet: `Votre essai gratuit du module ${module} se termine bientôt · DSP`,
      contenuHtml: `<p>L'essai gratuit du module <strong>${echapperHtml(module)}</strong> se termine le <strong>${echapperHtml(dateFin)}</strong>.</p><p><a href="${lien}">Souscrire un abonnement</a> pour continuer à utiliser le module.</p>`,
    });
  }

  // §11.2 — rappel avant une session de formation.
  async sendRappelFormation(email: string, formation: string, dateRdv: string): Promise<void> {
    await this.envoyerSansEchouer({
      destinataire: { email },
      sujet: `Rappel : formation « ${formation} » · DSP`,
      contenuHtml: `<p>Rappel : votre formation <strong>${echapperHtml(formation)}</strong> a lieu le <strong>${echapperHtml(dateRdv)}</strong>.</p>`,
    });
  }

  // §11.2 — disponibilité d'un rapport PDF d'auto-évaluation.
  async sendRapportDisponible(email: string, grilleNom: string, lien: string): Promise<void> {
    await this.envoyerSansEchouer({
      destinataire: { email },
      sujet: "Votre rapport d'auto-évaluation est disponible · DSP",
      contenuHtml: `<p>Le rapport de synthèse de votre auto-évaluation (<strong>${echapperHtml(grilleNom)}</strong>) est disponible.</p><p><a href="${lien}">Consulter les résultats et télécharger le rapport</a></p>`,
    });
  }

  // 9.6 — confirmation paiement / date de RDV (formations).
  async sendNotificationGenerique(email: string, message: string): Promise<void> {
    await this.envoyerSansEchouer({
      destinataire: { email },
      sujet: "Notification DSP",
      contenuHtml: `<p>${message}</p>`,
    });
  }

  private async envoyerSansEchouer(params: Parameters<BrevoService["envoyer"]>[0]): Promise<void> {
    try {
      await this.brevo.envoyer(params);
    } catch (erreur) {
      this.logger.error(`Échec d'envoi email "${params.sujet}" à ${params.destinataire.email} : ${erreur}`);
    }
  }
}

function echapperHtml(valeur: string): string {
  return valeur.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
