import { Body, Controller, ForbiddenException, Get, HttpCode, HttpStatus, Param, ParseEnumPipe, Post } from "@nestjs/common";
import { AbonnementsService } from "./abonnements.service.js";
import { DureeJoursDto, DureeJoursOptionnelleDto, VerifierPaiementAbonnementDto } from "./dto/abonnement.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { ModuleMetier, RoleUtilisateur } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

function exigerOrganisation(user: JwtAccessPayload): string {
  if (!user.organisationId) throw new ForbiddenException("Réservé aux comptes organisation");
  return user.organisationId;
}

@Controller("abonnements")
export class AbonnementsController {
  constructor(private readonly abonnementsService: AbonnementsService) {}

  // §10.5 — offre en vigueur (prix, durée, devise, comportement de fin d'essai).
  @Get("offre")
  offre() {
    return this.abonnementsService.offre();
  }

  // §11.1 — historique des paiements d'abonnement de l'établissement.
  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @Get("paiements")
  paiements(@CurrentUser() user: JwtAccessPayload) {
    return this.abonnementsService.listerPaiements(exigerOrganisation(user));
  }

  // RM11 — vérification serveur du paiement transmis par le widget.
  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @HttpCode(HttpStatus.OK)
  @Post("paiements/:paiementId/verifier")
  verifierPaiement(
    @Param("paiementId") paiementId: string,
    @Body() dto: VerifierPaiementAbonnementDto,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    return this.abonnementsService.verifierPaiement(exigerOrganisation(user), paiementId, dto.transactionId);
  }

  @Get(":module")
  async monStatut(
    @Param("module", new ParseEnumPipe(ModuleMetier)) module: ModuleMetier,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    if (!user.organisationId) return null;
    return this.abonnementsService.obtenirStatut(user.organisationId, module);
  }

  // §5 — souscription par le responsable du compte (gestion des abonnements, §4.1).
  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @Post(":module/souscrire")
  souscrire(
    @Param("module", new ParseEnumPipe(ModuleMetier)) module: ModuleMetier,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    return this.abonnementsService.souscrire(exigerOrganisation(user), module, user.sub);
  }

  // §12.1 — actions de l'administrateur de la plateforme.
  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @HttpCode(HttpStatus.OK)
  @Post(":organisationId/:module/activer")
  activer(
    @Param("organisationId") organisationId: string,
    @Param("module", new ParseEnumPipe(ModuleMetier)) module: ModuleMetier,
    @Body() dto: DureeJoursOptionnelleDto,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    return this.abonnementsService.activerManuellement(organisationId, module, dto.jours, user.sub);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @HttpCode(HttpStatus.OK)
  @Post(":organisationId/:module/suspendre")
  suspendre(
    @Param("organisationId") organisationId: string,
    @Param("module", new ParseEnumPipe(ModuleMetier)) module: ModuleMetier,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    return this.abonnementsService.suspendre(organisationId, module, user.sub);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @HttpCode(HttpStatus.OK)
  @Post(":organisationId/:module/reprendre")
  reprendre(
    @Param("organisationId") organisationId: string,
    @Param("module", new ParseEnumPipe(ModuleMetier)) module: ModuleMetier,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    return this.abonnementsService.reprendre(organisationId, module, user.sub);
  }

  @Roles(RoleUtilisateur.ADMIN_PLATEFORME)
  @HttpCode(HttpStatus.OK)
  @Post(":organisationId/:module/prolonger")
  prolonger(
    @Param("organisationId") organisationId: string,
    @Param("module", new ParseEnumPipe(ModuleMetier)) module: ModuleMetier,
    @Body() dto: DureeJoursDto,
    @CurrentUser() user: JwtAccessPayload,
  ) {
    return this.abonnementsService.prolonger(organisationId, module, dto.jours, user.sub);
  }
}
