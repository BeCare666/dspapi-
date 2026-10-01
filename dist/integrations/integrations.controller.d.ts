import { IntegrationsService } from "./integrations.service.js";
export declare class IntegrationsController {
    private readonly integrationsService;
    constructor(integrationsService: IntegrationsService);
    verifierEtat(): Promise<import("./integrations.service.js").EtatIntegration[]>;
}
