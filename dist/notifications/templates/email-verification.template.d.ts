export interface DonneesEmailVerification {
    prenom: string;
    lienVerification: string;
}
export declare function rendreEmailVerification({ prenom, lienVerification }: DonneesEmailVerification): string;
