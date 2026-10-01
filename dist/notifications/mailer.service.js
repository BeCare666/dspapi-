var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MailerService_1;
import { Injectable, Logger } from "@nestjs/common";
import { BrevoService } from "./brevo.service.js";
import { rendreEmailVerification } from "./templates/email-verification.template.js";
let MailerService = MailerService_1 = class MailerService {
    brevo;
    logger = new Logger(MailerService_1.name);
    constructor(brevo) {
        this.brevo = brevo;
    }
    async sendVerificationEmail(email, prenom, lienVerification) {
        await this.envoyerSansEchouer({
            destinataire: { email, name: prenom },
            sujet: "Confirmez votre adresse email · dps.bj",
            contenuHtml: rendreEmailVerification({ prenom, lienVerification }),
            contenuTexte: `Bienvenue ${prenom},\n\nConfirmez votre adresse email pour activer votre compte dps.bj :\n${lienVerification}\n\nCe lien expire dans 48 heures.`,
        });
    }
    async sendPasswordResetEmail(email, resetToken) {
        const lien = `${process.env.WEB_APP_URL}/reinitialiser-mot-de-passe?token=${resetToken}`;
        await this.envoyerSansEchouer({
            destinataire: { email },
            sujet: "Réinitialisation de votre mot de passe · dps.bj",
            contenuHtml: `<p>Vous avez demandé la réinitialisation de votre mot de passe.</p><p><a href="${lien}">Choisir un nouveau mot de passe</a></p><p>Ce lien expire dans 1 heure. Si vous n'êtes pas à l'origine de cette demande, ignorez cet email.</p>`,
        });
    }
    async sendAlerteNewsEmail(email, patientNomComplet, niveauRisque) {
        await this.envoyerSansEchouer({
            destinataire: { email },
            sujet: `Alerte NEWS ${niveauRisque} : ${patientNomComplet}`,
            contenuHtml: `<p>Une mesure NEWS de niveau <strong>${niveauRisque}</strong> a été enregistrée pour le patient <strong>${patientNomComplet}</strong>.</p><p>Merci de consulter le dossier patient sur dps.bj.</p>`,
        });
    }
    async sendAlerteEiGraviteElevee(email, evenementId) {
        await this.envoyerSansEchouer({
            destinataire: { email },
            sujet: "Événement indésirable de gravité élevée",
            contenuHtml: `<p>Un événement indésirable de gravité <strong>élevée</strong> a été qualifié (référence <code>${evenementId}</code>).</p><p>Merci de le traiter en priorité sur dps.bj.</p>`,
        });
    }
    async sendNotificationGenerique(email, message) {
        await this.envoyerSansEchouer({
            destinataire: { email },
            sujet: "Notification dps.bj",
            contenuHtml: `<p>${message}</p>`,
        });
    }
    async envoyerSansEchouer(params) {
        try {
            await this.brevo.envoyer(params);
        }
        catch (erreur) {
            this.logger.error(`Échec d'envoi email "${params.sujet}" à ${params.destinataire.email} : ${erreur}`);
        }
    }
};
MailerService = MailerService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [BrevoService])
], MailerService);
export { MailerService };
//# sourceMappingURL=mailer.service.js.map