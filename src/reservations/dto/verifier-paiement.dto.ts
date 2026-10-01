import { IsString } from "class-validator";

export class VerifierPaiementDto {
  @IsString()
  transactionId!: string;
}
