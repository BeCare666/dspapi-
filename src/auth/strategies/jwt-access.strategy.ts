import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, type StrategyOptionsWithoutRequest } from "passport-jwt";
import type { Request } from "express";
import type { JwtAccessPayload } from "../types/jwt-payload.type.js";

function fromAccessTokenCookie(req: Request): string | null {
  return req.cookies?.access_token ?? null;
}

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, "jwt-access") {
  constructor() {
    super({
      jwtFromRequest: fromAccessTokenCookie,
      secretOrKey: process.env.JWT_SECRET!,
      ignoreExpiration: false,
    } satisfies StrategyOptionsWithoutRequest);
  }

  validate(payload: JwtAccessPayload): JwtAccessPayload {
    return payload;
  }
}
