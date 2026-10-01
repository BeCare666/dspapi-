import { Injectable, NotFoundException } from "@nestjs/common";
import PDFDocument from "pdfkit";
import { PrismaService } from "../prisma/prisma.service.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
import type { Prisma } from "../generated/prisma/client.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

const LIBELLES_MODULE: Record<string, string> = { NEWS: "Score NEWS", EI: "Événements indésirables" };
const LIBELLES_FORMULE: Record<string, string> = { INDIVIDUEL: "individuelle", GROUPE_5: "groupe de 5", GROUPE_10: "groupe de 10" };

const INCLUSION = {
  reservation: {
    select: {
      id: true,
      formule: true,
      organisationId: true,
      utilisateurId: true,
      kkiapayTransactionId: true,
      formation: { select: { titre: true } },
      utilisateur: { select: { nom: true, prenom: true, email: true } },
      organisation: { select: { nom: true, ifu: true } },
    },
  },
  paiementAbonnement: {
    select: {
      id: true,
      module: true,
      dureeJours: true,
      organisationId: true,
      kkiapayTransactionId: true,
      organisation: { select: { nom: true, ifu: true } },
    },
  },
} as const satisfies Prisma.FactureInclude;

type FactureDetaillee = Prisma.FactureGetPayload<{ include: typeof INCLUSION }>;

// §11.1 — chaque paiement (abonnement NEWS/EI ou réservation de formation)
// génère automatiquement une facture, téléchargeable par son titulaire ;
// l'historique des transactions reste consultable à tout moment.
@Injectable()
export class FacturesService {
  constructor(private readonly prisma: PrismaService) {}

  // Appelée dans la transaction qui confirme le paiement.
  async creerDansTransaction(
    tx: Prisma.TransactionClient,
    donnees: { reservationId?: string; paiementAbonnementId?: string; montant: number; devise: string },
  ) {
    const annee = new Date().getFullYear();
    const total = await tx.facture.count();
    return tx.facture.create({
      data: {
        numero: `FAC-${annee}-${String(total + 1).padStart(6, "0")}`,
        montant: donnees.montant,
        devise: donnees.devise,
        reservationId: donnees.reservationId,
        paiementAbonnementId: donnees.paiementAbonnementId,
      },
    });
  }

  // Historique des factures du compte : celles de l'établissement (comptes
  // Organisation) ou de l'utilisateur (comptes Individuels) ; tout pour l'admin.
  async lister(user: JwtAccessPayload) {
    return this.prisma.facture.findMany({
      where: this.filtreProprietaire(user),
      include: INCLUSION,
      orderBy: { emiseLe: "desc" },
    });
  }

  async obtenir(id: string, user: JwtAccessPayload): Promise<FactureDetaillee> {
    const facture = await this.prisma.facture.findFirst({ where: { id, ...this.filtreProprietaire(user) }, include: INCLUSION });
    if (!facture) throw new NotFoundException("Facture introuvable");
    return facture;
  }

  async pdf(id: string, user: JwtAccessPayload): Promise<{ numero: string; contenu: Buffer }> {
    const facture = await this.obtenir(id, user);
    return { numero: facture.numero, contenu: await this.composer(facture) };
  }

  private filtreProprietaire(user: JwtAccessPayload): Prisma.FactureWhereInput {
    if (user.roles.includes(RoleUtilisateur.ADMIN_PLATEFORME)) return {};
    if (user.organisationId) {
      return {
        OR: [
          { reservation: { organisationId: user.organisationId } },
          { paiementAbonnement: { organisationId: user.organisationId } },
        ],
      };
    }
    return { reservation: { utilisateurId: user.sub } };
  }

  private composer(f: FactureDetaillee): Promise<Buffer> {
    return new Promise((resoudre, rejeter) => {
      const doc = new PDFDocument({ size: "A4", margin: 50, info: { Title: `Facture ${f.numero}` } });
      const morceaux: Buffer[] = [];
      doc.on("data", (m: Buffer) => morceaux.push(m));
      doc.on("end", () => resoudre(Buffer.concat(morceaux)));
      doc.on("error", rejeter);

      const montant = `${f.montant.toLocaleString("fr-FR")} ${f.devise}`;
      const client = f.reservation?.organisation ?? f.paiementAbonnement?.organisation ?? null;
      const designation = f.reservation
        ? `Formation « ${f.reservation.formation.titre} » — formule ${LIBELLES_FORMULE[f.reservation.formule] ?? f.reservation.formule}`
        : f.paiementAbonnement
          ? `Abonnement au module ${LIBELLES_MODULE[f.paiementAbonnement.module] ?? f.paiementAbonnement.module} — ${f.paiementAbonnement.dureeJours} jours`
          : "—";
      const transaction = f.reservation?.kkiapayTransactionId ?? f.paiementAbonnement?.kkiapayTransactionId ?? "—";

      doc.fillColor("#1657CC").font("Helvetica-Bold").fontSize(18).text("DSP · Dispositif de Sécurité des Patients");
      doc.moveDown(1.5).fillColor("black").fontSize(16).text(`Facture ${f.numero}`);
      doc.font("Helvetica").fontSize(10).text(`Émise le ${f.emiseLe.toLocaleDateString("fr-FR")}`);
      doc.moveDown(1).font("Helvetica-Bold").text("Client");
      doc.font("Helvetica");
      if (client) {
        doc.text(client.nom);
        doc.text(`IFU : ${client.ifu}`);
      } else if (f.reservation) {
        doc.text(`${f.reservation.utilisateur.prenom} ${f.reservation.utilisateur.nom}`);
        doc.text(f.reservation.utilisateur.email);
      }
      doc.moveDown(1).font("Helvetica-Bold").text("Désignation");
      doc.font("Helvetica").text(designation);
      doc.moveDown(1).font("Helvetica-Bold").fontSize(12).text(`Montant payé : ${montant}`);
      doc.font("Helvetica").fontSize(10).text(`Paiement en ligne via KKiaPay — transaction ${transaction}`);
      doc.end();
    });
  }
}
