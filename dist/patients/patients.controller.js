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
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { PatientsService } from "./patients.service.js";
import { CreatePatientDto } from "./dto/create-patient.dto.js";
import { SaisirMesureDto } from "./dto/saisir-mesure.dto.js";
import { ListPatientsQueryDto } from "./dto/list-patients-query.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
let PatientsController = class PatientsController {
    patientsService;
    constructor(patientsService) {
        this.patientsService = patientsService;
    }
    creer(dto, user) {
        return this.patientsService.creer(dto, user);
    }
    lister(query, user) {
        return this.patientsService.lister(query, user);
    }
    obtenir(id, user) {
        return this.patientsService.obtenir(id, user);
    }
    cloturer(id, user) {
        return this.patientsService.cloturer(id, user);
    }
    saisirMesure(id, dto, user) {
        return this.patientsService.saisirMesure(id, dto, user);
    }
    historiqueMesures(id, user) {
        return this.patientsService.historiqueMesures(id, user);
    }
    exporter(id, user) {
        return this.patientsService.exporter(id, user);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePatientDto, Object]),
    __metadata("design:returntype", void 0)
], PatientsController.prototype, "creer", null);
__decorate([
    Get(),
    __param(0, Query()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListPatientsQueryDto, Object]),
    __metadata("design:returntype", void 0)
], PatientsController.prototype, "lister", null);
__decorate([
    Get(":id"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PatientsController.prototype, "obtenir", null);
__decorate([
    Post(":id/cloturer"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PatientsController.prototype, "cloturer", null);
__decorate([
    Post(":id/mesures"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, SaisirMesureDto, Object]),
    __metadata("design:returntype", void 0)
], PatientsController.prototype, "saisirMesure", null);
__decorate([
    Get(":id/mesures"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PatientsController.prototype, "historiqueMesures", null);
__decorate([
    Get(":id/export"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PatientsController.prototype, "exporter", null);
PatientsController = __decorate([
    Roles(RoleUtilisateur.PERSONNEL_SOIGNANT, RoleUtilisateur.RESP_QUALITE, RoleUtilisateur.RESPONSABLE_COMPTE),
    Controller("patients"),
    __metadata("design:paramtypes", [PatientsService])
], PatientsController);
export { PatientsController };
//# sourceMappingURL=patients.controller.js.map