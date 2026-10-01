import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InterventionModel = runtime.Types.Result.DefaultSelection<Prisma.$InterventionPayload>;
export type AggregateIntervention = {
    _count: InterventionCountAggregateOutputType | null;
    _min: InterventionMinAggregateOutputType | null;
    _max: InterventionMaxAggregateOutputType | null;
};
export type InterventionMinAggregateOutputType = {
    id: string | null;
    alerteId: string | null;
    utilisateurId: string | null;
    note: string | null;
    createdAt: Date | null;
};
export type InterventionMaxAggregateOutputType = {
    id: string | null;
    alerteId: string | null;
    utilisateurId: string | null;
    note: string | null;
    createdAt: Date | null;
};
export type InterventionCountAggregateOutputType = {
    id: number;
    alerteId: number;
    utilisateurId: number;
    note: number;
    createdAt: number;
    _all: number;
};
export type InterventionMinAggregateInputType = {
    id?: true;
    alerteId?: true;
    utilisateurId?: true;
    note?: true;
    createdAt?: true;
};
export type InterventionMaxAggregateInputType = {
    id?: true;
    alerteId?: true;
    utilisateurId?: true;
    note?: true;
    createdAt?: true;
};
export type InterventionCountAggregateInputType = {
    id?: true;
    alerteId?: true;
    utilisateurId?: true;
    note?: true;
    createdAt?: true;
    _all?: true;
};
export type InterventionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterventionWhereInput;
    orderBy?: Prisma.InterventionOrderByWithRelationInput | Prisma.InterventionOrderByWithRelationInput[];
    cursor?: Prisma.InterventionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InterventionCountAggregateInputType;
    _min?: InterventionMinAggregateInputType;
    _max?: InterventionMaxAggregateInputType;
};
export type GetInterventionAggregateType<T extends InterventionAggregateArgs> = {
    [P in keyof T & keyof AggregateIntervention]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIntervention[P]> : Prisma.GetScalarType<T[P], AggregateIntervention[P]>;
};
export type InterventionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterventionWhereInput;
    orderBy?: Prisma.InterventionOrderByWithAggregationInput | Prisma.InterventionOrderByWithAggregationInput[];
    by: Prisma.InterventionScalarFieldEnum[] | Prisma.InterventionScalarFieldEnum;
    having?: Prisma.InterventionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InterventionCountAggregateInputType | true;
    _min?: InterventionMinAggregateInputType;
    _max?: InterventionMaxAggregateInputType;
};
export type InterventionGroupByOutputType = {
    id: string;
    alerteId: string;
    utilisateurId: string;
    note: string;
    createdAt: Date;
    _count: InterventionCountAggregateOutputType | null;
    _min: InterventionMinAggregateOutputType | null;
    _max: InterventionMaxAggregateOutputType | null;
};
export type GetInterventionGroupByPayload<T extends InterventionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InterventionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InterventionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InterventionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InterventionGroupByOutputType[P]>;
}>>;
export type InterventionWhereInput = {
    AND?: Prisma.InterventionWhereInput | Prisma.InterventionWhereInput[];
    OR?: Prisma.InterventionWhereInput[];
    NOT?: Prisma.InterventionWhereInput | Prisma.InterventionWhereInput[];
    id?: Prisma.StringFilter<"Intervention"> | string;
    alerteId?: Prisma.StringFilter<"Intervention"> | string;
    utilisateurId?: Prisma.StringFilter<"Intervention"> | string;
    note?: Prisma.StringFilter<"Intervention"> | string;
    createdAt?: Prisma.DateTimeFilter<"Intervention"> | Date | string;
    alerte?: Prisma.XOR<Prisma.AlerteScalarRelationFilter, Prisma.AlerteWhereInput>;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
};
export type InterventionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    alerteId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    alerte?: Prisma.AlerteOrderByWithRelationInput;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
    _relevance?: Prisma.InterventionOrderByRelevanceInput;
};
export type InterventionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InterventionWhereInput | Prisma.InterventionWhereInput[];
    OR?: Prisma.InterventionWhereInput[];
    NOT?: Prisma.InterventionWhereInput | Prisma.InterventionWhereInput[];
    alerteId?: Prisma.StringFilter<"Intervention"> | string;
    utilisateurId?: Prisma.StringFilter<"Intervention"> | string;
    note?: Prisma.StringFilter<"Intervention"> | string;
    createdAt?: Prisma.DateTimeFilter<"Intervention"> | Date | string;
    alerte?: Prisma.XOR<Prisma.AlerteScalarRelationFilter, Prisma.AlerteWhereInput>;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
}, "id">;
export type InterventionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    alerteId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InterventionCountOrderByAggregateInput;
    _max?: Prisma.InterventionMaxOrderByAggregateInput;
    _min?: Prisma.InterventionMinOrderByAggregateInput;
};
export type InterventionScalarWhereWithAggregatesInput = {
    AND?: Prisma.InterventionScalarWhereWithAggregatesInput | Prisma.InterventionScalarWhereWithAggregatesInput[];
    OR?: Prisma.InterventionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InterventionScalarWhereWithAggregatesInput | Prisma.InterventionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Intervention"> | string;
    alerteId?: Prisma.StringWithAggregatesFilter<"Intervention"> | string;
    utilisateurId?: Prisma.StringWithAggregatesFilter<"Intervention"> | string;
    note?: Prisma.StringWithAggregatesFilter<"Intervention"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Intervention"> | Date | string;
};
export type InterventionCreateInput = {
    id?: string;
    note: string;
    createdAt?: Date | string;
    alerte: Prisma.AlerteCreateNestedOneWithoutInterventionsInput;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutInterventionsInput;
};
export type InterventionUncheckedCreateInput = {
    id?: string;
    alerteId: string;
    utilisateurId: string;
    note: string;
    createdAt?: Date | string;
};
export type InterventionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alerte?: Prisma.AlerteUpdateOneRequiredWithoutInterventionsNestedInput;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutInterventionsNestedInput;
};
export type InterventionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alerteId?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterventionCreateManyInput = {
    id?: string;
    alerteId: string;
    utilisateurId: string;
    note: string;
    createdAt?: Date | string;
};
export type InterventionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterventionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alerteId?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterventionListRelationFilter = {
    every?: Prisma.InterventionWhereInput;
    some?: Prisma.InterventionWhereInput;
    none?: Prisma.InterventionWhereInput;
};
export type InterventionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InterventionOrderByRelevanceInput = {
    fields: Prisma.InterventionOrderByRelevanceFieldEnum | Prisma.InterventionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type InterventionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alerteId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InterventionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alerteId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InterventionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alerteId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InterventionCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.InterventionCreateWithoutUtilisateurInput, Prisma.InterventionUncheckedCreateWithoutUtilisateurInput> | Prisma.InterventionCreateWithoutUtilisateurInput[] | Prisma.InterventionUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.InterventionCreateOrConnectWithoutUtilisateurInput | Prisma.InterventionCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.InterventionCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
};
export type InterventionUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.InterventionCreateWithoutUtilisateurInput, Prisma.InterventionUncheckedCreateWithoutUtilisateurInput> | Prisma.InterventionCreateWithoutUtilisateurInput[] | Prisma.InterventionUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.InterventionCreateOrConnectWithoutUtilisateurInput | Prisma.InterventionCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.InterventionCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
};
export type InterventionUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.InterventionCreateWithoutUtilisateurInput, Prisma.InterventionUncheckedCreateWithoutUtilisateurInput> | Prisma.InterventionCreateWithoutUtilisateurInput[] | Prisma.InterventionUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.InterventionCreateOrConnectWithoutUtilisateurInput | Prisma.InterventionCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.InterventionUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.InterventionUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.InterventionCreateManyUtilisateurInputEnvelope;
    set?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    disconnect?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    delete?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    connect?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    update?: Prisma.InterventionUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.InterventionUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.InterventionUpdateManyWithWhereWithoutUtilisateurInput | Prisma.InterventionUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.InterventionScalarWhereInput | Prisma.InterventionScalarWhereInput[];
};
export type InterventionUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.InterventionCreateWithoutUtilisateurInput, Prisma.InterventionUncheckedCreateWithoutUtilisateurInput> | Prisma.InterventionCreateWithoutUtilisateurInput[] | Prisma.InterventionUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.InterventionCreateOrConnectWithoutUtilisateurInput | Prisma.InterventionCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.InterventionUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.InterventionUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.InterventionCreateManyUtilisateurInputEnvelope;
    set?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    disconnect?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    delete?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    connect?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    update?: Prisma.InterventionUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.InterventionUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.InterventionUpdateManyWithWhereWithoutUtilisateurInput | Prisma.InterventionUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.InterventionScalarWhereInput | Prisma.InterventionScalarWhereInput[];
};
export type InterventionCreateNestedManyWithoutAlerteInput = {
    create?: Prisma.XOR<Prisma.InterventionCreateWithoutAlerteInput, Prisma.InterventionUncheckedCreateWithoutAlerteInput> | Prisma.InterventionCreateWithoutAlerteInput[] | Prisma.InterventionUncheckedCreateWithoutAlerteInput[];
    connectOrCreate?: Prisma.InterventionCreateOrConnectWithoutAlerteInput | Prisma.InterventionCreateOrConnectWithoutAlerteInput[];
    createMany?: Prisma.InterventionCreateManyAlerteInputEnvelope;
    connect?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
};
export type InterventionUncheckedCreateNestedManyWithoutAlerteInput = {
    create?: Prisma.XOR<Prisma.InterventionCreateWithoutAlerteInput, Prisma.InterventionUncheckedCreateWithoutAlerteInput> | Prisma.InterventionCreateWithoutAlerteInput[] | Prisma.InterventionUncheckedCreateWithoutAlerteInput[];
    connectOrCreate?: Prisma.InterventionCreateOrConnectWithoutAlerteInput | Prisma.InterventionCreateOrConnectWithoutAlerteInput[];
    createMany?: Prisma.InterventionCreateManyAlerteInputEnvelope;
    connect?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
};
export type InterventionUpdateManyWithoutAlerteNestedInput = {
    create?: Prisma.XOR<Prisma.InterventionCreateWithoutAlerteInput, Prisma.InterventionUncheckedCreateWithoutAlerteInput> | Prisma.InterventionCreateWithoutAlerteInput[] | Prisma.InterventionUncheckedCreateWithoutAlerteInput[];
    connectOrCreate?: Prisma.InterventionCreateOrConnectWithoutAlerteInput | Prisma.InterventionCreateOrConnectWithoutAlerteInput[];
    upsert?: Prisma.InterventionUpsertWithWhereUniqueWithoutAlerteInput | Prisma.InterventionUpsertWithWhereUniqueWithoutAlerteInput[];
    createMany?: Prisma.InterventionCreateManyAlerteInputEnvelope;
    set?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    disconnect?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    delete?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    connect?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    update?: Prisma.InterventionUpdateWithWhereUniqueWithoutAlerteInput | Prisma.InterventionUpdateWithWhereUniqueWithoutAlerteInput[];
    updateMany?: Prisma.InterventionUpdateManyWithWhereWithoutAlerteInput | Prisma.InterventionUpdateManyWithWhereWithoutAlerteInput[];
    deleteMany?: Prisma.InterventionScalarWhereInput | Prisma.InterventionScalarWhereInput[];
};
export type InterventionUncheckedUpdateManyWithoutAlerteNestedInput = {
    create?: Prisma.XOR<Prisma.InterventionCreateWithoutAlerteInput, Prisma.InterventionUncheckedCreateWithoutAlerteInput> | Prisma.InterventionCreateWithoutAlerteInput[] | Prisma.InterventionUncheckedCreateWithoutAlerteInput[];
    connectOrCreate?: Prisma.InterventionCreateOrConnectWithoutAlerteInput | Prisma.InterventionCreateOrConnectWithoutAlerteInput[];
    upsert?: Prisma.InterventionUpsertWithWhereUniqueWithoutAlerteInput | Prisma.InterventionUpsertWithWhereUniqueWithoutAlerteInput[];
    createMany?: Prisma.InterventionCreateManyAlerteInputEnvelope;
    set?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    disconnect?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    delete?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    connect?: Prisma.InterventionWhereUniqueInput | Prisma.InterventionWhereUniqueInput[];
    update?: Prisma.InterventionUpdateWithWhereUniqueWithoutAlerteInput | Prisma.InterventionUpdateWithWhereUniqueWithoutAlerteInput[];
    updateMany?: Prisma.InterventionUpdateManyWithWhereWithoutAlerteInput | Prisma.InterventionUpdateManyWithWhereWithoutAlerteInput[];
    deleteMany?: Prisma.InterventionScalarWhereInput | Prisma.InterventionScalarWhereInput[];
};
export type InterventionCreateWithoutUtilisateurInput = {
    id?: string;
    note: string;
    createdAt?: Date | string;
    alerte: Prisma.AlerteCreateNestedOneWithoutInterventionsInput;
};
export type InterventionUncheckedCreateWithoutUtilisateurInput = {
    id?: string;
    alerteId: string;
    note: string;
    createdAt?: Date | string;
};
export type InterventionCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.InterventionWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterventionCreateWithoutUtilisateurInput, Prisma.InterventionUncheckedCreateWithoutUtilisateurInput>;
};
export type InterventionCreateManyUtilisateurInputEnvelope = {
    data: Prisma.InterventionCreateManyUtilisateurInput | Prisma.InterventionCreateManyUtilisateurInput[];
    skipDuplicates?: boolean;
};
export type InterventionUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.InterventionWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterventionUpdateWithoutUtilisateurInput, Prisma.InterventionUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.InterventionCreateWithoutUtilisateurInput, Prisma.InterventionUncheckedCreateWithoutUtilisateurInput>;
};
export type InterventionUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.InterventionWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterventionUpdateWithoutUtilisateurInput, Prisma.InterventionUncheckedUpdateWithoutUtilisateurInput>;
};
export type InterventionUpdateManyWithWhereWithoutUtilisateurInput = {
    where: Prisma.InterventionScalarWhereInput;
    data: Prisma.XOR<Prisma.InterventionUpdateManyMutationInput, Prisma.InterventionUncheckedUpdateManyWithoutUtilisateurInput>;
};
export type InterventionScalarWhereInput = {
    AND?: Prisma.InterventionScalarWhereInput | Prisma.InterventionScalarWhereInput[];
    OR?: Prisma.InterventionScalarWhereInput[];
    NOT?: Prisma.InterventionScalarWhereInput | Prisma.InterventionScalarWhereInput[];
    id?: Prisma.StringFilter<"Intervention"> | string;
    alerteId?: Prisma.StringFilter<"Intervention"> | string;
    utilisateurId?: Prisma.StringFilter<"Intervention"> | string;
    note?: Prisma.StringFilter<"Intervention"> | string;
    createdAt?: Prisma.DateTimeFilter<"Intervention"> | Date | string;
};
export type InterventionCreateWithoutAlerteInput = {
    id?: string;
    note: string;
    createdAt?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutInterventionsInput;
};
export type InterventionUncheckedCreateWithoutAlerteInput = {
    id?: string;
    utilisateurId: string;
    note: string;
    createdAt?: Date | string;
};
export type InterventionCreateOrConnectWithoutAlerteInput = {
    where: Prisma.InterventionWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterventionCreateWithoutAlerteInput, Prisma.InterventionUncheckedCreateWithoutAlerteInput>;
};
export type InterventionCreateManyAlerteInputEnvelope = {
    data: Prisma.InterventionCreateManyAlerteInput | Prisma.InterventionCreateManyAlerteInput[];
    skipDuplicates?: boolean;
};
export type InterventionUpsertWithWhereUniqueWithoutAlerteInput = {
    where: Prisma.InterventionWhereUniqueInput;
    update: Prisma.XOR<Prisma.InterventionUpdateWithoutAlerteInput, Prisma.InterventionUncheckedUpdateWithoutAlerteInput>;
    create: Prisma.XOR<Prisma.InterventionCreateWithoutAlerteInput, Prisma.InterventionUncheckedCreateWithoutAlerteInput>;
};
export type InterventionUpdateWithWhereUniqueWithoutAlerteInput = {
    where: Prisma.InterventionWhereUniqueInput;
    data: Prisma.XOR<Prisma.InterventionUpdateWithoutAlerteInput, Prisma.InterventionUncheckedUpdateWithoutAlerteInput>;
};
export type InterventionUpdateManyWithWhereWithoutAlerteInput = {
    where: Prisma.InterventionScalarWhereInput;
    data: Prisma.XOR<Prisma.InterventionUpdateManyMutationInput, Prisma.InterventionUncheckedUpdateManyWithoutAlerteInput>;
};
export type InterventionCreateManyUtilisateurInput = {
    id?: string;
    alerteId: string;
    note: string;
    createdAt?: Date | string;
};
export type InterventionUpdateWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alerte?: Prisma.AlerteUpdateOneRequiredWithoutInterventionsNestedInput;
};
export type InterventionUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alerteId?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterventionUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alerteId?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterventionCreateManyAlerteInput = {
    id?: string;
    utilisateurId: string;
    note: string;
    createdAt?: Date | string;
};
export type InterventionUpdateWithoutAlerteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutInterventionsNestedInput;
};
export type InterventionUncheckedUpdateWithoutAlerteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterventionUncheckedUpdateManyWithoutAlerteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    note?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InterventionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alerteId?: boolean;
    utilisateurId?: boolean;
    note?: boolean;
    createdAt?: boolean;
    alerte?: boolean | Prisma.AlerteDefaultArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["intervention"]>;
