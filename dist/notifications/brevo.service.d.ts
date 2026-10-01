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
export declare class BrevoService {
    private readonly logger;
    envoyer(params: EnvoiEmailParams): Promise<void>;
}
export {};
