import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FormationModel = runtime.Types.Result.DefaultSelection<Prisma.$FormationPayload>;
export type AggregateFormation = {
    _count: FormationCountAggregateOutputType | null;
    _avg: FormationAvgAggregateOutputType | null;
    _sum: FormationSumAggregateOutputType | null;
    _min: FormationMinAggregateOutputType | null;
    _max: FormationMaxAggregateOutputType | null;
};
export type FormationAvgAggregateOutputType = {
    dureeHeures: number | null;
    prixIndividuel: number | null;
    prixGroupe5: number | null;
    prixGroupe10: number | null;
};
export type FormationSumAggregateOutputType = {
    dureeHeures: number | null;
    prixIndividuel: number | null;
    prixGroupe5: number | null;
    prixGroupe10: number | null;
};
export type FormationMinAggregateOutputType = {
    id: string | null;
    titre: string | null;
    description: string | null;
    dureeHeures: number | null;
    prixIndividuel: number | null;
    prixGroupe5: number | null;
    prixGroupe10: number | null;
    actif: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FormationMaxAggregateOutputType = {
    id: string | null;
    titre: string | null;
    description: string | null;
    dureeHeures: number | null;
    prixIndividuel: number | null;
    prixGroupe5: number | null;
    prixGroupe10: number | null;
    actif: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FormationCountAggregateOutputType = {
    id: number;
    titre: number;
    description: number;
    dureeHeures: number;
    prixIndividuel: number;
    prixGroupe5: number;
    prixGroupe10: number;
    actif: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FormationAvgAggregateInputType = {
    dureeHeures?: true;
    prixIndividuel?: true;
    prixGroupe5?: true;
    prixGroupe10?: true;
};
export type FormationSumAggregateInputType = {
    dureeHeures?: true;
    prixIndividuel?: true;
    prixGroupe5?: true;
    prixGroupe10?: true;
};
export type FormationMinAggregateInputType = {
    id?: true;
    titre?: true;
    description?: true;
    dureeHeures?: true;
    prixIndividuel?: true;
    prixGroupe5?: true;
    prixGroupe10?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FormationMaxAggregateInputType = {
    id?: true;
    titre?: true;
    description?: true;
    dureeHeures?: true;
    prixIndividuel?: true;
    prixGroupe5?: true;
    prixGroupe10?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FormationCountAggregateInputType = {
    id?: true;
    titre?: true;
    description?: true;
    dureeHeures?: true;
    prixIndividuel?: true;
    prixGroupe5?: true;
    prixGroupe10?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FormationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormationWhereInput;
    orderBy?: Prisma.FormationOrderByWithRelationInput | Prisma.FormationOrderByWithRelationInput[];
    cursor?: Prisma.FormationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FormationCountAggregateInputType;
    _avg?: FormationAvgAggregateInputType;
    _sum?: FormationSumAggregateInputType;
    _min?: FormationMinAggregateInputType;
    _max?: FormationMaxAggregateInputType;
};
export type GetFormationAggregateType<T extends FormationAggregateArgs> = {
    [P in keyof T & keyof AggregateFormation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFormation[P]> : Prisma.GetScalarType<T[P], AggregateFormation[P]>;
};
export type FormationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormationWhereInput;
    orderBy?: Prisma.FormationOrderByWithAggregationInput | Prisma.FormationOrderByWithAggregationInput[];
    by: Prisma.FormationScalarFieldEnum[] | Prisma.FormationScalarFieldEnum;
    having?: Prisma.FormationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FormationCountAggregateInputType | true;
    _avg?: FormationAvgAggregateInputType;
    _sum?: FormationSumAggregateInputType;
    _min?: FormationMinAggregateInputType;
    _max?: FormationMaxAggregateInputType;
};
export type FormationGroupByOutputType = {
    id: string;
    titre: string;
    description: string;
    dureeHeures: number | null;
    prixIndividuel: number;
    prixGroupe5: number;
    prixGroupe10: number;
    actif: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: FormationCountAggregateOutputType | null;
    _avg: FormationAvgAggregateOutputType | null;
    _sum: FormationSumAggregateOutputType | null;
    _min: FormationMinAggregateOutputType | null;
    _max: FormationMaxAggregateOutputType | null;
};
export type GetFormationGroupByPayload<T extends FormationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FormationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FormationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FormationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FormationGroupByOutputType[P]>;
}>>;
export type FormationWhereInput = {
    AND?: Prisma.FormationWhereInput | Prisma.FormationWhereInput[];
    OR?: Prisma.FormationWhereInput[];
    NOT?: Prisma.FormationWhereInput | Prisma.FormationWhereInput[];
    id?: Prisma.StringFilter<"Formation"> | string;
    titre?: Prisma.StringFilter<"Formation"> | string;
    description?: Prisma.StringFilter<"Formation"> | string;
    dureeHeures?: Prisma.IntNullableFilter<"Formation"> | number | null;
    prixIndividuel?: Prisma.IntFilter<"Formation"> | number;
    prixGroupe5?: Prisma.IntFilter<"Formation"> | number;
    prixGroupe10?: Prisma.IntFilter<"Formation"> | number;
    actif?: Prisma.BoolFilter<"Formation"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Formation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Formation"> | Date | string;
    reservations?: Prisma.ReservationListRelationFilter;
};
export type FormationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dureeHeures?: Prisma.SortOrderInput | Prisma.SortOrder;
    prixIndividuel?: Prisma.SortOrder;
    prixGroupe5?: Prisma.SortOrder;
    prixGroupe10?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    reservations?: Prisma.ReservationOrderByRelationAggregateInput;
    _relevance?: Prisma.FormationOrderByRelevanceInput;
};
export type FormationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FormationWhereInput | Prisma.FormationWhereInput[];
    OR?: Prisma.FormationWhereInput[];
    NOT?: Prisma.FormationWhereInput | Prisma.FormationWhereInput[];
    titre?: Prisma.StringFilter<"Formation"> | string;
    description?: Prisma.StringFilter<"Formation"> | string;
    dureeHeures?: Prisma.IntNullableFilter<"Formation"> | number | null;
    prixIndividuel?: Prisma.IntFilter<"Formation"> | number;
    prixGroupe5?: Prisma.IntFilter<"Formation"> | number;
    prixGroupe10?: Prisma.IntFilter<"Formation"> | number;
    actif?: Prisma.BoolFilter<"Formation"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Formation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Formation"> | Date | string;
    reservations?: Prisma.ReservationListRelationFilter;
}, "id">;
export type FormationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dureeHeures?: Prisma.SortOrderInput | Prisma.SortOrder;
    prixIndividuel?: Prisma.SortOrder;
    prixGroupe5?: Prisma.SortOrder;
    prixGroupe10?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FormationCountOrderByAggregateInput;
    _avg?: Prisma.FormationAvgOrderByAggregateInput;
    _max?: Prisma.FormationMaxOrderByAggregateInput;
    _min?: Prisma.FormationMinOrderByAggregateInput;
    _sum?: Prisma.FormationSumOrderByAggregateInput;
};
export type FormationScalarWhereWithAggregatesInput = {
    AND?: Prisma.FormationScalarWhereWithAggregatesInput | Prisma.FormationScalarWhereWithAggregatesInput[];
    OR?: Prisma.FormationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FormationScalarWhereWithAggregatesInput | Prisma.FormationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Formation"> | string;
    titre?: Prisma.StringWithAggregatesFilter<"Formation"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Formation"> | string;
    dureeHeures?: Prisma.IntNullableWithAggregatesFilter<"Formation"> | number | null;
    prixIndividuel?: Prisma.IntWithAggregatesFilter<"Formation"> | number;
    prixGroupe5?: Prisma.IntWithAggregatesFilter<"Formation"> | number;
    prixGroupe10?: Prisma.IntWithAggregatesFilter<"Formation"> | number;
    actif?: Prisma.BoolWithAggregatesFilter<"Formation"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Formation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Formation"> | Date | string;
};
export type FormationCreateInput = {
    id?: string;
    titre: string;
    description: string;
    dureeHeures?: number | null;
    prixIndividuel: number;
    prixGroupe5: number;
    prixGroupe10: number;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reservations?: Prisma.ReservationCreateNestedManyWithoutFormationInput;
};
export type FormationUncheckedCreateInput = {
    id?: string;
    titre: string;
    description: string;
    dureeHeures?: number | null;
    prixIndividuel: number;
    prixGroupe5: number;
    prixGroupe10: number;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutFormationInput;
};
export type FormationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeHeures?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prixIndividuel?: Prisma.IntFieldUpdateOperationsInput | number;
    prixGroupe5?: Prisma.IntFieldUpdateOperationsInput | number;
    prixGroupe10?: Prisma.IntFieldUpdateOperationsInput | number;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservations?: Prisma.ReservationUpdateManyWithoutFormationNestedInput;
};
export type FormationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeHeures?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prixIndividuel?: Prisma.IntFieldUpdateOperationsInput | number;
    prixGroupe5?: Prisma.IntFieldUpdateOperationsInput | number;
    prixGroupe10?: Prisma.IntFieldUpdateOperationsInput | number;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutFormationNestedInput;
};
export type FormationCreateManyInput = {
    id?: string;
    titre: string;
    description: string;
    dureeHeures?: number | null;
    prixIndividuel: number;
    prixGroupe5: number;
    prixGroupe10: number;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FormationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeHeures?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prixIndividuel?: Prisma.IntFieldUpdateOperationsInput | number;
    prixGroupe5?: Prisma.IntFieldUpdateOperationsInput | number;
    prixGroupe10?: Prisma.IntFieldUpdateOperationsInput | number;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeHeures?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prixIndividuel?: Prisma.IntFieldUpdateOperationsInput | number;
    prixGroupe5?: Prisma.IntFieldUpdateOperationsInput | number;
    prixGroupe10?: Prisma.IntFieldUpdateOperationsInput | number;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormationOrderByRelevanceInput = {
    fields: Prisma.FormationOrderByRelevanceFieldEnum | Prisma.FormationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type FormationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dureeHeures?: Prisma.SortOrder;
    prixIndividuel?: Prisma.SortOrder;
    prixGroupe5?: Prisma.SortOrder;
    prixGroupe10?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FormationAvgOrderByAggregateInput = {
    dureeHeures?: Prisma.SortOrder;
    prixIndividuel?: Prisma.SortOrder;
    prixGroupe5?: Prisma.SortOrder;
    prixGroupe10?: Prisma.SortOrder;
};
export type FormationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dureeHeures?: Prisma.SortOrder;
    prixIndividuel?: Prisma.SortOrder;
    prixGroupe5?: Prisma.SortOrder;
    prixGroupe10?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FormationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titre?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    dureeHeures?: Prisma.SortOrder;
    prixIndividuel?: Prisma.SortOrder;
    prixGroupe5?: Prisma.SortOrder;
    prixGroupe10?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FormationSumOrderByAggregateInput = {
    dureeHeures?: Prisma.SortOrder;
    prixIndividuel?: Prisma.SortOrder;
    prixGroupe5?: Prisma.SortOrder;
    prixGroupe10?: Prisma.SortOrder;
};
export type FormationScalarRelationFilter = {
    is?: Prisma.FormationWhereInput;
    isNot?: Prisma.FormationWhereInput;
};
export type FormationCreateNestedOneWithoutReservationsInput = {
    create?: Prisma.XOR<Prisma.FormationCreateWithoutReservationsInput, Prisma.FormationUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.FormationCreateOrConnectWithoutReservationsInput;
    connect?: Prisma.FormationWhereUniqueInput;
};
export type FormationUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: Prisma.XOR<Prisma.FormationCreateWithoutReservationsInput, Prisma.FormationUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.FormationCreateOrConnectWithoutReservationsInput;
    upsert?: Prisma.FormationUpsertWithoutReservationsInput;
    connect?: Prisma.FormationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FormationUpdateToOneWithWhereWithoutReservationsInput, Prisma.FormationUpdateWithoutReservationsInput>, Prisma.FormationUncheckedUpdateWithoutReservationsInput>;
};
export type FormationCreateWithoutReservationsInput = {
    id?: string;
    titre: string;
    description: string;
    dureeHeures?: number | null;
    prixIndividuel: number;
    prixGroupe5: number;
    prixGroupe10: number;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FormationUncheckedCreateWithoutReservationsInput = {
    id?: string;
    titre: string;
    description: string;
    dureeHeures?: number | null;
    prixIndividuel: number;
    prixGroupe5: number;
    prixGroupe10: number;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FormationCreateOrConnectWithoutReservationsInput = {
    where: Prisma.FormationWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormationCreateWithoutReservationsInput, Prisma.FormationUncheckedCreateWithoutReservationsInput>;
};
export type FormationUpsertWithoutReservationsInput = {
    update: Prisma.XOR<Prisma.FormationUpdateWithoutReservationsInput, Prisma.FormationUncheckedUpdateWithoutReservationsInput>;
    create: Prisma.XOR<Prisma.FormationCreateWithoutReservationsInput, Prisma.FormationUncheckedCreateWithoutReservationsInput>;
    where?: Prisma.FormationWhereInput;
};
export type FormationUpdateToOneWithWhereWithoutReservationsInput = {
    where?: Prisma.FormationWhereInput;
    data: Prisma.XOR<Prisma.FormationUpdateWithoutReservationsInput, Prisma.FormationUncheckedUpdateWithoutReservationsInput>;
};
export type FormationUpdateWithoutReservationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeHeures?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prixIndividuel?: Prisma.IntFieldUpdateOperationsInput | number;
    prixGroupe5?: Prisma.IntFieldUpdateOperationsInput | number;
    prixGroupe10?: Prisma.IntFieldUpdateOperationsInput | number;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormationUncheckedUpdateWithoutReservationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titre?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    dureeHeures?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prixIndividuel?: Prisma.IntFieldUpdateOperationsInput | number;
    prixGroupe5?: Prisma.IntFieldUpdateOperationsInput | number;
    prixGroupe10?: Prisma.IntFieldUpdateOperationsInput | number;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormationCountOutputType = {
    reservations: number;
};
export type FormationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservations?: boolean | FormationCountOutputTypeCountReservationsArgs;
};
export type FormationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormationCountOutputTypeSelect<ExtArgs> | null;
};
export type FormationCountOutputTypeCountReservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationWhereInput;
};
export type FormationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titre?: boolean;
    description?: boolean;
    dureeHeures?: boolean;
    prixIndividuel?: boolean;
    prixGroupe5?: boolean;
    prixGroupe10?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    reservations?: boolean | Prisma.Formation$reservationsArgs<ExtArgs>;
    _count?: boolean | Prisma.FormationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["formation"]>;
