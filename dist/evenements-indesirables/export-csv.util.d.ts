import type { EvenementIndesirable, Cause, ActionCorrective, TypeEi, Service } from "../generated/prisma/client.js";
type EvenementExportable = EvenementIndesirable & {
    typeEi: TypeEi | null;
    service: Service | null;
    causes: Cause[];
    actionsCorrectives: ActionCorrective[];
};
export declare function evenementsIndesirablesVersCsv(evenements: EvenementExportable[]): string;
export {};
