import { randomBytes, createHmac } from "node:crypto";
import type { CookieOptions } from "express";

export const ACCESS_TOKEN_COOKIE = "access_token";
export const REFRESH_TOKEN_COOKIE = "refresh_token";

export function generateOpaqueToken(): string {
  return randomBytes(32).toString("base64url");
}

export function hashOpaqueToken(token: string): string {
  return createHmac("sha256", process.env.JWT_REFRESH_SECRET!).update(token).digest("hex");
}

// Parseur minimal pour les TTL du type "15m" / "30d" (les seules unités utilisées ici).
export function ttlToMs(ttl: string): number {
  const match = /^(\d+)(s|m|h|d)$/.exec(ttl);
  if (!match) {
    throw new Error(`Format de TTL invalide : "${ttl}" (attendu ex. "15m", "30d")`);
  }
  const value = Number(match[1]);
  const unitMs = { s: 1_000, m: 60_000, h: 3_600_000, d: 86_400_000 }[match[2] as "s" | "m" | "h" | "d"];
  return value * unitMs;
}

function baseCookieOptions(path: string, maxAgeMs: number): CookieOptions {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path,
    maxAge: maxAgeMs,
  };
}

export function accessTokenCookieOptions(): CookieOptions {
  return baseCookieOptions("/", ttlToMs(process.env.JWT_ACCESS_TTL ?? "15m"));
}

export function refreshTokenCookieOptions(): CookieOptions {
  return baseCookieOptions("/auth", ttlToMs(process.env.JWT_REFRESH_TTL ?? "30d"));
}
