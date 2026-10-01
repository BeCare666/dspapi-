import { BrevoService } from "./brevo.service.js";
export declare class MailerService {
    private readonly brevo;
    private readonly logger;
    constructor(brevo: BrevoService);
    sendVerificationEmail(email: string, prenom: string, lienVerification: string): Promise<void>;
    sendPasswordResetEmail(email: string, resetToken: string): Promise<void>;
    sendAlerteNewsEmail(email: string, patientNomComplet: string, niveauRisque: string): Promise<void>;
    sendAlerteEiGraviteElevee(email: string, evenementId: string): Promise<void>;
    sendNotificationGenerique(email: string, message: string): Promise<void>;
    private envoyerSansEchouer;
}
