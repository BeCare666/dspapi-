import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";

export interface CreerNotificationDto {
  type: string;
  titre: string;
  message: string;
  lienUrl?: string;
}

const LIMITE_LISTE = 30;

@Injectable()
export class NotificationsInternesService {
  constructor(private readonly prisma: PrismaService) {}

  // Utilisé pour les événements qui concernent l'admin plateforme (ex. une
  // réservation vient d'être payée et attend une date de RDV), pas un
  // établissement en particulier.
  async creerPourAdmins(dto: CreerNotificationDto): Promise<void> {
    const admins = await this.prisma.utilisateur.findMany({
      where: { actif: true, roles: { some: { role: RoleUtilisateur.ADMIN_PLATEFORME } } },
      select: { id: true },
    });
    if (admins.length === 0) return;

    await this.prisma.notification.createMany({
      data: admins.map((a) => ({ destinataireId: a.id, ...dto })),
    });
  }

  // §11.2 — notification visible dans l'espace personnel des destinataires désignés.
  async creerPour(destinataireIds: string[], dto: CreerNotificationDto): Promise<void> {
    if (destinataireIds.length === 0) return;
    await this.prisma.notification.createMany({
      data: destinataireIds.map((destinataireId) => ({ destinataireId, ...dto })),
    });
  }

  async lister(utilisateurId: string) {
    return this.prisma.notification.findMany({
      where: { destinataireId: utilisateurId },
      orderBy: { createdAt: "desc" },
      take: LIMITE_LISTE,
    });
  }

  async compterNonLues(utilisateurId: string): Promise<number> {
    return this.prisma.notification.count({ where: { destinataireId: utilisateurId, luLe: null } });
  }

  async marquerLue(id: string, utilisateurId: string) {
    const notification = await this.prisma.notification.findUnique({ where: { id } });
    if (!notification || notification.destinataireId !== utilisateurId) {
      throw new NotFoundException("Notification introuvable");
    }
    return this.prisma.notification.update({ where: { id }, data: { luLe: new Date() } });
  }

  async marquerToutesLues(utilisateurId: string): Promise<void> {
    await this.prisma.notification.updateMany({
      where: { destinataireId: utilisateurId, luLe: null },
      data: { luLe: new Date() },
    });
  }
}
