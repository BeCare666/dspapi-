var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ReservationsService_1;
import { BadRequestException, ConflictException, ForbiddenException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { KkiapayService } from "../paiements/kkiapay.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { NotificationsInternesService } from "../notifications-internes/notifications-internes.service.js";
import { FormuleFormation, RoleUtilisateur, StatutReservation, TypeCompte } from "../generated/prisma/enums.js";
let ReservationsService = ReservationsService_1 = class ReservationsService {
    prisma;
    kkiapay;
    mailer;
    notificationsInternes;
    logger = new Logger(ReservationsService_1.name);
    constructor(prisma, kkiapay, mailer, notificationsInternes) {
        this.prisma = prisma;
        this.kkiapay = kkiapay;
        this.mailer = mailer;
        this.notificationsInternes = notificationsInternes;
    }
    async creer(dto, user) {
        if (user.typeCompte === TypeCompte.ADMIN_PLATEFORME) {
            throw new ForbiddenException("Réservé aux comptes Organisation et Individuel");
        }
        const formation = await this.prisma.formation.findUnique({ where: { id: dto.formationId } });
        if (!formation || !formation.actif) {
            throw new NotFoundException("Formation introuvable ou indisponible");
        }
        const tarifApplique = this.tarifPourFormule(formation, dto.formule);
        return this.prisma.reservation.create({
            data: {
                formationId: formation.id,
                utilisateurId: user.sub,
                organisationId: user.organisationId,
                formule: dto.formule,
                tarifApplique,
            },
        });
    }
    async lister(query, user) {
        const estAdmin = user.roles.includes(RoleUtilisateur.ADMIN_PLATEFORME);
        return this.prisma.reservation.findMany({
            where: {
                statut: query.statut,
                ...(estAdmin ? {} : user.organisationId ? { organisationId: user.organisationId } : { utilisateurId: user.sub }),
            },
            include: {
                formation: true,
                facture: true,
                utilisateur: { select: { id: true, nom: true, prenom: true, email: true } },
                organisation: { select: { id: true, nom: true } },
            },
            orderBy: { createdAt: "desc" },
        });
    }
    async obtenir(id, user) {
        const reservation = await this.prisma.reservation.findUnique({
            where: { id },
            include: { formation: true, facture: true },
        });
        this.verifierAcces(reservation, user);
        return reservation;
    }
    async verifierPaiement(id, dto, user) {
        const reservation = await this.prisma.reservation.findUnique({ where: { id } });
        this.verifierAcces(reservation, user);
        if (reservation.statut !== StatutReservation.ATTENTE_PAIEMENT) {
            if (reservation.statut === StatutReservation.PAYEE && reservation.kkiapayTransactionId === dto.transactionId) {
                return reservation;
            }
            throw new ConflictException(`Réservation déjà au statut ${reservation.statut}`);
        }
        let transaction;
        try {
            transaction = await this.kkiapay.verifierTransaction(dto.transactionId);
        }
        catch (erreur) {
            const message = erreur instanceof Error ? erreur.message : "Transaction introuvable";
            throw new BadRequestException(`Vérification KKiaPay échouée : ${message}`);
        }
        if (transaction.status !== "SUCCESS") {
            throw new BadRequestException(`Paiement non confirmé par KKiaPay (statut : ${transaction.status})`);
        }
        if (Number(transaction.amount) !== reservation.tarifApplique) {
            this.logger.warn(`Montant KKiaPay (${transaction.amount}) différent du tarif appliqué (${reservation.tarifApplique}) pour la réservation ${id}`);
            throw new BadRequestException("Le montant payé ne correspond pas au tarif de la réservation");
        }
        return this.confirmerPaiement(reservation, dto.transactionId);
    }
    async confirmerPaiement(reservation, transactionId) {
        const numero = await this.genererNumeroFacture();
        const [misAJour] = await this.prisma.$transaction([
            this.prisma.reservation.update({
                where: { id: reservation.id },
                data: { statut: StatutReservation.PAYEE, kkiapayTransactionId: transactionId },
            }),
            this.prisma.facture.create({
                data: { reservationId: reservation.id, numero, montant: reservation.tarifApplique },
            }),
        ]);
        await this.notifierUtilisateur(reservation.utilisateurId, "Paiement confirmé. Une date de rendez-vous vous sera communiquée sous 48 h.");
        const formation = await this.prisma.formation.findUnique({
            where: { id: reservation.formationId },
            select: { titre: true },
        });
        await this.notificationsInternes.creerPourAdmins({
            type: "RESERVATION_PAYEE",
            titre: "Réservation payée, date de RDV à fixer",
            message: `${formation?.titre ?? "Une formation"} · ${reservation.tarifApplique.toLocaleString("fr-FR")} FCFA`,
            lienUrl: "/admin/reservations",
        });
        return misAJour;
    }
    async fixerDateRdv(id, dto) {
        const reservation = await this.prisma.reservation.findUnique({ where: { id } });
        if (!reservation)
            throw new NotFoundException("Réservation introuvable");
        if (reservation.statut !== StatutReservation.PAYEE) {
            throw new ConflictException("La date de RDV ne peut être fixée que sur une réservation payée");
        }
        const misAJour = await this.prisma.reservation.update({
            where: { id },
            data: { statut: StatutReservation.CONFIRMEE, dateRdv: new Date(dto.dateRdv) },
        });
        await this.notifierUtilisateur(reservation.utilisateurId, `Date de rendez-vous fixée : ${dto.dateRdv}`);
        return misAJour;
    }
    async marquerRealisee(id, dto) {
        const reservation = await this.prisma.reservation.findUnique({ where: { id } });
        if (!reservation)
            throw new NotFoundException("Réservation introuvable");
        if (reservation.statut !== StatutReservation.CONFIRMEE) {
            throw new ConflictException("Seule une réservation confirmée peut être marquée comme réalisée");
        }
        return this.prisma.reservation.update({
            where: { id },
            data: { statut: StatutReservation.REALISEE, presenceConfirmee: dto.presenceConfirmee ?? true },
        });
    }
    async annuler(id, user) {
        const reservation = await this.prisma.reservation.findUnique({ where: { id } });
        this.verifierAcces(reservation, user);
        if (reservation.statut === StatutReservation.REALISEE || reservation.statut === StatutReservation.ANNULEE) {
            throw new ConflictException(`Impossible d'annuler une réservation ${reservation.statut}`);
        }
        return this.prisma.reservation.update({ where: { id }, data: { statut: StatutReservation.ANNULEE } });
    }
    tarifPourFormule(formation, formule) {
        switch (formule) {
            case FormuleFormation.INDIVIDUEL:
                return formation.prixIndividuel;
            case FormuleFormation.GROUPE_5:
                return formation.prixGroupe5;
            case FormuleFormation.GROUPE_10:
                return formation.prixGroupe10;
        }
    }
    async genererNumeroFacture() {
        const annee = new Date().getFullYear();
        const total = await this.prisma.facture.count();
        return `FAC-${annee}-${String(total + 1).padStart(6, "0")}`;
    }
    async notifierUtilisateur(utilisateurId, message) {
        const utilisateur = await this.prisma.utilisateur.findUnique({ where: { id: utilisateurId } });
        if (utilisateur) {
            await this.mailer.sendNotificationGenerique(utilisateur.email, message);
        }
    }
    verifierAcces(reservation, user) {
        if (!reservation)
            throw new NotFoundException("Réservation introuvable");
        const estProprietaire = user.organisationId
            ? reservation.organisationId === user.organisationId
            : reservation.utilisateurId === user.sub;
        const estAdmin = user.roles.includes(RoleUtilisateur.ADMIN_PLATEFORME);
        if (!estProprietaire && !estAdmin) {
            throw new NotFoundException("Réservation introuvable");
        }
    }
};
ReservationsService = ReservationsService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        KkiapayService,
        MailerService,
        NotificationsInternesService])
], ReservationsService);
export { ReservationsService };
//# sourceMappingURL=reservations.service.js.map