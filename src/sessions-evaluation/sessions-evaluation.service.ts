import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { grilleStructureInclude } from "../grilles/grilles.service.js";
import { StatutGrille, StatutRapportPdf, StatutSessionEvaluation } from "../generated/prisma/enums.js";
import type { Prisma, SessionEvaluation } from "../generated/prisma/client.js";
import { calculerScore } from "./scoring.util.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
import type { DemarrerSessionDto } from "./dto/demarrer-session.dto.js";
import type { EnregistrerReponseDto } from "./dto/enregistrer-reponse.dto.js";
import type { EvolutionQueryDto, ListSessionsQueryDto } from "./dto/list-sessions-query.dto.js";

const sessionAvecStructureInclude = {
  grille: { include: grilleStructureInclude },
  reponses: true,
} as const;

@Injectable()
export class SessionsEvaluationService {
  constructor(private readonly prisma: PrismaService) {}

  async demarrer(dto: DemarrerSessionDto, user: JwtAccessPayload) {
    const organisationId = this.exigerOrganisation(user);

    const grille = await this.prisma.grille.findUnique({ where: { id: dto.grilleId } });
    if (!grille || grille.statut !== StatutGrille.PUBLIEE) {
      throw new NotFoundException("Grille introuvable ou non publiée");
    }

    const organisation = await this.prisma.organisation.findUniqueOrThrow({ where: { id: organisationId } });
    if (grille.type !== organisation.type) {
      throw new BadRequestException("Cette grille ne correspond pas au type de votre établissement");
    }

    return this.prisma.sessionEvaluation.create({
      data: { organisationId, grilleId: grille.id, demarreeParId: user.sub },
      include: sessionAvecStructureInclude,
    });
  }

  async lister(query: ListSessionsQueryDto, user: JwtAccessPayload) {
    const organisationId = this.exigerOrganisation(user);
    return this.prisma.sessionEvaluation.findMany({
      where: { organisationId, statut: query.statut },
      include: { grille: { select: { id: true, nom: true, type: true, version: true } } },
      orderBy: { dateDebut: "desc" },
    });
  }

  async obtenir(sessionId: string, user: JwtAccessPayload) {
    const session = await this.prisma.sessionEvaluation.findUnique({
      where: { id: sessionId },
      include: sessionAvecStructureInclude,
    });
    this.verifierAppartenance(session, user);
    return session;
  }

  async enregistrerReponse(
    sessionId: string,
    elementMesurableId: string,
    dto: EnregistrerReponseDto,
    user: JwtAccessPayload,
  ) {
    const session = await this.prisma.sessionEvaluation.findUnique({ where: { id: sessionId } });
    this.verifierAppartenance(session, user);
    if (session.statut !== StatutSessionEvaluation.EN_COURS) {
      throw new ConflictException("Session déjà soumise, les réponses ne peuvent plus être modifiées.");
    }

    const element = await this.prisma.elementMesurable.findUnique({
      where: { id: elementMesurableId },
      include: { critere: { include: { norme: { include: { domaine: true } } } } },
    });
    if (!element || element.critere.norme.domaine.grilleId !== session.grilleId) {
      throw new NotFoundException("Élément mesurable introuvable pour cette grille");
    }

    const valeur = dto.valeur as Prisma.InputJsonValue;
    return this.prisma.reponse.upsert({
      where: { sessionId_elementMesurableId: { sessionId, elementMesurableId } },
      update: { valeur, commentaire: dto.commentaire },
      create: { sessionId, elementMesurableId, valeur, commentaire: dto.commentaire },
    });
  }

