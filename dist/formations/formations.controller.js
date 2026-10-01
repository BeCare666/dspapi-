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
import { FormationsService } from "./formations.service.js";
import { CreateFormationDto } from "./dto/create-formation.dto.js";
import { Public } from "../auth/decorators/public.decorator.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
let FormationsController = class FormationsController {
    formationsService;
    constructor(formationsService) {
        this.formationsService = formationsService;
    }
    lister(inclureInactives) {
        return this.formationsService.lister(inclureInactives === "true");
    }
    obtenir(id) {
        return this.formationsService.obtenir(id);
    }
    creer(dto) {
        return this.formationsService.creer(dto);
    }
    mettreAJour(id, dto) {
        return this.formationsService.mettreAJour(id, dto);
    }
    desactiver(id) {
        return this.formationsService.desactiver(id);
    }
    reactiver(id) {
        return this.formationsService.reactiver(id);
    }
};
__decorate([
    Public(),
    Get(),
    __param(0, Query("inclureInactives")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormationsController.prototype, "lister", null);
__decorate([
    Public(),
    Get(":id"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormationsController.prototype, "obtenir", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateFormationDto]),
    __metadata("design:returntype", void 0)
], FormationsController.prototype, "creer", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Patch(":id"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateFormationDto]),
    __metadata("design:returntype", void 0)
], FormationsController.prototype, "mettreAJour", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Post(":id/desactiver"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormationsController.prototype, "desactiver", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Post(":id/reactiver"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormationsController.prototype, "reactiver", null);
FormationsController = __decorate([
    Controller("formations"),
    __metadata("design:paramtypes", [FormationsService])
], FormationsController);
export { FormationsController };
//# sourceMappingURL=formations.controller.js.map