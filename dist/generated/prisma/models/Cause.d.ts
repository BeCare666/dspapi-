import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CauseModel = runtime.Types.Result.DefaultSelection<Prisma.$CausePayload>;
export type AggregateCause = {
    _count: CauseCountAggregateOutputType | null;
    _min: CauseMinAggregateOutputType | null;
    _max: CauseMaxAggregateOutputType | null;
};
export type CauseMinAggregateOutputType = {
    id: string | null;
    evenementId: string | null;
    type: $Enums.TypeCause | null;
    description: string | null;
    createdAt: Date | null;
};
export type CauseMaxAggregateOutputType = {
    id: string | null;
    evenementId: string | null;
    type: $Enums.TypeCause | null;
    description: string | null;
    createdAt: Date | null;
};
export type CauseCountAggregateOutputType = {
    id: number;
    evenementId: number;
    type: number;
    description: number;
    createdAt: number;
    _all: number;
};
export type CauseMinAggregateInputType = {
    id?: true;
    evenementId?: true;
    type?: true;
    description?: true;
    createdAt?: true;
};
export type CauseMaxAggregateInputType = {
    id?: true;
    evenementId?: true;
    type?: true;
    description?: true;
    createdAt?: true;
};
export type CauseCountAggregateInputType = {
    id?: true;
    evenementId?: true;
    type?: true;
    description?: true;
    createdAt?: true;
    _all?: true;
};
export type CauseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CauseWhereInput;
    orderBy?: Prisma.CauseOrderByWithRelationInput | Prisma.CauseOrderByWithRelationInput[];
    cursor?: Prisma.CauseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CauseCountAggregateInputType;
    _min?: CauseMinAggregateInputType;
    _max?: CauseMaxAggregateInputType;
};
export type GetCauseAggregateType<T extends CauseAggregateArgs> = {
    [P in keyof T & keyof AggregateCause]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCause[P]> : Prisma.GetScalarType<T[P], AggregateCause[P]>;
};
export type CauseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CauseWhereInput;
    orderBy?: Prisma.CauseOrderByWithAggregationInput | Prisma.CauseOrderByWithAggregationInput[];
    by: Prisma.CauseScalarFieldEnum[] | Prisma.CauseScalarFieldEnum;
    having?: Prisma.CauseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CauseCountAggregateInputType | true;
    _min?: CauseMinAggregateInputType;
    _max?: CauseMaxAggregateInputType;
};
export type CauseGroupByOutputType = {
    id: string;
    evenementId: string;
    type: $Enums.TypeCause;
    description: string;
    createdAt: Date;
    _count: CauseCountAggregateOutputType | null;
    _min: CauseMinAggregateOutputType | null;
    _max: CauseMaxAggregateOutputType | null;
};
export type GetCauseGroupByPayload<T extends CauseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CauseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CauseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CauseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CauseGroupByOutputType[P]>;
}>>;
export type CauseWhereInput = {
    AND?: Prisma.CauseWhereInput | Prisma.CauseWhereInput[];
    OR?: Prisma.CauseWhereInput[];
    NOT?: Prisma.CauseWhereInput | Prisma.CauseWhereInput[];
    id?: Prisma.StringFilter<"Cause"> | string;
    evenementId?: Prisma.StringFilter<"Cause"> | string;
    type?: Prisma.EnumTypeCauseFilter<"Cause"> | $Enums.TypeCause;
    description?: Prisma.StringFilter<"Cause"> | string;
    createdAt?: Prisma.DateTimeFilter<"Cause"> | Date | string;
    evenement?: Prisma.XOR<Prisma.EvenementIndesirableScalarRelationFilter, Prisma.EvenementIndesirableWhereInput>;
};
export type CauseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    evenement?: Prisma.EvenementIndesirableOrderByWithRelationInput;
    _relevance?: Prisma.CauseOrderByRelevanceInput;
};
export type CauseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CauseWhereInput | Prisma.CauseWhereInput[];
    OR?: Prisma.CauseWhereInput[];
    NOT?: Prisma.CauseWhereInput | Prisma.CauseWhereInput[];
    evenementId?: Prisma.StringFilter<"Cause"> | string;
    type?: Prisma.EnumTypeCauseFilter<"Cause"> | $Enums.TypeCause;
    description?: Prisma.StringFilter<"Cause"> | string;
    createdAt?: Prisma.DateTimeFilter<"Cause"> | Date | string;
    evenement?: Prisma.XOR<Prisma.EvenementIndesirableScalarRelationFilter, Prisma.EvenementIndesirableWhereInput>;
}, "id">;
export type CauseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CauseCountOrderByAggregateInput;
    _max?: Prisma.CauseMaxOrderByAggregateInput;
    _min?: Prisma.CauseMinOrderByAggregateInput;
};
export type CauseScalarWhereWithAggregatesInput = {
    AND?: Prisma.CauseScalarWhereWithAggregatesInput | Prisma.CauseScalarWhereWithAggregatesInput[];
    OR?: Prisma.CauseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CauseScalarWhereWithAggregatesInput | Prisma.CauseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Cause"> | string;
    evenementId?: Prisma.StringWithAggregatesFilter<"Cause"> | string;
    type?: Prisma.EnumTypeCauseWithAggregatesFilter<"Cause"> | $Enums.TypeCause;
    description?: Prisma.StringWithAggregatesFilter<"Cause"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Cause"> | Date | string;
};
export type CauseCreateInput = {
    id?: string;
    type: $Enums.TypeCause;
    description: string;
    createdAt?: Date | string;
    evenement: Prisma.EvenementIndesirableCreateNestedOneWithoutCausesInput;
};
export type CauseUncheckedCreateInput = {
    id?: string;
    evenementId: string;
    type: $Enums.TypeCause;
    description: string;
    createdAt?: Date | string;
};
export type CauseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeCauseFieldUpdateOperationsInput | $Enums.TypeCause;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evenement?: Prisma.EvenementIndesirableUpdateOneRequiredWithoutCausesNestedInput;
};
export type CauseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evenementId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeCauseFieldUpdateOperationsInput | $Enums.TypeCause;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CauseCreateManyInput = {
    id?: string;
    evenementId: string;
    type: $Enums.TypeCause;
    description: string;
    createdAt?: Date | string;
};
export type CauseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeCauseFieldUpdateOperationsInput | $Enums.TypeCause;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CauseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evenementId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeCauseFieldUpdateOperationsInput | $Enums.TypeCause;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CauseListRelationFilter = {
    every?: Prisma.CauseWhereInput;
    some?: Prisma.CauseWhereInput;
    none?: Prisma.CauseWhereInput;
};
export type CauseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CauseOrderByRelevanceInput = {
    fields: Prisma.CauseOrderByRelevanceFieldEnum | Prisma.CauseOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CauseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CauseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CauseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CauseCreateNestedManyWithoutEvenementInput = {
    create?: Prisma.XOR<Prisma.CauseCreateWithoutEvenementInput, Prisma.CauseUncheckedCreateWithoutEvenementInput> | Prisma.CauseCreateWithoutEvenementInput[] | Prisma.CauseUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.CauseCreateOrConnectWithoutEvenementInput | Prisma.CauseCreateOrConnectWithoutEvenementInput[];
    createMany?: Prisma.CauseCreateManyEvenementInputEnvelope;
    connect?: Prisma.CauseWhereUniqueInput | Prisma.CauseWhereUniqueInput[];
};
export type CauseUncheckedCreateNestedManyWithoutEvenementInput = {
    create?: Prisma.XOR<Prisma.CauseCreateWithoutEvenementInput, Prisma.CauseUncheckedCreateWithoutEvenementInput> | Prisma.CauseCreateWithoutEvenementInput[] | Prisma.CauseUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.CauseCreateOrConnectWithoutEvenementInput | Prisma.CauseCreateOrConnectWithoutEvenementInput[];
    createMany?: Prisma.CauseCreateManyEvenementInputEnvelope;
    connect?: Prisma.CauseWhereUniqueInput | Prisma.CauseWhereUniqueInput[];
};
export type CauseUpdateManyWithoutEvenementNestedInput = {
    create?: Prisma.XOR<Prisma.CauseCreateWithoutEvenementInput, Prisma.CauseUncheckedCreateWithoutEvenementInput> | Prisma.CauseCreateWithoutEvenementInput[] | Prisma.CauseUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.CauseCreateOrConnectWithoutEvenementInput | Prisma.CauseCreateOrConnectWithoutEvenementInput[];
    upsert?: Prisma.CauseUpsertWithWhereUniqueWithoutEvenementInput | Prisma.CauseUpsertWithWhereUniqueWithoutEvenementInput[];
    createMany?: Prisma.CauseCreateManyEvenementInputEnvelope;
    set?: Prisma.CauseWhereUniqueInput | Prisma.CauseWhereUniqueInput[];
    disconnect?: Prisma.CauseWhereUniqueInput | Prisma.CauseWhereUniqueInput[];
    delete?: Prisma.CauseWhereUniqueInput | Prisma.CauseWhereUniqueInput[];
    connect?: Prisma.CauseWhereUniqueInput | Prisma.CauseWhereUniqueInput[];
    update?: Prisma.CauseUpdateWithWhereUniqueWithoutEvenementInput | Prisma.CauseUpdateWithWhereUniqueWithoutEvenementInput[];
    updateMany?: Prisma.CauseUpdateManyWithWhereWithoutEvenementInput | Prisma.CauseUpdateManyWithWhereWithoutEvenementInput[];
    deleteMany?: Prisma.CauseScalarWhereInput | Prisma.CauseScalarWhereInput[];
};
export type CauseUncheckedUpdateManyWithoutEvenementNestedInput = {
    create?: Prisma.XOR<Prisma.CauseCreateWithoutEvenementInput, Prisma.CauseUncheckedCreateWithoutEvenementInput> | Prisma.CauseCreateWithoutEvenementInput[] | Prisma.CauseUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.CauseCreateOrConnectWithoutEvenementInput | Prisma.CauseCreateOrConnectWithoutEvenementInput[];
    upsert?: Prisma.CauseUpsertWithWhereUniqueWithoutEvenementInput | Prisma.CauseUpsertWithWhereUniqueWithoutEvenementInput[];
    createMany?: Prisma.CauseCreateManyEvenementInputEnvelope;
    set?: Prisma.CauseWhereUniqueInput | Prisma.CauseWhereUniqueInput[];
    disconnect?: Prisma.CauseWhereUniqueInput | Prisma.CauseWhereUniqueInput[];
    delete?: Prisma.CauseWhereUniqueInput | Prisma.CauseWhereUniqueInput[];
    connect?: Prisma.CauseWhereUniqueInput | Prisma.CauseWhereUniqueInput[];
    update?: Prisma.CauseUpdateWithWhereUniqueWithoutEvenementInput | Prisma.CauseUpdateWithWhereUniqueWithoutEvenementInput[];
    updateMany?: Prisma.CauseUpdateManyWithWhereWithoutEvenementInput | Prisma.CauseUpdateManyWithWhereWithoutEvenementInput[];
    deleteMany?: Prisma.CauseScalarWhereInput | Prisma.CauseScalarWhereInput[];
};
export type EnumTypeCauseFieldUpdateOperationsInput = {
    set?: $Enums.TypeCause;
};
export type CauseCreateWithoutEvenementInput = {
    id?: string;
    type: $Enums.TypeCause;
    description: string;
    createdAt?: Date | string;
};
export type CauseUncheckedCreateWithoutEvenementInput = {
    id?: string;
    type: $Enums.TypeCause;
    description: string;
    createdAt?: Date | string;
};
export type CauseCreateOrConnectWithoutEvenementInput = {
    where: Prisma.CauseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CauseCreateWithoutEvenementInput, Prisma.CauseUncheckedCreateWithoutEvenementInput>;
};
export type CauseCreateManyEvenementInputEnvelope = {
    data: Prisma.CauseCreateManyEvenementInput | Prisma.CauseCreateManyEvenementInput[];
    skipDuplicates?: boolean;
};
export type CauseUpsertWithWhereUniqueWithoutEvenementInput = {
    where: Prisma.CauseWhereUniqueInput;
    update: Prisma.XOR<Prisma.CauseUpdateWithoutEvenementInput, Prisma.CauseUncheckedUpdateWithoutEvenementInput>;
    create: Prisma.XOR<Prisma.CauseCreateWithoutEvenementInput, Prisma.CauseUncheckedCreateWithoutEvenementInput>;
};
export type CauseUpdateWithWhereUniqueWithoutEvenementInput = {
    where: Prisma.CauseWhereUniqueInput;
    data: Prisma.XOR<Prisma.CauseUpdateWithoutEvenementInput, Prisma.CauseUncheckedUpdateWithoutEvenementInput>;
};
export type CauseUpdateManyWithWhereWithoutEvenementInput = {
    where: Prisma.CauseScalarWhereInput;
    data: Prisma.XOR<Prisma.CauseUpdateManyMutationInput, Prisma.CauseUncheckedUpdateManyWithoutEvenementInput>;
};
export type CauseScalarWhereInput = {
    AND?: Prisma.CauseScalarWhereInput | Prisma.CauseScalarWhereInput[];
    OR?: Prisma.CauseScalarWhereInput[];
    NOT?: Prisma.CauseScalarWhereInput | Prisma.CauseScalarWhereInput[];
    id?: Prisma.StringFilter<"Cause"> | string;
    evenementId?: Prisma.StringFilter<"Cause"> | string;
    type?: Prisma.EnumTypeCauseFilter<"Cause"> | $Enums.TypeCause;
    description?: Prisma.StringFilter<"Cause"> | string;
    createdAt?: Prisma.DateTimeFilter<"Cause"> | Date | string;
};
export type CauseCreateManyEvenementInput = {
    id?: string;
    type: $Enums.TypeCause;
    description: string;
    createdAt?: Date | string;
};
export type CauseUpdateWithoutEvenementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeCauseFieldUpdateOperationsInput | $Enums.TypeCause;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CauseUncheckedUpdateWithoutEvenementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeCauseFieldUpdateOperationsInput | $Enums.TypeCause;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CauseUncheckedUpdateManyWithoutEvenementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeCauseFieldUpdateOperationsInput | $Enums.TypeCause;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CauseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    evenementId?: boolean;
    type?: boolean;
    description?: boolean;
    createdAt?: boolean;
    evenement?: boolean | Prisma.EvenementIndesirableDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cause"]>;
export type CauseSelectScalar = {
    id?: boolean;
    evenementId?: boolean;
    type?: boolean;
    description?: boolean;
    createdAt?: boolean;
};
export type CauseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "evenementId" | "type" | "description" | "createdAt", ExtArgs["result"]["cause"]>;
export type CauseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evenement?: boolean | Prisma.EvenementIndesirableDefaultArgs<ExtArgs>;
};
export type $CausePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cause";
    objects: {
        evenement: Prisma.$EvenementIndesirablePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        evenementId: string;
        type: $Enums.TypeCause;
        description: string;
        createdAt: Date;
    }, ExtArgs["result"]["cause"]>;
    composites: {};
};
export type CauseGetPayload<S extends boolean | null | undefined | CauseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CausePayload, S>;
export type CauseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CauseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CauseCountAggregateInputType | true;
};
export interface CauseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cause'];
        meta: {
            name: 'Cause';
        };
    };
    findUnique<T extends CauseFindUniqueArgs>(args: Prisma.SelectSubset<T, CauseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CauseClient<runtime.Types.Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CauseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CauseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CauseClient<runtime.Types.Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CauseFindFirstArgs>(args?: Prisma.SelectSubset<T, CauseFindFirstArgs<ExtArgs>>): Prisma.Prisma__CauseClient<runtime.Types.Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CauseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CauseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CauseClient<runtime.Types.Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CauseFindManyArgs>(args?: Prisma.SelectSubset<T, CauseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CauseCreateArgs>(args: Prisma.SelectSubset<T, CauseCreateArgs<ExtArgs>>): Prisma.Prisma__CauseClient<runtime.Types.Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CauseCreateManyArgs>(args?: Prisma.SelectSubset<T, CauseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends CauseDeleteArgs>(args: Prisma.SelectSubset<T, CauseDeleteArgs<ExtArgs>>): Prisma.Prisma__CauseClient<runtime.Types.Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CauseUpdateArgs>(args: Prisma.SelectSubset<T, CauseUpdateArgs<ExtArgs>>): Prisma.Prisma__CauseClient<runtime.Types.Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CauseDeleteManyArgs>(args?: Prisma.SelectSubset<T, CauseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CauseUpdateManyArgs>(args: Prisma.SelectSubset<T, CauseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends CauseUpsertArgs>(args: Prisma.SelectSubset<T, CauseUpsertArgs<ExtArgs>>): Prisma.Prisma__CauseClient<runtime.Types.Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CauseCountArgs>(args?: Prisma.Subset<T, CauseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CauseCountAggregateOutputType> : number>;
    aggregate<T extends CauseAggregateArgs>(args: Prisma.Subset<T, CauseAggregateArgs>): Prisma.PrismaPromise<GetCauseAggregateType<T>>;
    groupBy<T extends CauseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CauseGroupByArgs['orderBy'];
    } : {
        orderBy?: CauseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CauseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCauseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CauseFieldRefs;
}
export interface Prisma__CauseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    evenement<T extends Prisma.EvenementIndesirableDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvenementIndesirableDefaultArgs<ExtArgs>>): Prisma.Prisma__EvenementIndesirableClient<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CauseFieldRefs {
    readonly id: Prisma.FieldRef<"Cause", 'String'>;
    readonly evenementId: Prisma.FieldRef<"Cause", 'String'>;
    readonly type: Prisma.FieldRef<"Cause", 'TypeCause'>;
    readonly description: Prisma.FieldRef<"Cause", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Cause", 'DateTime'>;
}
export type CauseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CauseSelect<ExtArgs> | null;
    omit?: Prisma.CauseOmit<ExtArgs> | null;
    include?: Prisma.CauseInclude<ExtArgs> | null;
    where: Prisma.CauseWhereUniqueInput;
};
export type CauseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CauseSelect<ExtArgs> | null;
    omit?: Prisma.CauseOmit<ExtArgs> | null;
    include?: Prisma.CauseInclude<ExtArgs> | null;
    where: Prisma.CauseWhereUniqueInput;
};
export type CauseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CauseSelect<ExtArgs> | null;
    omit?: Prisma.CauseOmit<ExtArgs> | null;
    include?: Prisma.CauseInclude<ExtArgs> | null;
    where?: Prisma.CauseWhereInput;
    orderBy?: Prisma.CauseOrderByWithRelationInput | Prisma.CauseOrderByWithRelationInput[];
    cursor?: Prisma.CauseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CauseScalarFieldEnum | Prisma.CauseScalarFieldEnum[];
};
export type CauseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CauseSelect<ExtArgs> | null;
    omit?: Prisma.CauseOmit<ExtArgs> | null;
    include?: Prisma.CauseInclude<ExtArgs> | null;
    where?: Prisma.CauseWhereInput;
    orderBy?: Prisma.CauseOrderByWithRelationInput | Prisma.CauseOrderByWithRelationInput[];
    cursor?: Prisma.CauseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CauseScalarFieldEnum | Prisma.CauseScalarFieldEnum[];
};
export type CauseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CauseSelect<ExtArgs> | null;
    omit?: Prisma.CauseOmit<ExtArgs> | null;
    include?: Prisma.CauseInclude<ExtArgs> | null;
    where?: Prisma.CauseWhereInput;
    orderBy?: Prisma.CauseOrderByWithRelationInput | Prisma.CauseOrderByWithRelationInput[];
    cursor?: Prisma.CauseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CauseScalarFieldEnum | Prisma.CauseScalarFieldEnum[];
};
export type CauseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CauseSelect<ExtArgs> | null;
    omit?: Prisma.CauseOmit<ExtArgs> | null;
    include?: Prisma.CauseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CauseCreateInput, Prisma.CauseUncheckedCreateInput>;
};
export type CauseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CauseCreateManyInput | Prisma.CauseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CauseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CauseSelect<ExtArgs> | null;
    omit?: Prisma.CauseOmit<ExtArgs> | null;
    include?: Prisma.CauseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CauseUpdateInput, Prisma.CauseUncheckedUpdateInput>;
    where: Prisma.CauseWhereUniqueInput;
};
export type CauseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CauseUpdateManyMutationInput, Prisma.CauseUncheckedUpdateManyInput>;
    where?: Prisma.CauseWhereInput;
    limit?: number;
};
export type CauseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CauseSelect<ExtArgs> | null;
    omit?: Prisma.CauseOmit<ExtArgs> | null;
    include?: Prisma.CauseInclude<ExtArgs> | null;
    where: Prisma.CauseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CauseCreateInput, Prisma.CauseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CauseUpdateInput, Prisma.CauseUncheckedUpdateInput>;
};
export type CauseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CauseSelect<ExtArgs> | null;
    omit?: Prisma.CauseOmit<ExtArgs> | null;
    include?: Prisma.CauseInclude<ExtArgs> | null;
    where: Prisma.CauseWhereUniqueInput;
};
export type CauseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CauseWhereInput;
    limit?: number;
};
export type CauseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CauseSelect<ExtArgs> | null;
    omit?: Prisma.CauseOmit<ExtArgs> | null;
    include?: Prisma.CauseInclude<ExtArgs> | null;
};
