var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BrevoService_1;
import { Injectable, Logger } from "@nestjs/common";
const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";
let BrevoService = BrevoService_1 = class BrevoService {
    logger = new Logger(BrevoService_1.name);
    async envoyer(params) {
        const apiKey = process.env.BREVO_API_KEY;
        const senderEmail = process.env.BREVO_SENDER_EMAIL;
        if (!apiKey || !senderEmail) {
            this.logger.warn(`BREVO_API_KEY/BREVO_SENDER_EMAIL manquant — email "${params.sujet}" pour ${params.destinataire.email} non envoyé`);
            return;
        }
        const reponse = await fetch(BREVO_ENDPOINT, {
            method: "POST",
            headers: {
                "api-key": apiKey,
                "Content-Type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify({
                sender: { email: senderEmail, name: process.env.BREVO_SENDER_NAME ?? "dps.bj" },
                to: [{ email: params.destinataire.email, name: params.destinataire.name }],
                subject: params.sujet,
                htmlContent: params.contenuHtml,
                textContent: params.contenuTexte,
            }),
        });
        if (!reponse.ok) {
            const corps = await reponse.text();
            throw new Error(`Échec envoi Brevo (${reponse.status}) : ${corps}`);
        }
        this.logger.log(`Email "${params.sujet}" envoyé à ${params.destinataire.email}`);
    }
};
BrevoService = BrevoService_1 = __decorate([
    Injectable()
], BrevoService);
export { BrevoService };
//# sourceMappingURL=brevo.service.js.map