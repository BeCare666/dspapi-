import { PrismaService } from "../prisma/prisma.service.js";
export interface CreerNotificationDto {
    type: string;
    titre: string;
    message: string;
    lienUrl?: string;
}
export declare class NotificationsInternesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    creerPourAdmins(dto: CreerNotificationDto): Promise<void>;
    lister(utilisateurId: string): Promise<{
        id: string;
        type: string;
        createdAt: Date;
        titre: string;
        destinataireId: string;
        message: string;
        lienUrl: string | null;
        luLe: Date | null;
    }[]>;
    compterNonLues(utilisateurId: string): Promise<number>;
    marquerLue(id: string, utilisateurId: string): Promise<{
        id: string;
        type: string;
        createdAt: Date;
        titre: string;
        destinataireId: string;
        message: string;
        lienUrl: string | null;
        luLe: Date | null;
    }>;
    marquerToutesLues(utilisateurId: string): Promise<void>;
}
