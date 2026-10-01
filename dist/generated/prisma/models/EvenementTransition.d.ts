import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EvenementTransitionModel = runtime.Types.Result.DefaultSelection<Prisma.$EvenementTransitionPayload>;
export type AggregateEvenementTransition = {
    _count: EvenementTransitionCountAggregateOutputType | null;
    _min: EvenementTransitionMinAggregateOutputType | null;
    _max: EvenementTransitionMaxAggregateOutputType | null;
};
export type EvenementTransitionMinAggregateOutputType = {
    id: string | null;
    evenementId: string | null;
    ancienStatut: $Enums.StatutEi | null;
    nouveauStatut: $Enums.StatutEi | null;
    utilisateurId: string | null;
    createdAt: Date | null;
};
export type EvenementTransitionMaxAggregateOutputType = {
    id: string | null;
    evenementId: string | null;
    ancienStatut: $Enums.StatutEi | null;
    nouveauStatut: $Enums.StatutEi | null;
    utilisateurId: string | null;
    createdAt: Date | null;
};
export type EvenementTransitionCountAggregateOutputType = {
    id: number;
    evenementId: number;
    ancienStatut: number;
    nouveauStatut: number;
    utilisateurId: number;
    createdAt: number;
    _all: number;
};
export type EvenementTransitionMinAggregateInputType = {
    id?: true;
    evenementId?: true;
    ancienStatut?: true;
    nouveauStatut?: true;
    utilisateurId?: true;
    createdAt?: true;
};
export type EvenementTransitionMaxAggregateInputType = {
    id?: true;
    evenementId?: true;
    ancienStatut?: true;
    nouveauStatut?: true;
    utilisateurId?: true;
    createdAt?: true;
};
export type EvenementTransitionCountAggregateInputType = {
    id?: true;
    evenementId?: true;
    ancienStatut?: true;
    nouveauStatut?: true;
    utilisateurId?: true;
    createdAt?: true;
    _all?: true;
};
export type EvenementTransitionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvenementTransitionWhereInput;
    orderBy?: Prisma.EvenementTransitionOrderByWithRelationInput | Prisma.EvenementTransitionOrderByWithRelationInput[];
    cursor?: Prisma.EvenementTransitionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EvenementTransitionCountAggregateInputType;
    _min?: EvenementTransitionMinAggregateInputType;
    _max?: EvenementTransitionMaxAggregateInputType;
};
export type GetEvenementTransitionAggregateType<T extends EvenementTransitionAggregateArgs> = {
    [P in keyof T & keyof AggregateEvenementTransition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvenementTransition[P]> : Prisma.GetScalarType<T[P], AggregateEvenementTransition[P]>;
};
export type EvenementTransitionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvenementTransitionWhereInput;
    orderBy?: Prisma.EvenementTransitionOrderByWithAggregationInput | Prisma.EvenementTransitionOrderByWithAggregationInput[];
    by: Prisma.EvenementTransitionScalarFieldEnum[] | Prisma.EvenementTransitionScalarFieldEnum;
    having?: Prisma.EvenementTransitionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EvenementTransitionCountAggregateInputType | true;
    _min?: EvenementTransitionMinAggregateInputType;
    _max?: EvenementTransitionMaxAggregateInputType;
};
export type EvenementTransitionGroupByOutputType = {
    id: string;
    evenementId: string;
    ancienStatut: $Enums.StatutEi;
    nouveauStatut: $Enums.StatutEi;
    utilisateurId: string;
    createdAt: Date;
    _count: EvenementTransitionCountAggregateOutputType | null;
    _min: EvenementTransitionMinAggregateOutputType | null;
    _max: EvenementTransitionMaxAggregateOutputType | null;
};
export type GetEvenementTransitionGroupByPayload<T extends EvenementTransitionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EvenementTransitionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EvenementTransitionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EvenementTransitionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EvenementTransitionGroupByOutputType[P]>;
}>>;
export type EvenementTransitionWhereInput = {
    AND?: Prisma.EvenementTransitionWhereInput | Prisma.EvenementTransitionWhereInput[];
    OR?: Prisma.EvenementTransitionWhereInput[];
    NOT?: Prisma.EvenementTransitionWhereInput | Prisma.EvenementTransitionWhereInput[];
    id?: Prisma.StringFilter<"EvenementTransition"> | string;
    evenementId?: Prisma.StringFilter<"EvenementTransition"> | string;
    ancienStatut?: Prisma.EnumStatutEiFilter<"EvenementTransition"> | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiFilter<"EvenementTransition"> | $Enums.StatutEi;
    utilisateurId?: Prisma.StringFilter<"EvenementTransition"> | string;
    createdAt?: Prisma.DateTimeFilter<"EvenementTransition"> | Date | string;
    evenement?: Prisma.XOR<Prisma.EvenementIndesirableScalarRelationFilter, Prisma.EvenementIndesirableWhereInput>;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
};
export type EvenementTransitionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    ancienStatut?: Prisma.SortOrder;
    nouveauStatut?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    evenement?: Prisma.EvenementIndesirableOrderByWithRelationInput;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
    _relevance?: Prisma.EvenementTransitionOrderByRelevanceInput;
};
export type EvenementTransitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EvenementTransitionWhereInput | Prisma.EvenementTransitionWhereInput[];
    OR?: Prisma.EvenementTransitionWhereInput[];
    NOT?: Prisma.EvenementTransitionWhereInput | Prisma.EvenementTransitionWhereInput[];
    evenementId?: Prisma.StringFilter<"EvenementTransition"> | string;
    ancienStatut?: Prisma.EnumStatutEiFilter<"EvenementTransition"> | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiFilter<"EvenementTransition"> | $Enums.StatutEi;
    utilisateurId?: Prisma.StringFilter<"EvenementTransition"> | string;
    createdAt?: Prisma.DateTimeFilter<"EvenementTransition"> | Date | string;
    evenement?: Prisma.XOR<Prisma.EvenementIndesirableScalarRelationFilter, Prisma.EvenementIndesirableWhereInput>;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
}, "id">;
export type EvenementTransitionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    ancienStatut?: Prisma.SortOrder;
    nouveauStatut?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EvenementTransitionCountOrderByAggregateInput;
    _max?: Prisma.EvenementTransitionMaxOrderByAggregateInput;
    _min?: Prisma.EvenementTransitionMinOrderByAggregateInput;
};
export type EvenementTransitionScalarWhereWithAggregatesInput = {
    AND?: Prisma.EvenementTransitionScalarWhereWithAggregatesInput | Prisma.EvenementTransitionScalarWhereWithAggregatesInput[];
    OR?: Prisma.EvenementTransitionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EvenementTransitionScalarWhereWithAggregatesInput | Prisma.EvenementTransitionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EvenementTransition"> | string;
    evenementId?: Prisma.StringWithAggregatesFilter<"EvenementTransition"> | string;
    ancienStatut?: Prisma.EnumStatutEiWithAggregatesFilter<"EvenementTransition"> | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiWithAggregatesFilter<"EvenementTransition"> | $Enums.StatutEi;
    utilisateurId?: Prisma.StringWithAggregatesFilter<"EvenementTransition"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EvenementTransition"> | Date | string;
};
export type EvenementTransitionCreateInput = {
    id?: string;
    ancienStatut: $Enums.StatutEi;
    nouveauStatut: $Enums.StatutEi;
    createdAt?: Date | string;
    evenement: Prisma.EvenementIndesirableCreateNestedOneWithoutTransitionsInput;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutTransitionsEiInput;
};
export type EvenementTransitionUncheckedCreateInput = {
    id?: string;
    evenementId: string;
    ancienStatut: $Enums.StatutEi;
    nouveauStatut: $Enums.StatutEi;
    utilisateurId: string;
    createdAt?: Date | string;
};
export type EvenementTransitionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ancienStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evenement?: Prisma.EvenementIndesirableUpdateOneRequiredWithoutTransitionsNestedInput;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutTransitionsEiNestedInput;
};
export type EvenementTransitionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evenementId?: Prisma.StringFieldUpdateOperationsInput | string;
    ancienStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementTransitionCreateManyInput = {
    id?: string;
    evenementId: string;
    ancienStatut: $Enums.StatutEi;
    nouveauStatut: $Enums.StatutEi;
    utilisateurId: string;
    createdAt?: Date | string;
};
export type EvenementTransitionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ancienStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementTransitionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evenementId?: Prisma.StringFieldUpdateOperationsInput | string;
    ancienStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementTransitionListRelationFilter = {
    every?: Prisma.EvenementTransitionWhereInput;
    some?: Prisma.EvenementTransitionWhereInput;
    none?: Prisma.EvenementTransitionWhereInput;
};
export type EvenementTransitionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EvenementTransitionOrderByRelevanceInput = {
    fields: Prisma.EvenementTransitionOrderByRelevanceFieldEnum | Prisma.EvenementTransitionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type EvenementTransitionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    ancienStatut?: Prisma.SortOrder;
    nouveauStatut?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EvenementTransitionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    ancienStatut?: Prisma.SortOrder;
    nouveauStatut?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EvenementTransitionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    ancienStatut?: Prisma.SortOrder;
    nouveauStatut?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EvenementTransitionCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.EvenementTransitionCreateWithoutUtilisateurInput, Prisma.EvenementTransitionUncheckedCreateWithoutUtilisateurInput> | Prisma.EvenementTransitionCreateWithoutUtilisateurInput[] | Prisma.EvenementTransitionUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.EvenementTransitionCreateOrConnectWithoutUtilisateurInput | Prisma.EvenementTransitionCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.EvenementTransitionCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
};
export type EvenementTransitionUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.EvenementTransitionCreateWithoutUtilisateurInput, Prisma.EvenementTransitionUncheckedCreateWithoutUtilisateurInput> | Prisma.EvenementTransitionCreateWithoutUtilisateurInput[] | Prisma.EvenementTransitionUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.EvenementTransitionCreateOrConnectWithoutUtilisateurInput | Prisma.EvenementTransitionCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.EvenementTransitionCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
};
export type EvenementTransitionUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementTransitionCreateWithoutUtilisateurInput, Prisma.EvenementTransitionUncheckedCreateWithoutUtilisateurInput> | Prisma.EvenementTransitionCreateWithoutUtilisateurInput[] | Prisma.EvenementTransitionUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.EvenementTransitionCreateOrConnectWithoutUtilisateurInput | Prisma.EvenementTransitionCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.EvenementTransitionUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.EvenementTransitionUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.EvenementTransitionCreateManyUtilisateurInputEnvelope;
    set?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    disconnect?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    delete?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    connect?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    update?: Prisma.EvenementTransitionUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.EvenementTransitionUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.EvenementTransitionUpdateManyWithWhereWithoutUtilisateurInput | Prisma.EvenementTransitionUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.EvenementTransitionScalarWhereInput | Prisma.EvenementTransitionScalarWhereInput[];
};
export type EvenementTransitionUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementTransitionCreateWithoutUtilisateurInput, Prisma.EvenementTransitionUncheckedCreateWithoutUtilisateurInput> | Prisma.EvenementTransitionCreateWithoutUtilisateurInput[] | Prisma.EvenementTransitionUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.EvenementTransitionCreateOrConnectWithoutUtilisateurInput | Prisma.EvenementTransitionCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.EvenementTransitionUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.EvenementTransitionUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.EvenementTransitionCreateManyUtilisateurInputEnvelope;
    set?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    disconnect?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    delete?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    connect?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    update?: Prisma.EvenementTransitionUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.EvenementTransitionUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.EvenementTransitionUpdateManyWithWhereWithoutUtilisateurInput | Prisma.EvenementTransitionUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.EvenementTransitionScalarWhereInput | Prisma.EvenementTransitionScalarWhereInput[];
};
export type EvenementTransitionCreateNestedManyWithoutEvenementInput = {
    create?: Prisma.XOR<Prisma.EvenementTransitionCreateWithoutEvenementInput, Prisma.EvenementTransitionUncheckedCreateWithoutEvenementInput> | Prisma.EvenementTransitionCreateWithoutEvenementInput[] | Prisma.EvenementTransitionUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.EvenementTransitionCreateOrConnectWithoutEvenementInput | Prisma.EvenementTransitionCreateOrConnectWithoutEvenementInput[];
    createMany?: Prisma.EvenementTransitionCreateManyEvenementInputEnvelope;
    connect?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
};
export type EvenementTransitionUncheckedCreateNestedManyWithoutEvenementInput = {
    create?: Prisma.XOR<Prisma.EvenementTransitionCreateWithoutEvenementInput, Prisma.EvenementTransitionUncheckedCreateWithoutEvenementInput> | Prisma.EvenementTransitionCreateWithoutEvenementInput[] | Prisma.EvenementTransitionUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.EvenementTransitionCreateOrConnectWithoutEvenementInput | Prisma.EvenementTransitionCreateOrConnectWithoutEvenementInput[];
    createMany?: Prisma.EvenementTransitionCreateManyEvenementInputEnvelope;
    connect?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
};
export type EvenementTransitionUpdateManyWithoutEvenementNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementTransitionCreateWithoutEvenementInput, Prisma.EvenementTransitionUncheckedCreateWithoutEvenementInput> | Prisma.EvenementTransitionCreateWithoutEvenementInput[] | Prisma.EvenementTransitionUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.EvenementTransitionCreateOrConnectWithoutEvenementInput | Prisma.EvenementTransitionCreateOrConnectWithoutEvenementInput[];
    upsert?: Prisma.EvenementTransitionUpsertWithWhereUniqueWithoutEvenementInput | Prisma.EvenementTransitionUpsertWithWhereUniqueWithoutEvenementInput[];
    createMany?: Prisma.EvenementTransitionCreateManyEvenementInputEnvelope;
    set?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    disconnect?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    delete?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    connect?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    update?: Prisma.EvenementTransitionUpdateWithWhereUniqueWithoutEvenementInput | Prisma.EvenementTransitionUpdateWithWhereUniqueWithoutEvenementInput[];
    updateMany?: Prisma.EvenementTransitionUpdateManyWithWhereWithoutEvenementInput | Prisma.EvenementTransitionUpdateManyWithWhereWithoutEvenementInput[];
    deleteMany?: Prisma.EvenementTransitionScalarWhereInput | Prisma.EvenementTransitionScalarWhereInput[];
};
export type EvenementTransitionUncheckedUpdateManyWithoutEvenementNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementTransitionCreateWithoutEvenementInput, Prisma.EvenementTransitionUncheckedCreateWithoutEvenementInput> | Prisma.EvenementTransitionCreateWithoutEvenementInput[] | Prisma.EvenementTransitionUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.EvenementTransitionCreateOrConnectWithoutEvenementInput | Prisma.EvenementTransitionCreateOrConnectWithoutEvenementInput[];
    upsert?: Prisma.EvenementTransitionUpsertWithWhereUniqueWithoutEvenementInput | Prisma.EvenementTransitionUpsertWithWhereUniqueWithoutEvenementInput[];
    createMany?: Prisma.EvenementTransitionCreateManyEvenementInputEnvelope;
    set?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    disconnect?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    delete?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    connect?: Prisma.EvenementTransitionWhereUniqueInput | Prisma.EvenementTransitionWhereUniqueInput[];
    update?: Prisma.EvenementTransitionUpdateWithWhereUniqueWithoutEvenementInput | Prisma.EvenementTransitionUpdateWithWhereUniqueWithoutEvenementInput[];
    updateMany?: Prisma.EvenementTransitionUpdateManyWithWhereWithoutEvenementInput | Prisma.EvenementTransitionUpdateManyWithWhereWithoutEvenementInput[];
    deleteMany?: Prisma.EvenementTransitionScalarWhereInput | Prisma.EvenementTransitionScalarWhereInput[];
};
export type EvenementTransitionCreateWithoutUtilisateurInput = {
    id?: string;
    ancienStatut: $Enums.StatutEi;
    nouveauStatut: $Enums.StatutEi;
    createdAt?: Date | string;
    evenement: Prisma.EvenementIndesirableCreateNestedOneWithoutTransitionsInput;
};
export type EvenementTransitionUncheckedCreateWithoutUtilisateurInput = {
    id?: string;
    evenementId: string;
    ancienStatut: $Enums.StatutEi;
    nouveauStatut: $Enums.StatutEi;
    createdAt?: Date | string;
};
export type EvenementTransitionCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.EvenementTransitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvenementTransitionCreateWithoutUtilisateurInput, Prisma.EvenementTransitionUncheckedCreateWithoutUtilisateurInput>;
};
export type EvenementTransitionCreateManyUtilisateurInputEnvelope = {
    data: Prisma.EvenementTransitionCreateManyUtilisateurInput | Prisma.EvenementTransitionCreateManyUtilisateurInput[];
    skipDuplicates?: boolean;
};
export type EvenementTransitionUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.EvenementTransitionWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvenementTransitionUpdateWithoutUtilisateurInput, Prisma.EvenementTransitionUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.EvenementTransitionCreateWithoutUtilisateurInput, Prisma.EvenementTransitionUncheckedCreateWithoutUtilisateurInput>;
};
export type EvenementTransitionUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.EvenementTransitionWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvenementTransitionUpdateWithoutUtilisateurInput, Prisma.EvenementTransitionUncheckedUpdateWithoutUtilisateurInput>;
};
export type EvenementTransitionUpdateManyWithWhereWithoutUtilisateurInput = {
    where: Prisma.EvenementTransitionScalarWhereInput;
    data: Prisma.XOR<Prisma.EvenementTransitionUpdateManyMutationInput, Prisma.EvenementTransitionUncheckedUpdateManyWithoutUtilisateurInput>;
};
export type EvenementTransitionScalarWhereInput = {
    AND?: Prisma.EvenementTransitionScalarWhereInput | Prisma.EvenementTransitionScalarWhereInput[];
    OR?: Prisma.EvenementTransitionScalarWhereInput[];
    NOT?: Prisma.EvenementTransitionScalarWhereInput | Prisma.EvenementTransitionScalarWhereInput[];
    id?: Prisma.StringFilter<"EvenementTransition"> | string;
    evenementId?: Prisma.StringFilter<"EvenementTransition"> | string;
    ancienStatut?: Prisma.EnumStatutEiFilter<"EvenementTransition"> | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiFilter<"EvenementTransition"> | $Enums.StatutEi;
    utilisateurId?: Prisma.StringFilter<"EvenementTransition"> | string;
    createdAt?: Prisma.DateTimeFilter<"EvenementTransition"> | Date | string;
};
export type EvenementTransitionCreateWithoutEvenementInput = {
    id?: string;
    ancienStatut: $Enums.StatutEi;
    nouveauStatut: $Enums.StatutEi;
    createdAt?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutTransitionsEiInput;
};
export type EvenementTransitionUncheckedCreateWithoutEvenementInput = {
    id?: string;
    ancienStatut: $Enums.StatutEi;
    nouveauStatut: $Enums.StatutEi;
    utilisateurId: string;
    createdAt?: Date | string;
};
export type EvenementTransitionCreateOrConnectWithoutEvenementInput = {
    where: Prisma.EvenementTransitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvenementTransitionCreateWithoutEvenementInput, Prisma.EvenementTransitionUncheckedCreateWithoutEvenementInput>;
};
export type EvenementTransitionCreateManyEvenementInputEnvelope = {
    data: Prisma.EvenementTransitionCreateManyEvenementInput | Prisma.EvenementTransitionCreateManyEvenementInput[];
    skipDuplicates?: boolean;
};
export type EvenementTransitionUpsertWithWhereUniqueWithoutEvenementInput = {
    where: Prisma.EvenementTransitionWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvenementTransitionUpdateWithoutEvenementInput, Prisma.EvenementTransitionUncheckedUpdateWithoutEvenementInput>;
    create: Prisma.XOR<Prisma.EvenementTransitionCreateWithoutEvenementInput, Prisma.EvenementTransitionUncheckedCreateWithoutEvenementInput>;
};
export type EvenementTransitionUpdateWithWhereUniqueWithoutEvenementInput = {
    where: Prisma.EvenementTransitionWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvenementTransitionUpdateWithoutEvenementInput, Prisma.EvenementTransitionUncheckedUpdateWithoutEvenementInput>;
};
export type EvenementTransitionUpdateManyWithWhereWithoutEvenementInput = {
    where: Prisma.EvenementTransitionScalarWhereInput;
    data: Prisma.XOR<Prisma.EvenementTransitionUpdateManyMutationInput, Prisma.EvenementTransitionUncheckedUpdateManyWithoutEvenementInput>;
};
export type EvenementTransitionCreateManyUtilisateurInput = {
    id?: string;
    evenementId: string;
    ancienStatut: $Enums.StatutEi;
    nouveauStatut: $Enums.StatutEi;
    createdAt?: Date | string;
};
export type EvenementTransitionUpdateWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ancienStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evenement?: Prisma.EvenementIndesirableUpdateOneRequiredWithoutTransitionsNestedInput;
};
export type EvenementTransitionUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evenementId?: Prisma.StringFieldUpdateOperationsInput | string;
    ancienStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementTransitionUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evenementId?: Prisma.StringFieldUpdateOperationsInput | string;
    ancienStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementTransitionCreateManyEvenementInput = {
    id?: string;
    ancienStatut: $Enums.StatutEi;
    nouveauStatut: $Enums.StatutEi;
    utilisateurId: string;
    createdAt?: Date | string;
};
export type EvenementTransitionUpdateWithoutEvenementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ancienStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutTransitionsEiNestedInput;
};
export type EvenementTransitionUncheckedUpdateWithoutEvenementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ancienStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementTransitionUncheckedUpdateManyWithoutEvenementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ancienStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    nouveauStatut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementTransitionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    evenementId?: boolean;
    ancienStatut?: boolean;
    nouveauStatut?: boolean;
    utilisateurId?: boolean;
    createdAt?: boolean;
    evenement?: boolean | Prisma.EvenementIndesirableDefaultArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evenementTransition"]>;
