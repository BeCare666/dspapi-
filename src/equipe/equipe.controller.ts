import { Body, Controller, ForbiddenException, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from "@nestjs/common";
import { EquipeService } from "./equipe.service.js";
import { CreerServiceDto, ModifierServiceDto } from "./dto/service-etablissement.dto.js";
import { CreerMembreDto, ModifierMembreDto } from "./dto/membre.dto.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import { RoleUtilisateur } from "../generated/prisma/enums.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

function exigerOrganisation(user: JwtAccessPayload): string {
  if (!user.organisationId) throw new ForbiddenException("Réservé aux comptes organisation");
  return user.organisationId;
}

// §4.2 — services de l'établissement. Lecture ouverte à tout membre (listes
// déroulantes des fiches patient / EI) ; écriture réservée au responsable du compte.
@Controller("organisation/services")
export class ServicesEtablissementController {
  constructor(private readonly equipe: EquipeService) {}

  @Get()
  lister(@Query("inclureInactifs") inclureInactifs: string | undefined, @CurrentUser() user: JwtAccessPayload) {
    return this.equipe.listerServices(exigerOrganisation(user), inclureInactifs === "true");
  }

  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @Post()
  creer(@Body() dto: CreerServiceDto, @CurrentUser() user: JwtAccessPayload) {
    return this.equipe.creerService(exigerOrganisation(user), dto, user.sub);
  }

  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @Patch(":id")
  modifier(@Param("id") id: string, @Body() dto: ModifierServiceDto, @CurrentUser() user: JwtAccessPayload) {
    return this.equipe.modifierService(exigerOrganisation(user), id, dto, user.sub);
  }

  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @HttpCode(HttpStatus.OK)
  @Post(":id/desactiver")
  desactiver(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.equipe.basculerService(exigerOrganisation(user), id, false, user.sub);
  }

  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @HttpCode(HttpStatus.OK)
  @Post(":id/reactiver")
  reactiver(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.equipe.basculerService(exigerOrganisation(user), id, true, user.sub);
  }
}

// §4.2 — utilisateurs internes. La liste est aussi ouverte au responsable
// qualité (choix du responsable d'une action corrective EI, §8.2).
@Controller("organisation/membres")
export class MembresController {
  constructor(private readonly equipe: EquipeService) {}

  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE, RoleUtilisateur.RESP_QUALITE)
  @Get()
  lister(@CurrentUser() user: JwtAccessPayload) {
    return this.equipe.listerMembres(exigerOrganisation(user));
  }

  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @Get(":id")
  obtenir(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.equipe.obtenirMembre(exigerOrganisation(user), id);
  }

  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @Post()
  creer(@Body() dto: CreerMembreDto, @CurrentUser() user: JwtAccessPayload) {
    return this.equipe.creerMembre(exigerOrganisation(user), dto, user.sub);
  }

  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @Patch(":id")
  modifier(@Param("id") id: string, @Body() dto: ModifierMembreDto, @CurrentUser() user: JwtAccessPayload) {
    return this.equipe.modifierMembre(exigerOrganisation(user), id, dto, user.sub);
  }

  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @HttpCode(HttpStatus.OK)
  @Post(":id/desactiver")
  desactiver(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.equipe.basculerMembre(exigerOrganisation(user), id, false, user.sub);
  }

  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @HttpCode(HttpStatus.OK)
  @Post(":id/reactiver")
  reactiver(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.equipe.basculerMembre(exigerOrganisation(user), id, true, user.sub);
  }

  @Roles(RoleUtilisateur.RESPONSABLE_COMPTE)
  @HttpCode(HttpStatus.OK)
  @Post(":id/renvoyer-invitation")
  renvoyerInvitation(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.equipe.renvoyerInvitation(exigerOrganisation(user), id);
  }
}
