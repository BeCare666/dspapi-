var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { AbonnementsService } from "../abonnements/abonnements.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { ModuleMetier, NiveauRisqueNews, RoleUtilisateur, StatutPatient } from "../generated/prisma/enums.js";
import { calculerScoreNews } from "./news-scoring.util.js";
let PatientsService = class PatientsService {
    prisma;
    abonnements;
    mailer;
    constructor(prisma, abonnements, mailer) {
        this.prisma = prisma;
        this.abonnements = abonnements;
        this.mailer = mailer;
    }
    async creer(dto, user) {
        const organisationId = this.exigerOrganisation(user);
        await this.abonnements.verifierAcces(organisationId, ModuleMetier.NEWS);
        const serviceId = dto.serviceId ?? user.serviceId ?? undefined;
        return this.prisma.patient.create({
            data: {
                organisationId,
                serviceId,
                nom: dto.nom,
                prenom: dto.prenom,
                dateNaissance: dto.dateNaissance ? new Date(dto.dateNaissance) : undefined,
                sexe: dto.sexe,
                numeroDossier: dto.numeroDossier,
            },
        });
    }
    async lister(query, user) {
        const organisationId = this.exigerOrganisation(user);
        const restreintAUnService = user.roles.includes(RoleUtilisateur.PERSONNEL_SOIGNANT) && !this.aRoleSupervision(user);
        return this.prisma.patient.findMany({
            where: {
                organisationId,
                statut: query.statut,
                serviceId: query.serviceId ?? (restreintAUnService ? (user.serviceId ?? undefined) : undefined),
            },
            orderBy: { dateAdmission: "desc" },
        });
    }
    async obtenir(id, user) {
        const patient = await this.prisma.patient.findUnique({ where: { id } });
        this.verifierAppartenance(patient, user);
        return patient;
    }
    async cloturer(id, user) {
        const patient = await this.prisma.patient.findUnique({ where: { id } });
        this.verifierAppartenance(patient, user);
        if (patient.statut === StatutPatient.SORTI) {
            throw new ConflictException("Ce patient est déjà sorti");
        }
        return this.prisma.patient.update({
            where: { id },
            data: { statut: StatutPatient.SORTI, dateSortie: new Date() },
        });
    }
    async saisirMesure(patientId, dto, user) {
        const patient = await this.prisma.patient.findUnique({ where: { id: patientId } });
        this.verifierAppartenance(patient, user);
        await this.abonnements.verifierAcces(patient.organisationId, ModuleMetier.NEWS);
        if (patient.statut === StatutPatient.SORTI) {
            throw new ConflictException("Patient sorti, saisie de mesure impossible");
        }
        const { scoreTotal, niveauRisque } = calculerScoreNews(dto);
        const { mesure, alerteCreee } = await this.prisma.$transaction(async (tx) => {
            const mesureCreee = await tx.mesureNews.create({
                data: {
                    patientId,
                    saisieParId: user.sub,
                    frequenceRespiratoire: dto.frequenceRespiratoire,
                    saturationOxygene: dto.saturationOxygene,
                    oxygenoSupplementation: dto.oxygenoSupplementation,
                    temperature: dto.temperature,
                    pressionArterielleSystolique: dto.pressionArterielleSystolique,
                    frequenceCardiaque: dto.frequenceCardiaque,
                    niveauConscience: dto.niveauConscience,
                    scoreTotal,
                    niveauRisque,
                },
            });
            if (niveauRisque === NiveauRisqueNews.BAS) {
                return { mesure: mesureCreee, alerteCreee: false };
            }
            await tx.alerte.create({
                data: {
                    organisationId: patient.organisationId,
                    patientId,
                    mesureId: mesureCreee.id,
                    niveauRisque,
                },
            });
            return { mesure: mesureCreee, alerteCreee: true };
        });
        if (alerteCreee) {
            await this.notifierAlerte(patient, niveauRisque);
        }
        return mesure;
    }
    async historiqueMesures(patientId, user) {
        const patient = await this.prisma.patient.findUnique({ where: { id: patientId } });
        this.verifierAppartenance(patient, user);
        return this.prisma.mesureNews.findMany({ where: { patientId }, orderBy: { dateMesure: "asc" } });
    }
    async exporter(patientId, user) {
        const patient = await this.prisma.patient.findUnique({
            where: { id: patientId },
            include: { mesures: { orderBy: { dateMesure: "asc" } }, alertes: true },
        });
        this.verifierAppartenance(patient, user);
        return patient;
    }
    aRoleSupervision(user) {
        return (user.roles.includes(RoleUtilisateur.RESP_QUALITE) || user.roles.includes(RoleUtilisateur.RESPONSABLE_COMPTE));
    }
    async notifierAlerte(patient, niveauRisque) {
        const destinataires = await this.prisma.utilisateur.findMany({
            where: {
                organisationId: patient.organisationId,
                actif: true,
                roles: { some: { role: { in: [RoleUtilisateur.RESP_QUALITE, RoleUtilisateur.RESPONSABLE_COMPTE] } } },
            },
            select: { email: true },
        });
        const nomComplet = `${patient.prenom} ${patient.nom}`;
        await Promise.all(destinataires.map((d) => this.mailer.sendAlerteNewsEmail(d.email, nomComplet, niveauRisque)));
    }
    exigerOrganisation(user) {
        if (!user.organisationId) {
            throw new ForbiddenException("Réservé aux comptes organisation");
        }
        return user.organisationId;
    }
    verifierAppartenance(patient, user) {
        if (!patient || patient.organisationId !== user.organisationId) {
            throw new NotFoundException("Patient introuvable");
        }
    }
};
PatientsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        AbonnementsService,
        MailerService])
], PatientsService);
export { PatientsService };
//# sourceMappingURL=patients.service.js.map