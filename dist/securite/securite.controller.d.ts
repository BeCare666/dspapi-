import { SecuriteService } from "./securite.service.js";
export declare class SecuriteController {
    private readonly securiteService;
    constructor(securiteService: SecuriteService);
    obtenirEtat(): import("./securite.service.js").EtatSecurite;
}
