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
import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { AlertesService } from "./alertes.service.js";
import { CreerInterventionDto } from "./dto/creer-intervention.dto.js";
import { ChangerStatutAlerteDto } from "./dto/changer-statut-alerte.dto.js";
import { ListAlertesQueryDto } from "./dto/list-alertes-query.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
let AlertesController = class AlertesController {
    alertesService;
    constructor(alertesService) {
        this.alertesService = alertesService;
    }
    lister(query, user) {
        return this.alertesService.lister(query, user);
    }
    obtenir(id, user) {
        return this.alertesService.obtenir(id, user);
    }
    ajouterIntervention(id, dto, user) {
        return this.alertesService.ajouterIntervention(id, dto, user);
    }
    changerStatut(id, dto, user) {
        return this.alertesService.changerStatut(id, dto, user);
    }
};
__decorate([
    Get(),
    __param(0, Query()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListAlertesQueryDto, Object]),
    __metadata("design:returntype", void 0)
], AlertesController.prototype, "lister", null);
__decorate([
    Get(":id"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AlertesController.prototype, "obtenir", null);
__decorate([
    Post(":id/interventions"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreerInterventionDto, Object]),
    __metadata("design:returntype", void 0)
], AlertesController.prototype, "ajouterIntervention", null);
__decorate([
    Patch(":id/statut"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ChangerStatutAlerteDto, Object]),
    __metadata("design:returntype", void 0)
], AlertesController.prototype, "changerStatut", null);
AlertesController = __decorate([
    Roles(RoleUtilisateur.PERSONNEL_SOIGNANT, RoleUtilisateur.RESP_QUALITE, RoleUtilisateur.RESPONSABLE_COMPTE),
    Controller("alertes"),
    __metadata("design:paramtypes", [AlertesService])
], AlertesController);
export { AlertesController };
//# sourceMappingURL=alertes.controller.js.map