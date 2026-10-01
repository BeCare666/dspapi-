import { ParametresService } from "./parametres.service.js";
import { ModifierParametreDto } from "./dto/modifier-parametre.dto.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
export declare class ParametresController {
    private readonly parametresService;
    constructor(parametresService: ParametresService);
    listerTous(): Promise<{
        id: string;
        type: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        valeur: string;
        cle: string;
        valeurDefaut: string;
    }[]>;
    modifier(cle: string, dto: ModifierParametreDto, user: JwtAccessPayload): Promise<{
        id: string;
        type: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        valeur: string;
        cle: string;
        valeurDefaut: string;
    }>;
}
