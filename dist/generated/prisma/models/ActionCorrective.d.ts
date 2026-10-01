import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ActionCorrectiveModel = runtime.Types.Result.DefaultSelection<Prisma.$ActionCorrectivePayload>;
export type AggregateActionCorrective = {
    _count: ActionCorrectiveCountAggregateOutputType | null;
    _min: ActionCorrectiveMinAggregateOutputType | null;
    _max: ActionCorrectiveMaxAggregateOutputType | null;
};
export type ActionCorrectiveMinAggregateOutputType = {
    id: string | null;
    evenementId: string | null;
    description: string | null;
    responsableId: string | null;
    echeance: Date | null;
    statut: $Enums.StatutActionCorrective | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ActionCorrectiveMaxAggregateOutputType = {
    id: string | null;
    evenementId: string | null;
    description: string | null;
    responsableId: string | null;
    echeance: Date | null;
    statut: $Enums.StatutActionCorrective | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ActionCorrectiveCountAggregateOutputType = {
    id: number;
    evenementId: number;
    description: number;
    responsableId: number;
    echeance: number;
    statut: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ActionCorrectiveMinAggregateInputType = {
    id?: true;
    evenementId?: true;
    description?: true;
    responsableId?: true;
    echeance?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ActionCorrectiveMaxAggregateInputType = {
    id?: true;
    evenementId?: true;
    description?: true;
    responsableId?: true;
    echeance?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ActionCorrectiveCountAggregateInputType = {
    id?: true;
    evenementId?: true;
    description?: true;
    responsableId?: true;
    echeance?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ActionCorrectiveAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActionCorrectiveWhereInput;
    orderBy?: Prisma.ActionCorrectiveOrderByWithRelationInput | Prisma.ActionCorrectiveOrderByWithRelationInput[];
    cursor?: Prisma.ActionCorrectiveWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ActionCorrectiveCountAggregateInputType;
    _min?: ActionCorrectiveMinAggregateInputType;
    _max?: ActionCorrectiveMaxAggregateInputType;
};
export type GetActionCorrectiveAggregateType<T extends ActionCorrectiveAggregateArgs> = {
    [P in keyof T & keyof AggregateActionCorrective]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActionCorrective[P]> : Prisma.GetScalarType<T[P], AggregateActionCorrective[P]>;
};
export type ActionCorrectiveGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActionCorrectiveWhereInput;
    orderBy?: Prisma.ActionCorrectiveOrderByWithAggregationInput | Prisma.ActionCorrectiveOrderByWithAggregationInput[];
    by: Prisma.ActionCorrectiveScalarFieldEnum[] | Prisma.ActionCorrectiveScalarFieldEnum;
    having?: Prisma.ActionCorrectiveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActionCorrectiveCountAggregateInputType | true;
    _min?: ActionCorrectiveMinAggregateInputType;
    _max?: ActionCorrectiveMaxAggregateInputType;
};
export type ActionCorrectiveGroupByOutputType = {
    id: string;
    evenementId: string;
    description: string;
    responsableId: string;
    echeance: Date;
    statut: $Enums.StatutActionCorrective;
    createdAt: Date;
    updatedAt: Date;
    _count: ActionCorrectiveCountAggregateOutputType | null;
    _min: ActionCorrectiveMinAggregateOutputType | null;
    _max: ActionCorrectiveMaxAggregateOutputType | null;
};
export type GetActionCorrectiveGroupByPayload<T extends ActionCorrectiveGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActionCorrectiveGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActionCorrectiveGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActionCorrectiveGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActionCorrectiveGroupByOutputType[P]>;
}>>;
export type ActionCorrectiveWhereInput = {
    AND?: Prisma.ActionCorrectiveWhereInput | Prisma.ActionCorrectiveWhereInput[];
    OR?: Prisma.ActionCorrectiveWhereInput[];
    NOT?: Prisma.ActionCorrectiveWhereInput | Prisma.ActionCorrectiveWhereInput[];
    id?: Prisma.StringFilter<"ActionCorrective"> | string;
    evenementId?: Prisma.StringFilter<"ActionCorrective"> | string;
    description?: Prisma.StringFilter<"ActionCorrective"> | string;
    responsableId?: Prisma.StringFilter<"ActionCorrective"> | string;
    echeance?: Prisma.DateTimeFilter<"ActionCorrective"> | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveFilter<"ActionCorrective"> | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeFilter<"ActionCorrective"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ActionCorrective"> | Date | string;
    evenement?: Prisma.XOR<Prisma.EvenementIndesirableScalarRelationFilter, Prisma.EvenementIndesirableWhereInput>;
    responsable?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
};
export type ActionCorrectiveOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    responsableId?: Prisma.SortOrder;
    echeance?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    evenement?: Prisma.EvenementIndesirableOrderByWithRelationInput;
    responsable?: Prisma.UtilisateurOrderByWithRelationInput;
    _relevance?: Prisma.ActionCorrectiveOrderByRelevanceInput;
};
export type ActionCorrectiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ActionCorrectiveWhereInput | Prisma.ActionCorrectiveWhereInput[];
    OR?: Prisma.ActionCorrectiveWhereInput[];
    NOT?: Prisma.ActionCorrectiveWhereInput | Prisma.ActionCorrectiveWhereInput[];
    evenementId?: Prisma.StringFilter<"ActionCorrective"> | string;
    description?: Prisma.StringFilter<"ActionCorrective"> | string;
    responsableId?: Prisma.StringFilter<"ActionCorrective"> | string;
    echeance?: Prisma.DateTimeFilter<"ActionCorrective"> | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveFilter<"ActionCorrective"> | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeFilter<"ActionCorrective"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ActionCorrective"> | Date | string;
    evenement?: Prisma.XOR<Prisma.EvenementIndesirableScalarRelationFilter, Prisma.EvenementIndesirableWhereInput>;
    responsable?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
}, "id">;
export type ActionCorrectiveOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    responsableId?: Prisma.SortOrder;
    echeance?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ActionCorrectiveCountOrderByAggregateInput;
    _max?: Prisma.ActionCorrectiveMaxOrderByAggregateInput;
    _min?: Prisma.ActionCorrectiveMinOrderByAggregateInput;
};
export type ActionCorrectiveScalarWhereWithAggregatesInput = {
    AND?: Prisma.ActionCorrectiveScalarWhereWithAggregatesInput | Prisma.ActionCorrectiveScalarWhereWithAggregatesInput[];
    OR?: Prisma.ActionCorrectiveScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ActionCorrectiveScalarWhereWithAggregatesInput | Prisma.ActionCorrectiveScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ActionCorrective"> | string;
    evenementId?: Prisma.StringWithAggregatesFilter<"ActionCorrective"> | string;
    description?: Prisma.StringWithAggregatesFilter<"ActionCorrective"> | string;
    responsableId?: Prisma.StringWithAggregatesFilter<"ActionCorrective"> | string;
    echeance?: Prisma.DateTimeWithAggregatesFilter<"ActionCorrective"> | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveWithAggregatesFilter<"ActionCorrective"> | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ActionCorrective"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ActionCorrective"> | Date | string;
};
export type ActionCorrectiveCreateInput = {
    id?: string;
    description: string;
    echeance: Date | string;
    statut?: $Enums.StatutActionCorrective;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evenement: Prisma.EvenementIndesirableCreateNestedOneWithoutActionsCorrectivesInput;
    responsable: Prisma.UtilisateurCreateNestedOneWithoutActionsCorrectivesAFaireInput;
};
export type ActionCorrectiveUncheckedCreateInput = {
    id?: string;
    evenementId: string;
    description: string;
    responsableId: string;
    echeance: Date | string;
    statut?: $Enums.StatutActionCorrective;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ActionCorrectiveUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    echeance?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveFieldUpdateOperationsInput | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evenement?: Prisma.EvenementIndesirableUpdateOneRequiredWithoutActionsCorrectivesNestedInput;
    responsable?: Prisma.UtilisateurUpdateOneRequiredWithoutActionsCorrectivesAFaireNestedInput;
};
export type ActionCorrectiveUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evenementId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    responsableId?: Prisma.StringFieldUpdateOperationsInput | string;
    echeance?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveFieldUpdateOperationsInput | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActionCorrectiveCreateManyInput = {
    id?: string;
    evenementId: string;
    description: string;
    responsableId: string;
    echeance: Date | string;
    statut?: $Enums.StatutActionCorrective;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ActionCorrectiveUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    echeance?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveFieldUpdateOperationsInput | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActionCorrectiveUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evenementId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    responsableId?: Prisma.StringFieldUpdateOperationsInput | string;
    echeance?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveFieldUpdateOperationsInput | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActionCorrectiveListRelationFilter = {
    every?: Prisma.ActionCorrectiveWhereInput;
    some?: Prisma.ActionCorrectiveWhereInput;
    none?: Prisma.ActionCorrectiveWhereInput;
};
export type ActionCorrectiveOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ActionCorrectiveOrderByRelevanceInput = {
    fields: Prisma.ActionCorrectiveOrderByRelevanceFieldEnum | Prisma.ActionCorrectiveOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ActionCorrectiveCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    responsableId?: Prisma.SortOrder;
    echeance?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ActionCorrectiveMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    responsableId?: Prisma.SortOrder;
    echeance?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ActionCorrectiveMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    responsableId?: Prisma.SortOrder;
    echeance?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ActionCorrectiveCreateNestedManyWithoutResponsableInput = {
    create?: Prisma.XOR<Prisma.ActionCorrectiveCreateWithoutResponsableInput, Prisma.ActionCorrectiveUncheckedCreateWithoutResponsableInput> | Prisma.ActionCorrectiveCreateWithoutResponsableInput[] | Prisma.ActionCorrectiveUncheckedCreateWithoutResponsableInput[];
    connectOrCreate?: Prisma.ActionCorrectiveCreateOrConnectWithoutResponsableInput | Prisma.ActionCorrectiveCreateOrConnectWithoutResponsableInput[];
    createMany?: Prisma.ActionCorrectiveCreateManyResponsableInputEnvelope;
    connect?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
};
export type ActionCorrectiveUncheckedCreateNestedManyWithoutResponsableInput = {
    create?: Prisma.XOR<Prisma.ActionCorrectiveCreateWithoutResponsableInput, Prisma.ActionCorrectiveUncheckedCreateWithoutResponsableInput> | Prisma.ActionCorrectiveCreateWithoutResponsableInput[] | Prisma.ActionCorrectiveUncheckedCreateWithoutResponsableInput[];
    connectOrCreate?: Prisma.ActionCorrectiveCreateOrConnectWithoutResponsableInput | Prisma.ActionCorrectiveCreateOrConnectWithoutResponsableInput[];
    createMany?: Prisma.ActionCorrectiveCreateManyResponsableInputEnvelope;
    connect?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
};
export type ActionCorrectiveUpdateManyWithoutResponsableNestedInput = {
    create?: Prisma.XOR<Prisma.ActionCorrectiveCreateWithoutResponsableInput, Prisma.ActionCorrectiveUncheckedCreateWithoutResponsableInput> | Prisma.ActionCorrectiveCreateWithoutResponsableInput[] | Prisma.ActionCorrectiveUncheckedCreateWithoutResponsableInput[];
    connectOrCreate?: Prisma.ActionCorrectiveCreateOrConnectWithoutResponsableInput | Prisma.ActionCorrectiveCreateOrConnectWithoutResponsableInput[];
    upsert?: Prisma.ActionCorrectiveUpsertWithWhereUniqueWithoutResponsableInput | Prisma.ActionCorrectiveUpsertWithWhereUniqueWithoutResponsableInput[];
    createMany?: Prisma.ActionCorrectiveCreateManyResponsableInputEnvelope;
    set?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    disconnect?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    delete?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    connect?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    update?: Prisma.ActionCorrectiveUpdateWithWhereUniqueWithoutResponsableInput | Prisma.ActionCorrectiveUpdateWithWhereUniqueWithoutResponsableInput[];
    updateMany?: Prisma.ActionCorrectiveUpdateManyWithWhereWithoutResponsableInput | Prisma.ActionCorrectiveUpdateManyWithWhereWithoutResponsableInput[];
    deleteMany?: Prisma.ActionCorrectiveScalarWhereInput | Prisma.ActionCorrectiveScalarWhereInput[];
};
export type ActionCorrectiveUncheckedUpdateManyWithoutResponsableNestedInput = {
    create?: Prisma.XOR<Prisma.ActionCorrectiveCreateWithoutResponsableInput, Prisma.ActionCorrectiveUncheckedCreateWithoutResponsableInput> | Prisma.ActionCorrectiveCreateWithoutResponsableInput[] | Prisma.ActionCorrectiveUncheckedCreateWithoutResponsableInput[];
    connectOrCreate?: Prisma.ActionCorrectiveCreateOrConnectWithoutResponsableInput | Prisma.ActionCorrectiveCreateOrConnectWithoutResponsableInput[];
    upsert?: Prisma.ActionCorrectiveUpsertWithWhereUniqueWithoutResponsableInput | Prisma.ActionCorrectiveUpsertWithWhereUniqueWithoutResponsableInput[];
    createMany?: Prisma.ActionCorrectiveCreateManyResponsableInputEnvelope;
    set?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    disconnect?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    delete?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    connect?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    update?: Prisma.ActionCorrectiveUpdateWithWhereUniqueWithoutResponsableInput | Prisma.ActionCorrectiveUpdateWithWhereUniqueWithoutResponsableInput[];
    updateMany?: Prisma.ActionCorrectiveUpdateManyWithWhereWithoutResponsableInput | Prisma.ActionCorrectiveUpdateManyWithWhereWithoutResponsableInput[];
    deleteMany?: Prisma.ActionCorrectiveScalarWhereInput | Prisma.ActionCorrectiveScalarWhereInput[];
};
export type ActionCorrectiveCreateNestedManyWithoutEvenementInput = {
    create?: Prisma.XOR<Prisma.ActionCorrectiveCreateWithoutEvenementInput, Prisma.ActionCorrectiveUncheckedCreateWithoutEvenementInput> | Prisma.ActionCorrectiveCreateWithoutEvenementInput[] | Prisma.ActionCorrectiveUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.ActionCorrectiveCreateOrConnectWithoutEvenementInput | Prisma.ActionCorrectiveCreateOrConnectWithoutEvenementInput[];
    createMany?: Prisma.ActionCorrectiveCreateManyEvenementInputEnvelope;
    connect?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
};
export type ActionCorrectiveUncheckedCreateNestedManyWithoutEvenementInput = {
    create?: Prisma.XOR<Prisma.ActionCorrectiveCreateWithoutEvenementInput, Prisma.ActionCorrectiveUncheckedCreateWithoutEvenementInput> | Prisma.ActionCorrectiveCreateWithoutEvenementInput[] | Prisma.ActionCorrectiveUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.ActionCorrectiveCreateOrConnectWithoutEvenementInput | Prisma.ActionCorrectiveCreateOrConnectWithoutEvenementInput[];
    createMany?: Prisma.ActionCorrectiveCreateManyEvenementInputEnvelope;
    connect?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
};
export type ActionCorrectiveUpdateManyWithoutEvenementNestedInput = {
    create?: Prisma.XOR<Prisma.ActionCorrectiveCreateWithoutEvenementInput, Prisma.ActionCorrectiveUncheckedCreateWithoutEvenementInput> | Prisma.ActionCorrectiveCreateWithoutEvenementInput[] | Prisma.ActionCorrectiveUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.ActionCorrectiveCreateOrConnectWithoutEvenementInput | Prisma.ActionCorrectiveCreateOrConnectWithoutEvenementInput[];
    upsert?: Prisma.ActionCorrectiveUpsertWithWhereUniqueWithoutEvenementInput | Prisma.ActionCorrectiveUpsertWithWhereUniqueWithoutEvenementInput[];
    createMany?: Prisma.ActionCorrectiveCreateManyEvenementInputEnvelope;
    set?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    disconnect?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    delete?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    connect?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    update?: Prisma.ActionCorrectiveUpdateWithWhereUniqueWithoutEvenementInput | Prisma.ActionCorrectiveUpdateWithWhereUniqueWithoutEvenementInput[];
    updateMany?: Prisma.ActionCorrectiveUpdateManyWithWhereWithoutEvenementInput | Prisma.ActionCorrectiveUpdateManyWithWhereWithoutEvenementInput[];
    deleteMany?: Prisma.ActionCorrectiveScalarWhereInput | Prisma.ActionCorrectiveScalarWhereInput[];
};
export type ActionCorrectiveUncheckedUpdateManyWithoutEvenementNestedInput = {
    create?: Prisma.XOR<Prisma.ActionCorrectiveCreateWithoutEvenementInput, Prisma.ActionCorrectiveUncheckedCreateWithoutEvenementInput> | Prisma.ActionCorrectiveCreateWithoutEvenementInput[] | Prisma.ActionCorrectiveUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.ActionCorrectiveCreateOrConnectWithoutEvenementInput | Prisma.ActionCorrectiveCreateOrConnectWithoutEvenementInput[];
    upsert?: Prisma.ActionCorrectiveUpsertWithWhereUniqueWithoutEvenementInput | Prisma.ActionCorrectiveUpsertWithWhereUniqueWithoutEvenementInput[];
    createMany?: Prisma.ActionCorrectiveCreateManyEvenementInputEnvelope;
    set?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    disconnect?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    delete?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    connect?: Prisma.ActionCorrectiveWhereUniqueInput | Prisma.ActionCorrectiveWhereUniqueInput[];
    update?: Prisma.ActionCorrectiveUpdateWithWhereUniqueWithoutEvenementInput | Prisma.ActionCorrectiveUpdateWithWhereUniqueWithoutEvenementInput[];
    updateMany?: Prisma.ActionCorrectiveUpdateManyWithWhereWithoutEvenementInput | Prisma.ActionCorrectiveUpdateManyWithWhereWithoutEvenementInput[];
    deleteMany?: Prisma.ActionCorrectiveScalarWhereInput | Prisma.ActionCorrectiveScalarWhereInput[];
};
export type EnumStatutActionCorrectiveFieldUpdateOperationsInput = {
    set?: $Enums.StatutActionCorrective;
};
export type ActionCorrectiveCreateWithoutResponsableInput = {
    id?: string;
    description: string;
    echeance: Date | string;
    statut?: $Enums.StatutActionCorrective;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evenement: Prisma.EvenementIndesirableCreateNestedOneWithoutActionsCorrectivesInput;
};
export type ActionCorrectiveUncheckedCreateWithoutResponsableInput = {
    id?: string;
    evenementId: string;
    description: string;
    echeance: Date | string;
    statut?: $Enums.StatutActionCorrective;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ActionCorrectiveCreateOrConnectWithoutResponsableInput = {
    where: Prisma.ActionCorrectiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActionCorrectiveCreateWithoutResponsableInput, Prisma.ActionCorrectiveUncheckedCreateWithoutResponsableInput>;
};
export type ActionCorrectiveCreateManyResponsableInputEnvelope = {
    data: Prisma.ActionCorrectiveCreateManyResponsableInput | Prisma.ActionCorrectiveCreateManyResponsableInput[];
    skipDuplicates?: boolean;
};
export type ActionCorrectiveUpsertWithWhereUniqueWithoutResponsableInput = {
    where: Prisma.ActionCorrectiveWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActionCorrectiveUpdateWithoutResponsableInput, Prisma.ActionCorrectiveUncheckedUpdateWithoutResponsableInput>;
    create: Prisma.XOR<Prisma.ActionCorrectiveCreateWithoutResponsableInput, Prisma.ActionCorrectiveUncheckedCreateWithoutResponsableInput>;
};
export type ActionCorrectiveUpdateWithWhereUniqueWithoutResponsableInput = {
    where: Prisma.ActionCorrectiveWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActionCorrectiveUpdateWithoutResponsableInput, Prisma.ActionCorrectiveUncheckedUpdateWithoutResponsableInput>;
};
export type ActionCorrectiveUpdateManyWithWhereWithoutResponsableInput = {
    where: Prisma.ActionCorrectiveScalarWhereInput;
    data: Prisma.XOR<Prisma.ActionCorrectiveUpdateManyMutationInput, Prisma.ActionCorrectiveUncheckedUpdateManyWithoutResponsableInput>;
};
export type ActionCorrectiveScalarWhereInput = {
    AND?: Prisma.ActionCorrectiveScalarWhereInput | Prisma.ActionCorrectiveScalarWhereInput[];
    OR?: Prisma.ActionCorrectiveScalarWhereInput[];
    NOT?: Prisma.ActionCorrectiveScalarWhereInput | Prisma.ActionCorrectiveScalarWhereInput[];
    id?: Prisma.StringFilter<"ActionCorrective"> | string;
    evenementId?: Prisma.StringFilter<"ActionCorrective"> | string;
    description?: Prisma.StringFilter<"ActionCorrective"> | string;
    responsableId?: Prisma.StringFilter<"ActionCorrective"> | string;
    echeance?: Prisma.DateTimeFilter<"ActionCorrective"> | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveFilter<"ActionCorrective"> | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeFilter<"ActionCorrective"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ActionCorrective"> | Date | string;
};
export type ActionCorrectiveCreateWithoutEvenementInput = {
    id?: string;
    description: string;
    echeance: Date | string;
    statut?: $Enums.StatutActionCorrective;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    responsable: Prisma.UtilisateurCreateNestedOneWithoutActionsCorrectivesAFaireInput;
};
export type ActionCorrectiveUncheckedCreateWithoutEvenementInput = {
    id?: string;
    description: string;
    responsableId: string;
    echeance: Date | string;
    statut?: $Enums.StatutActionCorrective;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ActionCorrectiveCreateOrConnectWithoutEvenementInput = {
    where: Prisma.ActionCorrectiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActionCorrectiveCreateWithoutEvenementInput, Prisma.ActionCorrectiveUncheckedCreateWithoutEvenementInput>;
};
export type ActionCorrectiveCreateManyEvenementInputEnvelope = {
    data: Prisma.ActionCorrectiveCreateManyEvenementInput | Prisma.ActionCorrectiveCreateManyEvenementInput[];
    skipDuplicates?: boolean;
};
export type ActionCorrectiveUpsertWithWhereUniqueWithoutEvenementInput = {
    where: Prisma.ActionCorrectiveWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActionCorrectiveUpdateWithoutEvenementInput, Prisma.ActionCorrectiveUncheckedUpdateWithoutEvenementInput>;
    create: Prisma.XOR<Prisma.ActionCorrectiveCreateWithoutEvenementInput, Prisma.ActionCorrectiveUncheckedCreateWithoutEvenementInput>;
};
export type ActionCorrectiveUpdateWithWhereUniqueWithoutEvenementInput = {
    where: Prisma.ActionCorrectiveWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActionCorrectiveUpdateWithoutEvenementInput, Prisma.ActionCorrectiveUncheckedUpdateWithoutEvenementInput>;
};
export type ActionCorrectiveUpdateManyWithWhereWithoutEvenementInput = {
    where: Prisma.ActionCorrectiveScalarWhereInput;
    data: Prisma.XOR<Prisma.ActionCorrectiveUpdateManyMutationInput, Prisma.ActionCorrectiveUncheckedUpdateManyWithoutEvenementInput>;
};
export type ActionCorrectiveCreateManyResponsableInput = {
    id?: string;
    evenementId: string;
    description: string;
    echeance: Date | string;
    statut?: $Enums.StatutActionCorrective;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ActionCorrectiveUpdateWithoutResponsableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    echeance?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveFieldUpdateOperationsInput | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evenement?: Prisma.EvenementIndesirableUpdateOneRequiredWithoutActionsCorrectivesNestedInput;
};
export type ActionCorrectiveUncheckedUpdateWithoutResponsableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evenementId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    echeance?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveFieldUpdateOperationsInput | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActionCorrectiveUncheckedUpdateManyWithoutResponsableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evenementId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    echeance?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveFieldUpdateOperationsInput | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActionCorrectiveCreateManyEvenementInput = {
    id?: string;
    description: string;
    responsableId: string;
    echeance: Date | string;
    statut?: $Enums.StatutActionCorrective;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ActionCorrectiveUpdateWithoutEvenementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    echeance?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveFieldUpdateOperationsInput | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responsable?: Prisma.UtilisateurUpdateOneRequiredWithoutActionsCorrectivesAFaireNestedInput;
};
export type ActionCorrectiveUncheckedUpdateWithoutEvenementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    responsableId?: Prisma.StringFieldUpdateOperationsInput | string;
    echeance?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveFieldUpdateOperationsInput | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActionCorrectiveUncheckedUpdateManyWithoutEvenementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    responsableId?: Prisma.StringFieldUpdateOperationsInput | string;
    echeance?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statut?: Prisma.EnumStatutActionCorrectiveFieldUpdateOperationsInput | $Enums.StatutActionCorrective;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActionCorrectiveSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    evenementId?: boolean;
    description?: boolean;
    responsableId?: boolean;
    echeance?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    evenement?: boolean | Prisma.EvenementIndesirableDefaultArgs<ExtArgs>;
    responsable?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["actionCorrective"]>;
export type ActionCorrectiveSelectScalar = {
    id?: boolean;
    evenementId?: boolean;
    description?: boolean;
    responsableId?: boolean;
    echeance?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ActionCorrectiveOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "evenementId" | "description" | "responsableId" | "echeance" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["actionCorrective"]>;
export type ActionCorrectiveInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evenement?: boolean | Prisma.EvenementIndesirableDefaultArgs<ExtArgs>;
    responsable?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type $ActionCorrectivePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ActionCorrective";
    objects: {
        evenement: Prisma.$EvenementIndesirablePayload<ExtArgs>;
        responsable: Prisma.$UtilisateurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        evenementId: string;
        description: string;
        responsableId: string;
        echeance: Date;
        statut: $Enums.StatutActionCorrective;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["actionCorrective"]>;
    composites: {};
};
export type ActionCorrectiveGetPayload<S extends boolean | null | undefined | ActionCorrectiveDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ActionCorrectivePayload, S>;
export type ActionCorrectiveCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ActionCorrectiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActionCorrectiveCountAggregateInputType | true;
};
export interface ActionCorrectiveDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ActionCorrective'];
        meta: {
            name: 'ActionCorrective';
        };
    };
    findUnique<T extends ActionCorrectiveFindUniqueArgs>(args: Prisma.SelectSubset<T, ActionCorrectiveFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ActionCorrectiveClient<runtime.Types.Result.GetResult<Prisma.$ActionCorrectivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ActionCorrectiveFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ActionCorrectiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActionCorrectiveClient<runtime.Types.Result.GetResult<Prisma.$ActionCorrectivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ActionCorrectiveFindFirstArgs>(args?: Prisma.SelectSubset<T, ActionCorrectiveFindFirstArgs<ExtArgs>>): Prisma.Prisma__ActionCorrectiveClient<runtime.Types.Result.GetResult<Prisma.$ActionCorrectivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ActionCorrectiveFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ActionCorrectiveFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActionCorrectiveClient<runtime.Types.Result.GetResult<Prisma.$ActionCorrectivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ActionCorrectiveFindManyArgs>(args?: Prisma.SelectSubset<T, ActionCorrectiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActionCorrectivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ActionCorrectiveCreateArgs>(args: Prisma.SelectSubset<T, ActionCorrectiveCreateArgs<ExtArgs>>): Prisma.Prisma__ActionCorrectiveClient<runtime.Types.Result.GetResult<Prisma.$ActionCorrectivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ActionCorrectiveCreateManyArgs>(args?: Prisma.SelectSubset<T, ActionCorrectiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ActionCorrectiveDeleteArgs>(args: Prisma.SelectSubset<T, ActionCorrectiveDeleteArgs<ExtArgs>>): Prisma.Prisma__ActionCorrectiveClient<runtime.Types.Result.GetResult<Prisma.$ActionCorrectivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ActionCorrectiveUpdateArgs>(args: Prisma.SelectSubset<T, ActionCorrectiveUpdateArgs<ExtArgs>>): Prisma.Prisma__ActionCorrectiveClient<runtime.Types.Result.GetResult<Prisma.$ActionCorrectivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ActionCorrectiveDeleteManyArgs>(args?: Prisma.SelectSubset<T, ActionCorrectiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ActionCorrectiveUpdateManyArgs>(args: Prisma.SelectSubset<T, ActionCorrectiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ActionCorrectiveUpsertArgs>(args: Prisma.SelectSubset<T, ActionCorrectiveUpsertArgs<ExtArgs>>): Prisma.Prisma__ActionCorrectiveClient<runtime.Types.Result.GetResult<Prisma.$ActionCorrectivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ActionCorrectiveCountArgs>(args?: Prisma.Subset<T, ActionCorrectiveCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActionCorrectiveCountAggregateOutputType> : number>;
    aggregate<T extends ActionCorrectiveAggregateArgs>(args: Prisma.Subset<T, ActionCorrectiveAggregateArgs>): Prisma.PrismaPromise<GetActionCorrectiveAggregateType<T>>;
    groupBy<T extends ActionCorrectiveGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ActionCorrectiveGroupByArgs['orderBy'];
    } : {
        orderBy?: ActionCorrectiveGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ActionCorrectiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionCorrectiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ActionCorrectiveFieldRefs;
}
export interface Prisma__ActionCorrectiveClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    evenement<T extends Prisma.EvenementIndesirableDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvenementIndesirableDefaultArgs<ExtArgs>>): Prisma.Prisma__EvenementIndesirableClient<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    responsable<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ActionCorrectiveFieldRefs {
    readonly id: Prisma.FieldRef<"ActionCorrective", 'String'>;
    readonly evenementId: Prisma.FieldRef<"ActionCorrective", 'String'>;
    readonly description: Prisma.FieldRef<"ActionCorrective", 'String'>;
    readonly responsableId: Prisma.FieldRef<"ActionCorrective", 'String'>;
    readonly echeance: Prisma.FieldRef<"ActionCorrective", 'DateTime'>;
    readonly statut: Prisma.FieldRef<"ActionCorrective", 'StatutActionCorrective'>;
    readonly createdAt: Prisma.FieldRef<"ActionCorrective", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ActionCorrective", 'DateTime'>;
}
export type ActionCorrectiveFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActionCorrectiveSelect<ExtArgs> | null;
    omit?: Prisma.ActionCorrectiveOmit<ExtArgs> | null;
    include?: Prisma.ActionCorrectiveInclude<ExtArgs> | null;
    where: Prisma.ActionCorrectiveWhereUniqueInput;
};
export type ActionCorrectiveFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActionCorrectiveSelect<ExtArgs> | null;
    omit?: Prisma.ActionCorrectiveOmit<ExtArgs> | null;
    include?: Prisma.ActionCorrectiveInclude<ExtArgs> | null;
    where: Prisma.ActionCorrectiveWhereUniqueInput;
};
export type ActionCorrectiveFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActionCorrectiveSelect<ExtArgs> | null;
    omit?: Prisma.ActionCorrectiveOmit<ExtArgs> | null;
    include?: Prisma.ActionCorrectiveInclude<ExtArgs> | null;
    where?: Prisma.ActionCorrectiveWhereInput;
    orderBy?: Prisma.ActionCorrectiveOrderByWithRelationInput | Prisma.ActionCorrectiveOrderByWithRelationInput[];
    cursor?: Prisma.ActionCorrectiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActionCorrectiveScalarFieldEnum | Prisma.ActionCorrectiveScalarFieldEnum[];
};
export type ActionCorrectiveFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActionCorrectiveSelect<ExtArgs> | null;
    omit?: Prisma.ActionCorrectiveOmit<ExtArgs> | null;
    include?: Prisma.ActionCorrectiveInclude<ExtArgs> | null;
    where?: Prisma.ActionCorrectiveWhereInput;
    orderBy?: Prisma.ActionCorrectiveOrderByWithRelationInput | Prisma.ActionCorrectiveOrderByWithRelationInput[];
    cursor?: Prisma.ActionCorrectiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActionCorrectiveScalarFieldEnum | Prisma.ActionCorrectiveScalarFieldEnum[];
};
export type ActionCorrectiveFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActionCorrectiveSelect<ExtArgs> | null;
    omit?: Prisma.ActionCorrectiveOmit<ExtArgs> | null;
    include?: Prisma.ActionCorrectiveInclude<ExtArgs> | null;
    where?: Prisma.ActionCorrectiveWhereInput;
    orderBy?: Prisma.ActionCorrectiveOrderByWithRelationInput | Prisma.ActionCorrectiveOrderByWithRelationInput[];
    cursor?: Prisma.ActionCorrectiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActionCorrectiveScalarFieldEnum | Prisma.ActionCorrectiveScalarFieldEnum[];
};
export type ActionCorrectiveCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActionCorrectiveSelect<ExtArgs> | null;
    omit?: Prisma.ActionCorrectiveOmit<ExtArgs> | null;
    include?: Prisma.ActionCorrectiveInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActionCorrectiveCreateInput, Prisma.ActionCorrectiveUncheckedCreateInput>;
};
export type ActionCorrectiveCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ActionCorrectiveCreateManyInput | Prisma.ActionCorrectiveCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ActionCorrectiveUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActionCorrectiveSelect<ExtArgs> | null;
    omit?: Prisma.ActionCorrectiveOmit<ExtArgs> | null;
    include?: Prisma.ActionCorrectiveInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ActionCorrectiveUpdateInput, Prisma.ActionCorrectiveUncheckedUpdateInput>;
    where: Prisma.ActionCorrectiveWhereUniqueInput;
};
export type ActionCorrectiveUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ActionCorrectiveUpdateManyMutationInput, Prisma.ActionCorrectiveUncheckedUpdateManyInput>;
    where?: Prisma.ActionCorrectiveWhereInput;
    limit?: number;
};
export type ActionCorrectiveUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActionCorrectiveSelect<ExtArgs> | null;
    omit?: Prisma.ActionCorrectiveOmit<ExtArgs> | null;
    include?: Prisma.ActionCorrectiveInclude<ExtArgs> | null;
    where: Prisma.ActionCorrectiveWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActionCorrectiveCreateInput, Prisma.ActionCorrectiveUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ActionCorrectiveUpdateInput, Prisma.ActionCorrectiveUncheckedUpdateInput>;
};
export type ActionCorrectiveDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActionCorrectiveSelect<ExtArgs> | null;
    omit?: Prisma.ActionCorrectiveOmit<ExtArgs> | null;
    include?: Prisma.ActionCorrectiveInclude<ExtArgs> | null;
    where: Prisma.ActionCorrectiveWhereUniqueInput;
};
export type ActionCorrectiveDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActionCorrectiveWhereInput;
    limit?: number;
};
export type ActionCorrectiveDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ActionCorrectiveSelect<ExtArgs> | null;
    omit?: Prisma.ActionCorrectiveOmit<ExtArgs> | null;
    include?: Prisma.ActionCorrectiveInclude<ExtArgs> | null;
};
