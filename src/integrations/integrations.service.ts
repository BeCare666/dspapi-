import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";

export type StatutIntegration = "verifie_ok" | "verifie_erreur" | "configure" | "non_configure";

export interface EtatIntegration {
  nom: string;
  statut: StatutIntegration;
  details: string;
}

// D10 — health checks réels, pas de faux monitoring (rule 16). TiDB est
// vérifié en direct (requête réelle) ; Cloudinary/Brevo/KKiaPay sont vérifiés
// par présence de configuration seulement (pas d'appel réseau vers un
// prestataire externe déclenché par une simple consultation du dashboard) —
// distingué honnêtement dans le statut ("configure" ≠ "verifie_ok").
@Injectable()
export class IntegrationsService {
  constructor(private readonly prisma: PrismaService) {}

  async verifierEtat(): Promise<EtatIntegration[]> {
    const resultats: EtatIntegration[] = [];

    try {
      await this.prisma.$queryRaw`SELECT 1`;
      resultats.push({
        nom: "Base de données (TiDB)",
        statut: "verifie_ok",
        details: "Connexion vérifiée en direct (SELECT 1)",
      });
    } catch (erreur) {
      resultats.push({
        nom: "Base de données (TiDB)",
        statut: "verifie_erreur",
        details: erreur instanceof Error ? erreur.message : "Échec de connexion",
      });
    }

    resultats.push(
      this.verifierConfig("Cloudinary", ["CLOUDINARY_CLOUD_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET"]),
    );
    resultats.push(this.verifierConfig("Brevo", ["BREVO_API_KEY", "BREVO_SENDER_EMAIL"]));
    resultats.push(this.verifierConfig("KKiaPay", ["KKIAPAY_PUBLIC_KEY", "KKIAPAY_PRIVATE_KEY", "KKIAPAY_SECRET"]));

    resultats.push({
      nom: "Redis / BullMQ",
      statut: "non_configure",
      details: "Non configuré : aucune variable d'environnement ni aucun package installé.",
    });

    return resultats;
  }

  private verifierConfig(nom: string, variables: string[]): EtatIntegration {
    const manquantes = variables.filter((v) => !process.env[v]);
    if (manquantes.length > 0) {
      return { nom, statut: "non_configure", details: `Variable(s) manquante(s) : ${manquantes.join(", ")}` };
    }
    return { nom, statut: "configure", details: "Configuration présente (vérification de présence uniquement)" };
  }
}
