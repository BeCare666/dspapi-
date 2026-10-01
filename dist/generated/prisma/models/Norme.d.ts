import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NormeModel = runtime.Types.Result.DefaultSelection<Prisma.$NormePayload>;
export type AggregateNorme = {
    _count: NormeCountAggregateOutputType | null;
    _avg: NormeAvgAggregateOutputType | null;
    _sum: NormeSumAggregateOutputType | null;
    _min: NormeMinAggregateOutputType | null;
    _max: NormeMaxAggregateOutputType | null;
};
export type NormeAvgAggregateOutputType = {
    ordre: number | null;
};
export type NormeSumAggregateOutputType = {
    ordre: number | null;
};
export type NormeMinAggregateOutputType = {
    id: string | null;
    domaineId: string | null;
    code: string | null;
    libelle: string | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type NormeMaxAggregateOutputType = {
    id: string | null;
    domaineId: string | null;
    code: string | null;
    libelle: string | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type NormeCountAggregateOutputType = {
    id: number;
    domaineId: number;
    code: number;
    libelle: number;
    ordre: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type NormeAvgAggregateInputType = {
    ordre?: true;
};
export type NormeSumAggregateInputType = {
    ordre?: true;
};
export type NormeMinAggregateInputType = {
    id?: true;
    domaineId?: true;
    code?: true;
    libelle?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type NormeMaxAggregateInputType = {
    id?: true;
    domaineId?: true;
    code?: true;
    libelle?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type NormeCountAggregateInputType = {
    id?: true;
    domaineId?: true;
    code?: true;
    libelle?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type NormeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NormeWhereInput;
    orderBy?: Prisma.NormeOrderByWithRelationInput | Prisma.NormeOrderByWithRelationInput[];
    cursor?: Prisma.NormeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NormeCountAggregateInputType;
    _avg?: NormeAvgAggregateInputType;
    _sum?: NormeSumAggregateInputType;
    _min?: NormeMinAggregateInputType;
    _max?: NormeMaxAggregateInputType;
};
export type GetNormeAggregateType<T extends NormeAggregateArgs> = {
    [P in keyof T & keyof AggregateNorme]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNorme[P]> : Prisma.GetScalarType<T[P], AggregateNorme[P]>;
};
export type NormeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NormeWhereInput;
    orderBy?: Prisma.NormeOrderByWithAggregationInput | Prisma.NormeOrderByWithAggregationInput[];
    by: Prisma.NormeScalarFieldEnum[] | Prisma.NormeScalarFieldEnum;
    having?: Prisma.NormeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NormeCountAggregateInputType | true;
    _avg?: NormeAvgAggregateInputType;
    _sum?: NormeSumAggregateInputType;
    _min?: NormeMinAggregateInputType;
    _max?: NormeMaxAggregateInputType;
};
export type NormeGroupByOutputType = {
    id: string;
    domaineId: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt: Date;
    updatedAt: Date;
    _count: NormeCountAggregateOutputType | null;
    _avg: NormeAvgAggregateOutputType | null;
    _sum: NormeSumAggregateOutputType | null;
    _min: NormeMinAggregateOutputType | null;
    _max: NormeMaxAggregateOutputType | null;
};
export type GetNormeGroupByPayload<T extends NormeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NormeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NormeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NormeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NormeGroupByOutputType[P]>;
}>>;
export type NormeWhereInput = {
    AND?: Prisma.NormeWhereInput | Prisma.NormeWhereInput[];
    OR?: Prisma.NormeWhereInput[];
    NOT?: Prisma.NormeWhereInput | Prisma.NormeWhereInput[];
    id?: Prisma.StringFilter<"Norme"> | string;
    domaineId?: Prisma.StringFilter<"Norme"> | string;
    code?: Prisma.StringFilter<"Norme"> | string;
    libelle?: Prisma.StringFilter<"Norme"> | string;
    ordre?: Prisma.IntFilter<"Norme"> | number;
    createdAt?: Prisma.DateTimeFilter<"Norme"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Norme"> | Date | string;
    domaine?: Prisma.XOR<Prisma.DomaineScalarRelationFilter, Prisma.DomaineWhereInput>;
    criteres?: Prisma.CritereListRelationFilter;
};
export type NormeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    domaineId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    domaine?: Prisma.DomaineOrderByWithRelationInput;
    criteres?: Prisma.CritereOrderByRelationAggregateInput;
    _relevance?: Prisma.NormeOrderByRelevanceInput;
};
export type NormeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.NormeWhereInput | Prisma.NormeWhereInput[];
    OR?: Prisma.NormeWhereInput[];
    NOT?: Prisma.NormeWhereInput | Prisma.NormeWhereInput[];
    domaineId?: Prisma.StringFilter<"Norme"> | string;
    code?: Prisma.StringFilter<"Norme"> | string;
    libelle?: Prisma.StringFilter<"Norme"> | string;
    ordre?: Prisma.IntFilter<"Norme"> | number;
    createdAt?: Prisma.DateTimeFilter<"Norme"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Norme"> | Date | string;
    domaine?: Prisma.XOR<Prisma.DomaineScalarRelationFilter, Prisma.DomaineWhereInput>;
    criteres?: Prisma.CritereListRelationFilter;
}, "id">;
export type NormeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    domaineId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.NormeCountOrderByAggregateInput;
    _avg?: Prisma.NormeAvgOrderByAggregateInput;
    _max?: Prisma.NormeMaxOrderByAggregateInput;
    _min?: Prisma.NormeMinOrderByAggregateInput;
    _sum?: Prisma.NormeSumOrderByAggregateInput;
};
export type NormeScalarWhereWithAggregatesInput = {
    AND?: Prisma.NormeScalarWhereWithAggregatesInput | Prisma.NormeScalarWhereWithAggregatesInput[];
    OR?: Prisma.NormeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NormeScalarWhereWithAggregatesInput | Prisma.NormeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Norme"> | string;
    domaineId?: Prisma.StringWithAggregatesFilter<"Norme"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Norme"> | string;
    libelle?: Prisma.StringWithAggregatesFilter<"Norme"> | string;
    ordre?: Prisma.IntWithAggregatesFilter<"Norme"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Norme"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Norme"> | Date | string;
};
export type NormeCreateInput = {
    id?: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    domaine: Prisma.DomaineCreateNestedOneWithoutNormesInput;
    criteres?: Prisma.CritereCreateNestedManyWithoutNormeInput;
};
export type NormeUncheckedCreateInput = {
    id?: string;
    domaineId: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    criteres?: Prisma.CritereUncheckedCreateNestedManyWithoutNormeInput;
};
export type NormeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    domaine?: Prisma.DomaineUpdateOneRequiredWithoutNormesNestedInput;
    criteres?: Prisma.CritereUpdateManyWithoutNormeNestedInput;
};
export type NormeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    domaineId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    criteres?: Prisma.CritereUncheckedUpdateManyWithoutNormeNestedInput;
};
export type NormeCreateManyInput = {
    id?: string;
    domaineId: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type NormeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NormeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    domaineId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NormeListRelationFilter = {
    every?: Prisma.NormeWhereInput;
    some?: Prisma.NormeWhereInput;
    none?: Prisma.NormeWhereInput;
};
export type NormeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NormeOrderByRelevanceInput = {
    fields: Prisma.NormeOrderByRelevanceFieldEnum | Prisma.NormeOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type NormeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    domaineId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type NormeAvgOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type NormeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    domaineId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type NormeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    domaineId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type NormeSumOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type NormeScalarRelationFilter = {
    is?: Prisma.NormeWhereInput;
    isNot?: Prisma.NormeWhereInput;
};
export type NormeCreateNestedManyWithoutDomaineInput = {
    create?: Prisma.XOR<Prisma.NormeCreateWithoutDomaineInput, Prisma.NormeUncheckedCreateWithoutDomaineInput> | Prisma.NormeCreateWithoutDomaineInput[] | Prisma.NormeUncheckedCreateWithoutDomaineInput[];
    connectOrCreate?: Prisma.NormeCreateOrConnectWithoutDomaineInput | Prisma.NormeCreateOrConnectWithoutDomaineInput[];
    createMany?: Prisma.NormeCreateManyDomaineInputEnvelope;
    connect?: Prisma.NormeWhereUniqueInput | Prisma.NormeWhereUniqueInput[];
};
export type NormeUncheckedCreateNestedManyWithoutDomaineInput = {
    create?: Prisma.XOR<Prisma.NormeCreateWithoutDomaineInput, Prisma.NormeUncheckedCreateWithoutDomaineInput> | Prisma.NormeCreateWithoutDomaineInput[] | Prisma.NormeUncheckedCreateWithoutDomaineInput[];
    connectOrCreate?: Prisma.NormeCreateOrConnectWithoutDomaineInput | Prisma.NormeCreateOrConnectWithoutDomaineInput[];
    createMany?: Prisma.NormeCreateManyDomaineInputEnvelope;
    connect?: Prisma.NormeWhereUniqueInput | Prisma.NormeWhereUniqueInput[];
};
export type NormeUpdateManyWithoutDomaineNestedInput = {
    create?: Prisma.XOR<Prisma.NormeCreateWithoutDomaineInput, Prisma.NormeUncheckedCreateWithoutDomaineInput> | Prisma.NormeCreateWithoutDomaineInput[] | Prisma.NormeUncheckedCreateWithoutDomaineInput[];
    connectOrCreate?: Prisma.NormeCreateOrConnectWithoutDomaineInput | Prisma.NormeCreateOrConnectWithoutDomaineInput[];
    upsert?: Prisma.NormeUpsertWithWhereUniqueWithoutDomaineInput | Prisma.NormeUpsertWithWhereUniqueWithoutDomaineInput[];
    createMany?: Prisma.NormeCreateManyDomaineInputEnvelope;
    set?: Prisma.NormeWhereUniqueInput | Prisma.NormeWhereUniqueInput[];
    disconnect?: Prisma.NormeWhereUniqueInput | Prisma.NormeWhereUniqueInput[];
    delete?: Prisma.NormeWhereUniqueInput | Prisma.NormeWhereUniqueInput[];
    connect?: Prisma.NormeWhereUniqueInput | Prisma.NormeWhereUniqueInput[];
    update?: Prisma.NormeUpdateWithWhereUniqueWithoutDomaineInput | Prisma.NormeUpdateWithWhereUniqueWithoutDomaineInput[];
    updateMany?: Prisma.NormeUpdateManyWithWhereWithoutDomaineInput | Prisma.NormeUpdateManyWithWhereWithoutDomaineInput[];
    deleteMany?: Prisma.NormeScalarWhereInput | Prisma.NormeScalarWhereInput[];
};
export type NormeUncheckedUpdateManyWithoutDomaineNestedInput = {
    create?: Prisma.XOR<Prisma.NormeCreateWithoutDomaineInput, Prisma.NormeUncheckedCreateWithoutDomaineInput> | Prisma.NormeCreateWithoutDomaineInput[] | Prisma.NormeUncheckedCreateWithoutDomaineInput[];
    connectOrCreate?: Prisma.NormeCreateOrConnectWithoutDomaineInput | Prisma.NormeCreateOrConnectWithoutDomaineInput[];
    upsert?: Prisma.NormeUpsertWithWhereUniqueWithoutDomaineInput | Prisma.NormeUpsertWithWhereUniqueWithoutDomaineInput[];
    createMany?: Prisma.NormeCreateManyDomaineInputEnvelope;
    set?: Prisma.NormeWhereUniqueInput | Prisma.NormeWhereUniqueInput[];
    disconnect?: Prisma.NormeWhereUniqueInput | Prisma.NormeWhereUniqueInput[];
    delete?: Prisma.NormeWhereUniqueInput | Prisma.NormeWhereUniqueInput[];
    connect?: Prisma.NormeWhereUniqueInput | Prisma.NormeWhereUniqueInput[];
    update?: Prisma.NormeUpdateWithWhereUniqueWithoutDomaineInput | Prisma.NormeUpdateWithWhereUniqueWithoutDomaineInput[];
    updateMany?: Prisma.NormeUpdateManyWithWhereWithoutDomaineInput | Prisma.NormeUpdateManyWithWhereWithoutDomaineInput[];
    deleteMany?: Prisma.NormeScalarWhereInput | Prisma.NormeScalarWhereInput[];
};
export type NormeCreateNestedOneWithoutCriteresInput = {
    create?: Prisma.XOR<Prisma.NormeCreateWithoutCriteresInput, Prisma.NormeUncheckedCreateWithoutCriteresInput>;
    connectOrCreate?: Prisma.NormeCreateOrConnectWithoutCriteresInput;
    connect?: Prisma.NormeWhereUniqueInput;
};
export type NormeUpdateOneRequiredWithoutCriteresNestedInput = {
    create?: Prisma.XOR<Prisma.NormeCreateWithoutCriteresInput, Prisma.NormeUncheckedCreateWithoutCriteresInput>;
    connectOrCreate?: Prisma.NormeCreateOrConnectWithoutCriteresInput;
    upsert?: Prisma.NormeUpsertWithoutCriteresInput;
    connect?: Prisma.NormeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NormeUpdateToOneWithWhereWithoutCriteresInput, Prisma.NormeUpdateWithoutCriteresInput>, Prisma.NormeUncheckedUpdateWithoutCriteresInput>;
};
export type NormeCreateWithoutDomaineInput = {
    id?: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    criteres?: Prisma.CritereCreateNestedManyWithoutNormeInput;
};
export type NormeUncheckedCreateWithoutDomaineInput = {
    id?: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    criteres?: Prisma.CritereUncheckedCreateNestedManyWithoutNormeInput;
};
export type NormeCreateOrConnectWithoutDomaineInput = {
    where: Prisma.NormeWhereUniqueInput;
    create: Prisma.XOR<Prisma.NormeCreateWithoutDomaineInput, Prisma.NormeUncheckedCreateWithoutDomaineInput>;
};
export type NormeCreateManyDomaineInputEnvelope = {
    data: Prisma.NormeCreateManyDomaineInput | Prisma.NormeCreateManyDomaineInput[];
    skipDuplicates?: boolean;
};
export type NormeUpsertWithWhereUniqueWithoutDomaineInput = {
    where: Prisma.NormeWhereUniqueInput;
    update: Prisma.XOR<Prisma.NormeUpdateWithoutDomaineInput, Prisma.NormeUncheckedUpdateWithoutDomaineInput>;
    create: Prisma.XOR<Prisma.NormeCreateWithoutDomaineInput, Prisma.NormeUncheckedCreateWithoutDomaineInput>;
};
export type NormeUpdateWithWhereUniqueWithoutDomaineInput = {
    where: Prisma.NormeWhereUniqueInput;
    data: Prisma.XOR<Prisma.NormeUpdateWithoutDomaineInput, Prisma.NormeUncheckedUpdateWithoutDomaineInput>;
};
export type NormeUpdateManyWithWhereWithoutDomaineInput = {
    where: Prisma.NormeScalarWhereInput;
    data: Prisma.XOR<Prisma.NormeUpdateManyMutationInput, Prisma.NormeUncheckedUpdateManyWithoutDomaineInput>;
};
export type NormeScalarWhereInput = {
    AND?: Prisma.NormeScalarWhereInput | Prisma.NormeScalarWhereInput[];
    OR?: Prisma.NormeScalarWhereInput[];
    NOT?: Prisma.NormeScalarWhereInput | Prisma.NormeScalarWhereInput[];
    id?: Prisma.StringFilter<"Norme"> | string;
    domaineId?: Prisma.StringFilter<"Norme"> | string;
    code?: Prisma.StringFilter<"Norme"> | string;
    libelle?: Prisma.StringFilter<"Norme"> | string;
    ordre?: Prisma.IntFilter<"Norme"> | number;
    createdAt?: Prisma.DateTimeFilter<"Norme"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Norme"> | Date | string;
};
export type NormeCreateWithoutCriteresInput = {
    id?: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    domaine: Prisma.DomaineCreateNestedOneWithoutNormesInput;
};
export type NormeUncheckedCreateWithoutCriteresInput = {
    id?: string;
    domaineId: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type NormeCreateOrConnectWithoutCriteresInput = {
    where: Prisma.NormeWhereUniqueInput;
    create: Prisma.XOR<Prisma.NormeCreateWithoutCriteresInput, Prisma.NormeUncheckedCreateWithoutCriteresInput>;
};
export type NormeUpsertWithoutCriteresInput = {
    update: Prisma.XOR<Prisma.NormeUpdateWithoutCriteresInput, Prisma.NormeUncheckedUpdateWithoutCriteresInput>;
    create: Prisma.XOR<Prisma.NormeCreateWithoutCriteresInput, Prisma.NormeUncheckedCreateWithoutCriteresInput>;
    where?: Prisma.NormeWhereInput;
};
export type NormeUpdateToOneWithWhereWithoutCriteresInput = {
    where?: Prisma.NormeWhereInput;
    data: Prisma.XOR<Prisma.NormeUpdateWithoutCriteresInput, Prisma.NormeUncheckedUpdateWithoutCriteresInput>;
};
export type NormeUpdateWithoutCriteresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    domaine?: Prisma.DomaineUpdateOneRequiredWithoutNormesNestedInput;
};
export type NormeUncheckedUpdateWithoutCriteresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    domaineId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NormeCreateManyDomaineInput = {
    id?: string;
    code: string;
    libelle: string;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type NormeUpdateWithoutDomaineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    criteres?: Prisma.CritereUpdateManyWithoutNormeNestedInput;
};
export type NormeUncheckedUpdateWithoutDomaineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    criteres?: Prisma.CritereUncheckedUpdateManyWithoutNormeNestedInput;
};
export type NormeUncheckedUpdateManyWithoutDomaineInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NormeCountOutputType = {
    criteres: number;
};
export type NormeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    criteres?: boolean | NormeCountOutputTypeCountCriteresArgs;
};
export type NormeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NormeCountOutputTypeSelect<ExtArgs> | null;
};
export type NormeCountOutputTypeCountCriteresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CritereWhereInput;
};
export type NormeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    domaineId?: boolean;
    code?: boolean;
    libelle?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    domaine?: boolean | Prisma.DomaineDefaultArgs<ExtArgs>;
    criteres?: boolean | Prisma.Norme$criteresArgs<ExtArgs>;
    _count?: boolean | Prisma.NormeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["norme"]>;
