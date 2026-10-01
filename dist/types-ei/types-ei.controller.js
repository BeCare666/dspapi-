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
import { TypesEiService } from "./types-ei.service.js";
import { CreateTypeEiDto } from "./dto/create-type-ei.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
let TypesEiController = class TypesEiController {
    typesEiService;
    constructor(typesEiService) {
        this.typesEiService = typesEiService;
    }
    lister(inclureInactifs) {
        return this.typesEiService.lister(inclureInactifs === "true");
    }
    creer(dto) {
        return this.typesEiService.creer(dto);
    }
    desactiver(id) {
        return this.typesEiService.desactiver(id);
    }
    reactiver(id) {
        return this.typesEiService.reactiver(id);
    }
};
__decorate([
    Get(),
    __param(0, Query("inclureInactifs")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypesEiController.prototype, "lister", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTypeEiDto]),
    __metadata("design:returntype", void 0)
], TypesEiController.prototype, "creer", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Post(":id/desactiver"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypesEiController.prototype, "desactiver", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Post(":id/reactiver"),
    __param(0, Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypesEiController.prototype, "reactiver", null);
TypesEiController = __decorate([
    Controller("types-ei"),
    __metadata("design:paramtypes", [TypesEiService])
], TypesEiController);
export { TypesEiController };
//# sourceMappingURL=types-ei.controller.js.map