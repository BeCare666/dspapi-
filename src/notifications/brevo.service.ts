import { Injectable, Logger } from "@nestjs/common";

interface DestinataireEmail {
  email: string;
  name?: string;
}

export interface EnvoiEmailParams {
  destinataire: DestinataireEmail;
  sujet: string;
  contenuHtml: string;
  contenuTexte?: string;
}

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

// 11.2 — intégration Brevo réelle (API transactionnelle v3), pas un stub.
@Injectable()
export class BrevoService {
  private readonly logger = new Logger(BrevoService.name);

  async envoyer(params: EnvoiEmailParams): Promise<void> {
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;

    if (!apiKey || !senderEmail) {
      this.logger.warn(
        `BREVO_API_KEY/BREVO_SENDER_EMAIL manquant — email "${params.sujet}" pour ${params.destinataire.email} non envoyé`,
      );
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
        sender: { email: senderEmail, name: process.env.BREVO_SENDER_NAME ?? "DSP" },
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
}
