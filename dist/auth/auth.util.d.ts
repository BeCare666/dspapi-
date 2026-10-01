import type { CookieOptions } from "express";
export declare const ACCESS_TOKEN_COOKIE = "access_token";
export declare const REFRESH_TOKEN_COOKIE = "refresh_token";
export declare function generateOpaqueToken(): string;
export declare function hashOpaqueToken(token: string): string;
export declare function ttlToMs(ttl: string): number;
export declare function accessTokenCookieOptions(): CookieOptions;
export declare function refreshTokenCookieOptions(): CookieOptions;
