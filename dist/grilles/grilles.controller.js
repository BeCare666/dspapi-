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
import { GrillesService } from "./grilles.service.js";
import { CreateGrilleDto } from "./dto/create-grille.dto.js";
import { ListGrillesQueryDto } from "./dto/list-grilles-query.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
let GrillesController = class GrillesController {
    grillesService;
    constructor(grillesService) {
        this.grillesService = grillesService;
    }
    lister(query, user) {
        return this.grillesService.lister(query, user.roles.includes(RoleUtilisateur.ADMIN_PLATEFORME));
    }
    obtenir(id, user) {
        return this.grillesService.obtenir(id, user.roles.includes(RoleUtilisateur.ADMIN_PLATEFORME));
    }
    creer(dto) {
        return this.grillesService.creer(dto);
    }
    mettreAJour(id, dto) {
        return this.grillesService.mettreAJour(id, dto);
    }
    publier(id) {
        return this.grillesService.publier(id);
    }
    archiver(id) {
        return this.grillesService.archiver(id);
    }
    nouvelleVersion(id) {
        return this.grillesService.nouvelleVersion(id);
    }
};
__decorate([
    Get(),
    __param(0, Query()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListGrillesQueryDto, Object]),
    __metadata("design:returntype", void 0)
], GrillesController.prototype, "lister", null);
__decorate([
    Get(":id"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GrillesController.prototype, "obtenir", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateGrilleDto]),
    __metadata("design:returntype", void 0)
], GrillesController.prototype, "creer", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Patch(":id"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateGrilleDto]),
    __metadata("design:returntype", void 0)
], GrillesController.prototype, "mettreAJour", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Post(":id/publier"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GrillesController.prototype, "publier", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Post(":id/archiver"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GrillesController.prototype, "archiver", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Post(":id/nouvelle-version"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GrillesController.prototype, "nouvelleVersion", null);
GrillesController = __decorate([
    Controller("grilles"),
    __metadata("design:paramtypes", [GrillesService])
], GrillesController);
export { GrillesController };
//# sourceMappingURL=grilles.controller.js.map