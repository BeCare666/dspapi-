import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { AbonnementsService } from "../abonnements/abonnements.service.js";
import { EvenementsMetierService } from "../evenements-metier/evenements-metier.service.js";
import { CloudinaryService } from "../cloudinary/cloudinary.service.js";
import { ModuleMetier, RoleUtilisateur, StatutActionCorrective, StatutEi } from "../generated/prisma/enums.js";
import type { Prisma } from "../generated/prisma/client.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
import type { DeclarerEiDto } from "./dto/declarer-ei.dto.js";
import type { QualifierEiDto } from "./dto/qualifier-ei.dto.js";
import type { CreerCauseDto } from "./dto/creer-cause.dto.js";
import type { CreerActionCorrectiveDto } from "./dto/creer-action-corrective.dto.js";
import type { ChangerStatutActionDto } from "./dto/changer-statut-action.dto.js";
import type { ChangerStatutEiDto } from "./dto/changer-statut-ei.dto.js";
import type { CorrigerEiDto } from "./dto/corriger-ei.dto.js";
import type { ListEiQueryDto } from "./dto/list-ei-query.dto.js";
import type { ExportEiQueryDto } from "./dto/export-ei-query.dto.js";

// §8.2 / §8.5 — machine à états : déclaré → qualifié → en analyse → plan
// d'action → clôturé. Une transition n'avance que d'une étape à la fois et
// chacune est historisée (qui, quand).
export const ORDRE_STATUT_EI: Record<StatutEi, number> = {
  [StatutEi.DECLARE]: 0,
  [StatutEi.QUALIFIE]: 1,
  [StatutEi.EN_ANALYSE]: 2,
  [StatutEi.PLAN_ACTION]: 3,
  [StatutEi.CLOTURE]: 4,
};

const INCLUSION_LISTE = {
  typeEi: true,
  service: true,
  niveauGravite: true,
} as const satisfies Prisma.EvenementIndesirableInclude;

