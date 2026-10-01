import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PieceJointeModel = runtime.Types.Result.DefaultSelection<Prisma.$PieceJointePayload>;
export type AggregatePieceJointe = {
    _count: PieceJointeCountAggregateOutputType | null;
    _avg: PieceJointeAvgAggregateOutputType | null;
    _sum: PieceJointeSumAggregateOutputType | null;
    _min: PieceJointeMinAggregateOutputType | null;
    _max: PieceJointeMaxAggregateOutputType | null;
};
export type PieceJointeAvgAggregateOutputType = {
    tailleOctets: number | null;
};
export type PieceJointeSumAggregateOutputType = {
    tailleOctets: number | null;
};
export type PieceJointeMinAggregateOutputType = {
    id: string | null;
    evenementId: string | null;
    url: string | null;
    cloudinaryId: string | null;
    nomFichier: string | null;
    typeMime: string | null;
    tailleOctets: number | null;
    createdAt: Date | null;
};
export type PieceJointeMaxAggregateOutputType = {
    id: string | null;
    evenementId: string | null;
    url: string | null;
    cloudinaryId: string | null;
    nomFichier: string | null;
    typeMime: string | null;
    tailleOctets: number | null;
    createdAt: Date | null;
};
export type PieceJointeCountAggregateOutputType = {
    id: number;
    evenementId: number;
    url: number;
    cloudinaryId: number;
    nomFichier: number;
    typeMime: number;
    tailleOctets: number;
    createdAt: number;
    _all: number;
};
export type PieceJointeAvgAggregateInputType = {
    tailleOctets?: true;
};
export type PieceJointeSumAggregateInputType = {
    tailleOctets?: true;
};
export type PieceJointeMinAggregateInputType = {
    id?: true;
    evenementId?: true;
    url?: true;
    cloudinaryId?: true;
    nomFichier?: true;
    typeMime?: true;
    tailleOctets?: true;
    createdAt?: true;
};
export type PieceJointeMaxAggregateInputType = {
    id?: true;
    evenementId?: true;
    url?: true;
    cloudinaryId?: true;
    nomFichier?: true;
    typeMime?: true;
    tailleOctets?: true;
    createdAt?: true;
};
export type PieceJointeCountAggregateInputType = {
    id?: true;
    evenementId?: true;
    url?: true;
    cloudinaryId?: true;
    nomFichier?: true;
    typeMime?: true;
    tailleOctets?: true;
    createdAt?: true;
    _all?: true;
};
export type PieceJointeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PieceJointeWhereInput;
    orderBy?: Prisma.PieceJointeOrderByWithRelationInput | Prisma.PieceJointeOrderByWithRelationInput[];
    cursor?: Prisma.PieceJointeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PieceJointeCountAggregateInputType;
    _avg?: PieceJointeAvgAggregateInputType;
    _sum?: PieceJointeSumAggregateInputType;
    _min?: PieceJointeMinAggregateInputType;
    _max?: PieceJointeMaxAggregateInputType;
};
export type GetPieceJointeAggregateType<T extends PieceJointeAggregateArgs> = {
    [P in keyof T & keyof AggregatePieceJointe]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePieceJointe[P]> : Prisma.GetScalarType<T[P], AggregatePieceJointe[P]>;
};
export type PieceJointeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PieceJointeWhereInput;
    orderBy?: Prisma.PieceJointeOrderByWithAggregationInput | Prisma.PieceJointeOrderByWithAggregationInput[];
    by: Prisma.PieceJointeScalarFieldEnum[] | Prisma.PieceJointeScalarFieldEnum;
    having?: Prisma.PieceJointeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PieceJointeCountAggregateInputType | true;
    _avg?: PieceJointeAvgAggregateInputType;
    _sum?: PieceJointeSumAggregateInputType;
    _min?: PieceJointeMinAggregateInputType;
    _max?: PieceJointeMaxAggregateInputType;
};
export type PieceJointeGroupByOutputType = {
    id: string;
    evenementId: string;
    url: string;
    cloudinaryId: string;
    nomFichier: string;
    typeMime: string | null;
    tailleOctets: number | null;
    createdAt: Date;
    _count: PieceJointeCountAggregateOutputType | null;
    _avg: PieceJointeAvgAggregateOutputType | null;
    _sum: PieceJointeSumAggregateOutputType | null;
    _min: PieceJointeMinAggregateOutputType | null;
    _max: PieceJointeMaxAggregateOutputType | null;
};
export type GetPieceJointeGroupByPayload<T extends PieceJointeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PieceJointeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PieceJointeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PieceJointeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PieceJointeGroupByOutputType[P]>;
}>>;
export type PieceJointeWhereInput = {
    AND?: Prisma.PieceJointeWhereInput | Prisma.PieceJointeWhereInput[];
    OR?: Prisma.PieceJointeWhereInput[];
    NOT?: Prisma.PieceJointeWhereInput | Prisma.PieceJointeWhereInput[];
    id?: Prisma.StringFilter<"PieceJointe"> | string;
    evenementId?: Prisma.StringFilter<"PieceJointe"> | string;
    url?: Prisma.StringFilter<"PieceJointe"> | string;
    cloudinaryId?: Prisma.StringFilter<"PieceJointe"> | string;
    nomFichier?: Prisma.StringFilter<"PieceJointe"> | string;
    typeMime?: Prisma.StringNullableFilter<"PieceJointe"> | string | null;
    tailleOctets?: Prisma.IntNullableFilter<"PieceJointe"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"PieceJointe"> | Date | string;
    evenement?: Prisma.XOR<Prisma.EvenementIndesirableScalarRelationFilter, Prisma.EvenementIndesirableWhereInput>;
};
export type PieceJointeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    cloudinaryId?: Prisma.SortOrder;
    nomFichier?: Prisma.SortOrder;
    typeMime?: Prisma.SortOrderInput | Prisma.SortOrder;
    tailleOctets?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    evenement?: Prisma.EvenementIndesirableOrderByWithRelationInput;
    _relevance?: Prisma.PieceJointeOrderByRelevanceInput;
};
export type PieceJointeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PieceJointeWhereInput | Prisma.PieceJointeWhereInput[];
    OR?: Prisma.PieceJointeWhereInput[];
    NOT?: Prisma.PieceJointeWhereInput | Prisma.PieceJointeWhereInput[];
    evenementId?: Prisma.StringFilter<"PieceJointe"> | string;
    url?: Prisma.StringFilter<"PieceJointe"> | string;
    cloudinaryId?: Prisma.StringFilter<"PieceJointe"> | string;
    nomFichier?: Prisma.StringFilter<"PieceJointe"> | string;
    typeMime?: Prisma.StringNullableFilter<"PieceJointe"> | string | null;
    tailleOctets?: Prisma.IntNullableFilter<"PieceJointe"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"PieceJointe"> | Date | string;
    evenement?: Prisma.XOR<Prisma.EvenementIndesirableScalarRelationFilter, Prisma.EvenementIndesirableWhereInput>;
}, "id">;
export type PieceJointeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    cloudinaryId?: Prisma.SortOrder;
    nomFichier?: Prisma.SortOrder;
    typeMime?: Prisma.SortOrderInput | Prisma.SortOrder;
    tailleOctets?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PieceJointeCountOrderByAggregateInput;
    _avg?: Prisma.PieceJointeAvgOrderByAggregateInput;
    _max?: Prisma.PieceJointeMaxOrderByAggregateInput;
    _min?: Prisma.PieceJointeMinOrderByAggregateInput;
    _sum?: Prisma.PieceJointeSumOrderByAggregateInput;
};
export type PieceJointeScalarWhereWithAggregatesInput = {
    AND?: Prisma.PieceJointeScalarWhereWithAggregatesInput | Prisma.PieceJointeScalarWhereWithAggregatesInput[];
    OR?: Prisma.PieceJointeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PieceJointeScalarWhereWithAggregatesInput | Prisma.PieceJointeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PieceJointe"> | string;
    evenementId?: Prisma.StringWithAggregatesFilter<"PieceJointe"> | string;
    url?: Prisma.StringWithAggregatesFilter<"PieceJointe"> | string;
    cloudinaryId?: Prisma.StringWithAggregatesFilter<"PieceJointe"> | string;
    nomFichier?: Prisma.StringWithAggregatesFilter<"PieceJointe"> | string;
    typeMime?: Prisma.StringNullableWithAggregatesFilter<"PieceJointe"> | string | null;
    tailleOctets?: Prisma.IntNullableWithAggregatesFilter<"PieceJointe"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PieceJointe"> | Date | string;
};
export type PieceJointeCreateInput = {
    id?: string;
    url: string;
    cloudinaryId: string;
    nomFichier: string;
    typeMime?: string | null;
    tailleOctets?: number | null;
    createdAt?: Date | string;
    evenement: Prisma.EvenementIndesirableCreateNestedOneWithoutPiecesJointesInput;
};
export type PieceJointeUncheckedCreateInput = {
    id?: string;
    evenementId: string;
    url: string;
    cloudinaryId: string;
    nomFichier: string;
    typeMime?: string | null;
    tailleOctets?: number | null;
    createdAt?: Date | string;
};
export type PieceJointeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    cloudinaryId?: Prisma.StringFieldUpdateOperationsInput | string;
    nomFichier?: Prisma.StringFieldUpdateOperationsInput | string;
    typeMime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tailleOctets?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evenement?: Prisma.EvenementIndesirableUpdateOneRequiredWithoutPiecesJointesNestedInput;
};
export type PieceJointeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evenementId?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    cloudinaryId?: Prisma.StringFieldUpdateOperationsInput | string;
    nomFichier?: Prisma.StringFieldUpdateOperationsInput | string;
    typeMime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tailleOctets?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PieceJointeCreateManyInput = {
    id?: string;
    evenementId: string;
    url: string;
    cloudinaryId: string;
    nomFichier: string;
    typeMime?: string | null;
    tailleOctets?: number | null;
    createdAt?: Date | string;
};
export type PieceJointeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    cloudinaryId?: Prisma.StringFieldUpdateOperationsInput | string;
    nomFichier?: Prisma.StringFieldUpdateOperationsInput | string;
    typeMime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tailleOctets?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PieceJointeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    evenementId?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    cloudinaryId?: Prisma.StringFieldUpdateOperationsInput | string;
    nomFichier?: Prisma.StringFieldUpdateOperationsInput | string;
    typeMime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tailleOctets?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PieceJointeListRelationFilter = {
    every?: Prisma.PieceJointeWhereInput;
    some?: Prisma.PieceJointeWhereInput;
    none?: Prisma.PieceJointeWhereInput;
};
export type PieceJointeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PieceJointeOrderByRelevanceInput = {
    fields: Prisma.PieceJointeOrderByRelevanceFieldEnum | Prisma.PieceJointeOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type PieceJointeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    cloudinaryId?: Prisma.SortOrder;
    nomFichier?: Prisma.SortOrder;
    typeMime?: Prisma.SortOrder;
    tailleOctets?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PieceJointeAvgOrderByAggregateInput = {
    tailleOctets?: Prisma.SortOrder;
};
export type PieceJointeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    cloudinaryId?: Prisma.SortOrder;
    nomFichier?: Prisma.SortOrder;
    typeMime?: Prisma.SortOrder;
    tailleOctets?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PieceJointeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    evenementId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    cloudinaryId?: Prisma.SortOrder;
    nomFichier?: Prisma.SortOrder;
    typeMime?: Prisma.SortOrder;
    tailleOctets?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PieceJointeSumOrderByAggregateInput = {
    tailleOctets?: Prisma.SortOrder;
};
export type PieceJointeCreateNestedManyWithoutEvenementInput = {
    create?: Prisma.XOR<Prisma.PieceJointeCreateWithoutEvenementInput, Prisma.PieceJointeUncheckedCreateWithoutEvenementInput> | Prisma.PieceJointeCreateWithoutEvenementInput[] | Prisma.PieceJointeUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.PieceJointeCreateOrConnectWithoutEvenementInput | Prisma.PieceJointeCreateOrConnectWithoutEvenementInput[];
    createMany?: Prisma.PieceJointeCreateManyEvenementInputEnvelope;
    connect?: Prisma.PieceJointeWhereUniqueInput | Prisma.PieceJointeWhereUniqueInput[];
};
export type PieceJointeUncheckedCreateNestedManyWithoutEvenementInput = {
    create?: Prisma.XOR<Prisma.PieceJointeCreateWithoutEvenementInput, Prisma.PieceJointeUncheckedCreateWithoutEvenementInput> | Prisma.PieceJointeCreateWithoutEvenementInput[] | Prisma.PieceJointeUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.PieceJointeCreateOrConnectWithoutEvenementInput | Prisma.PieceJointeCreateOrConnectWithoutEvenementInput[];
    createMany?: Prisma.PieceJointeCreateManyEvenementInputEnvelope;
    connect?: Prisma.PieceJointeWhereUniqueInput | Prisma.PieceJointeWhereUniqueInput[];
};
export type PieceJointeUpdateManyWithoutEvenementNestedInput = {
    create?: Prisma.XOR<Prisma.PieceJointeCreateWithoutEvenementInput, Prisma.PieceJointeUncheckedCreateWithoutEvenementInput> | Prisma.PieceJointeCreateWithoutEvenementInput[] | Prisma.PieceJointeUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.PieceJointeCreateOrConnectWithoutEvenementInput | Prisma.PieceJointeCreateOrConnectWithoutEvenementInput[];
    upsert?: Prisma.PieceJointeUpsertWithWhereUniqueWithoutEvenementInput | Prisma.PieceJointeUpsertWithWhereUniqueWithoutEvenementInput[];
    createMany?: Prisma.PieceJointeCreateManyEvenementInputEnvelope;
    set?: Prisma.PieceJointeWhereUniqueInput | Prisma.PieceJointeWhereUniqueInput[];
    disconnect?: Prisma.PieceJointeWhereUniqueInput | Prisma.PieceJointeWhereUniqueInput[];
    delete?: Prisma.PieceJointeWhereUniqueInput | Prisma.PieceJointeWhereUniqueInput[];
    connect?: Prisma.PieceJointeWhereUniqueInput | Prisma.PieceJointeWhereUniqueInput[];
    update?: Prisma.PieceJointeUpdateWithWhereUniqueWithoutEvenementInput | Prisma.PieceJointeUpdateWithWhereUniqueWithoutEvenementInput[];
    updateMany?: Prisma.PieceJointeUpdateManyWithWhereWithoutEvenementInput | Prisma.PieceJointeUpdateManyWithWhereWithoutEvenementInput[];
    deleteMany?: Prisma.PieceJointeScalarWhereInput | Prisma.PieceJointeScalarWhereInput[];
};
export type PieceJointeUncheckedUpdateManyWithoutEvenementNestedInput = {
    create?: Prisma.XOR<Prisma.PieceJointeCreateWithoutEvenementInput, Prisma.PieceJointeUncheckedCreateWithoutEvenementInput> | Prisma.PieceJointeCreateWithoutEvenementInput[] | Prisma.PieceJointeUncheckedCreateWithoutEvenementInput[];
    connectOrCreate?: Prisma.PieceJointeCreateOrConnectWithoutEvenementInput | Prisma.PieceJointeCreateOrConnectWithoutEvenementInput[];
    upsert?: Prisma.PieceJointeUpsertWithWhereUniqueWithoutEvenementInput | Prisma.PieceJointeUpsertWithWhereUniqueWithoutEvenementInput[];
    createMany?: Prisma.PieceJointeCreateManyEvenementInputEnvelope;
    set?: Prisma.PieceJointeWhereUniqueInput | Prisma.PieceJointeWhereUniqueInput[];
    disconnect?: Prisma.PieceJointeWhereUniqueInput | Prisma.PieceJointeWhereUniqueInput[];
    delete?: Prisma.PieceJointeWhereUniqueInput | Prisma.PieceJointeWhereUniqueInput[];
    connect?: Prisma.PieceJointeWhereUniqueInput | Prisma.PieceJointeWhereUniqueInput[];
    update?: Prisma.PieceJointeUpdateWithWhereUniqueWithoutEvenementInput | Prisma.PieceJointeUpdateWithWhereUniqueWithoutEvenementInput[];
    updateMany?: Prisma.PieceJointeUpdateManyWithWhereWithoutEvenementInput | Prisma.PieceJointeUpdateManyWithWhereWithoutEvenementInput[];
    deleteMany?: Prisma.PieceJointeScalarWhereInput | Prisma.PieceJointeScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PieceJointeCreateWithoutEvenementInput = {
    id?: string;
    url: string;
    cloudinaryId: string;
    nomFichier: string;
    typeMime?: string | null;
    tailleOctets?: number | null;
    createdAt?: Date | string;
};
export type PieceJointeUncheckedCreateWithoutEvenementInput = {
    id?: string;
    url: string;
    cloudinaryId: string;
    nomFichier: string;
    typeMime?: string | null;
    tailleOctets?: number | null;
    createdAt?: Date | string;
};
export type PieceJointeCreateOrConnectWithoutEvenementInput = {
    where: Prisma.PieceJointeWhereUniqueInput;
    create: Prisma.XOR<Prisma.PieceJointeCreateWithoutEvenementInput, Prisma.PieceJointeUncheckedCreateWithoutEvenementInput>;
};
export type PieceJointeCreateManyEvenementInputEnvelope = {
    data: Prisma.PieceJointeCreateManyEvenementInput | Prisma.PieceJointeCreateManyEvenementInput[];
    skipDuplicates?: boolean;
};
export type PieceJointeUpsertWithWhereUniqueWithoutEvenementInput = {
    where: Prisma.PieceJointeWhereUniqueInput;
    update: Prisma.XOR<Prisma.PieceJointeUpdateWithoutEvenementInput, Prisma.PieceJointeUncheckedUpdateWithoutEvenementInput>;
    create: Prisma.XOR<Prisma.PieceJointeCreateWithoutEvenementInput, Prisma.PieceJointeUncheckedCreateWithoutEvenementInput>;
};
export type PieceJointeUpdateWithWhereUniqueWithoutEvenementInput = {
    where: Prisma.PieceJointeWhereUniqueInput;
    data: Prisma.XOR<Prisma.PieceJointeUpdateWithoutEvenementInput, Prisma.PieceJointeUncheckedUpdateWithoutEvenementInput>;
};
export type PieceJointeUpdateManyWithWhereWithoutEvenementInput = {
    where: Prisma.PieceJointeScalarWhereInput;
    data: Prisma.XOR<Prisma.PieceJointeUpdateManyMutationInput, Prisma.PieceJointeUncheckedUpdateManyWithoutEvenementInput>;
};
export type PieceJointeScalarWhereInput = {
    AND?: Prisma.PieceJointeScalarWhereInput | Prisma.PieceJointeScalarWhereInput[];
    OR?: Prisma.PieceJointeScalarWhereInput[];
    NOT?: Prisma.PieceJointeScalarWhereInput | Prisma.PieceJointeScalarWhereInput[];
    id?: Prisma.StringFilter<"PieceJointe"> | string;
    evenementId?: Prisma.StringFilter<"PieceJointe"> | string;
    url?: Prisma.StringFilter<"PieceJointe"> | string;
    cloudinaryId?: Prisma.StringFilter<"PieceJointe"> | string;
    nomFichier?: Prisma.StringFilter<"PieceJointe"> | string;
    typeMime?: Prisma.StringNullableFilter<"PieceJointe"> | string | null;
    tailleOctets?: Prisma.IntNullableFilter<"PieceJointe"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"PieceJointe"> | Date | string;
};
export type PieceJointeCreateManyEvenementInput = {
    id?: string;
    url: string;
    cloudinaryId: string;
    nomFichier: string;
    typeMime?: string | null;
    tailleOctets?: number | null;
    createdAt?: Date | string;
};
export type PieceJointeUpdateWithoutEvenementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    cloudinaryId?: Prisma.StringFieldUpdateOperationsInput | string;
    nomFichier?: Prisma.StringFieldUpdateOperationsInput | string;
    typeMime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tailleOctets?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PieceJointeUncheckedUpdateWithoutEvenementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    cloudinaryId?: Prisma.StringFieldUpdateOperationsInput | string;
    nomFichier?: Prisma.StringFieldUpdateOperationsInput | string;
    typeMime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tailleOctets?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PieceJointeUncheckedUpdateManyWithoutEvenementInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    cloudinaryId?: Prisma.StringFieldUpdateOperationsInput | string;
    nomFichier?: Prisma.StringFieldUpdateOperationsInput | string;
    typeMime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tailleOctets?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PieceJointeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    evenementId?: boolean;
    url?: boolean;
    cloudinaryId?: boolean;
    nomFichier?: boolean;
    typeMime?: boolean;
    tailleOctets?: boolean;
    createdAt?: boolean;
    evenement?: boolean | Prisma.EvenementIndesirableDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pieceJointe"]>;
export type PieceJointeSelectScalar = {
    id?: boolean;
    evenementId?: boolean;
    url?: boolean;
    cloudinaryId?: boolean;
    nomFichier?: boolean;
    typeMime?: boolean;
    tailleOctets?: boolean;
    createdAt?: boolean;
};
export type PieceJointeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "evenementId" | "url" | "cloudinaryId" | "nomFichier" | "typeMime" | "tailleOctets" | "createdAt", ExtArgs["result"]["pieceJointe"]>;
export type PieceJointeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evenement?: boolean | Prisma.EvenementIndesirableDefaultArgs<ExtArgs>;
};
export type $PieceJointePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PieceJointe";
    objects: {
        evenement: Prisma.$EvenementIndesirablePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        evenementId: string;
        url: string;
        cloudinaryId: string;
        nomFichier: string;
        typeMime: string | null;
        tailleOctets: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["pieceJointe"]>;
    composites: {};
};
export type PieceJointeGetPayload<S extends boolean | null | undefined | PieceJointeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PieceJointePayload, S>;
export type PieceJointeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PieceJointeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PieceJointeCountAggregateInputType | true;
};
export interface PieceJointeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PieceJointe'];
        meta: {
            name: 'PieceJointe';
        };
    };
    findUnique<T extends PieceJointeFindUniqueArgs>(args: Prisma.SelectSubset<T, PieceJointeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PieceJointeClient<runtime.Types.Result.GetResult<Prisma.$PieceJointePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PieceJointeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PieceJointeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PieceJointeClient<runtime.Types.Result.GetResult<Prisma.$PieceJointePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PieceJointeFindFirstArgs>(args?: Prisma.SelectSubset<T, PieceJointeFindFirstArgs<ExtArgs>>): Prisma.Prisma__PieceJointeClient<runtime.Types.Result.GetResult<Prisma.$PieceJointePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PieceJointeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PieceJointeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PieceJointeClient<runtime.Types.Result.GetResult<Prisma.$PieceJointePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PieceJointeFindManyArgs>(args?: Prisma.SelectSubset<T, PieceJointeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PieceJointePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PieceJointeCreateArgs>(args: Prisma.SelectSubset<T, PieceJointeCreateArgs<ExtArgs>>): Prisma.Prisma__PieceJointeClient<runtime.Types.Result.GetResult<Prisma.$PieceJointePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PieceJointeCreateManyArgs>(args?: Prisma.SelectSubset<T, PieceJointeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends PieceJointeDeleteArgs>(args: Prisma.SelectSubset<T, PieceJointeDeleteArgs<ExtArgs>>): Prisma.Prisma__PieceJointeClient<runtime.Types.Result.GetResult<Prisma.$PieceJointePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PieceJointeUpdateArgs>(args: Prisma.SelectSubset<T, PieceJointeUpdateArgs<ExtArgs>>): Prisma.Prisma__PieceJointeClient<runtime.Types.Result.GetResult<Prisma.$PieceJointePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PieceJointeDeleteManyArgs>(args?: Prisma.SelectSubset<T, PieceJointeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PieceJointeUpdateManyArgs>(args: Prisma.SelectSubset<T, PieceJointeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends PieceJointeUpsertArgs>(args: Prisma.SelectSubset<T, PieceJointeUpsertArgs<ExtArgs>>): Prisma.Prisma__PieceJointeClient<runtime.Types.Result.GetResult<Prisma.$PieceJointePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PieceJointeCountArgs>(args?: Prisma.Subset<T, PieceJointeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PieceJointeCountAggregateOutputType> : number>;
    aggregate<T extends PieceJointeAggregateArgs>(args: Prisma.Subset<T, PieceJointeAggregateArgs>): Prisma.PrismaPromise<GetPieceJointeAggregateType<T>>;
    groupBy<T extends PieceJointeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PieceJointeGroupByArgs['orderBy'];
    } : {
        orderBy?: PieceJointeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PieceJointeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPieceJointeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PieceJointeFieldRefs;
}
export interface Prisma__PieceJointeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    evenement<T extends Prisma.EvenementIndesirableDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvenementIndesirableDefaultArgs<ExtArgs>>): Prisma.Prisma__EvenementIndesirableClient<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PieceJointeFieldRefs {
    readonly id: Prisma.FieldRef<"PieceJointe", 'String'>;
    readonly evenementId: Prisma.FieldRef<"PieceJointe", 'String'>;
    readonly url: Prisma.FieldRef<"PieceJointe", 'String'>;
    readonly cloudinaryId: Prisma.FieldRef<"PieceJointe", 'String'>;
    readonly nomFichier: Prisma.FieldRef<"PieceJointe", 'String'>;
    readonly typeMime: Prisma.FieldRef<"PieceJointe", 'String'>;
    readonly tailleOctets: Prisma.FieldRef<"PieceJointe", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"PieceJointe", 'DateTime'>;
}
export type PieceJointeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PieceJointeSelect<ExtArgs> | null;
    omit?: Prisma.PieceJointeOmit<ExtArgs> | null;
    include?: Prisma.PieceJointeInclude<ExtArgs> | null;
    where: Prisma.PieceJointeWhereUniqueInput;
};
export type PieceJointeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PieceJointeSelect<ExtArgs> | null;
    omit?: Prisma.PieceJointeOmit<ExtArgs> | null;
    include?: Prisma.PieceJointeInclude<ExtArgs> | null;
    where: Prisma.PieceJointeWhereUniqueInput;
};
export type PieceJointeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PieceJointeSelect<ExtArgs> | null;
    omit?: Prisma.PieceJointeOmit<ExtArgs> | null;
    include?: Prisma.PieceJointeInclude<ExtArgs> | null;
    where?: Prisma.PieceJointeWhereInput;
    orderBy?: Prisma.PieceJointeOrderByWithRelationInput | Prisma.PieceJointeOrderByWithRelationInput[];
    cursor?: Prisma.PieceJointeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PieceJointeScalarFieldEnum | Prisma.PieceJointeScalarFieldEnum[];
};
export type PieceJointeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PieceJointeSelect<ExtArgs> | null;
    omit?: Prisma.PieceJointeOmit<ExtArgs> | null;
    include?: Prisma.PieceJointeInclude<ExtArgs> | null;
    where?: Prisma.PieceJointeWhereInput;
    orderBy?: Prisma.PieceJointeOrderByWithRelationInput | Prisma.PieceJointeOrderByWithRelationInput[];
    cursor?: Prisma.PieceJointeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PieceJointeScalarFieldEnum | Prisma.PieceJointeScalarFieldEnum[];
};
export type PieceJointeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PieceJointeSelect<ExtArgs> | null;
    omit?: Prisma.PieceJointeOmit<ExtArgs> | null;
    include?: Prisma.PieceJointeInclude<ExtArgs> | null;
    where?: Prisma.PieceJointeWhereInput;
    orderBy?: Prisma.PieceJointeOrderByWithRelationInput | Prisma.PieceJointeOrderByWithRelationInput[];
    cursor?: Prisma.PieceJointeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PieceJointeScalarFieldEnum | Prisma.PieceJointeScalarFieldEnum[];
};
export type PieceJointeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PieceJointeSelect<ExtArgs> | null;
    omit?: Prisma.PieceJointeOmit<ExtArgs> | null;
    include?: Prisma.PieceJointeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PieceJointeCreateInput, Prisma.PieceJointeUncheckedCreateInput>;
};
export type PieceJointeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PieceJointeCreateManyInput | Prisma.PieceJointeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PieceJointeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PieceJointeSelect<ExtArgs> | null;
    omit?: Prisma.PieceJointeOmit<ExtArgs> | null;
    include?: Prisma.PieceJointeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PieceJointeUpdateInput, Prisma.PieceJointeUncheckedUpdateInput>;
    where: Prisma.PieceJointeWhereUniqueInput;
};
export type PieceJointeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PieceJointeUpdateManyMutationInput, Prisma.PieceJointeUncheckedUpdateManyInput>;
    where?: Prisma.PieceJointeWhereInput;
    limit?: number;
};
export type PieceJointeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PieceJointeSelect<ExtArgs> | null;
    omit?: Prisma.PieceJointeOmit<ExtArgs> | null;
    include?: Prisma.PieceJointeInclude<ExtArgs> | null;
    where: Prisma.PieceJointeWhereUniqueInput;
    create: Prisma.XOR<Prisma.PieceJointeCreateInput, Prisma.PieceJointeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PieceJointeUpdateInput, Prisma.PieceJointeUncheckedUpdateInput>;
};
export type PieceJointeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PieceJointeSelect<ExtArgs> | null;
    omit?: Prisma.PieceJointeOmit<ExtArgs> | null;
    include?: Prisma.PieceJointeInclude<ExtArgs> | null;
    where: Prisma.PieceJointeWhereUniqueInput;
};
export type PieceJointeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PieceJointeWhereInput;
    limit?: number;
};
export type PieceJointeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PieceJointeSelect<ExtArgs> | null;
    omit?: Prisma.PieceJointeOmit<ExtArgs> | null;
    include?: Prisma.PieceJointeInclude<ExtArgs> | null;
};
