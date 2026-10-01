var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { OrganisationsService } from "./organisations.service.js";
import { OrganisationsController } from "./organisations.controller.js";
let OrganisationsModule = class OrganisationsModule {
};
OrganisationsModule = __decorate([
    Module({
        controllers: [OrganisationsController],
        providers: [OrganisationsService],
    })
], OrganisationsModule);
export { OrganisationsModule };
//# sourceMappingURL=organisations.module.js.map