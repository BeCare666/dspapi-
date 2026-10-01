var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { BadRequestException, Body, Controller, Get, Param, Patch, Post, Query, Res, UploadedFile, UseInterceptors, } from "@nestjs/common";
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
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
const ROLES_TRAITEMENT = [RoleUtilisateur.RESP_QUALITE, RoleUtilisateur.RESPONSABLE_COMPTE];
const TAILLE_MAX_PIECE_JOINTE_OCTETS = 10 * 1024 * 1024;
const TYPES_MIME_AUTORISES = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/pdf",
    "text/plain",
]);
let EvenementsIndesirablesController = class EvenementsIndesirablesController {
    evenementsService;
    constructor(evenementsService) {
        this.evenementsService = evenementsService;
    }
    declarer(dto, user) {
        return this.evenementsService.declarer(dto, user);
    }
    lister(query, user) {
        return this.evenementsService.lister(query, user);
    }
    fileAttente(user) {
        return this.evenementsService.fileAttenteQualification(user);
    }
    tableauDeBord(user) {
        return this.evenementsService.tableauDeBord(user);
    }
    exporter(query, user) {
        return this.evenementsService.exporter(query, user);
    }
    async exporterCsv(query, user, res) {
        const evenements = await this.evenementsService.exporter(query, user);
        const csv = evenementsIndesirablesVersCsv(evenements);
        res.set({
            "Content-Type": "text/csv; charset=utf-8",
            "Content-Disposition": `attachment; filename="evenements-indesirables-${Date.now()}.csv"`,
        });
        res.send(csv);
    }
    obtenir(id, user) {
        return this.evenementsService.obtenir(id, user);
    }
    qualifier(id, dto, user) {
        return this.evenementsService.qualifier(id, dto, user);
    }
    ajouterCause(id, dto, user) {
        return this.evenementsService.ajouterCause(id, dto, user);
    }
    ajouterActionCorrective(id, dto, user) {
        return this.evenementsService.ajouterActionCorrective(id, dto, user);
    }
    changerStatutAction(id, actionId, dto, user) {
        return this.evenementsService.changerStatutAction(id, actionId, dto, user);
    }
    changerStatut(id, dto, user) {
        return this.evenementsService.changerStatut(id, dto, user);
    }
    ajouterPieceJointe(id, fichier, user) {
        return this.evenementsService.ajouterPieceJointe(id, fichier, user);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DeclarerEiDto, Object]),
    __metadata("design:returntype", void 0)
], EvenementsIndesirablesController.prototype, "declarer", null);
__decorate([
    Get(),
    __param(0, Query()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListEiQueryDto, Object]),
    __metadata("design:returntype", void 0)
], EvenementsIndesirablesController.prototype, "lister", null);
__decorate([
    Roles(...ROLES_TRAITEMENT),
    Get("file-attente"),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EvenementsIndesirablesController.prototype, "fileAttente", null);
__decorate([
    Roles(...ROLES_TRAITEMENT),
    Get("tableau-de-bord"),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EvenementsIndesirablesController.prototype, "tableauDeBord", null);
__decorate([
    Roles(...ROLES_TRAITEMENT),
    Get("export"),
    __param(0, Query()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ExportEiQueryDto, Object]),
    __metadata("design:returntype", void 0)
], EvenementsIndesirablesController.prototype, "exporter", null);
__decorate([
    Roles(...ROLES_TRAITEMENT),
    Get("export.csv"),
    __param(0, Query()),
    __param(1, CurrentUser()),
    __param(2, Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ExportEiQueryDto, Object, Object]),
    __metadata("design:returntype", Promise)
], EvenementsIndesirablesController.prototype, "exporterCsv", null);
__decorate([
    Get(":id"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EvenementsIndesirablesController.prototype, "obtenir", null);
__decorate([
    Roles(...ROLES_TRAITEMENT),
    Patch(":id/qualifier"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, QualifierEiDto, Object]),
    __metadata("design:returntype", void 0)
], EvenementsIndesirablesController.prototype, "qualifier", null);
__decorate([
    Roles(...ROLES_TRAITEMENT),
    Post(":id/causes"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreerCauseDto, Object]),
    __metadata("design:returntype", void 0)
], EvenementsIndesirablesController.prototype, "ajouterCause", null);
__decorate([
    Roles(...ROLES_TRAITEMENT),
    Post(":id/actions-correctives"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreerActionCorrectiveDto, Object]),
    __metadata("design:returntype", void 0)
], EvenementsIndesirablesController.prototype, "ajouterActionCorrective", null);
__decorate([
    Roles(...ROLES_TRAITEMENT),
    Patch(":id/actions-correctives/:actionId"),
    __param(0, Param("id")),
    __param(1, Param("actionId")),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ChangerStatutActionDto, Object]),
    __metadata("design:returntype", void 0)
], EvenementsIndesirablesController.prototype, "changerStatutAction", null);
__decorate([
    Roles(...ROLES_TRAITEMENT),
    Patch(":id/statut"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ChangerStatutEiDto, Object]),
    __metadata("design:returntype", void 0)
], EvenementsIndesirablesController.prototype, "changerStatut", null);
__decorate([
    Roles(...ROLES_TRAITEMENT),
    Post(":id/pieces-jointes"),
    UseInterceptors(FileInterceptor("fichier", {
        limits: { fileSize: TAILLE_MAX_PIECE_JOINTE_OCTETS },
        fileFilter: (_req, file, callback) => {
            if (!TYPES_MIME_AUTORISES.has(file.mimetype)) {
                callback(new BadRequestException(`Type de fichier non autorisé : ${file.mimetype}`), false);
                return;
            }
            callback(null, true);
        },
    })),
    __param(0, Param("id")),
    __param(1, UploadedFile()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], EvenementsIndesirablesController.prototype, "ajouterPieceJointe", null);
EvenementsIndesirablesController = __decorate([
    Controller("evenements-indesirables"),
    __metadata("design:paramtypes", [EvenementsIndesirablesService])
], EvenementsIndesirablesController);
export { EvenementsIndesirablesController };
//# sourceMappingURL=evenements-indesirables.controller.js.map