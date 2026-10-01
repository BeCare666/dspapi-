export interface EtatSecurite {
    session: {
        jwtAccessTtl: string;
        jwtRefreshTtl: string;
    };
    rateLimiting: Array<{
        endpoint: string;
        limite: string;
        fenetre: string;
        justification: string;
    }>;
}
export declare class SecuriteService {
    obtenirEtat(): EtatSecurite;
}
