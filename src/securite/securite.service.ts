import { Injectable } from "@nestjs/common";

// D9 — informations de sécurité réellement disponibles, en lecture seule.
// Les limites de rate limiting listées ici sont recopiées depuis les
// décorateurs @Throttle() réels d'AuthController (pas une valeur inventée à
// part) — à maintenir synchronisé si ces décorateurs changent.
export interface EtatSecurite {
  session: {
    jwtAccessTtl: string;
    jwtRefreshTtl: string;
  };
  rateLimiting: Array<{ endpoint: string; limite: string; fenetre: string; justification: string }>;
}

@Injectable()
export class SecuriteService {
  obtenirEtat(): EtatSecurite {
    return {
      session: {
        jwtAccessTtl: process.env.JWT_ACCESS_TTL ?? "15m",
        jwtRefreshTtl: process.env.JWT_REFRESH_TTL ?? "30d",
      },
      rateLimiting: [
        { endpoint: "POST /auth/login", limite: "5 req", fenetre: "60 s / IP", justification: "Protection brute-force sur le mot de passe" },
        { endpoint: "POST /auth/forgot-password", limite: "3 req", fenetre: "60 s / IP", justification: "Limite l'email-bombing d'une adresse cible" },
        { endpoint: "POST /auth/reset-password", limite: "5 req", fenetre: "60 s / IP", justification: "Protection contre le devinage de token" },
        { endpoint: "POST /auth/resend-verification", limite: "3 req", fenetre: "60 s / IP", justification: "Limite l'email-bombing d'une adresse cible" },
        { endpoint: "POST /auth/register/organisation", limite: "5 req", fenetre: "60 s / IP", justification: "Abus de création de compte" },
        { endpoint: "POST /auth/register/individuel", limite: "5 req", fenetre: "60 s / IP", justification: "Abus de création de compte" },
      ],
    };
  }
}
