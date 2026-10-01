var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@nestjs/common";
import { v2 as cloudinary } from "cloudinary";
let CloudinaryService = class CloudinaryService {
    constructor() {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    }
    async uploadBuffer(buffer, mimeType, nomFichier) {
        const dataUri = `data:${mimeType};base64,${buffer.toString("base64")}`;
        const resultat = await cloudinary.uploader.upload(dataUri, {
            folder: "dps-bj/evenements-indesirables",
            resource_type: "auto",
            filename_override: nomFichier,
            use_filename: true,
            unique_filename: true,
        });
        return { url: resultat.secure_url, cloudinaryId: resultat.public_id };
    }
    async supprimer(cloudinaryId) {
        await cloudinary.uploader.destroy(cloudinaryId);
    }
};
CloudinaryService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], CloudinaryService);
export { CloudinaryService };
//# sourceMappingURL=cloudinary.service.js.map