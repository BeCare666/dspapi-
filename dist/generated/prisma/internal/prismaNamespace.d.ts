import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Organisation: "Organisation";
    readonly Utilisateur: "Utilisateur";
    readonly RefreshToken: "RefreshToken";
    readonly PasswordResetToken: "PasswordResetToken";
    readonly EmailVerificationToken: "EmailVerificationToken";
    readonly UtilisateurRole: "UtilisateurRole";
    readonly Service: "Service";
    readonly JournalAudit: "JournalAudit";
    readonly Grille: "Grille";
    readonly Domaine: "Domaine";
    readonly Norme: "Norme";
    readonly Critere: "Critere";
    readonly ElementMesurable: "ElementMesurable";
    readonly SessionEvaluation: "SessionEvaluation";
    readonly Reponse: "Reponse";
    readonly RapportPdf: "RapportPdf";
    readonly AbonnementModule: "AbonnementModule";
    readonly Patient: "Patient";
    readonly MesureNews: "MesureNews";
    readonly Alerte: "Alerte";
    readonly Intervention: "Intervention";
    readonly TypeEi: "TypeEi";
    readonly EvenementIndesirable: "EvenementIndesirable";
    readonly EvenementTransition: "EvenementTransition";
    readonly Cause: "Cause";
    readonly ActionCorrective: "ActionCorrective";
    readonly PieceJointe: "PieceJointe";
    readonly Formation: "Formation";
    readonly Reservation: "Reservation";
    readonly Facture: "Facture";
    readonly Notification: "Notification";
    readonly ParametrePlateforme: "ParametrePlateforme";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "organisation" | "utilisateur" | "refreshToken" | "passwordResetToken" | "emailVerificationToken" | "utilisateurRole" | "service" | "journalAudit" | "grille" | "domaine" | "norme" | "critere" | "elementMesurable" | "sessionEvaluation" | "reponse" | "rapportPdf" | "abonnementModule" | "patient" | "mesureNews" | "alerte" | "intervention" | "typeEi" | "evenementIndesirable" | "evenementTransition" | "cause" | "actionCorrective" | "pieceJointe" | "formation" | "reservation" | "facture" | "notification" | "parametrePlateforme";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Organisation: {
            payload: Prisma.$OrganisationPayload<ExtArgs>;
            fields: Prisma.OrganisationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrganisationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganisationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrganisationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganisationPayload>;
                };
                findFirst: {
                    args: Prisma.OrganisationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganisationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrganisationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganisationPayload>;
                };
                findMany: {
                    args: Prisma.OrganisationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganisationPayload>[];
                };
                create: {
                    args: Prisma.OrganisationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganisationPayload>;
                };
                createMany: {
                    args: Prisma.OrganisationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.OrganisationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganisationPayload>;
                };
                update: {
                    args: Prisma.OrganisationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganisationPayload>;
                };
                deleteMany: {
                    args: Prisma.OrganisationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrganisationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.OrganisationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganisationPayload>;
                };
                aggregate: {
                    args: Prisma.OrganisationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrganisation>;
                };
                groupBy: {
                    args: Prisma.OrganisationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganisationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrganisationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganisationCountAggregateOutputType> | number;
                };
            };
        };
        Utilisateur: {
            payload: Prisma.$UtilisateurPayload<ExtArgs>;
            fields: Prisma.UtilisateurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                findFirst: {
                    args: Prisma.UtilisateurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                findMany: {
                    args: Prisma.UtilisateurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>[];
                };
                create: {
                    args: Prisma.UtilisateurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                createMany: {
                    args: Prisma.UtilisateurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UtilisateurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                update: {
                    args: Prisma.UtilisateurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                deleteMany: {
                    args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UtilisateurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                aggregate: {
                    args: Prisma.UtilisateurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUtilisateur>;
                };
                groupBy: {
                    args: Prisma.UtilisateurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UtilisateurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UtilisateurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UtilisateurCountAggregateOutputType> | number;
                };
            };
        };
        RefreshToken: {
            payload: Prisma.$RefreshTokenPayload<ExtArgs>;
            fields: Prisma.RefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                update: {
                    args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>;
                };
                groupBy: {
                    args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        PasswordResetToken: {
            payload: Prisma.$PasswordResetTokenPayload<ExtArgs>;
            fields: Prisma.PasswordResetTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findFirst: {
                    args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findMany: {
                    args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                create: {
                    args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                createMany: {
                    args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                update: {
                    args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                aggregate: {
                    args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePasswordResetToken>;
                };
                groupBy: {
                    args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PasswordResetTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenCountAggregateOutputType> | number;
                };
            };
        };
        EmailVerificationToken: {
            payload: Prisma.$EmailVerificationTokenPayload<ExtArgs>;
            fields: Prisma.EmailVerificationTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EmailVerificationTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                findFirst: {
                    args: Prisma.EmailVerificationTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                findMany: {
                    args: Prisma.EmailVerificationTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[];
                };
                create: {
                    args: Prisma.EmailVerificationTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                createMany: {
                    args: Prisma.EmailVerificationTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.EmailVerificationTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                update: {
                    args: Prisma.EmailVerificationTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.EmailVerificationTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EmailVerificationTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.EmailVerificationTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>;
                };
                aggregate: {
                    args: Prisma.EmailVerificationTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmailVerificationToken>;
                };
                groupBy: {
                    args: Prisma.EmailVerificationTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmailVerificationTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EmailVerificationTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmailVerificationTokenCountAggregateOutputType> | number;
                };
            };
        };
        UtilisateurRole: {
            payload: Prisma.$UtilisateurRolePayload<ExtArgs>;
            fields: Prisma.UtilisateurRoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UtilisateurRoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UtilisateurRoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>;
                };
                findFirst: {
                    args: Prisma.UtilisateurRoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UtilisateurRoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>;
                };
                findMany: {
                    args: Prisma.UtilisateurRoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>[];
                };
                create: {
                    args: Prisma.UtilisateurRoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>;
                };
                createMany: {
                    args: Prisma.UtilisateurRoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UtilisateurRoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>;
                };
                update: {
                    args: Prisma.UtilisateurRoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>;
                };
                deleteMany: {
                    args: Prisma.UtilisateurRoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UtilisateurRoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UtilisateurRoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurRolePayload>;
                };
                aggregate: {
                    args: Prisma.UtilisateurRoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUtilisateurRole>;
                };
                groupBy: {
                    args: Prisma.UtilisateurRoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UtilisateurRoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UtilisateurRoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UtilisateurRoleCountAggregateOutputType> | number;
                };
            };
        };
        Service: {
            payload: Prisma.$ServicePayload<ExtArgs>;
            fields: Prisma.ServiceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ServiceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                findFirst: {
                    args: Prisma.ServiceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                findMany: {
                    args: Prisma.ServiceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>[];
                };
                create: {
                    args: Prisma.ServiceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                createMany: {
                    args: Prisma.ServiceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ServiceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                update: {
                    args: Prisma.ServiceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                deleteMany: {
                    args: Prisma.ServiceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ServiceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ServiceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                aggregate: {
                    args: Prisma.ServiceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateService>;
                };
                groupBy: {
                    args: Prisma.ServiceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ServiceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceCountAggregateOutputType> | number;
                };
            };
        };
        JournalAudit: {
            payload: Prisma.$JournalAuditPayload<ExtArgs>;
            fields: Prisma.JournalAuditFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JournalAuditFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JournalAuditFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>;
                };
                findFirst: {
                    args: Prisma.JournalAuditFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JournalAuditFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>;
                };
                findMany: {
                    args: Prisma.JournalAuditFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>[];
                };
                create: {
                    args: Prisma.JournalAuditCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>;
                };
                createMany: {
                    args: Prisma.JournalAuditCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.JournalAuditDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>;
                };
                update: {
                    args: Prisma.JournalAuditUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>;
                };
                deleteMany: {
                    args: Prisma.JournalAuditDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JournalAuditUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.JournalAuditUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JournalAuditPayload>;
                };
                aggregate: {
                    args: Prisma.JournalAuditAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJournalAudit>;
                };
                groupBy: {
                    args: Prisma.JournalAuditGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JournalAuditGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JournalAuditCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JournalAuditCountAggregateOutputType> | number;
                };
            };
        };
        Grille: {
            payload: Prisma.$GrillePayload<ExtArgs>;
            fields: Prisma.GrilleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GrilleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrillePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GrilleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrillePayload>;
                };
                findFirst: {
                    args: Prisma.GrilleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrillePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GrilleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrillePayload>;
                };
                findMany: {
                    args: Prisma.GrilleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrillePayload>[];
                };
                create: {
                    args: Prisma.GrilleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrillePayload>;
                };
                createMany: {
                    args: Prisma.GrilleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.GrilleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrillePayload>;
                };
                update: {
                    args: Prisma.GrilleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrillePayload>;
                };
                deleteMany: {
                    args: Prisma.GrilleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GrilleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.GrilleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GrillePayload>;
                };
                aggregate: {
                    args: Prisma.GrilleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGrille>;
                };
                groupBy: {
                    args: Prisma.GrilleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GrilleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GrilleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GrilleCountAggregateOutputType> | number;
                };
            };
        };
        Domaine: {
            payload: Prisma.$DomainePayload<ExtArgs>;
            fields: Prisma.DomaineFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DomaineFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DomaineFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainePayload>;
                };
                findFirst: {
                    args: Prisma.DomaineFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DomaineFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainePayload>;
                };
                findMany: {
                    args: Prisma.DomaineFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainePayload>[];
                };
                create: {
                    args: Prisma.DomaineCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainePayload>;
                };
                createMany: {
                    args: Prisma.DomaineCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.DomaineDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainePayload>;
                };
                update: {
                    args: Prisma.DomaineUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainePayload>;
                };
                deleteMany: {
                    args: Prisma.DomaineDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DomaineUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.DomaineUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DomainePayload>;
                };
                aggregate: {
                    args: Prisma.DomaineAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDomaine>;
                };
                groupBy: {
                    args: Prisma.DomaineGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DomaineGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DomaineCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DomaineCountAggregateOutputType> | number;
                };
            };
        };
        Norme: {
            payload: Prisma.$NormePayload<ExtArgs>;
            fields: Prisma.NormeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NormeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NormePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NormeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NormePayload>;
                };
                findFirst: {
                    args: Prisma.NormeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NormePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NormeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NormePayload>;
                };
                findMany: {
                    args: Prisma.NormeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NormePayload>[];
                };
                create: {
                    args: Prisma.NormeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NormePayload>;
                };
                createMany: {
                    args: Prisma.NormeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.NormeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NormePayload>;
                };
                update: {
                    args: Prisma.NormeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NormePayload>;
                };
                deleteMany: {
                    args: Prisma.NormeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NormeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.NormeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NormePayload>;
                };
                aggregate: {
                    args: Prisma.NormeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNorme>;
                };
                groupBy: {
                    args: Prisma.NormeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NormeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NormeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NormeCountAggregateOutputType> | number;
                };
            };
        };
        Critere: {
            payload: Prisma.$CriterePayload<ExtArgs>;
            fields: Prisma.CritereFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CritereFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CriterePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CritereFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CriterePayload>;
                };
                findFirst: {
                    args: Prisma.CritereFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CriterePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CritereFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CriterePayload>;
                };
                findMany: {
                    args: Prisma.CritereFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CriterePayload>[];
                };
                create: {
                    args: Prisma.CritereCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CriterePayload>;
                };
                createMany: {
                    args: Prisma.CritereCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CritereDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CriterePayload>;
                };
                update: {
                    args: Prisma.CritereUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CriterePayload>;
                };
                deleteMany: {
                    args: Prisma.CritereDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CritereUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CritereUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CriterePayload>;
                };
                aggregate: {
                    args: Prisma.CritereAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCritere>;
                };
                groupBy: {
                    args: Prisma.CritereGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CritereGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CritereCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CritereCountAggregateOutputType> | number;
                };
            };
        };
        ElementMesurable: {
            payload: Prisma.$ElementMesurablePayload<ExtArgs>;
            fields: Prisma.ElementMesurableFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ElementMesurableFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementMesurablePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ElementMesurableFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementMesurablePayload>;
                };
                findFirst: {
                    args: Prisma.ElementMesurableFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementMesurablePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ElementMesurableFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementMesurablePayload>;
                };
                findMany: {
                    args: Prisma.ElementMesurableFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementMesurablePayload>[];
                };
                create: {
                    args: Prisma.ElementMesurableCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementMesurablePayload>;
                };
                createMany: {
                    args: Prisma.ElementMesurableCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ElementMesurableDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementMesurablePayload>;
                };
                update: {
                    args: Prisma.ElementMesurableUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementMesurablePayload>;
                };
                deleteMany: {
                    args: Prisma.ElementMesurableDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ElementMesurableUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ElementMesurableUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElementMesurablePayload>;
                };
                aggregate: {
                    args: Prisma.ElementMesurableAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateElementMesurable>;
                };
                groupBy: {
                    args: Prisma.ElementMesurableGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ElementMesurableGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ElementMesurableCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ElementMesurableCountAggregateOutputType> | number;
                };
            };
        };
        SessionEvaluation: {
            payload: Prisma.$SessionEvaluationPayload<ExtArgs>;
            fields: Prisma.SessionEvaluationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionEvaluationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionEvaluationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionEvaluationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionEvaluationPayload>;
                };
                findFirst: {
                    args: Prisma.SessionEvaluationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionEvaluationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionEvaluationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionEvaluationPayload>;
                };
                findMany: {
                    args: Prisma.SessionEvaluationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionEvaluationPayload>[];
                };
                create: {
                    args: Prisma.SessionEvaluationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionEvaluationPayload>;
                };
                createMany: {
                    args: Prisma.SessionEvaluationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SessionEvaluationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionEvaluationPayload>;
                };
                update: {
                    args: Prisma.SessionEvaluationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionEvaluationPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionEvaluationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionEvaluationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SessionEvaluationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionEvaluationPayload>;
                };
                aggregate: {
                    args: Prisma.SessionEvaluationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSessionEvaluation>;
                };
                groupBy: {
                    args: Prisma.SessionEvaluationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionEvaluationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionEvaluationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionEvaluationCountAggregateOutputType> | number;
                };
            };
        };
        Reponse: {
            payload: Prisma.$ReponsePayload<ExtArgs>;
            fields: Prisma.ReponseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReponseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReponsePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReponseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReponsePayload>;
                };
                findFirst: {
                    args: Prisma.ReponseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReponsePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReponseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReponsePayload>;
                };
                findMany: {
                    args: Prisma.ReponseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReponsePayload>[];
                };
                create: {
                    args: Prisma.ReponseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReponsePayload>;
                };
                createMany: {
                    args: Prisma.ReponseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ReponseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReponsePayload>;
                };
                update: {
                    args: Prisma.ReponseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReponsePayload>;
                };
                deleteMany: {
                    args: Prisma.ReponseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReponseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ReponseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReponsePayload>;
                };
                aggregate: {
                    args: Prisma.ReponseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReponse>;
                };
                groupBy: {
                    args: Prisma.ReponseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReponseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReponseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReponseCountAggregateOutputType> | number;
                };
            };
        };
        RapportPdf: {
            payload: Prisma.$RapportPdfPayload<ExtArgs>;
            fields: Prisma.RapportPdfFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RapportPdfFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RapportPdfPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RapportPdfFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RapportPdfPayload>;
                };
                findFirst: {
                    args: Prisma.RapportPdfFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RapportPdfPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RapportPdfFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RapportPdfPayload>;
                };
                findMany: {
                    args: Prisma.RapportPdfFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RapportPdfPayload>[];
                };
                create: {
                    args: Prisma.RapportPdfCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RapportPdfPayload>;
                };
                createMany: {
                    args: Prisma.RapportPdfCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.RapportPdfDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RapportPdfPayload>;
                };
                update: {
                    args: Prisma.RapportPdfUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RapportPdfPayload>;
                };
                deleteMany: {
                    args: Prisma.RapportPdfDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RapportPdfUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.RapportPdfUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RapportPdfPayload>;
                };
                aggregate: {
                    args: Prisma.RapportPdfAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRapportPdf>;
                };
                groupBy: {
                    args: Prisma.RapportPdfGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RapportPdfGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RapportPdfCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RapportPdfCountAggregateOutputType> | number;
                };
            };
        };
        AbonnementModule: {
            payload: Prisma.$AbonnementModulePayload<ExtArgs>;
            fields: Prisma.AbonnementModuleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AbonnementModuleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonnementModulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AbonnementModuleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonnementModulePayload>;
                };
                findFirst: {
                    args: Prisma.AbonnementModuleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonnementModulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AbonnementModuleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonnementModulePayload>;
                };
                findMany: {
                    args: Prisma.AbonnementModuleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonnementModulePayload>[];
                };
                create: {
                    args: Prisma.AbonnementModuleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonnementModulePayload>;
                };
                createMany: {
                    args: Prisma.AbonnementModuleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AbonnementModuleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonnementModulePayload>;
                };
                update: {
                    args: Prisma.AbonnementModuleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonnementModulePayload>;
                };
                deleteMany: {
                    args: Prisma.AbonnementModuleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AbonnementModuleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AbonnementModuleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AbonnementModulePayload>;
                };
                aggregate: {
                    args: Prisma.AbonnementModuleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAbonnementModule>;
                };
                groupBy: {
                    args: Prisma.AbonnementModuleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AbonnementModuleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AbonnementModuleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AbonnementModuleCountAggregateOutputType> | number;
                };
            };
        };
        Patient: {
            payload: Prisma.$PatientPayload<ExtArgs>;
            fields: Prisma.PatientFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PatientFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>;
                };
                findFirst: {
                    args: Prisma.PatientFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>;
                };
                findMany: {
                    args: Prisma.PatientFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>[];
                };
                create: {
                    args: Prisma.PatientCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>;
                };
                createMany: {
                    args: Prisma.PatientCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.PatientDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>;
                };
                update: {
                    args: Prisma.PatientUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>;
                };
                deleteMany: {
                    args: Prisma.PatientDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PatientUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.PatientUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientPayload>;
                };
                aggregate: {
                    args: Prisma.PatientAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatient>;
                };
                groupBy: {
                    args: Prisma.PatientGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PatientCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientCountAggregateOutputType> | number;
                };
            };
        };
        MesureNews: {
            payload: Prisma.$MesureNewsPayload<ExtArgs>;
            fields: Prisma.MesureNewsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MesureNewsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesureNewsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MesureNewsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesureNewsPayload>;
                };
                findFirst: {
                    args: Prisma.MesureNewsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesureNewsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MesureNewsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesureNewsPayload>;
                };
                findMany: {
                    args: Prisma.MesureNewsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesureNewsPayload>[];
                };
                create: {
                    args: Prisma.MesureNewsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesureNewsPayload>;
                };
                createMany: {
                    args: Prisma.MesureNewsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MesureNewsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesureNewsPayload>;
                };
                update: {
                    args: Prisma.MesureNewsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesureNewsPayload>;
                };
                deleteMany: {
                    args: Prisma.MesureNewsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MesureNewsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MesureNewsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MesureNewsPayload>;
                };
                aggregate: {
                    args: Prisma.MesureNewsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMesureNews>;
                };
                groupBy: {
                    args: Prisma.MesureNewsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MesureNewsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MesureNewsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MesureNewsCountAggregateOutputType> | number;
                };
            };
        };
        Alerte: {
            payload: Prisma.$AlertePayload<ExtArgs>;
            fields: Prisma.AlerteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AlerteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AlerteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>;
                };
                findFirst: {
                    args: Prisma.AlerteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AlerteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>;
                };
                findMany: {
                    args: Prisma.AlerteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>[];
                };
                create: {
                    args: Prisma.AlerteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>;
                };
                createMany: {
                    args: Prisma.AlerteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AlerteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>;
                };
                update: {
                    args: Prisma.AlerteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>;
                };
                deleteMany: {
                    args: Prisma.AlerteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AlerteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AlerteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AlertePayload>;
                };
                aggregate: {
                    args: Prisma.AlerteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlerte>;
                };
                groupBy: {
                    args: Prisma.AlerteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlerteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AlerteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlerteCountAggregateOutputType> | number;
                };
            };
        };
        Intervention: {
            payload: Prisma.$InterventionPayload<ExtArgs>;
            fields: Prisma.InterventionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InterventionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterventionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InterventionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterventionPayload>;
                };
                findFirst: {
                    args: Prisma.InterventionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterventionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InterventionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterventionPayload>;
                };
                findMany: {
                    args: Prisma.InterventionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterventionPayload>[];
                };
                create: {
                    args: Prisma.InterventionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterventionPayload>;
                };
                createMany: {
                    args: Prisma.InterventionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.InterventionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterventionPayload>;
                };
                update: {
                    args: Prisma.InterventionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterventionPayload>;
                };
                deleteMany: {
                    args: Prisma.InterventionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InterventionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.InterventionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InterventionPayload>;
                };
                aggregate: {
                    args: Prisma.InterventionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIntervention>;
                };
                groupBy: {
                    args: Prisma.InterventionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterventionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InterventionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InterventionCountAggregateOutputType> | number;
                };
            };
        };
        TypeEi: {
            payload: Prisma.$TypeEiPayload<ExtArgs>;
            fields: Prisma.TypeEiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TypeEiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeEiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TypeEiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeEiPayload>;
                };
                findFirst: {
                    args: Prisma.TypeEiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeEiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TypeEiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeEiPayload>;
                };
                findMany: {
                    args: Prisma.TypeEiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeEiPayload>[];
                };
                create: {
                    args: Prisma.TypeEiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeEiPayload>;
                };
                createMany: {
                    args: Prisma.TypeEiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.TypeEiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeEiPayload>;
                };
                update: {
                    args: Prisma.TypeEiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeEiPayload>;
                };
                deleteMany: {
                    args: Prisma.TypeEiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TypeEiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.TypeEiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TypeEiPayload>;
                };
                aggregate: {
                    args: Prisma.TypeEiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTypeEi>;
                };
                groupBy: {
                    args: Prisma.TypeEiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TypeEiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TypeEiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TypeEiCountAggregateOutputType> | number;
                };
            };
        };
        EvenementIndesirable: {
            payload: Prisma.$EvenementIndesirablePayload<ExtArgs>;
            fields: Prisma.EvenementIndesirableFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EvenementIndesirableFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementIndesirablePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EvenementIndesirableFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementIndesirablePayload>;
                };
                findFirst: {
                    args: Prisma.EvenementIndesirableFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementIndesirablePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EvenementIndesirableFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementIndesirablePayload>;
                };
                findMany: {
                    args: Prisma.EvenementIndesirableFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementIndesirablePayload>[];
                };
                create: {
                    args: Prisma.EvenementIndesirableCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementIndesirablePayload>;
                };
                createMany: {
                    args: Prisma.EvenementIndesirableCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.EvenementIndesirableDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementIndesirablePayload>;
                };
                update: {
                    args: Prisma.EvenementIndesirableUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementIndesirablePayload>;
                };
                deleteMany: {
                    args: Prisma.EvenementIndesirableDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EvenementIndesirableUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.EvenementIndesirableUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementIndesirablePayload>;
                };
                aggregate: {
                    args: Prisma.EvenementIndesirableAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvenementIndesirable>;
                };
                groupBy: {
                    args: Prisma.EvenementIndesirableGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvenementIndesirableGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EvenementIndesirableCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvenementIndesirableCountAggregateOutputType> | number;
                };
            };
        };
        EvenementTransition: {
            payload: Prisma.$EvenementTransitionPayload<ExtArgs>;
            fields: Prisma.EvenementTransitionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EvenementTransitionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementTransitionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EvenementTransitionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementTransitionPayload>;
                };
                findFirst: {
                    args: Prisma.EvenementTransitionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementTransitionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EvenementTransitionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementTransitionPayload>;
                };
                findMany: {
                    args: Prisma.EvenementTransitionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementTransitionPayload>[];
                };
                create: {
                    args: Prisma.EvenementTransitionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementTransitionPayload>;
                };
                createMany: {
                    args: Prisma.EvenementTransitionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.EvenementTransitionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementTransitionPayload>;
                };
                update: {
                    args: Prisma.EvenementTransitionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementTransitionPayload>;
                };
                deleteMany: {
                    args: Prisma.EvenementTransitionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EvenementTransitionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.EvenementTransitionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvenementTransitionPayload>;
                };
                aggregate: {
                    args: Prisma.EvenementTransitionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvenementTransition>;
                };
                groupBy: {
                    args: Prisma.EvenementTransitionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvenementTransitionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EvenementTransitionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvenementTransitionCountAggregateOutputType> | number;
                };
            };
        };
        Cause: {
            payload: Prisma.$CausePayload<ExtArgs>;
            fields: Prisma.CauseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CauseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CausePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CauseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CausePayload>;
                };
                findFirst: {
                    args: Prisma.CauseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CausePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CauseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CausePayload>;
                };
                findMany: {
                    args: Prisma.CauseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CausePayload>[];
                };
                create: {
                    args: Prisma.CauseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CausePayload>;
                };
                createMany: {
                    args: Prisma.CauseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CauseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CausePayload>;
                };
                update: {
                    args: Prisma.CauseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CausePayload>;
                };
                deleteMany: {
                    args: Prisma.CauseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CauseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CauseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CausePayload>;
                };
                aggregate: {
                    args: Prisma.CauseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCause>;
                };
                groupBy: {
                    args: Prisma.CauseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CauseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CauseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CauseCountAggregateOutputType> | number;
                };
            };
        };
        ActionCorrective: {
            payload: Prisma.$ActionCorrectivePayload<ExtArgs>;
            fields: Prisma.ActionCorrectiveFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ActionCorrectiveFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActionCorrectivePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ActionCorrectiveFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActionCorrectivePayload>;
                };
                findFirst: {
                    args: Prisma.ActionCorrectiveFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActionCorrectivePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ActionCorrectiveFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActionCorrectivePayload>;
                };
                findMany: {
                    args: Prisma.ActionCorrectiveFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActionCorrectivePayload>[];
                };
                create: {
                    args: Prisma.ActionCorrectiveCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActionCorrectivePayload>;
                };
                createMany: {
                    args: Prisma.ActionCorrectiveCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ActionCorrectiveDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActionCorrectivePayload>;
                };
                update: {
                    args: Prisma.ActionCorrectiveUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActionCorrectivePayload>;
                };
                deleteMany: {
                    args: Prisma.ActionCorrectiveDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ActionCorrectiveUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ActionCorrectiveUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActionCorrectivePayload>;
                };
                aggregate: {
                    args: Prisma.ActionCorrectiveAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateActionCorrective>;
                };
                groupBy: {
                    args: Prisma.ActionCorrectiveGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActionCorrectiveGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ActionCorrectiveCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActionCorrectiveCountAggregateOutputType> | number;
                };
            };
        };
        PieceJointe: {
            payload: Prisma.$PieceJointePayload<ExtArgs>;
            fields: Prisma.PieceJointeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PieceJointeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceJointePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PieceJointeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceJointePayload>;
                };
                findFirst: {
                    args: Prisma.PieceJointeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceJointePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PieceJointeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceJointePayload>;
                };
                findMany: {
                    args: Prisma.PieceJointeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceJointePayload>[];
                };
                create: {
                    args: Prisma.PieceJointeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceJointePayload>;
                };
                createMany: {
                    args: Prisma.PieceJointeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.PieceJointeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceJointePayload>;
                };
                update: {
                    args: Prisma.PieceJointeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceJointePayload>;
                };
                deleteMany: {
                    args: Prisma.PieceJointeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PieceJointeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.PieceJointeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PieceJointePayload>;
                };
                aggregate: {
                    args: Prisma.PieceJointeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePieceJointe>;
                };
                groupBy: {
                    args: Prisma.PieceJointeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PieceJointeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PieceJointeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PieceJointeCountAggregateOutputType> | number;
                };
            };
        };
        Formation: {
            payload: Prisma.$FormationPayload<ExtArgs>;
            fields: Prisma.FormationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FormationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FormationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormationPayload>;
                };
                findFirst: {
                    args: Prisma.FormationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FormationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormationPayload>;
                };
                findMany: {
                    args: Prisma.FormationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormationPayload>[];
                };
                create: {
                    args: Prisma.FormationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormationPayload>;
                };
                createMany: {
                    args: Prisma.FormationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.FormationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormationPayload>;
                };
                update: {
                    args: Prisma.FormationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormationPayload>;
                };
                deleteMany: {
                    args: Prisma.FormationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FormationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.FormationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FormationPayload>;
                };
                aggregate: {
                    args: Prisma.FormationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFormation>;
                };
                groupBy: {
                    args: Prisma.FormationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FormationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FormationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FormationCountAggregateOutputType> | number;
                };
            };
        };
        Reservation: {
            payload: Prisma.$ReservationPayload<ExtArgs>;
            fields: Prisma.ReservationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReservationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                findFirst: {
                    args: Prisma.ReservationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                findMany: {
                    args: Prisma.ReservationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>[];
                };
                create: {
                    args: Prisma.ReservationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                createMany: {
                    args: Prisma.ReservationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ReservationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                update: {
                    args: Prisma.ReservationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                deleteMany: {
                    args: Prisma.ReservationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReservationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ReservationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                aggregate: {
                    args: Prisma.ReservationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReservation>;
                };
                groupBy: {
                    args: Prisma.ReservationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReservationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservationCountAggregateOutputType> | number;
                };
            };
        };
        Facture: {
            payload: Prisma.$FacturePayload<ExtArgs>;
            fields: Prisma.FactureFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FactureFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FactureFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>;
                };
                findFirst: {
                    args: Prisma.FactureFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FactureFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>;
                };
                findMany: {
                    args: Prisma.FactureFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>[];
                };
                create: {
                    args: Prisma.FactureCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>;
                };
                createMany: {
                    args: Prisma.FactureCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.FactureDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>;
                };
                update: {
                    args: Prisma.FactureUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>;
                };
                deleteMany: {
                    args: Prisma.FactureDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FactureUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.FactureUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacturePayload>;
                };
                aggregate: {
                    args: Prisma.FactureAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFacture>;
                };
                groupBy: {
                    args: Prisma.FactureGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FactureGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FactureCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FactureCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        ParametrePlateforme: {
            payload: Prisma.$ParametrePlateformePayload<ExtArgs>;
            fields: Prisma.ParametrePlateformeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ParametrePlateformeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParametrePlateformePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ParametrePlateformeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParametrePlateformePayload>;
                };
                findFirst: {
                    args: Prisma.ParametrePlateformeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParametrePlateformePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ParametrePlateformeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParametrePlateformePayload>;
                };
                findMany: {
                    args: Prisma.ParametrePlateformeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParametrePlateformePayload>[];
                };
                create: {
                    args: Prisma.ParametrePlateformeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParametrePlateformePayload>;
                };
                createMany: {
                    args: Prisma.ParametrePlateformeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ParametrePlateformeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParametrePlateformePayload>;
                };
                update: {
                    args: Prisma.ParametrePlateformeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParametrePlateformePayload>;
                };
                deleteMany: {
                    args: Prisma.ParametrePlateformeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ParametrePlateformeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ParametrePlateformeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ParametrePlateformePayload>;
                };
                aggregate: {
                    args: Prisma.ParametrePlateformeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParametrePlateforme>;
                };
                groupBy: {
                    args: Prisma.ParametrePlateformeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParametrePlateformeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ParametrePlateformeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParametrePlateformeCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const OrganisationScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly ifu: "ifu";
    readonly type: "type";
    readonly adresse: "adresse";
    readonly telephone: "telephone";
    readonly email: "email";
    readonly actif: "actif";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrganisationScalarFieldEnum = (typeof OrganisationScalarFieldEnum)[keyof typeof OrganisationScalarFieldEnum];
export declare const UtilisateurScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly serviceId: "serviceId";
    readonly typeCompte: "typeCompte";
    readonly email: "email";
    readonly motDePasseHash: "motDePasseHash";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly telephone: "telephone";
    readonly actif: "actif";
    readonly emailVerifieLe: "emailVerifieLe";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const PasswordResetTokenScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum];
export declare const EmailVerificationTokenScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
};
export type EmailVerificationTokenScalarFieldEnum = (typeof EmailVerificationTokenScalarFieldEnum)[keyof typeof EmailVerificationTokenScalarFieldEnum];
export declare const UtilisateurRoleScalarFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly role: "role";
    readonly createdAt: "createdAt";
};
export type UtilisateurRoleScalarFieldEnum = (typeof UtilisateurRoleScalarFieldEnum)[keyof typeof UtilisateurRoleScalarFieldEnum];
export declare const ServiceScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly nom: "nom";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];
export declare const JournalAuditScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly utilisateurId: "utilisateurId";
    readonly action: "action";
    readonly entite: "entite";
    readonly entiteId: "entiteId";
    readonly donneesAvant: "donneesAvant";
    readonly donneesApres: "donneesApres";
    readonly createdAt: "createdAt";
};
export type JournalAuditScalarFieldEnum = (typeof JournalAuditScalarFieldEnum)[keyof typeof JournalAuditScalarFieldEnum];
export declare const GrilleScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly type: "type";
    readonly version: "version";
    readonly statut: "statut";
    readonly publieeLe: "publieeLe";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GrilleScalarFieldEnum = (typeof GrilleScalarFieldEnum)[keyof typeof GrilleScalarFieldEnum];
export declare const DomaineScalarFieldEnum: {
    readonly id: "id";
    readonly grilleId: "grilleId";
    readonly nom: "nom";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DomaineScalarFieldEnum = (typeof DomaineScalarFieldEnum)[keyof typeof DomaineScalarFieldEnum];
export declare const NormeScalarFieldEnum: {
    readonly id: "id";
    readonly domaineId: "domaineId";
    readonly code: "code";
    readonly libelle: "libelle";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type NormeScalarFieldEnum = (typeof NormeScalarFieldEnum)[keyof typeof NormeScalarFieldEnum];
export declare const CritereScalarFieldEnum: {
    readonly id: "id";
    readonly normeId: "normeId";
    readonly code: "code";
    readonly libelle: "libelle";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CritereScalarFieldEnum = (typeof CritereScalarFieldEnum)[keyof typeof CritereScalarFieldEnum];
export declare const ElementMesurableScalarFieldEnum: {
    readonly id: "id";
    readonly critereId: "critereId";
    readonly libelle: "libelle";
    readonly typeReponse: "typeReponse";
    readonly optionsChoix: "optionsChoix";
    readonly ordre: "ordre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ElementMesurableScalarFieldEnum = (typeof ElementMesurableScalarFieldEnum)[keyof typeof ElementMesurableScalarFieldEnum];
export declare const SessionEvaluationScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly grilleId: "grilleId";
    readonly demarreeParId: "demarreeParId";
    readonly soumiseParId: "soumiseParId";
    readonly statut: "statut";
    readonly scoreGlobal: "scoreGlobal";
    readonly dateDebut: "dateDebut";
    readonly dateSoumission: "dateSoumission";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SessionEvaluationScalarFieldEnum = (typeof SessionEvaluationScalarFieldEnum)[keyof typeof SessionEvaluationScalarFieldEnum];
export declare const ReponseScalarFieldEnum: {
    readonly id: "id";
    readonly sessionId: "sessionId";
    readonly elementMesurableId: "elementMesurableId";
    readonly valeur: "valeur";
    readonly commentaire: "commentaire";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReponseScalarFieldEnum = (typeof ReponseScalarFieldEnum)[keyof typeof ReponseScalarFieldEnum];
export declare const RapportPdfScalarFieldEnum: {
    readonly id: "id";
    readonly sessionId: "sessionId";
    readonly statut: "statut";
    readonly url: "url";
    readonly genereLe: "genereLe";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RapportPdfScalarFieldEnum = (typeof RapportPdfScalarFieldEnum)[keyof typeof RapportPdfScalarFieldEnum];
export declare const AbonnementModuleScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly module: "module";
    readonly statut: "statut";
    readonly essaiDebut: "essaiDebut";
    readonly essaiFin: "essaiFin";
    readonly activeLe: "activeLe";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AbonnementModuleScalarFieldEnum = (typeof AbonnementModuleScalarFieldEnum)[keyof typeof AbonnementModuleScalarFieldEnum];
export declare const PatientScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly serviceId: "serviceId";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly dateNaissance: "dateNaissance";
    readonly sexe: "sexe";
    readonly numeroDossier: "numeroDossier";
    readonly statut: "statut";
    readonly dateAdmission: "dateAdmission";
    readonly dateSortie: "dateSortie";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum];
export declare const MesureNewsScalarFieldEnum: {
    readonly id: "id";
    readonly patientId: "patientId";
    readonly saisieParId: "saisieParId";
    readonly frequenceRespiratoire: "frequenceRespiratoire";
    readonly saturationOxygene: "saturationOxygene";
    readonly oxygenoSupplementation: "oxygenoSupplementation";
    readonly temperature: "temperature";
    readonly pressionArterielleSystolique: "pressionArterielleSystolique";
    readonly frequenceCardiaque: "frequenceCardiaque";
    readonly niveauConscience: "niveauConscience";
    readonly scoreTotal: "scoreTotal";
    readonly niveauRisque: "niveauRisque";
    readonly dateMesure: "dateMesure";
    readonly createdAt: "createdAt";
};
export type MesureNewsScalarFieldEnum = (typeof MesureNewsScalarFieldEnum)[keyof typeof MesureNewsScalarFieldEnum];
export declare const AlerteScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly patientId: "patientId";
    readonly mesureId: "mesureId";
    readonly niveauRisque: "niveauRisque";
    readonly statut: "statut";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AlerteScalarFieldEnum = (typeof AlerteScalarFieldEnum)[keyof typeof AlerteScalarFieldEnum];
export declare const InterventionScalarFieldEnum: {
    readonly id: "id";
    readonly alerteId: "alerteId";
    readonly utilisateurId: "utilisateurId";
    readonly note: "note";
    readonly createdAt: "createdAt";
};
export type InterventionScalarFieldEnum = (typeof InterventionScalarFieldEnum)[keyof typeof InterventionScalarFieldEnum];
export declare const TypeEiScalarFieldEnum: {
    readonly id: "id";
    readonly libelle: "libelle";
    readonly actif: "actif";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TypeEiScalarFieldEnum = (typeof TypeEiScalarFieldEnum)[keyof typeof TypeEiScalarFieldEnum];
export declare const EvenementIndesirableScalarFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly typeEiId: "typeEiId";
    readonly serviceId: "serviceId";
    readonly critereId: "critereId";
    readonly declareParId: "declareParId";
    readonly description: "description";
    readonly gravite: "gravite";
    readonly statut: "statut";
    readonly dateDeclaration: "dateDeclaration";
    readonly dateCloture: "dateCloture";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EvenementIndesirableScalarFieldEnum = (typeof EvenementIndesirableScalarFieldEnum)[keyof typeof EvenementIndesirableScalarFieldEnum];
export declare const EvenementTransitionScalarFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly ancienStatut: "ancienStatut";
    readonly nouveauStatut: "nouveauStatut";
    readonly utilisateurId: "utilisateurId";
    readonly createdAt: "createdAt";
};
export type EvenementTransitionScalarFieldEnum = (typeof EvenementTransitionScalarFieldEnum)[keyof typeof EvenementTransitionScalarFieldEnum];
export declare const CauseScalarFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly type: "type";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type CauseScalarFieldEnum = (typeof CauseScalarFieldEnum)[keyof typeof CauseScalarFieldEnum];
export declare const ActionCorrectiveScalarFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly description: "description";
    readonly responsableId: "responsableId";
    readonly echeance: "echeance";
    readonly statut: "statut";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ActionCorrectiveScalarFieldEnum = (typeof ActionCorrectiveScalarFieldEnum)[keyof typeof ActionCorrectiveScalarFieldEnum];
export declare const PieceJointeScalarFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly url: "url";
    readonly cloudinaryId: "cloudinaryId";
    readonly nomFichier: "nomFichier";
    readonly typeMime: "typeMime";
    readonly tailleOctets: "tailleOctets";
    readonly createdAt: "createdAt";
};
export type PieceJointeScalarFieldEnum = (typeof PieceJointeScalarFieldEnum)[keyof typeof PieceJointeScalarFieldEnum];
export declare const FormationScalarFieldEnum: {
    readonly id: "id";
    readonly titre: "titre";
    readonly description: "description";
    readonly dureeHeures: "dureeHeures";
    readonly prixIndividuel: "prixIndividuel";
    readonly prixGroupe5: "prixGroupe5";
    readonly prixGroupe10: "prixGroupe10";
    readonly actif: "actif";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FormationScalarFieldEnum = (typeof FormationScalarFieldEnum)[keyof typeof FormationScalarFieldEnum];
export declare const ReservationScalarFieldEnum: {
    readonly id: "id";
    readonly formationId: "formationId";
    readonly utilisateurId: "utilisateurId";
    readonly organisationId: "organisationId";
    readonly formule: "formule";
    readonly tarifApplique: "tarifApplique";
    readonly statut: "statut";
    readonly kkiapayTransactionId: "kkiapayTransactionId";
    readonly dateRdv: "dateRdv";
    readonly presenceConfirmee: "presenceConfirmee";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum];
export declare const FactureScalarFieldEnum: {
    readonly id: "id";
    readonly reservationId: "reservationId";
    readonly numero: "numero";
    readonly montant: "montant";
    readonly emiseLe: "emiseLe";
    readonly createdAt: "createdAt";
};
export type FactureScalarFieldEnum = (typeof FactureScalarFieldEnum)[keyof typeof FactureScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly destinataireId: "destinataireId";
    readonly type: "type";
    readonly titre: "titre";
    readonly message: "message";
    readonly lienUrl: "lienUrl";
    readonly luLe: "luLe";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const ParametrePlateformeScalarFieldEnum: {
    readonly id: "id";
    readonly cle: "cle";
    readonly valeur: "valeur";
    readonly type: "type";
    readonly description: "description";
    readonly valeurDefaut: "valeurDefaut";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParametrePlateformeScalarFieldEnum = (typeof ParametrePlateformeScalarFieldEnum)[keyof typeof ParametrePlateformeScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const OrganisationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly ifu: "ifu";
    readonly adresse: "adresse";
    readonly telephone: "telephone";
    readonly email: "email";
};
export type OrganisationOrderByRelevanceFieldEnum = (typeof OrganisationOrderByRelevanceFieldEnum)[keyof typeof OrganisationOrderByRelevanceFieldEnum];
export declare const UtilisateurOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly serviceId: "serviceId";
    readonly email: "email";
    readonly motDePasseHash: "motDePasseHash";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly telephone: "telephone";
};
export type UtilisateurOrderByRelevanceFieldEnum = (typeof UtilisateurOrderByRelevanceFieldEnum)[keyof typeof UtilisateurOrderByRelevanceFieldEnum];
export declare const RefreshTokenOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly tokenHash: "tokenHash";
};
export type RefreshTokenOrderByRelevanceFieldEnum = (typeof RefreshTokenOrderByRelevanceFieldEnum)[keyof typeof RefreshTokenOrderByRelevanceFieldEnum];
export declare const PasswordResetTokenOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly tokenHash: "tokenHash";
};
export type PasswordResetTokenOrderByRelevanceFieldEnum = (typeof PasswordResetTokenOrderByRelevanceFieldEnum)[keyof typeof PasswordResetTokenOrderByRelevanceFieldEnum];
export declare const EmailVerificationTokenOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
    readonly tokenHash: "tokenHash";
};
export type EmailVerificationTokenOrderByRelevanceFieldEnum = (typeof EmailVerificationTokenOrderByRelevanceFieldEnum)[keyof typeof EmailVerificationTokenOrderByRelevanceFieldEnum];
export declare const UtilisateurRoleOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly utilisateurId: "utilisateurId";
};
export type UtilisateurRoleOrderByRelevanceFieldEnum = (typeof UtilisateurRoleOrderByRelevanceFieldEnum)[keyof typeof UtilisateurRoleOrderByRelevanceFieldEnum];
export declare const ServiceOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly nom: "nom";
    readonly description: "description";
};
export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JournalAuditOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly utilisateurId: "utilisateurId";
    readonly action: "action";
    readonly entite: "entite";
    readonly entiteId: "entiteId";
};
export type JournalAuditOrderByRelevanceFieldEnum = (typeof JournalAuditOrderByRelevanceFieldEnum)[keyof typeof JournalAuditOrderByRelevanceFieldEnum];
export declare const GrilleOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
};
export type GrilleOrderByRelevanceFieldEnum = (typeof GrilleOrderByRelevanceFieldEnum)[keyof typeof GrilleOrderByRelevanceFieldEnum];
export declare const DomaineOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly grilleId: "grilleId";
    readonly nom: "nom";
};
export type DomaineOrderByRelevanceFieldEnum = (typeof DomaineOrderByRelevanceFieldEnum)[keyof typeof DomaineOrderByRelevanceFieldEnum];
export declare const NormeOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly domaineId: "domaineId";
    readonly code: "code";
    readonly libelle: "libelle";
};
export type NormeOrderByRelevanceFieldEnum = (typeof NormeOrderByRelevanceFieldEnum)[keyof typeof NormeOrderByRelevanceFieldEnum];
export declare const CritereOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly normeId: "normeId";
    readonly code: "code";
    readonly libelle: "libelle";
};
export type CritereOrderByRelevanceFieldEnum = (typeof CritereOrderByRelevanceFieldEnum)[keyof typeof CritereOrderByRelevanceFieldEnum];
export declare const ElementMesurableOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly critereId: "critereId";
    readonly libelle: "libelle";
};
export type ElementMesurableOrderByRelevanceFieldEnum = (typeof ElementMesurableOrderByRelevanceFieldEnum)[keyof typeof ElementMesurableOrderByRelevanceFieldEnum];
export declare const SessionEvaluationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly grilleId: "grilleId";
    readonly demarreeParId: "demarreeParId";
    readonly soumiseParId: "soumiseParId";
};
export type SessionEvaluationOrderByRelevanceFieldEnum = (typeof SessionEvaluationOrderByRelevanceFieldEnum)[keyof typeof SessionEvaluationOrderByRelevanceFieldEnum];
export declare const ReponseOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly sessionId: "sessionId";
    readonly elementMesurableId: "elementMesurableId";
    readonly commentaire: "commentaire";
};
export type ReponseOrderByRelevanceFieldEnum = (typeof ReponseOrderByRelevanceFieldEnum)[keyof typeof ReponseOrderByRelevanceFieldEnum];
export declare const RapportPdfOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly sessionId: "sessionId";
    readonly url: "url";
};
export type RapportPdfOrderByRelevanceFieldEnum = (typeof RapportPdfOrderByRelevanceFieldEnum)[keyof typeof RapportPdfOrderByRelevanceFieldEnum];
export declare const AbonnementModuleOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
};
export type AbonnementModuleOrderByRelevanceFieldEnum = (typeof AbonnementModuleOrderByRelevanceFieldEnum)[keyof typeof AbonnementModuleOrderByRelevanceFieldEnum];
export declare const PatientOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly serviceId: "serviceId";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly sexe: "sexe";
    readonly numeroDossier: "numeroDossier";
};
export type PatientOrderByRelevanceFieldEnum = (typeof PatientOrderByRelevanceFieldEnum)[keyof typeof PatientOrderByRelevanceFieldEnum];
export declare const MesureNewsOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly patientId: "patientId";
    readonly saisieParId: "saisieParId";
};
export type MesureNewsOrderByRelevanceFieldEnum = (typeof MesureNewsOrderByRelevanceFieldEnum)[keyof typeof MesureNewsOrderByRelevanceFieldEnum];
export declare const AlerteOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly patientId: "patientId";
    readonly mesureId: "mesureId";
};
export type AlerteOrderByRelevanceFieldEnum = (typeof AlerteOrderByRelevanceFieldEnum)[keyof typeof AlerteOrderByRelevanceFieldEnum];
export declare const InterventionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly alerteId: "alerteId";
    readonly utilisateurId: "utilisateurId";
    readonly note: "note";
};
export type InterventionOrderByRelevanceFieldEnum = (typeof InterventionOrderByRelevanceFieldEnum)[keyof typeof InterventionOrderByRelevanceFieldEnum];
export declare const TypeEiOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly libelle: "libelle";
};
export type TypeEiOrderByRelevanceFieldEnum = (typeof TypeEiOrderByRelevanceFieldEnum)[keyof typeof TypeEiOrderByRelevanceFieldEnum];
export declare const EvenementIndesirableOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly organisationId: "organisationId";
    readonly typeEiId: "typeEiId";
    readonly serviceId: "serviceId";
    readonly critereId: "critereId";
    readonly declareParId: "declareParId";
    readonly description: "description";
};
export type EvenementIndesirableOrderByRelevanceFieldEnum = (typeof EvenementIndesirableOrderByRelevanceFieldEnum)[keyof typeof EvenementIndesirableOrderByRelevanceFieldEnum];
export declare const EvenementTransitionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly utilisateurId: "utilisateurId";
};
export type EvenementTransitionOrderByRelevanceFieldEnum = (typeof EvenementTransitionOrderByRelevanceFieldEnum)[keyof typeof EvenementTransitionOrderByRelevanceFieldEnum];
export declare const CauseOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly description: "description";
};
export type CauseOrderByRelevanceFieldEnum = (typeof CauseOrderByRelevanceFieldEnum)[keyof typeof CauseOrderByRelevanceFieldEnum];
export declare const ActionCorrectiveOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly description: "description";
    readonly responsableId: "responsableId";
};
export type ActionCorrectiveOrderByRelevanceFieldEnum = (typeof ActionCorrectiveOrderByRelevanceFieldEnum)[keyof typeof ActionCorrectiveOrderByRelevanceFieldEnum];
export declare const PieceJointeOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly evenementId: "evenementId";
    readonly url: "url";
    readonly cloudinaryId: "cloudinaryId";
    readonly nomFichier: "nomFichier";
    readonly typeMime: "typeMime";
};
export type PieceJointeOrderByRelevanceFieldEnum = (typeof PieceJointeOrderByRelevanceFieldEnum)[keyof typeof PieceJointeOrderByRelevanceFieldEnum];
export declare const FormationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly titre: "titre";
    readonly description: "description";
};
export type FormationOrderByRelevanceFieldEnum = (typeof FormationOrderByRelevanceFieldEnum)[keyof typeof FormationOrderByRelevanceFieldEnum];
export declare const ReservationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly formationId: "formationId";
    readonly utilisateurId: "utilisateurId";
    readonly organisationId: "organisationId";
    readonly kkiapayTransactionId: "kkiapayTransactionId";
};
export type ReservationOrderByRelevanceFieldEnum = (typeof ReservationOrderByRelevanceFieldEnum)[keyof typeof ReservationOrderByRelevanceFieldEnum];
export declare const FactureOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly reservationId: "reservationId";
    readonly numero: "numero";
};
export type FactureOrderByRelevanceFieldEnum = (typeof FactureOrderByRelevanceFieldEnum)[keyof typeof FactureOrderByRelevanceFieldEnum];
export declare const NotificationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly destinataireId: "destinataireId";
    readonly type: "type";
    readonly titre: "titre";
    readonly message: "message";
    readonly lienUrl: "lienUrl";
};
export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum];
export declare const ParametrePlateformeOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly cle: "cle";
    readonly valeur: "valeur";
    readonly type: "type";
    readonly description: "description";
    readonly valeurDefaut: "valeurDefaut";
};
export type ParametrePlateformeOrderByRelevanceFieldEnum = (typeof ParametrePlateformeOrderByRelevanceFieldEnum)[keyof typeof ParametrePlateformeOrderByRelevanceFieldEnum];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type EnumTypeEtablissementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeEtablissement'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type EnumTypeCompteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeCompte'>;
export type EnumRoleUtilisateurFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleUtilisateur'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type EnumStatutGrilleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutGrille'>;
export type EnumTypeReponseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeReponse'>;
export type EnumStatutSessionEvaluationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutSessionEvaluation'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type EnumStatutRapportPdfFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutRapportPdf'>;
export type EnumModuleMetierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModuleMetier'>;
export type EnumStatutAbonnementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutAbonnement'>;
export type EnumStatutPatientFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPatient'>;
export type EnumNiveauConscienceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NiveauConscience'>;
export type EnumNiveauRisqueNewsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NiveauRisqueNews'>;
export type EnumStatutAlerteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutAlerte'>;
export type EnumGraviteEiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GraviteEi'>;
export type EnumStatutEiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutEi'>;
export type EnumTypeCauseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeCause'>;
export type EnumStatutActionCorrectiveFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutActionCorrective'>;
export type EnumFormuleFormationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormuleFormation'>;
export type EnumStatutReservationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutReservation'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    organisation?: Prisma.OrganisationOmit;
    utilisateur?: Prisma.UtilisateurOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
    passwordResetToken?: Prisma.PasswordResetTokenOmit;
    emailVerificationToken?: Prisma.EmailVerificationTokenOmit;
    utilisateurRole?: Prisma.UtilisateurRoleOmit;
    service?: Prisma.ServiceOmit;
    journalAudit?: Prisma.JournalAuditOmit;
    grille?: Prisma.GrilleOmit;
    domaine?: Prisma.DomaineOmit;
    norme?: Prisma.NormeOmit;
    critere?: Prisma.CritereOmit;
    elementMesurable?: Prisma.ElementMesurableOmit;
    sessionEvaluation?: Prisma.SessionEvaluationOmit;
    reponse?: Prisma.ReponseOmit;
    rapportPdf?: Prisma.RapportPdfOmit;
    abonnementModule?: Prisma.AbonnementModuleOmit;
    patient?: Prisma.PatientOmit;
    mesureNews?: Prisma.MesureNewsOmit;
    alerte?: Prisma.AlerteOmit;
    intervention?: Prisma.InterventionOmit;
    typeEi?: Prisma.TypeEiOmit;
    evenementIndesirable?: Prisma.EvenementIndesirableOmit;
    evenementTransition?: Prisma.EvenementTransitionOmit;
    cause?: Prisma.CauseOmit;
    actionCorrective?: Prisma.ActionCorrectiveOmit;
    pieceJointe?: Prisma.PieceJointeOmit;
    formation?: Prisma.FormationOmit;
    reservation?: Prisma.ReservationOmit;
    facture?: Prisma.FactureOmit;
    notification?: Prisma.NotificationOmit;
    parametrePlateforme?: Prisma.ParametrePlateformeOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
