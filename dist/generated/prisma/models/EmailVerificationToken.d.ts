import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmailVerificationTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$EmailVerificationTokenPayload>;
export type AggregateEmailVerificationToken = {
    _count: EmailVerificationTokenCountAggregateOutputType | null;
    _min: EmailVerificationTokenMinAggregateOutputType | null;
    _max: EmailVerificationTokenMaxAggregateOutputType | null;
};
export type EmailVerificationTokenMinAggregateOutputType = {
    id: string | null;
    utilisateurId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    usedAt: Date | null;
    createdAt: Date | null;
};
export type EmailVerificationTokenMaxAggregateOutputType = {
    id: string | null;
    utilisateurId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    usedAt: Date | null;
    createdAt: Date | null;
};
export type EmailVerificationTokenCountAggregateOutputType = {
    id: number;
    utilisateurId: number;
    tokenHash: number;
    expiresAt: number;
    usedAt: number;
    createdAt: number;
    _all: number;
};
export type EmailVerificationTokenMinAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    tokenHash?: true;
    expiresAt?: true;
    usedAt?: true;
    createdAt?: true;
};
export type EmailVerificationTokenMaxAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    tokenHash?: true;
    expiresAt?: true;
    usedAt?: true;
    createdAt?: true;
};
export type EmailVerificationTokenCountAggregateInputType = {
    id?: true;
    utilisateurId?: true;
    tokenHash?: true;
    expiresAt?: true;
    usedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type EmailVerificationTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmailVerificationTokenWhereInput;
    orderBy?: Prisma.EmailVerificationTokenOrderByWithRelationInput | Prisma.EmailVerificationTokenOrderByWithRelationInput[];
    cursor?: Prisma.EmailVerificationTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmailVerificationTokenCountAggregateInputType;
    _min?: EmailVerificationTokenMinAggregateInputType;
    _max?: EmailVerificationTokenMaxAggregateInputType;
};
export type GetEmailVerificationTokenAggregateType<T extends EmailVerificationTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateEmailVerificationToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmailVerificationToken[P]> : Prisma.GetScalarType<T[P], AggregateEmailVerificationToken[P]>;
};
export type EmailVerificationTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmailVerificationTokenWhereInput;
    orderBy?: Prisma.EmailVerificationTokenOrderByWithAggregationInput | Prisma.EmailVerificationTokenOrderByWithAggregationInput[];
    by: Prisma.EmailVerificationTokenScalarFieldEnum[] | Prisma.EmailVerificationTokenScalarFieldEnum;
    having?: Prisma.EmailVerificationTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmailVerificationTokenCountAggregateInputType | true;
    _min?: EmailVerificationTokenMinAggregateInputType;
    _max?: EmailVerificationTokenMaxAggregateInputType;
};
export type EmailVerificationTokenGroupByOutputType = {
    id: string;
    utilisateurId: string;
    tokenHash: string;
    expiresAt: Date;
    usedAt: Date | null;
    createdAt: Date;
    _count: EmailVerificationTokenCountAggregateOutputType | null;
    _min: EmailVerificationTokenMinAggregateOutputType | null;
    _max: EmailVerificationTokenMaxAggregateOutputType | null;
};
export type GetEmailVerificationTokenGroupByPayload<T extends EmailVerificationTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmailVerificationTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmailVerificationTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>;
}>>;
export type EmailVerificationTokenWhereInput = {
    AND?: Prisma.EmailVerificationTokenWhereInput | Prisma.EmailVerificationTokenWhereInput[];
    OR?: Prisma.EmailVerificationTokenWhereInput[];
    NOT?: Prisma.EmailVerificationTokenWhereInput | Prisma.EmailVerificationTokenWhereInput[];
    id?: Prisma.StringFilter<"EmailVerificationToken"> | string;
    utilisateurId?: Prisma.StringFilter<"EmailVerificationToken"> | string;
    tokenHash?: Prisma.StringFilter<"EmailVerificationToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"EmailVerificationToken"> | Date | string;
    usedAt?: Prisma.DateTimeNullableFilter<"EmailVerificationToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmailVerificationToken"> | Date | string;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
};
export type EmailVerificationTokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
    _relevance?: Prisma.EmailVerificationTokenOrderByRelevanceInput;
};
export type EmailVerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    AND?: Prisma.EmailVerificationTokenWhereInput | Prisma.EmailVerificationTokenWhereInput[];
    OR?: Prisma.EmailVerificationTokenWhereInput[];
    NOT?: Prisma.EmailVerificationTokenWhereInput | Prisma.EmailVerificationTokenWhereInput[];
    utilisateurId?: Prisma.StringFilter<"EmailVerificationToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"EmailVerificationToken"> | Date | string;
    usedAt?: Prisma.DateTimeNullableFilter<"EmailVerificationToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmailVerificationToken"> | Date | string;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
}, "id" | "tokenHash">;
export type EmailVerificationTokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EmailVerificationTokenCountOrderByAggregateInput;
    _max?: Prisma.EmailVerificationTokenMaxOrderByAggregateInput;
    _min?: Prisma.EmailVerificationTokenMinOrderByAggregateInput;
};
export type EmailVerificationTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmailVerificationTokenScalarWhereWithAggregatesInput | Prisma.EmailVerificationTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmailVerificationTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmailVerificationTokenScalarWhereWithAggregatesInput | Prisma.EmailVerificationTokenScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EmailVerificationToken"> | string;
    utilisateurId?: Prisma.StringWithAggregatesFilter<"EmailVerificationToken"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"EmailVerificationToken"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string;
    usedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EmailVerificationToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string;
};
export type EmailVerificationTokenCreateInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutEmailVerificationTokensInput;
};
export type EmailVerificationTokenUncheckedCreateInput = {
    id?: string;
    utilisateurId: string;
    tokenHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmailVerificationTokenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutEmailVerificationTokensNestedInput;
};
export type EmailVerificationTokenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailVerificationTokenCreateManyInput = {
    id?: string;
    utilisateurId: string;
    tokenHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmailVerificationTokenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailVerificationTokenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailVerificationTokenListRelationFilter = {
    every?: Prisma.EmailVerificationTokenWhereInput;
    some?: Prisma.EmailVerificationTokenWhereInput;
    none?: Prisma.EmailVerificationTokenWhereInput;
};
export type EmailVerificationTokenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmailVerificationTokenOrderByRelevanceInput = {
    fields: Prisma.EmailVerificationTokenOrderByRelevanceFieldEnum | Prisma.EmailVerificationTokenOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type EmailVerificationTokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmailVerificationTokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmailVerificationTokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmailVerificationTokenCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.EmailVerificationTokenCreateWithoutUtilisateurInput, Prisma.EmailVerificationTokenUncheckedCreateWithoutUtilisateurInput> | Prisma.EmailVerificationTokenCreateWithoutUtilisateurInput[] | Prisma.EmailVerificationTokenUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.EmailVerificationTokenCreateOrConnectWithoutUtilisateurInput | Prisma.EmailVerificationTokenCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.EmailVerificationTokenCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.EmailVerificationTokenWhereUniqueInput | Prisma.EmailVerificationTokenWhereUniqueInput[];
};
export type EmailVerificationTokenUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.EmailVerificationTokenCreateWithoutUtilisateurInput, Prisma.EmailVerificationTokenUncheckedCreateWithoutUtilisateurInput> | Prisma.EmailVerificationTokenCreateWithoutUtilisateurInput[] | Prisma.EmailVerificationTokenUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.EmailVerificationTokenCreateOrConnectWithoutUtilisateurInput | Prisma.EmailVerificationTokenCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.EmailVerificationTokenCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.EmailVerificationTokenWhereUniqueInput | Prisma.EmailVerificationTokenWhereUniqueInput[];
};
export type EmailVerificationTokenUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.EmailVerificationTokenCreateWithoutUtilisateurInput, Prisma.EmailVerificationTokenUncheckedCreateWithoutUtilisateurInput> | Prisma.EmailVerificationTokenCreateWithoutUtilisateurInput[] | Prisma.EmailVerificationTokenUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.EmailVerificationTokenCreateOrConnectWithoutUtilisateurInput | Prisma.EmailVerificationTokenCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.EmailVerificationTokenUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.EmailVerificationTokenUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.EmailVerificationTokenCreateManyUtilisateurInputEnvelope;
    set?: Prisma.EmailVerificationTokenWhereUniqueInput | Prisma.EmailVerificationTokenWhereUniqueInput[];
    disconnect?: Prisma.EmailVerificationTokenWhereUniqueInput | Prisma.EmailVerificationTokenWhereUniqueInput[];
    delete?: Prisma.EmailVerificationTokenWhereUniqueInput | Prisma.EmailVerificationTokenWhereUniqueInput[];
    connect?: Prisma.EmailVerificationTokenWhereUniqueInput | Prisma.EmailVerificationTokenWhereUniqueInput[];
    update?: Prisma.EmailVerificationTokenUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.EmailVerificationTokenUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.EmailVerificationTokenUpdateManyWithWhereWithoutUtilisateurInput | Prisma.EmailVerificationTokenUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.EmailVerificationTokenScalarWhereInput | Prisma.EmailVerificationTokenScalarWhereInput[];
};
export type EmailVerificationTokenUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.EmailVerificationTokenCreateWithoutUtilisateurInput, Prisma.EmailVerificationTokenUncheckedCreateWithoutUtilisateurInput> | Prisma.EmailVerificationTokenCreateWithoutUtilisateurInput[] | Prisma.EmailVerificationTokenUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.EmailVerificationTokenCreateOrConnectWithoutUtilisateurInput | Prisma.EmailVerificationTokenCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.EmailVerificationTokenUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.EmailVerificationTokenUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.EmailVerificationTokenCreateManyUtilisateurInputEnvelope;
    set?: Prisma.EmailVerificationTokenWhereUniqueInput | Prisma.EmailVerificationTokenWhereUniqueInput[];
    disconnect?: Prisma.EmailVerificationTokenWhereUniqueInput | Prisma.EmailVerificationTokenWhereUniqueInput[];
    delete?: Prisma.EmailVerificationTokenWhereUniqueInput | Prisma.EmailVerificationTokenWhereUniqueInput[];
    connect?: Prisma.EmailVerificationTokenWhereUniqueInput | Prisma.EmailVerificationTokenWhereUniqueInput[];
    update?: Prisma.EmailVerificationTokenUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.EmailVerificationTokenUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.EmailVerificationTokenUpdateManyWithWhereWithoutUtilisateurInput | Prisma.EmailVerificationTokenUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.EmailVerificationTokenScalarWhereInput | Prisma.EmailVerificationTokenScalarWhereInput[];
};
export type EmailVerificationTokenCreateWithoutUtilisateurInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmailVerificationTokenUncheckedCreateWithoutUtilisateurInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmailVerificationTokenCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.EmailVerificationTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmailVerificationTokenCreateWithoutUtilisateurInput, Prisma.EmailVerificationTokenUncheckedCreateWithoutUtilisateurInput>;
};
export type EmailVerificationTokenCreateManyUtilisateurInputEnvelope = {
    data: Prisma.EmailVerificationTokenCreateManyUtilisateurInput | Prisma.EmailVerificationTokenCreateManyUtilisateurInput[];
    skipDuplicates?: boolean;
};
export type EmailVerificationTokenUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.EmailVerificationTokenWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmailVerificationTokenUpdateWithoutUtilisateurInput, Prisma.EmailVerificationTokenUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.EmailVerificationTokenCreateWithoutUtilisateurInput, Prisma.EmailVerificationTokenUncheckedCreateWithoutUtilisateurInput>;
};
export type EmailVerificationTokenUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.EmailVerificationTokenWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmailVerificationTokenUpdateWithoutUtilisateurInput, Prisma.EmailVerificationTokenUncheckedUpdateWithoutUtilisateurInput>;
};
export type EmailVerificationTokenUpdateManyWithWhereWithoutUtilisateurInput = {
    where: Prisma.EmailVerificationTokenScalarWhereInput;
    data: Prisma.XOR<Prisma.EmailVerificationTokenUpdateManyMutationInput, Prisma.EmailVerificationTokenUncheckedUpdateManyWithoutUtilisateurInput>;
};
export type EmailVerificationTokenScalarWhereInput = {
    AND?: Prisma.EmailVerificationTokenScalarWhereInput | Prisma.EmailVerificationTokenScalarWhereInput[];
    OR?: Prisma.EmailVerificationTokenScalarWhereInput[];
    NOT?: Prisma.EmailVerificationTokenScalarWhereInput | Prisma.EmailVerificationTokenScalarWhereInput[];
    id?: Prisma.StringFilter<"EmailVerificationToken"> | string;
    utilisateurId?: Prisma.StringFilter<"EmailVerificationToken"> | string;
    tokenHash?: Prisma.StringFilter<"EmailVerificationToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"EmailVerificationToken"> | Date | string;
    usedAt?: Prisma.DateTimeNullableFilter<"EmailVerificationToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmailVerificationToken"> | Date | string;
};
export type EmailVerificationTokenCreateManyUtilisateurInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type EmailVerificationTokenUpdateWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailVerificationTokenUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailVerificationTokenUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmailVerificationTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    utilisateurId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["emailVerificationToken"]>;
export type EmailVerificationTokenSelectScalar = {
    id?: boolean;
    utilisateurId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
};
export type EmailVerificationTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "utilisateurId" | "tokenHash" | "expiresAt" | "usedAt" | "createdAt", ExtArgs["result"]["emailVerificationToken"]>;
export type EmailVerificationTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
};
export type $EmailVerificationTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmailVerificationToken";
    objects: {
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        utilisateurId: string;
        tokenHash: string;
        expiresAt: Date;
        usedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["emailVerificationToken"]>;
    composites: {};
};
export type EmailVerificationTokenGetPayload<S extends boolean | null | undefined | EmailVerificationTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmailVerificationTokenPayload, S>;
export type EmailVerificationTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmailVerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmailVerificationTokenCountAggregateInputType | true;
};
export interface EmailVerificationTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmailVerificationToken'];
        meta: {
            name: 'EmailVerificationToken';
        };
    };
    findUnique<T extends EmailVerificationTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, EmailVerificationTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmailVerificationTokenClient<runtime.Types.Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmailVerificationTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmailVerificationTokenClient<runtime.Types.Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmailVerificationTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, EmailVerificationTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmailVerificationTokenClient<runtime.Types.Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmailVerificationTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmailVerificationTokenClient<runtime.Types.Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmailVerificationTokenFindManyArgs>(args?: Prisma.SelectSubset<T, EmailVerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmailVerificationTokenCreateArgs>(args: Prisma.SelectSubset<T, EmailVerificationTokenCreateArgs<ExtArgs>>): Prisma.Prisma__EmailVerificationTokenClient<runtime.Types.Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmailVerificationTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, EmailVerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends EmailVerificationTokenDeleteArgs>(args: Prisma.SelectSubset<T, EmailVerificationTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__EmailVerificationTokenClient<runtime.Types.Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmailVerificationTokenUpdateArgs>(args: Prisma.SelectSubset<T, EmailVerificationTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__EmailVerificationTokenClient<runtime.Types.Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmailVerificationTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmailVerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmailVerificationTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, EmailVerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends EmailVerificationTokenUpsertArgs>(args: Prisma.SelectSubset<T, EmailVerificationTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__EmailVerificationTokenClient<runtime.Types.Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmailVerificationTokenCountArgs>(args?: Prisma.Subset<T, EmailVerificationTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmailVerificationTokenCountAggregateOutputType> : number>;
    aggregate<T extends EmailVerificationTokenAggregateArgs>(args: Prisma.Subset<T, EmailVerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationTokenAggregateType<T>>;
    groupBy<T extends EmailVerificationTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmailVerificationTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: EmailVerificationTokenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmailVerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmailVerificationTokenFieldRefs;
}
export interface Prisma__EmailVerificationTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmailVerificationTokenFieldRefs {
    readonly id: Prisma.FieldRef<"EmailVerificationToken", 'String'>;
    readonly utilisateurId: Prisma.FieldRef<"EmailVerificationToken", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"EmailVerificationToken", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"EmailVerificationToken", 'DateTime'>;
    readonly usedAt: Prisma.FieldRef<"EmailVerificationToken", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"EmailVerificationToken", 'DateTime'>;
}
export type EmailVerificationTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailVerificationTokenSelect<ExtArgs> | null;
    omit?: Prisma.EmailVerificationTokenOmit<ExtArgs> | null;
    include?: Prisma.EmailVerificationTokenInclude<ExtArgs> | null;
    where: Prisma.EmailVerificationTokenWhereUniqueInput;
};
export type EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailVerificationTokenSelect<ExtArgs> | null;
    omit?: Prisma.EmailVerificationTokenOmit<ExtArgs> | null;
    include?: Prisma.EmailVerificationTokenInclude<ExtArgs> | null;
    where: Prisma.EmailVerificationTokenWhereUniqueInput;
};
export type EmailVerificationTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailVerificationTokenSelect<ExtArgs> | null;
    omit?: Prisma.EmailVerificationTokenOmit<ExtArgs> | null;
    include?: Prisma.EmailVerificationTokenInclude<ExtArgs> | null;
    where?: Prisma.EmailVerificationTokenWhereInput;
    orderBy?: Prisma.EmailVerificationTokenOrderByWithRelationInput | Prisma.EmailVerificationTokenOrderByWithRelationInput[];
    cursor?: Prisma.EmailVerificationTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmailVerificationTokenScalarFieldEnum | Prisma.EmailVerificationTokenScalarFieldEnum[];
};
export type EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailVerificationTokenSelect<ExtArgs> | null;
    omit?: Prisma.EmailVerificationTokenOmit<ExtArgs> | null;
    include?: Prisma.EmailVerificationTokenInclude<ExtArgs> | null;
    where?: Prisma.EmailVerificationTokenWhereInput;
    orderBy?: Prisma.EmailVerificationTokenOrderByWithRelationInput | Prisma.EmailVerificationTokenOrderByWithRelationInput[];
    cursor?: Prisma.EmailVerificationTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmailVerificationTokenScalarFieldEnum | Prisma.EmailVerificationTokenScalarFieldEnum[];
};
export type EmailVerificationTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailVerificationTokenSelect<ExtArgs> | null;
    omit?: Prisma.EmailVerificationTokenOmit<ExtArgs> | null;
    include?: Prisma.EmailVerificationTokenInclude<ExtArgs> | null;
    where?: Prisma.EmailVerificationTokenWhereInput;
    orderBy?: Prisma.EmailVerificationTokenOrderByWithRelationInput | Prisma.EmailVerificationTokenOrderByWithRelationInput[];
    cursor?: Prisma.EmailVerificationTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmailVerificationTokenScalarFieldEnum | Prisma.EmailVerificationTokenScalarFieldEnum[];
};
export type EmailVerificationTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailVerificationTokenSelect<ExtArgs> | null;
    omit?: Prisma.EmailVerificationTokenOmit<ExtArgs> | null;
    include?: Prisma.EmailVerificationTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmailVerificationTokenCreateInput, Prisma.EmailVerificationTokenUncheckedCreateInput>;
};
export type EmailVerificationTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmailVerificationTokenCreateManyInput | Prisma.EmailVerificationTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmailVerificationTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailVerificationTokenSelect<ExtArgs> | null;
    omit?: Prisma.EmailVerificationTokenOmit<ExtArgs> | null;
    include?: Prisma.EmailVerificationTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmailVerificationTokenUpdateInput, Prisma.EmailVerificationTokenUncheckedUpdateInput>;
    where: Prisma.EmailVerificationTokenWhereUniqueInput;
};
export type EmailVerificationTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmailVerificationTokenUpdateManyMutationInput, Prisma.EmailVerificationTokenUncheckedUpdateManyInput>;
    where?: Prisma.EmailVerificationTokenWhereInput;
    limit?: number;
};
export type EmailVerificationTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailVerificationTokenSelect<ExtArgs> | null;
    omit?: Prisma.EmailVerificationTokenOmit<ExtArgs> | null;
    include?: Prisma.EmailVerificationTokenInclude<ExtArgs> | null;
    where: Prisma.EmailVerificationTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmailVerificationTokenCreateInput, Prisma.EmailVerificationTokenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmailVerificationTokenUpdateInput, Prisma.EmailVerificationTokenUncheckedUpdateInput>;
};
export type EmailVerificationTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailVerificationTokenSelect<ExtArgs> | null;
    omit?: Prisma.EmailVerificationTokenOmit<ExtArgs> | null;
    include?: Prisma.EmailVerificationTokenInclude<ExtArgs> | null;
    where: Prisma.EmailVerificationTokenWhereUniqueInput;
};
export type EmailVerificationTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmailVerificationTokenWhereInput;
    limit?: number;
};
export type EmailVerificationTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmailVerificationTokenSelect<ExtArgs> | null;
    omit?: Prisma.EmailVerificationTokenOmit<ExtArgs> | null;
    include?: Prisma.EmailVerificationTokenInclude<ExtArgs> | null;
};
