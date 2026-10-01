import { ConflictException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { PatientsService, SELECTION_PATIENT } from "../patients/patients.service.js";
import { StatutAlerte } from "../generated/prisma/enums.js";
import type { Alerte } from "../generated/prisma/client.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
import type { CreerInterventionDto } from "./dto/creer-intervention.dto.js";
import type { ChangerStatutAlerteDto } from "./dto/changer-statut-alerte.dto.js";
import type { ListAlertesQueryDto } from "./dto/list-alertes-query.dto.js";

const ORDRE_STATUT: Record<StatutAlerte, number> = {
  [StatutAlerte.OUVERTE]: 0,
  [StatutAlerte.EN_COURS]: 1,
  [StatutAlerte.CLOTUREE]: 2,
};

@Injectable()
export class AlertesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly patients: PatientsService,
  ) {}

  async lister(query: ListAlertesQueryDto, user: JwtAccessPayload) {
    const organisationId = this.exigerOrganisation(user);
    // 7.10 — même filtrage par service que la liste des patients.
    const serviceId = this.patients.serviceImpose(user);
    return this.prisma.alerte.findMany({
      where: {
        organisationId,
        statut: query.statut,
        niveauRisque: query.niveauRisque,
        patient: serviceId ? { serviceId } : undefined,
      },
      include: { patient: { select: SELECTION_PATIENT }, mesure: true },
      orderBy: { createdAt: "desc" },
    });
  }

  async obtenir(id: string, user: JwtAccessPayload) {
    const alerte = await this.prisma.alerte.findUnique({
      where: { id },
      include: {
        patient: { select: SELECTION_PATIENT },
        mesure: true,
        interventions: {
          orderBy: { createdAt: "asc" },
          include: { utilisateur: { select: { id: true, nom: true, prenom: true } } },
        },
      },
    });
    this.verifierAppartenance(alerte, user);
    return alerte;
  }

  // 7.7 — journal d'intervention ; passe automatiquement l'alerte en EN_COURS
  // si elle était encore OUVERTE (une intervention documentée = prise en charge amorcée).
  async ajouterIntervention(alerteId: string, dto: CreerInterventionDto, user: JwtAccessPayload) {
    const alerte = await this.prisma.alerte.findUnique({ where: { id: alerteId } });
    this.verifierAppartenance(alerte, user);
    if (alerte.statut === StatutAlerte.CLOTUREE) {
      throw new ConflictException("Alerte déjà clôturée");
    }

    const intervention = await this.prisma.intervention.create({
      data: { alerteId, utilisateurId: user.sub, note: dto.note },
    });

    if (alerte.statut === StatutAlerte.OUVERTE) {
      await this.prisma.alerte.update({ where: { id: alerteId }, data: { statut: StatutAlerte.EN_COURS } });
    }

    return intervention;
  }

  async changerStatut(alerteId: string, dto: ChangerStatutAlerteDto, user: JwtAccessPayload) {
    const alerte = await this.prisma.alerte.findUnique({ where: { id: alerteId } });
    this.verifierAppartenance(alerte, user);
    if (ORDRE_STATUT[dto.statut] <= ORDRE_STATUT[alerte.statut]) {
      throw new ConflictException(
        `Transition invalide : une alerte ${alerte.statut} ne peut pas repasser à ${dto.statut}`,
      );
    }
    return this.prisma.alerte.update({ where: { id: alerteId }, data: { statut: dto.statut } });
  }

  private exigerOrganisation(user: JwtAccessPayload): string {
    if (!user.organisationId) {
      throw new ForbiddenException("Réservé aux comptes organisation");
    }
    return user.organisationId;
  }

  private verifierAppartenance<T extends Alerte | null>(
    alerte: T,
    user: JwtAccessPayload,
  ): asserts alerte is NonNullable<T> {
    if (!alerte || alerte.organisationId !== user.organisationId) {
      throw new NotFoundException("Alerte introuvable");
    }
  }
}