export type EvenementTransitionSelectScalar = {
    id?: boolean;
    evenementId?: boolean;
    ancienStatut?: boolean;
    nouveauStatut?: boolean;
    utilisateurId?: boolean;
    createdAt?: boolean;
};
export type EvenementTransitionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "evenementId" | "ancienStatut" | "nouveauStatut" | "utilisateurId" | "createdAt", ExtArgs["result"]["evenementTransition"]>;
export type EvenementTransitionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evenement?: boolean | Prisma.EvenementIndesirableDefaultArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type $EvenementTransitionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EvenementTransition";
    objects: {
        evenement: Prisma.$EvenementIndesirablePayload<ExtArgs>;
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        evenementId: string;
        ancienStatut: $Enums.StatutEi;
        nouveauStatut: $Enums.StatutEi;
        utilisateurId: string;
        createdAt: Date;
    }, ExtArgs["result"]["evenementTransition"]>;
    composites: {};
};
export type EvenementTransitionGetPayload<S extends boolean | null | undefined | EvenementTransitionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvenementTransitionPayload, S>;
export type EvenementTransitionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EvenementTransitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvenementTransitionCountAggregateInputType | true;
};
export interface EvenementTransitionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EvenementTransition'];
        meta: {
            name: 'EvenementTransition';
        };
    };
    findUnique<T extends EvenementTransitionFindUniqueArgs>(args: Prisma.SelectSubset<T, EvenementTransitionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvenementTransitionClient<runtime.Types.Result.GetResult<Prisma.$EvenementTransitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EvenementTransitionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvenementTransitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvenementTransitionClient<runtime.Types.Result.GetResult<Prisma.$EvenementTransitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EvenementTransitionFindFirstArgs>(args?: Prisma.SelectSubset<T, EvenementTransitionFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvenementTransitionClient<runtime.Types.Result.GetResult<Prisma.$EvenementTransitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EvenementTransitionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvenementTransitionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvenementTransitionClient<runtime.Types.Result.GetResult<Prisma.$EvenementTransitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EvenementTransitionFindManyArgs>(args?: Prisma.SelectSubset<T, EvenementTransitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvenementTransitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EvenementTransitionCreateArgs>(args: Prisma.SelectSubset<T, EvenementTransitionCreateArgs<ExtArgs>>): Prisma.Prisma__EvenementTransitionClient<runtime.Types.Result.GetResult<Prisma.$EvenementTransitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EvenementTransitionCreateManyArgs>(args?: Prisma.SelectSubset<T, EvenementTransitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends EvenementTransitionDeleteArgs>(args: Prisma.SelectSubset<T, EvenementTransitionDeleteArgs<ExtArgs>>): Prisma.Prisma__EvenementTransitionClient<runtime.Types.Result.GetResult<Prisma.$EvenementTransitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EvenementTransitionUpdateArgs>(args: Prisma.SelectSubset<T, EvenementTransitionUpdateArgs<ExtArgs>>): Prisma.Prisma__EvenementTransitionClient<runtime.Types.Result.GetResult<Prisma.$EvenementTransitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EvenementTransitionDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvenementTransitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EvenementTransitionUpdateManyArgs>(args: Prisma.SelectSubset<T, EvenementTransitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends EvenementTransitionUpsertArgs>(args: Prisma.SelectSubset<T, EvenementTransitionUpsertArgs<ExtArgs>>): Prisma.Prisma__EvenementTransitionClient<runtime.Types.Result.GetResult<Prisma.$EvenementTransitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EvenementTransitionCountArgs>(args?: Prisma.Subset<T, EvenementTransitionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EvenementTransitionCountAggregateOutputType> : number>;
    aggregate<T extends EvenementTransitionAggregateArgs>(args: Prisma.Subset<T, EvenementTransitionAggregateArgs>): Prisma.PrismaPromise<GetEvenementTransitionAggregateType<T>>;
    groupBy<T extends EvenementTransitionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EvenementTransitionGroupByArgs['orderBy'];
    } : {
        orderBy?: EvenementTransitionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EvenementTransitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvenementTransitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EvenementTransitionFieldRefs;
}
export interface Prisma__EvenementTransitionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    evenement<T extends Prisma.EvenementIndesirableDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvenementIndesirableDefaultArgs<ExtArgs>>): Prisma.Prisma__EvenementIndesirableClient<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EvenementTransitionFieldRefs {
    readonly id: Prisma.FieldRef<"EvenementTransition", 'String'>;
    readonly evenementId: Prisma.FieldRef<"EvenementTransition", 'String'>;
    readonly ancienStatut: Prisma.FieldRef<"EvenementTransition", 'StatutEi'>;
    readonly nouveauStatut: Prisma.FieldRef<"EvenementTransition", 'StatutEi'>;
    readonly utilisateurId: Prisma.FieldRef<"EvenementTransition", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EvenementTransition", 'DateTime'>;
}
export type EvenementTransitionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementTransitionSelect<ExtArgs> | null;
    omit?: Prisma.EvenementTransitionOmit<ExtArgs> | null;
    include?: Prisma.EvenementTransitionInclude<ExtArgs> | null;
    where: Prisma.EvenementTransitionWhereUniqueInput;
};
export type EvenementTransitionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementTransitionSelect<ExtArgs> | null;
    omit?: Prisma.EvenementTransitionOmit<ExtArgs> | null;
    include?: Prisma.EvenementTransitionInclude<ExtArgs> | null;
    where: Prisma.EvenementTransitionWhereUniqueInput;
};
export type EvenementTransitionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementTransitionSelect<ExtArgs> | null;
    omit?: Prisma.EvenementTransitionOmit<ExtArgs> | null;
    include?: Prisma.EvenementTransitionInclude<ExtArgs> | null;
    where?: Prisma.EvenementTransitionWhereInput;
    orderBy?: Prisma.EvenementTransitionOrderByWithRelationInput | Prisma.EvenementTransitionOrderByWithRelationInput[];
    cursor?: Prisma.EvenementTransitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvenementTransitionScalarFieldEnum | Prisma.EvenementTransitionScalarFieldEnum[];
};
export type EvenementTransitionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementTransitionSelect<ExtArgs> | null;
    omit?: Prisma.EvenementTransitionOmit<ExtArgs> | null;
    include?: Prisma.EvenementTransitionInclude<ExtArgs> | null;
    where?: Prisma.EvenementTransitionWhereInput;
    orderBy?: Prisma.EvenementTransitionOrderByWithRelationInput | Prisma.EvenementTransitionOrderByWithRelationInput[];
    cursor?: Prisma.EvenementTransitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvenementTransitionScalarFieldEnum | Prisma.EvenementTransitionScalarFieldEnum[];
};
export type EvenementTransitionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementTransitionSelect<ExtArgs> | null;
    omit?: Prisma.EvenementTransitionOmit<ExtArgs> | null;
    include?: Prisma.EvenementTransitionInclude<ExtArgs> | null;
    where?: Prisma.EvenementTransitionWhereInput;
    orderBy?: Prisma.EvenementTransitionOrderByWithRelationInput | Prisma.EvenementTransitionOrderByWithRelationInput[];
    cursor?: Prisma.EvenementTransitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvenementTransitionScalarFieldEnum | Prisma.EvenementTransitionScalarFieldEnum[];
};
export type EvenementTransitionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementTransitionSelect<ExtArgs> | null;
    omit?: Prisma.EvenementTransitionOmit<ExtArgs> | null;
    include?: Prisma.EvenementTransitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvenementTransitionCreateInput, Prisma.EvenementTransitionUncheckedCreateInput>;
};
export type EvenementTransitionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EvenementTransitionCreateManyInput | Prisma.EvenementTransitionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EvenementTransitionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementTransitionSelect<ExtArgs> | null;
    omit?: Prisma.EvenementTransitionOmit<ExtArgs> | null;
    include?: Prisma.EvenementTransitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvenementTransitionUpdateInput, Prisma.EvenementTransitionUncheckedUpdateInput>;
    where: Prisma.EvenementTransitionWhereUniqueInput;
};
export type EvenementTransitionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EvenementTransitionUpdateManyMutationInput, Prisma.EvenementTransitionUncheckedUpdateManyInput>;
    where?: Prisma.EvenementTransitionWhereInput;
    limit?: number;
};
export type EvenementTransitionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementTransitionSelect<ExtArgs> | null;
    omit?: Prisma.EvenementTransitionOmit<ExtArgs> | null;
    include?: Prisma.EvenementTransitionInclude<ExtArgs> | null;
    where: Prisma.EvenementTransitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvenementTransitionCreateInput, Prisma.EvenementTransitionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EvenementTransitionUpdateInput, Prisma.EvenementTransitionUncheckedUpdateInput>;
};
export type EvenementTransitionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementTransitionSelect<ExtArgs> | null;
    omit?: Prisma.EvenementTransitionOmit<ExtArgs> | null;
    include?: Prisma.EvenementTransitionInclude<ExtArgs> | null;
    where: Prisma.EvenementTransitionWhereUniqueInput;
};
export type EvenementTransitionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvenementTransitionWhereInput;
    limit?: number;
};
export type EvenementTransitionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementTransitionSelect<ExtArgs> | null;
    omit?: Prisma.EvenementTransitionOmit<ExtArgs> | null;
    include?: Prisma.EvenementTransitionInclude<ExtArgs> | null;
};
