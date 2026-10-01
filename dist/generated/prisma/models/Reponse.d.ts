import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReponseModel = runtime.Types.Result.DefaultSelection<Prisma.$ReponsePayload>;
export type AggregateReponse = {
    _count: ReponseCountAggregateOutputType | null;
    _min: ReponseMinAggregateOutputType | null;
    _max: ReponseMaxAggregateOutputType | null;
};
export type ReponseMinAggregateOutputType = {
    id: string | null;
    sessionId: string | null;
    elementMesurableId: string | null;
    commentaire: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ReponseMaxAggregateOutputType = {
    id: string | null;
    sessionId: string | null;
    elementMesurableId: string | null;
    commentaire: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ReponseCountAggregateOutputType = {
    id: number;
    sessionId: number;
    elementMesurableId: number;
    valeur: number;
    commentaire: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ReponseMinAggregateInputType = {
    id?: true;
    sessionId?: true;
    elementMesurableId?: true;
    commentaire?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ReponseMaxAggregateInputType = {
    id?: true;
    sessionId?: true;
    elementMesurableId?: true;
    commentaire?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ReponseCountAggregateInputType = {
    id?: true;
    sessionId?: true;
    elementMesurableId?: true;
    valeur?: true;
    commentaire?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ReponseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReponseWhereInput;
    orderBy?: Prisma.ReponseOrderByWithRelationInput | Prisma.ReponseOrderByWithRelationInput[];
    cursor?: Prisma.ReponseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReponseCountAggregateInputType;
    _min?: ReponseMinAggregateInputType;
    _max?: ReponseMaxAggregateInputType;
};
export type GetReponseAggregateType<T extends ReponseAggregateArgs> = {
    [P in keyof T & keyof AggregateReponse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReponse[P]> : Prisma.GetScalarType<T[P], AggregateReponse[P]>;
};
export type ReponseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReponseWhereInput;
    orderBy?: Prisma.ReponseOrderByWithAggregationInput | Prisma.ReponseOrderByWithAggregationInput[];
    by: Prisma.ReponseScalarFieldEnum[] | Prisma.ReponseScalarFieldEnum;
    having?: Prisma.ReponseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReponseCountAggregateInputType | true;
    _min?: ReponseMinAggregateInputType;
    _max?: ReponseMaxAggregateInputType;
};
export type ReponseGroupByOutputType = {
    id: string;
    sessionId: string;
    elementMesurableId: string;
    valeur: runtime.JsonValue;
    commentaire: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ReponseCountAggregateOutputType | null;
    _min: ReponseMinAggregateOutputType | null;
    _max: ReponseMaxAggregateOutputType | null;
};
export type GetReponseGroupByPayload<T extends ReponseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReponseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReponseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReponseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReponseGroupByOutputType[P]>;
}>>;
export type ReponseWhereInput = {
    AND?: Prisma.ReponseWhereInput | Prisma.ReponseWhereInput[];
    OR?: Prisma.ReponseWhereInput[];
    NOT?: Prisma.ReponseWhereInput | Prisma.ReponseWhereInput[];
    id?: Prisma.StringFilter<"Reponse"> | string;
    sessionId?: Prisma.StringFilter<"Reponse"> | string;
    elementMesurableId?: Prisma.StringFilter<"Reponse"> | string;
    valeur?: Prisma.JsonFilter<"Reponse">;
    commentaire?: Prisma.StringNullableFilter<"Reponse"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Reponse"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Reponse"> | Date | string;
    session?: Prisma.XOR<Prisma.SessionEvaluationScalarRelationFilter, Prisma.SessionEvaluationWhereInput>;
    elementMesurable?: Prisma.XOR<Prisma.ElementMesurableScalarRelationFilter, Prisma.ElementMesurableWhereInput>;
};
export type ReponseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    elementMesurableId?: Prisma.SortOrder;
    valeur?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    session?: Prisma.SessionEvaluationOrderByWithRelationInput;
    elementMesurable?: Prisma.ElementMesurableOrderByWithRelationInput;
    _relevance?: Prisma.ReponseOrderByRelevanceInput;
};
export type ReponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    sessionId_elementMesurableId?: Prisma.ReponseSessionIdElementMesurableIdCompoundUniqueInput;
    AND?: Prisma.ReponseWhereInput | Prisma.ReponseWhereInput[];
    OR?: Prisma.ReponseWhereInput[];
    NOT?: Prisma.ReponseWhereInput | Prisma.ReponseWhereInput[];
    sessionId?: Prisma.StringFilter<"Reponse"> | string;
    elementMesurableId?: Prisma.StringFilter<"Reponse"> | string;
    valeur?: Prisma.JsonFilter<"Reponse">;
    commentaire?: Prisma.StringNullableFilter<"Reponse"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Reponse"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Reponse"> | Date | string;
    session?: Prisma.XOR<Prisma.SessionEvaluationScalarRelationFilter, Prisma.SessionEvaluationWhereInput>;
    elementMesurable?: Prisma.XOR<Prisma.ElementMesurableScalarRelationFilter, Prisma.ElementMesurableWhereInput>;
}, "id" | "sessionId_elementMesurableId">;
export type ReponseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    elementMesurableId?: Prisma.SortOrder;
    valeur?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ReponseCountOrderByAggregateInput;
    _max?: Prisma.ReponseMaxOrderByAggregateInput;
    _min?: Prisma.ReponseMinOrderByAggregateInput;
};
export type ReponseScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReponseScalarWhereWithAggregatesInput | Prisma.ReponseScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReponseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReponseScalarWhereWithAggregatesInput | Prisma.ReponseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Reponse"> | string;
    sessionId?: Prisma.StringWithAggregatesFilter<"Reponse"> | string;
    elementMesurableId?: Prisma.StringWithAggregatesFilter<"Reponse"> | string;
    valeur?: Prisma.JsonWithAggregatesFilter<"Reponse">;
    commentaire?: Prisma.StringNullableWithAggregatesFilter<"Reponse"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Reponse"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Reponse"> | Date | string;
};
export type ReponseCreateInput = {
    id?: string;
    valeur: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    session: Prisma.SessionEvaluationCreateNestedOneWithoutReponsesInput;
    elementMesurable: Prisma.ElementMesurableCreateNestedOneWithoutReponsesInput;
};
export type ReponseUncheckedCreateInput = {
    id?: string;
    sessionId: string;
    elementMesurableId: string;
    valeur: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReponseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    session?: Prisma.SessionEvaluationUpdateOneRequiredWithoutReponsesNestedInput;
    elementMesurable?: Prisma.ElementMesurableUpdateOneRequiredWithoutReponsesNestedInput;
};
export type ReponseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    elementMesurableId?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReponseCreateManyInput = {
    id?: string;
    sessionId: string;
    elementMesurableId: string;
    valeur: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReponseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReponseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    elementMesurableId?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReponseListRelationFilter = {
    every?: Prisma.ReponseWhereInput;
    some?: Prisma.ReponseWhereInput;
    none?: Prisma.ReponseWhereInput;
};
export type ReponseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReponseOrderByRelevanceInput = {
    fields: Prisma.ReponseOrderByRelevanceFieldEnum | Prisma.ReponseOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ReponseSessionIdElementMesurableIdCompoundUniqueInput = {
    sessionId: string;
    elementMesurableId: string;
};
export type ReponseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    elementMesurableId?: Prisma.SortOrder;
    valeur?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ReponseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    elementMesurableId?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ReponseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    elementMesurableId?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ReponseCreateNestedManyWithoutElementMesurableInput = {
    create?: Prisma.XOR<Prisma.ReponseCreateWithoutElementMesurableInput, Prisma.ReponseUncheckedCreateWithoutElementMesurableInput> | Prisma.ReponseCreateWithoutElementMesurableInput[] | Prisma.ReponseUncheckedCreateWithoutElementMesurableInput[];
    connectOrCreate?: Prisma.ReponseCreateOrConnectWithoutElementMesurableInput | Prisma.ReponseCreateOrConnectWithoutElementMesurableInput[];
    createMany?: Prisma.ReponseCreateManyElementMesurableInputEnvelope;
    connect?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
};
export type ReponseUncheckedCreateNestedManyWithoutElementMesurableInput = {
    create?: Prisma.XOR<Prisma.ReponseCreateWithoutElementMesurableInput, Prisma.ReponseUncheckedCreateWithoutElementMesurableInput> | Prisma.ReponseCreateWithoutElementMesurableInput[] | Prisma.ReponseUncheckedCreateWithoutElementMesurableInput[];
    connectOrCreate?: Prisma.ReponseCreateOrConnectWithoutElementMesurableInput | Prisma.ReponseCreateOrConnectWithoutElementMesurableInput[];
    createMany?: Prisma.ReponseCreateManyElementMesurableInputEnvelope;
    connect?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
};
export type ReponseUpdateManyWithoutElementMesurableNestedInput = {
    create?: Prisma.XOR<Prisma.ReponseCreateWithoutElementMesurableInput, Prisma.ReponseUncheckedCreateWithoutElementMesurableInput> | Prisma.ReponseCreateWithoutElementMesurableInput[] | Prisma.ReponseUncheckedCreateWithoutElementMesurableInput[];
    connectOrCreate?: Prisma.ReponseCreateOrConnectWithoutElementMesurableInput | Prisma.ReponseCreateOrConnectWithoutElementMesurableInput[];
    upsert?: Prisma.ReponseUpsertWithWhereUniqueWithoutElementMesurableInput | Prisma.ReponseUpsertWithWhereUniqueWithoutElementMesurableInput[];
    createMany?: Prisma.ReponseCreateManyElementMesurableInputEnvelope;
    set?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    disconnect?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    delete?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    connect?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    update?: Prisma.ReponseUpdateWithWhereUniqueWithoutElementMesurableInput | Prisma.ReponseUpdateWithWhereUniqueWithoutElementMesurableInput[];
    updateMany?: Prisma.ReponseUpdateManyWithWhereWithoutElementMesurableInput | Prisma.ReponseUpdateManyWithWhereWithoutElementMesurableInput[];
    deleteMany?: Prisma.ReponseScalarWhereInput | Prisma.ReponseScalarWhereInput[];
};
export type ReponseUncheckedUpdateManyWithoutElementMesurableNestedInput = {
    create?: Prisma.XOR<Prisma.ReponseCreateWithoutElementMesurableInput, Prisma.ReponseUncheckedCreateWithoutElementMesurableInput> | Prisma.ReponseCreateWithoutElementMesurableInput[] | Prisma.ReponseUncheckedCreateWithoutElementMesurableInput[];
    connectOrCreate?: Prisma.ReponseCreateOrConnectWithoutElementMesurableInput | Prisma.ReponseCreateOrConnectWithoutElementMesurableInput[];
    upsert?: Prisma.ReponseUpsertWithWhereUniqueWithoutElementMesurableInput | Prisma.ReponseUpsertWithWhereUniqueWithoutElementMesurableInput[];
    createMany?: Prisma.ReponseCreateManyElementMesurableInputEnvelope;
    set?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    disconnect?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    delete?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    connect?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    update?: Prisma.ReponseUpdateWithWhereUniqueWithoutElementMesurableInput | Prisma.ReponseUpdateWithWhereUniqueWithoutElementMesurableInput[];
    updateMany?: Prisma.ReponseUpdateManyWithWhereWithoutElementMesurableInput | Prisma.ReponseUpdateManyWithWhereWithoutElementMesurableInput[];
    deleteMany?: Prisma.ReponseScalarWhereInput | Prisma.ReponseScalarWhereInput[];
};
export type ReponseCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.ReponseCreateWithoutSessionInput, Prisma.ReponseUncheckedCreateWithoutSessionInput> | Prisma.ReponseCreateWithoutSessionInput[] | Prisma.ReponseUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.ReponseCreateOrConnectWithoutSessionInput | Prisma.ReponseCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.ReponseCreateManySessionInputEnvelope;
    connect?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
};
export type ReponseUncheckedCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.ReponseCreateWithoutSessionInput, Prisma.ReponseUncheckedCreateWithoutSessionInput> | Prisma.ReponseCreateWithoutSessionInput[] | Prisma.ReponseUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.ReponseCreateOrConnectWithoutSessionInput | Prisma.ReponseCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.ReponseCreateManySessionInputEnvelope;
    connect?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
};
export type ReponseUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.ReponseCreateWithoutSessionInput, Prisma.ReponseUncheckedCreateWithoutSessionInput> | Prisma.ReponseCreateWithoutSessionInput[] | Prisma.ReponseUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.ReponseCreateOrConnectWithoutSessionInput | Prisma.ReponseCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.ReponseUpsertWithWhereUniqueWithoutSessionInput | Prisma.ReponseUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.ReponseCreateManySessionInputEnvelope;
    set?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    disconnect?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    delete?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    connect?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    update?: Prisma.ReponseUpdateWithWhereUniqueWithoutSessionInput | Prisma.ReponseUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.ReponseUpdateManyWithWhereWithoutSessionInput | Prisma.ReponseUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.ReponseScalarWhereInput | Prisma.ReponseScalarWhereInput[];
};
export type ReponseUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.ReponseCreateWithoutSessionInput, Prisma.ReponseUncheckedCreateWithoutSessionInput> | Prisma.ReponseCreateWithoutSessionInput[] | Prisma.ReponseUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.ReponseCreateOrConnectWithoutSessionInput | Prisma.ReponseCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.ReponseUpsertWithWhereUniqueWithoutSessionInput | Prisma.ReponseUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.ReponseCreateManySessionInputEnvelope;
    set?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    disconnect?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    delete?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    connect?: Prisma.ReponseWhereUniqueInput | Prisma.ReponseWhereUniqueInput[];
    update?: Prisma.ReponseUpdateWithWhereUniqueWithoutSessionInput | Prisma.ReponseUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.ReponseUpdateManyWithWhereWithoutSessionInput | Prisma.ReponseUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.ReponseScalarWhereInput | Prisma.ReponseScalarWhereInput[];
};
export type ReponseCreateWithoutElementMesurableInput = {
    id?: string;
    valeur: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    session: Prisma.SessionEvaluationCreateNestedOneWithoutReponsesInput;
};
export type ReponseUncheckedCreateWithoutElementMesurableInput = {
    id?: string;
    sessionId: string;
    valeur: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReponseCreateOrConnectWithoutElementMesurableInput = {
    where: Prisma.ReponseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReponseCreateWithoutElementMesurableInput, Prisma.ReponseUncheckedCreateWithoutElementMesurableInput>;
};
export type ReponseCreateManyElementMesurableInputEnvelope = {
    data: Prisma.ReponseCreateManyElementMesurableInput | Prisma.ReponseCreateManyElementMesurableInput[];
    skipDuplicates?: boolean;
};
export type ReponseUpsertWithWhereUniqueWithoutElementMesurableInput = {
    where: Prisma.ReponseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReponseUpdateWithoutElementMesurableInput, Prisma.ReponseUncheckedUpdateWithoutElementMesurableInput>;
    create: Prisma.XOR<Prisma.ReponseCreateWithoutElementMesurableInput, Prisma.ReponseUncheckedCreateWithoutElementMesurableInput>;
};
export type ReponseUpdateWithWhereUniqueWithoutElementMesurableInput = {
    where: Prisma.ReponseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReponseUpdateWithoutElementMesurableInput, Prisma.ReponseUncheckedUpdateWithoutElementMesurableInput>;
};
export type ReponseUpdateManyWithWhereWithoutElementMesurableInput = {
    where: Prisma.ReponseScalarWhereInput;
    data: Prisma.XOR<Prisma.ReponseUpdateManyMutationInput, Prisma.ReponseUncheckedUpdateManyWithoutElementMesurableInput>;
};
export type ReponseScalarWhereInput = {
    AND?: Prisma.ReponseScalarWhereInput | Prisma.ReponseScalarWhereInput[];
    OR?: Prisma.ReponseScalarWhereInput[];
    NOT?: Prisma.ReponseScalarWhereInput | Prisma.ReponseScalarWhereInput[];
    id?: Prisma.StringFilter<"Reponse"> | string;
    sessionId?: Prisma.StringFilter<"Reponse"> | string;
    elementMesurableId?: Prisma.StringFilter<"Reponse"> | string;
    valeur?: Prisma.JsonFilter<"Reponse">;
    commentaire?: Prisma.StringNullableFilter<"Reponse"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Reponse"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Reponse"> | Date | string;
};
export type ReponseCreateWithoutSessionInput = {
    id?: string;
    valeur: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elementMesurable: Prisma.ElementMesurableCreateNestedOneWithoutReponsesInput;
};
export type ReponseUncheckedCreateWithoutSessionInput = {
    id?: string;
    elementMesurableId: string;
    valeur: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReponseCreateOrConnectWithoutSessionInput = {
    where: Prisma.ReponseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReponseCreateWithoutSessionInput, Prisma.ReponseUncheckedCreateWithoutSessionInput>;
};
export type ReponseCreateManySessionInputEnvelope = {
    data: Prisma.ReponseCreateManySessionInput | Prisma.ReponseCreateManySessionInput[];
    skipDuplicates?: boolean;
};
export type ReponseUpsertWithWhereUniqueWithoutSessionInput = {
    where: Prisma.ReponseWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReponseUpdateWithoutSessionInput, Prisma.ReponseUncheckedUpdateWithoutSessionInput>;
    create: Prisma.XOR<Prisma.ReponseCreateWithoutSessionInput, Prisma.ReponseUncheckedCreateWithoutSessionInput>;
};
export type ReponseUpdateWithWhereUniqueWithoutSessionInput = {
    where: Prisma.ReponseWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReponseUpdateWithoutSessionInput, Prisma.ReponseUncheckedUpdateWithoutSessionInput>;
};
export type ReponseUpdateManyWithWhereWithoutSessionInput = {
    where: Prisma.ReponseScalarWhereInput;
    data: Prisma.XOR<Prisma.ReponseUpdateManyMutationInput, Prisma.ReponseUncheckedUpdateManyWithoutSessionInput>;
};
export type ReponseCreateManyElementMesurableInput = {
    id?: string;
    sessionId: string;
    valeur: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReponseUpdateWithoutElementMesurableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    session?: Prisma.SessionEvaluationUpdateOneRequiredWithoutReponsesNestedInput;
};
export type ReponseUncheckedUpdateWithoutElementMesurableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReponseUncheckedUpdateManyWithoutElementMesurableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReponseCreateManySessionInput = {
    id?: string;
    elementMesurableId: string;
    valeur: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReponseUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    elementMesurable?: Prisma.ElementMesurableUpdateOneRequiredWithoutReponsesNestedInput;
};
export type ReponseUncheckedUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    elementMesurableId?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReponseUncheckedUpdateManyWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    elementMesurableId?: Prisma.StringFieldUpdateOperationsInput | string;
    valeur?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReponseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionId?: boolean;
    elementMesurableId?: boolean;
    valeur?: boolean;
    commentaire?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    session?: boolean | Prisma.SessionEvaluationDefaultArgs<ExtArgs>;
    elementMesurable?: boolean | Prisma.ElementMesurableDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reponse"]>;
export type ReponseSelectScalar = {
    id?: boolean;
    sessionId?: boolean;
    elementMesurableId?: boolean;
    valeur?: boolean;
    commentaire?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ReponseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sessionId" | "elementMesurableId" | "valeur" | "commentaire" | "createdAt" | "updatedAt", ExtArgs["result"]["reponse"]>;
export type ReponseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.SessionEvaluationDefaultArgs<ExtArgs>;
    elementMesurable?: boolean | Prisma.ElementMesurableDefaultArgs<ExtArgs>;
};
export type $ReponsePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Reponse";
    objects: {
        session: Prisma.$SessionEvaluationPayload<ExtArgs>;
        elementMesurable: Prisma.$ElementMesurablePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sessionId: string;
        elementMesurableId: string;
        valeur: runtime.JsonValue;
        commentaire: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["reponse"]>;
    composites: {};
};
export type ReponseGetPayload<S extends boolean | null | undefined | ReponseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReponsePayload, S>;
export type ReponseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReponseCountAggregateInputType | true;
};
export interface ReponseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Reponse'];
        meta: {
            name: 'Reponse';
        };
    };
    findUnique<T extends ReponseFindUniqueArgs>(args: Prisma.SelectSubset<T, ReponseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReponseClient<runtime.Types.Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReponseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReponseClient<runtime.Types.Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReponseFindFirstArgs>(args?: Prisma.SelectSubset<T, ReponseFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReponseClient<runtime.Types.Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReponseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReponseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReponseClient<runtime.Types.Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReponseFindManyArgs>(args?: Prisma.SelectSubset<T, ReponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReponseCreateArgs>(args: Prisma.SelectSubset<T, ReponseCreateArgs<ExtArgs>>): Prisma.Prisma__ReponseClient<runtime.Types.Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReponseCreateManyArgs>(args?: Prisma.SelectSubset<T, ReponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ReponseDeleteArgs>(args: Prisma.SelectSubset<T, ReponseDeleteArgs<ExtArgs>>): Prisma.Prisma__ReponseClient<runtime.Types.Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReponseUpdateArgs>(args: Prisma.SelectSubset<T, ReponseUpdateArgs<ExtArgs>>): Prisma.Prisma__ReponseClient<runtime.Types.Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReponseDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReponseUpdateManyArgs>(args: Prisma.SelectSubset<T, ReponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ReponseUpsertArgs>(args: Prisma.SelectSubset<T, ReponseUpsertArgs<ExtArgs>>): Prisma.Prisma__ReponseClient<runtime.Types.Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReponseCountArgs>(args?: Prisma.Subset<T, ReponseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReponseCountAggregateOutputType> : number>;
    aggregate<T extends ReponseAggregateArgs>(args: Prisma.Subset<T, ReponseAggregateArgs>): Prisma.PrismaPromise<GetReponseAggregateType<T>>;
    groupBy<T extends ReponseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReponseGroupByArgs['orderBy'];
    } : {
        orderBy?: ReponseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReponseFieldRefs;
}
export interface Prisma__ReponseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    session<T extends Prisma.SessionEvaluationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SessionEvaluationDefaultArgs<ExtArgs>>): Prisma.Prisma__SessionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    elementMesurable<T extends Prisma.ElementMesurableDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ElementMesurableDefaultArgs<ExtArgs>>): Prisma.Prisma__ElementMesurableClient<runtime.Types.Result.GetResult<Prisma.$ElementMesurablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReponseFieldRefs {
    readonly id: Prisma.FieldRef<"Reponse", 'String'>;
    readonly sessionId: Prisma.FieldRef<"Reponse", 'String'>;
    readonly elementMesurableId: Prisma.FieldRef<"Reponse", 'String'>;
    readonly valeur: Prisma.FieldRef<"Reponse", 'Json'>;
    readonly commentaire: Prisma.FieldRef<"Reponse", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Reponse", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Reponse", 'DateTime'>;
}
export type ReponseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReponseSelect<ExtArgs> | null;
    omit?: Prisma.ReponseOmit<ExtArgs> | null;
    include?: Prisma.ReponseInclude<ExtArgs> | null;
    where: Prisma.ReponseWhereUniqueInput;
};
export type ReponseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReponseSelect<ExtArgs> | null;
    omit?: Prisma.ReponseOmit<ExtArgs> | null;
    include?: Prisma.ReponseInclude<ExtArgs> | null;
    where: Prisma.ReponseWhereUniqueInput;
};
export type ReponseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReponseSelect<ExtArgs> | null;
    omit?: Prisma.ReponseOmit<ExtArgs> | null;
    include?: Prisma.ReponseInclude<ExtArgs> | null;
    where?: Prisma.ReponseWhereInput;
    orderBy?: Prisma.ReponseOrderByWithRelationInput | Prisma.ReponseOrderByWithRelationInput[];
    cursor?: Prisma.ReponseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReponseScalarFieldEnum | Prisma.ReponseScalarFieldEnum[];
};
export type ReponseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReponseSelect<ExtArgs> | null;
    omit?: Prisma.ReponseOmit<ExtArgs> | null;
    include?: Prisma.ReponseInclude<ExtArgs> | null;
    where?: Prisma.ReponseWhereInput;
    orderBy?: Prisma.ReponseOrderByWithRelationInput | Prisma.ReponseOrderByWithRelationInput[];
    cursor?: Prisma.ReponseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReponseScalarFieldEnum | Prisma.ReponseScalarFieldEnum[];
};
export type ReponseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReponseSelect<ExtArgs> | null;
    omit?: Prisma.ReponseOmit<ExtArgs> | null;
    include?: Prisma.ReponseInclude<ExtArgs> | null;
    where?: Prisma.ReponseWhereInput;
    orderBy?: Prisma.ReponseOrderByWithRelationInput | Prisma.ReponseOrderByWithRelationInput[];
    cursor?: Prisma.ReponseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReponseScalarFieldEnum | Prisma.ReponseScalarFieldEnum[];
};
export type ReponseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReponseSelect<ExtArgs> | null;
    omit?: Prisma.ReponseOmit<ExtArgs> | null;
    include?: Prisma.ReponseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReponseCreateInput, Prisma.ReponseUncheckedCreateInput>;
};
export type ReponseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReponseCreateManyInput | Prisma.ReponseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReponseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReponseSelect<ExtArgs> | null;
    omit?: Prisma.ReponseOmit<ExtArgs> | null;
    include?: Prisma.ReponseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReponseUpdateInput, Prisma.ReponseUncheckedUpdateInput>;
    where: Prisma.ReponseWhereUniqueInput;
};
export type ReponseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReponseUpdateManyMutationInput, Prisma.ReponseUncheckedUpdateManyInput>;
    where?: Prisma.ReponseWhereInput;
    limit?: number;
};
export type ReponseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReponseSelect<ExtArgs> | null;
    omit?: Prisma.ReponseOmit<ExtArgs> | null;
    include?: Prisma.ReponseInclude<ExtArgs> | null;
    where: Prisma.ReponseWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReponseCreateInput, Prisma.ReponseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReponseUpdateInput, Prisma.ReponseUncheckedUpdateInput>;
};
export type ReponseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReponseSelect<ExtArgs> | null;
    omit?: Prisma.ReponseOmit<ExtArgs> | null;
    include?: Prisma.ReponseInclude<ExtArgs> | null;
    where: Prisma.ReponseWhereUniqueInput;
};
export type ReponseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReponseWhereInput;
    limit?: number;
};
export type ReponseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReponseSelect<ExtArgs> | null;
    omit?: Prisma.ReponseOmit<ExtArgs> | null;
    include?: Prisma.ReponseInclude<ExtArgs> | null;
};
