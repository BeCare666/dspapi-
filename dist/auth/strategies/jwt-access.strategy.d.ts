import { Strategy, type StrategyOptionsWithoutRequest } from "passport-jwt";
import type { JwtAccessPayload } from "../types/jwt-payload.type.js";
declare const JwtAccessStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtAccessStrategy extends JwtAccessStrategy_base {
    constructor();
    validate(payload: JwtAccessPayload): JwtAccessPayload;
}
export {};
