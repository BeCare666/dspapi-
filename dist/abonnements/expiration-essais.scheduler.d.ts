import { AbonnementsService } from "./abonnements.service.js";
export declare class ExpirationEssaisScheduler {
    private readonly abonnements;
    private readonly logger;
    constructor(abonnements: AbonnementsService);
    handleCron(): Promise<void>;
}
