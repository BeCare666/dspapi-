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
import { Controller, Get, Param, ParseEnumPipe, Post } from "@nestjs/common";
import { AbonnementsService } from "./abonnements.service.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { ModuleMetier, RoleUtilisateur } from "../generated/prisma/enums.js";
let AbonnementsController = class AbonnementsController {
    abonnementsService;
    constructor(abonnementsService) {
        this.abonnementsService = abonnementsService;
    }
    async monStatut(module, user) {
        if (!user.organisationId)
            return null;
        return this.abonnementsService.obtenirStatut(user.organisationId, module);
    }
    activer(organisationId, module) {
        return this.abonnementsService.activerManuellement(organisationId, module);
    }
};
__decorate([
    Get(":module"),
    __param(0, Param("module", new ParseEnumPipe(ModuleMetier))),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AbonnementsController.prototype, "monStatut", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Post(":organisationId/:module/activer"),
    __param(0, Param("organisationId")),
    __param(1, Param("module", new ParseEnumPipe(ModuleMetier))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AbonnementsController.prototype, "activer", null);
AbonnementsController = __decorate([
    Controller("abonnements"),
    __metadata("design:paramtypes", [AbonnementsService])
], AbonnementsController);
export { AbonnementsController };
//# sourceMappingURL=abonnements.controller.js.map