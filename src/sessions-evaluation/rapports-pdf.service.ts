import { Injectable, Logger } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import PDFDocument from "pdfkit";
import { PrismaService } from "../prisma/prisma.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { NotificationsInternesService } from "../notifications-internes/notifications-internes.service.js";
import { grilleStructureInclude } from "../grilles/grilles.service.js";
import { RoleUtilisateur, StatutRapportPdf, StatutSessionEvaluation } from "../generated/prisma/enums.js";
import { calculerScore, type ResultatScore } from "./scoring.util.js";
import { SessionsEvaluationService } from "./sessions-evaluation.service.js";

const TENTATIVES_MAX = 3;
const LOT_PAR_PASSAGE = 3;

const BLEU = "#1657CC";
const GRIS = "#5B6472";

// §6.4 / §6.6 — génération asynchrone du rapport de synthèse. La table
// `rapports_pdf` sert de file d'attente : chaque ligne EN_COURS est traitée
// par cette tâche périodique (pas de dépendance à un serveur Redis), puis
// passe DISPONIBLE (PDF stocké en base) ou ECHEC après 3 tentatives.
@Injectable()
export class RapportsPdfService {
  private readonly logger = new Logger(RapportsPdfService.name);
  private enCours = false;

  constructor(
    private readonly prisma: PrismaService,
    private readonly sessions: SessionsEvaluationService,
    private readonly mailer: MailerService,
    private readonly notifications: NotificationsInternesService,
  ) {}

  @Interval(30_000)
  async traiterFile(): Promise<number> {
    if (this.enCours) return 0;
    this.enCours = true;
    try {
      const enAttente = await this.prisma.rapportPdf.findMany({
        where: { statut: StatutRapportPdf.EN_COURS, tentatives: { lt: TENTATIVES_MAX } },
        orderBy: { createdAt: "asc" },
        take: LOT_PAR_PASSAGE,
        select: { id: true, sessionId: true, tentatives: true },
      });
      for (const rapport of enAttente) {
        await this.traiter(rapport);
      }
      return enAttente.length;
    } finally {
      this.enCours = false;
    }
  }

  private async traiter(rapport: { id: string; sessionId: string; tentatives: number }): Promise<void> {
    try {
      const { contenu, session } = await this.generer(rapport.sessionId);
      await this.prisma.rapportPdf.update({
        where: { id: rapport.id },
        data: { statut: StatutRapportPdf.DISPONIBLE, contenu, genereLe: new Date(), erreur: null, tentatives: rapport.tentatives + 1 },
      });
      await this.notifierDisponibilite(session.organisationId, session.id, session.grille.nom);
    } catch (erreur) {
      const tentatives = rapport.tentatives + 1;
      this.logger.error(`Échec de génération du rapport ${rapport.id} (tentative ${tentatives}) : ${erreur}`);
      await this.prisma.rapportPdf.update({
        where: { id: rapport.id },
        data: {
          tentatives,
          erreur: String(erreur).slice(0, 2000),
          statut: tentatives >= TENTATIVES_MAX ? StatutRapportPdf.ECHEC : StatutRapportPdf.EN_COURS,
        },
      });
    }
  }

  // Le contenu est recalculé côté serveur depuis les réponses figées (§6.6).
  async generer(sessionId: string) {
    const session = await this.prisma.sessionEvaluation.findUniqueOrThrow({
      where: { id: sessionId },
      include: { grille: { include: grilleStructureInclude }, reponses: true, organisation: true },
    });
    if (session.statut !== StatutSessionEvaluation.SOUMISE) {
      throw new Error("Session non soumise");
    }
    const score = calculerScore(session.grille, new Map(session.reponses.map((r) => [r.elementMesurableId, r.valeur])));
    const [eiLies, historique] = await Promise.all([
      this.sessions.eiLiesAuxCriteres(session.organisationId, score.criteresNonValides.map((c) => c.critereId)),
      this.prisma.sessionEvaluation.findMany({
        where: { organisationId: session.organisationId, statut: StatutSessionEvaluation.SOUMISE, grille: { nom: session.grille.nom } },
        select: { dateSoumission: true, scoreGlobal: true },
        orderBy: { dateSoumission: "asc" },
      }),
    ]);

    const contenu = await this.composerPdf({
      organisation: session.organisation.nom,
      grille: `${session.grille.nom} (version ${session.grille.version})`,
      dateSoumission: session.dateSoumission ?? new Date(),
      score,
      eiLies,
      historique,
    });
    return { contenu, session };
  }

