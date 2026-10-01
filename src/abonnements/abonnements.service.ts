import { BadRequestException, ConflictException, ForbiddenException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { ParametresService } from "../parametres/parametres.service.js";
import { KkiapayService } from "../paiements/kkiapay.service.js";
import { FacturesService } from "../factures/factures.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { NotificationsInternesService } from "../notifications-internes/notifications-internes.service.js";
import { ModuleMetier, RoleUtilisateur, StatutAbonnement, StatutPaiementAbonnement } from "../generated/prisma/enums.js";
import type { AbonnementModule, PaiementAbonnement, Prisma } from "../generated/prisma/client.js";

// RM6 — essai gratuit paramétrable, 90 jours par défaut (valeur de repli si
// aucun paramétrage n'existe encore en base, §10.5).
const DEFAUT_DUREE_ESSAI_JOURS = Number(process.env.DUREE_ESSAI_MODULE_JOURS ?? 90);
const JOUR_MS = 86_400_000;

export type ModeAcces = "lecture" | "ecriture";
export type ComportementFinEssai = "LECTURE_SEULE" | "BLOCAGE";

// §10.5 — clés des paramètres tarifaires gérés depuis /admin/parametres.
export const CLES_TARIFS = {
  [ModuleMetier.NEWS]: "prix_abonnement_news",
  [ModuleMetier.EI]: "prix_abonnement_ei",
} as const;
export const CLE_DUREE_ABONNEMENT = "duree_abonnement_jours";
export const CLE_COMPORTEMENT_FIN_ESSAI = "comportement_fin_essai";

const LIBELLES_MODULE: Record<ModuleMetier, string> = {
  [ModuleMetier.NEWS]: "Score NEWS",
  [ModuleMetier.EI]: "Événements indésirables",
};

@Injectable()
export class AbonnementsService {
  private readonly logger = new Logger(AbonnementsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly parametres: ParametresService,
    private readonly kkiapay: KkiapayService,
    private readonly factures: FacturesService,
    private readonly mailer: MailerService,
    private readonly notifications: NotificationsInternesService,
  ) {}

  // §5 — l'essai est provisionné à la première utilisation (écriture) du
  // module. Fin d'essai ou d'abonnement : statut EXPIRE. Selon le paramètre
  // `comportement_fin_essai`, un module expiré reste consultable (LECTURE_SEULE)
  // ou est entièrement bloqué (BLOCAGE). Un abonnement SUSPENDU par l'admin
  // est toujours entièrement bloqué.
  async verifierAcces(organisationId: string, module: ModuleMetier, mode: ModeAcces = "ecriture"): Promise<AbonnementModule | null> {
    let abonnement = await this.prisma.abonnementModule.findUnique({
      where: { organisationId_module: { organisationId, module } },
    });

    if (!abonnement) {
      if (mode === "lecture") return null;
      const dureeEssaiJours = await this.parametres.obtenirValeurEntiere("duree_essai_module_jours", DEFAUT_DUREE_ESSAI_JOURS);
      const maintenant = new Date();
      abonnement = await this.prisma.abonnementModule.create({
        data: {
          organisationId,
          module,
          statut: StatutAbonnement.ESSAI,
          essaiDebut: maintenant,
          essaiFin: new Date(maintenant.getTime() + dureeEssaiJours * JOUR_MS),
        },
      });
    }

    abonnement = await this.actualiserExpiration(abonnement);

    if (abonnement.statut === StatutAbonnement.SUSPENDU) {
      throw new ForbiddenException(`Accès au module ${LIBELLES_MODULE[module]} suspendu. Contactez l'équipe DSP.`);
    }
    if (abonnement.statut === StatutAbonnement.EXPIRE) {
      const comportement = await this.comportementFinEssai();
      if (mode === "ecriture" || comportement === "BLOCAGE") {
        throw new ForbiddenException(
          `Accès au module ${LIBELLES_MODULE[module]} expiré. Un abonnement est nécessaire pour continuer.`,
        );
      }
    }
    return abonnement;
  }

  async obtenirStatut(organisationId: string, module: ModuleMetier) {
    const abonnement = await this.prisma.abonnementModule.findUnique({
      where: { organisationId_module: { organisationId, module } },
    });
    return abonnement ? this.actualiserExpiration(abonnement) : null;
  }

  // §10.5 — offre en vigueur (prix, durée, devise, comportement en fin d'essai).
  // Un prix ou une durée à 0 signifie « non encore paramétré par l'admin » :
  // la souscription est alors indisponible (aucune valeur inventée).
  async offre() {
    const [prixNews, prixEi, dureeJours, comportement] = await Promise.all([
      this.parametres.obtenirValeurEntiere(CLES_TARIFS.NEWS, 0),
      this.parametres.obtenirValeurEntiere(CLES_TARIFS.EI, 0),
      this.parametres.obtenirValeurEntiere(CLE_DUREE_ABONNEMENT, 0),
      this.comportementFinEssai(),
    ]);
    return {
      devise: process.env.DEVISE_PAR_DEFAUT ?? "XOF",
      dureeJours: dureeJours,
      comportementFinEssai: comportement,
      modules: {
        [ModuleMetier.NEWS]: { prix: prixNews, disponible: prixNews > 0 && dureeJours > 0 },
        [ModuleMetier.EI]: { prix: prixEi, disponible: prixEi > 0 && dureeJours > 0 },
      },
    };
  }

  // §5 / §10.4 — souscription : le tarif et la durée en vigueur sont figés sur
  // la demande de paiement (comme RM5 pour les réservations).
  async souscrire(organisationId: string, module: ModuleMetier, demandeParId: string) {
    const offre = await this.offre();
    const tarif = offre.modules[module];
    if (!tarif.disponible) {
      throw new BadRequestException("L'abonnement à ce module n'est pas encore proposé (tarif non paramétré)");
    }
    const abonnement = await this.obtenirStatut(organisationId, module);
    if (abonnement?.statut === StatutAbonnement.SUSPENDU) {
      throw new ForbiddenException("Accès à ce module suspendu. Contactez l'équipe DSP.");
    }
    return this.prisma.paiementAbonnement.create({
      data: {
        organisationId,
        module,
        montant: tarif.prix,
        dureeJours: offre.dureeJours,
        devise: offre.devise,
        demandeParId,
      },
    });
  }

  async listerPaiements(organisationId: string) {
    return this.prisma.paiementAbonnement.findMany({
      where: { organisationId },
      include: { facture: { select: { id: true, numero: true, montant: true, devise: true, emiseLe: true } } },
      orderBy: { createdAt: "desc" },
    });
  }

  // RM11 — vérification serveur systématique auprès de KKiaPay.
  async verifierPaiement(organisationId: string, paiementId: string, transactionId: string) {
    const paiement = await this.prisma.paiementAbonnement.findUnique({ where: { id: paiementId } });
    if (!paiement || paiement.organisationId !== organisationId) {
      throw new NotFoundException("Paiement introuvable");
    }
    if (paiement.statut === StatutPaiementAbonnement.PAYE) {
      if (paiement.kkiapayTransactionId === transactionId) return paiement;
      throw new ConflictException("Ce paiement est déjà confirmé");
    }

    let transaction;
    try {
      transaction = await this.kkiapay.verifierTransaction(transactionId);
    } catch (erreur) {
      const message = erreur instanceof Error ? erreur.message : "Transaction introuvable";
      throw new BadRequestException(`Vérification KKiaPay échouée : ${message}`);
    }
    if (transaction.status !== "SUCCESS") {
      throw new BadRequestException(`Paiement non confirmé par KKiaPay (statut : ${transaction.status})`);
    }
    if (Number(transaction.amount) !== paiement.montant) {
      throw new BadRequestException("Le montant payé ne correspond pas au tarif de l'abonnement");
    }
    return this.confirmerPaiement(paiement, transactionId);
  }

  // Point d'entrée idempotent, partagé avec le webhook KKiaPay (paiement tardif).
  async confirmerPaiement(paiement: PaiementAbonnement, transactionId: string) {
    if (paiement.statut === StatutPaiementAbonnement.PAYE) return paiement;
    const maintenant = new Date();
    const confirme = await this.prisma.$transaction(async (tx) => {
      const existant = await tx.abonnementModule.findUnique({
        where: { organisationId_module: { organisationId: paiement.organisationId, module: paiement.module } },
      });
      // Prolonge à partir de l'échéance en cours si l'abonnement est encore actif.
      const depart =
        existant?.statut === StatutAbonnement.ACTIF && existant.expireLe && existant.expireLe > maintenant
          ? existant.expireLe
          : maintenant;
      const expireLe = new Date(depart.getTime() + paiement.dureeJours * JOUR_MS);

      await tx.abonnementModule.upsert({
        where: { organisationId_module: { organisationId: paiement.organisationId, module: paiement.module } },
        update: { statut: StatutAbonnement.ACTIF, activeLe: existant?.activeLe ?? maintenant, expireLe },
        create: {
          organisationId: paiement.organisationId,
          module: paiement.module,
          statut: StatutAbonnement.ACTIF,
          essaiDebut: maintenant,
          essaiFin: maintenant,
          activeLe: maintenant,
          expireLe,
        },
      });
      const maj = await tx.paiementAbonnement.update({
        where: { id: paiement.id },
        data: { statut: StatutPaiementAbonnement.PAYE, kkiapayTransactionId: transactionId, payeLe: maintenant },
      });
      // §11.1 — facture émise automatiquement pour chaque paiement.
      await this.factures.creerDansTransaction(tx, {
        paiementAbonnementId: paiement.id,
        montant: paiement.montant,
        devise: paiement.devise,
      });
      return maj;
    });

    await this.notifierPaiementConfirme(paiement.organisationId, paiement.module);
    return confirme;
  }

  // ------------------------------------------------------------------ admin (§12.1)

  // Activation manuelle : abonnement actif pour `jours` (défaut : durée
  // d'abonnement paramétrée).
  async activerManuellement(organisationId: string, module: ModuleMetier, jours: number | undefined, acteurId: string) {
    const duree = jours ?? (await this.parametres.obtenirValeurEntiere(CLE_DUREE_ABONNEMENT, 0));
    if (!duree || duree < 1) {
      throw new BadRequestException("Indiquez une durée d'activation en jours (aucune durée d'abonnement n'est paramétrée)");
    }
    await this.verifierOrganisation(organisationId);
    const maintenant = new Date();
    const avant = await this.obtenirStatut(organisationId, module);
    const apres = await this.prisma.abonnementModule.upsert({
      where: { organisationId_module: { organisationId, module } },
      update: { statut: StatutAbonnement.ACTIF, activeLe: maintenant, expireLe: new Date(maintenant.getTime() + duree * JOUR_MS) },
      create: {
        organisationId,
        module,
        statut: StatutAbonnement.ACTIF,
        essaiDebut: maintenant,
        essaiFin: maintenant,
        activeLe: maintenant,
        expireLe: new Date(maintenant.getTime() + duree * JOUR_MS),
      },
    });
    await this.tracer(acteurId, organisationId, "abonnement.activer", module, avant, apres);
    return apres;
  }

  async suspendre(organisationId: string, module: ModuleMetier, acteurId: string) {
    const avant = await this.exigerAbonnement(organisationId, module);
    if (avant.statut === StatutAbonnement.SUSPENDU) throw new ConflictException("Abonnement déjà suspendu");
    const apres = await this.prisma.abonnementModule.update({
      where: { id: avant.id },
      data: { statut: StatutAbonnement.SUSPENDU, statutAvantSuspension: avant.statut },
    });
    await this.tracer(acteurId, organisationId, "abonnement.suspendre", module, avant, apres);
    return apres;
  }

  async reprendre(organisationId: string, module: ModuleMetier, acteurId: string) {
    const avant = await this.exigerAbonnement(organisationId, module);
    if (avant.statut !== StatutAbonnement.SUSPENDU) throw new ConflictException("Cet abonnement n'est pas suspendu");
    const repris = await this.prisma.abonnementModule.update({
      where: { id: avant.id },
      data: { statut: avant.statutAvantSuspension ?? StatutAbonnement.EXPIRE, statutAvantSuspension: null },
    });
    const apres = await this.actualiserExpiration(repris);
    await this.tracer(acteurId, organisationId, "abonnement.reprendre", module, avant, apres);
    return apres;
  }

  // Prolongation : essai (en cours ou expiré) → fin d'essai repoussée ;
  // abonnement actif ou expiré après paiement → échéance repoussée.
  async prolonger(organisationId: string, module: ModuleMetier, jours: number, acteurId: string) {
    const avant = await this.exigerAbonnement(organisationId, module);
    if (avant.statut === StatutAbonnement.SUSPENDU) throw new ConflictException("Reprenez d'abord l'abonnement suspendu");
    const maintenant = new Date();
    const ajout = jours * JOUR_MS;
    let data: Prisma.AbonnementModuleUpdateInput;
    if (avant.activeLe) {
      const depart = avant.expireLe && avant.expireLe > maintenant ? avant.expireLe : maintenant;
      data = { statut: StatutAbonnement.ACTIF, expireLe: new Date(depart.getTime() + ajout) };
    } else {
      const depart = avant.essaiFin > maintenant ? avant.essaiFin : maintenant;
      data = { statut: StatutAbonnement.ESSAI, essaiFin: new Date(depart.getTime() + ajout), rappelExpirationEnvoyeLe: null };
    }
    const apres = await this.prisma.abonnementModule.update({ where: { id: avant.id }, data });
    await this.tracer(acteurId, organisationId, "abonnement.prolonger", module, avant, apres, { jours });
    return apres;
  }

  // 7.14 / §7.5 — tâche quotidienne : essais échus et abonnements arrivés à
  // échéance passent en EXPIRE.
  async expirerEchus(): Promise<number> {
    const maintenant = new Date();
    const [essais, abonnements] = await Promise.all([
      this.prisma.abonnementModule.updateMany({
        where: { statut: StatutAbonnement.ESSAI, essaiFin: { lt: maintenant } },
        data: { statut: StatutAbonnement.EXPIRE },
      }),
      this.prisma.abonnementModule.updateMany({
        where: { statut: StatutAbonnement.ACTIF, expireLe: { lt: maintenant } },
        data: { statut: StatutAbonnement.EXPIRE },
      }),
    ]);
    return essais.count + abonnements.count;
  }

  // ------------------------------------------------------------------

  private async actualiserExpiration(abonnement: AbonnementModule): Promise<AbonnementModule> {
    const maintenant = new Date();
    const echu =
      (abonnement.statut === StatutAbonnement.ESSAI && abonnement.essaiFin < maintenant) ||
      (abonnement.statut === StatutAbonnement.ACTIF && abonnement.expireLe !== null && abonnement.expireLe < maintenant);
    if (!echu) return abonnement;
    return this.prisma.abonnementModule.update({ where: { id: abonnement.id }, data: { statut: StatutAbonnement.EXPIRE } });
  }

  private async comportementFinEssai(): Promise<ComportementFinEssai> {
    const ligne = await this.prisma.parametrePlateforme.findUnique({ where: { cle: CLE_COMPORTEMENT_FIN_ESSAI } });
    return ligne?.valeur === "BLOCAGE" ? "BLOCAGE" : "LECTURE_SEULE";
  }

  private async exigerAbonnement(organisationId: string, module: ModuleMetier) {
    const abonnement = await this.obtenirStatut(organisationId, module);
    if (!abonnement) throw new NotFoundException("Aucun essai ni abonnement pour ce module");
    return abonnement;
  }

  private async verifierOrganisation(organisationId: string) {
    const organisation = await this.prisma.organisation.findUnique({ where: { id: organisationId }, select: { id: true } });
    if (!organisation) throw new NotFoundException("Organisation introuvable");
  }

  // §11.2 — confirmation d'un paiement d'abonnement (email + in-app).
  private async notifierPaiementConfirme(organisationId: string, module: ModuleMetier) {
    const responsables = await this.prisma.utilisateur.findMany({
      where: { organisationId, actif: true, roles: { some: { role: RoleUtilisateur.RESPONSABLE_COMPTE } } },
      select: { id: true, email: true },
    });
    const message = `Paiement confirmé : abonnement au module ${LIBELLES_MODULE[module]} activé.`;
    await Promise.all(responsables.map((r) => this.mailer.sendNotificationGenerique(r.email, message)));
    await this.notifications.creerPour(
      responsables.map((r) => r.id),
      { type: "PAIEMENT_ABONNEMENT", titre: "Paiement confirmé", message, lienUrl: "/abonnements" },
    );
  }

  private async tracer(
    acteurId: string,
    organisationId: string,
    action: string,
    module: ModuleMetier,
    avant: AbonnementModule | null,
    apres: AbonnementModule,
    complement: Record<string, unknown> = {},
  ) {
    const resume = (a: AbonnementModule | null) =>
      a ? { statut: a.statut, essaiFin: a.essaiFin.toISOString(), expireLe: a.expireLe?.toISOString() ?? null } : null;
    await this.prisma.journalAudit.create({
      data: {
        organisationId,
        utilisateurId: acteurId,
        action,
        entite: "AbonnementModule",
        entiteId: apres.id,
        donneesAvant: (resume(avant) ?? undefined) as Prisma.InputJsonValue | undefined,
        donneesApres: { ...resume(apres), module, ...complement } as Prisma.InputJsonValue,
      },
    });
    this.logger.log(`${action} ${module} pour l'organisation ${organisationId}`);
  }
}
