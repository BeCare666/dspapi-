var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsDateString, IsOptional, IsString, MinLength } from "class-validator";
export class CreatePatientDto {
    nom;
    prenom;
    dateNaissance;
    sexe;
    numeroDossier;
    serviceId;
}
__decorate([
    IsString(),
    MinLength(2),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "nom", void 0);
__decorate([
    IsString(),
    MinLength(2),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "prenom", void 0);
__decorate([
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "dateNaissance", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "sexe", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "numeroDossier", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "serviceId", void 0);
//# sourceMappingURL=create-patient.dto.js.map