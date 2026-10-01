import { AlertesPlateformeService } from "./alertes-plateforme.service.js";
export declare class AlertesPlateformeController {
    private readonly alertesPlateformeService;
    constructor(alertesPlateformeService: AlertesPlateformeService);
    obtenirAlertes(): Promise<{
        lignes: import("./alertes-plateforme.service.js").LigneAlertePlateforme[];
        totalNews: number;
        totalEi: number;
    }>;
}