@Injectable()
export class EvenementsIndesirablesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly abonnements: AbonnementsService,
    private readonly evenements: EvenementsMetierService,
    private readonly cloudinary: CloudinaryService,
  ) {}

  // §8.1 — déclaration par toute personne habilitée de l'établissement.
  async declarer(dto: DeclarerEiDto, user: JwtAccessPayload) {
    const organisationId = this.exigerOrganisation(user);

    const dateSurvenue = new Date(dto.dateSurvenue);
    if (dateSurvenue.getTime() > Date.now() + 5 * 60_000) {
      throw new BadRequestException("La date de survenue ne peut pas être dans le futur");
    }
    const serviceId = dto.serviceId ? await this.verifierService(organisationId, dto.serviceId) : null;
    const lieu = dto.lieu?.trim() || null;
    if (!serviceId && !lieu) {
      throw new BadRequestException("Indiquez le service ou le lieu concerné");
    }
    const niveau = await this.verifierNiveauGravite(dto.niveauGraviteId);
    if (dto.typeEiId) await this.verifierTypeEi(dto.typeEiId);
    if (dto.critereId) await this.verifierCritere(dto.critereId);

    const evenement = await this.prisma.evenementIndesirable.create({
      data: {
        organisationId,
        declareParId: user.sub,
        dateSurvenue,
        serviceId,
        lieu,
        typeEiId: dto.typeEiId,
        description: dto.description.trim(),
        niveauGraviteId: niveau.id,
        personnesImpliquees: dto.personnesImpliquees.trim(),
        critereId: dto.critereId,
      },
      include: INCLUSION_LISTE,
    });

    // §8.3 — alerte immédiate pour tout EI de gravité élevée, dès la déclaration.
    if (niveau.critique) this.publierGraviteElevee(evenement.id, organisationId, niveau.libelle);
    return evenement;
  }

  async lister(query: ListEiQueryDto, user: JwtAccessPayload) {
    const organisationId = this.exigerOrganisation(user);
    return this.prisma.evenementIndesirable.findMany({
      where: {
        organisationId,
        statut: query.statut,
        niveauGraviteId: query.niveauGraviteId,
        niveauGravite: query.critique === "true" ? { critique: true } : undefined,
        serviceId: query.serviceId,
        typeEiId: query.typeEiId,
      },
      include: INCLUSION_LISTE,
      orderBy: { dateDeclaration: "desc" },
    });
  }

  // §8.2 — réception : file d'attente du responsable qualité (EI déclarés,
  // pas encore qualifiés), les plus graves puis les plus anciens d'abord.
  async fileAttenteQualification(user: JwtAccessPayload) {
    const organisationId = this.exigerOrganisation(user);
    return this.prisma.evenementIndesirable.findMany({
      where: { organisationId, statut: StatutEi.DECLARE },
      include: INCLUSION_LISTE,
      orderBy: [{ niveauGravite: { ordre: "desc" } }, { dateDeclaration: "asc" }],
    });
  }

  async obtenir(id: string, user: JwtAccessPayload) {
    const evenement = await this.prisma.evenementIndesirable.findUnique({
      where: { id },
      include: {
        ...INCLUSION_LISTE,
        critere: true,
        declarePar: { select: { id: true, nom: true, prenom: true, email: true } },
        causes: { orderBy: { createdAt: "asc" } },
        actionsCorrectives: {
          orderBy: { createdAt: "asc" },
          include: { responsable: { select: { id: true, nom: true, prenom: true } } },
        },
        transitions: {
          orderBy: { createdAt: "asc" },
          include: { utilisateur: { select: { id: true, nom: true, prenom: true } } },
        },
        piecesJointes: { orderBy: { createdAt: "asc" } },
        corrections: {
          orderBy: { createdAt: "asc" },
          include: { auteur: { select: { id: true, nom: true, prenom: true } } },
        },
      },
    });
    this.verifierAppartenance(evenement, user);
    return evenement;
  }

  // §8.2 — qualification : confirmation de la gravité et de la catégorie (type),
  // priorisation. Fait passer l'EI de « déclaré » à « qualifié » (historisé).
  async qualifier(id: string, dto: QualifierEiDto, user: JwtAccessPayload) {
    const evenement = await this.chargerAvecGravite(id, user);
    if (evenement.statut !== StatutEi.DECLARE) {
      throw new ConflictException("Seul un événement au statut « déclaré » peut être qualifié");
    }
    const niveau = await this.verifierNiveauGravite(dto.niveauGraviteId);
    await this.verifierTypeEi(dto.typeEiId);

    const [misAJour] = await this.prisma.$transaction([
      this.prisma.evenementIndesirable.update({
        where: { id },
        data: { niveauGraviteId: niveau.id, typeEiId: dto.typeEiId, priorite: dto.priorite, statut: StatutEi.QUALIFIE },
        include: INCLUSION_LISTE,
      }),
      this.prisma.evenementTransition.create({
        data: { evenementId: id, ancienStatut: StatutEi.DECLARE, nouveauStatut: StatutEi.QUALIFIE, utilisateurId: user.sub },
      }),
    ]);

    // Gravité réévaluée à la hausse : l'alerte n'avait pas encore été envoyée.
    if (niveau.critique && !evenement.niveauGravite?.critique) {
      this.publierGraviteElevee(id, evenement.organisationId, niveau.libelle);
    }
    return misAJour;
  }

  // §8.2 — analyse des causes (immédiates / profondes) sous forme guidée
  // (« 5 pourquoi »), possible pendant l'analyse et le plan d'action.
  async ajouterCause(evenementId: string, dto: CreerCauseDto, user: JwtAccessPayload) {
    const evenement = await this.chargerAvecGravite(evenementId, user);
    if (evenement.statut !== StatutEi.EN_ANALYSE && evenement.statut !== StatutEi.PLAN_ACTION) {
      throw new ConflictException("Les causes se documentent une fois l'événement passé « en analyse »");
    }
    const pourquois = (dto.pourquois ?? []).map((p) => p.trim()).filter((p) => p.length > 0);
    return this.prisma.cause.create({
      data: { evenementId, type: dto.type, description: dto.description.trim(), pourquois },
    });
  }

  // §8.2 — plan d'action correctif : responsable choisi parmi les membres
  // actifs de l'établissement, échéance obligatoire.
  async ajouterActionCorrective(evenementId: string, dto: CreerActionCorrectiveDto, user: JwtAccessPayload) {
    const evenement = await this.chargerAvecGravite(evenementId, user);
    if (evenement.statut !== StatutEi.PLAN_ACTION) {
      throw new ConflictException("Les actions correctives s'ajoutent à l'étape « plan d'action »");
    }
    const responsable = await this.prisma.utilisateur.findFirst({
      where: { id: dto.responsableId, organisationId: evenement.organisationId, actif: true },
      select: { id: true },
    });
    if (!responsable) throw new BadRequestException("Le responsable doit être un membre actif de l'établissement");

    return this.prisma.actionCorrective.create({
      data: { evenementId, description: dto.description.trim(), responsableId: responsable.id, echeance: new Date(dto.echeance) },
      include: { responsable: { select: { id: true, nom: true, prenom: true } } },
    });
  }

  // §8.2 — suivi de la mise en œuvre (à faire / en cours / réalisée).
  async changerStatutAction(evenementId: string, actionId: string, dto: ChangerStatutActionDto, user: JwtAccessPayload) {
    const evenement = await this.chargerAvecGravite(evenementId, user);
    if (evenement.statut === StatutEi.CLOTURE) {
      throw new ConflictException("Événement clôturé : les actions ne peuvent plus être modifiées");
    }
    const action = await this.prisma.actionCorrective.findUnique({ where: { id: actionId } });
    if (!action || action.evenementId !== evenementId) {
      throw new NotFoundException("Action corrective introuvable");
    }
    return this.prisma.actionCorrective.update({ where: { id: actionId }, data: { statut: dto.statut } });
  }

  // §8.2 / §8.5 — transitions qualifié → en analyse → plan d'action → clôturé.
  // La qualification passe par `qualifier` (elle porte la gravité confirmée).
  async changerStatut(id: string, dto: ChangerStatutEiDto, user: JwtAccessPayload) {
    const evenement = await this.chargerAvecGravite(id, user);
    if (dto.statut === StatutEi.QUALIFIE || dto.statut === StatutEi.DECLARE) {
      throw new BadRequestException("La qualification se fait par l'action « Qualifier »");
    }
    if (ORDRE_STATUT_EI[dto.statut] !== ORDRE_STATUT_EI[evenement.statut] + 1) {
      throw new ConflictException(
        `Transition invalide : un EI ${evenement.statut} ne peut passer qu'à l'étape suivante du circuit`,
      );
    }

    if (dto.statut === StatutEi.PLAN_ACTION) {
      const nombreCauses = await this.prisma.cause.count({ where: { evenementId: id } });
      if (nombreCauses === 0) {
        throw new ConflictException("Documentez au moins une cause avant de passer au plan d'action");
      }
    }
    if (dto.statut === StatutEi.CLOTURE) {
      const actions = await this.prisma.actionCorrective.findMany({ where: { evenementId: id }, select: { statut: true } });
      if (actions.length === 0 || actions.some((a) => a.statut !== StatutActionCorrective.REALISEE)) {
        throw new ConflictException("Clôture impossible : toutes les actions correctives doivent être réalisées");
      }
    }

    const [misAJour] = await this.prisma.$transaction([
      this.prisma.evenementIndesirable.update({
        where: { id },
        data: { statut: dto.statut, dateCloture: dto.statut === StatutEi.CLOTURE ? new Date() : undefined },
        include: INCLUSION_LISTE,
      }),
      this.prisma.evenementTransition.create({
        data: { evenementId: id, ancienStatut: evenement.statut, nouveauStatut: dto.statut, utilisateurId: user.sub },
      }),
      ...(dto.statut === StatutEi.CLOTURE
        ? [
            // §13.2 — clôture d'EI journalisée dans le journal d'audit.
            this.prisma.journalAudit.create({
              data: {
                organisationId: evenement.organisationId,
                utilisateurId: user.sub,
                action: "ei.cloturer",
                entite: "EvenementIndesirable",
                entiteId: id,
                donneesAvant: { statut: evenement.statut },
                donneesApres: { statut: StatutEi.CLOTURE },
              },
            }),
          ]
        : []),
    ]);
    return misAJour;
  }

  // §13.4 — une fiche EI n'est jamais supprimée ; seule une correction tracée
  // (horodatée, motif, auteur, valeurs avant/après) est possible.
  async corriger(id: string, dto: CorrigerEiDto, user: JwtAccessPayload) {
    const evenement = await this.chargerAvecGravite(id, user);
    const data: Prisma.EvenementIndesirableUncheckedUpdateInput = {};
    const avant: Record<string, unknown> = {};
    const apres: Record<string, unknown> = {};

    if (dto.description !== undefined && dto.description.trim() !== evenement.description) {
      avant.description = evenement.description;
      apres.description = data.description = dto.description.trim();
    }
    if (dto.personnesImpliquees !== undefined && dto.personnesImpliquees.trim() !== evenement.personnesImpliquees) {
      avant.personnesImpliquees = evenement.personnesImpliquees;
      apres.personnesImpliquees = data.personnesImpliquees = dto.personnesImpliquees.trim();
    }
    if (dto.dateSurvenue !== undefined) {
      const nouvelle = new Date(dto.dateSurvenue);
      // Comparaison à la minute : le formulaire ne saisit pas les secondes.
      if (Math.floor(nouvelle.getTime() / 60_000) !== Math.floor(evenement.dateSurvenue.getTime() / 60_000)) {
        avant.dateSurvenue = evenement.dateSurvenue.toISOString();
        apres.dateSurvenue = nouvelle.toISOString();
        data.dateSurvenue = nouvelle;
      }
    }
    if (dto.lieu !== undefined && (dto.lieu.trim() || null) !== evenement.lieu) {
      avant.lieu = evenement.lieu;
      apres.lieu = data.lieu = dto.lieu.trim() || null;
    }
    if (dto.serviceId !== undefined && (dto.serviceId || null) !== evenement.serviceId) {
      const serviceId = dto.serviceId ? await this.verifierService(evenement.organisationId, dto.serviceId) : null;
      avant.serviceId = evenement.serviceId;
      apres.serviceId = data.serviceId = serviceId;
    }
    if (Object.keys(apres).length === 0) {
      throw new BadRequestException("Aucune modification à enregistrer");
    }
    if (!(data.serviceId ?? evenement.serviceId) && !((data.lieu as string | null | undefined) ?? evenement.lieu)) {
      throw new BadRequestException("Indiquez le service ou le lieu concerné");
    }

    const [misAJour] = await this.prisma.$transaction([
      this.prisma.evenementIndesirable.update({ where: { id }, data, include: INCLUSION_LISTE }),
      this.prisma.correctionEi.create({
        data: {
          evenementId: id,
          auteurId: user.sub,
          motif: dto.motif.trim(),
          valeursAvant: avant as Prisma.InputJsonValue,
          valeursApres: apres as Prisma.InputJsonValue,
        },
      }),
    ]);
    return misAJour;
  }

  // 8.13 — pièce jointe (upload Cloudinary, §11.1).
  async ajouterPieceJointe(
    evenementId: string,
    fichier: { buffer: Buffer; mimetype: string; originalname: string; size: number },
    user: JwtAccessPayload,
  ) {
    await this.chargerAvecGravite(evenementId, user);
    const { url, cloudinaryId } = await this.cloudinary.uploadBuffer(fichier.buffer, fichier.mimetype, fichier.originalname);
    return this.prisma.pieceJointe.create({
      data: {
        evenementId,
        url,
        cloudinaryId,
        nomFichier: fichier.originalname,
        typeMime: fichier.mimetype,
        tailleOctets: fichier.size,
      },
    });
  }

  // §8.3 — vue d'ensemble par typologie, gravité, service et statut ; délai
  // moyen de traitement et taux de clôture.
  async tableauDeBord(user: JwtAccessPayload) {
    const organisationId = this.exigerOrganisation(user);
    const evenements = await this.prisma.evenementIndesirable.findMany({
      where: { organisationId },
      select: {
        statut: true,
        serviceId: true,
        typeEiId: true,
        niveauGraviteId: true,
        dateDeclaration: true,
        dateCloture: true,
      },
    });

    const parStatut: Record<string, number> = {};
    const parGravite: Record<string, number> = {};
    const parService: Record<string, number> = {};
    const parType: Record<string, number> = {};
    let sommeDelaisClotureJours = 0;
    let nombreClotures = 0;

    for (const e of evenements) {
      parStatut[e.statut] = (parStatut[e.statut] ?? 0) + 1;
      if (e.niveauGraviteId) parGravite[e.niveauGraviteId] = (parGravite[e.niveauGraviteId] ?? 0) + 1;
      if (e.serviceId) parService[e.serviceId] = (parService[e.serviceId] ?? 0) + 1;
      if (e.typeEiId) parType[e.typeEiId] = (parType[e.typeEiId] ?? 0) + 1;
      if (e.dateCloture) {
        nombreClotures++;
        sommeDelaisClotureJours += (e.dateCloture.getTime() - e.dateDeclaration.getTime()) / 86_400_000;
      }
    }

    return {
      total: evenements.length,
      parStatut,
      parGravite,
      parService,
      parType,
      tauxCloture: evenements.length ? Math.round((nombreClotures / evenements.length) * 10000) / 100 : 0,
      delaiMoyenClotureJours: nombreClotures ? Math.round((sommeDelaisClotureJours / nombreClotures) * 10) / 10 : null,
    };
  }

  // §8.3 — historique complet et export sur une période donnée (date de survenue).
  async exporter(query: ExportEiQueryDto, user: JwtAccessPayload) {
    const organisationId = this.exigerOrganisation(user);
    return this.prisma.evenementIndesirable.findMany({
      where: {
        organisationId,
        dateSurvenue: {
          gte: query.debut ? new Date(query.debut) : undefined,
          lte: query.fin ? new Date(`${query.fin.slice(0, 10)}T23:59:59.999Z`) : undefined,
        },
      },
      include: { ...INCLUSION_LISTE, causes: true, actionsCorrectives: true },
      orderBy: { dateSurvenue: "asc" },
    });
  }

  // §8.5 — même mécanisme d'événement / notification que le module NEWS.
  private publierGraviteElevee(evenementId: string, organisationId: string, gravite: string): void {
    this.evenements.publier("ei.gravite-elevee", { evenementId, organisationId, gravite });
  }

  private async verifierNiveauGravite(id: string) {
    const niveau = await this.prisma.niveauGraviteEi.findUnique({ where: { id } });
    if (!niveau || !niveau.actif) throw new BadRequestException("Niveau de gravité inconnu ou désactivé");
    return niveau;
  }

  private async verifierTypeEi(id: string) {
    const type = await this.prisma.typeEi.findUnique({ where: { id } });
    if (!type || !type.actif) throw new BadRequestException("Type d'événement inconnu ou désactivé");
  }

  private async verifierCritere(id: string) {
    const critere = await this.prisma.critere.findUnique({ where: { id }, select: { id: true } });
    if (!critere) throw new BadRequestException("Critère d'auto-évaluation inconnu");
  }

  private async verifierService(organisationId: string, serviceId: string): Promise<string> {
    const service = await this.prisma.service.findFirst({ where: { id: serviceId, organisationId } });
    if (!service) throw new NotFoundException("Service introuvable");
    if (!service.actif) throw new BadRequestException("Ce service est désactivé");
    return service.id;
  }

  private exigerOrganisation(user: JwtAccessPayload): string {
    if (!user.organisationId) {
      throw new ForbiddenException("Réservé aux comptes organisation");
    }
    return user.organisationId;
  }

  private async chargerAvecGravite(id: string, user: JwtAccessPayload) {
    const evenement = await this.prisma.evenementIndesirable.findUnique({ where: { id }, include: { niveauGravite: true } });
    this.verifierAppartenance(evenement, user);
    return evenement;
  }

  // RM7 — 404 (jamais 403) pour ne pas révéler l'existence d'un EI d'une autre organisation.
  private verifierAppartenance<T extends { organisationId: string } | null>(
    evenement: T,
    user: JwtAccessPayload,
  ): asserts evenement is NonNullable<T> {
    if (!evenement || evenement.organisationId !== user.organisationId) {
      throw new NotFoundException("Événement indésirable introuvable");
    }
  }
}
