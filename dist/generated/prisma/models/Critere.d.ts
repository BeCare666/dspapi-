import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CritereModel = runtime.Types.Result.DefaultSelection<Prisma.$CriterePayload>;
export type AggregateCritere = {
    _count: CritereCountAggregateOutputType | null;
    _avg: CritereAvgAggregateOutputType | null;
    _sum: CritereSumAggregateOutputType | null;
    _min: CritereMinAggregateOutputType | null;
    _max: CritereMaxAggregateOutputType | null;
};
export type CritereAvgAggregateOutputType = {
    ordre: number | null;
};
export type CritereSumAggregateOutputType = {
    ordre: number | null;
};
export type CritereMinAggregateOutputType = {
    id: string | null;
    normeId: string | null;
    code: string | null;
    libelle: string | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CritereMaxAggregateOutputType = {
    id: string | null;
    normeId: string | null;
    code: string | null;
    libelle: string | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CritereCountAggregateOutputType = {
    id: number;
    normeId: number;
    code: number;
    libelle: number;
    ordre: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CritereAvgAggregateInputType = {
    ordre?: true;
};
export type CritereSumAggregateInputType = {
    ordre?: true;
};
export type CritereMinAggregateInputType = {
    id?: true;
    normeId?: true;
    code?: true;
    libelle?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CritereMaxAggregateInputType = {
    id?: true;
    normeId?: true;
    code?: true;
    libelle?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CritereCountAggregateInputType = {
    id?: true;
    normeId?: true;
    code?: true;
    libelle?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CritereAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CritereWhereInput;
    orderBy?: Prisma.CritereOrderByWithRelationInput | Prisma.CritereOrderByWithRelationInput[];
    cursor?: Prisma.CritereWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CritereCountAggregateInputType;
    _avg?: CritereAvgAggregateInputType;
    _sum?: CritereSumAggregateInputType;
    _min?: CritereMinAggregateInputType;
    _max?: CritereMaxAggregateInputType;
};
export type GetCritereAggregateType<T extends CritereAggregateArgs> = {
    [P in keyof T & keyof AggregateCritere]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCritere[P]> : Prisma.GetScalarType<T[P], AggregateCritere[P]>;
};
export type CritereGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CritereWhereInput;
    orderBy?: Prisma.CritereOrderByWithAggregationInput | Prisma.CritereOrderByWithAggregationInput[];
    by: Prisma.CritereScalarFieldEnum[] | Prisma.CritereScalarFieldEnum;
    having?: Prisma.CritereScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CritereCountAggregateInputType | true;
    _avg?: CritereAvgAggregateInputType;
    _sum?: CritereSumAggregateInputType;
    _min?: CritereMinAggregateInputType;
    _max?: CritereMaxAggregateInputType;
};
export type CritereGroupByOutputType = {
    id: string;
    normeId: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt: Date;
    updatedAt: Date;
    _count: CritereCountAggregateOutputType | null;
    _avg: CritereAvgAggregateOutputType | null;
    _sum: CritereSumAggregateOutputType | null;
    _min: CritereMinAggregateOutputType | null;
    _max: CritereMaxAggregateOutputType | null;
};
export type GetCritereGroupByPayload<T extends CritereGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CritereGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CritereGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CritereGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CritereGroupByOutputType[P]>;
}>>;
export type CritereWhereInput = {
    AND?: Prisma.CritereWhereInput | Prisma.CritereWhereInput[];
    OR?: Prisma.CritereWhereInput[];
    NOT?: Prisma.CritereWhereInput | Prisma.CritereWhereInput[];
    id?: Prisma.StringFilter<"Critere"> | string;
    normeId?: Prisma.StringFilter<"Critere"> | string;
    code?: Prisma.StringFilter<"Critere"> | string;
    libelle?: Prisma.StringFilter<"Critere"> | string;
    ordre?: Prisma.IntFilter<"Critere"> | number;
    createdAt?: Prisma.DateTimeFilter<"Critere"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Critere"> | Date | string;
    norme?: Prisma.XOR<Prisma.NormeScalarRelationFilter, Prisma.NormeWhereInput>;
    elementsMesurables?: Prisma.ElementMesurableListRelationFilter;
    evenementsIndesirables?: Prisma.EvenementIndesirableListRelationFilter;
};
export type CritereOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    normeId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    norme?: Prisma.NormeOrderByWithRelationInput;
    elementsMesurables?: Prisma.ElementMesurableOrderByRelationAggregateInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableOrderByRelationAggregateInput;
    _relevance?: Prisma.CritereOrderByRelevanceInput;
};
export type CritereWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CritereWhereInput | Prisma.CritereWhereInput[];
    OR?: Prisma.CritereWhereInput[];
    NOT?: Prisma.CritereWhereInput | Prisma.CritereWhereInput[];
    normeId?: Prisma.StringFilter<"Critere"> | string;
    code?: Prisma.StringFilter<"Critere"> | string;
    libelle?: Prisma.StringFilter<"Critere"> | string;
    ordre?: Prisma.IntFilter<"Critere"> | number;
    createdAt?: Prisma.DateTimeFilter<"Critere"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Critere"> | Date | string;
    norme?: Prisma.XOR<Prisma.NormeScalarRelationFilter, Prisma.NormeWhereInput>;
    elementsMesurables?: Prisma.ElementMesurableListRelationFilter;
    evenementsIndesirables?: Prisma.EvenementIndesirableListRelationFilter;
}, "id">;
export type CritereOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    normeId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CritereCountOrderByAggregateInput;
    _avg?: Prisma.CritereAvgOrderByAggregateInput;
    _max?: Prisma.CritereMaxOrderByAggregateInput;
    _min?: Prisma.CritereMinOrderByAggregateInput;
    _sum?: Prisma.CritereSumOrderByAggregateInput;
};
export type CritereScalarWhereWithAggregatesInput = {
    AND?: Prisma.CritereScalarWhereWithAggregatesInput | Prisma.CritereScalarWhereWithAggregatesInput[];
    OR?: Prisma.CritereScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CritereScalarWhereWithAggregatesInput | Prisma.CritereScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Critere"> | string;
    normeId?: Prisma.StringWithAggregatesFilter<"Critere"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Critere"> | string;
    libelle?: Prisma.StringWithAggregatesFilter<"Critere"> | string;
    ordre?: Prisma.IntWithAggregatesFilter<"Critere"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Critere"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Critere"> | Date | string;
};
export type CritereCreateInput = {
    id?: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    norme: Prisma.NormeCreateNestedOneWithoutCriteresInput;
    elementsMesurables?: Prisma.ElementMesurableCreateNestedManyWithoutCritereInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutCritereInput;
};
export type CritereUncheckedCreateInput = {
    id?: string;
    normeId: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elementsMesurables?: Prisma.ElementMesurableUncheckedCreateNestedManyWithoutCritereInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutCritereInput;
};
export type CritereUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    norme?: Prisma.NormeUpdateOneRequiredWithoutCriteresNestedInput;
    elementsMesurables?: Prisma.ElementMesurableUpdateManyWithoutCritereNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutCritereNestedInput;
};
export type CritereUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    normeId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    elementsMesurables?: Prisma.ElementMesurableUncheckedUpdateManyWithoutCritereNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutCritereNestedInput;
};
export type CritereCreateManyInput = {
    id?: string;
    normeId: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CritereUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CritereUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    normeId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CritereListRelationFilter = {
    every?: Prisma.CritereWhereInput;
    some?: Prisma.CritereWhereInput;
    none?: Prisma.CritereWhereInput;
};
export type CritereOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CritereOrderByRelevanceInput = {
    fields: Prisma.CritereOrderByRelevanceFieldEnum | Prisma.CritereOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CritereCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    normeId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CritereAvgOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type CritereMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    normeId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CritereMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    normeId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CritereSumOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type CritereScalarRelationFilter = {
    is?: Prisma.CritereWhereInput;
    isNot?: Prisma.CritereWhereInput;
};
export type CritereNullableScalarRelationFilter = {
    is?: Prisma.CritereWhereInput | null;
    isNot?: Prisma.CritereWhereInput | null;
};
export type CritereCreateNestedManyWithoutNormeInput = {
    create?: Prisma.XOR<Prisma.CritereCreateWithoutNormeInput, Prisma.CritereUncheckedCreateWithoutNormeInput> | Prisma.CritereCreateWithoutNormeInput[] | Prisma.CritereUncheckedCreateWithoutNormeInput[];
    connectOrCreate?: Prisma.CritereCreateOrConnectWithoutNormeInput | Prisma.CritereCreateOrConnectWithoutNormeInput[];
    createMany?: Prisma.CritereCreateManyNormeInputEnvelope;
    connect?: Prisma.CritereWhereUniqueInput | Prisma.CritereWhereUniqueInput[];
};
export type CritereUncheckedCreateNestedManyWithoutNormeInput = {
    create?: Prisma.XOR<Prisma.CritereCreateWithoutNormeInput, Prisma.CritereUncheckedCreateWithoutNormeInput> | Prisma.CritereCreateWithoutNormeInput[] | Prisma.CritereUncheckedCreateWithoutNormeInput[];
    connectOrCreate?: Prisma.CritereCreateOrConnectWithoutNormeInput | Prisma.CritereCreateOrConnectWithoutNormeInput[];
    createMany?: Prisma.CritereCreateManyNormeInputEnvelope;
    connect?: Prisma.CritereWhereUniqueInput | Prisma.CritereWhereUniqueInput[];
};
export type CritereUpdateManyWithoutNormeNestedInput = {
    create?: Prisma.XOR<Prisma.CritereCreateWithoutNormeInput, Prisma.CritereUncheckedCreateWithoutNormeInput> | Prisma.CritereCreateWithoutNormeInput[] | Prisma.CritereUncheckedCreateWithoutNormeInput[];
    connectOrCreate?: Prisma.CritereCreateOrConnectWithoutNormeInput | Prisma.CritereCreateOrConnectWithoutNormeInput[];
    upsert?: Prisma.CritereUpsertWithWhereUniqueWithoutNormeInput | Prisma.CritereUpsertWithWhereUniqueWithoutNormeInput[];
    createMany?: Prisma.CritereCreateManyNormeInputEnvelope;
    set?: Prisma.CritereWhereUniqueInput | Prisma.CritereWhereUniqueInput[];
    disconnect?: Prisma.CritereWhereUniqueInput | Prisma.CritereWhereUniqueInput[];
    delete?: Prisma.CritereWhereUniqueInput | Prisma.CritereWhereUniqueInput[];
    connect?: Prisma.CritereWhereUniqueInput | Prisma.CritereWhereUniqueInput[];
    update?: Prisma.CritereUpdateWithWhereUniqueWithoutNormeInput | Prisma.CritereUpdateWithWhereUniqueWithoutNormeInput[];
    updateMany?: Prisma.CritereUpdateManyWithWhereWithoutNormeInput | Prisma.CritereUpdateManyWithWhereWithoutNormeInput[];
    deleteMany?: Prisma.CritereScalarWhereInput | Prisma.CritereScalarWhereInput[];
};
export type CritereUncheckedUpdateManyWithoutNormeNestedInput = {
    create?: Prisma.XOR<Prisma.CritereCreateWithoutNormeInput, Prisma.CritereUncheckedCreateWithoutNormeInput> | Prisma.CritereCreateWithoutNormeInput[] | Prisma.CritereUncheckedCreateWithoutNormeInput[];
    connectOrCreate?: Prisma.CritereCreateOrConnectWithoutNormeInput | Prisma.CritereCreateOrConnectWithoutNormeInput[];
    upsert?: Prisma.CritereUpsertWithWhereUniqueWithoutNormeInput | Prisma.CritereUpsertWithWhereUniqueWithoutNormeInput[];
    createMany?: Prisma.CritereCreateManyNormeInputEnvelope;
    set?: Prisma.CritereWhereUniqueInput | Prisma.CritereWhereUniqueInput[];
    disconnect?: Prisma.CritereWhereUniqueInput | Prisma.CritereWhereUniqueInput[];
    delete?: Prisma.CritereWhereUniqueInput | Prisma.CritereWhereUniqueInput[];
    connect?: Prisma.CritereWhereUniqueInput | Prisma.CritereWhereUniqueInput[];
    update?: Prisma.CritereUpdateWithWhereUniqueWithoutNormeInput | Prisma.CritereUpdateWithWhereUniqueWithoutNormeInput[];
    updateMany?: Prisma.CritereUpdateManyWithWhereWithoutNormeInput | Prisma.CritereUpdateManyWithWhereWithoutNormeInput[];
    deleteMany?: Prisma.CritereScalarWhereInput | Prisma.CritereScalarWhereInput[];
};
export type CritereCreateNestedOneWithoutElementsMesurablesInput = {
    create?: Prisma.XOR<Prisma.CritereCreateWithoutElementsMesurablesInput, Prisma.CritereUncheckedCreateWithoutElementsMesurablesInput>;
    connectOrCreate?: Prisma.CritereCreateOrConnectWithoutElementsMesurablesInput;
    connect?: Prisma.CritereWhereUniqueInput;
};
export type CritereUpdateOneRequiredWithoutElementsMesurablesNestedInput = {
    create?: Prisma.XOR<Prisma.CritereCreateWithoutElementsMesurablesInput, Prisma.CritereUncheckedCreateWithoutElementsMesurablesInput>;
    connectOrCreate?: Prisma.CritereCreateOrConnectWithoutElementsMesurablesInput;
    upsert?: Prisma.CritereUpsertWithoutElementsMesurablesInput;
    connect?: Prisma.CritereWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CritereUpdateToOneWithWhereWithoutElementsMesurablesInput, Prisma.CritereUpdateWithoutElementsMesurablesInput>, Prisma.CritereUncheckedUpdateWithoutElementsMesurablesInput>;
};
export type CritereCreateNestedOneWithoutEvenementsIndesirablesInput = {
    create?: Prisma.XOR<Prisma.CritereCreateWithoutEvenementsIndesirablesInput, Prisma.CritereUncheckedCreateWithoutEvenementsIndesirablesInput>;
    connectOrCreate?: Prisma.CritereCreateOrConnectWithoutEvenementsIndesirablesInput;
    connect?: Prisma.CritereWhereUniqueInput;
};
export type CritereUpdateOneWithoutEvenementsIndesirablesNestedInput = {
    create?: Prisma.XOR<Prisma.CritereCreateWithoutEvenementsIndesirablesInput, Prisma.CritereUncheckedCreateWithoutEvenementsIndesirablesInput>;
    connectOrCreate?: Prisma.CritereCreateOrConnectWithoutEvenementsIndesirablesInput;
    upsert?: Prisma.CritereUpsertWithoutEvenementsIndesirablesInput;
    disconnect?: Prisma.CritereWhereInput | boolean;
    delete?: Prisma.CritereWhereInput | boolean;
    connect?: Prisma.CritereWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CritereUpdateToOneWithWhereWithoutEvenementsIndesirablesInput, Prisma.CritereUpdateWithoutEvenementsIndesirablesInput>, Prisma.CritereUncheckedUpdateWithoutEvenementsIndesirablesInput>;
};
export type CritereCreateWithoutNormeInput = {
    id?: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elementsMesurables?: Prisma.ElementMesurableCreateNestedManyWithoutCritereInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutCritereInput;
};
export type CritereUncheckedCreateWithoutNormeInput = {
    id?: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elementsMesurables?: Prisma.ElementMesurableUncheckedCreateNestedManyWithoutCritereInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutCritereInput;
};
export type CritereCreateOrConnectWithoutNormeInput = {
    where: Prisma.CritereWhereUniqueInput;
    create: Prisma.XOR<Prisma.CritereCreateWithoutNormeInput, Prisma.CritereUncheckedCreateWithoutNormeInput>;
};
export type CritereCreateManyNormeInputEnvelope = {
    data: Prisma.CritereCreateManyNormeInput | Prisma.CritereCreateManyNormeInput[];
    skipDuplicates?: boolean;
};
export type CritereUpsertWithWhereUniqueWithoutNormeInput = {
    where: Prisma.CritereWhereUniqueInput;
    update: Prisma.XOR<Prisma.CritereUpdateWithoutNormeInput, Prisma.CritereUncheckedUpdateWithoutNormeInput>;
    create: Prisma.XOR<Prisma.CritereCreateWithoutNormeInput, Prisma.CritereUncheckedCreateWithoutNormeInput>;
};
export type CritereUpdateWithWhereUniqueWithoutNormeInput = {
    where: Prisma.CritereWhereUniqueInput;
    data: Prisma.XOR<Prisma.CritereUpdateWithoutNormeInput, Prisma.CritereUncheckedUpdateWithoutNormeInput>;
};
export type CritereUpdateManyWithWhereWithoutNormeInput = {
    where: Prisma.CritereScalarWhereInput;
    data: Prisma.XOR<Prisma.CritereUpdateManyMutationInput, Prisma.CritereUncheckedUpdateManyWithoutNormeInput>;
};
export type CritereScalarWhereInput = {
    AND?: Prisma.CritereScalarWhereInput | Prisma.CritereScalarWhereInput[];
    OR?: Prisma.CritereScalarWhereInput[];
    NOT?: Prisma.CritereScalarWhereInput | Prisma.CritereScalarWhereInput[];
    id?: Prisma.StringFilter<"Critere"> | string;
    normeId?: Prisma.StringFilter<"Critere"> | string;
    code?: Prisma.StringFilter<"Critere"> | string;
    libelle?: Prisma.StringFilter<"Critere"> | string;
    ordre?: Prisma.IntFilter<"Critere"> | number;
    createdAt?: Prisma.DateTimeFilter<"Critere"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Critere"> | Date | string;
};
export type CritereCreateWithoutElementsMesurablesInput = {
    id?: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    norme: Prisma.NormeCreateNestedOneWithoutCriteresInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutCritereInput;
};
export type CritereUncheckedCreateWithoutElementsMesurablesInput = {
    id?: string;
    normeId: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutCritereInput;
};
export type CritereCreateOrConnectWithoutElementsMesurablesInput = {
    where: Prisma.CritereWhereUniqueInput;
    create: Prisma.XOR<Prisma.CritereCreateWithoutElementsMesurablesInput, Prisma.CritereUncheckedCreateWithoutElementsMesurablesInput>;
};
export type CritereUpsertWithoutElementsMesurablesInput = {
    update: Prisma.XOR<Prisma.CritereUpdateWithoutElementsMesurablesInput, Prisma.CritereUncheckedUpdateWithoutElementsMesurablesInput>;
    create: Prisma.XOR<Prisma.CritereCreateWithoutElementsMesurablesInput, Prisma.CritereUncheckedCreateWithoutElementsMesurablesInput>;
    where?: Prisma.CritereWhereInput;
};
export type CritereUpdateToOneWithWhereWithoutElementsMesurablesInput = {
    where?: Prisma.CritereWhereInput;
    data: Prisma.XOR<Prisma.CritereUpdateWithoutElementsMesurablesInput, Prisma.CritereUncheckedUpdateWithoutElementsMesurablesInput>;
};
export type CritereUpdateWithoutElementsMesurablesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    norme?: Prisma.NormeUpdateOneRequiredWithoutCriteresNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutCritereNestedInput;
};
export type CritereUncheckedUpdateWithoutElementsMesurablesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    normeId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutCritereNestedInput;
};
export type CritereCreateWithoutEvenementsIndesirablesInput = {
    id?: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    norme: Prisma.NormeCreateNestedOneWithoutCriteresInput;
    elementsMesurables?: Prisma.ElementMesurableCreateNestedManyWithoutCritereInput;
};
export type CritereUncheckedCreateWithoutEvenementsIndesirablesInput = {
    id?: string;
    normeId: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elementsMesurables?: Prisma.ElementMesurableUncheckedCreateNestedManyWithoutCritereInput;
};
export type CritereCreateOrConnectWithoutEvenementsIndesirablesInput = {
    where: Prisma.CritereWhereUniqueInput;
    create: Prisma.XOR<Prisma.CritereCreateWithoutEvenementsIndesirablesInput, Prisma.CritereUncheckedCreateWithoutEvenementsIndesirablesInput>;
};
export type CritereUpsertWithoutEvenementsIndesirablesInput = {
    update: Prisma.XOR<Prisma.CritereUpdateWithoutEvenementsIndesirablesInput, Prisma.CritereUncheckedUpdateWithoutEvenementsIndesirablesInput>;
    create: Prisma.XOR<Prisma.CritereCreateWithoutEvenementsIndesirablesInput, Prisma.CritereUncheckedCreateWithoutEvenementsIndesirablesInput>;
    where?: Prisma.CritereWhereInput;
};
export type CritereUpdateToOneWithWhereWithoutEvenementsIndesirablesInput = {
    where?: Prisma.CritereWhereInput;
    data: Prisma.XOR<Prisma.CritereUpdateWithoutEvenementsIndesirablesInput, Prisma.CritereUncheckedUpdateWithoutEvenementsIndesirablesInput>;
};
export type CritereUpdateWithoutEvenementsIndesirablesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    norme?: Prisma.NormeUpdateOneRequiredWithoutCriteresNestedInput;
    elementsMesurables?: Prisma.ElementMesurableUpdateManyWithoutCritereNestedInput;
};
export type CritereUncheckedUpdateWithoutEvenementsIndesirablesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    normeId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    elementsMesurables?: Prisma.ElementMesurableUncheckedUpdateManyWithoutCritereNestedInput;
};
export type CritereCreateManyNormeInput = {
    id?: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CritereUpdateWithoutNormeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    elementsMesurables?: Prisma.ElementMesurableUpdateManyWithoutCritereNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutCritereNestedInput;
};
export type CritereUncheckedUpdateWithoutNormeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    elementsMesurables?: Prisma.ElementMesurableUncheckedUpdateManyWithoutCritereNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutCritereNestedInput;
};
export type CritereUncheckedUpdateManyWithoutNormeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CritereCountOutputType = {
    elementsMesurables: number;
    evenementsIndesirables: number;
};
export type CritereCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    elementsMesurables?: boolean | CritereCountOutputTypeCountElementsMesurablesArgs;
    evenementsIndesirables?: boolean | CritereCountOutputTypeCountEvenementsIndesirablesArgs;
};
export type CritereCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CritereCountOutputTypeSelect<ExtArgs> | null;
};
export type CritereCountOutputTypeCountElementsMesurablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ElementMesurableWhereInput;
};
export type CritereCountOutputTypeCountEvenementsIndesirablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvenementIndesirableWhereInput;
};
export type CritereSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    normeId?: boolean;
    code?: boolean;
    libelle?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    norme?: boolean | Prisma.NormeDefaultArgs<ExtArgs>;
    elementsMesurables?: boolean | Prisma.Critere$elementsMesurablesArgs<ExtArgs>;
    evenementsIndesirables?: boolean | Prisma.Critere$evenementsIndesirablesArgs<ExtArgs>;
    _count?: boolean | Prisma.CritereCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["critere"]>;
