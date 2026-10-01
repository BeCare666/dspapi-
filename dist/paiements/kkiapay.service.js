var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var KkiapayService_1;
import { Injectable, Logger } from "@nestjs/common";
import { kkiapay } from "@kkiapay-org/nodejs-sdk";
let KkiapayService = KkiapayService_1 = class KkiapayService {
    logger = new Logger(KkiapayService_1.name);
    client = kkiapay({
        publickey: process.env.KKIAPAY_PUBLIC_KEY,
        privatekey: process.env.KKIAPAY_PRIVATE_KEY,
        secretkey: process.env.KKIAPAY_SECRET,
        sandbox: process.env.KKIAPAY_SANDBOX !== "false",
    });
    async verifierTransaction(transactionId) {
        this.logger.log(`Vérification transaction KKiaPay ${transactionId}`);
        return this.client.verify(transactionId);
    }
};
KkiapayService = KkiapayService_1 = __decorate([
    Injectable()
], KkiapayService);
export { KkiapayService };
//# sourceMappingURL=kkiapay.service.js.map