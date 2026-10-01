var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "@nestjs/common";
import { EvenementsIndesirablesService } from "./evenements-indesirables.service.js";
import { EvenementsIndesirablesController } from "./evenements-indesirables.controller.js";
import { AbonnementsModule } from "../abonnements/abonnements.module.js";
let EvenementsIndesirablesModule = class EvenementsIndesirablesModule {
};
EvenementsIndesirablesModule = __decorate([
    Module({
        imports: [AbonnementsModule],
        controllers: [EvenementsIndesirablesController],
        providers: [EvenementsIndesirablesService],
    })
], EvenementsIndesirablesModule);
export { EvenementsIndesirablesModule };
//# sourceMappingURL=evenements-indesirables.module.js.map