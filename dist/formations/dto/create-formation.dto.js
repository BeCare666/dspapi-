var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsInt, IsOptional, IsString, Min, MinLength } from "class-validator";
export class CreateFormationDto {
    titre;
    description;
    dureeHeures;
    prixIndividuel;
    prixGroupe5;
    prixGroupe10;
}
__decorate([
    IsString(),
    MinLength(3),
    __metadata("design:type", String)
], CreateFormationDto.prototype, "titre", void 0);
__decorate([
    IsString(),
    MinLength(10),
    __metadata("design:type", String)
], CreateFormationDto.prototype, "description", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], CreateFormationDto.prototype, "dureeHeures", void 0);
__decorate([
    IsInt(),
    Min(0),
    __metadata("design:type", Number)
], CreateFormationDto.prototype, "prixIndividuel", void 0);
__decorate([
    IsInt(),
    Min(0),
    __metadata("design:type", Number)
], CreateFormationDto.prototype, "prixGroupe5", void 0);
__decorate([
    IsInt(),
    Min(0),
    __metadata("design:type", Number)
], CreateFormationDto.prototype, "prixGroupe10", void 0);
//# sourceMappingURL=create-formation.dto.js.map