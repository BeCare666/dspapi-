import { Controller, Get, Param, Res } from "@nestjs/common";
import type { Response } from "express";
import { FacturesService } from "./factures.service.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

// §11.1 — historique des transactions et factures téléchargeables.
@Controller("factures")
export class FacturesController {
  constructor(private readonly factures: FacturesService) {}

  @Get()
  lister(@CurrentUser() user: JwtAccessPayload) {
    return this.factures.lister(user);
  }

  @Get(":id/pdf")
  async pdf(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload, @Res() res: Response) {
    const { numero, contenu } = await this.factures.pdf(id, user);
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="facture-${numero}.pdf"`,
    });
    res.send(contenu);
  }
}
