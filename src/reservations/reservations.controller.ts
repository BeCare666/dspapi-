import { Body, Controller, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ReservationsService } from "./reservations.service.js";
import { CreerReservationDto } from "./dto/creer-reservation.dto.js";
import { VerifierPaiementDto } from "./dto/verifier-paiement.dto.js";
import { FixerDateRdvDto } from "./dto/fixer-date-rdv.dto.js";
import { MarquerRealiseeDto } from "./dto/marquer-realisee.dto.js";
import { ListReservationsQueryDto } from "./dto/list-reservations-query.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

@Controller("reservations")
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  creer(@Body() dto: CreerReservationDto, @CurrentUser() user: JwtAccessPayload) {
    return this.reservationsService.creer(dto, user);
  }

  @Get()
  lister(@Query() query: ListReservationsQueryDto, @CurrentUser() user: JwtAccessPayload) {
    return this.reservationsService.lister(query, user);
  }

  @Get(":id")
  obtenir(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.reservationsService.obtenir(id, user);
  }

  @Post(":id/paiement/verifier")
  verifierPaiement(
    @Param("id") id: string,
    @Body() dto: VerifierPaiementDto,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    return this.reservationsService.verifierPaiement(id, dto, user);
  }

  @Post(":id/annuler")
  annuler(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.reservationsService.annuler(id, user);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Patch(":id/date-rdv")
  fixerDateRdv(@Param("id") id: string, @Body() dto: FixerDateRdvDto) {
    return this.reservationsService.fixerDateRdv(id, dto);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @Post(":id/realiser")
  marquerRealisee(@Param("id") id: string, @Body() dto: MarquerRealiseeDto) {
    return this.reservationsService.marquerRealisee(id, dto);
  }
}
