import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FactureModel = runtime.Types.Result.DefaultSelection<Prisma.$FacturePayload>;
export type AggregateFacture = {
    _count: FactureCountAggregateOutputType | null;
    _avg: FactureAvgAggregateOutputType | null;
    _sum: FactureSumAggregateOutputType | null;
    _min: FactureMinAggregateOutputType | null;
    _max: FactureMaxAggregateOutputType | null;
};
export type FactureAvgAggregateOutputType = {
    montant: number | null;
};
export type FactureSumAggregateOutputType = {
    montant: number | null;
};
export type FactureMinAggregateOutputType = {
    id: string | null;
    reservationId: string | null;
    numero: string | null;
    montant: number | null;
    emiseLe: Date | null;
    createdAt: Date | null;
};
export type FactureMaxAggregateOutputType = {
    id: string | null;
    reservationId: string | null;
    numero: string | null;
    montant: number | null;
    emiseLe: Date | null;
    createdAt: Date | null;
};
export type FactureCountAggregateOutputType = {
    id: number;
    reservationId: number;
    numero: number;
    montant: number;
    emiseLe: number;
    createdAt: number;
    _all: number;
};
export type FactureAvgAggregateInputType = {
    montant?: true;
};
export type FactureSumAggregateInputType = {
    montant?: true;
};
export type FactureMinAggregateInputType = {
    id?: true;
    reservationId?: true;
    numero?: true;
    montant?: true;
    emiseLe?: true;
    createdAt?: true;
};
export type FactureMaxAggregateInputType = {
    id?: true;
    reservationId?: true;
    numero?: true;
    montant?: true;
    emiseLe?: true;
    createdAt?: true;
};
export type FactureCountAggregateInputType = {
    id?: true;
    reservationId?: true;
    numero?: true;
    montant?: true;
    emiseLe?: true;
    createdAt?: true;
    _all?: true;
};
export type FactureAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FactureWhereInput;
    orderBy?: Prisma.FactureOrderByWithRelationInput | Prisma.FactureOrderByWithRelationInput[];
    cursor?: Prisma.FactureWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FactureCountAggregateInputType;
    _avg?: FactureAvgAggregateInputType;
    _sum?: FactureSumAggregateInputType;
    _min?: FactureMinAggregateInputType;
    _max?: FactureMaxAggregateInputType;
};
export type GetFactureAggregateType<T extends FactureAggregateArgs> = {
    [P in keyof T & keyof AggregateFacture]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFacture[P]> : Prisma.GetScalarType<T[P], AggregateFacture[P]>;
};
export type FactureGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FactureWhereInput;
    orderBy?: Prisma.FactureOrderByWithAggregationInput | Prisma.FactureOrderByWithAggregationInput[];
    by: Prisma.FactureScalarFieldEnum[] | Prisma.FactureScalarFieldEnum;
    having?: Prisma.FactureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FactureCountAggregateInputType | true;
    _avg?: FactureAvgAggregateInputType;
    _sum?: FactureSumAggregateInputType;
    _min?: FactureMinAggregateInputType;
    _max?: FactureMaxAggregateInputType;
};
export type FactureGroupByOutputType = {
    id: string;
    reservationId: string;
    numero: string;
    montant: number;
    emiseLe: Date;
    createdAt: Date;
    _count: FactureCountAggregateOutputType | null;
    _avg: FactureAvgAggregateOutputType | null;
    _sum: FactureSumAggregateOutputType | null;
    _min: FactureMinAggregateOutputType | null;
    _max: FactureMaxAggregateOutputType | null;
};
export type GetFactureGroupByPayload<T extends FactureGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FactureGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FactureGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FactureGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FactureGroupByOutputType[P]>;
}>>;
export type FactureWhereInput = {
    AND?: Prisma.FactureWhereInput | Prisma.FactureWhereInput[];
    OR?: Prisma.FactureWhereInput[];
    NOT?: Prisma.FactureWhereInput | Prisma.FactureWhereInput[];
    id?: Prisma.StringFilter<"Facture"> | string;
    reservationId?: Prisma.StringFilter<"Facture"> | string;
    numero?: Prisma.StringFilter<"Facture"> | string;
    montant?: Prisma.IntFilter<"Facture"> | number;
    emiseLe?: Prisma.DateTimeFilter<"Facture"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Facture"> | Date | string;
    reservation?: Prisma.XOR<Prisma.ReservationScalarRelationFilter, Prisma.ReservationWhereInput>;
};
export type FactureOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    emiseLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reservation?: Prisma.ReservationOrderByWithRelationInput;
    _relevance?: Prisma.FactureOrderByRelevanceInput;
};
export type FactureWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    reservationId?: string;
    numero?: string;
    AND?: Prisma.FactureWhereInput | Prisma.FactureWhereInput[];
    OR?: Prisma.FactureWhereInput[];
    NOT?: Prisma.FactureWhereInput | Prisma.FactureWhereInput[];
    montant?: Prisma.IntFilter<"Facture"> | number;
    emiseLe?: Prisma.DateTimeFilter<"Facture"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Facture"> | Date | string;
    reservation?: Prisma.XOR<Prisma.ReservationScalarRelationFilter, Prisma.ReservationWhereInput>;
}, "id" | "reservationId" | "numero">;
export type FactureOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    emiseLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FactureCountOrderByAggregateInput;
    _avg?: Prisma.FactureAvgOrderByAggregateInput;
    _max?: Prisma.FactureMaxOrderByAggregateInput;
    _min?: Prisma.FactureMinOrderByAggregateInput;
    _sum?: Prisma.FactureSumOrderByAggregateInput;
};
export type FactureScalarWhereWithAggregatesInput = {
    AND?: Prisma.FactureScalarWhereWithAggregatesInput | Prisma.FactureScalarWhereWithAggregatesInput[];
    OR?: Prisma.FactureScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FactureScalarWhereWithAggregatesInput | Prisma.FactureScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Facture"> | string;
    reservationId?: Prisma.StringWithAggregatesFilter<"Facture"> | string;
    numero?: Prisma.StringWithAggregatesFilter<"Facture"> | string;
    montant?: Prisma.IntWithAggregatesFilter<"Facture"> | number;
    emiseLe?: Prisma.DateTimeWithAggregatesFilter<"Facture"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Facture"> | Date | string;
};
export type FactureCreateInput = {
    id?: string;
    numero: string;
    montant: number;
    emiseLe?: Date | string;
    createdAt?: Date | string;
    reservation: Prisma.ReservationCreateNestedOneWithoutFactureInput;
};
export type FactureUncheckedCreateInput = {
    id?: string;
    reservationId: string;
    numero: string;
    montant: number;
    emiseLe?: Date | string;
    createdAt?: Date | string;
};
export type FactureUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    emiseLe?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservation?: Prisma.ReservationUpdateOneRequiredWithoutFactureNestedInput;
};
export type FactureUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservationId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    emiseLe?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FactureCreateManyInput = {
    id?: string;
    reservationId: string;
    numero: string;
    montant: number;
    emiseLe?: Date | string;
    createdAt?: Date | string;
};
export type FactureUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    emiseLe?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FactureUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservationId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    emiseLe?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FactureNullableScalarRelationFilter = {
    is?: Prisma.FactureWhereInput | null;
    isNot?: Prisma.FactureWhereInput | null;
};
export type FactureOrderByRelevanceInput = {
    fields: Prisma.FactureOrderByRelevanceFieldEnum | Prisma.FactureOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type FactureCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    emiseLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FactureAvgOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
};
export type FactureMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    emiseLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FactureMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    montant?: Prisma.SortOrder;
    emiseLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FactureSumOrderByAggregateInput = {
    montant?: Prisma.SortOrder;
};
export type FactureCreateNestedOneWithoutReservationInput = {
    create?: Prisma.XOR<Prisma.FactureCreateWithoutReservationInput, Prisma.FactureUncheckedCreateWithoutReservationInput>;
    connectOrCreate?: Prisma.FactureCreateOrConnectWithoutReservationInput;
    connect?: Prisma.FactureWhereUniqueInput;
};
export type FactureUncheckedCreateNestedOneWithoutReservationInput = {
    create?: Prisma.XOR<Prisma.FactureCreateWithoutReservationInput, Prisma.FactureUncheckedCreateWithoutReservationInput>;
    connectOrCreate?: Prisma.FactureCreateOrConnectWithoutReservationInput;
    connect?: Prisma.FactureWhereUniqueInput;
};
export type FactureUpdateOneWithoutReservationNestedInput = {
    create?: Prisma.XOR<Prisma.FactureCreateWithoutReservationInput, Prisma.FactureUncheckedCreateWithoutReservationInput>;
    connectOrCreate?: Prisma.FactureCreateOrConnectWithoutReservationInput;
    upsert?: Prisma.FactureUpsertWithoutReservationInput;
    disconnect?: Prisma.FactureWhereInput | boolean;
    delete?: Prisma.FactureWhereInput | boolean;
    connect?: Prisma.FactureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FactureUpdateToOneWithWhereWithoutReservationInput, Prisma.FactureUpdateWithoutReservationInput>, Prisma.FactureUncheckedUpdateWithoutReservationInput>;
};
export type FactureUncheckedUpdateOneWithoutReservationNestedInput = {
    create?: Prisma.XOR<Prisma.FactureCreateWithoutReservationInput, Prisma.FactureUncheckedCreateWithoutReservationInput>;
    connectOrCreate?: Prisma.FactureCreateOrConnectWithoutReservationInput;
    upsert?: Prisma.FactureUpsertWithoutReservationInput;
    disconnect?: Prisma.FactureWhereInput | boolean;
    delete?: Prisma.FactureWhereInput | boolean;
    connect?: Prisma.FactureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FactureUpdateToOneWithWhereWithoutReservationInput, Prisma.FactureUpdateWithoutReservationInput>, Prisma.FactureUncheckedUpdateWithoutReservationInput>;
};
export type FactureCreateWithoutReservationInput = {
    id?: string;
    numero: string;
    montant: number;
    emiseLe?: Date | string;
    createdAt?: Date | string;
};
export type FactureUncheckedCreateWithoutReservationInput = {
    id?: string;
    numero: string;
    montant: number;
    emiseLe?: Date | string;
    createdAt?: Date | string;
};
export type FactureCreateOrConnectWithoutReservationInput = {
    where: Prisma.FactureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FactureCreateWithoutReservationInput, Prisma.FactureUncheckedCreateWithoutReservationInput>;
};
export type FactureUpsertWithoutReservationInput = {
    update: Prisma.XOR<Prisma.FactureUpdateWithoutReservationInput, Prisma.FactureUncheckedUpdateWithoutReservationInput>;
    create: Prisma.XOR<Prisma.FactureCreateWithoutReservationInput, Prisma.FactureUncheckedCreateWithoutReservationInput>;
    where?: Prisma.FactureWhereInput;
};
export type FactureUpdateToOneWithWhereWithoutReservationInput = {
    where?: Prisma.FactureWhereInput;
    data: Prisma.XOR<Prisma.FactureUpdateWithoutReservationInput, Prisma.FactureUncheckedUpdateWithoutReservationInput>;
};
export type FactureUpdateWithoutReservationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    emiseLe?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FactureUncheckedUpdateWithoutReservationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    montant?: Prisma.IntFieldUpdateOperationsInput | number;
    emiseLe?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FactureSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservationId?: boolean;
    numero?: boolean;
    montant?: boolean;
    emiseLe?: boolean;
    createdAt?: boolean;
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["facture"]>;
export type FactureSelectScalar = {
    id?: boolean;
    reservationId?: boolean;
    numero?: boolean;
    montant?: boolean;
    emiseLe?: boolean;
    createdAt?: boolean;
};
export type FactureOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reservationId" | "numero" | "montant" | "emiseLe" | "createdAt", ExtArgs["result"]["facture"]>;
export type FactureInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
};
export type $FacturePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Facture";
    objects: {
        reservation: Prisma.$ReservationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        reservationId: string;
        numero: string;
        montant: number;
        emiseLe: Date;
        createdAt: Date;
    }, ExtArgs["result"]["facture"]>;
    composites: {};
};
export type FactureGetPayload<S extends boolean | null | undefined | FactureDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FacturePayload, S>;
export type FactureCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FactureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FactureCountAggregateInputType | true;
};
export interface FactureDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Facture'];
        meta: {
            name: 'Facture';
        };
    };
    findUnique<T extends FactureFindUniqueArgs>(args: Prisma.SelectSubset<T, FactureFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FactureClient<runtime.Types.Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FactureFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FactureFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FactureClient<runtime.Types.Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FactureFindFirstArgs>(args?: Prisma.SelectSubset<T, FactureFindFirstArgs<ExtArgs>>): Prisma.Prisma__FactureClient<runtime.Types.Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FactureFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FactureFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FactureClient<runtime.Types.Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FactureFindManyArgs>(args?: Prisma.SelectSubset<T, FactureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FactureCreateArgs>(args: Prisma.SelectSubset<T, FactureCreateArgs<ExtArgs>>): Prisma.Prisma__FactureClient<runtime.Types.Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FactureCreateManyArgs>(args?: Prisma.SelectSubset<T, FactureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends FactureDeleteArgs>(args: Prisma.SelectSubset<T, FactureDeleteArgs<ExtArgs>>): Prisma.Prisma__FactureClient<runtime.Types.Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FactureUpdateArgs>(args: Prisma.SelectSubset<T, FactureUpdateArgs<ExtArgs>>): Prisma.Prisma__FactureClient<runtime.Types.Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FactureDeleteManyArgs>(args?: Prisma.SelectSubset<T, FactureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FactureUpdateManyArgs>(args: Prisma.SelectSubset<T, FactureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends FactureUpsertArgs>(args: Prisma.SelectSubset<T, FactureUpsertArgs<ExtArgs>>): Prisma.Prisma__FactureClient<runtime.Types.Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FactureCountArgs>(args?: Prisma.Subset<T, FactureCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FactureCountAggregateOutputType> : number>;
    aggregate<T extends FactureAggregateArgs>(args: Prisma.Subset<T, FactureAggregateArgs>): Prisma.PrismaPromise<GetFactureAggregateType<T>>;
    groupBy<T extends FactureGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FactureGroupByArgs['orderBy'];
    } : {
        orderBy?: FactureGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FactureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FactureFieldRefs;
}
export interface Prisma__FactureClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reservation<T extends Prisma.ReservationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReservationDefaultArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FactureFieldRefs {
    readonly id: Prisma.FieldRef<"Facture", 'String'>;
    readonly reservationId: Prisma.FieldRef<"Facture", 'String'>;
    readonly numero: Prisma.FieldRef<"Facture", 'String'>;
    readonly montant: Prisma.FieldRef<"Facture", 'Int'>;
    readonly emiseLe: Prisma.FieldRef<"Facture", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Facture", 'DateTime'>;
}
export type FactureFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactureSelect<ExtArgs> | null;
    omit?: Prisma.FactureOmit<ExtArgs> | null;
    include?: Prisma.FactureInclude<ExtArgs> | null;
    where: Prisma.FactureWhereUniqueInput;
};
export type FactureFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactureSelect<ExtArgs> | null;
    omit?: Prisma.FactureOmit<ExtArgs> | null;
    include?: Prisma.FactureInclude<ExtArgs> | null;
    where: Prisma.FactureWhereUniqueInput;
};
export type FactureFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactureSelect<ExtArgs> | null;
    omit?: Prisma.FactureOmit<ExtArgs> | null;
    include?: Prisma.FactureInclude<ExtArgs> | null;
    where?: Prisma.FactureWhereInput;
    orderBy?: Prisma.FactureOrderByWithRelationInput | Prisma.FactureOrderByWithRelationInput[];
    cursor?: Prisma.FactureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FactureScalarFieldEnum | Prisma.FactureScalarFieldEnum[];
};
export type FactureFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactureSelect<ExtArgs> | null;
    omit?: Prisma.FactureOmit<ExtArgs> | null;
    include?: Prisma.FactureInclude<ExtArgs> | null;
    where?: Prisma.FactureWhereInput;
    orderBy?: Prisma.FactureOrderByWithRelationInput | Prisma.FactureOrderByWithRelationInput[];
    cursor?: Prisma.FactureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FactureScalarFieldEnum | Prisma.FactureScalarFieldEnum[];
};
export type FactureFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactureSelect<ExtArgs> | null;
    omit?: Prisma.FactureOmit<ExtArgs> | null;
    include?: Prisma.FactureInclude<ExtArgs> | null;
    where?: Prisma.FactureWhereInput;
    orderBy?: Prisma.FactureOrderByWithRelationInput | Prisma.FactureOrderByWithRelationInput[];
    cursor?: Prisma.FactureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FactureScalarFieldEnum | Prisma.FactureScalarFieldEnum[];
};
export type FactureCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactureSelect<ExtArgs> | null;
    omit?: Prisma.FactureOmit<ExtArgs> | null;
    include?: Prisma.FactureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FactureCreateInput, Prisma.FactureUncheckedCreateInput>;
};
export type FactureCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FactureCreateManyInput | Prisma.FactureCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FactureUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactureSelect<ExtArgs> | null;
    omit?: Prisma.FactureOmit<ExtArgs> | null;
    include?: Prisma.FactureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FactureUpdateInput, Prisma.FactureUncheckedUpdateInput>;
    where: Prisma.FactureWhereUniqueInput;
};
export type FactureUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FactureUpdateManyMutationInput, Prisma.FactureUncheckedUpdateManyInput>;
    where?: Prisma.FactureWhereInput;
    limit?: number;
};
export type FactureUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactureSelect<ExtArgs> | null;
    omit?: Prisma.FactureOmit<ExtArgs> | null;
    include?: Prisma.FactureInclude<ExtArgs> | null;
    where: Prisma.FactureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FactureCreateInput, Prisma.FactureUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FactureUpdateInput, Prisma.FactureUncheckedUpdateInput>;
};
export type FactureDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactureSelect<ExtArgs> | null;
    omit?: Prisma.FactureOmit<ExtArgs> | null;
    include?: Prisma.FactureInclude<ExtArgs> | null;
    where: Prisma.FactureWhereUniqueInput;
};
export type FactureDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FactureWhereInput;
    limit?: number;
};
export type FactureDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactureSelect<ExtArgs> | null;
    omit?: Prisma.FactureOmit<ExtArgs> | null;
    include?: Prisma.FactureInclude<ExtArgs> | null;
};
