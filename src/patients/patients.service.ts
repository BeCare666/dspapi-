import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { AbonnementsService } from "../abonnements/abonnements.service.js";
import { EvenementsMetierService } from "../evenements-metier/evenements-metier.service.js";
import { ModuleMetier, NiveauRisqueNews, RoleUtilisateur, StatutPatient } from "../generated/prisma/enums.js";
import type { Prisma } from "../generated/prisma/client.js";
import { calculerScoreNews } from "./news-scoring.util.js";
import { ParametrageNewsService } from "./parametrage-news.service.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
import type { CreatePatientDto } from "./dto/create-patient.dto.js";
import type { SaisirMesureDto } from "./dto/saisir-mesure.dto.js";
import type { CorrigerMesureDto } from "./dto/corriger-mesure.dto.js";
import type { ListPatientsQueryDto } from "./dto/list-patients-query.dto.js";

// §7.1 / §3.3 — fiche patient minimale. Les anciennes colonnes d'identité
// (nom, prénom, date de naissance, sexe, n° de dossier) ne sont plus jamais
// lues ni renvoyées : sélection explicite des seuls champs autorisés.
export const SELECTION_PATIENT = {
  id: true,
  organisationId: true,
  serviceId: true,
  identifiantInterne: true,
  numeroLit: true,
  statut: true,
  dateAdmission: true,
  dateSortie: true,
  createdAt: true,
  updatedAt: true,
  service: { select: { id: true, nom: true } },
} as const satisfies Prisma.PatientSelect;

type PatientMinimal = Prisma.PatientGetPayload<{ select: typeof SELECTION_PATIENT }>;

const CHAMPS_MESURE = [
  "frequenceRespiratoire",
  "saturationOxygene",
  "oxygenoSupplementation",
  "temperature",
  "pressionArterielleSystolique",
  "frequenceCardiaque",
  "niveauConscience",
] as const;

