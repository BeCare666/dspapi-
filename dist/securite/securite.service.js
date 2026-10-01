var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@nestjs/common";
let SecuriteService = class SecuriteService {
    obtenirEtat() {
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
};
SecuriteService = __decorate([
    Injectable()
], SecuriteService);
export { SecuriteService };
//# sourceMappingURL=securite.service.js.map