export type FormationSelectScalar = {
    id?: boolean;
    titre?: boolean;
    description?: boolean;
    dureeHeures?: boolean;
    prixIndividuel?: boolean;
    prixGroupe5?: boolean;
    prixGroupe10?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FormationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titre" | "description" | "dureeHeures" | "prixIndividuel" | "prixGroupe5" | "prixGroupe10" | "actif" | "createdAt" | "updatedAt", ExtArgs["result"]["formation"]>;
export type FormationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservations?: boolean | Prisma.Formation$reservationsArgs<ExtArgs>;
    _count?: boolean | Prisma.FormationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $FormationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Formation";
    objects: {
        reservations: Prisma.$ReservationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        titre: string;
        description: string;
        dureeHeures: number | null;
        prixIndividuel: number;
        prixGroupe5: number;
        prixGroupe10: number;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["formation"]>;
    composites: {};
};
export type FormationGetPayload<S extends boolean | null | undefined | FormationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FormationPayload, S>;
export type FormationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FormationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FormationCountAggregateInputType | true;
};
export interface FormationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Formation'];
        meta: {
            name: 'Formation';
        };
    };
    findUnique<T extends FormationFindUniqueArgs>(args: Prisma.SelectSubset<T, FormationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FormationClient<runtime.Types.Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FormationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FormationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FormationClient<runtime.Types.Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FormationFindFirstArgs>(args?: Prisma.SelectSubset<T, FormationFindFirstArgs<ExtArgs>>): Prisma.Prisma__FormationClient<runtime.Types.Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FormationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FormationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FormationClient<runtime.Types.Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FormationFindManyArgs>(args?: Prisma.SelectSubset<T, FormationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FormationCreateArgs>(args: Prisma.SelectSubset<T, FormationCreateArgs<ExtArgs>>): Prisma.Prisma__FormationClient<runtime.Types.Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FormationCreateManyArgs>(args?: Prisma.SelectSubset<T, FormationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends FormationDeleteArgs>(args: Prisma.SelectSubset<T, FormationDeleteArgs<ExtArgs>>): Prisma.Prisma__FormationClient<runtime.Types.Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FormationUpdateArgs>(args: Prisma.SelectSubset<T, FormationUpdateArgs<ExtArgs>>): Prisma.Prisma__FormationClient<runtime.Types.Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FormationDeleteManyArgs>(args?: Prisma.SelectSubset<T, FormationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FormationUpdateManyArgs>(args: Prisma.SelectSubset<T, FormationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends FormationUpsertArgs>(args: Prisma.SelectSubset<T, FormationUpsertArgs<ExtArgs>>): Prisma.Prisma__FormationClient<runtime.Types.Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FormationCountArgs>(args?: Prisma.Subset<T, FormationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FormationCountAggregateOutputType> : number>;
    aggregate<T extends FormationAggregateArgs>(args: Prisma.Subset<T, FormationAggregateArgs>): Prisma.PrismaPromise<GetFormationAggregateType<T>>;
    groupBy<T extends FormationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FormationGroupByArgs['orderBy'];
    } : {
        orderBy?: FormationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FormationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FormationFieldRefs;
}
export interface Prisma__FormationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reservations<T extends Prisma.Formation$reservationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Formation$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FormationFieldRefs {
    readonly id: Prisma.FieldRef<"Formation", 'String'>;
    readonly titre: Prisma.FieldRef<"Formation", 'String'>;
    readonly description: Prisma.FieldRef<"Formation", 'String'>;
    readonly dureeHeures: Prisma.FieldRef<"Formation", 'Int'>;
    readonly prixIndividuel: Prisma.FieldRef<"Formation", 'Int'>;
    readonly prixGroupe5: Prisma.FieldRef<"Formation", 'Int'>;
    readonly prixGroupe10: Prisma.FieldRef<"Formation", 'Int'>;
    readonly actif: Prisma.FieldRef<"Formation", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Formation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Formation", 'DateTime'>;
}
export type FormationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormationSelect<ExtArgs> | null;
    omit?: Prisma.FormationOmit<ExtArgs> | null;
    include?: Prisma.FormationInclude<ExtArgs> | null;
    where: Prisma.FormationWhereUniqueInput;
};
export type FormationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormationSelect<ExtArgs> | null;
    omit?: Prisma.FormationOmit<ExtArgs> | null;
    include?: Prisma.FormationInclude<ExtArgs> | null;
    where: Prisma.FormationWhereUniqueInput;
};
export type FormationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormationSelect<ExtArgs> | null;
    omit?: Prisma.FormationOmit<ExtArgs> | null;
    include?: Prisma.FormationInclude<ExtArgs> | null;
    where?: Prisma.FormationWhereInput;
    orderBy?: Prisma.FormationOrderByWithRelationInput | Prisma.FormationOrderByWithRelationInput[];
    cursor?: Prisma.FormationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FormationScalarFieldEnum | Prisma.FormationScalarFieldEnum[];
};
export type FormationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormationSelect<ExtArgs> | null;
    omit?: Prisma.FormationOmit<ExtArgs> | null;
    include?: Prisma.FormationInclude<ExtArgs> | null;
    where?: Prisma.FormationWhereInput;
    orderBy?: Prisma.FormationOrderByWithRelationInput | Prisma.FormationOrderByWithRelationInput[];
    cursor?: Prisma.FormationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FormationScalarFieldEnum | Prisma.FormationScalarFieldEnum[];
};
export type FormationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormationSelect<ExtArgs> | null;
    omit?: Prisma.FormationOmit<ExtArgs> | null;
    include?: Prisma.FormationInclude<ExtArgs> | null;
    where?: Prisma.FormationWhereInput;
    orderBy?: Prisma.FormationOrderByWithRelationInput | Prisma.FormationOrderByWithRelationInput[];
    cursor?: Prisma.FormationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FormationScalarFieldEnum | Prisma.FormationScalarFieldEnum[];
};
export type FormationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormationSelect<ExtArgs> | null;
    omit?: Prisma.FormationOmit<ExtArgs> | null;
    include?: Prisma.FormationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormationCreateInput, Prisma.FormationUncheckedCreateInput>;
};
export type FormationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FormationCreateManyInput | Prisma.FormationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FormationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormationSelect<ExtArgs> | null;
    omit?: Prisma.FormationOmit<ExtArgs> | null;
    include?: Prisma.FormationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormationUpdateInput, Prisma.FormationUncheckedUpdateInput>;
    where: Prisma.FormationWhereUniqueInput;
};
export type FormationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FormationUpdateManyMutationInput, Prisma.FormationUncheckedUpdateManyInput>;
    where?: Prisma.FormationWhereInput;
    limit?: number;
};
export type FormationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormationSelect<ExtArgs> | null;
    omit?: Prisma.FormationOmit<ExtArgs> | null;
    include?: Prisma.FormationInclude<ExtArgs> | null;
    where: Prisma.FormationWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormationCreateInput, Prisma.FormationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FormationUpdateInput, Prisma.FormationUncheckedUpdateInput>;
};
export type FormationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormationSelect<ExtArgs> | null;
    omit?: Prisma.FormationOmit<ExtArgs> | null;
    include?: Prisma.FormationInclude<ExtArgs> | null;
    where: Prisma.FormationWhereUniqueInput;
};
export type FormationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormationWhereInput;
    limit?: number;
};
export type Formation$reservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where?: Prisma.ReservationWhereInput;
    orderBy?: Prisma.ReservationOrderByWithRelationInput | Prisma.ReservationOrderByWithRelationInput[];
    cursor?: Prisma.ReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservationScalarFieldEnum | Prisma.ReservationScalarFieldEnum[];
};
export type FormationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormationSelect<ExtArgs> | null;
    omit?: Prisma.FormationOmit<ExtArgs> | null;
    include?: Prisma.FormationInclude<ExtArgs> | null;
};
