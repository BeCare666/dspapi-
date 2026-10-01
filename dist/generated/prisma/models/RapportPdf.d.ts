import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RapportPdfModel = runtime.Types.Result.DefaultSelection<Prisma.$RapportPdfPayload>;
export type AggregateRapportPdf = {
    _count: RapportPdfCountAggregateOutputType | null;
    _min: RapportPdfMinAggregateOutputType | null;
    _max: RapportPdfMaxAggregateOutputType | null;
};
export type RapportPdfMinAggregateOutputType = {
    id: string | null;
    sessionId: string | null;
    statut: $Enums.StatutRapportPdf | null;
    url: string | null;
    genereLe: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RapportPdfMaxAggregateOutputType = {
    id: string | null;
    sessionId: string | null;
    statut: $Enums.StatutRapportPdf | null;
    url: string | null;
    genereLe: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RapportPdfCountAggregateOutputType = {
    id: number;
    sessionId: number;
    statut: number;
    url: number;
    genereLe: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RapportPdfMinAggregateInputType = {
    id?: true;
    sessionId?: true;
    statut?: true;
    url?: true;
    genereLe?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RapportPdfMaxAggregateInputType = {
    id?: true;
    sessionId?: true;
    statut?: true;
    url?: true;
    genereLe?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RapportPdfCountAggregateInputType = {
    id?: true;
    sessionId?: true;
    statut?: true;
    url?: true;
    genereLe?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RapportPdfAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RapportPdfWhereInput;
    orderBy?: Prisma.RapportPdfOrderByWithRelationInput | Prisma.RapportPdfOrderByWithRelationInput[];
    cursor?: Prisma.RapportPdfWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RapportPdfCountAggregateInputType;
    _min?: RapportPdfMinAggregateInputType;
    _max?: RapportPdfMaxAggregateInputType;
};
export type GetRapportPdfAggregateType<T extends RapportPdfAggregateArgs> = {
    [P in keyof T & keyof AggregateRapportPdf]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRapportPdf[P]> : Prisma.GetScalarType<T[P], AggregateRapportPdf[P]>;
};
export type RapportPdfGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RapportPdfWhereInput;
    orderBy?: Prisma.RapportPdfOrderByWithAggregationInput | Prisma.RapportPdfOrderByWithAggregationInput[];
    by: Prisma.RapportPdfScalarFieldEnum[] | Prisma.RapportPdfScalarFieldEnum;
    having?: Prisma.RapportPdfScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RapportPdfCountAggregateInputType | true;
    _min?: RapportPdfMinAggregateInputType;
    _max?: RapportPdfMaxAggregateInputType;
};
export type RapportPdfGroupByOutputType = {
    id: string;
    sessionId: string;
    statut: $Enums.StatutRapportPdf;
    url: string | null;
    genereLe: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RapportPdfCountAggregateOutputType | null;
    _min: RapportPdfMinAggregateOutputType | null;
    _max: RapportPdfMaxAggregateOutputType | null;
};
export type GetRapportPdfGroupByPayload<T extends RapportPdfGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RapportPdfGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RapportPdfGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RapportPdfGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RapportPdfGroupByOutputType[P]>;
}>>;
export type RapportPdfWhereInput = {
    AND?: Prisma.RapportPdfWhereInput | Prisma.RapportPdfWhereInput[];
    OR?: Prisma.RapportPdfWhereInput[];
    NOT?: Prisma.RapportPdfWhereInput | Prisma.RapportPdfWhereInput[];
    id?: Prisma.StringFilter<"RapportPdf"> | string;
    sessionId?: Prisma.StringFilter<"RapportPdf"> | string;
    statut?: Prisma.EnumStatutRapportPdfFilter<"RapportPdf"> | $Enums.StatutRapportPdf;
    url?: Prisma.StringNullableFilter<"RapportPdf"> | string | null;
    genereLe?: Prisma.DateTimeNullableFilter<"RapportPdf"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RapportPdf"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RapportPdf"> | Date | string;
    session?: Prisma.XOR<Prisma.SessionEvaluationScalarRelationFilter, Prisma.SessionEvaluationWhereInput>;
};
export type RapportPdfOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    url?: Prisma.SortOrderInput | Prisma.SortOrder;
    genereLe?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    session?: Prisma.SessionEvaluationOrderByWithRelationInput;
    _relevance?: Prisma.RapportPdfOrderByRelevanceInput;
};
export type RapportPdfWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    sessionId?: string;
    AND?: Prisma.RapportPdfWhereInput | Prisma.RapportPdfWhereInput[];
    OR?: Prisma.RapportPdfWhereInput[];
    NOT?: Prisma.RapportPdfWhereInput | Prisma.RapportPdfWhereInput[];
    statut?: Prisma.EnumStatutRapportPdfFilter<"RapportPdf"> | $Enums.StatutRapportPdf;
    url?: Prisma.StringNullableFilter<"RapportPdf"> | string | null;
    genereLe?: Prisma.DateTimeNullableFilter<"RapportPdf"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RapportPdf"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RapportPdf"> | Date | string;
    session?: Prisma.XOR<Prisma.SessionEvaluationScalarRelationFilter, Prisma.SessionEvaluationWhereInput>;
}, "id" | "sessionId">;
export type RapportPdfOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    url?: Prisma.SortOrderInput | Prisma.SortOrder;
    genereLe?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RapportPdfCountOrderByAggregateInput;
    _max?: Prisma.RapportPdfMaxOrderByAggregateInput;
    _min?: Prisma.RapportPdfMinOrderByAggregateInput;
};
export type RapportPdfScalarWhereWithAggregatesInput = {
    AND?: Prisma.RapportPdfScalarWhereWithAggregatesInput | Prisma.RapportPdfScalarWhereWithAggregatesInput[];
    OR?: Prisma.RapportPdfScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RapportPdfScalarWhereWithAggregatesInput | Prisma.RapportPdfScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RapportPdf"> | string;
    sessionId?: Prisma.StringWithAggregatesFilter<"RapportPdf"> | string;
    statut?: Prisma.EnumStatutRapportPdfWithAggregatesFilter<"RapportPdf"> | $Enums.StatutRapportPdf;
    url?: Prisma.StringNullableWithAggregatesFilter<"RapportPdf"> | string | null;
    genereLe?: Prisma.DateTimeNullableWithAggregatesFilter<"RapportPdf"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RapportPdf"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RapportPdf"> | Date | string;
};
export type RapportPdfCreateInput = {
    id?: string;
    statut?: $Enums.StatutRapportPdf;
    url?: string | null;
    genereLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    session: Prisma.SessionEvaluationCreateNestedOneWithoutRapportPdfInput;
};
export type RapportPdfUncheckedCreateInput = {
    id?: string;
    sessionId: string;
    statut?: $Enums.StatutRapportPdf;
    url?: string | null;
    genereLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RapportPdfUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutRapportPdfFieldUpdateOperationsInput | $Enums.StatutRapportPdf;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genereLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    session?: Prisma.SessionEvaluationUpdateOneRequiredWithoutRapportPdfNestedInput;
};
export type RapportPdfUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutRapportPdfFieldUpdateOperationsInput | $Enums.StatutRapportPdf;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genereLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RapportPdfCreateManyInput = {
    id?: string;
    sessionId: string;
    statut?: $Enums.StatutRapportPdf;
    url?: string | null;
    genereLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RapportPdfUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutRapportPdfFieldUpdateOperationsInput | $Enums.StatutRapportPdf;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genereLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RapportPdfUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutRapportPdfFieldUpdateOperationsInput | $Enums.StatutRapportPdf;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genereLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RapportPdfNullableScalarRelationFilter = {
    is?: Prisma.RapportPdfWhereInput | null;
    isNot?: Prisma.RapportPdfWhereInput | null;
};
export type RapportPdfOrderByRelevanceInput = {
    fields: Prisma.RapportPdfOrderByRelevanceFieldEnum | Prisma.RapportPdfOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type RapportPdfCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    genereLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RapportPdfMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    genereLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RapportPdfMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    genereLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RapportPdfCreateNestedOneWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.RapportPdfCreateWithoutSessionInput, Prisma.RapportPdfUncheckedCreateWithoutSessionInput>;
    connectOrCreate?: Prisma.RapportPdfCreateOrConnectWithoutSessionInput;
    connect?: Prisma.RapportPdfWhereUniqueInput;
};
export type RapportPdfUncheckedCreateNestedOneWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.RapportPdfCreateWithoutSessionInput, Prisma.RapportPdfUncheckedCreateWithoutSessionInput>;
    connectOrCreate?: Prisma.RapportPdfCreateOrConnectWithoutSessionInput;
    connect?: Prisma.RapportPdfWhereUniqueInput;
};
export type RapportPdfUpdateOneWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.RapportPdfCreateWithoutSessionInput, Prisma.RapportPdfUncheckedCreateWithoutSessionInput>;
    connectOrCreate?: Prisma.RapportPdfCreateOrConnectWithoutSessionInput;
    upsert?: Prisma.RapportPdfUpsertWithoutSessionInput;
    disconnect?: Prisma.RapportPdfWhereInput | boolean;
    delete?: Prisma.RapportPdfWhereInput | boolean;
    connect?: Prisma.RapportPdfWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RapportPdfUpdateToOneWithWhereWithoutSessionInput, Prisma.RapportPdfUpdateWithoutSessionInput>, Prisma.RapportPdfUncheckedUpdateWithoutSessionInput>;
};
export type RapportPdfUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.RapportPdfCreateWithoutSessionInput, Prisma.RapportPdfUncheckedCreateWithoutSessionInput>;
    connectOrCreate?: Prisma.RapportPdfCreateOrConnectWithoutSessionInput;
    upsert?: Prisma.RapportPdfUpsertWithoutSessionInput;
    disconnect?: Prisma.RapportPdfWhereInput | boolean;
    delete?: Prisma.RapportPdfWhereInput | boolean;
    connect?: Prisma.RapportPdfWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RapportPdfUpdateToOneWithWhereWithoutSessionInput, Prisma.RapportPdfUpdateWithoutSessionInput>, Prisma.RapportPdfUncheckedUpdateWithoutSessionInput>;
};
export type EnumStatutRapportPdfFieldUpdateOperationsInput = {
    set?: $Enums.StatutRapportPdf;
};
export type RapportPdfCreateWithoutSessionInput = {
    id?: string;
    statut?: $Enums.StatutRapportPdf;
    url?: string | null;
    genereLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RapportPdfUncheckedCreateWithoutSessionInput = {
    id?: string;
    statut?: $Enums.StatutRapportPdf;
    url?: string | null;
    genereLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RapportPdfCreateOrConnectWithoutSessionInput = {
    where: Prisma.RapportPdfWhereUniqueInput;
    create: Prisma.XOR<Prisma.RapportPdfCreateWithoutSessionInput, Prisma.RapportPdfUncheckedCreateWithoutSessionInput>;
};
export type RapportPdfUpsertWithoutSessionInput = {
    update: Prisma.XOR<Prisma.RapportPdfUpdateWithoutSessionInput, Prisma.RapportPdfUncheckedUpdateWithoutSessionInput>;
    create: Prisma.XOR<Prisma.RapportPdfCreateWithoutSessionInput, Prisma.RapportPdfUncheckedCreateWithoutSessionInput>;
    where?: Prisma.RapportPdfWhereInput;
};
export type RapportPdfUpdateToOneWithWhereWithoutSessionInput = {
    where?: Prisma.RapportPdfWhereInput;
    data: Prisma.XOR<Prisma.RapportPdfUpdateWithoutSessionInput, Prisma.RapportPdfUncheckedUpdateWithoutSessionInput>;
};
export type RapportPdfUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutRapportPdfFieldUpdateOperationsInput | $Enums.StatutRapportPdf;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genereLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RapportPdfUncheckedUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutRapportPdfFieldUpdateOperationsInput | $Enums.StatutRapportPdf;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genereLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RapportPdfSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionId?: boolean;
    statut?: boolean;
    url?: boolean;
    genereLe?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    session?: boolean | Prisma.SessionEvaluationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rapportPdf"]>;
export type RapportPdfSelectScalar = {
    id?: boolean;
    sessionId?: boolean;
    statut?: boolean;
    url?: boolean;
    genereLe?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RapportPdfOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sessionId" | "statut" | "url" | "genereLe" | "createdAt" | "updatedAt", ExtArgs["result"]["rapportPdf"]>;
export type RapportPdfInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.SessionEvaluationDefaultArgs<ExtArgs>;
};
export type $RapportPdfPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RapportPdf";
    objects: {
        session: Prisma.$SessionEvaluationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sessionId: string;
        statut: $Enums.StatutRapportPdf;
        url: string | null;
        genereLe: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["rapportPdf"]>;
    composites: {};
};
export type RapportPdfGetPayload<S extends boolean | null | undefined | RapportPdfDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RapportPdfPayload, S>;
export type RapportPdfCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RapportPdfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RapportPdfCountAggregateInputType | true;
};
export interface RapportPdfDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RapportPdf'];
        meta: {
            name: 'RapportPdf';
        };
    };
    findUnique<T extends RapportPdfFindUniqueArgs>(args: Prisma.SelectSubset<T, RapportPdfFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RapportPdfClient<runtime.Types.Result.GetResult<Prisma.$RapportPdfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RapportPdfFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RapportPdfFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RapportPdfClient<runtime.Types.Result.GetResult<Prisma.$RapportPdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RapportPdfFindFirstArgs>(args?: Prisma.SelectSubset<T, RapportPdfFindFirstArgs<ExtArgs>>): Prisma.Prisma__RapportPdfClient<runtime.Types.Result.GetResult<Prisma.$RapportPdfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RapportPdfFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RapportPdfFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RapportPdfClient<runtime.Types.Result.GetResult<Prisma.$RapportPdfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RapportPdfFindManyArgs>(args?: Prisma.SelectSubset<T, RapportPdfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RapportPdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RapportPdfCreateArgs>(args: Prisma.SelectSubset<T, RapportPdfCreateArgs<ExtArgs>>): Prisma.Prisma__RapportPdfClient<runtime.Types.Result.GetResult<Prisma.$RapportPdfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RapportPdfCreateManyArgs>(args?: Prisma.SelectSubset<T, RapportPdfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends RapportPdfDeleteArgs>(args: Prisma.SelectSubset<T, RapportPdfDeleteArgs<ExtArgs>>): Prisma.Prisma__RapportPdfClient<runtime.Types.Result.GetResult<Prisma.$RapportPdfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RapportPdfUpdateArgs>(args: Prisma.SelectSubset<T, RapportPdfUpdateArgs<ExtArgs>>): Prisma.Prisma__RapportPdfClient<runtime.Types.Result.GetResult<Prisma.$RapportPdfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RapportPdfDeleteManyArgs>(args?: Prisma.SelectSubset<T, RapportPdfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RapportPdfUpdateManyArgs>(args: Prisma.SelectSubset<T, RapportPdfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends RapportPdfUpsertArgs>(args: Prisma.SelectSubset<T, RapportPdfUpsertArgs<ExtArgs>>): Prisma.Prisma__RapportPdfClient<runtime.Types.Result.GetResult<Prisma.$RapportPdfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RapportPdfCountArgs>(args?: Prisma.Subset<T, RapportPdfCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RapportPdfCountAggregateOutputType> : number>;
    aggregate<T extends RapportPdfAggregateArgs>(args: Prisma.Subset<T, RapportPdfAggregateArgs>): Prisma.PrismaPromise<GetRapportPdfAggregateType<T>>;
    groupBy<T extends RapportPdfGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RapportPdfGroupByArgs['orderBy'];
    } : {
        orderBy?: RapportPdfGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RapportPdfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRapportPdfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RapportPdfFieldRefs;
}
export interface Prisma__RapportPdfClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    session<T extends Prisma.SessionEvaluationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SessionEvaluationDefaultArgs<ExtArgs>>): Prisma.Prisma__SessionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RapportPdfFieldRefs {
    readonly id: Prisma.FieldRef<"RapportPdf", 'String'>;
    readonly sessionId: Prisma.FieldRef<"RapportPdf", 'String'>;
    readonly statut: Prisma.FieldRef<"RapportPdf", 'StatutRapportPdf'>;
    readonly url: Prisma.FieldRef<"RapportPdf", 'String'>;
    readonly genereLe: Prisma.FieldRef<"RapportPdf", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"RapportPdf", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RapportPdf", 'DateTime'>;
}
export type RapportPdfFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RapportPdfSelect<ExtArgs> | null;
    omit?: Prisma.RapportPdfOmit<ExtArgs> | null;
    include?: Prisma.RapportPdfInclude<ExtArgs> | null;
    where: Prisma.RapportPdfWhereUniqueInput;
};
export type RapportPdfFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RapportPdfSelect<ExtArgs> | null;
    omit?: Prisma.RapportPdfOmit<ExtArgs> | null;
    include?: Prisma.RapportPdfInclude<ExtArgs> | null;
    where: Prisma.RapportPdfWhereUniqueInput;
};
export type RapportPdfFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RapportPdfSelect<ExtArgs> | null;
    omit?: Prisma.RapportPdfOmit<ExtArgs> | null;
    include?: Prisma.RapportPdfInclude<ExtArgs> | null;
    where?: Prisma.RapportPdfWhereInput;
    orderBy?: Prisma.RapportPdfOrderByWithRelationInput | Prisma.RapportPdfOrderByWithRelationInput[];
    cursor?: Prisma.RapportPdfWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RapportPdfScalarFieldEnum | Prisma.RapportPdfScalarFieldEnum[];
};
export type RapportPdfFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RapportPdfSelect<ExtArgs> | null;
    omit?: Prisma.RapportPdfOmit<ExtArgs> | null;
    include?: Prisma.RapportPdfInclude<ExtArgs> | null;
    where?: Prisma.RapportPdfWhereInput;
    orderBy?: Prisma.RapportPdfOrderByWithRelationInput | Prisma.RapportPdfOrderByWithRelationInput[];
    cursor?: Prisma.RapportPdfWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RapportPdfScalarFieldEnum | Prisma.RapportPdfScalarFieldEnum[];
};
export type RapportPdfFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RapportPdfSelect<ExtArgs> | null;
    omit?: Prisma.RapportPdfOmit<ExtArgs> | null;
    include?: Prisma.RapportPdfInclude<ExtArgs> | null;
    where?: Prisma.RapportPdfWhereInput;
    orderBy?: Prisma.RapportPdfOrderByWithRelationInput | Prisma.RapportPdfOrderByWithRelationInput[];
    cursor?: Prisma.RapportPdfWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RapportPdfScalarFieldEnum | Prisma.RapportPdfScalarFieldEnum[];
};
export type RapportPdfCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RapportPdfSelect<ExtArgs> | null;
    omit?: Prisma.RapportPdfOmit<ExtArgs> | null;
    include?: Prisma.RapportPdfInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RapportPdfCreateInput, Prisma.RapportPdfUncheckedCreateInput>;
};
export type RapportPdfCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RapportPdfCreateManyInput | Prisma.RapportPdfCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RapportPdfUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RapportPdfSelect<ExtArgs> | null;
    omit?: Prisma.RapportPdfOmit<ExtArgs> | null;
    include?: Prisma.RapportPdfInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RapportPdfUpdateInput, Prisma.RapportPdfUncheckedUpdateInput>;
    where: Prisma.RapportPdfWhereUniqueInput;
};
export type RapportPdfUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RapportPdfUpdateManyMutationInput, Prisma.RapportPdfUncheckedUpdateManyInput>;
    where?: Prisma.RapportPdfWhereInput;
    limit?: number;
};
export type RapportPdfUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RapportPdfSelect<ExtArgs> | null;
    omit?: Prisma.RapportPdfOmit<ExtArgs> | null;
    include?: Prisma.RapportPdfInclude<ExtArgs> | null;
    where: Prisma.RapportPdfWhereUniqueInput;
    create: Prisma.XOR<Prisma.RapportPdfCreateInput, Prisma.RapportPdfUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RapportPdfUpdateInput, Prisma.RapportPdfUncheckedUpdateInput>;
};
export type RapportPdfDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RapportPdfSelect<ExtArgs> | null;
    omit?: Prisma.RapportPdfOmit<ExtArgs> | null;
    include?: Prisma.RapportPdfInclude<ExtArgs> | null;
    where: Prisma.RapportPdfWhereUniqueInput;
};
export type RapportPdfDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RapportPdfWhereInput;
    limit?: number;
};
export type RapportPdfDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RapportPdfSelect<ExtArgs> | null;
    omit?: Prisma.RapportPdfOmit<ExtArgs> | null;
    include?: Prisma.RapportPdfInclude<ExtArgs> | null;
};
