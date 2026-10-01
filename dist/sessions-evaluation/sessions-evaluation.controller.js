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
import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common";
import { SessionsEvaluationService } from "./sessions-evaluation.service.js";
import { DemarrerSessionDto } from "./dto/demarrer-session.dto.js";
import { EnregistrerReponseDto } from "./dto/enregistrer-reponse.dto.js";
import { EvolutionQueryDto, ListSessionsQueryDto } from "./dto/list-sessions-query.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
let SessionsEvaluationController = class SessionsEvaluationController {
    sessionsService;
    constructor(sessionsService) {
        this.sessionsService = sessionsService;
    }
    demarrer(dto, user) {
        return this.sessionsService.demarrer(dto, user);
    }
    lister(query, user) {
        return this.sessionsService.lister(query, user);
    }
    evolution(query, user) {
        return this.sessionsService.evolution(query, user);
    }
    obtenir(id, user) {
        return this.sessionsService.obtenir(id, user);
    }
    enregistrerReponse(id, elementMesurableId, dto, user) {
        return this.sessionsService.enregistrerReponse(id, elementMesurableId, dto, user);
    }
    soumettre(id, user) {
        return this.sessionsService.soumettre(id, user);
    }
    resultats(id, user) {
        return this.sessionsService.resultats(id, user);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DemarrerSessionDto, Object]),
    __metadata("design:returntype", void 0)
], SessionsEvaluationController.prototype, "demarrer", null);
__decorate([
    Get(),
    __param(0, Query()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListSessionsQueryDto, Object]),
    __metadata("design:returntype", void 0)
], SessionsEvaluationController.prototype, "lister", null);
__decorate([
    Get("evolution"),
    __param(0, Query()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EvolutionQueryDto, Object]),
    __metadata("design:returntype", void 0)
], SessionsEvaluationController.prototype, "evolution", null);
__decorate([
    Get(":id"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SessionsEvaluationController.prototype, "obtenir", null);
__decorate([
    Put(":id/reponses/:elementMesurableId"),
    __param(0, Param("id")),
    __param(1, Param("elementMesurableId")),
    __param(2, Body()),
    __param(3, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, EnregistrerReponseDto, Object]),
    __metadata("design:returntype", void 0)
], SessionsEvaluationController.prototype, "enregistrerReponse", null);
__decorate([
    Post(":id/soumettre"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SessionsEvaluationController.prototype, "soumettre", null);
__decorate([
    Get(":id/resultats"),
    __param(0, Param("id")),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SessionsEvaluationController.prototype, "resultats", null);
SessionsEvaluationController = __decorate([
    Roles(RoleUtilisateur.RESPONSABLE_COMPTE, RoleUtilisateur.RESP_QUALITE),
    Controller("sessions-evaluation"),
    __metadata("design:paramtypes", [SessionsEvaluationService])
], SessionsEvaluationController);
export { SessionsEvaluationController };
//# sourceMappingURL=sessions-evaluation.controller.js.map