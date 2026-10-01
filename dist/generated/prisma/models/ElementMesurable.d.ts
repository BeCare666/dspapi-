import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ElementMesurableModel = runtime.Types.Result.DefaultSelection<Prisma.$ElementMesurablePayload>;
export type AggregateElementMesurable = {
    _count: ElementMesurableCountAggregateOutputType | null;
    _avg: ElementMesurableAvgAggregateOutputType | null;
    _sum: ElementMesurableSumAggregateOutputType | null;
    _min: ElementMesurableMinAggregateOutputType | null;
    _max: ElementMesurableMaxAggregateOutputType | null;
};
export type ElementMesurableAvgAggregateOutputType = {
    ordre: number | null;
};
export type ElementMesurableSumAggregateOutputType = {
    ordre: number | null;
};
export type ElementMesurableMinAggregateOutputType = {
    id: string | null;
    critereId: string | null;
    libelle: string | null;
    typeReponse: $Enums.TypeReponse | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ElementMesurableMaxAggregateOutputType = {
    id: string | null;
    critereId: string | null;
    libelle: string | null;
    typeReponse: $Enums.TypeReponse | null;
    ordre: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ElementMesurableCountAggregateOutputType = {
    id: number;
    critereId: number;
    libelle: number;
    typeReponse: number;
    optionsChoix: number;
    ordre: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ElementMesurableAvgAggregateInputType = {
    ordre?: true;
};
export type ElementMesurableSumAggregateInputType = {
    ordre?: true;
};
export type ElementMesurableMinAggregateInputType = {
    id?: true;
    critereId?: true;
    libelle?: true;
    typeReponse?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ElementMesurableMaxAggregateInputType = {
    id?: true;
    critereId?: true;
    libelle?: true;
    typeReponse?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ElementMesurableCountAggregateInputType = {
    id?: true;
    critereId?: true;
    libelle?: true;
    typeReponse?: true;
    optionsChoix?: true;
    ordre?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ElementMesurableAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ElementMesurableWhereInput;
    orderBy?: Prisma.ElementMesurableOrderByWithRelationInput | Prisma.ElementMesurableOrderByWithRelationInput[];
    cursor?: Prisma.ElementMesurableWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ElementMesurableCountAggregateInputType;
    _avg?: ElementMesurableAvgAggregateInputType;
    _sum?: ElementMesurableSumAggregateInputType;
    _min?: ElementMesurableMinAggregateInputType;
    _max?: ElementMesurableMaxAggregateInputType;
};
export type GetElementMesurableAggregateType<T extends ElementMesurableAggregateArgs> = {
    [P in keyof T & keyof AggregateElementMesurable]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateElementMesurable[P]> : Prisma.GetScalarType<T[P], AggregateElementMesurable[P]>;
};
export type ElementMesurableGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ElementMesurableWhereInput;
    orderBy?: Prisma.ElementMesurableOrderByWithAggregationInput | Prisma.ElementMesurableOrderByWithAggregationInput[];
    by: Prisma.ElementMesurableScalarFieldEnum[] | Prisma.ElementMesurableScalarFieldEnum;
    having?: Prisma.ElementMesurableScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ElementMesurableCountAggregateInputType | true;
    _avg?: ElementMesurableAvgAggregateInputType;
    _sum?: ElementMesurableSumAggregateInputType;
    _min?: ElementMesurableMinAggregateInputType;
    _max?: ElementMesurableMaxAggregateInputType;
};
export type ElementMesurableGroupByOutputType = {
    id: string;
    critereId: string;
    libelle: string;
    typeReponse: $Enums.TypeReponse;
    optionsChoix: runtime.JsonValue | null;
    ordre: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ElementMesurableCountAggregateOutputType | null;
    _avg: ElementMesurableAvgAggregateOutputType | null;
    _sum: ElementMesurableSumAggregateOutputType | null;
    _min: ElementMesurableMinAggregateOutputType | null;
    _max: ElementMesurableMaxAggregateOutputType | null;
};
export type GetElementMesurableGroupByPayload<T extends ElementMesurableGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ElementMesurableGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ElementMesurableGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ElementMesurableGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ElementMesurableGroupByOutputType[P]>;
}>>;
export type ElementMesurableWhereInput = {
    AND?: Prisma.ElementMesurableWhereInput | Prisma.ElementMesurableWhereInput[];
    OR?: Prisma.ElementMesurableWhereInput[];
    NOT?: Prisma.ElementMesurableWhereInput | Prisma.ElementMesurableWhereInput[];
    id?: Prisma.StringFilter<"ElementMesurable"> | string;
    critereId?: Prisma.StringFilter<"ElementMesurable"> | string;
    libelle?: Prisma.StringFilter<"ElementMesurable"> | string;
    typeReponse?: Prisma.EnumTypeReponseFilter<"ElementMesurable"> | $Enums.TypeReponse;
    optionsChoix?: Prisma.JsonNullableFilter<"ElementMesurable">;
    ordre?: Prisma.IntFilter<"ElementMesurable"> | number;
    createdAt?: Prisma.DateTimeFilter<"ElementMesurable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ElementMesurable"> | Date | string;
    critere?: Prisma.XOR<Prisma.CritereScalarRelationFilter, Prisma.CritereWhereInput>;
    reponses?: Prisma.ReponseListRelationFilter;
};
export type ElementMesurableOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    critereId?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    typeReponse?: Prisma.SortOrder;
    optionsChoix?: Prisma.SortOrderInput | Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    critere?: Prisma.CritereOrderByWithRelationInput;
    reponses?: Prisma.ReponseOrderByRelationAggregateInput;
    _relevance?: Prisma.ElementMesurableOrderByRelevanceInput;
};
export type ElementMesurableWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ElementMesurableWhereInput | Prisma.ElementMesurableWhereInput[];
    OR?: Prisma.ElementMesurableWhereInput[];
    NOT?: Prisma.ElementMesurableWhereInput | Prisma.ElementMesurableWhereInput[];
    critereId?: Prisma.StringFilter<"ElementMesurable"> | string;
    libelle?: Prisma.StringFilter<"ElementMesurable"> | string;
    typeReponse?: Prisma.EnumTypeReponseFilter<"ElementMesurable"> | $Enums.TypeReponse;
    optionsChoix?: Prisma.JsonNullableFilter<"ElementMesurable">;
    ordre?: Prisma.IntFilter<"ElementMesurable"> | number;
    createdAt?: Prisma.DateTimeFilter<"ElementMesurable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ElementMesurable"> | Date | string;
    critere?: Prisma.XOR<Prisma.CritereScalarRelationFilter, Prisma.CritereWhereInput>;
    reponses?: Prisma.ReponseListRelationFilter;
}, "id">;
export type ElementMesurableOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    critereId?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    typeReponse?: Prisma.SortOrder;
    optionsChoix?: Prisma.SortOrderInput | Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ElementMesurableCountOrderByAggregateInput;
    _avg?: Prisma.ElementMesurableAvgOrderByAggregateInput;
    _max?: Prisma.ElementMesurableMaxOrderByAggregateInput;
    _min?: Prisma.ElementMesurableMinOrderByAggregateInput;
    _sum?: Prisma.ElementMesurableSumOrderByAggregateInput;
};
export type ElementMesurableScalarWhereWithAggregatesInput = {
    AND?: Prisma.ElementMesurableScalarWhereWithAggregatesInput | Prisma.ElementMesurableScalarWhereWithAggregatesInput[];
    OR?: Prisma.ElementMesurableScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ElementMesurableScalarWhereWithAggregatesInput | Prisma.ElementMesurableScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ElementMesurable"> | string;
    critereId?: Prisma.StringWithAggregatesFilter<"ElementMesurable"> | string;
    libelle?: Prisma.StringWithAggregatesFilter<"ElementMesurable"> | string;
    typeReponse?: Prisma.EnumTypeReponseWithAggregatesFilter<"ElementMesurable"> | $Enums.TypeReponse;
    optionsChoix?: Prisma.JsonNullableWithAggregatesFilter<"ElementMesurable">;
    ordre?: Prisma.IntWithAggregatesFilter<"ElementMesurable"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ElementMesurable"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ElementMesurable"> | Date | string;
};
export type ElementMesurableCreateInput = {
    id?: string;
    libelle: string;
    typeReponse?: $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    critere: Prisma.CritereCreateNestedOneWithoutElementsMesurablesInput;
    reponses?: Prisma.ReponseCreateNestedManyWithoutElementMesurableInput;
};
export type ElementMesurableUncheckedCreateInput = {
    id?: string;
    critereId: string;
    libelle: string;
    typeReponse?: $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reponses?: Prisma.ReponseUncheckedCreateNestedManyWithoutElementMesurableInput;
};
export type ElementMesurableUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    typeReponse?: Prisma.EnumTypeReponseFieldUpdateOperationsInput | $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    critere?: Prisma.CritereUpdateOneRequiredWithoutElementsMesurablesNestedInput;
    reponses?: Prisma.ReponseUpdateManyWithoutElementMesurableNestedInput;
};
export type ElementMesurableUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    critereId?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    typeReponse?: Prisma.EnumTypeReponseFieldUpdateOperationsInput | $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reponses?: Prisma.ReponseUncheckedUpdateManyWithoutElementMesurableNestedInput;
};
export type ElementMesurableCreateManyInput = {
    id?: string;
    critereId: string;
    libelle: string;
    typeReponse?: $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ElementMesurableUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    typeReponse?: Prisma.EnumTypeReponseFieldUpdateOperationsInput | $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ElementMesurableUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    critereId?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    typeReponse?: Prisma.EnumTypeReponseFieldUpdateOperationsInput | $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ElementMesurableListRelationFilter = {
    every?: Prisma.ElementMesurableWhereInput;
    some?: Prisma.ElementMesurableWhereInput;
    none?: Prisma.ElementMesurableWhereInput;
};
export type ElementMesurableOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ElementMesurableOrderByRelevanceInput = {
    fields: Prisma.ElementMesurableOrderByRelevanceFieldEnum | Prisma.ElementMesurableOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ElementMesurableCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    critereId?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    typeReponse?: Prisma.SortOrder;
    optionsChoix?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ElementMesurableAvgOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type ElementMesurableMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    critereId?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    typeReponse?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ElementMesurableMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    critereId?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    typeReponse?: Prisma.SortOrder;
    ordre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ElementMesurableSumOrderByAggregateInput = {
    ordre?: Prisma.SortOrder;
};
export type ElementMesurableScalarRelationFilter = {
    is?: Prisma.ElementMesurableWhereInput;
    isNot?: Prisma.ElementMesurableWhereInput;
};
export type ElementMesurableCreateNestedManyWithoutCritereInput = {
    create?: Prisma.XOR<Prisma.ElementMesurableCreateWithoutCritereInput, Prisma.ElementMesurableUncheckedCreateWithoutCritereInput> | Prisma.ElementMesurableCreateWithoutCritereInput[] | Prisma.ElementMesurableUncheckedCreateWithoutCritereInput[];
    connectOrCreate?: Prisma.ElementMesurableCreateOrConnectWithoutCritereInput | Prisma.ElementMesurableCreateOrConnectWithoutCritereInput[];
    createMany?: Prisma.ElementMesurableCreateManyCritereInputEnvelope;
    connect?: Prisma.ElementMesurableWhereUniqueInput | Prisma.ElementMesurableWhereUniqueInput[];
};
export type ElementMesurableUncheckedCreateNestedManyWithoutCritereInput = {
    create?: Prisma.XOR<Prisma.ElementMesurableCreateWithoutCritereInput, Prisma.ElementMesurableUncheckedCreateWithoutCritereInput> | Prisma.ElementMesurableCreateWithoutCritereInput[] | Prisma.ElementMesurableUncheckedCreateWithoutCritereInput[];
    connectOrCreate?: Prisma.ElementMesurableCreateOrConnectWithoutCritereInput | Prisma.ElementMesurableCreateOrConnectWithoutCritereInput[];
    createMany?: Prisma.ElementMesurableCreateManyCritereInputEnvelope;
    connect?: Prisma.ElementMesurableWhereUniqueInput | Prisma.ElementMesurableWhereUniqueInput[];
};
export type ElementMesurableUpdateManyWithoutCritereNestedInput = {
    create?: Prisma.XOR<Prisma.ElementMesurableCreateWithoutCritereInput, Prisma.ElementMesurableUncheckedCreateWithoutCritereInput> | Prisma.ElementMesurableCreateWithoutCritereInput[] | Prisma.ElementMesurableUncheckedCreateWithoutCritereInput[];
    connectOrCreate?: Prisma.ElementMesurableCreateOrConnectWithoutCritereInput | Prisma.ElementMesurableCreateOrConnectWithoutCritereInput[];
    upsert?: Prisma.ElementMesurableUpsertWithWhereUniqueWithoutCritereInput | Prisma.ElementMesurableUpsertWithWhereUniqueWithoutCritereInput[];
    createMany?: Prisma.ElementMesurableCreateManyCritereInputEnvelope;
    set?: Prisma.ElementMesurableWhereUniqueInput | Prisma.ElementMesurableWhereUniqueInput[];
    disconnect?: Prisma.ElementMesurableWhereUniqueInput | Prisma.ElementMesurableWhereUniqueInput[];
    delete?: Prisma.ElementMesurableWhereUniqueInput | Prisma.ElementMesurableWhereUniqueInput[];
    connect?: Prisma.ElementMesurableWhereUniqueInput | Prisma.ElementMesurableWhereUniqueInput[];
    update?: Prisma.ElementMesurableUpdateWithWhereUniqueWithoutCritereInput | Prisma.ElementMesurableUpdateWithWhereUniqueWithoutCritereInput[];
    updateMany?: Prisma.ElementMesurableUpdateManyWithWhereWithoutCritereInput | Prisma.ElementMesurableUpdateManyWithWhereWithoutCritereInput[];
    deleteMany?: Prisma.ElementMesurableScalarWhereInput | Prisma.ElementMesurableScalarWhereInput[];
};
export type ElementMesurableUncheckedUpdateManyWithoutCritereNestedInput = {
    create?: Prisma.XOR<Prisma.ElementMesurableCreateWithoutCritereInput, Prisma.ElementMesurableUncheckedCreateWithoutCritereInput> | Prisma.ElementMesurableCreateWithoutCritereInput[] | Prisma.ElementMesurableUncheckedCreateWithoutCritereInput[];
    connectOrCreate?: Prisma.ElementMesurableCreateOrConnectWithoutCritereInput | Prisma.ElementMesurableCreateOrConnectWithoutCritereInput[];
    upsert?: Prisma.ElementMesurableUpsertWithWhereUniqueWithoutCritereInput | Prisma.ElementMesurableUpsertWithWhereUniqueWithoutCritereInput[];
    createMany?: Prisma.ElementMesurableCreateManyCritereInputEnvelope;
    set?: Prisma.ElementMesurableWhereUniqueInput | Prisma.ElementMesurableWhereUniqueInput[];
    disconnect?: Prisma.ElementMesurableWhereUniqueInput | Prisma.ElementMesurableWhereUniqueInput[];
    delete?: Prisma.ElementMesurableWhereUniqueInput | Prisma.ElementMesurableWhereUniqueInput[];
    connect?: Prisma.ElementMesurableWhereUniqueInput | Prisma.ElementMesurableWhereUniqueInput[];
    update?: Prisma.ElementMesurableUpdateWithWhereUniqueWithoutCritereInput | Prisma.ElementMesurableUpdateWithWhereUniqueWithoutCritereInput[];
    updateMany?: Prisma.ElementMesurableUpdateManyWithWhereWithoutCritereInput | Prisma.ElementMesurableUpdateManyWithWhereWithoutCritereInput[];
    deleteMany?: Prisma.ElementMesurableScalarWhereInput | Prisma.ElementMesurableScalarWhereInput[];
};
export type EnumTypeReponseFieldUpdateOperationsInput = {
    set?: $Enums.TypeReponse;
};
export type ElementMesurableCreateNestedOneWithoutReponsesInput = {
    create?: Prisma.XOR<Prisma.ElementMesurableCreateWithoutReponsesInput, Prisma.ElementMesurableUncheckedCreateWithoutReponsesInput>;
    connectOrCreate?: Prisma.ElementMesurableCreateOrConnectWithoutReponsesInput;
    connect?: Prisma.ElementMesurableWhereUniqueInput;
};
export type ElementMesurableUpdateOneRequiredWithoutReponsesNestedInput = {
    create?: Prisma.XOR<Prisma.ElementMesurableCreateWithoutReponsesInput, Prisma.ElementMesurableUncheckedCreateWithoutReponsesInput>;
    connectOrCreate?: Prisma.ElementMesurableCreateOrConnectWithoutReponsesInput;
    upsert?: Prisma.ElementMesurableUpsertWithoutReponsesInput;
    connect?: Prisma.ElementMesurableWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ElementMesurableUpdateToOneWithWhereWithoutReponsesInput, Prisma.ElementMesurableUpdateWithoutReponsesInput>, Prisma.ElementMesurableUncheckedUpdateWithoutReponsesInput>;
};
export type ElementMesurableCreateWithoutCritereInput = {
    id?: string;
    libelle: string;
    typeReponse?: $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reponses?: Prisma.ReponseCreateNestedManyWithoutElementMesurableInput;
};
export type ElementMesurableUncheckedCreateWithoutCritereInput = {
    id?: string;
    libelle: string;
    typeReponse?: $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reponses?: Prisma.ReponseUncheckedCreateNestedManyWithoutElementMesurableInput;
};
export type ElementMesurableCreateOrConnectWithoutCritereInput = {
    where: Prisma.ElementMesurableWhereUniqueInput;
    create: Prisma.XOR<Prisma.ElementMesurableCreateWithoutCritereInput, Prisma.ElementMesurableUncheckedCreateWithoutCritereInput>;
};
export type ElementMesurableCreateManyCritereInputEnvelope = {
    data: Prisma.ElementMesurableCreateManyCritereInput | Prisma.ElementMesurableCreateManyCritereInput[];
    skipDuplicates?: boolean;
};
export type ElementMesurableUpsertWithWhereUniqueWithoutCritereInput = {
    where: Prisma.ElementMesurableWhereUniqueInput;
    update: Prisma.XOR<Prisma.ElementMesurableUpdateWithoutCritereInput, Prisma.ElementMesurableUncheckedUpdateWithoutCritereInput>;
    create: Prisma.XOR<Prisma.ElementMesurableCreateWithoutCritereInput, Prisma.ElementMesurableUncheckedCreateWithoutCritereInput>;
};
export type ElementMesurableUpdateWithWhereUniqueWithoutCritereInput = {
    where: Prisma.ElementMesurableWhereUniqueInput;
    data: Prisma.XOR<Prisma.ElementMesurableUpdateWithoutCritereInput, Prisma.ElementMesurableUncheckedUpdateWithoutCritereInput>;
};
export type ElementMesurableUpdateManyWithWhereWithoutCritereInput = {
    where: Prisma.ElementMesurableScalarWhereInput;
    data: Prisma.XOR<Prisma.ElementMesurableUpdateManyMutationInput, Prisma.ElementMesurableUncheckedUpdateManyWithoutCritereInput>;
};
export type ElementMesurableScalarWhereInput = {
    AND?: Prisma.ElementMesurableScalarWhereInput | Prisma.ElementMesurableScalarWhereInput[];
    OR?: Prisma.ElementMesurableScalarWhereInput[];
    NOT?: Prisma.ElementMesurableScalarWhereInput | Prisma.ElementMesurableScalarWhereInput[];
    id?: Prisma.StringFilter<"ElementMesurable"> | string;
    critereId?: Prisma.StringFilter<"ElementMesurable"> | string;
    libelle?: Prisma.StringFilter<"ElementMesurable"> | string;
    typeReponse?: Prisma.EnumTypeReponseFilter<"ElementMesurable"> | $Enums.TypeReponse;
    optionsChoix?: Prisma.JsonNullableFilter<"ElementMesurable">;
    ordre?: Prisma.IntFilter<"ElementMesurable"> | number;
    createdAt?: Prisma.DateTimeFilter<"ElementMesurable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ElementMesurable"> | Date | string;
};
export type ElementMesurableCreateWithoutReponsesInput = {
    id?: string;
    libelle: string;
    typeReponse?: $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    critere: Prisma.CritereCreateNestedOneWithoutElementsMesurablesInput;
};
export type ElementMesurableUncheckedCreateWithoutReponsesInput = {
    id?: string;
    critereId: string;
    libelle: string;
    typeReponse?: $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ElementMesurableCreateOrConnectWithoutReponsesInput = {
    where: Prisma.ElementMesurableWhereUniqueInput;
    create: Prisma.XOR<Prisma.ElementMesurableCreateWithoutReponsesInput, Prisma.ElementMesurableUncheckedCreateWithoutReponsesInput>;
};
export type ElementMesurableUpsertWithoutReponsesInput = {
    update: Prisma.XOR<Prisma.ElementMesurableUpdateWithoutReponsesInput, Prisma.ElementMesurableUncheckedUpdateWithoutReponsesInput>;
    create: Prisma.XOR<Prisma.ElementMesurableCreateWithoutReponsesInput, Prisma.ElementMesurableUncheckedCreateWithoutReponsesInput>;
    where?: Prisma.ElementMesurableWhereInput;
};
export type ElementMesurableUpdateToOneWithWhereWithoutReponsesInput = {
    where?: Prisma.ElementMesurableWhereInput;
    data: Prisma.XOR<Prisma.ElementMesurableUpdateWithoutReponsesInput, Prisma.ElementMesurableUncheckedUpdateWithoutReponsesInput>;
};
export type ElementMesurableUpdateWithoutReponsesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    typeReponse?: Prisma.EnumTypeReponseFieldUpdateOperationsInput | $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    critere?: Prisma.CritereUpdateOneRequiredWithoutElementsMesurablesNestedInput;
};
export type ElementMesurableUncheckedUpdateWithoutReponsesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    critereId?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    typeReponse?: Prisma.EnumTypeReponseFieldUpdateOperationsInput | $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ElementMesurableCreateManyCritereInput = {
    id?: string;
    libelle: string;
    typeReponse?: $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ElementMesurableUpdateWithoutCritereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    typeReponse?: Prisma.EnumTypeReponseFieldUpdateOperationsInput | $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reponses?: Prisma.ReponseUpdateManyWithoutElementMesurableNestedInput;
};
export type ElementMesurableUncheckedUpdateWithoutCritereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    typeReponse?: Prisma.EnumTypeReponseFieldUpdateOperationsInput | $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reponses?: Prisma.ReponseUncheckedUpdateManyWithoutElementMesurableNestedInput;
};
export type ElementMesurableUncheckedUpdateManyWithoutCritereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    typeReponse?: Prisma.EnumTypeReponseFieldUpdateOperationsInput | $Enums.TypeReponse;
    optionsChoix?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ordre?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ElementMesurableCountOutputType = {
    reponses: number;
};
export type ElementMesurableCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reponses?: boolean | ElementMesurableCountOutputTypeCountReponsesArgs;
};
export type ElementMesurableCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ElementMesurableCountOutputTypeSelect<ExtArgs> | null;
};
export type ElementMesurableCountOutputTypeCountReponsesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReponseWhereInput;
};
export type ElementMesurableSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    critereId?: boolean;
    libelle?: boolean;
    typeReponse?: boolean;
    optionsChoix?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    critere?: boolean | Prisma.CritereDefaultArgs<ExtArgs>;
    reponses?: boolean | Prisma.ElementMesurable$reponsesArgs<ExtArgs>;
    _count?: boolean | Prisma.ElementMesurableCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["elementMesurable"]>;
