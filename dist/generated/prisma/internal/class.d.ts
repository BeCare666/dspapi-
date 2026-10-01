import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get organisation(): Prisma.OrganisationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get emailVerificationToken(): Prisma.EmailVerificationTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get utilisateurRole(): Prisma.UtilisateurRoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get service(): Prisma.ServiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get journalAudit(): Prisma.JournalAuditDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get grille(): Prisma.GrilleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get domaine(): Prisma.DomaineDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get norme(): Prisma.NormeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get critere(): Prisma.CritereDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get elementMesurable(): Prisma.ElementMesurableDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get sessionEvaluation(): Prisma.SessionEvaluationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get reponse(): Prisma.ReponseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rapportPdf(): Prisma.RapportPdfDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get abonnementModule(): Prisma.AbonnementModuleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get patient(): Prisma.PatientDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mesureNews(): Prisma.MesureNewsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get alerte(): Prisma.AlerteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get intervention(): Prisma.InterventionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get typeEi(): Prisma.TypeEiDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get evenementIndesirable(): Prisma.EvenementIndesirableDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get evenementTransition(): Prisma.EvenementTransitionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cause(): Prisma.CauseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get actionCorrective(): Prisma.ActionCorrectiveDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pieceJointe(): Prisma.PieceJointeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get formation(): Prisma.FormationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get reservation(): Prisma.ReservationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get facture(): Prisma.FactureDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get parametrePlateforme(): Prisma.ParametrePlateformeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
