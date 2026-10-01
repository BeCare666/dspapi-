import { Injectable, Logger } from "@nestjs/common";
import { kkiapay } from "@kkiapay-org/nodejs-sdk";

// RM11 — tout paiement KKiaPay est revérifié côté serveur, jamais fié à la
// seule réponse client (widget) ni au seul contenu du webhook.
//
// ⚠️ Non testé contre l'API réelle (même en sandbox) : un `transactionId`
// valide ne peut être obtenu que via une transaction initiée par le widget
// KKiaPay côté front, qui n'existe pas encore (frontend reporté section 10).
// À vérifier dès que le widget sera en place.
export interface StatutTransactionKkiapay {
  transactionId: string;
  status: string;
  amount: number;
  [cle: string]: unknown;
}

@Injectable()
export class KkiapayService {
  private readonly logger = new Logger(KkiapayService.name);
  private readonly client = kkiapay({
    publickey: process.env.KKIAPAY_PUBLIC_KEY!,
    privatekey: process.env.KKIAPAY_PRIVATE_KEY!,
    secretkey: process.env.KKIAPAY_SECRET!,
    sandbox: process.env.KKIAPAY_SANDBOX !== "false",
  });

  async verifierTransaction(transactionId: string): Promise<StatutTransactionKkiapay> {
    this.logger.log(`Vérification transaction KKiaPay ${transactionId}`);
    return this.client.verify(transactionId);
  }
}
