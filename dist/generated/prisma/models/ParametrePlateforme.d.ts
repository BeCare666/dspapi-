import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParametrePlateformeModel = runtime.Types.Result.DefaultSelection<Prisma.$ParametrePlateformePayload>;
export type AggregateParametrePlateforme = {
    _count: ParametrePlateformeCountAggregateOutputType | null;
    _min: ParametrePlateformeMinAggregateOutputType | null;
    _max: ParametrePlateformeMaxAggregateOutputType | null;
};
export type ParametrePlateformeMinAggregateOutputType = {
    id: string | null;
    cle: string | null;
    valeur: string | null;
    type: string | null;
    description: string | null;
    valeurDefaut: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParametrePlateformeMaxAggregateOutputType = {
    id: string | null;
    cle: string | null;
    valeur: string | null;
    type: string | null;
    description: string | null;
    valeurDefaut: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParametrePlateformeCountAggregateOutputType = {
    id: number;
    cle: number;
    valeur: number;
    type: number;
    description: number;
    valeurDefaut: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ParametrePlateformeMinAggregateInputType = {
    id?: true;
    cle?: true;
    valeur?: true;
    type?: true;
    description?: true;
    valeurDefaut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParametrePlateformeMaxAggregateInputType = {
    id?: true;
    cle?: true;
    valeur?: true;
    type?: true;
    description?: true;
    valeurDefaut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParametrePlateformeCountAggregateInputType = {
    id?: true;
    cle?: true;
    valeur?: true;
    type?: true;
    description?: true;
    valeurDefaut?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ParametrePlateformeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParametrePlateformeWhereInput;
    orderBy?: Prisma.ParametrePlateformeOrderByWithRelationInput | Prisma.ParametrePlateformeOrderByWithRelationInput[];
    cursor?: Prisma.ParametrePlateformeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParametrePlateformeCountAggregateInputType;
    _min?: ParametrePlateformeMinAggregateInputType;
    _max?: ParametrePlateformeMaxAggregateInputType;
};
export type GetParametrePlateformeAggregateType<T extends ParametrePlateformeAggregateArgs> = {
    [P in keyof T & keyof AggregateParametrePlateforme]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParametrePlateforme[P]> : Prisma.GetScalarType<T[P], AggregateParametrePlateforme[P]>;
};
export type ParametrePlateformeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParametrePlateformeWhereInput;
    orderBy?: Prisma.ParametrePlateformeOrderByWithAggregationInput | Prisma.ParametrePlateformeOrderByWithAggregationInput[];
    by: Prisma.ParametrePlateformeScalarFieldEnum[] | Prisma.ParametrePlateformeScalarFieldEnum;
    having?: Prisma.ParametrePlateformeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParametrePlateformeCountAggregateInputType | true;
    _min?: ParametrePlateformeMinAggregateInputType;
    _max?: ParametrePlateformeMaxAggregateInputType;
};
export type ParametrePlateformeGroupByOutputType = {
    id: string;
    cle: string;
    valeur: string;
    type: string;
    description: string;
    valeurDefaut: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ParametrePlateformeCountAggregateOutputType | null;
    _min: ParametrePlateformeMinAggregateOutputType | null;
    _max: ParametrePlateformeMaxAggregateOutputType | null;
};
export type GetParametrePlateformeGroupByPayload<T extends ParametrePlateformeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParametrePlateformeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParametrePlateformeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParametrePlateformeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParametrePlateformeGroupByOutputType[P]>;
}>>;
export type ParametrePlateformeWhereInput = {
    AND?: Prisma.ParametrePlateformeWhereInput | Prisma.ParametrePlateformeWhereInput[];
    OR?: Prisma.ParametrePlateformeWhereInput[];
    NOT?: Prisma.ParametrePlateformeWhereInput | Prisma.ParametrePlateformeWhereInput[];
    id?: Prisma.StringFilter<"ParametrePlateforme"> | string;
    cle?: Prisma.StringFilter<"ParametrePlateforme"> | string;
    valeur?: Prisma.StringFilter<"ParametrePlateforme"> | string;
    type?: Prisma.StringFilter<"ParametrePlateforme"> | string;
    description?: Prisma.StringFilter<"ParametrePlateforme"> | string;
    valeurDefaut?: Prisma.StringFilter<"ParametrePlateforme"> | string;
    createdAt?: Prisma.DateTimeFilter<"ParametrePlateforme"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParametrePlateforme"> | Date | string;
};
export type ParametrePlateformeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cle?: Prisma.SortOrder;
    valeur?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    valeurDefaut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.ParametrePlateformeOrderByRelevanceInput;
};
export type ParametrePlateformeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    cle?: string;
    AND?: Prisma.ParametrePlateformeWhereInput | Prisma.ParametrePlateformeWhereInput[];
    OR?: Prisma.ParametrePlateformeWhereInput[];
    NOT?: Prisma.ParametrePlateformeWhereInput | Prisma.ParametrePlateformeWhereInput[];
    valeur?: Prisma.StringFilter<"ParametrePlateforme"> | string;
    type?: Prisma.StringFilter<"ParametrePlateforme"> | string;
    description?: Prisma.StringFilter<"ParametrePlateforme"> | string;
    valeurDefaut?: Prisma.StringFilter<"ParametrePlateforme"> | string;
    createdAt?: Prisma.DateTimeFilter<"ParametrePlateforme"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ParametrePlateforme"> | Date | string;
}, "id" | "cle">;
export type ParametrePlateformeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cle?: Prisma.SortOrder;
    valeur?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    valeurDefaut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ParametrePlateformeCountOrderByAggregateInput;
    _max?: Prisma.ParametrePlateformeMaxOrderByAggregateInput;
    _min?: Prisma.ParametrePlateformeMinOrderByAggregateInput;
};
export type ParametrePlateformeScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParametrePlateformeScalarWhereWithAggregatesInput | Prisma.ParametrePlateformeScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParametrePlateformeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParametrePlateformeScalarWhereWithAggregatesInput | Prisma.ParametrePlateformeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ParametrePlateforme"> | string;
    cle?: Prisma.StringWithAggregatesFilter<"ParametrePlateforme"> | string;
    valeur?: Prisma.StringWithAggregatesFilter<"ParametrePlateforme"> | string;
    type?: Prisma.StringWithAggregatesFilter<"ParametrePlateforme"> | string;
    description?: Prisma.StringWithAggregatesFilter<"ParametrePlateforme"> | string;
    valeurDefaut?: Prisma.StringWithAggregatesFilter<"ParametrePlateforme"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ParametrePlateforme"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ParametrePlateforme"> | Date | string;
};
export type ParametrePlateformeCreateInput = {
    id?: string;
    cle: string;
    valeur: string;
    type: string;
    description: string;
    valeurDefaut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParametrePlateformeUncheckedCreateInput = {
    id?: string;
    cle: string;
    valeur: string;
    type: string;
    description: string;
    valeurDefaut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParametrePlateformeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cle?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    valeurDefaut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParametrePlateformeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cle?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    valeurDefaut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParametrePlateformeCreateManyInput = {
    id?: string;
    cle: string;
    valeur: string;
    type: string;
    description: string;
    valeurDefaut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ParametrePlateformeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cle?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    valeurDefaut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParametrePlateformeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cle?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    valeurDefaut?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ParametrePlateformeOrderByRelevanceInput = {
    fields: Prisma.ParametrePlateformeOrderByRelevanceFieldEnum | Prisma.ParametrePlateformeOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ParametrePlateformeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cle?: Prisma.SortOrder;
    valeur?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    valeurDefaut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParametrePlateformeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cle?: Prisma.SortOrder;
    valeur?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    valeurDefaut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParametrePlateformeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cle?: Prisma.SortOrder;
    valeur?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    valeurDefaut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ParametrePlateformeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cle?: boolean;
    valeur?: boolean;
    type?: boolean;
    description?: boolean;
    valeurDefaut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["parametrePlateforme"]>;
export type ParametrePlateformeSelectScalar = {
    id?: boolean;
    cle?: boolean;
    valeur?: boolean;
    type?: boolean;
    description?: boolean;
    valeurDefaut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ParametrePlateformeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cle" | "valeur" | "type" | "description" | "valeurDefaut" | "createdAt" | "updatedAt", ExtArgs["result"]["parametrePlateforme"]>;
export type $ParametrePlateformePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParametrePlateforme";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cle: string;
        valeur: string;
        type: string;
        description: string;
        valeurDefaut: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["parametrePlateforme"]>;
    composites: {};
};
export type ParametrePlateformeGetPayload<S extends boolean | null | undefined | ParametrePlateformeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParametrePlateformePayload, S>;
export type ParametrePlateformeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParametrePlateformeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParametrePlateformeCountAggregateInputType | true;
};
export interface ParametrePlateformeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParametrePlateforme'];
        meta: {
            name: 'ParametrePlateforme';
        };
    };
    findUnique<T extends ParametrePlateformeFindUniqueArgs>(args: Prisma.SelectSubset<T, ParametrePlateformeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParametrePlateformeClient<runtime.Types.Result.GetResult<Prisma.$ParametrePlateformePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParametrePlateformeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParametrePlateformeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParametrePlateformeClient<runtime.Types.Result.GetResult<Prisma.$ParametrePlateformePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParametrePlateformeFindFirstArgs>(args?: Prisma.SelectSubset<T, ParametrePlateformeFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParametrePlateformeClient<runtime.Types.Result.GetResult<Prisma.$ParametrePlateformePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParametrePlateformeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParametrePlateformeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParametrePlateformeClient<runtime.Types.Result.GetResult<Prisma.$ParametrePlateformePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParametrePlateformeFindManyArgs>(args?: Prisma.SelectSubset<T, ParametrePlateformeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParametrePlateformePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParametrePlateformeCreateArgs>(args: Prisma.SelectSubset<T, ParametrePlateformeCreateArgs<ExtArgs>>): Prisma.Prisma__ParametrePlateformeClient<runtime.Types.Result.GetResult<Prisma.$ParametrePlateformePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParametrePlateformeCreateManyArgs>(args?: Prisma.SelectSubset<T, ParametrePlateformeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ParametrePlateformeDeleteArgs>(args: Prisma.SelectSubset<T, ParametrePlateformeDeleteArgs<ExtArgs>>): Prisma.Prisma__ParametrePlateformeClient<runtime.Types.Result.GetResult<Prisma.$ParametrePlateformePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParametrePlateformeUpdateArgs>(args: Prisma.SelectSubset<T, ParametrePlateformeUpdateArgs<ExtArgs>>): Prisma.Prisma__ParametrePlateformeClient<runtime.Types.Result.GetResult<Prisma.$ParametrePlateformePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParametrePlateformeDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParametrePlateformeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParametrePlateformeUpdateManyArgs>(args: Prisma.SelectSubset<T, ParametrePlateformeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ParametrePlateformeUpsertArgs>(args: Prisma.SelectSubset<T, ParametrePlateformeUpsertArgs<ExtArgs>>): Prisma.Prisma__ParametrePlateformeClient<runtime.Types.Result.GetResult<Prisma.$ParametrePlateformePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ParametrePlateformeCountArgs>(args?: Prisma.Subset<T, ParametrePlateformeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParametrePlateformeCountAggregateOutputType> : number>;
    aggregate<T extends ParametrePlateformeAggregateArgs>(args: Prisma.Subset<T, ParametrePlateformeAggregateArgs>): Prisma.PrismaPromise<GetParametrePlateformeAggregateType<T>>;
    groupBy<T extends ParametrePlateformeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParametrePlateformeGroupByArgs['orderBy'];
    } : {
        orderBy?: ParametrePlateformeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParametrePlateformeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParametrePlateformeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParametrePlateformeFieldRefs;
}
export interface Prisma__ParametrePlateformeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParametrePlateformeFieldRefs {
    readonly id: Prisma.FieldRef<"ParametrePlateforme", 'String'>;
    readonly cle: Prisma.FieldRef<"ParametrePlateforme", 'String'>;
    readonly valeur: Prisma.FieldRef<"ParametrePlateforme", 'String'>;
    readonly type: Prisma.FieldRef<"ParametrePlateforme", 'String'>;
    readonly description: Prisma.FieldRef<"ParametrePlateforme", 'String'>;
    readonly valeurDefaut: Prisma.FieldRef<"ParametrePlateforme", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ParametrePlateforme", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ParametrePlateforme", 'DateTime'>;
}
export type ParametrePlateformeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParametrePlateformeSelect<ExtArgs> | null;
    omit?: Prisma.ParametrePlateformeOmit<ExtArgs> | null;
    where: Prisma.ParametrePlateformeWhereUniqueInput;
};
export type ParametrePlateformeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParametrePlateformeSelect<ExtArgs> | null;
    omit?: Prisma.ParametrePlateformeOmit<ExtArgs> | null;
    where: Prisma.ParametrePlateformeWhereUniqueInput;
};
export type ParametrePlateformeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParametrePlateformeSelect<ExtArgs> | null;
    omit?: Prisma.ParametrePlateformeOmit<ExtArgs> | null;
    where?: Prisma.ParametrePlateformeWhereInput;
    orderBy?: Prisma.ParametrePlateformeOrderByWithRelationInput | Prisma.ParametrePlateformeOrderByWithRelationInput[];
    cursor?: Prisma.ParametrePlateformeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParametrePlateformeScalarFieldEnum | Prisma.ParametrePlateformeScalarFieldEnum[];
};
export type ParametrePlateformeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParametrePlateformeSelect<ExtArgs> | null;
    omit?: Prisma.ParametrePlateformeOmit<ExtArgs> | null;
    where?: Prisma.ParametrePlateformeWhereInput;
    orderBy?: Prisma.ParametrePlateformeOrderByWithRelationInput | Prisma.ParametrePlateformeOrderByWithRelationInput[];
    cursor?: Prisma.ParametrePlateformeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParametrePlateformeScalarFieldEnum | Prisma.ParametrePlateformeScalarFieldEnum[];
};
export type ParametrePlateformeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParametrePlateformeSelect<ExtArgs> | null;
    omit?: Prisma.ParametrePlateformeOmit<ExtArgs> | null;
    where?: Prisma.ParametrePlateformeWhereInput;
    orderBy?: Prisma.ParametrePlateformeOrderByWithRelationInput | Prisma.ParametrePlateformeOrderByWithRelationInput[];
    cursor?: Prisma.ParametrePlateformeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParametrePlateformeScalarFieldEnum | Prisma.ParametrePlateformeScalarFieldEnum[];
};
export type ParametrePlateformeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParametrePlateformeSelect<ExtArgs> | null;
    omit?: Prisma.ParametrePlateformeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParametrePlateformeCreateInput, Prisma.ParametrePlateformeUncheckedCreateInput>;
};
export type ParametrePlateformeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParametrePlateformeCreateManyInput | Prisma.ParametrePlateformeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ParametrePlateformeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParametrePlateformeSelect<ExtArgs> | null;
    omit?: Prisma.ParametrePlateformeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParametrePlateformeUpdateInput, Prisma.ParametrePlateformeUncheckedUpdateInput>;
    where: Prisma.ParametrePlateformeWhereUniqueInput;
};
export type ParametrePlateformeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParametrePlateformeUpdateManyMutationInput, Prisma.ParametrePlateformeUncheckedUpdateManyInput>;
    where?: Prisma.ParametrePlateformeWhereInput;
    limit?: number;
};
export type ParametrePlateformeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParametrePlateformeSelect<ExtArgs> | null;
    omit?: Prisma.ParametrePlateformeOmit<ExtArgs> | null;
    where: Prisma.ParametrePlateformeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParametrePlateformeCreateInput, Prisma.ParametrePlateformeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParametrePlateformeUpdateInput, Prisma.ParametrePlateformeUncheckedUpdateInput>;
};
export type ParametrePlateformeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParametrePlateformeSelect<ExtArgs> | null;
    omit?: Prisma.ParametrePlateformeOmit<ExtArgs> | null;
    where: Prisma.ParametrePlateformeWhereUniqueInput;
};
export type ParametrePlateformeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParametrePlateformeWhereInput;
    limit?: number;
};
export type ParametrePlateformeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParametrePlateformeSelect<ExtArgs> | null;
    omit?: Prisma.ParametrePlateformeOmit<ExtArgs> | null;
};
