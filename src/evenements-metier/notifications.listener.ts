import { Injectable, type OnModuleInit } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { NotificationsInternesService } from "../notifications-internes/notifications-internes.service.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
import type { Prisma } from "../generated/prisma/client.js";
import { EvenementsMetierService, type AlerteNewsEvenement, type EiGraviteEleveeEvenement } from "./evenements-metier.service.js";

// §11.2 — gestionnaire de notification commun : email + notification visible
// dans l'espace personnel des destinataires.
@Injectable()
export class NotificationsListener implements OnModuleInit {
  constructor(
    private readonly evenements: EvenementsMetierService,
    private readonly prisma: PrismaService,
    private readonly mailer: MailerService,
    private readonly notifications: NotificationsInternesService,
  ) {}

  onModuleInit() {
    this.evenements.abonner("news.alerte", (e) => this.alerteNews(e));
    this.evenements.abonner("ei.gravite-elevee", (e) => this.eiGraviteElevee(e));
  }

  // §7.3 — « personnel désigné » : soignants du service du patient,
  // responsables qualité et responsable du compte.
  private async alerteNews(e: AlerteNewsEvenement) {
    const conditions: Prisma.UtilisateurWhereInput[] = [
      { roles: { some: { role: { in: [RoleUtilisateur.RESP_QUALITE, RoleUtilisateur.RESPONSABLE_COMPTE] } } } },
    ];
    if (e.serviceId) {
      conditions.push({ serviceId: e.serviceId, roles: { some: { role: RoleUtilisateur.PERSONNEL_SOIGNANT } } });
    }
    const destinataires = await this.prisma.utilisateur.findMany({
      where: { organisationId: e.organisationId, actif: true, OR: conditions },
      select: { id: true, email: true },
    });
    await Promise.all(destinataires.map((d) => this.mailer.sendAlerteNewsEmail(d.email, e.libellePatient, e.niveauRisque, e.serviceNom)));
    await this.notifications.creerPour(
      destinataires.map((d) => d.id),
      {
        type: "ALERTE_NEWS",
        titre: `Alerte NEWS ${e.niveauRisque === "ELEVE" ? "élevée" : "moyenne"}`,
        message: e.serviceNom ? `${e.libellePatient} · ${e.serviceNom}` : e.libellePatient,
        lienUrl: `/news/alertes/${e.alerteId}`,
      },
    );
  }

  // §8.3 — responsable qualité et direction (responsable du compte).
  private async eiGraviteElevee(e: EiGraviteEleveeEvenement) {
    const destinataires = await this.prisma.utilisateur.findMany({
      where: {
        organisationId: e.organisationId,
        actif: true,
        roles: { some: { role: { in: [RoleUtilisateur.RESP_QUALITE, RoleUtilisateur.RESPONSABLE_COMPTE] } } },
      },
      select: { id: true, email: true },
    });
    await Promise.all(destinataires.map((d) => this.mailer.sendAlerteEiGraviteElevee(d.email, e.evenementId, e.gravite)));
    await this.notifications.creerPour(
      destinataires.map((d) => d.id),
      {
        type: "EI_GRAVITE_ELEVEE",
        titre: "Événement indésirable de gravité élevée",
        message: e.gravite,
        lienUrl: `/evenements-indesirables/${e.evenementId}`,
      },
    );
  }
}
