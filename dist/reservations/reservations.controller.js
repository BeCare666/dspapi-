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
import { ReservationsService } from "./reservations.service.js";
import { CreerReservationDto } from "./dto/creer-reservation.dto.js";
import { VerifierPaiementDto } from "./dto/verifier-paiement.dto.js";
import { FixerDateRdvDto } from "./dto/fixer-date-rdv.dto.js";
import { MarquerRealiseeDto } from "./dto/marquer-realisee.dto.js";
import { ListReservationsQueryDto } from "./dto/list-reservations-query.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
let ReservationsController = class ReservationsController {
    reservationsService;
    constructor(reservationsService) {
        this.reservationsService = reservationsService;
    }
    creer(dto, user) {
        return this.reservationsService.creer(dto, user);
    }
    lister(query, user) {
        return this.reservationsService.lister(query, user);
    }
    obtenir(id, user) {
        return this.reservationsService.obtenir(id, user);
    }
    verifierPaiement(id, dto, user) {
        return this.reservationsService.verifierPaiement(id, dto, user);
    }
    annuler(id, user) {
        return this.reservationsService.annuler(id, user);
    }
    fixerDateRdv(id, dto) {
        return this.reservationsService.fixerDateRdv(id, dto);
    }
    marquerRealisee(id, dto) {
        return this.reservationsService.marquerRealisee(id, dto);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreerReservationDto, Object]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "creer", null);
__decorate([
    Get(),
    __param(0, Query()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListReservationsQueryDto, Object]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "lister", null);
__decorate([
    Get(":id"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "obtenir", null);
__decorate([
    Post(":id/paiement/verifier"),
    __param(0, Param("id")),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, VerifierPaiementDto, Object]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "verifierPaiement", null);
__decorate([
    Post(":id/annuler"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "annuler", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Patch(":id/date-rdv"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, FixerDateRdvDto]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "fixerDateRdv", null);
__decorate([
    Roles(RoleUtilisateur.ADMIN_PLATEFORME),
    Post(":id/realiser"),
    __param(0, Param("id")),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, MarquerRealiseeDto]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "marquerRealisee", null);
ReservationsController = __decorate([
    Controller("reservations"),
    __metadata("design:paramtypes", [ReservationsService])
], ReservationsController);
export { ReservationsController };
//# sourceMappingURL=reservations.controller.js.map