export type InterventionSelectScalar = {
    id?: boolean;
    alerteId?: boolean;
    utilisateurId?: boolean;
    note?: boolean;
    createdAt?: boolean;
};
export type InterventionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "alerteId" | "utilisateurId" | "note" | "createdAt", ExtArgs["result"]["intervention"]>;
export type InterventionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alerte?: boolean | Prisma.AlerteDefaultArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type $InterventionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Intervention";
    objects: {
        alerte: Prisma.$AlertePayload<ExtArgs>;
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        alerteId: string;
        utilisateurId: string;
        note: string;
        createdAt: Date;
    }, ExtArgs["result"]["intervention"]>;
    composites: {};
};
export type InterventionGetPayload<S extends boolean | null | undefined | InterventionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InterventionPayload, S>;
export type InterventionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InterventionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InterventionCountAggregateInputType | true;
};
export interface InterventionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Intervention'];
        meta: {
            name: 'Intervention';
        };
    };
    findUnique<T extends InterventionFindUniqueArgs>(args: Prisma.SelectSubset<T, InterventionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InterventionClient<runtime.Types.Result.GetResult<Prisma.$InterventionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InterventionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InterventionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterventionClient<runtime.Types.Result.GetResult<Prisma.$InterventionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InterventionFindFirstArgs>(args?: Prisma.SelectSubset<T, InterventionFindFirstArgs<ExtArgs>>): Prisma.Prisma__InterventionClient<runtime.Types.Result.GetResult<Prisma.$InterventionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InterventionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InterventionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InterventionClient<runtime.Types.Result.GetResult<Prisma.$InterventionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InterventionFindManyArgs>(args?: Prisma.SelectSubset<T, InterventionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterventionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InterventionCreateArgs>(args: Prisma.SelectSubset<T, InterventionCreateArgs<ExtArgs>>): Prisma.Prisma__InterventionClient<runtime.Types.Result.GetResult<Prisma.$InterventionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InterventionCreateManyArgs>(args?: Prisma.SelectSubset<T, InterventionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends InterventionDeleteArgs>(args: Prisma.SelectSubset<T, InterventionDeleteArgs<ExtArgs>>): Prisma.Prisma__InterventionClient<runtime.Types.Result.GetResult<Prisma.$InterventionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InterventionUpdateArgs>(args: Prisma.SelectSubset<T, InterventionUpdateArgs<ExtArgs>>): Prisma.Prisma__InterventionClient<runtime.Types.Result.GetResult<Prisma.$InterventionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InterventionDeleteManyArgs>(args?: Prisma.SelectSubset<T, InterventionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InterventionUpdateManyArgs>(args: Prisma.SelectSubset<T, InterventionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends InterventionUpsertArgs>(args: Prisma.SelectSubset<T, InterventionUpsertArgs<ExtArgs>>): Prisma.Prisma__InterventionClient<runtime.Types.Result.GetResult<Prisma.$InterventionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InterventionCountArgs>(args?: Prisma.Subset<T, InterventionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InterventionCountAggregateOutputType> : number>;
    aggregate<T extends InterventionAggregateArgs>(args: Prisma.Subset<T, InterventionAggregateArgs>): Prisma.PrismaPromise<GetInterventionAggregateType<T>>;
    groupBy<T extends InterventionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InterventionGroupByArgs['orderBy'];
    } : {
        orderBy?: InterventionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InterventionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterventionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InterventionFieldRefs;
}
export interface Prisma__InterventionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    alerte<T extends Prisma.AlerteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AlerteDefaultArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InterventionFieldRefs {
    readonly id: Prisma.FieldRef<"Intervention", 'String'>;
    readonly alerteId: Prisma.FieldRef<"Intervention", 'String'>;
    readonly utilisateurId: Prisma.FieldRef<"Intervention", 'String'>;
    readonly note: Prisma.FieldRef<"Intervention", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Intervention", 'DateTime'>;
}
export type InterventionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterventionSelect<ExtArgs> | null;
    omit?: Prisma.InterventionOmit<ExtArgs> | null;
    include?: Prisma.InterventionInclude<ExtArgs> | null;
    where: Prisma.InterventionWhereUniqueInput;
};
export type InterventionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterventionSelect<ExtArgs> | null;
    omit?: Prisma.InterventionOmit<ExtArgs> | null;
    include?: Prisma.InterventionInclude<ExtArgs> | null;
    where: Prisma.InterventionWhereUniqueInput;
};
export type InterventionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterventionSelect<ExtArgs> | null;
    omit?: Prisma.InterventionOmit<ExtArgs> | null;
    include?: Prisma.InterventionInclude<ExtArgs> | null;
    where?: Prisma.InterventionWhereInput;
    orderBy?: Prisma.InterventionOrderByWithRelationInput | Prisma.InterventionOrderByWithRelationInput[];
    cursor?: Prisma.InterventionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterventionScalarFieldEnum | Prisma.InterventionScalarFieldEnum[];
};
export type InterventionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterventionSelect<ExtArgs> | null;
    omit?: Prisma.InterventionOmit<ExtArgs> | null;
    include?: Prisma.InterventionInclude<ExtArgs> | null;
    where?: Prisma.InterventionWhereInput;
    orderBy?: Prisma.InterventionOrderByWithRelationInput | Prisma.InterventionOrderByWithRelationInput[];
    cursor?: Prisma.InterventionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterventionScalarFieldEnum | Prisma.InterventionScalarFieldEnum[];
};
export type InterventionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterventionSelect<ExtArgs> | null;
    omit?: Prisma.InterventionOmit<ExtArgs> | null;
    include?: Prisma.InterventionInclude<ExtArgs> | null;
    where?: Prisma.InterventionWhereInput;
    orderBy?: Prisma.InterventionOrderByWithRelationInput | Prisma.InterventionOrderByWithRelationInput[];
    cursor?: Prisma.InterventionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterventionScalarFieldEnum | Prisma.InterventionScalarFieldEnum[];
};
export type InterventionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterventionSelect<ExtArgs> | null;
    omit?: Prisma.InterventionOmit<ExtArgs> | null;
    include?: Prisma.InterventionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterventionCreateInput, Prisma.InterventionUncheckedCreateInput>;
};
export type InterventionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InterventionCreateManyInput | Prisma.InterventionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InterventionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterventionSelect<ExtArgs> | null;
    omit?: Prisma.InterventionOmit<ExtArgs> | null;
    include?: Prisma.InterventionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InterventionUpdateInput, Prisma.InterventionUncheckedUpdateInput>;
    where: Prisma.InterventionWhereUniqueInput;
};
export type InterventionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InterventionUpdateManyMutationInput, Prisma.InterventionUncheckedUpdateManyInput>;
    where?: Prisma.InterventionWhereInput;
    limit?: number;
};
export type InterventionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterventionSelect<ExtArgs> | null;
    omit?: Prisma.InterventionOmit<ExtArgs> | null;
    include?: Prisma.InterventionInclude<ExtArgs> | null;
    where: Prisma.InterventionWhereUniqueInput;
    create: Prisma.XOR<Prisma.InterventionCreateInput, Prisma.InterventionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InterventionUpdateInput, Prisma.InterventionUncheckedUpdateInput>;
};
export type InterventionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterventionSelect<ExtArgs> | null;
    omit?: Prisma.InterventionOmit<ExtArgs> | null;
    include?: Prisma.InterventionInclude<ExtArgs> | null;
    where: Prisma.InterventionWhereUniqueInput;
};
export type InterventionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterventionWhereInput;
    limit?: number;
};
export type InterventionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterventionSelect<ExtArgs> | null;
    omit?: Prisma.InterventionOmit<ExtArgs> | null;
    include?: Prisma.InterventionInclude<ExtArgs> | null;
};
