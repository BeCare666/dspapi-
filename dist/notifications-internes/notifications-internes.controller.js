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
import { Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { NotificationsInternesService } from "./notifications-internes.service.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
let NotificationsInternesController = class NotificationsInternesController {
    notificationsService;
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    lister(user) {
        return this.notificationsService.lister(user.sub);
    }
    async compterNonLues(user) {
        return { nombre: await this.notificationsService.compterNonLues(user.sub) };
    }
    marquerLue(id, user) {
        return this.notificationsService.marquerLue(id, user.sub);
    }
    async marquerToutesLues(user) {
        await this.notificationsService.marquerToutesLues(user.sub);
        return { success: true };
    }
};
__decorate([
    Get(),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationsInternesController.prototype, "lister", null);
__decorate([
    Get("non-lues/nombre"),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsInternesController.prototype, "compterNonLues", null);
__decorate([
    HttpCode(HttpStatus.OK),
    Post(":id/lire"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], NotificationsInternesController.prototype, "marquerLue", null);
__decorate([
    HttpCode(HttpStatus.OK),
    Post("lire-tout"),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsInternesController.prototype, "marquerToutesLues", null);
NotificationsInternesController = __decorate([
    Controller("notifications-internes"),
    __metadata("design:paramtypes", [NotificationsInternesService])
], NotificationsInternesController);
export { NotificationsInternesController };
//# sourceMappingURL=notifications-internes.controller.js.map