var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsEnum, IsInt, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { TypeEtablissement, TypeReponse } from "../../generated/prisma/enums.js";
export class CreateElementMesurableDto {
    libelle;
    typeReponse;
    optionsChoix;
    ordre;
}
__decorate([
    IsString(),
    MinLength(2),
    __metadata("design:type", String)
], CreateElementMesurableDto.prototype, "libelle", void 0);
__decorate([
    IsOptional(),
    IsEnum(TypeReponse),
    __metadata("design:type", String)
], CreateElementMesurableDto.prototype, "typeReponse", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    IsString({ each: true }),
    __metadata("design:type", Array)
], CreateElementMesurableDto.prototype, "optionsChoix", void 0);
__decorate([
    IsInt(),
    __metadata("design:type", Number)
], CreateElementMesurableDto.prototype, "ordre", void 0);
export class CreateCritereDto {
    code;
    libelle;
    ordre;
    elementsMesurables;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateCritereDto.prototype, "code", void 0);
__decorate([
    IsString(),
    MinLength(2),
    __metadata("design:type", String)
], CreateCritereDto.prototype, "libelle", void 0);
__decorate([
    IsInt(),
    __metadata("design:type", Number)
], CreateCritereDto.prototype, "ordre", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => CreateElementMesurableDto),
    __metadata("design:type", Array)
], CreateCritereDto.prototype, "elementsMesurables", void 0);
export class CreateNormeDto {
    code;
    libelle;
    ordre;
    criteres;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], CreateNormeDto.prototype, "code", void 0);
__decorate([
    IsString(),
    MinLength(2),
    __metadata("design:type", String)
], CreateNormeDto.prototype, "libelle", void 0);
__decorate([
    IsInt(),
    __metadata("design:type", Number)
], CreateNormeDto.prototype, "ordre", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => CreateCritereDto),
    __metadata("design:type", Array)
], CreateNormeDto.prototype, "criteres", void 0);
export class CreateDomaineDto {
    nom;
    ordre;
    normes;
}
__decorate([
    IsString(),
    MinLength(2),
    __metadata("design:type", String)
], CreateDomaineDto.prototype, "nom", void 0);
__decorate([
    IsInt(),
    __metadata("design:type", Number)
], CreateDomaineDto.prototype, "ordre", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => CreateNormeDto),
    __metadata("design:type", Array)
], CreateDomaineDto.prototype, "normes", void 0);
export class CreateGrilleDto {
    nom;
    type;
    domaines;
}
__decorate([
    IsString(),
    MinLength(2),
    __metadata("design:type", String)
], CreateGrilleDto.prototype, "nom", void 0);
__decorate([
    IsEnum(TypeEtablissement),
    __metadata("design:type", String)
], CreateGrilleDto.prototype, "type", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => CreateDomaineDto),
    __metadata("design:type", Array)
], CreateGrilleDto.prototype, "domaines", void 0);
//# sourceMappingURL=create-grille.dto.js.map