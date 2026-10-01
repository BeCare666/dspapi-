import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { PatientsService } from "./patients.service.js";
import { CreatePatientDto } from "./dto/create-patient.dto.js";
import { SaisirMesureDto } from "./dto/saisir-mesure.dto.js";
import { CorrigerMesureDto } from "./dto/corriger-mesure.dto.js";
import { ParametrageNewsService } from "./parametrage-news.service.js";
import { ListPatientsQueryDto } from "./dto/list-patients-query.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { ModuleMetier, RoleUtilisateur } from "../generated/prisma/enums.js";
import { ModuleAbonne } from "../abonnements/acces-module.guard.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

// 7.10 — module NEWS réservé au personnel soignant et à l'encadrement qualité.
@Roles(RoleUtilisateur.PERSONNEL_SOIGNANT, RoleUtilisateur.RESP_QUALITE, RoleUtilisateur.RESPONSABLE_COMPTE)
// §5 — accès soumis au statut d'abonnement NEWS (lecture / écriture).
@ModuleAbonne(ModuleMetier.NEWS)
@Controller("patients")
export class PatientsController {
  constructor(
    private readonly patientsService: PatientsService,
    private readonly parametrageNews: ParametrageNewsService,
  ) {}

  // §7.3 — seuils et fréquences de surveillance en vigueur (affichage).
  @Get("parametrage-news")
  parametrage() {
    return this.parametrageNews.obtenir();
  }

  @Post()
  creer(@Body() dto: CreatePatientDto, @CurrentUser() user: JwtAccessPayload) {
    return this.patientsService.creer(dto, user);
  }

  @Get()
  lister(@Query() query: ListPatientsQueryDto, @CurrentUser() user: JwtAccessPayload) {
    return this.patientsService.lister(query, user);
  }

  @Get(":id")
  obtenir(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.patientsService.obtenir(id, user);
  }

  @Post(":id/cloturer")
  cloturer(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.patientsService.cloturer(id, user);
  }

  @Post(":id/mesures")
  saisirMesure(@Param("id") id: string, @Body() dto: SaisirMesureDto, @CurrentUser() user: JwtAccessPayload) {
    return this.patientsService.saisirMesure(id, dto, user);
  }

  // §13.4 — correction tracée d'une mesure (jamais de suppression).
  @Patch(":id/mesures/:mesureId")
  corrigerMesure(
    @Param("id") id: string,
    @Param("mesureId") mesureId: string,
    @Body() dto: CorrigerMesureDto,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    return this.patientsService.corrigerMesure(id, mesureId, dto, user);
  }

  @Get(":id/mesures")
  historiqueMesures(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.patientsService.historiqueMesures(id, user);
  }

  @Get(":id/export")
  exporter(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.patientsService.exporter(id, user);
  }
}