  private composerPdf(donnees: {
    organisation: string;
    grille: string;
    dateSoumission: Date;
    score: ResultatScore;
    eiLies: Awaited<ReturnType<SessionsEvaluationService["eiLiesAuxCriteres"]>>;
    historique: { dateSoumission: Date | null; scoreGlobal: number | null }[];
  }): Promise<Uint8Array<ArrayBuffer>> {
    return new Promise((resoudre, rejeter) => {
      const doc = new PDFDocument({ size: "A4", margin: 50, info: { Title: "Rapport d'auto-évaluation — DSP" } });
      const morceaux: Buffer[] = [];
      doc.on("data", (m: Buffer) => morceaux.push(m));
      doc.on("end", () => resoudre(new Uint8Array(Buffer.concat(morceaux))));
      doc.on("error", rejeter);

      const date = (d: Date) => d.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
      const titre = (texte: string) => {
        doc.moveDown(1).fillColor(BLEU).font("Helvetica-Bold").fontSize(13).text(texte).moveDown(0.4);
        doc.fillColor("black").font("Helvetica").fontSize(10);
      };

      // En-tête
      doc.fillColor(BLEU).font("Helvetica-Bold").fontSize(18).text("DSP · Dispositif de Sécurité des Patients");
      doc.fillColor(GRIS).font("Helvetica").fontSize(10).text("Rapport de synthèse d'auto-évaluation documentaire");
      doc.moveDown(1).fillColor("black").fontSize(11);
      doc.text(`Établissement : ${donnees.organisation}`);
      doc.text(`Grille : ${donnees.grille}`);
      doc.text(`Évaluation soumise le ${date(donnees.dateSoumission)}`);

      titre("Score de conformité");
      doc.font("Helvetica-Bold").fontSize(22).fillColor(BLEU).text(`${donnees.score.scoreGlobal} %`);
      doc.font("Helvetica").fontSize(10).fillColor("black").text("Pourcentage de critères validés sur le total des critères de la grille.");

      titre("Score par domaine");
      for (const d of donnees.score.parDomaine) {
        doc.text(`${d.nom} : ${d.scorePct} % (${d.criteresValides}/${d.criteresTotal} critères validés)`);
      }

      titre(`Critères non validés (${donnees.score.criteresNonValides.length})`);
      if (donnees.score.criteresNonValides.length === 0) {
        doc.text("Tous les critères sont validés.");
      }
      for (const c of donnees.score.criteresNonValides) {
        doc.moveDown(0.4).font("Helvetica-Bold").text(`${c.code} — ${c.libelle}`, { continued: false });
        doc.font("Helvetica").fillColor(GRIS).text(`Domaine : ${c.domaineNom}`).fillColor("black");
        if (c.documentsNonValides.length > 0) {
          doc.text("Documents non validés :");
          for (const e of c.documentsNonValides) {
            doc.text(`  • ${e.libelle}${e.reponse === "SANS_REPONSE" ? " (sans réponse)" : ""}`);
          }
        } else {
          doc.text("Aucun document à examiner n'est défini pour ce critère.");
        }
        if (c.recommandation) doc.text(`Recommandation : ${c.recommandation}`);
        const exemples = donnees.eiLies.filter((ei) => ei.critereId === c.critereId);
        if (exemples.length > 0) {
          doc.text(`Événements indésirables liés (${exemples.length}) :`);
          for (const ei of exemples.slice(0, 5)) {
            doc.text(`  • ${date(ei.dateSurvenue)} — ${ei.description.slice(0, 160)}`);
          }
        }
      }

      if (donnees.historique.length > 1) {
        titre("Évolution (évaluations soumises sur cette grille)");
        for (const h of donnees.historique) {
          doc.text(`${h.dateSoumission ? date(h.dateSoumission) : "—"} : ${h.scoreGlobal ?? "—"} %`);
        }
      }

      doc.moveDown(2).fillColor(GRIS).fontSize(8).text(
        "Ce score est une auto-évaluation documentaire et déclarative. Il ne remplace pas une inspection officielle de " +
          "l'Autorité de Régulation du Secteur de la Santé (ARS).",
      );
      doc.end();
    });
  }

  // §11.2 — disponibilité d'un rapport PDF : email + notification in-app aux
  // responsables de l'établissement (responsable du compte, responsable qualité).
  private async notifierDisponibilite(organisationId: string, sessionId: string, grilleNom: string) {
    const destinataires = await this.prisma.utilisateur.findMany({
      where: {
        organisationId,
        actif: true,
        roles: { some: { role: { in: [RoleUtilisateur.RESPONSABLE_COMPTE, RoleUtilisateur.RESP_QUALITE] } } },
      },
      select: { id: true, email: true },
    });
    const lienUrl = `/auto-evaluation/${sessionId}/resultats`;
    await Promise.all(
      destinataires.map(async (d) => {
        await this.mailer.sendRapportDisponible(d.email, grilleNom, `${process.env.WEB_APP_URL}${lienUrl}`);
        await this.notifications.creerPour([d.id], {
          type: "RAPPORT_AUTO_EVALUATION",
          titre: "Rapport d'auto-évaluation disponible",
          message: grilleNom,
          lienUrl,
        });
      }),
    );
  }
}
