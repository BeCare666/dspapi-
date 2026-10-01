import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";

// D8 — un paramètre ne peut être modifié que s'il est déjà connu (créé au
// seed, voir prisma/seed.ts) : on n'autorise jamais la création d'une clé
// arbitraire depuis l'API — conforme à "ne pas inventer une liste de
// réglages génériques", seuls les paramètres validés existent.
function validerSeuilNews(cle: string) {
  return (valeur: string) => {
    const n = Number(valeur);
    if (!Number.isInteger(n) || n < 1 || n > 20) {
      throw new BadRequestException(`${cle} doit être un entier entre 1 et 20 (score NEWS total)`);
    }
  };
}

function validerTexteFrequence(cle: string) {
  return (valeur: string) => {
    if (valeur.trim().length < 3 || valeur.length > 191) {
      throw new BadRequestException(`${cle} doit contenir entre 3 et 191 caractères`);
    }
  };
}

function validerEntierPositifOuNul(cle: string, max: number) {
  return (valeur: string) => {
    const n = Number(valeur);
    if (!Number.isInteger(n) || n < 0 || n > max) {
      throw new BadRequestException(`${cle} doit être un entier entre 0 et ${max} (0 = non paramétré)`);
    }
  };
}

const VALIDATEURS: Record<string, (valeur: string) => void> = {
  // §10.5 — paramètres tarifaires (0 = abonnement non encore proposé).
  prix_abonnement_news: validerEntierPositifOuNul("prix_abonnement_news", 100_000_000),
  prix_abonnement_ei: validerEntierPositifOuNul("prix_abonnement_ei", 100_000_000),
  duree_abonnement_jours: validerEntierPositifOuNul("duree_abonnement_jours", 3650),
  // §11.2 — délais des rappels automatiques (en jours).
  delai_rappel_essai_jours: validerEntierPositifOuNul("delai_rappel_essai_jours", 90),
  delai_rappel_formation_jours: validerEntierPositifOuNul("delai_rappel_formation_jours", 30),
  comportement_fin_essai: (valeur) => {
    if (valeur !== "LECTURE_SEULE" && valeur !== "BLOCAGE") {
      throw new BadRequestException("comportement_fin_essai doit valoir LECTURE_SEULE ou BLOCAGE");
    }
  },
  // §12.3 — seuils de niveau de risque NEWS et fréquences de surveillance.
  news_seuil_moyen: validerSeuilNews("news_seuil_moyen"),
  news_seuil_eleve: validerSeuilNews("news_seuil_eleve"),
  news_frequence_bas: validerTexteFrequence("news_frequence_bas"),
  news_frequence_moyen: validerTexteFrequence("news_frequence_moyen"),
  news_frequence_eleve: validerTexteFrequence("news_frequence_eleve"),
  duree_essai_module_jours: (valeur) => {
    const n = Number(valeur);
    if (!Number.isInteger(n) || n < 1 || n > 3650) {
      throw new BadRequestException("duree_essai_module_jours doit être un entier entre 1 et 3650 (jours)");
    }
  },
};

@Injectable()
export class ParametresService {
  constructor(private readonly prisma: PrismaService) {}

  async listerTous() {
    return this.prisma.parametrePlateforme.findMany({ orderBy: { cle: "asc" } });
  }

  // Utilisé par les autres services métier (ex. AbonnementsService) — repli
  // sur `defaut` si la ligne n'existe pas encore (ne doit normalement pas
  // arriver une fois le seed exécuté, mais évite un crash si absent).
  async obtenirValeurEntiere(cle: string, defaut: number): Promise<number> {
    const parametre = await this.prisma.parametrePlateforme.findUnique({ where: { cle } });
    if (!parametre) return defaut;
    const n = Number(parametre.valeur);
    return Number.isFinite(n) ? n : defaut;
  }

  // Le seuil « moyen » doit rester strictement inférieur au seuil « élevé ».
  private async verifierCoherenceSeuilsNews(cle: string, valeur: string) {
    if (cle !== "news_seuil_moyen" && cle !== "news_seuil_eleve") return;
    const autreCle = cle === "news_seuil_moyen" ? "news_seuil_eleve" : "news_seuil_moyen";
    const autre = await this.prisma.parametrePlateforme.findUnique({ where: { cle: autreCle } });
    if (!autre) return;
    const [moyen, eleve] = cle === "news_seuil_moyen" ? [Number(valeur), Number(autre.valeur)] : [Number(autre.valeur), Number(valeur)];
    if (moyen >= eleve) {
      throw new BadRequestException("Le seuil de risque moyen doit être strictement inférieur au seuil de risque élevé");
    }
  }

  async modifier(cle: string, valeur: string, acteurId: string) {
    const existant = await this.prisma.parametrePlateforme.findUnique({ where: { cle } });
    if (!existant) {
      throw new NotFoundException(`Paramètre inconnu : ${cle}`);
    }

    const validateur = VALIDATEURS[cle];
    if (validateur) validateur(valeur);
    await this.verifierCoherenceSeuilsNews(cle, valeur);

    const misAJour = await this.prisma.parametrePlateforme.update({ where: { cle }, data: { valeur } });

    await this.prisma.journalAudit.create({
      data: {
        organisationId: null,
        utilisateurId: acteurId,
        action: "parametre.modifier",
        entite: "ParametrePlateforme",
        entiteId: cle,
        donneesAvant: { valeur: existant.valeur },
        donneesApres: { valeur: misAJour.valeur },
      },
    });

    return misAJour;
  }
}
