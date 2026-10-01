import { Module } from "@nestjs/common";
import { SessionsEvaluationService } from "./sessions-evaluation.service.js";
import { SessionsEvaluationController } from "./sessions-evaluation.controller.js";
import { RapportsPdfService } from "./rapports-pdf.service.js";

@Module({
  controllers: [SessionsEvaluationController],
  providers: [SessionsEvaluationService, RapportsPdfService],
  exports: [SessionsEvaluationService, RapportsPdfService],
})
export class SessionsEvaluationModule {}