export type NormeSelectScalar = {
    id?: boolean;
    domaineId?: boolean;
    code?: boolean;
    libelle?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type NormeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "domaineId" | "code" | "libelle" | "ordre" | "createdAt" | "updatedAt", ExtArgs["result"]["norme"]>;
export type NormeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    domaine?: boolean | Prisma.DomaineDefaultArgs<ExtArgs>;
    criteres?: boolean | Prisma.Norme$criteresArgs<ExtArgs>;
    _count?: boolean | Prisma.NormeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $NormePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Norme";
    objects: {
        domaine: Prisma.$DomainePayload<ExtArgs>;
        criteres: Prisma.$CriterePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        domaineId: string;
        code: string;
        libelle: string;
        ordre: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["norme"]>;
    composites: {};
};
export type NormeGetPayload<S extends boolean | null | undefined | NormeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NormePayload, S>;
export type NormeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NormeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NormeCountAggregateInputType | true;
};
export interface NormeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Norme'];
        meta: {
            name: 'Norme';
        };
    };
    findUnique<T extends NormeFindUniqueArgs>(args: Prisma.SelectSubset<T, NormeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NormeClient<runtime.Types.Result.GetResult<Prisma.$NormePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NormeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NormeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NormeClient<runtime.Types.Result.GetResult<Prisma.$NormePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NormeFindFirstArgs>(args?: Prisma.SelectSubset<T, NormeFindFirstArgs<ExtArgs>>): Prisma.Prisma__NormeClient<runtime.Types.Result.GetResult<Prisma.$NormePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NormeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NormeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NormeClient<runtime.Types.Result.GetResult<Prisma.$NormePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NormeFindManyArgs>(args?: Prisma.SelectSubset<T, NormeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NormePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NormeCreateArgs>(args: Prisma.SelectSubset<T, NormeCreateArgs<ExtArgs>>): Prisma.Prisma__NormeClient<runtime.Types.Result.GetResult<Prisma.$NormePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NormeCreateManyArgs>(args?: Prisma.SelectSubset<T, NormeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends NormeDeleteArgs>(args: Prisma.SelectSubset<T, NormeDeleteArgs<ExtArgs>>): Prisma.Prisma__NormeClient<runtime.Types.Result.GetResult<Prisma.$NormePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NormeUpdateArgs>(args: Prisma.SelectSubset<T, NormeUpdateArgs<ExtArgs>>): Prisma.Prisma__NormeClient<runtime.Types.Result.GetResult<Prisma.$NormePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NormeDeleteManyArgs>(args?: Prisma.SelectSubset<T, NormeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NormeUpdateManyArgs>(args: Prisma.SelectSubset<T, NormeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends NormeUpsertArgs>(args: Prisma.SelectSubset<T, NormeUpsertArgs<ExtArgs>>): Prisma.Prisma__NormeClient<runtime.Types.Result.GetResult<Prisma.$NormePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NormeCountArgs>(args?: Prisma.Subset<T, NormeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NormeCountAggregateOutputType> : number>;
    aggregate<T extends NormeAggregateArgs>(args: Prisma.Subset<T, NormeAggregateArgs>): Prisma.PrismaPromise<GetNormeAggregateType<T>>;
    groupBy<T extends NormeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NormeGroupByArgs['orderBy'];
    } : {
        orderBy?: NormeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NormeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNormeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NormeFieldRefs;
}
export interface Prisma__NormeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    domaine<T extends Prisma.DomaineDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DomaineDefaultArgs<ExtArgs>>): Prisma.Prisma__DomaineClient<runtime.Types.Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    criteres<T extends Prisma.Norme$criteresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Norme$criteresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CriterePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NormeFieldRefs {
    readonly id: Prisma.FieldRef<"Norme", 'String'>;
    readonly domaineId: Prisma.FieldRef<"Norme", 'String'>;
    readonly code: Prisma.FieldRef<"Norme", 'String'>;
    readonly libelle: Prisma.FieldRef<"Norme", 'String'>;
    readonly ordre: Prisma.FieldRef<"Norme", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Norme", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Norme", 'DateTime'>;
}
export type NormeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NormeSelect<ExtArgs> | null;
    omit?: Prisma.NormeOmit<ExtArgs> | null;
    include?: Prisma.NormeInclude<ExtArgs> | null;
    where: Prisma.NormeWhereUniqueInput;
};
export type NormeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NormeSelect<ExtArgs> | null;
    omit?: Prisma.NormeOmit<ExtArgs> | null;
    include?: Prisma.NormeInclude<ExtArgs> | null;
    where: Prisma.NormeWhereUniqueInput;
};
export type NormeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NormeSelect<ExtArgs> | null;
    omit?: Prisma.NormeOmit<ExtArgs> | null;
    include?: Prisma.NormeInclude<ExtArgs> | null;
    where?: Prisma.NormeWhereInput;
    orderBy?: Prisma.NormeOrderByWithRelationInput | Prisma.NormeOrderByWithRelationInput[];
    cursor?: Prisma.NormeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NormeScalarFieldEnum | Prisma.NormeScalarFieldEnum[];
};
export type NormeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NormeSelect<ExtArgs> | null;
    omit?: Prisma.NormeOmit<ExtArgs> | null;
    include?: Prisma.NormeInclude<ExtArgs> | null;
    where?: Prisma.NormeWhereInput;
    orderBy?: Prisma.NormeOrderByWithRelationInput | Prisma.NormeOrderByWithRelationInput[];
    cursor?: Prisma.NormeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NormeScalarFieldEnum | Prisma.NormeScalarFieldEnum[];
};
export type NormeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NormeSelect<ExtArgs> | null;
    omit?: Prisma.NormeOmit<ExtArgs> | null;
    include?: Prisma.NormeInclude<ExtArgs> | null;
    where?: Prisma.NormeWhereInput;
    orderBy?: Prisma.NormeOrderByWithRelationInput | Prisma.NormeOrderByWithRelationInput[];
    cursor?: Prisma.NormeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NormeScalarFieldEnum | Prisma.NormeScalarFieldEnum[];
};
export type NormeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NormeSelect<ExtArgs> | null;
    omit?: Prisma.NormeOmit<ExtArgs> | null;
    include?: Prisma.NormeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NormeCreateInput, Prisma.NormeUncheckedCreateInput>;
};
export type NormeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NormeCreateManyInput | Prisma.NormeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NormeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NormeSelect<ExtArgs> | null;
    omit?: Prisma.NormeOmit<ExtArgs> | null;
    include?: Prisma.NormeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NormeUpdateInput, Prisma.NormeUncheckedUpdateInput>;
    where: Prisma.NormeWhereUniqueInput;
};
export type NormeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NormeUpdateManyMutationInput, Prisma.NormeUncheckedUpdateManyInput>;
    where?: Prisma.NormeWhereInput;
    limit?: number;
};
export type NormeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NormeSelect<ExtArgs> | null;
    omit?: Prisma.NormeOmit<ExtArgs> | null;
    include?: Prisma.NormeInclude<ExtArgs> | null;
    where: Prisma.NormeWhereUniqueInput;
    create: Prisma.XOR<Prisma.NormeCreateInput, Prisma.NormeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NormeUpdateInput, Prisma.NormeUncheckedUpdateInput>;
};
export type NormeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NormeSelect<ExtArgs> | null;
    omit?: Prisma.NormeOmit<ExtArgs> | null;
    include?: Prisma.NormeInclude<ExtArgs> | null;
    where: Prisma.NormeWhereUniqueInput;
};
export type NormeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NormeWhereInput;
    limit?: number;
};
export type Norme$criteresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NormeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NormeSelect<ExtArgs> | null;
    omit?: Prisma.NormeOmit<ExtArgs> | null;
    include?: Prisma.NormeInclude<ExtArgs> | null;
};
