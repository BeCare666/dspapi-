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
import { Body, Controller, ForbiddenException, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { OrganisationsService } from "./organisations.service.js";
import { ListOrganisationsQueryDto } from "./dto/list-organisations-query.dto.js";
import { ModifierOrganisationDto } from "./dto/modifier-organisation.dto.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Permissions } from "../auth/decorators/permissions.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
let OrganisationsController = class OrganisationsController {
    organisationsService;
    constructor(organisationsService) {
        this.organisationsService = organisationsService;
    }
    moi(user) {
        if (!user.organisationId) {
            throw new ForbiddenException("Réservé aux comptes organisation");
        }
        return this.organisationsService.obtenir(user.organisationId);
    }
    modifierMesInfos(dto, user) {
        if (!user.organisationId) {
            throw new ForbiddenException("Réservé aux comptes organisation");
        }
        return this.organisationsService.modifierMesInfos(user.organisationId, dto, user.sub);
    }
    lister(query) {
        return this.organisationsService.lister(query);
    }
    obtenirDetailAdmin(id) {
        return this.organisationsService.obtenirDetailAdmin(id);
    }
    activer(id, user) {
        return this.organisationsService.activer(id, user.sub);
    }
    desactiver(id, user) {
        return this.organisationsService.desactiver(id, user.sub);
    }
};
__decorate([
    Get("me"),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrganisationsController.prototype, "moi", null);
__decorate([
    Roles(RoleUtilisateur.RESPONSABLE_COMPTE),
    Patch("me"),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ModifierOrganisationDto, Object]),
    __metadata("design:returntype", void 0)
], OrganisationsController.prototype, "modifierMesInfos", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Permissions("ORGANISATIONS_READ"),
    Get(),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListOrganisationsQueryDto]),
    __metadata("design:returntype", void 0)
], OrganisationsController.prototype, "lister", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Permissions("ORGANISATIONS_READ"),
    Get(":id"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrganisationsController.prototype, "obtenirDetailAdmin", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Permissions("ORGANISATIONS_MANAGE"),
    HttpCode(HttpStatus.OK),
    Post(":id/activer"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrganisationsController.prototype, "activer", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Permissions("ORGANISATIONS_MANAGE"),
    HttpCode(HttpStatus.OK),
    Post(":id/desactiver"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrganisationsController.prototype, "desactiver", null);
OrganisationsController = __decorate([
    Controller("organisations"),
    __metadata("design:paramtypes", [OrganisationsService])
], OrganisationsController);
export { OrganisationsController };
//# sourceMappingURL=organisations.controller.js.map