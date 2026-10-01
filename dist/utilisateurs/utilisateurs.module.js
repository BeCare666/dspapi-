var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { UtilisateursService } from "./utilisateurs.service.js";
import { UtilisateursController } from "./utilisateurs.controller.js";
let UtilisateursModule = class UtilisateursModule {
};
UtilisateursModule = __decorate([
    Module({
        controllers: [UtilisateursController],
        providers: [UtilisateursService],
        exports: [UtilisateursService],
    })
], UtilisateursModule);
export { UtilisateursModule };
//# sourceMappingURL=utilisateurs.module.js.map