export type ElementMesurableSelectScalar = {
    id?: boolean;
    critereId?: boolean;
    libelle?: boolean;
    typeReponse?: boolean;
    optionsChoix?: boolean;
    ordre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ElementMesurableOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "critereId" | "libelle" | "typeReponse" | "optionsChoix" | "ordre" | "createdAt" | "updatedAt", ExtArgs["result"]["elementMesurable"]>;
export type ElementMesurableInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    critere?: boolean | Prisma.CritereDefaultArgs<ExtArgs>;
    reponses?: boolean | Prisma.ElementMesurable$reponsesArgs<ExtArgs>;
    _count?: boolean | Prisma.ElementMesurableCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ElementMesurablePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ElementMesurable";
    objects: {
        critere: Prisma.$CriterePayload<ExtArgs>;
        reponses: Prisma.$ReponsePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        critereId: string;
        libelle: string;
        typeReponse: $Enums.TypeReponse;
        optionsChoix: runtime.JsonValue | null;
        ordre: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["elementMesurable"]>;
    composites: {};
};
export type ElementMesurableGetPayload<S extends boolean | null | undefined | ElementMesurableDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ElementMesurablePayload, S>;
export type ElementMesurableCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ElementMesurableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ElementMesurableCountAggregateInputType | true;
};
export interface ElementMesurableDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ElementMesurable'];
        meta: {
            name: 'ElementMesurable';
        };
    };
    findUnique<T extends ElementMesurableFindUniqueArgs>(args: Prisma.SelectSubset<T, ElementMesurableFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ElementMesurableClient<runtime.Types.Result.GetResult<Prisma.$ElementMesurablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ElementMesurableFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ElementMesurableFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ElementMesurableClient<runtime.Types.Result.GetResult<Prisma.$ElementMesurablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ElementMesurableFindFirstArgs>(args?: Prisma.SelectSubset<T, ElementMesurableFindFirstArgs<ExtArgs>>): Prisma.Prisma__ElementMesurableClient<runtime.Types.Result.GetResult<Prisma.$ElementMesurablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ElementMesurableFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ElementMesurableFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ElementMesurableClient<runtime.Types.Result.GetResult<Prisma.$ElementMesurablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ElementMesurableFindManyArgs>(args?: Prisma.SelectSubset<T, ElementMesurableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ElementMesurablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ElementMesurableCreateArgs>(args: Prisma.SelectSubset<T, ElementMesurableCreateArgs<ExtArgs>>): Prisma.Prisma__ElementMesurableClient<runtime.Types.Result.GetResult<Prisma.$ElementMesurablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ElementMesurableCreateManyArgs>(args?: Prisma.SelectSubset<T, ElementMesurableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ElementMesurableDeleteArgs>(args: Prisma.SelectSubset<T, ElementMesurableDeleteArgs<ExtArgs>>): Prisma.Prisma__ElementMesurableClient<runtime.Types.Result.GetResult<Prisma.$ElementMesurablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ElementMesurableUpdateArgs>(args: Prisma.SelectSubset<T, ElementMesurableUpdateArgs<ExtArgs>>): Prisma.Prisma__ElementMesurableClient<runtime.Types.Result.GetResult<Prisma.$ElementMesurablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ElementMesurableDeleteManyArgs>(args?: Prisma.SelectSubset<T, ElementMesurableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ElementMesurableUpdateManyArgs>(args: Prisma.SelectSubset<T, ElementMesurableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ElementMesurableUpsertArgs>(args: Prisma.SelectSubset<T, ElementMesurableUpsertArgs<ExtArgs>>): Prisma.Prisma__ElementMesurableClient<runtime.Types.Result.GetResult<Prisma.$ElementMesurablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ElementMesurableCountArgs>(args?: Prisma.Subset<T, ElementMesurableCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ElementMesurableCountAggregateOutputType> : number>;
    aggregate<T extends ElementMesurableAggregateArgs>(args: Prisma.Subset<T, ElementMesurableAggregateArgs>): Prisma.PrismaPromise<GetElementMesurableAggregateType<T>>;
    groupBy<T extends ElementMesurableGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ElementMesurableGroupByArgs['orderBy'];
    } : {
        orderBy?: ElementMesurableGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ElementMesurableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElementMesurableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ElementMesurableFieldRefs;
}
export interface Prisma__ElementMesurableClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    critere<T extends Prisma.CritereDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CritereDefaultArgs<ExtArgs>>): Prisma.Prisma__CritereClient<runtime.Types.Result.GetResult<Prisma.$CriterePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reponses<T extends Prisma.ElementMesurable$reponsesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ElementMesurable$reponsesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ElementMesurableFieldRefs {
    readonly id: Prisma.FieldRef<"ElementMesurable", 'String'>;
    readonly critereId: Prisma.FieldRef<"ElementMesurable", 'String'>;
    readonly libelle: Prisma.FieldRef<"ElementMesurable", 'String'>;
    readonly typeReponse: Prisma.FieldRef<"ElementMesurable", 'TypeReponse'>;
    readonly optionsChoix: Prisma.FieldRef<"ElementMesurable", 'Json'>;
    readonly ordre: Prisma.FieldRef<"ElementMesurable", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ElementMesurable", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ElementMesurable", 'DateTime'>;
}
export type ElementMesurableFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ElementMesurableSelect<ExtArgs> | null;
    omit?: Prisma.ElementMesurableOmit<ExtArgs> | null;
    include?: Prisma.ElementMesurableInclude<ExtArgs> | null;
    where: Prisma.ElementMesurableWhereUniqueInput;
};
export type ElementMesurableFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ElementMesurableSelect<ExtArgs> | null;
    omit?: Prisma.ElementMesurableOmit<ExtArgs> | null;
    include?: Prisma.ElementMesurableInclude<ExtArgs> | null;
    where: Prisma.ElementMesurableWhereUniqueInput;
};
export type ElementMesurableFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ElementMesurableFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ElementMesurableFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ElementMesurableCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ElementMesurableSelect<ExtArgs> | null;
    omit?: Prisma.ElementMesurableOmit<ExtArgs> | null;
    include?: Prisma.ElementMesurableInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ElementMesurableCreateInput, Prisma.ElementMesurableUncheckedCreateInput>;
};
export type ElementMesurableCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ElementMesurableCreateManyInput | Prisma.ElementMesurableCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ElementMesurableUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ElementMesurableSelect<ExtArgs> | null;
    omit?: Prisma.ElementMesurableOmit<ExtArgs> | null;
    include?: Prisma.ElementMesurableInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ElementMesurableUpdateInput, Prisma.ElementMesurableUncheckedUpdateInput>;
    where: Prisma.ElementMesurableWhereUniqueInput;
};
export type ElementMesurableUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ElementMesurableUpdateManyMutationInput, Prisma.ElementMesurableUncheckedUpdateManyInput>;
    where?: Prisma.ElementMesurableWhereInput;
    limit?: number;
};
export type ElementMesurableUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ElementMesurableSelect<ExtArgs> | null;
    omit?: Prisma.ElementMesurableOmit<ExtArgs> | null;
    include?: Prisma.ElementMesurableInclude<ExtArgs> | null;
    where: Prisma.ElementMesurableWhereUniqueInput;
    create: Prisma.XOR<Prisma.ElementMesurableCreateInput, Prisma.ElementMesurableUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ElementMesurableUpdateInput, Prisma.ElementMesurableUncheckedUpdateInput>;
};
export type ElementMesurableDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ElementMesurableSelect<ExtArgs> | null;
    omit?: Prisma.ElementMesurableOmit<ExtArgs> | null;
    include?: Prisma.ElementMesurableInclude<ExtArgs> | null;
    where: Prisma.ElementMesurableWhereUniqueInput;
};
export type ElementMesurableDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ElementMesurableWhereInput;
    limit?: number;
};
export type ElementMesurable$reponsesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ElementMesurableDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ElementMesurableSelect<ExtArgs> | null;
    omit?: Prisma.ElementMesurableOmit<ExtArgs> | null;
    include?: Prisma.ElementMesurableInclude<ExtArgs> | null;
};