  async soumettre(sessionId: string, user: JwtAccessPayload) {
    const session = await this.prisma.sessionEvaluation.findUnique({
      where: { id: sessionId },
      include: sessionAvecStructureInclude,
    });
    this.verifierAppartenance(session, user);
    if (session.statut !== StatutSessionEvaluation.EN_COURS) {
      throw new ConflictException("Session déjà soumise");
    }

    const reponsesParElement = new Map(session.reponses.map((r) => [r.elementMesurableId, r.valeur]));
    const { scoreGlobal } = calculerScore(session.grille, reponsesParElement);

    // §6.6 — soumission (immuable ensuite) et mise en file d'attente du rapport
    // PDF dans la même transaction ; la génération est asynchrone
    // (RapportsPdfScheduler), l'interface n'est jamais bloquée.
    const [soumise] = await this.prisma.$transaction([
      this.prisma.sessionEvaluation.update({
        where: { id: sessionId },
        data: {
          statut: StatutSessionEvaluation.SOUMISE,
          dateSoumission: new Date(),
          soumiseParId: user.sub,
          scoreGlobal,
        },
      }),
      this.prisma.rapportPdf.create({ data: { sessionId, statut: StatutRapportPdf.EN_COURS } }),
    ]);
    return soumise;
  }

  async resultats(sessionId: string, user: JwtAccessPayload) {
    const session = await this.prisma.sessionEvaluation.findUnique({
      where: { id: sessionId },
      include: sessionAvecStructureInclude,
    });
    this.verifierAppartenance(session, user);
    if (session.statut !== StatutSessionEvaluation.SOUMISE) {
      throw new ConflictException("La session n'est pas encore soumise");
    }

    const reponsesParElement = new Map(session.reponses.map((r) => [r.elementMesurableId, r.valeur]));
    const score = calculerScore(session.grille, reponsesParElement);
    const [eiLies, rapport] = await Promise.all([
      this.eiLiesAuxCriteres(session.organisationId, score.criteresNonValides.map((c) => c.critereId)),
      this.prisma.rapportPdf.findUnique({ where: { sessionId }, select: { statut: true, genereLe: true } }),
    ]);
    return { ...score, eiLies, rapport };
  }

  // §8.4 — exemples concrets d'écarts terrain : EI de l'établissement rattachés
  // aux critères en écart. Sans effet sur le score (RM10).
  async eiLiesAuxCriteres(organisationId: string, critereIds: string[]) {
    if (critereIds.length === 0) return [];
    return this.prisma.evenementIndesirable.findMany({
      where: { organisationId, critereId: { in: critereIds } },
      select: {
        id: true,
        critereId: true,
        description: true,
        dateSurvenue: true,
        statut: true,
        niveauGravite: { select: { libelle: true, critique: true } },
      },
      orderBy: { dateSurvenue: "desc" },
    });
  }

  // §6.4 — rapport PDF : contenu servi uniquement après contrôle d'appartenance.
  async rapportPdf(sessionId: string, user: JwtAccessPayload) {
    const session = await this.prisma.sessionEvaluation.findUnique({ where: { id: sessionId } });
    this.verifierAppartenance(session, user);
    const rapport = await this.prisma.rapportPdf.findUnique({ where: { sessionId } });
    if (!rapport) throw new NotFoundException("Aucun rapport pour cette session");
    return rapport;
  }

  async evolution(query: EvolutionQueryDto, user: JwtAccessPayload) {
    const organisationId = this.exigerOrganisation(user);
    return this.prisma.sessionEvaluation.findMany({
      where: {
        organisationId,
        statut: StatutSessionEvaluation.SOUMISE,
        grille: query.grilleNom ? { nom: query.grilleNom } : undefined,
      },
      select: {
        id: true,
        dateSoumission: true,
        scoreGlobal: true,
        grille: { select: { nom: true, version: true } },
      },
      orderBy: { dateSoumission: "asc" },
    });
  }

  private exigerOrganisation(user: JwtAccessPayload): string {
    if (!user.organisationId) {
      throw new ForbiddenException("Réservé aux comptes organisation");
    }
    return user.organisationId;
  }

  // RM7 — isolation stricte par organisation_id : on répond 404 (et non 403) pour
  // ne pas révéler l'existence d'une session appartenant à une autre organisation.
  private verifierAppartenance<T extends SessionEvaluation | null>(
    session: T,
    user: JwtAccessPayload,
  ): asserts session is NonNullable<T> {
    if (!session || session.organisationId !== user.organisationId) {
      throw new NotFoundException("Session introuvable");
    }
  }
}
