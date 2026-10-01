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
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch } from "@nestjs/common";
import { ParametresService } from "./parametres.service.js";
import { ModifierParametreDto } from "./dto/modifier-parametre.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Permissions } from "../auth/decorators/permissions.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
let ParametresController = class ParametresController {
    parametresService;
    constructor(parametresService) {
        this.parametresService = parametresService;
    }
    listerTous() {
        return this.parametresService.listerTous();
    }
    modifier(cle, dto, user) {
        return this.parametresService.modifier(cle, dto.valeur, user.sub);
    }
};
__decorate([
    Permissions("PARAMETRES_READ"),
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParametresController.prototype, "listerTous", null);
__decorate([
    Permissions("PARAMETRES_MANAGE"),
    HttpCode(HttpStatus.OK),
    Patch(":cle"),
    __param(0, Param("cle")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ModifierParametreDto, Object]),
    __metadata("design:returntype", void 0)
], ParametresController.prototype, "modifier", null);
ParametresController = __decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Controller("parametres"),
    __metadata("design:paramtypes", [ParametresService])
], ParametresController);
export { ParametresController };
//# sourceMappingURL=parametres.controller.js.map