export type CritereSelectScalar = {
    id?: boolean;
    normeId?: boolean;
    code?: boolean;
    libelle?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CritereOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "normeId" | "code" | "libelle" | "ordre" | "createdAt" | "updatedAt", ExtArgs["result"]["critere"]>;
export type CritereInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    norme?: boolean | Prisma.NormeDefaultArgs<ExtArgs>;
    elementsMesurables?: boolean | Prisma.Critere$elementsMesurablesArgs<ExtArgs>;
    evenementsIndesirables?: boolean | Prisma.Critere$evenementsIndesirablesArgs<ExtArgs>;
    _count?: boolean | Prisma.CritereCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $CriterePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Critere";
    objects: {
        norme: Prisma.$NormePayload<ExtArgs>;
        elementsMesurables: Prisma.$ElementMesurablePayload<ExtArgs>[];
        evenementsIndesirables: Prisma.$EvenementIndesirablePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        normeId: string;
        code: string;
        libelle: string;
        ordre: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["critere"]>;
    composites: {};
};
export type CritereGetPayload<S extends boolean | null | undefined | CritereDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CriterePayload, S>;
export type CritereCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CritereFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CritereCountAggregateInputType | true;
};
export interface CritereDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Critere'];
        meta: {
            name: 'Critere';
        };
    };
    findUnique<T extends CritereFindUniqueArgs>(args: Prisma.SelectSubset<T, CritereFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CritereClient<runtime.Types.Result.GetResult<Prisma.$CriterePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CritereFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CritereFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CritereClient<runtime.Types.Result.GetResult<Prisma.$CriterePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CritereFindFirstArgs>(args?: Prisma.SelectSubset<T, CritereFindFirstArgs<ExtArgs>>): Prisma.Prisma__CritereClient<runtime.Types.Result.GetResult<Prisma.$CriterePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CritereFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CritereFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CritereClient<runtime.Types.Result.GetResult<Prisma.$CriterePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CritereFindManyArgs>(args?: Prisma.SelectSubset<T, CritereFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CriterePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CritereCreateArgs>(args: Prisma.SelectSubset<T, CritereCreateArgs<ExtArgs>>): Prisma.Prisma__CritereClient<runtime.Types.Result.GetResult<Prisma.$CriterePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CritereCreateManyArgs>(args?: Prisma.SelectSubset<T, CritereCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends CritereDeleteArgs>(args: Prisma.SelectSubset<T, CritereDeleteArgs<ExtArgs>>): Prisma.Prisma__CritereClient<runtime.Types.Result.GetResult<Prisma.$CriterePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CritereUpdateArgs>(args: Prisma.SelectSubset<T, CritereUpdateArgs<ExtArgs>>): Prisma.Prisma__CritereClient<runtime.Types.Result.GetResult<Prisma.$CriterePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CritereDeleteManyArgs>(args?: Prisma.SelectSubset<T, CritereDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CritereUpdateManyArgs>(args: Prisma.SelectSubset<T, CritereUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends CritereUpsertArgs>(args: Prisma.SelectSubset<T, CritereUpsertArgs<ExtArgs>>): Prisma.Prisma__CritereClient<runtime.Types.Result.GetResult<Prisma.$CriterePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CritereCountArgs>(args?: Prisma.Subset<T, CritereCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CritereCountAggregateOutputType> : number>;
    aggregate<T extends CritereAggregateArgs>(args: Prisma.Subset<T, CritereAggregateArgs>): Prisma.PrismaPromise<GetCritereAggregateType<T>>;
    groupBy<T extends CritereGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CritereGroupByArgs['orderBy'];
    } : {
        orderBy?: CritereGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CritereGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCritereGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CritereFieldRefs;
}
export interface Prisma__CritereClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    norme<T extends Prisma.NormeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.NormeDefaultArgs<ExtArgs>>): Prisma.Prisma__NormeClient<runtime.Types.Result.GetResult<Prisma.$NormePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    elementsMesurables<T extends Prisma.Critere$elementsMesurablesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Critere$elementsMesurablesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ElementMesurablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    evenementsIndesirables<T extends Prisma.Critere$evenementsIndesirablesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Critere$evenementsIndesirablesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CritereFieldRefs {
    readonly id: Prisma.FieldRef<"Critere", 'String'>;
    readonly normeId: Prisma.FieldRef<"Critere", 'String'>;
    readonly code: Prisma.FieldRef<"Critere", 'String'>;
    readonly libelle: Prisma.FieldRef<"Critere", 'String'>;
    readonly ordre: Prisma.FieldRef<"Critere", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Critere", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Critere", 'DateTime'>;
}
export type CritereFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CritereSelect<ExtArgs> | null;
    omit?: Prisma.CritereOmit<ExtArgs> | null;
    include?: Prisma.CritereInclude<ExtArgs> | null;
    where: Prisma.CritereWhereUniqueInput;
};
export type CritereFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CritereSelect<ExtArgs> | null;
    omit?: Prisma.CritereOmit<ExtArgs> | null;
    include?: Prisma.CritereInclude<ExtArgs> | null;
    where: Prisma.CritereWhereUniqueInput;
};
export type CritereFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CritereSelect<ExtArgs> | null;
    omit?: Prisma.CritereOmit<ExtArgs> | null;
    include?: Prisma.CritereInclude<ExtArgs> | null;
    where?: Prisma.CritereWhereInput;
    orderBy?: Prisma.CritereOrderByWithRelationInput | Prisma.CritereOrderByWithRelationInput[];
    cursor?: Prisma.CritereWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CritereScalarFieldEnum | Prisma.CritereScalarFieldEnum[];
};
export type CritereFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CritereSelect<ExtArgs> | null;
    omit?: Prisma.CritereOmit<ExtArgs> | null;
    include?: Prisma.CritereInclude<ExtArgs> | null;
    where?: Prisma.CritereWhereInput;
    orderBy?: Prisma.CritereOrderByWithRelationInput | Prisma.CritereOrderByWithRelationInput[];
    cursor?: Prisma.CritereWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CritereScalarFieldEnum | Prisma.CritereScalarFieldEnum[];
};
export type CritereFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CritereSelect<ExtArgs> | null;
    omit?: Prisma.CritereOmit<ExtArgs> | null;
    include?: Prisma.CritereInclude<ExtArgs> | null;
    where?: Prisma.CritereWhereInput;
    orderBy?: Prisma.CritereOrderByWithRelationInput | Prisma.CritereOrderByWithRelationInput[];
    cursor?: Prisma.CritereWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CritereScalarFieldEnum | Prisma.CritereScalarFieldEnum[];
};
export type CritereCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CritereSelect<ExtArgs> | null;
    omit?: Prisma.CritereOmit<ExtArgs> | null;
    include?: Prisma.CritereInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CritereCreateInput, Prisma.CritereUncheckedCreateInput>;
};
export type CritereCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CritereCreateManyInput | Prisma.CritereCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CritereUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CritereSelect<ExtArgs> | null;
    omit?: Prisma.CritereOmit<ExtArgs> | null;
    include?: Prisma.CritereInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CritereUpdateInput, Prisma.CritereUncheckedUpdateInput>;
    where: Prisma.CritereWhereUniqueInput;
};
export type CritereUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CritereUpdateManyMutationInput, Prisma.CritereUncheckedUpdateManyInput>;
    where?: Prisma.CritereWhereInput;
    limit?: number;
};
export type CritereUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CritereSelect<ExtArgs> | null;
    omit?: Prisma.CritereOmit<ExtArgs> | null;
    include?: Prisma.CritereInclude<ExtArgs> | null;
    where: Prisma.CritereWhereUniqueInput;
    create: Prisma.XOR<Prisma.CritereCreateInput, Prisma.CritereUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CritereUpdateInput, Prisma.CritereUncheckedUpdateInput>;
};
export type CritereDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CritereSelect<ExtArgs> | null;
    omit?: Prisma.CritereOmit<ExtArgs> | null;
    include?: Prisma.CritereInclude<ExtArgs> | null;
    where: Prisma.CritereWhereUniqueInput;
};
export type CritereDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CritereWhereInput;
    limit?: number;
};
export type Critere$elementsMesurablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ElementMesurableSelect<ExtArgs> | null;
    omit?: Prisma.ElementMesurableOmit<ExtArgs> | null;
    include?: Prisma.ElementMesurableInclude<ExtArgs> | null;
    where?: Prisma.ElementMesurableWhereInput;
    orderBy?: Prisma.ElementMesurableOrderByWithRelationInput | Prisma.ElementMesurableOrderByWithRelationInput[];
    cursor?: Prisma.ElementMesurableWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ElementMesurableScalarFieldEnum | Prisma.ElementMesurableScalarFieldEnum[];
};
export type Critere$evenementsIndesirablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CritereDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CritereSelect<ExtArgs> | null;
    omit?: Prisma.CritereOmit<ExtArgs> | null;
    include?: Prisma.CritereInclude<ExtArgs> | null;
};
