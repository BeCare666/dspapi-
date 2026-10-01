var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
let IntegrationsService = class IntegrationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async verifierEtat() {
        const resultats = [];
        try {
            await this.prisma.$queryRaw `SELECT 1`;
            resultats.push({
                nom: "Base de données (TiDB)",
                statut: "verifie_ok",
                details: "Connexion vérifiée en direct (SELECT 1)",
            });
        }
        catch (erreur) {
            resultats.push({
                nom: "Base de données (TiDB)",
                statut: "verifie_erreur",
                details: erreur instanceof Error ? erreur.message : "Échec de connexion",
            });
        }
        resultats.push(this.verifierConfig("Cloudinary", ["CLOUDINARY_CLOUD_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET"]));
        resultats.push(this.verifierConfig("Brevo", ["BREVO_API_KEY", "BREVO_SENDER_EMAIL"]));
        resultats.push(this.verifierConfig("KKiaPay", ["KKIAPAY_PUBLIC_KEY", "KKIAPAY_PRIVATE_KEY", "KKIAPAY_SECRET"]));
        resultats.push({
            nom: "Redis / BullMQ",
            statut: "non_configure",
            details: "Non configuré : aucune variable d'environnement ni aucun package installé.",
        });
        return resultats;
    }
    verifierConfig(nom, variables) {
        const manquantes = variables.filter((v) => !process.env[v]);
        if (manquantes.length > 0) {
            return { nom, statut: "non_configure", details: `Variable(s) manquante(s) : ${manquantes.join(", ")}` };
        }
        return { nom, statut: "configure", details: "Configuration présente (vérification de présence uniquement)" };
    }
};
IntegrationsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], IntegrationsService);
export { IntegrationsService };
//# sourceMappingURL=integrations.service.js.map