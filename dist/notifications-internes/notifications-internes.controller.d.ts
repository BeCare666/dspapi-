import { NotificationsInternesService } from "./notifications-internes.service.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";
export declare class NotificationsInternesController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsInternesService);
    lister(user: JwtAccessPayload): Promise<{
        id: string;
        type: string;
        createdAt: Date;
        titre: string;
        destinataireId: string;
        message: string;
        lienUrl: string | null;
        luLe: Date | null;
    }[]>;
    compterNonLues(user: JwtAccessPayload): Promise<{
        nombre: number;
    }>;
    marquerLue(id: string, user: JwtAccessPayload): Promise<{
        id: string;
        type: string;
        createdAt: Date;
        titre: string;
        destinataireId: string;
        message: string;
        lienUrl: string | null;
        luLe: Date | null;
    }>;
    marquerToutesLues(user: JwtAccessPayload): Promise<{
        success: boolean;
    }>;
}
