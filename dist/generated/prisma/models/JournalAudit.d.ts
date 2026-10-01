import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type JournalAuditModel = runtime.Types.Result.DefaultSelection<Prisma.$JournalAuditPayload>;
export type AggregateJournalAudit = {
    _count: JournalAuditCountAggregateOutputType | null;
    _min: JournalAuditMinAggregateOutputType | null;
    _max: JournalAuditMaxAggregateOutputType | null;
};
export type JournalAuditMinAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    utilisateurId: string | null;
    action: string | null;
    entite: string | null;
    entiteId: string | null;
    createdAt: Date | null;
};
export type JournalAuditMaxAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    utilisateurId: string | null;
    action: string | null;
    entite: string | null;
    entiteId: string | null;
    createdAt: Date | null;
};
export type JournalAuditCountAggregateOutputType = {
    id: number;
    organisationId: number;
    utilisateurId: number;
    action: number;
    entite: number;
    entiteId: number;
    donneesAvant: number;
    donneesApres: number;
    createdAt: number;
    _all: number;
};
export type JournalAuditMinAggregateInputType = {
    id?: true;
    organisationId?: true;
    utilisateurId?: true;
    action?: true;
    entite?: true;
    entiteId?: true;
    createdAt?: true;
};
export type JournalAuditMaxAggregateInputType = {
    id?: true;
    organisationId?: true;
    utilisateurId?: true;
    action?: true;
    entite?: true;
    entiteId?: true;
    createdAt?: true;
};
export type JournalAuditCountAggregateInputType = {
    id?: true;
    organisationId?: true;
    utilisateurId?: true;
    action?: true;
    entite?: true;
    entiteId?: true;
    donneesAvant?: true;
    donneesApres?: true;
    createdAt?: true;
    _all?: true;
};
export type JournalAuditAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalAuditWhereInput;
    orderBy?: Prisma.JournalAuditOrderByWithRelationInput | Prisma.JournalAuditOrderByWithRelationInput[];
    cursor?: Prisma.JournalAuditWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | JournalAuditCountAggregateInputType;
    _min?: JournalAuditMinAggregateInputType;
    _max?: JournalAuditMaxAggregateInputType;
};
export type GetJournalAuditAggregateType<T extends JournalAuditAggregateArgs> = {
    [P in keyof T & keyof AggregateJournalAudit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJournalAudit[P]> : Prisma.GetScalarType<T[P], AggregateJournalAudit[P]>;
};
export type JournalAuditGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalAuditWhereInput;
    orderBy?: Prisma.JournalAuditOrderByWithAggregationInput | Prisma.JournalAuditOrderByWithAggregationInput[];
    by: Prisma.JournalAuditScalarFieldEnum[] | Prisma.JournalAuditScalarFieldEnum;
    having?: Prisma.JournalAuditScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JournalAuditCountAggregateInputType | true;
    _min?: JournalAuditMinAggregateInputType;
    _max?: JournalAuditMaxAggregateInputType;
};
export type JournalAuditGroupByOutputType = {
    id: string;
    organisationId: string | null;
    utilisateurId: string | null;
    action: string;
    entite: string;
    entiteId: string | null;
    donneesAvant: runtime.JsonValue | null;
    donneesApres: runtime.JsonValue | null;
    createdAt: Date;
    _count: JournalAuditCountAggregateOutputType | null;
    _min: JournalAuditMinAggregateOutputType | null;
    _max: JournalAuditMaxAggregateOutputType | null;
};
export type GetJournalAuditGroupByPayload<T extends JournalAuditGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JournalAuditGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JournalAuditGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JournalAuditGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JournalAuditGroupByOutputType[P]>;
}>>;
export type JournalAuditWhereInput = {
    AND?: Prisma.JournalAuditWhereInput | Prisma.JournalAuditWhereInput[];
    OR?: Prisma.JournalAuditWhereInput[];
    NOT?: Prisma.JournalAuditWhereInput | Prisma.JournalAuditWhereInput[];
    id?: Prisma.StringFilter<"JournalAudit"> | string;
    organisationId?: Prisma.StringNullableFilter<"JournalAudit"> | string | null;
    utilisateurId?: Prisma.StringNullableFilter<"JournalAudit"> | string | null;
    action?: Prisma.StringFilter<"JournalAudit"> | string;
    entite?: Prisma.StringFilter<"JournalAudit"> | string;
    entiteId?: Prisma.StringNullableFilter<"JournalAudit"> | string | null;
    donneesAvant?: Prisma.JsonNullableFilter<"JournalAudit">;
    donneesApres?: Prisma.JsonNullableFilter<"JournalAudit">;
    createdAt?: Prisma.DateTimeFilter<"JournalAudit"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationNullableScalarRelationFilter, Prisma.OrganisationWhereInput> | null;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurNullableScalarRelationFilter, Prisma.UtilisateurWhereInput> | null;
};
export type JournalAuditOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entite?: Prisma.SortOrder;
    entiteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    donneesAvant?: Prisma.SortOrderInput | Prisma.SortOrder;
    donneesApres?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organisation?: Prisma.OrganisationOrderByWithRelationInput;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
    _relevance?: Prisma.JournalAuditOrderByRelevanceInput;
};
export type JournalAuditWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.JournalAuditWhereInput | Prisma.JournalAuditWhereInput[];
    OR?: Prisma.JournalAuditWhereInput[];
    NOT?: Prisma.JournalAuditWhereInput | Prisma.JournalAuditWhereInput[];
    organisationId?: Prisma.StringNullableFilter<"JournalAudit"> | string | null;
    utilisateurId?: Prisma.StringNullableFilter<"JournalAudit"> | string | null;
    action?: Prisma.StringFilter<"JournalAudit"> | string;
    entite?: Prisma.StringFilter<"JournalAudit"> | string;
    entiteId?: Prisma.StringNullableFilter<"JournalAudit"> | string | null;
    donneesAvant?: Prisma.JsonNullableFilter<"JournalAudit">;
    donneesApres?: Prisma.JsonNullableFilter<"JournalAudit">;
    createdAt?: Prisma.DateTimeFilter<"JournalAudit"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationNullableScalarRelationFilter, Prisma.OrganisationWhereInput> | null;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurNullableScalarRelationFilter, Prisma.UtilisateurWhereInput> | null;
}, "id">;
export type JournalAuditOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entite?: Prisma.SortOrder;
    entiteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    donneesAvant?: Prisma.SortOrderInput | Prisma.SortOrder;
    donneesApres?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.JournalAuditCountOrderByAggregateInput;
    _max?: Prisma.JournalAuditMaxOrderByAggregateInput;
    _min?: Prisma.JournalAuditMinOrderByAggregateInput;
};
export type JournalAuditScalarWhereWithAggregatesInput = {
    AND?: Prisma.JournalAuditScalarWhereWithAggregatesInput | Prisma.JournalAuditScalarWhereWithAggregatesInput[];
    OR?: Prisma.JournalAuditScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JournalAuditScalarWhereWithAggregatesInput | Prisma.JournalAuditScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"JournalAudit"> | string;
    organisationId?: Prisma.StringNullableWithAggregatesFilter<"JournalAudit"> | string | null;
    utilisateurId?: Prisma.StringNullableWithAggregatesFilter<"JournalAudit"> | string | null;
    action?: Prisma.StringWithAggregatesFilter<"JournalAudit"> | string;
    entite?: Prisma.StringWithAggregatesFilter<"JournalAudit"> | string;
    entiteId?: Prisma.StringNullableWithAggregatesFilter<"JournalAudit"> | string | null;
    donneesAvant?: Prisma.JsonNullableWithAggregatesFilter<"JournalAudit">;
    donneesApres?: Prisma.JsonNullableWithAggregatesFilter<"JournalAudit">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"JournalAudit"> | Date | string;
};
export type JournalAuditCreateInput = {
    id?: string;
    action: string;
    entite: string;
    entiteId?: string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    organisation?: Prisma.OrganisationCreateNestedOneWithoutJournalAuditInput;
    utilisateur?: Prisma.UtilisateurCreateNestedOneWithoutJournalAuditInput;
};
export type JournalAuditUncheckedCreateInput = {
    id?: string;
    organisationId?: string | null;
    utilisateurId?: string | null;
    action: string;
    entite: string;
    entiteId?: string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type JournalAuditUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entite?: Prisma.StringFieldUpdateOperationsInput | string;
    entiteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneWithoutJournalAuditNestedInput;
    utilisateur?: Prisma.UtilisateurUpdateOneWithoutJournalAuditNestedInput;
};
export type JournalAuditUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utilisateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entite?: Prisma.StringFieldUpdateOperationsInput | string;
    entiteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalAuditCreateManyInput = {
    id?: string;
    organisationId?: string | null;
    utilisateurId?: string | null;
    action: string;
    entite: string;
    entiteId?: string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type JournalAuditUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entite?: Prisma.StringFieldUpdateOperationsInput | string;
    entiteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalAuditUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utilisateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entite?: Prisma.StringFieldUpdateOperationsInput | string;
    entiteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalAuditListRelationFilter = {
    every?: Prisma.JournalAuditWhereInput;
    some?: Prisma.JournalAuditWhereInput;
    none?: Prisma.JournalAuditWhereInput;
};
export type JournalAuditOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JournalAuditOrderByRelevanceInput = {
    fields: Prisma.JournalAuditOrderByRelevanceFieldEnum | Prisma.JournalAuditOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type JournalAuditCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entite?: Prisma.SortOrder;
    entiteId?: Prisma.SortOrder;
    donneesAvant?: Prisma.SortOrder;
    donneesApres?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JournalAuditMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entite?: Prisma.SortOrder;
    entiteId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JournalAuditMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entite?: Prisma.SortOrder;
    entiteId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type JournalAuditCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.JournalAuditCreateWithoutOrganisationInput, Prisma.JournalAuditUncheckedCreateWithoutOrganisationInput> | Prisma.JournalAuditCreateWithoutOrganisationInput[] | Prisma.JournalAuditUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.JournalAuditCreateOrConnectWithoutOrganisationInput | Prisma.JournalAuditCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.JournalAuditCreateManyOrganisationInputEnvelope;
    connect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
};
export type JournalAuditUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.JournalAuditCreateWithoutOrganisationInput, Prisma.JournalAuditUncheckedCreateWithoutOrganisationInput> | Prisma.JournalAuditCreateWithoutOrganisationInput[] | Prisma.JournalAuditUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.JournalAuditCreateOrConnectWithoutOrganisationInput | Prisma.JournalAuditCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.JournalAuditCreateManyOrganisationInputEnvelope;
    connect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
};
export type JournalAuditUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.JournalAuditCreateWithoutOrganisationInput, Prisma.JournalAuditUncheckedCreateWithoutOrganisationInput> | Prisma.JournalAuditCreateWithoutOrganisationInput[] | Prisma.JournalAuditUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.JournalAuditCreateOrConnectWithoutOrganisationInput | Prisma.JournalAuditCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.JournalAuditUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.JournalAuditUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.JournalAuditCreateManyOrganisationInputEnvelope;
    set?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    disconnect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    delete?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    connect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    update?: Prisma.JournalAuditUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.JournalAuditUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.JournalAuditUpdateManyWithWhereWithoutOrganisationInput | Prisma.JournalAuditUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.JournalAuditScalarWhereInput | Prisma.JournalAuditScalarWhereInput[];
};
export type JournalAuditUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.JournalAuditCreateWithoutOrganisationInput, Prisma.JournalAuditUncheckedCreateWithoutOrganisationInput> | Prisma.JournalAuditCreateWithoutOrganisationInput[] | Prisma.JournalAuditUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.JournalAuditCreateOrConnectWithoutOrganisationInput | Prisma.JournalAuditCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.JournalAuditUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.JournalAuditUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.JournalAuditCreateManyOrganisationInputEnvelope;
    set?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    disconnect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    delete?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    connect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    update?: Prisma.JournalAuditUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.JournalAuditUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.JournalAuditUpdateManyWithWhereWithoutOrganisationInput | Prisma.JournalAuditUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.JournalAuditScalarWhereInput | Prisma.JournalAuditScalarWhereInput[];
};
export type JournalAuditCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.JournalAuditCreateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput> | Prisma.JournalAuditCreateWithoutUtilisateurInput[] | Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput | Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.JournalAuditCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
};
export type JournalAuditUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.JournalAuditCreateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput> | Prisma.JournalAuditCreateWithoutUtilisateurInput[] | Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput | Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.JournalAuditCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
};
export type JournalAuditUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.JournalAuditCreateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput> | Prisma.JournalAuditCreateWithoutUtilisateurInput[] | Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput | Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.JournalAuditUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.JournalAuditUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.JournalAuditCreateManyUtilisateurInputEnvelope;
    set?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    disconnect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    delete?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    connect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    update?: Prisma.JournalAuditUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.JournalAuditUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.JournalAuditUpdateManyWithWhereWithoutUtilisateurInput | Prisma.JournalAuditUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.JournalAuditScalarWhereInput | Prisma.JournalAuditScalarWhereInput[];
};
export type JournalAuditUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.JournalAuditCreateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput> | Prisma.JournalAuditCreateWithoutUtilisateurInput[] | Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput | Prisma.JournalAuditCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.JournalAuditUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.JournalAuditUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.JournalAuditCreateManyUtilisateurInputEnvelope;
    set?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    disconnect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    delete?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    connect?: Prisma.JournalAuditWhereUniqueInput | Prisma.JournalAuditWhereUniqueInput[];
    update?: Prisma.JournalAuditUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.JournalAuditUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.JournalAuditUpdateManyWithWhereWithoutUtilisateurInput | Prisma.JournalAuditUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.JournalAuditScalarWhereInput | Prisma.JournalAuditScalarWhereInput[];
};
export type JournalAuditCreateWithoutOrganisationInput = {
    id?: string;
    action: string;
    entite: string;
    entiteId?: string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    utilisateur?: Prisma.UtilisateurCreateNestedOneWithoutJournalAuditInput;
};
export type JournalAuditUncheckedCreateWithoutOrganisationInput = {
    id?: string;
    utilisateurId?: string | null;
    action: string;
    entite: string;
    entiteId?: string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type JournalAuditCreateOrConnectWithoutOrganisationInput = {
    where: Prisma.JournalAuditWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalAuditCreateWithoutOrganisationInput, Prisma.JournalAuditUncheckedCreateWithoutOrganisationInput>;
};
export type JournalAuditCreateManyOrganisationInputEnvelope = {
    data: Prisma.JournalAuditCreateManyOrganisationInput | Prisma.JournalAuditCreateManyOrganisationInput[];
    skipDuplicates?: boolean;
};
export type JournalAuditUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.JournalAuditWhereUniqueInput;
    update: Prisma.XOR<Prisma.JournalAuditUpdateWithoutOrganisationInput, Prisma.JournalAuditUncheckedUpdateWithoutOrganisationInput>;
    create: Prisma.XOR<Prisma.JournalAuditCreateWithoutOrganisationInput, Prisma.JournalAuditUncheckedCreateWithoutOrganisationInput>;
};
export type JournalAuditUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.JournalAuditWhereUniqueInput;
    data: Prisma.XOR<Prisma.JournalAuditUpdateWithoutOrganisationInput, Prisma.JournalAuditUncheckedUpdateWithoutOrganisationInput>;
};
export type JournalAuditUpdateManyWithWhereWithoutOrganisationInput = {
    where: Prisma.JournalAuditScalarWhereInput;
    data: Prisma.XOR<Prisma.JournalAuditUpdateManyMutationInput, Prisma.JournalAuditUncheckedUpdateManyWithoutOrganisationInput>;
};
export type JournalAuditScalarWhereInput = {
    AND?: Prisma.JournalAuditScalarWhereInput | Prisma.JournalAuditScalarWhereInput[];
    OR?: Prisma.JournalAuditScalarWhereInput[];
    NOT?: Prisma.JournalAuditScalarWhereInput | Prisma.JournalAuditScalarWhereInput[];
    id?: Prisma.StringFilter<"JournalAudit"> | string;
    organisationId?: Prisma.StringNullableFilter<"JournalAudit"> | string | null;
    utilisateurId?: Prisma.StringNullableFilter<"JournalAudit"> | string | null;
    action?: Prisma.StringFilter<"JournalAudit"> | string;
    entite?: Prisma.StringFilter<"JournalAudit"> | string;
    entiteId?: Prisma.StringNullableFilter<"JournalAudit"> | string | null;
    donneesAvant?: Prisma.JsonNullableFilter<"JournalAudit">;
    donneesApres?: Prisma.JsonNullableFilter<"JournalAudit">;
    createdAt?: Prisma.DateTimeFilter<"JournalAudit"> | Date | string;
};
export type JournalAuditCreateWithoutUtilisateurInput = {
    id?: string;
    action: string;
    entite: string;
    entiteId?: string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    organisation?: Prisma.OrganisationCreateNestedOneWithoutJournalAuditInput;
};
export type JournalAuditUncheckedCreateWithoutUtilisateurInput = {
    id?: string;
    organisationId?: string | null;
    action: string;
    entite: string;
    entiteId?: string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type JournalAuditCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.JournalAuditWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalAuditCreateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput>;
};
export type JournalAuditCreateManyUtilisateurInputEnvelope = {
    data: Prisma.JournalAuditCreateManyUtilisateurInput | Prisma.JournalAuditCreateManyUtilisateurInput[];
    skipDuplicates?: boolean;
};
export type JournalAuditUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.JournalAuditWhereUniqueInput;
    update: Prisma.XOR<Prisma.JournalAuditUpdateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.JournalAuditCreateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedCreateWithoutUtilisateurInput>;
};
export type JournalAuditUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.JournalAuditWhereUniqueInput;
    data: Prisma.XOR<Prisma.JournalAuditUpdateWithoutUtilisateurInput, Prisma.JournalAuditUncheckedUpdateWithoutUtilisateurInput>;
};
export type JournalAuditUpdateManyWithWhereWithoutUtilisateurInput = {
    where: Prisma.JournalAuditScalarWhereInput;
    data: Prisma.XOR<Prisma.JournalAuditUpdateManyMutationInput, Prisma.JournalAuditUncheckedUpdateManyWithoutUtilisateurInput>;
};
export type JournalAuditCreateManyOrganisationInput = {
    id?: string;
    utilisateurId?: string | null;
    action: string;
    entite: string;
    entiteId?: string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type JournalAuditUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entite?: Prisma.StringFieldUpdateOperationsInput | string;
    entiteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneWithoutJournalAuditNestedInput;
};
export type JournalAuditUncheckedUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entite?: Prisma.StringFieldUpdateOperationsInput | string;
    entiteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalAuditUncheckedUpdateManyWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entite?: Prisma.StringFieldUpdateOperationsInput | string;
    entiteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalAuditCreateManyUtilisateurInput = {
    id?: string;
    organisationId?: string | null;
    action: string;
    entite: string;
    entiteId?: string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type JournalAuditUpdateWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entite?: Prisma.StringFieldUpdateOperationsInput | string;
    entiteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneWithoutJournalAuditNestedInput;
};
export type JournalAuditUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entite?: Prisma.StringFieldUpdateOperationsInput | string;
    entiteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalAuditUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entite?: Prisma.StringFieldUpdateOperationsInput | string;
    entiteId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donneesAvant?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    donneesApres?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JournalAuditSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organisationId?: boolean;
    utilisateurId?: boolean;
    action?: boolean;
    entite?: boolean;
    entiteId?: boolean;
    donneesAvant?: boolean;
    donneesApres?: boolean;
    createdAt?: boolean;
    organisation?: boolean | Prisma.JournalAudit$organisationArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.JournalAudit$utilisateurArgs<ExtArgs>;
}, ExtArgs["result"]["journalAudit"]>;
export type JournalAuditSelectScalar = {
    id?: boolean;
    organisationId?: boolean;
    utilisateurId?: boolean;
    action?: boolean;
    entite?: boolean;
    entiteId?: boolean;
    donneesAvant?: boolean;
    donneesApres?: boolean;
    createdAt?: boolean;
};
export type JournalAuditOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organisationId" | "utilisateurId" | "action" | "entite" | "entiteId" | "donneesAvant" | "donneesApres" | "createdAt", ExtArgs["result"]["journalAudit"]>;
export type JournalAuditInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisation?: boolean | Prisma.JournalAudit$organisationArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.JournalAudit$utilisateurArgs<ExtArgs>;
};
export type $JournalAuditPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "JournalAudit";
    objects: {
        organisation: Prisma.$OrganisationPayload<ExtArgs> | null;
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organisationId: string | null;
        utilisateurId: string | null;
        action: string;
        entite: string;
        entiteId: string | null;
        donneesAvant: runtime.JsonValue | null;
        donneesApres: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["journalAudit"]>;
    composites: {};
};
export type JournalAuditGetPayload<S extends boolean | null | undefined | JournalAuditDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload, S>;
export type JournalAuditCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JournalAuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JournalAuditCountAggregateInputType | true;
};
export interface JournalAuditDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['JournalAudit'];
        meta: {
            name: 'JournalAudit';
        };
    };
    findUnique<T extends JournalAuditFindUniqueArgs>(args: Prisma.SelectSubset<T, JournalAuditFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends JournalAuditFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JournalAuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends JournalAuditFindFirstArgs>(args?: Prisma.SelectSubset<T, JournalAuditFindFirstArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends JournalAuditFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JournalAuditFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends JournalAuditFindManyArgs>(args?: Prisma.SelectSubset<T, JournalAuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends JournalAuditCreateArgs>(args: Prisma.SelectSubset<T, JournalAuditCreateArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends JournalAuditCreateManyArgs>(args?: Prisma.SelectSubset<T, JournalAuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends JournalAuditDeleteArgs>(args: Prisma.SelectSubset<T, JournalAuditDeleteArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends JournalAuditUpdateArgs>(args: Prisma.SelectSubset<T, JournalAuditUpdateArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends JournalAuditDeleteManyArgs>(args?: Prisma.SelectSubset<T, JournalAuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends JournalAuditUpdateManyArgs>(args: Prisma.SelectSubset<T, JournalAuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends JournalAuditUpsertArgs>(args: Prisma.SelectSubset<T, JournalAuditUpsertArgs<ExtArgs>>): Prisma.Prisma__JournalAuditClient<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends JournalAuditCountArgs>(args?: Prisma.Subset<T, JournalAuditCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JournalAuditCountAggregateOutputType> : number>;
    aggregate<T extends JournalAuditAggregateArgs>(args: Prisma.Subset<T, JournalAuditAggregateArgs>): Prisma.PrismaPromise<GetJournalAuditAggregateType<T>>;
    groupBy<T extends JournalAuditGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JournalAuditGroupByArgs['orderBy'];
    } : {
        orderBy?: JournalAuditGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JournalAuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: JournalAuditFieldRefs;
}
export interface Prisma__JournalAuditClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organisation<T extends Prisma.JournalAudit$organisationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JournalAudit$organisationArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    utilisateur<T extends Prisma.JournalAudit$utilisateurArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JournalAudit$utilisateurArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface JournalAuditFieldRefs {
    readonly id: Prisma.FieldRef<"JournalAudit", 'String'>;
    readonly organisationId: Prisma.FieldRef<"JournalAudit", 'String'>;
    readonly utilisateurId: Prisma.FieldRef<"JournalAudit", 'String'>;
    readonly action: Prisma.FieldRef<"JournalAudit", 'String'>;
    readonly entite: Prisma.FieldRef<"JournalAudit", 'String'>;
    readonly entiteId: Prisma.FieldRef<"JournalAudit", 'String'>;
    readonly donneesAvant: Prisma.FieldRef<"JournalAudit", 'Json'>;
    readonly donneesApres: Prisma.FieldRef<"JournalAudit", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"JournalAudit", 'DateTime'>;
}
export type JournalAuditFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where: Prisma.JournalAuditWhereUniqueInput;
};
export type JournalAuditFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where: Prisma.JournalAuditWhereUniqueInput;
};
export type JournalAuditFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where?: Prisma.JournalAuditWhereInput;
    orderBy?: Prisma.JournalAuditOrderByWithRelationInput | Prisma.JournalAuditOrderByWithRelationInput[];
    cursor?: Prisma.JournalAuditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JournalAuditScalarFieldEnum | Prisma.JournalAuditScalarFieldEnum[];
};
export type JournalAuditFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where?: Prisma.JournalAuditWhereInput;
    orderBy?: Prisma.JournalAuditOrderByWithRelationInput | Prisma.JournalAuditOrderByWithRelationInput[];
    cursor?: Prisma.JournalAuditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JournalAuditScalarFieldEnum | Prisma.JournalAuditScalarFieldEnum[];
};
export type JournalAuditFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where?: Prisma.JournalAuditWhereInput;
    orderBy?: Prisma.JournalAuditOrderByWithRelationInput | Prisma.JournalAuditOrderByWithRelationInput[];
    cursor?: Prisma.JournalAuditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JournalAuditScalarFieldEnum | Prisma.JournalAuditScalarFieldEnum[];
};
export type JournalAuditCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JournalAuditCreateInput, Prisma.JournalAuditUncheckedCreateInput>;
};
export type JournalAuditCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.JournalAuditCreateManyInput | Prisma.JournalAuditCreateManyInput[];
    skipDuplicates?: boolean;
};
export type JournalAuditUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JournalAuditUpdateInput, Prisma.JournalAuditUncheckedUpdateInput>;
    where: Prisma.JournalAuditWhereUniqueInput;
};
export type JournalAuditUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.JournalAuditUpdateManyMutationInput, Prisma.JournalAuditUncheckedUpdateManyInput>;
    where?: Prisma.JournalAuditWhereInput;
    limit?: number;
};
export type JournalAuditUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where: Prisma.JournalAuditWhereUniqueInput;
    create: Prisma.XOR<Prisma.JournalAuditCreateInput, Prisma.JournalAuditUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.JournalAuditUpdateInput, Prisma.JournalAuditUncheckedUpdateInput>;
};
export type JournalAuditDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
    where: Prisma.JournalAuditWhereUniqueInput;
};
export type JournalAuditDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalAuditWhereInput;
    limit?: number;
};
export type JournalAudit$organisationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    where?: Prisma.OrganisationWhereInput;
};
export type JournalAudit$utilisateurArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurInclude<ExtArgs> | null;
    where?: Prisma.UtilisateurWhereInput;
};
export type JournalAuditDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JournalAuditSelect<ExtArgs> | null;
    omit?: Prisma.JournalAuditOmit<ExtArgs> | null;
    include?: Prisma.JournalAuditInclude<ExtArgs> | null;
};
