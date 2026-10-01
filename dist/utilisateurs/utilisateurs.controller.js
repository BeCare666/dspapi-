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
import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query } from "@nestjs/common";
import { UtilisateursService } from "./utilisateurs.service.js";
import { ListUtilisateursQueryDto } from "./dto/list-utilisateurs-query.dto.js";
import { AjouterRoleDto } from "./dto/ajouter-role.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Permissions } from "../auth/decorators/permissions.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
let UtilisateursController = class UtilisateursController {
    utilisateursService;
    constructor(utilisateursService) {
        this.utilisateursService = utilisateursService;
    }
    lister(query) {
        return this.utilisateursService.lister(query);
    }
    obtenir(id) {
        return this.utilisateursService.obtenir(id);
    }
    desactiver(id, user) {
        return this.utilisateursService.desactiver(id, user.sub);
    }
    reactiver(id, user) {
        return this.utilisateursService.reactiver(id, user.sub);
    }
    listerSessions(id) {
        return this.utilisateursService.listerSessions(id);
    }
    revoquerSession(id, sessionId) {
        return this.utilisateursService.revoquerSession(id, sessionId);
    }
    ajouterRole(id, dto, user) {
        return this.utilisateursService.ajouterRole(id, dto.role, user.sub);
    }
    retirerRole(id, role, user) {
        if (!Object.values(RoleUtilisateur).includes(role)) {
            throw new BadRequestException(`Rôle inconnu : ${role}`);
        }
        return this.utilisateursService.retirerRole(id, role, user.sub);
    }
};
__decorate([
    Permissions("USERS_READ"),
    Get(),
    __param(0, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListUtilisateursQueryDto]),
    __metadata("design:returntype", void 0)
], UtilisateursController.prototype, "lister", null);
__decorate([
    Permissions("USERS_READ"),
    Get(":id"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UtilisateursController.prototype, "obtenir", null);
__decorate([
    Permissions("USERS_DISABLE"),
    HttpCode(HttpStatus.OK),
    Post(":id/desactiver"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UtilisateursController.prototype, "desactiver", null);
__decorate([
    Permissions("USERS_UPDATE"),
    HttpCode(HttpStatus.OK),
    Post(":id/reactiver"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UtilisateursController.prototype, "reactiver", null);
__decorate([
    Permissions("USERS_READ"),
    Get(":id/sessions"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UtilisateursController.prototype, "listerSessions", null);
__decorate([
    Permissions("USERS_UPDATE"),
    HttpCode(HttpStatus.OK),
    Post(":id/sessions/:sessionId/revoquer"),
    __param(0, Param("id")),
    __param(1, Param("sessionId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UtilisateursController.prototype, "revoquerSession", null);
__decorate([
    Permissions("USERS_UPDATE"),
    HttpCode(HttpStatus.OK),
    Post(":id/roles"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AjouterRoleDto, Object]),
    __metadata("design:returntype", void 0)
], UtilisateursController.prototype, "ajouterRole", null);
__decorate([
    Permissions("USERS_UPDATE"),
    HttpCode(HttpStatus.OK),
    Delete(":id/roles/:role"),
    __param(0, Param("id")),
    __param(1, Param("role")),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], UtilisateursController.prototype, "retirerRole", null);
UtilisateursController = __decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Controller("utilisateurs"),
    __metadata("design:paramtypes", [UtilisateursService])
], UtilisateursController);
export { UtilisateursController };
//# sourceMappingURL=utilisateurs.controller.js.map