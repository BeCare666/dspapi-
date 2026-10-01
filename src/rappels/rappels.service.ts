import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { PrismaService } from "../prisma/prisma.service.js";
import { ParametresService } from "../parametres/parametres.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { NotificationsInternesService } from "../notifications-internes/notifications-internes.service.js";
import { RoleUtilisateur, StatutAbonnement, StatutReservation } from "../generated/prisma/enums.js";

const JOUR_MS = 86_400_000;
const LIBELLES_MODULE: Record<string, string> = { NEWS: "Score NEWS", EI: "Événements indésirables" };
const FUSEAU = "Africa/Porto-Novo";

// §11.2 — rappels automatiques : avant l'expiration d'une période d'essai et
// avant une session de formation. Le CDC ne fixe pas de délai : il est
// paramétrable par l'administrateur (delai_rappel_essai_jours,
// delai_rappel_formation_jours). Chaque rappel n'est envoyé qu'une fois.
@Injectable()
export class RappelsService {
  private readonly logger = new Logger(RappelsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly parametres: ParametresService,
    private readonly mailer: MailerService,
    private readonly notifications: NotificationsInternesService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_8AM, { timeZone: FUSEAU })
  async executer(): Promise<{ essais: number; formations: number }> {
    const [essais, formations] = [await this.rappelerFinsEssai(), await this.rappelerFormations()];
    if (essais + formations > 0) this.logger.log(`Rappels envoyés : ${essais} fin(s) d'essai, ${formations} formation(s)`);
    return { essais, formations };
  }

  async rappelerFinsEssai(): Promise<number> {
    const delai = await this.parametres.obtenirValeurEntiere("delai_rappel_essai_jours", 7);
    const maintenant = new Date();
    const echeances = await this.prisma.abonnementModule.findMany({
      where: {
        statut: StatutAbonnement.ESSAI,
        rappelExpirationEnvoyeLe: null,
        essaiFin: { gt: maintenant, lte: new Date(maintenant.getTime() + delai * JOUR_MS) },
      },
      select: { id: true, organisationId: true, module: true, essaiFin: true },
    });
    for (const a of echeances) {
      const responsables = await this.prisma.utilisateur.findMany({
        where: { organisationId: a.organisationId, actif: true, roles: { some: { role: RoleUtilisateur.RESPONSABLE_COMPTE } } },
        select: { id: true, email: true },
      });
      const module = LIBELLES_MODULE[a.module] ?? a.module;
      const dateFin = a.essaiFin.toLocaleDateString("fr-FR", { dateStyle: "long", timeZone: FUSEAU });
      await Promise.all(
        responsables.map((r) => this.mailer.sendRappelFinEssai(r.email, module, dateFin, `${process.env.WEB_APP_URL}/abonnements`)),
      );
      await this.notifications.creerPour(
        responsables.map((r) => r.id),
        { type: "RAPPEL_FIN_ESSAI", titre: `Fin de l'essai ${module} le ${dateFin}`, message: "Souscrivez pour continuer à utiliser le module.", lienUrl: "/abonnements" },
      );
      await this.prisma.abonnementModule.update({ where: { id: a.id }, data: { rappelExpirationEnvoyeLe: maintenant } });
    }
    return echeances.length;
  }

  async rappelerFormations(): Promise<number> {
    const delai = await this.parametres.obtenirValeurEntiere("delai_rappel_formation_jours", 2);
    const maintenant = new Date();
    const sessions = await this.prisma.reservation.findMany({
      where: {
        statut: StatutReservation.CONFIRMEE,
        rappelEnvoyeLe: null,
        dateRdv: { gt: maintenant, lte: new Date(maintenant.getTime() + delai * JOUR_MS) },
      },
      select: { id: true, dateRdv: true, utilisateur: { select: { id: true, email: true } }, formation: { select: { titre: true } } },
    });
    for (const r of sessions) {
      const date = r.dateRdv!.toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short", timeZone: FUSEAU });
      await this.mailer.sendRappelFormation(r.utilisateur.email, r.formation.titre, date);
      await this.notifications.creerPour([r.utilisateur.id], {
        type: "RAPPEL_FORMATION",
        titre: `Rappel : formation le ${date}`,
        message: r.formation.titre,
        lienUrl: `/mes-reservations/${r.id}`,
      });
      await this.prisma.reservation.update({ where: { id: r.id }, data: { rappelEnvoyeLe: maintenant } });
    }
    return sessions.length;
  }
}
