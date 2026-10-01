import { Body, Controller, Get, Param, Post, Put, Query, Res } from "@nestjs/common";
import type { Response } from "express";
import { SessionsEvaluationService } from "./sessions-evaluation.service.js";
import { DemarrerSessionDto } from "./dto/demarrer-session.dto.js";
import { EnregistrerReponseDto } from "./dto/enregistrer-reponse.dto.js";
import { EvolutionQueryDto, ListSessionsQueryDto } from "./dto/list-sessions-query.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

// 6.9 — réservé aux comptes organisation (responsable_compte, resp_qualite),
// conformément à la matrice de permissions du CDC (§1.5).
@Roles(RoleUtilisateur.RESPONSABLE_COMPTE, RoleUtilisateur.RESP_QUALITE)
@Controller("sessions-evaluation")
export class SessionsEvaluationController {
  constructor(private readonly sessionsService: SessionsEvaluationService) {}

  @Post()
  demarrer(@Body() dto: DemarrerSessionDto, @CurrentUser() user: JwtAccessPayload) {
    return this.sessionsService.demarrer(dto, user);
  }

  @Get()
  lister(@Query() query: ListSessionsQueryDto, @CurrentUser() user: JwtAccessPayload) {
    return this.sessionsService.lister(query, user);
  }

  @Get("evolution")
  evolution(@Query() query: EvolutionQueryDto, @CurrentUser() user: JwtAccessPayload) {
    return this.sessionsService.evolution(query, user);
  }

  @Get(":id")
  obtenir(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.sessionsService.obtenir(id, user);
  }

  @Put(":id/reponses/:elementMesurableId")
  enregistrerReponse(
    @Param("id") id: string,
    @Param("elementMesurableId") elementMesurableId: string,
    @Body() dto: EnregistrerReponseDto,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    return this.sessionsService.enregistrerReponse(id, elementMesurableId, dto, user);
  }

  @Post(":id/soumettre")
  soumettre(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.sessionsService.soumettre(id, user);
  }

  @Get(":id/resultats")
  resultats(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.sessionsService.resultats(id, user);
  }

  // §6.4 — état de génération du rapport (EN_COURS / DISPONIBLE / ECHEC).
  @Get(":id/rapport")
  async etatRapport(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    const { statut, genereLe } = await this.sessionsService.rapportPdf(id, user);
    return { statut, genereLe };
  }

  // §6.4 — téléchargement du rapport PDF (jamais d'URL publique).
  @Get(":id/rapport.pdf")
  async telechargerRapport(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload, @Res() res: Response) {
    const rapport = await this.sessionsService.rapportPdf(id, user);
    if (rapport.statut !== "DISPONIBLE" || !rapport.contenu) {
      res.status(409).json({ message: "Le rapport n'est pas encore disponible", statut: rapport.statut });
      return;
    }
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="rapport-auto-evaluation-${id}.pdf"`,
    });
    res.send(Buffer.from(rapport.contenu));
  }
}
