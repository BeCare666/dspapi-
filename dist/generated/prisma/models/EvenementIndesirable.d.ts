import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EvenementIndesirableModel = runtime.Types.Result.DefaultSelection<Prisma.$EvenementIndesirablePayload>;
export type AggregateEvenementIndesirable = {
    _count: EvenementIndesirableCountAggregateOutputType | null;
    _min: EvenementIndesirableMinAggregateOutputType | null;
    _max: EvenementIndesirableMaxAggregateOutputType | null;
};
export type EvenementIndesirableMinAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    typeEiId: string | null;
    serviceId: string | null;
    critereId: string | null;
    declareParId: string | null;
    description: string | null;
    gravite: $Enums.GraviteEi | null;
    statut: $Enums.StatutEi | null;
    dateDeclaration: Date | null;
    dateCloture: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EvenementIndesirableMaxAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    typeEiId: string | null;
    serviceId: string | null;
    critereId: string | null;
    declareParId: string | null;
    description: string | null;
    gravite: $Enums.GraviteEi | null;
    statut: $Enums.StatutEi | null;
    dateDeclaration: Date | null;
    dateCloture: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EvenementIndesirableCountAggregateOutputType = {
    id: number;
    organisationId: number;
    typeEiId: number;
    serviceId: number;
    critereId: number;
    declareParId: number;
    description: number;
    gravite: number;
    statut: number;
    dateDeclaration: number;
    dateCloture: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EvenementIndesirableMinAggregateInputType = {
    id?: true;
    organisationId?: true;
    typeEiId?: true;
    serviceId?: true;
    critereId?: true;
    declareParId?: true;
    description?: true;
    gravite?: true;
    statut?: true;
    dateDeclaration?: true;
    dateCloture?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EvenementIndesirableMaxAggregateInputType = {
    id?: true;
    organisationId?: true;
    typeEiId?: true;
    serviceId?: true;
    critereId?: true;
    declareParId?: true;
    description?: true;
    gravite?: true;
    statut?: true;
    dateDeclaration?: true;
    dateCloture?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EvenementIndesirableCountAggregateInputType = {
    id?: true;
    organisationId?: true;
    typeEiId?: true;
    serviceId?: true;
    critereId?: true;
    declareParId?: true;
    description?: true;
    gravite?: true;
    statut?: true;
    dateDeclaration?: true;
    dateCloture?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EvenementIndesirableAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvenementIndesirableWhereInput;
    orderBy?: Prisma.EvenementIndesirableOrderByWithRelationInput | Prisma.EvenementIndesirableOrderByWithRelationInput[];
    cursor?: Prisma.EvenementIndesirableWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EvenementIndesirableCountAggregateInputType;
    _min?: EvenementIndesirableMinAggregateInputType;
    _max?: EvenementIndesirableMaxAggregateInputType;
};
export type GetEvenementIndesirableAggregateType<T extends EvenementIndesirableAggregateArgs> = {
    [P in keyof T & keyof AggregateEvenementIndesirable]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvenementIndesirable[P]> : Prisma.GetScalarType<T[P], AggregateEvenementIndesirable[P]>;
};
export type EvenementIndesirableGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvenementIndesirableWhereInput;
    orderBy?: Prisma.EvenementIndesirableOrderByWithAggregationInput | Prisma.EvenementIndesirableOrderByWithAggregationInput[];
    by: Prisma.EvenementIndesirableScalarFieldEnum[] | Prisma.EvenementIndesirableScalarFieldEnum;
    having?: Prisma.EvenementIndesirableScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EvenementIndesirableCountAggregateInputType | true;
    _min?: EvenementIndesirableMinAggregateInputType;
    _max?: EvenementIndesirableMaxAggregateInputType;
};
export type EvenementIndesirableGroupByOutputType = {
    id: string;
    organisationId: string;
    typeEiId: string | null;
    serviceId: string | null;
    critereId: string | null;
    declareParId: string;
    description: string;
    gravite: $Enums.GraviteEi | null;
    statut: $Enums.StatutEi;
    dateDeclaration: Date;
    dateCloture: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: EvenementIndesirableCountAggregateOutputType | null;
    _min: EvenementIndesirableMinAggregateOutputType | null;
    _max: EvenementIndesirableMaxAggregateOutputType | null;
};
export type GetEvenementIndesirableGroupByPayload<T extends EvenementIndesirableGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EvenementIndesirableGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EvenementIndesirableGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EvenementIndesirableGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EvenementIndesirableGroupByOutputType[P]>;
}>>;
export type EvenementIndesirableWhereInput = {
    AND?: Prisma.EvenementIndesirableWhereInput | Prisma.EvenementIndesirableWhereInput[];
    OR?: Prisma.EvenementIndesirableWhereInput[];
    NOT?: Prisma.EvenementIndesirableWhereInput | Prisma.EvenementIndesirableWhereInput[];
    id?: Prisma.StringFilter<"EvenementIndesirable"> | string;
    organisationId?: Prisma.StringFilter<"EvenementIndesirable"> | string;
    typeEiId?: Prisma.StringNullableFilter<"EvenementIndesirable"> | string | null;
    serviceId?: Prisma.StringNullableFilter<"EvenementIndesirable"> | string | null;
    critereId?: Prisma.StringNullableFilter<"EvenementIndesirable"> | string | null;
    declareParId?: Prisma.StringFilter<"EvenementIndesirable"> | string;
    description?: Prisma.StringFilter<"EvenementIndesirable"> | string;
    gravite?: Prisma.EnumGraviteEiNullableFilter<"EvenementIndesirable"> | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFilter<"EvenementIndesirable"> | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFilter<"EvenementIndesirable"> | Date | string;
    dateCloture?: Prisma.DateTimeNullableFilter<"EvenementIndesirable"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EvenementIndesirable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvenementIndesirable"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
    typeEi?: Prisma.XOR<Prisma.TypeEiNullableScalarRelationFilter, Prisma.TypeEiWhereInput> | null;
    service?: Prisma.XOR<Prisma.ServiceNullableScalarRelationFilter, Prisma.ServiceWhereInput> | null;
    critere?: Prisma.XOR<Prisma.CritereNullableScalarRelationFilter, Prisma.CritereWhereInput> | null;
    declarePar?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    causes?: Prisma.CauseListRelationFilter;
    actionsCorrectives?: Prisma.ActionCorrectiveListRelationFilter;
    transitions?: Prisma.EvenementTransitionListRelationFilter;
    piecesJointes?: Prisma.PieceJointeListRelationFilter;
};
export type EvenementIndesirableOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    typeEiId?: Prisma.SortOrderInput | Prisma.SortOrder;
    serviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    critereId?: Prisma.SortOrderInput | Prisma.SortOrder;
    declareParId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    gravite?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateDeclaration?: Prisma.SortOrder;
    dateCloture?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organisation?: Prisma.OrganisationOrderByWithRelationInput;
    typeEi?: Prisma.TypeEiOrderByWithRelationInput;
    service?: Prisma.ServiceOrderByWithRelationInput;
    critere?: Prisma.CritereOrderByWithRelationInput;
    declarePar?: Prisma.UtilisateurOrderByWithRelationInput;
    causes?: Prisma.CauseOrderByRelationAggregateInput;
    actionsCorrectives?: Prisma.ActionCorrectiveOrderByRelationAggregateInput;
    transitions?: Prisma.EvenementTransitionOrderByRelationAggregateInput;
    piecesJointes?: Prisma.PieceJointeOrderByRelationAggregateInput;
    _relevance?: Prisma.EvenementIndesirableOrderByRelevanceInput;
};
export type EvenementIndesirableWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EvenementIndesirableWhereInput | Prisma.EvenementIndesirableWhereInput[];
    OR?: Prisma.EvenementIndesirableWhereInput[];
    NOT?: Prisma.EvenementIndesirableWhereInput | Prisma.EvenementIndesirableWhereInput[];
    organisationId?: Prisma.StringFilter<"EvenementIndesirable"> | string;
    typeEiId?: Prisma.StringNullableFilter<"EvenementIndesirable"> | string | null;
    serviceId?: Prisma.StringNullableFilter<"EvenementIndesirable"> | string | null;
    critereId?: Prisma.StringNullableFilter<"EvenementIndesirable"> | string | null;
    declareParId?: Prisma.StringFilter<"EvenementIndesirable"> | string;
    description?: Prisma.StringFilter<"EvenementIndesirable"> | string;
    gravite?: Prisma.EnumGraviteEiNullableFilter<"EvenementIndesirable"> | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFilter<"EvenementIndesirable"> | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFilter<"EvenementIndesirable"> | Date | string;
    dateCloture?: Prisma.DateTimeNullableFilter<"EvenementIndesirable"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EvenementIndesirable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvenementIndesirable"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
    typeEi?: Prisma.XOR<Prisma.TypeEiNullableScalarRelationFilter, Prisma.TypeEiWhereInput> | null;
    service?: Prisma.XOR<Prisma.ServiceNullableScalarRelationFilter, Prisma.ServiceWhereInput> | null;
    critere?: Prisma.XOR<Prisma.CritereNullableScalarRelationFilter, Prisma.CritereWhereInput> | null;
    declarePar?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    causes?: Prisma.CauseListRelationFilter;
    actionsCorrectives?: Prisma.ActionCorrectiveListRelationFilter;
    transitions?: Prisma.EvenementTransitionListRelationFilter;
    piecesJointes?: Prisma.PieceJointeListRelationFilter;
}, "id">;
export type EvenementIndesirableOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    typeEiId?: Prisma.SortOrderInput | Prisma.SortOrder;
    serviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    critereId?: Prisma.SortOrderInput | Prisma.SortOrder;
    declareParId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    gravite?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateDeclaration?: Prisma.SortOrder;
    dateCloture?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EvenementIndesirableCountOrderByAggregateInput;
    _max?: Prisma.EvenementIndesirableMaxOrderByAggregateInput;
    _min?: Prisma.EvenementIndesirableMinOrderByAggregateInput;
};
export type EvenementIndesirableScalarWhereWithAggregatesInput = {
    AND?: Prisma.EvenementIndesirableScalarWhereWithAggregatesInput | Prisma.EvenementIndesirableScalarWhereWithAggregatesInput[];
    OR?: Prisma.EvenementIndesirableScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EvenementIndesirableScalarWhereWithAggregatesInput | Prisma.EvenementIndesirableScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EvenementIndesirable"> | string;
    organisationId?: Prisma.StringWithAggregatesFilter<"EvenementIndesirable"> | string;
    typeEiId?: Prisma.StringNullableWithAggregatesFilter<"EvenementIndesirable"> | string | null;
    serviceId?: Prisma.StringNullableWithAggregatesFilter<"EvenementIndesirable"> | string | null;
    critereId?: Prisma.StringNullableWithAggregatesFilter<"EvenementIndesirable"> | string | null;
    declareParId?: Prisma.StringWithAggregatesFilter<"EvenementIndesirable"> | string;
    description?: Prisma.StringWithAggregatesFilter<"EvenementIndesirable"> | string;
    gravite?: Prisma.EnumGraviteEiNullableWithAggregatesFilter<"EvenementIndesirable"> | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiWithAggregatesFilter<"EvenementIndesirable"> | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeWithAggregatesFilter<"EvenementIndesirable"> | Date | string;
    dateCloture?: Prisma.DateTimeNullableWithAggregatesFilter<"EvenementIndesirable"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EvenementIndesirable"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EvenementIndesirable"> | Date | string;
};
export type EvenementIndesirableCreateInput = {
    id?: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutEvenementsIndesirablesInput;
    typeEi?: Prisma.TypeEiCreateNestedOneWithoutEvenementsInput;
    service?: Prisma.ServiceCreateNestedOneWithoutEvenementsIndesirablesInput;
    critere?: Prisma.CritereCreateNestedOneWithoutEvenementsIndesirablesInput;
    declarePar: Prisma.UtilisateurCreateNestedOneWithoutEvenementsDeclaresInput;
    causes?: Prisma.CauseCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableUncheckedCreateInput = {
    id?: string;
    organisationId: string;
    typeEiId?: string | null;
    serviceId?: string | null;
    critereId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    causes?: Prisma.CauseUncheckedCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionUncheckedCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeUncheckedCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutEvenementsIndesirablesNestedInput;
    typeEi?: Prisma.TypeEiUpdateOneWithoutEvenementsNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutEvenementsIndesirablesNestedInput;
    critere?: Prisma.CritereUpdateOneWithoutEvenementsIndesirablesNestedInput;
    declarePar?: Prisma.UtilisateurUpdateOneRequiredWithoutEvenementsDeclaresNestedInput;
    causes?: Prisma.CauseUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    causes?: Prisma.CauseUncheckedUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUncheckedUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUncheckedUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableCreateManyInput = {
    id?: string;
    organisationId: string;
    typeEiId?: string | null;
    serviceId?: string | null;
    critereId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EvenementIndesirableUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementIndesirableUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementIndesirableListRelationFilter = {
    every?: Prisma.EvenementIndesirableWhereInput;
    some?: Prisma.EvenementIndesirableWhereInput;
    none?: Prisma.EvenementIndesirableWhereInput;
};
export type EvenementIndesirableOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EvenementIndesirableOrderByRelevanceInput = {
    fields: Prisma.EvenementIndesirableOrderByRelevanceFieldEnum | Prisma.EvenementIndesirableOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type EvenementIndesirableCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    typeEiId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    critereId?: Prisma.SortOrder;
    declareParId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    gravite?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateDeclaration?: Prisma.SortOrder;
    dateCloture?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EvenementIndesirableMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    typeEiId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    critereId?: Prisma.SortOrder;
    declareParId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    gravite?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateDeclaration?: Prisma.SortOrder;
    dateCloture?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EvenementIndesirableMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    typeEiId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    critereId?: Prisma.SortOrder;
    declareParId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    gravite?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateDeclaration?: Prisma.SortOrder;
    dateCloture?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EvenementIndesirableScalarRelationFilter = {
    is?: Prisma.EvenementIndesirableWhereInput;
    isNot?: Prisma.EvenementIndesirableWhereInput;
};
export type EvenementIndesirableCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutOrganisationInput, Prisma.EvenementIndesirableUncheckedCreateWithoutOrganisationInput> | Prisma.EvenementIndesirableCreateWithoutOrganisationInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutOrganisationInput | Prisma.EvenementIndesirableCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyOrganisationInputEnvelope;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
};
export type EvenementIndesirableUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutOrganisationInput, Prisma.EvenementIndesirableUncheckedCreateWithoutOrganisationInput> | Prisma.EvenementIndesirableCreateWithoutOrganisationInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutOrganisationInput | Prisma.EvenementIndesirableCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyOrganisationInputEnvelope;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
};
export type EvenementIndesirableUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutOrganisationInput, Prisma.EvenementIndesirableUncheckedCreateWithoutOrganisationInput> | Prisma.EvenementIndesirableCreateWithoutOrganisationInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutOrganisationInput | Prisma.EvenementIndesirableCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyOrganisationInputEnvelope;
    set?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    disconnect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    delete?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    update?: Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.EvenementIndesirableUpdateManyWithWhereWithoutOrganisationInput | Prisma.EvenementIndesirableUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.EvenementIndesirableScalarWhereInput | Prisma.EvenementIndesirableScalarWhereInput[];
};
export type EvenementIndesirableUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutOrganisationInput, Prisma.EvenementIndesirableUncheckedCreateWithoutOrganisationInput> | Prisma.EvenementIndesirableCreateWithoutOrganisationInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutOrganisationInput | Prisma.EvenementIndesirableCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyOrganisationInputEnvelope;
    set?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    disconnect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    delete?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    update?: Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.EvenementIndesirableUpdateManyWithWhereWithoutOrganisationInput | Prisma.EvenementIndesirableUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.EvenementIndesirableScalarWhereInput | Prisma.EvenementIndesirableScalarWhereInput[];
};
export type EvenementIndesirableCreateNestedManyWithoutDeclareParInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutDeclareParInput, Prisma.EvenementIndesirableUncheckedCreateWithoutDeclareParInput> | Prisma.EvenementIndesirableCreateWithoutDeclareParInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutDeclareParInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutDeclareParInput | Prisma.EvenementIndesirableCreateOrConnectWithoutDeclareParInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyDeclareParInputEnvelope;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
};
export type EvenementIndesirableUncheckedCreateNestedManyWithoutDeclareParInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutDeclareParInput, Prisma.EvenementIndesirableUncheckedCreateWithoutDeclareParInput> | Prisma.EvenementIndesirableCreateWithoutDeclareParInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutDeclareParInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutDeclareParInput | Prisma.EvenementIndesirableCreateOrConnectWithoutDeclareParInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyDeclareParInputEnvelope;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
};
export type EvenementIndesirableUpdateManyWithoutDeclareParNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutDeclareParInput, Prisma.EvenementIndesirableUncheckedCreateWithoutDeclareParInput> | Prisma.EvenementIndesirableCreateWithoutDeclareParInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutDeclareParInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutDeclareParInput | Prisma.EvenementIndesirableCreateOrConnectWithoutDeclareParInput[];
    upsert?: Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutDeclareParInput | Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutDeclareParInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyDeclareParInputEnvelope;
    set?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    disconnect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    delete?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    update?: Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutDeclareParInput | Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutDeclareParInput[];
    updateMany?: Prisma.EvenementIndesirableUpdateManyWithWhereWithoutDeclareParInput | Prisma.EvenementIndesirableUpdateManyWithWhereWithoutDeclareParInput[];
    deleteMany?: Prisma.EvenementIndesirableScalarWhereInput | Prisma.EvenementIndesirableScalarWhereInput[];
};
export type EvenementIndesirableUncheckedUpdateManyWithoutDeclareParNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutDeclareParInput, Prisma.EvenementIndesirableUncheckedCreateWithoutDeclareParInput> | Prisma.EvenementIndesirableCreateWithoutDeclareParInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutDeclareParInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutDeclareParInput | Prisma.EvenementIndesirableCreateOrConnectWithoutDeclareParInput[];
    upsert?: Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutDeclareParInput | Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutDeclareParInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyDeclareParInputEnvelope;
    set?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    disconnect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    delete?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    update?: Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutDeclareParInput | Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutDeclareParInput[];
    updateMany?: Prisma.EvenementIndesirableUpdateManyWithWhereWithoutDeclareParInput | Prisma.EvenementIndesirableUpdateManyWithWhereWithoutDeclareParInput[];
    deleteMany?: Prisma.EvenementIndesirableScalarWhereInput | Prisma.EvenementIndesirableScalarWhereInput[];
};
export type EvenementIndesirableCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutServiceInput, Prisma.EvenementIndesirableUncheckedCreateWithoutServiceInput> | Prisma.EvenementIndesirableCreateWithoutServiceInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutServiceInput | Prisma.EvenementIndesirableCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyServiceInputEnvelope;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
};
export type EvenementIndesirableUncheckedCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutServiceInput, Prisma.EvenementIndesirableUncheckedCreateWithoutServiceInput> | Prisma.EvenementIndesirableCreateWithoutServiceInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutServiceInput | Prisma.EvenementIndesirableCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyServiceInputEnvelope;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
};
export type EvenementIndesirableUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutServiceInput, Prisma.EvenementIndesirableUncheckedCreateWithoutServiceInput> | Prisma.EvenementIndesirableCreateWithoutServiceInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutServiceInput | Prisma.EvenementIndesirableCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutServiceInput | Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyServiceInputEnvelope;
    set?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    disconnect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    delete?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    update?: Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutServiceInput | Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.EvenementIndesirableUpdateManyWithWhereWithoutServiceInput | Prisma.EvenementIndesirableUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.EvenementIndesirableScalarWhereInput | Prisma.EvenementIndesirableScalarWhereInput[];
};
export type EvenementIndesirableUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutServiceInput, Prisma.EvenementIndesirableUncheckedCreateWithoutServiceInput> | Prisma.EvenementIndesirableCreateWithoutServiceInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutServiceInput | Prisma.EvenementIndesirableCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutServiceInput | Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyServiceInputEnvelope;
    set?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    disconnect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    delete?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    update?: Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutServiceInput | Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.EvenementIndesirableUpdateManyWithWhereWithoutServiceInput | Prisma.EvenementIndesirableUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.EvenementIndesirableScalarWhereInput | Prisma.EvenementIndesirableScalarWhereInput[];
};
export type EvenementIndesirableCreateNestedManyWithoutCritereInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutCritereInput, Prisma.EvenementIndesirableUncheckedCreateWithoutCritereInput> | Prisma.EvenementIndesirableCreateWithoutCritereInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutCritereInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutCritereInput | Prisma.EvenementIndesirableCreateOrConnectWithoutCritereInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyCritereInputEnvelope;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
};
export type EvenementIndesirableUncheckedCreateNestedManyWithoutCritereInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutCritereInput, Prisma.EvenementIndesirableUncheckedCreateWithoutCritereInput> | Prisma.EvenementIndesirableCreateWithoutCritereInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutCritereInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutCritereInput | Prisma.EvenementIndesirableCreateOrConnectWithoutCritereInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyCritereInputEnvelope;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
};
export type EvenementIndesirableUpdateManyWithoutCritereNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutCritereInput, Prisma.EvenementIndesirableUncheckedCreateWithoutCritereInput> | Prisma.EvenementIndesirableCreateWithoutCritereInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutCritereInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutCritereInput | Prisma.EvenementIndesirableCreateOrConnectWithoutCritereInput[];
    upsert?: Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutCritereInput | Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutCritereInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyCritereInputEnvelope;
    set?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    disconnect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    delete?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    update?: Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutCritereInput | Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutCritereInput[];
    updateMany?: Prisma.EvenementIndesirableUpdateManyWithWhereWithoutCritereInput | Prisma.EvenementIndesirableUpdateManyWithWhereWithoutCritereInput[];
    deleteMany?: Prisma.EvenementIndesirableScalarWhereInput | Prisma.EvenementIndesirableScalarWhereInput[];
};
export type EvenementIndesirableUncheckedUpdateManyWithoutCritereNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutCritereInput, Prisma.EvenementIndesirableUncheckedCreateWithoutCritereInput> | Prisma.EvenementIndesirableCreateWithoutCritereInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutCritereInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutCritereInput | Prisma.EvenementIndesirableCreateOrConnectWithoutCritereInput[];
    upsert?: Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutCritereInput | Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutCritereInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyCritereInputEnvelope;
    set?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    disconnect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    delete?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    update?: Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutCritereInput | Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutCritereInput[];
    updateMany?: Prisma.EvenementIndesirableUpdateManyWithWhereWithoutCritereInput | Prisma.EvenementIndesirableUpdateManyWithWhereWithoutCritereInput[];
    deleteMany?: Prisma.EvenementIndesirableScalarWhereInput | Prisma.EvenementIndesirableScalarWhereInput[];
};
export type EvenementIndesirableCreateNestedManyWithoutTypeEiInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutTypeEiInput, Prisma.EvenementIndesirableUncheckedCreateWithoutTypeEiInput> | Prisma.EvenementIndesirableCreateWithoutTypeEiInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutTypeEiInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutTypeEiInput | Prisma.EvenementIndesirableCreateOrConnectWithoutTypeEiInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyTypeEiInputEnvelope;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
};
export type EvenementIndesirableUncheckedCreateNestedManyWithoutTypeEiInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutTypeEiInput, Prisma.EvenementIndesirableUncheckedCreateWithoutTypeEiInput> | Prisma.EvenementIndesirableCreateWithoutTypeEiInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutTypeEiInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutTypeEiInput | Prisma.EvenementIndesirableCreateOrConnectWithoutTypeEiInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyTypeEiInputEnvelope;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
};
export type EvenementIndesirableUpdateManyWithoutTypeEiNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutTypeEiInput, Prisma.EvenementIndesirableUncheckedCreateWithoutTypeEiInput> | Prisma.EvenementIndesirableCreateWithoutTypeEiInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutTypeEiInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutTypeEiInput | Prisma.EvenementIndesirableCreateOrConnectWithoutTypeEiInput[];
    upsert?: Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutTypeEiInput | Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutTypeEiInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyTypeEiInputEnvelope;
    set?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    disconnect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    delete?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    update?: Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutTypeEiInput | Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutTypeEiInput[];
    updateMany?: Prisma.EvenementIndesirableUpdateManyWithWhereWithoutTypeEiInput | Prisma.EvenementIndesirableUpdateManyWithWhereWithoutTypeEiInput[];
    deleteMany?: Prisma.EvenementIndesirableScalarWhereInput | Prisma.EvenementIndesirableScalarWhereInput[];
};
export type EvenementIndesirableUncheckedUpdateManyWithoutTypeEiNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutTypeEiInput, Prisma.EvenementIndesirableUncheckedCreateWithoutTypeEiInput> | Prisma.EvenementIndesirableCreateWithoutTypeEiInput[] | Prisma.EvenementIndesirableUncheckedCreateWithoutTypeEiInput[];
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutTypeEiInput | Prisma.EvenementIndesirableCreateOrConnectWithoutTypeEiInput[];
    upsert?: Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutTypeEiInput | Prisma.EvenementIndesirableUpsertWithWhereUniqueWithoutTypeEiInput[];
    createMany?: Prisma.EvenementIndesirableCreateManyTypeEiInputEnvelope;
    set?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    disconnect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    delete?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    connect?: Prisma.EvenementIndesirableWhereUniqueInput | Prisma.EvenementIndesirableWhereUniqueInput[];
    update?: Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutTypeEiInput | Prisma.EvenementIndesirableUpdateWithWhereUniqueWithoutTypeEiInput[];
    updateMany?: Prisma.EvenementIndesirableUpdateManyWithWhereWithoutTypeEiInput | Prisma.EvenementIndesirableUpdateManyWithWhereWithoutTypeEiInput[];
    deleteMany?: Prisma.EvenementIndesirableScalarWhereInput | Prisma.EvenementIndesirableScalarWhereInput[];
};
export type NullableEnumGraviteEiFieldUpdateOperationsInput = {
    set?: $Enums.GraviteEi | null;
};
export type EnumStatutEiFieldUpdateOperationsInput = {
    set?: $Enums.StatutEi;
};
export type EvenementIndesirableCreateNestedOneWithoutTransitionsInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutTransitionsInput, Prisma.EvenementIndesirableUncheckedCreateWithoutTransitionsInput>;
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutTransitionsInput;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput;
};
export type EvenementIndesirableUpdateOneRequiredWithoutTransitionsNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutTransitionsInput, Prisma.EvenementIndesirableUncheckedCreateWithoutTransitionsInput>;
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutTransitionsInput;
    upsert?: Prisma.EvenementIndesirableUpsertWithoutTransitionsInput;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvenementIndesirableUpdateToOneWithWhereWithoutTransitionsInput, Prisma.EvenementIndesirableUpdateWithoutTransitionsInput>, Prisma.EvenementIndesirableUncheckedUpdateWithoutTransitionsInput>;
};
export type EvenementIndesirableCreateNestedOneWithoutCausesInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutCausesInput, Prisma.EvenementIndesirableUncheckedCreateWithoutCausesInput>;
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutCausesInput;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput;
};
export type EvenementIndesirableUpdateOneRequiredWithoutCausesNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutCausesInput, Prisma.EvenementIndesirableUncheckedCreateWithoutCausesInput>;
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutCausesInput;
    upsert?: Prisma.EvenementIndesirableUpsertWithoutCausesInput;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvenementIndesirableUpdateToOneWithWhereWithoutCausesInput, Prisma.EvenementIndesirableUpdateWithoutCausesInput>, Prisma.EvenementIndesirableUncheckedUpdateWithoutCausesInput>;
};
export type EvenementIndesirableCreateNestedOneWithoutActionsCorrectivesInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutActionsCorrectivesInput, Prisma.EvenementIndesirableUncheckedCreateWithoutActionsCorrectivesInput>;
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutActionsCorrectivesInput;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput;
};
export type EvenementIndesirableUpdateOneRequiredWithoutActionsCorrectivesNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutActionsCorrectivesInput, Prisma.EvenementIndesirableUncheckedCreateWithoutActionsCorrectivesInput>;
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutActionsCorrectivesInput;
    upsert?: Prisma.EvenementIndesirableUpsertWithoutActionsCorrectivesInput;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvenementIndesirableUpdateToOneWithWhereWithoutActionsCorrectivesInput, Prisma.EvenementIndesirableUpdateWithoutActionsCorrectivesInput>, Prisma.EvenementIndesirableUncheckedUpdateWithoutActionsCorrectivesInput>;
};
export type EvenementIndesirableCreateNestedOneWithoutPiecesJointesInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutPiecesJointesInput, Prisma.EvenementIndesirableUncheckedCreateWithoutPiecesJointesInput>;
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutPiecesJointesInput;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput;
};
export type EvenementIndesirableUpdateOneRequiredWithoutPiecesJointesNestedInput = {
    create?: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutPiecesJointesInput, Prisma.EvenementIndesirableUncheckedCreateWithoutPiecesJointesInput>;
    connectOrCreate?: Prisma.EvenementIndesirableCreateOrConnectWithoutPiecesJointesInput;
    upsert?: Prisma.EvenementIndesirableUpsertWithoutPiecesJointesInput;
    connect?: Prisma.EvenementIndesirableWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvenementIndesirableUpdateToOneWithWhereWithoutPiecesJointesInput, Prisma.EvenementIndesirableUpdateWithoutPiecesJointesInput>, Prisma.EvenementIndesirableUncheckedUpdateWithoutPiecesJointesInput>;
};
export type EvenementIndesirableCreateWithoutOrganisationInput = {
    id?: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    typeEi?: Prisma.TypeEiCreateNestedOneWithoutEvenementsInput;
    service?: Prisma.ServiceCreateNestedOneWithoutEvenementsIndesirablesInput;
    critere?: Prisma.CritereCreateNestedOneWithoutEvenementsIndesirablesInput;
    declarePar: Prisma.UtilisateurCreateNestedOneWithoutEvenementsDeclaresInput;
    causes?: Prisma.CauseCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableUncheckedCreateWithoutOrganisationInput = {
    id?: string;
    typeEiId?: string | null;
    serviceId?: string | null;
    critereId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    causes?: Prisma.CauseUncheckedCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionUncheckedCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeUncheckedCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableCreateOrConnectWithoutOrganisationInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutOrganisationInput, Prisma.EvenementIndesirableUncheckedCreateWithoutOrganisationInput>;
};
export type EvenementIndesirableCreateManyOrganisationInputEnvelope = {
    data: Prisma.EvenementIndesirableCreateManyOrganisationInput | Prisma.EvenementIndesirableCreateManyOrganisationInput[];
    skipDuplicates?: boolean;
};
export type EvenementIndesirableUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutOrganisationInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutOrganisationInput>;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutOrganisationInput, Prisma.EvenementIndesirableUncheckedCreateWithoutOrganisationInput>;
};
export type EvenementIndesirableUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutOrganisationInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutOrganisationInput>;
};
export type EvenementIndesirableUpdateManyWithWhereWithoutOrganisationInput = {
    where: Prisma.EvenementIndesirableScalarWhereInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateManyMutationInput, Prisma.EvenementIndesirableUncheckedUpdateManyWithoutOrganisationInput>;
};
export type EvenementIndesirableScalarWhereInput = {
    AND?: Prisma.EvenementIndesirableScalarWhereInput | Prisma.EvenementIndesirableScalarWhereInput[];
    OR?: Prisma.EvenementIndesirableScalarWhereInput[];
    NOT?: Prisma.EvenementIndesirableScalarWhereInput | Prisma.EvenementIndesirableScalarWhereInput[];
    id?: Prisma.StringFilter<"EvenementIndesirable"> | string;
    organisationId?: Prisma.StringFilter<"EvenementIndesirable"> | string;
    typeEiId?: Prisma.StringNullableFilter<"EvenementIndesirable"> | string | null;
    serviceId?: Prisma.StringNullableFilter<"EvenementIndesirable"> | string | null;
    critereId?: Prisma.StringNullableFilter<"EvenementIndesirable"> | string | null;
    declareParId?: Prisma.StringFilter<"EvenementIndesirable"> | string;
    description?: Prisma.StringFilter<"EvenementIndesirable"> | string;
    gravite?: Prisma.EnumGraviteEiNullableFilter<"EvenementIndesirable"> | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFilter<"EvenementIndesirable"> | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFilter<"EvenementIndesirable"> | Date | string;
    dateCloture?: Prisma.DateTimeNullableFilter<"EvenementIndesirable"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EvenementIndesirable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvenementIndesirable"> | Date | string;
};
export type EvenementIndesirableCreateWithoutDeclareParInput = {
    id?: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutEvenementsIndesirablesInput;
    typeEi?: Prisma.TypeEiCreateNestedOneWithoutEvenementsInput;
    service?: Prisma.ServiceCreateNestedOneWithoutEvenementsIndesirablesInput;
    critere?: Prisma.CritereCreateNestedOneWithoutEvenementsIndesirablesInput;
    causes?: Prisma.CauseCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableUncheckedCreateWithoutDeclareParInput = {
    id?: string;
    organisationId: string;
    typeEiId?: string | null;
    serviceId?: string | null;
    critereId?: string | null;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    causes?: Prisma.CauseUncheckedCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionUncheckedCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeUncheckedCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableCreateOrConnectWithoutDeclareParInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutDeclareParInput, Prisma.EvenementIndesirableUncheckedCreateWithoutDeclareParInput>;
};
export type EvenementIndesirableCreateManyDeclareParInputEnvelope = {
    data: Prisma.EvenementIndesirableCreateManyDeclareParInput | Prisma.EvenementIndesirableCreateManyDeclareParInput[];
    skipDuplicates?: boolean;
};
export type EvenementIndesirableUpsertWithWhereUniqueWithoutDeclareParInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutDeclareParInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutDeclareParInput>;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutDeclareParInput, Prisma.EvenementIndesirableUncheckedCreateWithoutDeclareParInput>;
};
export type EvenementIndesirableUpdateWithWhereUniqueWithoutDeclareParInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutDeclareParInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutDeclareParInput>;
};
export type EvenementIndesirableUpdateManyWithWhereWithoutDeclareParInput = {
    where: Prisma.EvenementIndesirableScalarWhereInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateManyMutationInput, Prisma.EvenementIndesirableUncheckedUpdateManyWithoutDeclareParInput>;
};
export type EvenementIndesirableCreateWithoutServiceInput = {
    id?: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutEvenementsIndesirablesInput;
    typeEi?: Prisma.TypeEiCreateNestedOneWithoutEvenementsInput;
    critere?: Prisma.CritereCreateNestedOneWithoutEvenementsIndesirablesInput;
    declarePar: Prisma.UtilisateurCreateNestedOneWithoutEvenementsDeclaresInput;
    causes?: Prisma.CauseCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableUncheckedCreateWithoutServiceInput = {
    id?: string;
    organisationId: string;
    typeEiId?: string | null;
    critereId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    causes?: Prisma.CauseUncheckedCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionUncheckedCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeUncheckedCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableCreateOrConnectWithoutServiceInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutServiceInput, Prisma.EvenementIndesirableUncheckedCreateWithoutServiceInput>;
};
export type EvenementIndesirableCreateManyServiceInputEnvelope = {
    data: Prisma.EvenementIndesirableCreateManyServiceInput | Prisma.EvenementIndesirableCreateManyServiceInput[];
    skipDuplicates?: boolean;
};
export type EvenementIndesirableUpsertWithWhereUniqueWithoutServiceInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutServiceInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutServiceInput>;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutServiceInput, Prisma.EvenementIndesirableUncheckedCreateWithoutServiceInput>;
};
export type EvenementIndesirableUpdateWithWhereUniqueWithoutServiceInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutServiceInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutServiceInput>;
};
export type EvenementIndesirableUpdateManyWithWhereWithoutServiceInput = {
    where: Prisma.EvenementIndesirableScalarWhereInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateManyMutationInput, Prisma.EvenementIndesirableUncheckedUpdateManyWithoutServiceInput>;
};
export type EvenementIndesirableCreateWithoutCritereInput = {
    id?: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutEvenementsIndesirablesInput;
    typeEi?: Prisma.TypeEiCreateNestedOneWithoutEvenementsInput;
    service?: Prisma.ServiceCreateNestedOneWithoutEvenementsIndesirablesInput;
    declarePar: Prisma.UtilisateurCreateNestedOneWithoutEvenementsDeclaresInput;
    causes?: Prisma.CauseCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableUncheckedCreateWithoutCritereInput = {
    id?: string;
    organisationId: string;
    typeEiId?: string | null;
    serviceId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    causes?: Prisma.CauseUncheckedCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionUncheckedCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeUncheckedCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableCreateOrConnectWithoutCritereInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutCritereInput, Prisma.EvenementIndesirableUncheckedCreateWithoutCritereInput>;
};
export type EvenementIndesirableCreateManyCritereInputEnvelope = {
    data: Prisma.EvenementIndesirableCreateManyCritereInput | Prisma.EvenementIndesirableCreateManyCritereInput[];
    skipDuplicates?: boolean;
};
export type EvenementIndesirableUpsertWithWhereUniqueWithoutCritereInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutCritereInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutCritereInput>;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutCritereInput, Prisma.EvenementIndesirableUncheckedCreateWithoutCritereInput>;
};
export type EvenementIndesirableUpdateWithWhereUniqueWithoutCritereInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutCritereInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutCritereInput>;
};
export type EvenementIndesirableUpdateManyWithWhereWithoutCritereInput = {
    where: Prisma.EvenementIndesirableScalarWhereInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateManyMutationInput, Prisma.EvenementIndesirableUncheckedUpdateManyWithoutCritereInput>;
};
export type EvenementIndesirableCreateWithoutTypeEiInput = {
    id?: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutEvenementsIndesirablesInput;
    service?: Prisma.ServiceCreateNestedOneWithoutEvenementsIndesirablesInput;
    critere?: Prisma.CritereCreateNestedOneWithoutEvenementsIndesirablesInput;
    declarePar: Prisma.UtilisateurCreateNestedOneWithoutEvenementsDeclaresInput;
    causes?: Prisma.CauseCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableUncheckedCreateWithoutTypeEiInput = {
    id?: string;
    organisationId: string;
    serviceId?: string | null;
    critereId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    causes?: Prisma.CauseUncheckedCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionUncheckedCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeUncheckedCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableCreateOrConnectWithoutTypeEiInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutTypeEiInput, Prisma.EvenementIndesirableUncheckedCreateWithoutTypeEiInput>;
};
export type EvenementIndesirableCreateManyTypeEiInputEnvelope = {
    data: Prisma.EvenementIndesirableCreateManyTypeEiInput | Prisma.EvenementIndesirableCreateManyTypeEiInput[];
    skipDuplicates?: boolean;
};
export type EvenementIndesirableUpsertWithWhereUniqueWithoutTypeEiInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutTypeEiInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutTypeEiInput>;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutTypeEiInput, Prisma.EvenementIndesirableUncheckedCreateWithoutTypeEiInput>;
};
export type EvenementIndesirableUpdateWithWhereUniqueWithoutTypeEiInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutTypeEiInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutTypeEiInput>;
};
export type EvenementIndesirableUpdateManyWithWhereWithoutTypeEiInput = {
    where: Prisma.EvenementIndesirableScalarWhereInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateManyMutationInput, Prisma.EvenementIndesirableUncheckedUpdateManyWithoutTypeEiInput>;
};
export type EvenementIndesirableCreateWithoutTransitionsInput = {
    id?: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutEvenementsIndesirablesInput;
    typeEi?: Prisma.TypeEiCreateNestedOneWithoutEvenementsInput;
    service?: Prisma.ServiceCreateNestedOneWithoutEvenementsIndesirablesInput;
    critere?: Prisma.CritereCreateNestedOneWithoutEvenementsIndesirablesInput;
    declarePar: Prisma.UtilisateurCreateNestedOneWithoutEvenementsDeclaresInput;
    causes?: Prisma.CauseCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableUncheckedCreateWithoutTransitionsInput = {
    id?: string;
    organisationId: string;
    typeEiId?: string | null;
    serviceId?: string | null;
    critereId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    causes?: Prisma.CauseUncheckedCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeUncheckedCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableCreateOrConnectWithoutTransitionsInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutTransitionsInput, Prisma.EvenementIndesirableUncheckedCreateWithoutTransitionsInput>;
};
export type EvenementIndesirableUpsertWithoutTransitionsInput = {
    update: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutTransitionsInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutTransitionsInput>;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutTransitionsInput, Prisma.EvenementIndesirableUncheckedCreateWithoutTransitionsInput>;
    where?: Prisma.EvenementIndesirableWhereInput;
};
export type EvenementIndesirableUpdateToOneWithWhereWithoutTransitionsInput = {
    where?: Prisma.EvenementIndesirableWhereInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutTransitionsInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutTransitionsInput>;
};
export type EvenementIndesirableUpdateWithoutTransitionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutEvenementsIndesirablesNestedInput;
    typeEi?: Prisma.TypeEiUpdateOneWithoutEvenementsNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutEvenementsIndesirablesNestedInput;
    critere?: Prisma.CritereUpdateOneWithoutEvenementsIndesirablesNestedInput;
    declarePar?: Prisma.UtilisateurUpdateOneRequiredWithoutEvenementsDeclaresNestedInput;
    causes?: Prisma.CauseUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateWithoutTransitionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    causes?: Prisma.CauseUncheckedUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUncheckedUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableCreateWithoutCausesInput = {
    id?: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutEvenementsIndesirablesInput;
    typeEi?: Prisma.TypeEiCreateNestedOneWithoutEvenementsInput;
    service?: Prisma.ServiceCreateNestedOneWithoutEvenementsIndesirablesInput;
    critere?: Prisma.CritereCreateNestedOneWithoutEvenementsIndesirablesInput;
    declarePar: Prisma.UtilisateurCreateNestedOneWithoutEvenementsDeclaresInput;
    actionsCorrectives?: Prisma.ActionCorrectiveCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableUncheckedCreateWithoutCausesInput = {
    id?: string;
    organisationId: string;
    typeEiId?: string | null;
    serviceId?: string | null;
    critereId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionUncheckedCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeUncheckedCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableCreateOrConnectWithoutCausesInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutCausesInput, Prisma.EvenementIndesirableUncheckedCreateWithoutCausesInput>;
};
export type EvenementIndesirableUpsertWithoutCausesInput = {
    update: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutCausesInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutCausesInput>;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutCausesInput, Prisma.EvenementIndesirableUncheckedCreateWithoutCausesInput>;
    where?: Prisma.EvenementIndesirableWhereInput;
};
export type EvenementIndesirableUpdateToOneWithWhereWithoutCausesInput = {
    where?: Prisma.EvenementIndesirableWhereInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutCausesInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutCausesInput>;
};
export type EvenementIndesirableUpdateWithoutCausesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutEvenementsIndesirablesNestedInput;
    typeEi?: Prisma.TypeEiUpdateOneWithoutEvenementsNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutEvenementsIndesirablesNestedInput;
    critere?: Prisma.CritereUpdateOneWithoutEvenementsIndesirablesNestedInput;
    declarePar?: Prisma.UtilisateurUpdateOneRequiredWithoutEvenementsDeclaresNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateWithoutCausesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUncheckedUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUncheckedUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableCreateWithoutActionsCorrectivesInput = {
    id?: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutEvenementsIndesirablesInput;
    typeEi?: Prisma.TypeEiCreateNestedOneWithoutEvenementsInput;
    service?: Prisma.ServiceCreateNestedOneWithoutEvenementsIndesirablesInput;
    critere?: Prisma.CritereCreateNestedOneWithoutEvenementsIndesirablesInput;
    declarePar: Prisma.UtilisateurCreateNestedOneWithoutEvenementsDeclaresInput;
    causes?: Prisma.CauseCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableUncheckedCreateWithoutActionsCorrectivesInput = {
    id?: string;
    organisationId: string;
    typeEiId?: string | null;
    serviceId?: string | null;
    critereId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    causes?: Prisma.CauseUncheckedCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionUncheckedCreateNestedManyWithoutEvenementInput;
    piecesJointes?: Prisma.PieceJointeUncheckedCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableCreateOrConnectWithoutActionsCorrectivesInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutActionsCorrectivesInput, Prisma.EvenementIndesirableUncheckedCreateWithoutActionsCorrectivesInput>;
};
export type EvenementIndesirableUpsertWithoutActionsCorrectivesInput = {
    update: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutActionsCorrectivesInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutActionsCorrectivesInput>;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutActionsCorrectivesInput, Prisma.EvenementIndesirableUncheckedCreateWithoutActionsCorrectivesInput>;
    where?: Prisma.EvenementIndesirableWhereInput;
};
export type EvenementIndesirableUpdateToOneWithWhereWithoutActionsCorrectivesInput = {
    where?: Prisma.EvenementIndesirableWhereInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutActionsCorrectivesInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutActionsCorrectivesInput>;
};
export type EvenementIndesirableUpdateWithoutActionsCorrectivesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutEvenementsIndesirablesNestedInput;
    typeEi?: Prisma.TypeEiUpdateOneWithoutEvenementsNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutEvenementsIndesirablesNestedInput;
    critere?: Prisma.CritereUpdateOneWithoutEvenementsIndesirablesNestedInput;
    declarePar?: Prisma.UtilisateurUpdateOneRequiredWithoutEvenementsDeclaresNestedInput;
    causes?: Prisma.CauseUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateWithoutActionsCorrectivesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    causes?: Prisma.CauseUncheckedUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUncheckedUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUncheckedUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableCreateWithoutPiecesJointesInput = {
    id?: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutEvenementsIndesirablesInput;
    typeEi?: Prisma.TypeEiCreateNestedOneWithoutEvenementsInput;
    service?: Prisma.ServiceCreateNestedOneWithoutEvenementsIndesirablesInput;
    critere?: Prisma.CritereCreateNestedOneWithoutEvenementsIndesirablesInput;
    declarePar: Prisma.UtilisateurCreateNestedOneWithoutEvenementsDeclaresInput;
    causes?: Prisma.CauseCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableUncheckedCreateWithoutPiecesJointesInput = {
    id?: string;
    organisationId: string;
    typeEiId?: string | null;
    serviceId?: string | null;
    critereId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    causes?: Prisma.CauseUncheckedCreateNestedManyWithoutEvenementInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedCreateNestedManyWithoutEvenementInput;
    transitions?: Prisma.EvenementTransitionUncheckedCreateNestedManyWithoutEvenementInput;
};
export type EvenementIndesirableCreateOrConnectWithoutPiecesJointesInput = {
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutPiecesJointesInput, Prisma.EvenementIndesirableUncheckedCreateWithoutPiecesJointesInput>;
};
export type EvenementIndesirableUpsertWithoutPiecesJointesInput = {
    update: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutPiecesJointesInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutPiecesJointesInput>;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateWithoutPiecesJointesInput, Prisma.EvenementIndesirableUncheckedCreateWithoutPiecesJointesInput>;
    where?: Prisma.EvenementIndesirableWhereInput;
};
export type EvenementIndesirableUpdateToOneWithWhereWithoutPiecesJointesInput = {
    where?: Prisma.EvenementIndesirableWhereInput;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateWithoutPiecesJointesInput, Prisma.EvenementIndesirableUncheckedUpdateWithoutPiecesJointesInput>;
};
export type EvenementIndesirableUpdateWithoutPiecesJointesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutEvenementsIndesirablesNestedInput;
    typeEi?: Prisma.TypeEiUpdateOneWithoutEvenementsNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutEvenementsIndesirablesNestedInput;
    critere?: Prisma.CritereUpdateOneWithoutEvenementsIndesirablesNestedInput;
    declarePar?: Prisma.UtilisateurUpdateOneRequiredWithoutEvenementsDeclaresNestedInput;
    causes?: Prisma.CauseUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateWithoutPiecesJointesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    causes?: Prisma.CauseUncheckedUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUncheckedUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableCreateManyOrganisationInput = {
    id?: string;
    typeEiId?: string | null;
    serviceId?: string | null;
    critereId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EvenementIndesirableUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    typeEi?: Prisma.TypeEiUpdateOneWithoutEvenementsNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutEvenementsIndesirablesNestedInput;
    critere?: Prisma.CritereUpdateOneWithoutEvenementsIndesirablesNestedInput;
    declarePar?: Prisma.UtilisateurUpdateOneRequiredWithoutEvenementsDeclaresNestedInput;
    causes?: Prisma.CauseUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    causes?: Prisma.CauseUncheckedUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUncheckedUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUncheckedUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateManyWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementIndesirableCreateManyDeclareParInput = {
    id?: string;
    organisationId: string;
    typeEiId?: string | null;
    serviceId?: string | null;
    critereId?: string | null;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EvenementIndesirableUpdateWithoutDeclareParInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutEvenementsIndesirablesNestedInput;
    typeEi?: Prisma.TypeEiUpdateOneWithoutEvenementsNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutEvenementsIndesirablesNestedInput;
    critere?: Prisma.CritereUpdateOneWithoutEvenementsIndesirablesNestedInput;
    causes?: Prisma.CauseUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateWithoutDeclareParInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    causes?: Prisma.CauseUncheckedUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUncheckedUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUncheckedUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateManyWithoutDeclareParInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementIndesirableCreateManyServiceInput = {
    id?: string;
    organisationId: string;
    typeEiId?: string | null;
    critereId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EvenementIndesirableUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutEvenementsIndesirablesNestedInput;
    typeEi?: Prisma.TypeEiUpdateOneWithoutEvenementsNestedInput;
    critere?: Prisma.CritereUpdateOneWithoutEvenementsIndesirablesNestedInput;
    declarePar?: Prisma.UtilisateurUpdateOneRequiredWithoutEvenementsDeclaresNestedInput;
    causes?: Prisma.CauseUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    causes?: Prisma.CauseUncheckedUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUncheckedUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUncheckedUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateManyWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementIndesirableCreateManyCritereInput = {
    id?: string;
    organisationId: string;
    typeEiId?: string | null;
    serviceId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EvenementIndesirableUpdateWithoutCritereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutEvenementsIndesirablesNestedInput;
    typeEi?: Prisma.TypeEiUpdateOneWithoutEvenementsNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutEvenementsIndesirablesNestedInput;
    declarePar?: Prisma.UtilisateurUpdateOneRequiredWithoutEvenementsDeclaresNestedInput;
    causes?: Prisma.CauseUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateWithoutCritereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    causes?: Prisma.CauseUncheckedUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUncheckedUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUncheckedUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateManyWithoutCritereInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    typeEiId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementIndesirableCreateManyTypeEiInput = {
    id?: string;
    organisationId: string;
    serviceId?: string | null;
    critereId?: string | null;
    declareParId: string;
    description: string;
    gravite?: $Enums.GraviteEi | null;
    statut?: $Enums.StatutEi;
    dateDeclaration?: Date | string;
    dateCloture?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EvenementIndesirableUpdateWithoutTypeEiInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutEvenementsIndesirablesNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutEvenementsIndesirablesNestedInput;
    critere?: Prisma.CritereUpdateOneWithoutEvenementsIndesirablesNestedInput;
    declarePar?: Prisma.UtilisateurUpdateOneRequiredWithoutEvenementsDeclaresNestedInput;
    causes?: Prisma.CauseUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateWithoutTypeEiInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    causes?: Prisma.CauseUncheckedUpdateManyWithoutEvenementNestedInput;
    actionsCorrectives?: Prisma.ActionCorrectiveUncheckedUpdateManyWithoutEvenementNestedInput;
    transitions?: Prisma.EvenementTransitionUncheckedUpdateManyWithoutEvenementNestedInput;
    piecesJointes?: Prisma.PieceJointeUncheckedUpdateManyWithoutEvenementNestedInput;
};
export type EvenementIndesirableUncheckedUpdateManyWithoutTypeEiInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    critereId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    declareParId?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    gravite?: Prisma.NullableEnumGraviteEiFieldUpdateOperationsInput | $Enums.GraviteEi | null;
    statut?: Prisma.EnumStatutEiFieldUpdateOperationsInput | $Enums.StatutEi;
    dateDeclaration?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateCloture?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvenementIndesirableCountOutputType = {
    causes: number;
    actionsCorrectives: number;
    transitions: number;
    piecesJointes: number;
};
export type EvenementIndesirableCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    causes?: boolean | EvenementIndesirableCountOutputTypeCountCausesArgs;
    actionsCorrectives?: boolean | EvenementIndesirableCountOutputTypeCountActionsCorrectivesArgs;
    transitions?: boolean | EvenementIndesirableCountOutputTypeCountTransitionsArgs;
    piecesJointes?: boolean | EvenementIndesirableCountOutputTypeCountPiecesJointesArgs;
};
export type EvenementIndesirableCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementIndesirableCountOutputTypeSelect<ExtArgs> | null;
};
export type EvenementIndesirableCountOutputTypeCountCausesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CauseWhereInput;
};
export type EvenementIndesirableCountOutputTypeCountActionsCorrectivesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActionCorrectiveWhereInput;
};
export type EvenementIndesirableCountOutputTypeCountTransitionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvenementTransitionWhereInput;
};
export type EvenementIndesirableCountOutputTypeCountPiecesJointesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PieceJointeWhereInput;
};
export type EvenementIndesirableSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organisationId?: boolean;
    typeEiId?: boolean;
    serviceId?: boolean;
    critereId?: boolean;
    declareParId?: boolean;
    description?: boolean;
    gravite?: boolean;
    statut?: boolean;
    dateDeclaration?: boolean;
    dateCloture?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    typeEi?: boolean | Prisma.EvenementIndesirable$typeEiArgs<ExtArgs>;
    service?: boolean | Prisma.EvenementIndesirable$serviceArgs<ExtArgs>;
    critere?: boolean | Prisma.EvenementIndesirable$critereArgs<ExtArgs>;
    declarePar?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    causes?: boolean | Prisma.EvenementIndesirable$causesArgs<ExtArgs>;
    actionsCorrectives?: boolean | Prisma.EvenementIndesirable$actionsCorrectivesArgs<ExtArgs>;
    transitions?: boolean | Prisma.EvenementIndesirable$transitionsArgs<ExtArgs>;
    piecesJointes?: boolean | Prisma.EvenementIndesirable$piecesJointesArgs<ExtArgs>;
    _count?: boolean | Prisma.EvenementIndesirableCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evenementIndesirable"]>;
export type EvenementIndesirableSelectScalar = {
    id?: boolean;
    organisationId?: boolean;
    typeEiId?: boolean;
    serviceId?: boolean;
    critereId?: boolean;
    declareParId?: boolean;
    description?: boolean;
    gravite?: boolean;
    statut?: boolean;
    dateDeclaration?: boolean;
    dateCloture?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EvenementIndesirableOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organisationId" | "typeEiId" | "serviceId" | "critereId" | "declareParId" | "description" | "gravite" | "statut" | "dateDeclaration" | "dateCloture" | "createdAt" | "updatedAt", ExtArgs["result"]["evenementIndesirable"]>;
export type EvenementIndesirableInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    typeEi?: boolean | Prisma.EvenementIndesirable$typeEiArgs<ExtArgs>;
    service?: boolean | Prisma.EvenementIndesirable$serviceArgs<ExtArgs>;
    critere?: boolean | Prisma.EvenementIndesirable$critereArgs<ExtArgs>;
    declarePar?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    causes?: boolean | Prisma.EvenementIndesirable$causesArgs<ExtArgs>;
    actionsCorrectives?: boolean | Prisma.EvenementIndesirable$actionsCorrectivesArgs<ExtArgs>;
    transitions?: boolean | Prisma.EvenementIndesirable$transitionsArgs<ExtArgs>;
    piecesJointes?: boolean | Prisma.EvenementIndesirable$piecesJointesArgs<ExtArgs>;
    _count?: boolean | Prisma.EvenementIndesirableCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $EvenementIndesirablePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EvenementIndesirable";
    objects: {
        organisation: Prisma.$OrganisationPayload<ExtArgs>;
        typeEi: Prisma.$TypeEiPayload<ExtArgs> | null;
        service: Prisma.$ServicePayload<ExtArgs> | null;
        critere: Prisma.$CriterePayload<ExtArgs> | null;
        declarePar: Prisma.$UtilisateurPayload<ExtArgs>;
        causes: Prisma.$CausePayload<ExtArgs>[];
        actionsCorrectives: Prisma.$ActionCorrectivePayload<ExtArgs>[];
        transitions: Prisma.$EvenementTransitionPayload<ExtArgs>[];
        piecesJointes: Prisma.$PieceJointePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organisationId: string;
        typeEiId: string | null;
        serviceId: string | null;
        critereId: string | null;
        declareParId: string;
        description: string;
        gravite: $Enums.GraviteEi | null;
        statut: $Enums.StatutEi;
        dateDeclaration: Date;
        dateCloture: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["evenementIndesirable"]>;
    composites: {};
};
export type EvenementIndesirableGetPayload<S extends boolean | null | undefined | EvenementIndesirableDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload, S>;
export type EvenementIndesirableCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EvenementIndesirableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvenementIndesirableCountAggregateInputType | true;
};
export interface EvenementIndesirableDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EvenementIndesirable'];
        meta: {
            name: 'EvenementIndesirable';
        };
    };
    findUnique<T extends EvenementIndesirableFindUniqueArgs>(args: Prisma.SelectSubset<T, EvenementIndesirableFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvenementIndesirableClient<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EvenementIndesirableFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvenementIndesirableFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvenementIndesirableClient<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EvenementIndesirableFindFirstArgs>(args?: Prisma.SelectSubset<T, EvenementIndesirableFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvenementIndesirableClient<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EvenementIndesirableFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvenementIndesirableFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvenementIndesirableClient<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EvenementIndesirableFindManyArgs>(args?: Prisma.SelectSubset<T, EvenementIndesirableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EvenementIndesirableCreateArgs>(args: Prisma.SelectSubset<T, EvenementIndesirableCreateArgs<ExtArgs>>): Prisma.Prisma__EvenementIndesirableClient<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EvenementIndesirableCreateManyArgs>(args?: Prisma.SelectSubset<T, EvenementIndesirableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends EvenementIndesirableDeleteArgs>(args: Prisma.SelectSubset<T, EvenementIndesirableDeleteArgs<ExtArgs>>): Prisma.Prisma__EvenementIndesirableClient<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EvenementIndesirableUpdateArgs>(args: Prisma.SelectSubset<T, EvenementIndesirableUpdateArgs<ExtArgs>>): Prisma.Prisma__EvenementIndesirableClient<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EvenementIndesirableDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvenementIndesirableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EvenementIndesirableUpdateManyArgs>(args: Prisma.SelectSubset<T, EvenementIndesirableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends EvenementIndesirableUpsertArgs>(args: Prisma.SelectSubset<T, EvenementIndesirableUpsertArgs<ExtArgs>>): Prisma.Prisma__EvenementIndesirableClient<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EvenementIndesirableCountArgs>(args?: Prisma.Subset<T, EvenementIndesirableCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EvenementIndesirableCountAggregateOutputType> : number>;
    aggregate<T extends EvenementIndesirableAggregateArgs>(args: Prisma.Subset<T, EvenementIndesirableAggregateArgs>): Prisma.PrismaPromise<GetEvenementIndesirableAggregateType<T>>;
    groupBy<T extends EvenementIndesirableGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EvenementIndesirableGroupByArgs['orderBy'];
    } : {
        orderBy?: EvenementIndesirableGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EvenementIndesirableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvenementIndesirableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EvenementIndesirableFieldRefs;
}
export interface Prisma__EvenementIndesirableClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organisation<T extends Prisma.OrganisationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganisationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    typeEi<T extends Prisma.EvenementIndesirable$typeEiArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvenementIndesirable$typeEiArgs<ExtArgs>>): Prisma.Prisma__TypeEiClient<runtime.Types.Result.GetResult<Prisma.$TypeEiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    service<T extends Prisma.EvenementIndesirable$serviceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvenementIndesirable$serviceArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    critere<T extends Prisma.EvenementIndesirable$critereArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvenementIndesirable$critereArgs<ExtArgs>>): Prisma.Prisma__CritereClient<runtime.Types.Result.GetResult<Prisma.$CriterePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    declarePar<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    causes<T extends Prisma.EvenementIndesirable$causesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvenementIndesirable$causesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CausePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    actionsCorrectives<T extends Prisma.EvenementIndesirable$actionsCorrectivesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvenementIndesirable$actionsCorrectivesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActionCorrectivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transitions<T extends Prisma.EvenementIndesirable$transitionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvenementIndesirable$transitionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvenementTransitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    piecesJointes<T extends Prisma.EvenementIndesirable$piecesJointesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvenementIndesirable$piecesJointesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PieceJointePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EvenementIndesirableFieldRefs {
    readonly id: Prisma.FieldRef<"EvenementIndesirable", 'String'>;
    readonly organisationId: Prisma.FieldRef<"EvenementIndesirable", 'String'>;
    readonly typeEiId: Prisma.FieldRef<"EvenementIndesirable", 'String'>;
    readonly serviceId: Prisma.FieldRef<"EvenementIndesirable", 'String'>;
    readonly critereId: Prisma.FieldRef<"EvenementIndesirable", 'String'>;
    readonly declareParId: Prisma.FieldRef<"EvenementIndesirable", 'String'>;
    readonly description: Prisma.FieldRef<"EvenementIndesirable", 'String'>;
    readonly gravite: Prisma.FieldRef<"EvenementIndesirable", 'GraviteEi'>;
    readonly statut: Prisma.FieldRef<"EvenementIndesirable", 'StatutEi'>;
    readonly dateDeclaration: Prisma.FieldRef<"EvenementIndesirable", 'DateTime'>;
    readonly dateCloture: Prisma.FieldRef<"EvenementIndesirable", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"EvenementIndesirable", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EvenementIndesirable", 'DateTime'>;
}
export type EvenementIndesirableFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementIndesirableSelect<ExtArgs> | null;
    omit?: Prisma.EvenementIndesirableOmit<ExtArgs> | null;
    include?: Prisma.EvenementIndesirableInclude<ExtArgs> | null;
    where: Prisma.EvenementIndesirableWhereUniqueInput;
};
export type EvenementIndesirableFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementIndesirableSelect<ExtArgs> | null;
    omit?: Prisma.EvenementIndesirableOmit<ExtArgs> | null;
    include?: Prisma.EvenementIndesirableInclude<ExtArgs> | null;
    where: Prisma.EvenementIndesirableWhereUniqueInput;
};
export type EvenementIndesirableFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvenementIndesirableFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvenementIndesirableFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvenementIndesirableCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementIndesirableSelect<ExtArgs> | null;
    omit?: Prisma.EvenementIndesirableOmit<ExtArgs> | null;
    include?: Prisma.EvenementIndesirableInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvenementIndesirableCreateInput, Prisma.EvenementIndesirableUncheckedCreateInput>;
};
export type EvenementIndesirableCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EvenementIndesirableCreateManyInput | Prisma.EvenementIndesirableCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EvenementIndesirableUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementIndesirableSelect<ExtArgs> | null;
    omit?: Prisma.EvenementIndesirableOmit<ExtArgs> | null;
    include?: Prisma.EvenementIndesirableInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateInput, Prisma.EvenementIndesirableUncheckedUpdateInput>;
    where: Prisma.EvenementIndesirableWhereUniqueInput;
};
export type EvenementIndesirableUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EvenementIndesirableUpdateManyMutationInput, Prisma.EvenementIndesirableUncheckedUpdateManyInput>;
    where?: Prisma.EvenementIndesirableWhereInput;
    limit?: number;
};
export type EvenementIndesirableUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementIndesirableSelect<ExtArgs> | null;
    omit?: Prisma.EvenementIndesirableOmit<ExtArgs> | null;
    include?: Prisma.EvenementIndesirableInclude<ExtArgs> | null;
    where: Prisma.EvenementIndesirableWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvenementIndesirableCreateInput, Prisma.EvenementIndesirableUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EvenementIndesirableUpdateInput, Prisma.EvenementIndesirableUncheckedUpdateInput>;
};
export type EvenementIndesirableDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementIndesirableSelect<ExtArgs> | null;
    omit?: Prisma.EvenementIndesirableOmit<ExtArgs> | null;
    include?: Prisma.EvenementIndesirableInclude<ExtArgs> | null;
    where: Prisma.EvenementIndesirableWhereUniqueInput;
};
export type EvenementIndesirableDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvenementIndesirableWhereInput;
    limit?: number;
};
export type EvenementIndesirable$typeEiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TypeEiSelect<ExtArgs> | null;
    omit?: Prisma.TypeEiOmit<ExtArgs> | null;
    include?: Prisma.TypeEiInclude<ExtArgs> | null;
    where?: Prisma.TypeEiWhereInput;
};
export type EvenementIndesirable$serviceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where?: Prisma.ServiceWhereInput;
};
export type EvenementIndesirable$critereArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CritereSelect<ExtArgs> | null;
    omit?: Prisma.CritereOmit<ExtArgs> | null;
    include?: Prisma.CritereInclude<ExtArgs> | null;
    where?: Prisma.CritereWhereInput;
};
export type EvenementIndesirable$causesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CauseSelect<ExtArgs> | null;
    omit?: Prisma.CauseOmit<ExtArgs> | null;
    include?: Prisma.CauseInclude<ExtArgs> | null;
    where?: Prisma.CauseWhereInput;
    orderBy?: Prisma.CauseOrderByWithRelationInput | Prisma.CauseOrderByWithRelationInput[];
    cursor?: Prisma.CauseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CauseScalarFieldEnum | Prisma.CauseScalarFieldEnum[];
};
export type EvenementIndesirable$actionsCorrectivesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvenementIndesirable$transitionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvenementIndesirable$piecesJointesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvenementIndesirableDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvenementIndesirableSelect<ExtArgs> | null;
    omit?: Prisma.EvenementIndesirableOmit<ExtArgs> | null;
    include?: Prisma.EvenementIndesirableInclude<ExtArgs> | null;
};
