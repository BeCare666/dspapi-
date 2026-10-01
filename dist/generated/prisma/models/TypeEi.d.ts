import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TypeEiModel = runtime.Types.Result.DefaultSelection<Prisma.$TypeEiPayload>;
export type AggregateTypeEi = {
    _count: TypeEiCountAggregateOutputType | null;
    _min: TypeEiMinAggregateOutputType | null;
    _max: TypeEiMaxAggregateOutputType | null;
};
export type TypeEiMinAggregateOutputType = {
    id: string | null;
    libelle: string | null;
    actif: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TypeEiMaxAggregateOutputType = {
    id: string | null;
    libelle: string | null;
    actif: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TypeEiCountAggregateOutputType = {
    id: number;
    libelle: number;
    actif: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TypeEiMinAggregateInputType = {
    id?: true;
    libelle?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TypeEiMaxAggregateInputType = {
    id?: true;
    libelle?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TypeEiCountAggregateInputType = {
    id?: true;
    libelle?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TypeEiAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TypeEiWhereInput;
    orderBy?: Prisma.TypeEiOrderByWithRelationInput | Prisma.TypeEiOrderByWithRelationInput[];
    cursor?: Prisma.TypeEiWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TypeEiCountAggregateInputType;
    _min?: TypeEiMinAggregateInputType;
    _max?: TypeEiMaxAggregateInputType;
};
export type GetTypeEiAggregateType<T extends TypeEiAggregateArgs> = {
    [P in keyof T & keyof AggregateTypeEi]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTypeEi[P]> : Prisma.GetScalarType<T[P], AggregateTypeEi[P]>;
};
export type TypeEiGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TypeEiWhereInput;
    orderBy?: Prisma.TypeEiOrderByWithAggregationInput | Prisma.TypeEiOrderByWithAggregationInput[];
    by: Prisma.TypeEiScalarFieldEnum[] | Prisma.TypeEiScalarFieldEnum;
    having?: Prisma.TypeEiScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TypeEiCountAggregateInputType | true;
    _min?: TypeEiMinAggregateInputType;
    _max?: TypeEiMaxAggregateInputType;
};
export type TypeEiGroupByOutputType = {
    id: string;
    libelle: string;
    actif: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: TypeEiCountAggregateOutputType | null;
    _min: TypeEiMinAggregateOutputType | null;
    _max: TypeEiMaxAggregateOutputType | null;
};
export type GetTypeEiGroupByPayload<T extends TypeEiGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TypeEiGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TypeEiGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TypeEiGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TypeEiGroupByOutputType[P]>;
}>>;
export type TypeEiWhereInput = {
    AND?: Prisma.TypeEiWhereInput | Prisma.TypeEiWhereInput[];
    OR?: Prisma.TypeEiWhereInput[];
    NOT?: Prisma.TypeEiWhereInput | Prisma.TypeEiWhereInput[];
    id?: Prisma.StringFilter<"TypeEi"> | string;
    libelle?: Prisma.StringFilter<"TypeEi"> | string;
    actif?: Prisma.BoolFilter<"TypeEi"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TypeEi"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TypeEi"> | Date | string;
    evenements?: Prisma.EvenementIndesirableListRelationFilter;
};
export type TypeEiOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    evenements?: Prisma.EvenementIndesirableOrderByRelationAggregateInput;
    _relevance?: Prisma.TypeEiOrderByRelevanceInput;
};
export type TypeEiWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    libelle?: string;
    AND?: Prisma.TypeEiWhereInput | Prisma.TypeEiWhereInput[];
    OR?: Prisma.TypeEiWhereInput[];
    NOT?: Prisma.TypeEiWhereInput | Prisma.TypeEiWhereInput[];
    actif?: Prisma.BoolFilter<"TypeEi"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TypeEi"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TypeEi"> | Date | string;
    evenements?: Prisma.EvenementIndesirableListRelationFilter;
}, "id" | "libelle">;
export type TypeEiOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TypeEiCountOrderByAggregateInput;
    _max?: Prisma.TypeEiMaxOrderByAggregateInput;
    _min?: Prisma.TypeEiMinOrderByAggregateInput;
};
export type TypeEiScalarWhereWithAggregatesInput = {
    AND?: Prisma.TypeEiScalarWhereWithAggregatesInput | Prisma.TypeEiScalarWhereWithAggregatesInput[];
    OR?: Prisma.TypeEiScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TypeEiScalarWhereWithAggregatesInput | Prisma.TypeEiScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TypeEi"> | string;
    libelle?: Prisma.StringWithAggregatesFilter<"TypeEi"> | string;
    actif?: Prisma.BoolWithAggregatesFilter<"TypeEi"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TypeEi"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TypeEi"> | Date | string;
};
export type TypeEiCreateInput = {
    id?: string;
    libelle: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evenements?: Prisma.EvenementIndesirableCreateNestedManyWithoutTypeEiInput;
};
export type TypeEiUncheckedCreateInput = {
    id?: string;
    libelle: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evenements?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutTypeEiInput;
};
export type TypeEiUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evenements?: Prisma.EvenementIndesirableUpdateManyWithoutTypeEiNestedInput;
};
export type TypeEiUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evenements?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutTypeEiNestedInput;
};
export type TypeEiCreateManyInput = {
    id?: string;
    libelle: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TypeEiUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TypeEiUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TypeEiOrderByRelevanceInput = {
    fields: Prisma.TypeEiOrderByRelevanceFieldEnum | Prisma.TypeEiOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type TypeEiCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TypeEiMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TypeEiMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TypeEiNullableScalarRelationFilter = {
    is?: Prisma.TypeEiWhereInput | null;
    isNot?: Prisma.TypeEiWhereInput | null;
};
export type TypeEiCreateNestedOneWithoutEvenementsInput = {
    create?: Prisma.XOR<Prisma.TypeEiCreateWithoutEvenementsInput, Prisma.TypeEiUncheckedCreateWithoutEvenementsInput>;
    connectOrCreate?: Prisma.TypeEiCreateOrConnectWithoutEvenementsInput;
    connect?: Prisma.TypeEiWhereUniqueInput;
};
export type TypeEiUpdateOneWithoutEvenementsNestedInput = {
    create?: Prisma.XOR<Prisma.TypeEiCreateWithoutEvenementsInput, Prisma.TypeEiUncheckedCreateWithoutEvenementsInput>;
    connectOrCreate?: Prisma.TypeEiCreateOrConnectWithoutEvenementsInput;
    upsert?: Prisma.TypeEiUpsertWithoutEvenementsInput;
    disconnect?: Prisma.TypeEiWhereInput | boolean;
    delete?: Prisma.TypeEiWhereInput | boolean;
    connect?: Prisma.TypeEiWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TypeEiUpdateToOneWithWhereWithoutEvenementsInput, Prisma.TypeEiUpdateWithoutEvenementsInput>, Prisma.TypeEiUncheckedUpdateWithoutEvenementsInput>;
};
export type TypeEiCreateWithoutEvenementsInput = {
    id?: string;
    libelle: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TypeEiUncheckedCreateWithoutEvenementsInput = {
    id?: string;
    libelle: string;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TypeEiCreateOrConnectWithoutEvenementsInput = {
    where: Prisma.TypeEiWhereUniqueInput;
    create: Prisma.XOR<Prisma.TypeEiCreateWithoutEvenementsInput, Prisma.TypeEiUncheckedCreateWithoutEvenementsInput>;
};
export type TypeEiUpsertWithoutEvenementsInput = {
    update: Prisma.XOR<Prisma.TypeEiUpdateWithoutEvenementsInput, Prisma.TypeEiUncheckedUpdateWithoutEvenementsInput>;
    create: Prisma.XOR<Prisma.TypeEiCreateWithoutEvenementsInput, Prisma.TypeEiUncheckedCreateWithoutEvenementsInput>;
    where?: Prisma.TypeEiWhereInput;
};
export type TypeEiUpdateToOneWithWhereWithoutEvenementsInput = {
    where?: Prisma.TypeEiWhereInput;
    data: Prisma.XOR<Prisma.TypeEiUpdateWithoutEvenementsInput, Prisma.TypeEiUncheckedUpdateWithoutEvenementsInput>;
};
export type TypeEiUpdateWithoutEvenementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TypeEiUncheckedUpdateWithoutEvenementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TypeEiCountOutputType = {
    evenements: number;
};
export type TypeEiCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evenements?: boolean | TypeEiCountOutputTypeCountEvenementsArgs;
};
export type TypeEiCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeEiCountOutputTypeSelect<ExtArgs> | null;
};
export type TypeEiCountOutputTypeCountEvenementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvenementIndesirableWhereInput;
};
export type TypeEiSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    libelle?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    evenements?: boolean | Prisma.TypeEi$evenementsArgs<ExtArgs>;
    _count?: boolean | Prisma.TypeEiCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["typeEi"]>;
export type TypeEiSelectScalar = {
    id?: boolean;
    libelle?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TypeEiOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "libelle" | "actif" | "createdAt" | "updatedAt", ExtArgs["result"]["typeEi"]>;
export type TypeEiInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evenements?: boolean | Prisma.TypeEi$evenementsArgs<ExtArgs>;
    _count?: boolean | Prisma.TypeEiCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $TypeEiPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TypeEi";
    objects: {
        evenements: Prisma.$EvenementIndesirablePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        libelle: string;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["typeEi"]>;
    composites: {};
};
export type TypeEiGetPayload<S extends boolean | null | undefined | TypeEiDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TypeEiPayload, S>;
export type TypeEiCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TypeEiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TypeEiCountAggregateInputType | true;
};
export interface TypeEiDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TypeEi'];
        meta: {
            name: 'TypeEi';
        };
    };
    findUnique<T extends TypeEiFindUniqueArgs>(args: Prisma.SelectSubset<T, TypeEiFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TypeEiClient<runtime.Types.Result.GetResult<Prisma.$TypeEiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TypeEiFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TypeEiFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TypeEiClient<runtime.Types.Result.GetResult<Prisma.$TypeEiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TypeEiFindFirstArgs>(args?: Prisma.SelectSubset<T, TypeEiFindFirstArgs<ExtArgs>>): Prisma.Prisma__TypeEiClient<runtime.Types.Result.GetResult<Prisma.$TypeEiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TypeEiFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TypeEiFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TypeEiClient<runtime.Types.Result.GetResult<Prisma.$TypeEiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TypeEiFindManyArgs>(args?: Prisma.SelectSubset<T, TypeEiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TypeEiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TypeEiCreateArgs>(args: Prisma.SelectSubset<T, TypeEiCreateArgs<ExtArgs>>): Prisma.Prisma__TypeEiClient<runtime.Types.Result.GetResult<Prisma.$TypeEiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TypeEiCreateManyArgs>(args?: Prisma.SelectSubset<T, TypeEiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends TypeEiDeleteArgs>(args: Prisma.SelectSubset<T, TypeEiDeleteArgs<ExtArgs>>): Prisma.Prisma__TypeEiClient<runtime.Types.Result.GetResult<Prisma.$TypeEiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TypeEiUpdateArgs>(args: Prisma.SelectSubset<T, TypeEiUpdateArgs<ExtArgs>>): Prisma.Prisma__TypeEiClient<runtime.Types.Result.GetResult<Prisma.$TypeEiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TypeEiDeleteManyArgs>(args?: Prisma.SelectSubset<T, TypeEiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TypeEiUpdateManyArgs>(args: Prisma.SelectSubset<T, TypeEiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends TypeEiUpsertArgs>(args: Prisma.SelectSubset<T, TypeEiUpsertArgs<ExtArgs>>): Prisma.Prisma__TypeEiClient<runtime.Types.Result.GetResult<Prisma.$TypeEiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TypeEiCountArgs>(args?: Prisma.Subset<T, TypeEiCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TypeEiCountAggregateOutputType> : number>;
    aggregate<T extends TypeEiAggregateArgs>(args: Prisma.Subset<T, TypeEiAggregateArgs>): Prisma.PrismaPromise<GetTypeEiAggregateType<T>>;
    groupBy<T extends TypeEiGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TypeEiGroupByArgs['orderBy'];
    } : {
        orderBy?: TypeEiGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TypeEiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeEiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TypeEiFieldRefs;
}
export interface Prisma__TypeEiClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    evenements<T extends Prisma.TypeEi$evenementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TypeEi$evenementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TypeEiFieldRefs {
    readonly id: Prisma.FieldRef<"TypeEi", 'String'>;
    readonly libelle: Prisma.FieldRef<"TypeEi", 'String'>;
    readonly actif: Prisma.FieldRef<"TypeEi", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"TypeEi", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TypeEi", 'DateTime'>;
}
export type TypeEiFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeEiSelect<ExtArgs> | null;
    omit?: Prisma.TypeEiOmit<ExtArgs> | null;
    include?: Prisma.TypeEiInclude<ExtArgs> | null;
    where: Prisma.TypeEiWhereUniqueInput;
};
export type TypeEiFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeEiSelect<ExtArgs> | null;
    omit?: Prisma.TypeEiOmit<ExtArgs> | null;
    include?: Prisma.TypeEiInclude<ExtArgs> | null;
    where: Prisma.TypeEiWhereUniqueInput;
};
export type TypeEiFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeEiSelect<ExtArgs> | null;
    omit?: Prisma.TypeEiOmit<ExtArgs> | null;
    include?: Prisma.TypeEiInclude<ExtArgs> | null;
    where?: Prisma.TypeEiWhereInput;
    orderBy?: Prisma.TypeEiOrderByWithRelationInput | Prisma.TypeEiOrderByWithRelationInput[];
    cursor?: Prisma.TypeEiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TypeEiScalarFieldEnum | Prisma.TypeEiScalarFieldEnum[];
};
export type TypeEiFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeEiSelect<ExtArgs> | null;
    omit?: Prisma.TypeEiOmit<ExtArgs> | null;
    include?: Prisma.TypeEiInclude<ExtArgs> | null;
    where?: Prisma.TypeEiWhereInput;
    orderBy?: Prisma.TypeEiOrderByWithRelationInput | Prisma.TypeEiOrderByWithRelationInput[];
    cursor?: Prisma.TypeEiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TypeEiScalarFieldEnum | Prisma.TypeEiScalarFieldEnum[];
};
export type TypeEiFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeEiSelect<ExtArgs> | null;
    omit?: Prisma.TypeEiOmit<ExtArgs> | null;
    include?: Prisma.TypeEiInclude<ExtArgs> | null;
    where?: Prisma.TypeEiWhereInput;
    orderBy?: Prisma.TypeEiOrderByWithRelationInput | Prisma.TypeEiOrderByWithRelationInput[];
    cursor?: Prisma.TypeEiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TypeEiScalarFieldEnum | Prisma.TypeEiScalarFieldEnum[];
};
export type TypeEiCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeEiSelect<ExtArgs> | null;
    omit?: Prisma.TypeEiOmit<ExtArgs> | null;
    include?: Prisma.TypeEiInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TypeEiCreateInput, Prisma.TypeEiUncheckedCreateInput>;
};
export type TypeEiCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TypeEiCreateManyInput | Prisma.TypeEiCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TypeEiUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeEiSelect<ExtArgs> | null;
    omit?: Prisma.TypeEiOmit<ExtArgs> | null;
    include?: Prisma.TypeEiInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TypeEiUpdateInput, Prisma.TypeEiUncheckedUpdateInput>;
    where: Prisma.TypeEiWhereUniqueInput;
};
export type TypeEiUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TypeEiUpdateManyMutationInput, Prisma.TypeEiUncheckedUpdateManyInput>;
    where?: Prisma.TypeEiWhereInput;
    limit?: number;
};
export type TypeEiUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeEiSelect<ExtArgs> | null;
    omit?: Prisma.TypeEiOmit<ExtArgs> | null;
    include?: Prisma.TypeEiInclude<ExtArgs> | null;
    where: Prisma.TypeEiWhereUniqueInput;
    create: Prisma.XOR<Prisma.TypeEiCreateInput, Prisma.TypeEiUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TypeEiUpdateInput, Prisma.TypeEiUncheckedUpdateInput>;
};
export type TypeEiDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeEiSelect<ExtArgs> | null;
    omit?: Prisma.TypeEiOmit<ExtArgs> | null;
    include?: Prisma.TypeEiInclude<ExtArgs> | null;
    where: Prisma.TypeEiWhereUniqueInput;
};
export type TypeEiDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TypeEiWhereInput;
    limit?: number;
};
export type TypeEi$evenementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementIndesirableSelect<ExtArgs> | null;
    omit?: Prisma.EvenementIndesirableOmit<ExtArgs> | null;
    include?: Prisma.EvenementIndesirableInclude<ExtArgs> | null;
    where?: Prisma.EvenementIndesirableWhereInput;
    orderBy?: Prisma.EvenementIndesirableOrderByWithRelationInput | Prisma.EvenementIndesirableOrderByWithRelationInput[];
    cursor?: Prisma.EvenementIndesirableWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvenementIndesirableScalarFieldEnum | Prisma.EvenementIndesirableScalarFieldEnum[];
};
export type TypeEiDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeEiSelect<ExtArgs> | null;
    omit?: Prisma.TypeEiOmit<ExtArgs> | null;
    include?: Prisma.TypeEiInclude<ExtArgs> | null;
};