@Injectable()
export class PatientsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abonnements: AbonnementsService,
    private readonly evenements: EvenementsMetierService,
    private readonly parametrageNews: ParametrageNewsService,
  ) {}

  async creer(dto: CreatePatientDto, user: JwtAccessPayload) {
    const organisationId = this.exigerOrganisation(user);

    const identifiantInterne = dto.identifiantInterne.trim();
    const doublon = await this.prisma.patient.findFirst({
      where: { organisationId, identifiantInterne, statut: StatutPatient.HOSPITALISE },
      select: { id: true },
    });
    if (doublon) {
      throw new ConflictException("Un patient hospitalisé porte déjà cet identifiant interne");
    }

    const serviceIdDemande = dto.serviceId ?? user.serviceId ?? undefined;
    const serviceId = serviceIdDemande ? await this.verifierService(organisationId, serviceIdDemande) : null;

    const patient = await this.prisma.patient.create({
      data: { organisationId, serviceId, identifiantInterne, numeroLit: dto.numeroLit?.trim() || null },
      select: SELECTION_PATIENT,
    });
    // §13.2 — création de fiche patient journalisée.
    await this.tracer(organisationId, user.sub, "patient.creer", patient.id, null, {
      identifiantInterne: patient.identifiantInterne,
      serviceId: patient.serviceId,
      numeroLit: patient.numeroLit,
    });
    return patient;
  }

  // 7.10 — filtrage par service pour le personnel soignant affecté à un service ;
  // vue globale de l'organisation pour resp_qualite / responsable_compte.
  async lister(query: ListPatientsQueryDto, user: JwtAccessPayload) {
    const organisationId = this.exigerOrganisation(user);
    return this.prisma.patient.findMany({
      where: {
        organisationId,
        statut: query.statut,
        serviceId: query.serviceId ?? this.serviceImpose(user),
      },
      select: SELECTION_PATIENT,
      orderBy: { dateAdmission: "desc" },
    });
  }

  async obtenir(id: string, user: JwtAccessPayload) {
    return this.chargerPatient(id, user);
  }

  // 7.2 — clôture de fiche patient (sortie), conservation de l'historique.
  async cloturer(id: string, user: JwtAccessPayload) {
    const patient = await this.chargerPatient(id, user);
    if (patient.statut === StatutPatient.SORTI) {
      throw new ConflictException("Ce patient est déjà sorti");
    }
    const apres = await this.prisma.patient.update({
      where: { id },
      data: { statut: StatutPatient.SORTI, dateSortie: new Date() },
      select: SELECTION_PATIENT,
    });
    // §13.2 — clôture de fiche patient journalisée.
    await this.tracer(patient.organisationId, user.sub, "patient.cloturer", id, { statut: patient.statut }, {
      statut: apres.statut,
      dateSortie: apres.dateSortie?.toISOString() ?? null,
    });
    return apres;
  }

  // RM (équivalent NEWS) — calcul du score et déclenchement d'alerte côté serveur uniquement (RM9).
  async saisirMesure(patientId: string, dto: SaisirMesureDto, user: JwtAccessPayload) {
    const patient = await this.chargerPatient(patientId, user);
    if (patient.statut === StatutPatient.SORTI) {
      throw new ConflictException("Patient sorti, saisie de mesure impossible");
    }

    const parametrage = await this.parametrageNews.obtenir();
    const { scoreTotal, niveauRisque } = calculerScoreNews(dto, parametrage.seuils);
    // §7.3 — fréquence de surveillance suggérée, figée sur la mesure (§13.5 :
    // un changement ultérieur du paramétrage n'altère pas les mesures passées).
    const frequenceSurveillance = parametrage.frequences[niveauRisque];

    const { mesure, alerteId } = await this.prisma.$transaction(async (tx) => {
      const mesureCreee = await tx.mesureNews.create({
        data: {
          patientId,
          saisieParId: user.sub,
          ...this.valeursMesure(dto),
          scoreTotal,
          niveauRisque,
          frequenceSurveillance,
        },
      });

      if (niveauRisque === NiveauRisqueNews.BAS) {
        return { mesure: mesureCreee, alerteId: null };
      }

      const alerte = await tx.alerte.create({
        data: { organisationId: patient.organisationId, patientId, mesureId: mesureCreee.id, niveauRisque },
      });
      return { mesure: mesureCreee, alerteId: alerte.id };
    });

    if (alerteId) this.publierAlerte(patient, alerteId, niveauRisque);
    return mesure;
  }

  // §13.4 — une mesure n'est jamais supprimée ; seule une correction tracée
  // (horodatée, motif, auteur, valeurs avant/après) est possible. Le score et
  // le niveau de risque sont recalculés côté serveur. Si la correction fait
  // apparaître un risque moyen ou élevé alors qu'aucune alerte n'existait,
  // l'alerte est créée et notifiée ; une alerte existante n'est jamais
  // supprimée (sa clôture reste une décision humaine).
  async corrigerMesure(patientId: string, mesureId: string, dto: CorrigerMesureDto, user: JwtAccessPayload) {
    const patient = await this.chargerPatient(patientId, user);

    const avant = await this.prisma.mesureNews.findFirst({ where: { id: mesureId, patientId }, include: { alerte: true } });
    if (!avant) throw new NotFoundException("Mesure introuvable");

    const parametrage = await this.parametrageNews.obtenir();
    const { scoreTotal, niveauRisque } = calculerScoreNews(dto, parametrage.seuils);
    const frequenceSurveillance = parametrage.frequences[niveauRisque];
    const valeursAvant = {
      ...Object.fromEntries(CHAMPS_MESURE.map((c) => [c, avant[c]])),
      scoreTotal: avant.scoreTotal,
      niveauRisque: avant.niveauRisque,
    };
    const valeursApres = { ...this.valeursMesure(dto), scoreTotal, niveauRisque };

    const { mesure, alerteId } = await this.prisma.$transaction(async (tx) => {
      const mesureCorrigee = await tx.mesureNews.update({
        where: { id: mesureId },
        data: { ...this.valeursMesure(dto), scoreTotal, niveauRisque, frequenceSurveillance },
      });
      await tx.correctionMesureNews.create({
        data: {
          mesureId,
          auteurId: user.sub,
          motif: dto.motif.trim(),
          valeursAvant: valeursAvant as Prisma.InputJsonValue,
          valeursApres: valeursApres as Prisma.InputJsonValue,
        },
      });
      let idAlerte: string | null = null;
      if (niveauRisque !== NiveauRisqueNews.BAS && !avant.alerte) {
        const alerte = await tx.alerte.create({
          data: { organisationId: patient.organisationId, patientId, mesureId, niveauRisque },
        });
        idAlerte = alerte.id;
      }
      return { mesure: mesureCorrigee, alerteId: idAlerte };
    });

    if (alerteId) this.publierAlerte(patient, alerteId, niveauRisque);
    return mesure;
  }

  // 7.8 — historique / courbe par patient (avec les corrections éventuelles).
  async historiqueMesures(patientId: string, user: JwtAccessPayload) {
    await this.chargerPatient(patientId, user);
    return this.prisma.mesureNews.findMany({
      where: { patientId },
      include: {
        saisiePar: { select: { id: true, nom: true, prenom: true } },
        corrections: {
          orderBy: { createdAt: "asc" },
          include: { auteur: { select: { id: true, nom: true, prenom: true } } },
        },
      },
      orderBy: { dateMesure: "asc" },
    });
  }

  // 7.4 — fiche de surveillance complète (export / impression) : fiche
  // minimale, mesures avec corrections, alertes et leurs interventions.
  async exporter(patientId: string, user: JwtAccessPayload) {
    const patient = await this.chargerPatient(patientId, user);
    const [mesures, alertes] = await Promise.all([
      this.historiqueMesures(patientId, user),
      this.prisma.alerte.findMany({
        where: { patientId },
        include: {
          interventions: {
            orderBy: { createdAt: "asc" },
            include: { utilisateur: { select: { id: true, nom: true, prenom: true } } },
          },
        },
        orderBy: { createdAt: "asc" },
      }),
    ]);
    return { ...patient, mesures, alertes };
  }

  // Personnel soignant sans rôle de supervision, rattaché à un service : ne
  // voit que les patients de son service (§4.2, 7.10).
  serviceImpose(user: JwtAccessPayload): string | undefined {
    const restreint = user.roles.includes(RoleUtilisateur.PERSONNEL_SOIGNANT) && !this.aRoleSupervision(user);
    return restreint ? (user.serviceId ?? undefined) : undefined;
  }

  private aRoleSupervision(user: JwtAccessPayload): boolean {
    return (
      user.roles.includes(RoleUtilisateur.RESP_QUALITE) || user.roles.includes(RoleUtilisateur.RESPONSABLE_COMPTE)
    );
  }

  private valeursMesure(dto: SaisirMesureDto) {
    return {
      frequenceRespiratoire: dto.frequenceRespiratoire,
      saturationOxygene: dto.saturationOxygene,
      oxygenoSupplementation: dto.oxygenoSupplementation,
      temperature: dto.temperature,
      pressionArterielleSystolique: dto.pressionArterielleSystolique,
      frequenceCardiaque: dto.frequenceCardiaque,
      niveauConscience: dto.niveauConscience,
    };
  }

  // §7.5 — l'alerte est un événement métier ; l'envoi (email + in-app au
  // personnel désigné) est fait par NotificationsListener, découplé du calcul.
  private publierAlerte(patient: PatientMinimal, alerteId: string, niveauRisque: NiveauRisqueNews): void {
    this.evenements.publier("news.alerte", {
      alerteId,
      organisationId: patient.organisationId,
      serviceId: patient.serviceId,
      serviceNom: patient.service?.nom ?? null,
      libellePatient: patient.numeroLit
        ? `patient ${patient.identifiantInterne} (lit ${patient.numeroLit})`
        : `patient ${patient.identifiantInterne}`,
      niveauRisque,
    });
  }

  private async verifierService(organisationId: string, serviceId: string): Promise<string> {
    const service = await this.prisma.service.findFirst({ where: { id: serviceId, organisationId } });
    if (!service) throw new NotFoundException("Service introuvable");
    if (!service.actif) throw new BadRequestException("Ce service est désactivé");
    return service.id;
  }

  private async tracer(
    organisationId: string,
    acteurId: string,
    action: string,
    patientId: string,
    donneesAvant: Prisma.InputJsonValue | null,
    donneesApres: Prisma.InputJsonValue | null,
  ) {
    await this.prisma.journalAudit.create({
      data: {
        organisationId,
        utilisateurId: acteurId,
        action,
        entite: "Patient",
        entiteId: patientId,
        donneesAvant: donneesAvant ?? undefined,
        donneesApres: donneesApres ?? undefined,
      },
    });
  }

  private exigerOrganisation(user: JwtAccessPayload): string {
    if (!user.organisationId) {
      throw new ForbiddenException("Réservé aux comptes organisation");
    }
    return user.organisationId;
  }

  // RM7 — isolation stricte par organisation_id : 404 (jamais 403) pour ne pas
  // révéler l'existence d'un patient d'une autre organisation. Un soignant
  // restreint à son service ne voit pas non plus les patients d'un autre service.
  private async chargerPatient(id: string, user: JwtAccessPayload): Promise<PatientMinimal> {
    const patient = await this.prisma.patient.findUnique({ where: { id }, select: SELECTION_PATIENT });
    const serviceImpose = this.serviceImpose(user);
    if (
      !patient ||
      patient.organisationId !== user.organisationId ||
      (serviceImpose !== undefined && patient.serviceId !== serviceImpose)
    ) {
      throw new NotFoundException("Patient introuvable");
    }
    return patient;
  }
}
