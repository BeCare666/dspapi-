import { Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { NotificationsInternesService } from "./notifications-internes.service.js";
import { CurrentUser } from "../auth/decorators/current-user.decorator.js";
import type { JwtAccessPayload } from "../auth/types/jwt-payload.type.js";

@Controller("notifications-internes")
export class NotificationsInternesController {
  constructor(private readonly notificationsService: NotificationsInternesService) {}

  @Get()
  lister(@CurrentUser() user: JwtAccessPayload) {
    return this.notificationsService.lister(user.sub);
  }

  @Get("non-lues/nombre")
  async compterNonLues(@CurrentUser() user: JwtAccessPayload) {
    return { nombre: await this.notificationsService.compterNonLues(user.sub) };
  }

  @HttpCode(HttpStatus.OK)
  @Post(":id/lire")
  marquerLue(@Param("id") id: string, @CurrentUser() user: JwtAccessPayload) {
    return this.notificationsService.marquerLue(id, user.sub);
  }

  @HttpCode(HttpStatus.OK)
  @Post("lire-tout")
  async marquerToutesLues(@CurrentUser() user: JwtAccessPayload) {
    await this.notificationsService.marquerToutesLues(user.sub);
    return { success: true };
  }
}
