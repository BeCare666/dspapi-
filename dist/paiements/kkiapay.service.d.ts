export interface StatutTransactionKkiapay {
    transactionId: string;
    status: string;
    amount: number;
    [cle: string]: unknown;
}
export declare class KkiapayService {
    private readonly logger;
    private readonly client;
    verifierTransaction(transactionId: string): Promise<StatutTransactionKkiapay>;
}
