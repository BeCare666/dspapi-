var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
const LIMITE_LISTE = 30;
let NotificationsInternesService = class NotificationsInternesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async creerPourAdmins(dto) {
        const admins = await this.prisma.utilisateur.findMany({
            where: { actif: true, roles: { some: { role: RoleUtilisateur.ADMIN_PLATEFORME } } },
            select: { id: true },
        });
        if (admins.length === 0)
            return;
        await this.prisma.notification.createMany({
            data: admins.map((a) => ({ destinataireId: a.id, ...dto })),
        });
    }
    async lister(utilisateurId) {
        return this.prisma.notification.findMany({
            where: { destinataireId: utilisateurId },
            orderBy: { createdAt: "desc" },
            take: LIMITE_LISTE,
        });
    }
    async compterNonLues(utilisateurId) {
        return this.prisma.notification.count({ where: { destinataireId: utilisateurId, luLe: null } });
    }
    async marquerLue(id, utilisateurId) {
        const notification = await this.prisma.notification.findUnique({ where: { id } });
        if (!notification || notification.destinataireId !== utilisateurId) {
            throw new NotFoundException("Notification introuvable");
        }
        return this.prisma.notification.update({ where: { id }, data: { luLe: new Date() } });
    }
    async marquerToutesLues(utilisateurId) {
        await this.prisma.notification.updateMany({
            where: { destinataireId: utilisateurId, luLe: null },
            data: { luLe: new Date() },
        });
    }
};
NotificationsInternesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], NotificationsInternesService);
export { NotificationsInternesService };
//# sourceMappingURL=notifications-internes.service.js.map