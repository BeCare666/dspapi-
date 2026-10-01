var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from "class-validator";
import { TypeEtablissement } from "../../generated/prisma/enums.js";
export class RegisterOrganisationDto {
    organisationNom;
    organisationIfu;
    organisationType;
    organisationAdresse;
    organisationTelephone;
    organisationEmail;
    responsableNom;
    responsablePrenom;
    responsableEmail;
    responsableTelephone;
    motDePasse;
}
__decorate([
    IsString(),
    MinLength(2),
    __metadata("design:type", String)
], RegisterOrganisationDto.prototype, "organisationNom", void 0);
__decorate([
    IsString(),
    MinLength(3),
    __metadata("design:type", String)
], RegisterOrganisationDto.prototype, "organisationIfu", void 0);
__decorate([
    IsEnum(TypeEtablissement),
    __metadata("design:type", String)
], RegisterOrganisationDto.prototype, "organisationType", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], RegisterOrganisationDto.prototype, "organisationAdresse", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], RegisterOrganisationDto.prototype, "organisationTelephone", void 0);
__decorate([
    IsOptional(),
    IsEmail(),
    __metadata("design:type", String)
], RegisterOrganisationDto.prototype, "organisationEmail", void 0);
__decorate([
    IsString(),
    MinLength(2),
    __metadata("design:type", String)
], RegisterOrganisationDto.prototype, "responsableNom", void 0);
__decorate([
    IsString(),
    MinLength(2),
    __metadata("design:type", String)
], RegisterOrganisationDto.prototype, "responsablePrenom", void 0);
__decorate([
    IsEmail(),
    __metadata("design:type", String)
], RegisterOrganisationDto.prototype, "responsableEmail", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], RegisterOrganisationDto.prototype, "responsableTelephone", void 0);
__decorate([
    IsString(),
    MinLength(8),
    __metadata("design:type", String)
], RegisterOrganisationDto.prototype, "motDePasse", void 0);
//# sourceMappingURL=register-organisation.dto.js.map