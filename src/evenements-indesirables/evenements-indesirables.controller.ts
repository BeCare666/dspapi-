import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import type { Response } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import { EvenementsIndesirablesService } from "./evenements-indesirables.service.js";
import { evenementsIndesirablesVersCsv } from "./export-csv.util.js";
import { DeclarerEiDto } from "./dto/declarer-ei.dto.js";
import { QualifierEiDto } from "./dto/qualifier-ei.dto.js";
import { CreerCauseDto } from "./dto/creer-cause.dto.js";
import { CreerActionCorrectiveDto } from "./dto/creer-action-corrective.dto.js";
import { ChangerStatutActionDto } from "./dto/changer-statut-action.dto.js";
import { ChangerStatutEiDto } from "./dto/changer-statut-ei.dto.js";
import { ListEiQueryDto } from "./dto/list-ei-query.dto.js";
import { ExportEiQueryDto } from "./dto/export-ei-query.dto.js";
import { CorrigerEiDto } from "./dto/corriger-ei.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { ModuleMetier, RoleUtilisateur } from "../generated/prisma/enums.js";
import { ModuleAbonne } from "../abonnements/acces-module.guard.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

const ROLES_TRAITEMENT = [RoleUtilisateur.RESP_QUALITE, RoleUtilisateur.RESPONSABLE_COMPTE] as const;

const TAILLE_MAX_PIECE_JOINTE_OCTETS = 10 * 1024 * 1024; // 10 Mo
const TYPES_MIME_AUTORISES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
  "text/plain",
]);

// §5 — accès soumis au statut d'abonnement EI (lecture / écriture).
@ModuleAbonne(ModuleMetier.EI)
@Controller("evenements-indesirables")
export class EvenementsIndesirablesController {
  constructor(private readonly evenementsService: EvenementsIndesirablesService) {}

  // 8.14 — déclaration large : tout compte organisation, pas de restriction de rôle ici.
  @Post()
  declarer(@Body() dto: DeclarerEiDto, @CurrentUser() user: JwtAccessPayload) {
    return this.evenementsService.declarer(dto, user);
  }

  @Get()
  lister(@Query() query: ListEiQueryDto, @CurrentUser() user: JwtAccessPayload) {
    return this.evenementsService.lister(query, user);
  }

  @Roles(...ROLES_TRAITEMENT)
  @Get("file-attente")
  fileAttente(@CurrentUser() user: JwtAccessPayload) {
    return this.evenementsService.fileAttenteQualification(user);
  }

  @Roles(...ROLES_TRAITEMENT)
  @Get("tableau-de-bord")
  tableauDeBord(@CurrentUser() user: JwtAccessPayload) {
    return this.evenementsService.tableauDeBord(user);
  }

  @Roles(...ROLES_TRAITEMENT)
  @Get("export")
  exporter(@Query() query: ExportEiQueryDto, @CurrentUser() user: JwtAccessPayload) {
    return this.evenementsService.exporter(query, user);
  }

  // D11 — même méthode de service, même RBAC/isolation organisationnelle que
  // l'export JSON existant ; seul le format de sortie change.
  @Roles(...ROLES_TRAITEMENT)
  @Get("export.csv")
  async exporterCsv(
    @Query() query: ExportEiQueryDto,
    @CurrentUser() user: JwtAccessPayload,
    @Res() res: Response,
  ) {
    const evenements = await this.evenementsService.exporter(query, user);
    const csv = evenementsIndesirablesVersCsv(evenements);
    res.set({
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="evenements-indesirables-${Date.now()}.csv"`,
    });
    res.send(csv);
  }

  @Get(":id")
  obtenir(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.evenementsService.obtenir(id, user);
  }

  @Roles(...ROLES_TRAITEMENT)
  @Patch(":id/qualifier")
  qualifier(@Param("id") id: string, @Body() dto: QualifierEiDto, @CurrentUser() user: JwtAccessPayload) {
    return this.evenementsService.qualifier(id, dto, user);
  }

  @Roles(...ROLES_TRAITEMENT)
  @Post(":id/causes")
  ajouterCause(@Param("id") id: string, @Body() dto: CreerCauseDto, @CurrentUser() user: JwtAccessPayload) {
    return this.evenementsService.ajouterCause(id, dto, user);
  }

  @Roles(...ROLES_TRAITEMENT)
  @Post(":id/actions-correctives")
  ajouterActionCorrective(
    @Param("id") id: string,
    @Body() dto: CreerActionCorrectiveDto,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    return this.evenementsService.ajouterActionCorrective(id, dto, user);
  }

  @Roles(...ROLES_TRAITEMENT)
  @Patch(":id/actions-correctives/:actionId")
  changerStatutAction(
    @Param("id") id: string,
    @Param("actionId") actionId: string,
    @Body() dto: ChangerStatutActionDto,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    return this.evenementsService.changerStatutAction(id, actionId, dto, user);
  }

  @Roles(...ROLES_TRAITEMENT)
  @Patch(":id/statut")
  changerStatut(@Param("id") id: string, @Body() dto: ChangerStatutEiDto, @CurrentUser() user: JwtAccessPayload) {
    return this.evenementsService.changerStatut(id, dto, user);
  }

  // §13.4 — correction tracée de la fiche (motif obligatoire).
  @Roles(...ROLES_TRAITEMENT)
  @Patch(":id/corriger")
  corriger(@Param("id") id: string, @Body() dto: CorrigerEiDto, @CurrentUser() user: JwtAccessPayload) {
    return this.evenementsService.corriger(id, dto, user);
  }

  @Roles(...ROLES_TRAITEMENT)
  @Post(":id/pieces-jointes")
  @UseInterceptors(
    FileInterceptor("fichier", {
      limits: { fileSize: TAILLE_MAX_PIECE_JOINTE_OCTETS },
      fileFilter: (_req, file, callback) => {
        if (!TYPES_MIME_AUTORISES.has(file.mimetype)) {
          callback(new BadRequestException(`Type de fichier non autorisé : ${file.mimetype}`), false);
          return;
        }
        callback(null, true);
      },
    }),
  )
  ajouterPieceJointe(
    @Param("id") id: string,
    @UploadedFile() fichier: Express.Multer.File,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    return this.evenementsService.ajouterPieceJointe(id, fichier, user);
  }
}
