var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Controller, Get } from "@nestjs/common";
import { AlertesPlateformeService } from "./alertes-plateforme.service.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { Permissions } from "../auth/decorators/permissions.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
let AlertesPlateformeController = class AlertesPlateformeController {
    alertesPlateformeService;
    constructor(alertesPlateformeService) {
        this.alertesPlateformeService = alertesPlateformeService;
    }
    obtenirAlertes() {
        return this.alertesPlateformeService.obtenirAlertes();
    }
};
__decorate([
    Permissions("ALERTES_READ"),
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlertesPlateformeController.prototype, "obtenirAlertes", null);
AlertesPlateformeController = __decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Controller("alertes-plateforme"),
    __metadata("design:paramtypes", [AlertesPlateformeService])
], AlertesPlateformeController);
export { AlertesPlateformeController };
//# sourceMappingURL=alertes-plateforme.controller.js.map