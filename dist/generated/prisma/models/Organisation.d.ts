import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrganisationModel = runtime.Types.Result.DefaultSelection<Prisma.$OrganisationPayload>;
export type AggregateOrganisation = {
    _count: OrganisationCountAggregateOutputType | null;
    _min: OrganisationMinAggregateOutputType | null;
    _max: OrganisationMaxAggregateOutputType | null;
};
export type OrganisationMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    ifu: string | null;
    type: $Enums.TypeEtablissement | null;
    adresse: string | null;
    telephone: string | null;
    email: string | null;
    actif: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganisationMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    ifu: string | null;
    type: $Enums.TypeEtablissement | null;
    adresse: string | null;
    telephone: string | null;
    email: string | null;
    actif: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganisationCountAggregateOutputType = {
    id: number;
    nom: number;
    ifu: number;
    type: number;
    adresse: number;
    telephone: number;
    email: number;
    actif: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrganisationMinAggregateInputType = {
    id?: true;
    nom?: true;
    ifu?: true;
    type?: true;
    adresse?: true;
    telephone?: true;
    email?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganisationMaxAggregateInputType = {
    id?: true;
    nom?: true;
    ifu?: true;
    type?: true;
    adresse?: true;
    telephone?: true;
    email?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganisationCountAggregateInputType = {
    id?: true;
    nom?: true;
    ifu?: true;
    type?: true;
    adresse?: true;
    telephone?: true;
    email?: true;
    actif?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrganisationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganisationWhereInput;
    orderBy?: Prisma.OrganisationOrderByWithRelationInput | Prisma.OrganisationOrderByWithRelationInput[];
    cursor?: Prisma.OrganisationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrganisationCountAggregateInputType;
    _min?: OrganisationMinAggregateInputType;
    _max?: OrganisationMaxAggregateInputType;
};
export type GetOrganisationAggregateType<T extends OrganisationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganisation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrganisation[P]> : Prisma.GetScalarType<T[P], AggregateOrganisation[P]>;
};
export type OrganisationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganisationWhereInput;
    orderBy?: Prisma.OrganisationOrderByWithAggregationInput | Prisma.OrganisationOrderByWithAggregationInput[];
    by: Prisma.OrganisationScalarFieldEnum[] | Prisma.OrganisationScalarFieldEnum;
    having?: Prisma.OrganisationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganisationCountAggregateInputType | true;
    _min?: OrganisationMinAggregateInputType;
    _max?: OrganisationMaxAggregateInputType;
};
export type OrganisationGroupByOutputType = {
    id: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse: string | null;
    telephone: string | null;
    email: string | null;
    actif: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganisationCountAggregateOutputType | null;
    _min: OrganisationMinAggregateOutputType | null;
    _max: OrganisationMaxAggregateOutputType | null;
};
export type GetOrganisationGroupByPayload<T extends OrganisationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrganisationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrganisationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrganisationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrganisationGroupByOutputType[P]>;
}>>;
export type OrganisationWhereInput = {
    AND?: Prisma.OrganisationWhereInput | Prisma.OrganisationWhereInput[];
    OR?: Prisma.OrganisationWhereInput[];
    NOT?: Prisma.OrganisationWhereInput | Prisma.OrganisationWhereInput[];
    id?: Prisma.StringFilter<"Organisation"> | string;
    nom?: Prisma.StringFilter<"Organisation"> | string;
    ifu?: Prisma.StringFilter<"Organisation"> | string;
    type?: Prisma.EnumTypeEtablissementFilter<"Organisation"> | $Enums.TypeEtablissement;
    adresse?: Prisma.StringNullableFilter<"Organisation"> | string | null;
    telephone?: Prisma.StringNullableFilter<"Organisation"> | string | null;
    email?: Prisma.StringNullableFilter<"Organisation"> | string | null;
    actif?: Prisma.BoolFilter<"Organisation"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Organisation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organisation"> | Date | string;
    utilisateurs?: Prisma.UtilisateurListRelationFilter;
    services?: Prisma.ServiceListRelationFilter;
    journalAudit?: Prisma.JournalAuditListRelationFilter;
    sessionsEvaluation?: Prisma.SessionEvaluationListRelationFilter;
    abonnementsModule?: Prisma.AbonnementModuleListRelationFilter;
    patients?: Prisma.PatientListRelationFilter;
    alertes?: Prisma.AlerteListRelationFilter;
    evenementsIndesirables?: Prisma.EvenementIndesirableListRelationFilter;
    reservations?: Prisma.ReservationListRelationFilter;
};
export type OrganisationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    ifu?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    adresse?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    utilisateurs?: Prisma.UtilisateurOrderByRelationAggregateInput;
    services?: Prisma.ServiceOrderByRelationAggregateInput;
    journalAudit?: Prisma.JournalAuditOrderByRelationAggregateInput;
    sessionsEvaluation?: Prisma.SessionEvaluationOrderByRelationAggregateInput;
    abonnementsModule?: Prisma.AbonnementModuleOrderByRelationAggregateInput;
    patients?: Prisma.PatientOrderByRelationAggregateInput;
    alertes?: Prisma.AlerteOrderByRelationAggregateInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableOrderByRelationAggregateInput;
    reservations?: Prisma.ReservationOrderByRelationAggregateInput;
    _relevance?: Prisma.OrganisationOrderByRelevanceInput;
};
export type OrganisationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ifu?: string;
    email?: string;
    AND?: Prisma.OrganisationWhereInput | Prisma.OrganisationWhereInput[];
    OR?: Prisma.OrganisationWhereInput[];
    NOT?: Prisma.OrganisationWhereInput | Prisma.OrganisationWhereInput[];
    nom?: Prisma.StringFilter<"Organisation"> | string;
    type?: Prisma.EnumTypeEtablissementFilter<"Organisation"> | $Enums.TypeEtablissement;
    adresse?: Prisma.StringNullableFilter<"Organisation"> | string | null;
    telephone?: Prisma.StringNullableFilter<"Organisation"> | string | null;
    actif?: Prisma.BoolFilter<"Organisation"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Organisation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organisation"> | Date | string;
    utilisateurs?: Prisma.UtilisateurListRelationFilter;
    services?: Prisma.ServiceListRelationFilter;
    journalAudit?: Prisma.JournalAuditListRelationFilter;
    sessionsEvaluation?: Prisma.SessionEvaluationListRelationFilter;
    abonnementsModule?: Prisma.AbonnementModuleListRelationFilter;
    patients?: Prisma.PatientListRelationFilter;
    alertes?: Prisma.AlerteListRelationFilter;
    evenementsIndesirables?: Prisma.EvenementIndesirableListRelationFilter;
    reservations?: Prisma.ReservationListRelationFilter;
}, "id" | "ifu" | "email">;
export type OrganisationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    ifu?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    adresse?: Prisma.SortOrderInput | Prisma.SortOrder;
    telephone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrganisationCountOrderByAggregateInput;
    _max?: Prisma.OrganisationMaxOrderByAggregateInput;
    _min?: Prisma.OrganisationMinOrderByAggregateInput;
};
export type OrganisationScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrganisationScalarWhereWithAggregatesInput | Prisma.OrganisationScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrganisationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrganisationScalarWhereWithAggregatesInput | Prisma.OrganisationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Organisation"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Organisation"> | string;
    ifu?: Prisma.StringWithAggregatesFilter<"Organisation"> | string;
    type?: Prisma.EnumTypeEtablissementWithAggregatesFilter<"Organisation"> | $Enums.TypeEtablissement;
    adresse?: Prisma.StringNullableWithAggregatesFilter<"Organisation"> | string | null;
    telephone?: Prisma.StringNullableWithAggregatesFilter<"Organisation"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Organisation"> | string | null;
    actif?: Prisma.BoolWithAggregatesFilter<"Organisation"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Organisation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Organisation"> | Date | string;
};
export type OrganisationCreateInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUncheckedCreateInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditUncheckedCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteUncheckedCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUncheckedUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUncheckedUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationCreateManyInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrganisationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganisationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganisationOrderByRelevanceInput = {
    fields: Prisma.OrganisationOrderByRelevanceFieldEnum | Prisma.OrganisationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type OrganisationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    ifu?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganisationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    ifu?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganisationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    ifu?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    adresse?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganisationNullableScalarRelationFilter = {
    is?: Prisma.OrganisationWhereInput | null;
    isNot?: Prisma.OrganisationWhereInput | null;
};
export type OrganisationScalarRelationFilter = {
    is?: Prisma.OrganisationWhereInput;
    isNot?: Prisma.OrganisationWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumTypeEtablissementFieldUpdateOperationsInput = {
    set?: $Enums.TypeEtablissement;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type OrganisationCreateNestedOneWithoutUtilisateursInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutUtilisateursInput, Prisma.OrganisationUncheckedCreateWithoutUtilisateursInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutUtilisateursInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationUpdateOneWithoutUtilisateursNestedInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutUtilisateursInput, Prisma.OrganisationUncheckedCreateWithoutUtilisateursInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutUtilisateursInput;
    upsert?: Prisma.OrganisationUpsertWithoutUtilisateursInput;
    disconnect?: Prisma.OrganisationWhereInput | boolean;
    delete?: Prisma.OrganisationWhereInput | boolean;
    connect?: Prisma.OrganisationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganisationUpdateToOneWithWhereWithoutUtilisateursInput, Prisma.OrganisationUpdateWithoutUtilisateursInput>, Prisma.OrganisationUncheckedUpdateWithoutUtilisateursInput>;
};
export type OrganisationCreateNestedOneWithoutServicesInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutServicesInput, Prisma.OrganisationUncheckedCreateWithoutServicesInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutServicesInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationUpdateOneRequiredWithoutServicesNestedInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutServicesInput, Prisma.OrganisationUncheckedCreateWithoutServicesInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutServicesInput;
    upsert?: Prisma.OrganisationUpsertWithoutServicesInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganisationUpdateToOneWithWhereWithoutServicesInput, Prisma.OrganisationUpdateWithoutServicesInput>, Prisma.OrganisationUncheckedUpdateWithoutServicesInput>;
};
export type OrganisationCreateNestedOneWithoutJournalAuditInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutJournalAuditInput, Prisma.OrganisationUncheckedCreateWithoutJournalAuditInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutJournalAuditInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationUpdateOneWithoutJournalAuditNestedInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutJournalAuditInput, Prisma.OrganisationUncheckedCreateWithoutJournalAuditInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutJournalAuditInput;
    upsert?: Prisma.OrganisationUpsertWithoutJournalAuditInput;
    disconnect?: Prisma.OrganisationWhereInput | boolean;
    delete?: Prisma.OrganisationWhereInput | boolean;
    connect?: Prisma.OrganisationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganisationUpdateToOneWithWhereWithoutJournalAuditInput, Prisma.OrganisationUpdateWithoutJournalAuditInput>, Prisma.OrganisationUncheckedUpdateWithoutJournalAuditInput>;
};
export type OrganisationCreateNestedOneWithoutSessionsEvaluationInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutSessionsEvaluationInput, Prisma.OrganisationUncheckedCreateWithoutSessionsEvaluationInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutSessionsEvaluationInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationUpdateOneRequiredWithoutSessionsEvaluationNestedInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutSessionsEvaluationInput, Prisma.OrganisationUncheckedCreateWithoutSessionsEvaluationInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutSessionsEvaluationInput;
    upsert?: Prisma.OrganisationUpsertWithoutSessionsEvaluationInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganisationUpdateToOneWithWhereWithoutSessionsEvaluationInput, Prisma.OrganisationUpdateWithoutSessionsEvaluationInput>, Prisma.OrganisationUncheckedUpdateWithoutSessionsEvaluationInput>;
};
export type OrganisationCreateNestedOneWithoutAbonnementsModuleInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutAbonnementsModuleInput, Prisma.OrganisationUncheckedCreateWithoutAbonnementsModuleInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutAbonnementsModuleInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationUpdateOneRequiredWithoutAbonnementsModuleNestedInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutAbonnementsModuleInput, Prisma.OrganisationUncheckedCreateWithoutAbonnementsModuleInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutAbonnementsModuleInput;
    upsert?: Prisma.OrganisationUpsertWithoutAbonnementsModuleInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganisationUpdateToOneWithWhereWithoutAbonnementsModuleInput, Prisma.OrganisationUpdateWithoutAbonnementsModuleInput>, Prisma.OrganisationUncheckedUpdateWithoutAbonnementsModuleInput>;
};
export type OrganisationCreateNestedOneWithoutPatientsInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutPatientsInput, Prisma.OrganisationUncheckedCreateWithoutPatientsInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutPatientsInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutPatientsInput, Prisma.OrganisationUncheckedCreateWithoutPatientsInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutPatientsInput;
    upsert?: Prisma.OrganisationUpsertWithoutPatientsInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganisationUpdateToOneWithWhereWithoutPatientsInput, Prisma.OrganisationUpdateWithoutPatientsInput>, Prisma.OrganisationUncheckedUpdateWithoutPatientsInput>;
};
export type OrganisationCreateNestedOneWithoutAlertesInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutAlertesInput, Prisma.OrganisationUncheckedCreateWithoutAlertesInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutAlertesInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationUpdateOneRequiredWithoutAlertesNestedInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutAlertesInput, Prisma.OrganisationUncheckedCreateWithoutAlertesInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutAlertesInput;
    upsert?: Prisma.OrganisationUpsertWithoutAlertesInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganisationUpdateToOneWithWhereWithoutAlertesInput, Prisma.OrganisationUpdateWithoutAlertesInput>, Prisma.OrganisationUncheckedUpdateWithoutAlertesInput>;
};
export type OrganisationCreateNestedOneWithoutEvenementsIndesirablesInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutEvenementsIndesirablesInput, Prisma.OrganisationUncheckedCreateWithoutEvenementsIndesirablesInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutEvenementsIndesirablesInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationUpdateOneRequiredWithoutEvenementsIndesirablesNestedInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutEvenementsIndesirablesInput, Prisma.OrganisationUncheckedCreateWithoutEvenementsIndesirablesInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutEvenementsIndesirablesInput;
    upsert?: Prisma.OrganisationUpsertWithoutEvenementsIndesirablesInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganisationUpdateToOneWithWhereWithoutEvenementsIndesirablesInput, Prisma.OrganisationUpdateWithoutEvenementsIndesirablesInput>, Prisma.OrganisationUncheckedUpdateWithoutEvenementsIndesirablesInput>;
};
export type OrganisationCreateNestedOneWithoutReservationsInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutReservationsInput, Prisma.OrganisationUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutReservationsInput;
    connect?: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationUpdateOneWithoutReservationsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganisationCreateWithoutReservationsInput, Prisma.OrganisationUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.OrganisationCreateOrConnectWithoutReservationsInput;
    upsert?: Prisma.OrganisationUpsertWithoutReservationsInput;
    disconnect?: Prisma.OrganisationWhereInput | boolean;
    delete?: Prisma.OrganisationWhereInput | boolean;
    connect?: Prisma.OrganisationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganisationUpdateToOneWithWhereWithoutReservationsInput, Prisma.OrganisationUpdateWithoutReservationsInput>, Prisma.OrganisationUncheckedUpdateWithoutReservationsInput>;
};
export type OrganisationCreateWithoutUtilisateursInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUncheckedCreateWithoutUtilisateursInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditUncheckedCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteUncheckedCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationCreateOrConnectWithoutUtilisateursInput = {
    where: Prisma.OrganisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutUtilisateursInput, Prisma.OrganisationUncheckedCreateWithoutUtilisateursInput>;
};
export type OrganisationUpsertWithoutUtilisateursInput = {
    update: Prisma.XOR<Prisma.OrganisationUpdateWithoutUtilisateursInput, Prisma.OrganisationUncheckedUpdateWithoutUtilisateursInput>;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutUtilisateursInput, Prisma.OrganisationUncheckedCreateWithoutUtilisateursInput>;
    where?: Prisma.OrganisationWhereInput;
};
export type OrganisationUpdateToOneWithWhereWithoutUtilisateursInput = {
    where?: Prisma.OrganisationWhereInput;
    data: Prisma.XOR<Prisma.OrganisationUpdateWithoutUtilisateursInput, Prisma.OrganisationUncheckedUpdateWithoutUtilisateursInput>;
};
export type OrganisationUpdateWithoutUtilisateursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    services?: Prisma.ServiceUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateWithoutUtilisateursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUncheckedUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUncheckedUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationCreateWithoutServicesInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUncheckedCreateWithoutServicesInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditUncheckedCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteUncheckedCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationCreateOrConnectWithoutServicesInput = {
    where: Prisma.OrganisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutServicesInput, Prisma.OrganisationUncheckedCreateWithoutServicesInput>;
};
export type OrganisationUpsertWithoutServicesInput = {
    update: Prisma.XOR<Prisma.OrganisationUpdateWithoutServicesInput, Prisma.OrganisationUncheckedUpdateWithoutServicesInput>;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutServicesInput, Prisma.OrganisationUncheckedCreateWithoutServicesInput>;
    where?: Prisma.OrganisationWhereInput;
};
export type OrganisationUpdateToOneWithWhereWithoutServicesInput = {
    where?: Prisma.OrganisationWhereInput;
    data: Prisma.XOR<Prisma.OrganisationUpdateWithoutServicesInput, Prisma.OrganisationUncheckedUpdateWithoutServicesInput>;
};
export type OrganisationUpdateWithoutServicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateWithoutServicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUncheckedUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUncheckedUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationCreateWithoutJournalAuditInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUncheckedCreateWithoutJournalAuditInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteUncheckedCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationCreateOrConnectWithoutJournalAuditInput = {
    where: Prisma.OrganisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutJournalAuditInput, Prisma.OrganisationUncheckedCreateWithoutJournalAuditInput>;
};
export type OrganisationUpsertWithoutJournalAuditInput = {
    update: Prisma.XOR<Prisma.OrganisationUpdateWithoutJournalAuditInput, Prisma.OrganisationUncheckedUpdateWithoutJournalAuditInput>;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutJournalAuditInput, Prisma.OrganisationUncheckedCreateWithoutJournalAuditInput>;
    where?: Prisma.OrganisationWhereInput;
};
export type OrganisationUpdateToOneWithWhereWithoutJournalAuditInput = {
    where?: Prisma.OrganisationWhereInput;
    data: Prisma.XOR<Prisma.OrganisationUpdateWithoutJournalAuditInput, Prisma.OrganisationUncheckedUpdateWithoutJournalAuditInput>;
};
export type OrganisationUpdateWithoutJournalAuditInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateWithoutJournalAuditInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUncheckedUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationCreateWithoutSessionsEvaluationInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUncheckedCreateWithoutSessionsEvaluationInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditUncheckedCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteUncheckedCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationCreateOrConnectWithoutSessionsEvaluationInput = {
    where: Prisma.OrganisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutSessionsEvaluationInput, Prisma.OrganisationUncheckedCreateWithoutSessionsEvaluationInput>;
};
export type OrganisationUpsertWithoutSessionsEvaluationInput = {
    update: Prisma.XOR<Prisma.OrganisationUpdateWithoutSessionsEvaluationInput, Prisma.OrganisationUncheckedUpdateWithoutSessionsEvaluationInput>;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutSessionsEvaluationInput, Prisma.OrganisationUncheckedCreateWithoutSessionsEvaluationInput>;
    where?: Prisma.OrganisationWhereInput;
};
export type OrganisationUpdateToOneWithWhereWithoutSessionsEvaluationInput = {
    where?: Prisma.OrganisationWhereInput;
    data: Prisma.XOR<Prisma.OrganisationUpdateWithoutSessionsEvaluationInput, Prisma.OrganisationUncheckedUpdateWithoutSessionsEvaluationInput>;
};
export type OrganisationUpdateWithoutSessionsEvaluationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateWithoutSessionsEvaluationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUncheckedUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUncheckedUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationCreateWithoutAbonnementsModuleInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUncheckedCreateWithoutAbonnementsModuleInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditUncheckedCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteUncheckedCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationCreateOrConnectWithoutAbonnementsModuleInput = {
    where: Prisma.OrganisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutAbonnementsModuleInput, Prisma.OrganisationUncheckedCreateWithoutAbonnementsModuleInput>;
};
export type OrganisationUpsertWithoutAbonnementsModuleInput = {
    update: Prisma.XOR<Prisma.OrganisationUpdateWithoutAbonnementsModuleInput, Prisma.OrganisationUncheckedUpdateWithoutAbonnementsModuleInput>;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutAbonnementsModuleInput, Prisma.OrganisationUncheckedCreateWithoutAbonnementsModuleInput>;
    where?: Prisma.OrganisationWhereInput;
};
export type OrganisationUpdateToOneWithWhereWithoutAbonnementsModuleInput = {
    where?: Prisma.OrganisationWhereInput;
    data: Prisma.XOR<Prisma.OrganisationUpdateWithoutAbonnementsModuleInput, Prisma.OrganisationUncheckedUpdateWithoutAbonnementsModuleInput>;
};
export type OrganisationUpdateWithoutAbonnementsModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateWithoutAbonnementsModuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUncheckedUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUncheckedUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationCreateWithoutPatientsInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUncheckedCreateWithoutPatientsInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditUncheckedCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteUncheckedCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationCreateOrConnectWithoutPatientsInput = {
    where: Prisma.OrganisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutPatientsInput, Prisma.OrganisationUncheckedCreateWithoutPatientsInput>;
};
export type OrganisationUpsertWithoutPatientsInput = {
    update: Prisma.XOR<Prisma.OrganisationUpdateWithoutPatientsInput, Prisma.OrganisationUncheckedUpdateWithoutPatientsInput>;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutPatientsInput, Prisma.OrganisationUncheckedCreateWithoutPatientsInput>;
    where?: Prisma.OrganisationWhereInput;
};
export type OrganisationUpdateToOneWithWhereWithoutPatientsInput = {
    where?: Prisma.OrganisationWhereInput;
    data: Prisma.XOR<Prisma.OrganisationUpdateWithoutPatientsInput, Prisma.OrganisationUncheckedUpdateWithoutPatientsInput>;
};
export type OrganisationUpdateWithoutPatientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateWithoutPatientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUncheckedUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUncheckedUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationCreateWithoutAlertesInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUncheckedCreateWithoutAlertesInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditUncheckedCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationCreateOrConnectWithoutAlertesInput = {
    where: Prisma.OrganisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutAlertesInput, Prisma.OrganisationUncheckedCreateWithoutAlertesInput>;
};
export type OrganisationUpsertWithoutAlertesInput = {
    update: Prisma.XOR<Prisma.OrganisationUpdateWithoutAlertesInput, Prisma.OrganisationUncheckedUpdateWithoutAlertesInput>;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutAlertesInput, Prisma.OrganisationUncheckedCreateWithoutAlertesInput>;
    where?: Prisma.OrganisationWhereInput;
};
export type OrganisationUpdateToOneWithWhereWithoutAlertesInput = {
    where?: Prisma.OrganisationWhereInput;
    data: Prisma.XOR<Prisma.OrganisationUpdateWithoutAlertesInput, Prisma.OrganisationUncheckedUpdateWithoutAlertesInput>;
};
export type OrganisationUpdateWithoutAlertesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateWithoutAlertesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUncheckedUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationCreateWithoutEvenementsIndesirablesInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUncheckedCreateWithoutEvenementsIndesirablesInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditUncheckedCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteUncheckedCreateNestedManyWithoutOrganisationInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationCreateOrConnectWithoutEvenementsIndesirablesInput = {
    where: Prisma.OrganisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutEvenementsIndesirablesInput, Prisma.OrganisationUncheckedCreateWithoutEvenementsIndesirablesInput>;
};
export type OrganisationUpsertWithoutEvenementsIndesirablesInput = {
    update: Prisma.XOR<Prisma.OrganisationUpdateWithoutEvenementsIndesirablesInput, Prisma.OrganisationUncheckedUpdateWithoutEvenementsIndesirablesInput>;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutEvenementsIndesirablesInput, Prisma.OrganisationUncheckedCreateWithoutEvenementsIndesirablesInput>;
    where?: Prisma.OrganisationWhereInput;
};
export type OrganisationUpdateToOneWithWhereWithoutEvenementsIndesirablesInput = {
    where?: Prisma.OrganisationWhereInput;
    data: Prisma.XOR<Prisma.OrganisationUpdateWithoutEvenementsIndesirablesInput, Prisma.OrganisationUncheckedUpdateWithoutEvenementsIndesirablesInput>;
};
export type OrganisationUpdateWithoutEvenementsIndesirablesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateWithoutEvenementsIndesirablesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUncheckedUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUncheckedUpdateManyWithoutOrganisationNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationCreateWithoutReservationsInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationUncheckedCreateWithoutReservationsInput = {
    id?: string;
    nom: string;
    ifu: string;
    type: $Enums.TypeEtablissement;
    adresse?: string | null;
    telephone?: string | null;
    email?: string | null;
    actif?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedCreateNestedManyWithoutOrganisationInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutOrganisationInput;
    journalAudit?: Prisma.JournalAuditUncheckedCreateNestedManyWithoutOrganisationInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedCreateNestedManyWithoutOrganisationInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedCreateNestedManyWithoutOrganisationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganisationInput;
    alertes?: Prisma.AlerteUncheckedCreateNestedManyWithoutOrganisationInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutOrganisationInput;
};
export type OrganisationCreateOrConnectWithoutReservationsInput = {
    where: Prisma.OrganisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutReservationsInput, Prisma.OrganisationUncheckedCreateWithoutReservationsInput>;
};
export type OrganisationUpsertWithoutReservationsInput = {
    update: Prisma.XOR<Prisma.OrganisationUpdateWithoutReservationsInput, Prisma.OrganisationUncheckedUpdateWithoutReservationsInput>;
    create: Prisma.XOR<Prisma.OrganisationCreateWithoutReservationsInput, Prisma.OrganisationUncheckedCreateWithoutReservationsInput>;
    where?: Prisma.OrganisationWhereInput;
};
export type OrganisationUpdateToOneWithWhereWithoutReservationsInput = {
    where?: Prisma.OrganisationWhereInput;
    data: Prisma.XOR<Prisma.OrganisationUpdateWithoutReservationsInput, Prisma.OrganisationUncheckedUpdateWithoutReservationsInput>;
};
export type OrganisationUpdateWithoutReservationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationUncheckedUpdateWithoutReservationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ifu?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    adresse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedUpdateManyWithoutOrganisationNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutOrganisationNestedInput;
    journalAudit?: Prisma.JournalAuditUncheckedUpdateManyWithoutOrganisationNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedUpdateManyWithoutOrganisationNestedInput;
    abonnementsModule?: Prisma.AbonnementModuleUncheckedUpdateManyWithoutOrganisationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganisationNestedInput;
    alertes?: Prisma.AlerteUncheckedUpdateManyWithoutOrganisationNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutOrganisationNestedInput;
};
export type OrganisationCountOutputType = {
    utilisateurs: number;
    services: number;
    journalAudit: number;
    sessionsEvaluation: number;
    abonnementsModule: number;
    patients: number;
    alertes: number;
    evenementsIndesirables: number;
    reservations: number;
};
export type OrganisationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateurs?: boolean | OrganisationCountOutputTypeCountUtilisateursArgs;
    services?: boolean | OrganisationCountOutputTypeCountServicesArgs;
    journalAudit?: boolean | OrganisationCountOutputTypeCountJournalAuditArgs;
    sessionsEvaluation?: boolean | OrganisationCountOutputTypeCountSessionsEvaluationArgs;
    abonnementsModule?: boolean | OrganisationCountOutputTypeCountAbonnementsModuleArgs;
    patients?: boolean | OrganisationCountOutputTypeCountPatientsArgs;
    alertes?: boolean | OrganisationCountOutputTypeCountAlertesArgs;
    evenementsIndesirables?: boolean | OrganisationCountOutputTypeCountEvenementsIndesirablesArgs;
    reservations?: boolean | OrganisationCountOutputTypeCountReservationsArgs;
};
export type OrganisationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganisationCountOutputTypeSelect<ExtArgs> | null;
};
export type OrganisationCountOutputTypeCountUtilisateursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UtilisateurWhereInput;
};
export type OrganisationCountOutputTypeCountServicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
};
export type OrganisationCountOutputTypeCountJournalAuditArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JournalAuditWhereInput;
};
export type OrganisationCountOutputTypeCountSessionsEvaluationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionEvaluationWhereInput;
};
export type OrganisationCountOutputTypeCountAbonnementsModuleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AbonnementModuleWhereInput;
};
export type OrganisationCountOutputTypeCountPatientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
};
export type OrganisationCountOutputTypeCountAlertesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlerteWhereInput;
};
export type OrganisationCountOutputTypeCountEvenementsIndesirablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvenementIndesirableWhereInput;
};
export type OrganisationCountOutputTypeCountReservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationWhereInput;
};
export type OrganisationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    ifu?: boolean;
    type?: boolean;
    adresse?: boolean;
    telephone?: boolean;
    email?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    utilisateurs?: boolean | Prisma.Organisation$utilisateursArgs<ExtArgs>;
    services?: boolean | Prisma.Organisation$servicesArgs<ExtArgs>;
    journalAudit?: boolean | Prisma.Organisation$journalAuditArgs<ExtArgs>;
    sessionsEvaluation?: boolean | Prisma.Organisation$sessionsEvaluationArgs<ExtArgs>;
    abonnementsModule?: boolean | Prisma.Organisation$abonnementsModuleArgs<ExtArgs>;
    patients?: boolean | Prisma.Organisation$patientsArgs<ExtArgs>;
    alertes?: boolean | Prisma.Organisation$alertesArgs<ExtArgs>;
    evenementsIndesirables?: boolean | Prisma.Organisation$evenementsIndesirablesArgs<ExtArgs>;
    reservations?: boolean | Prisma.Organisation$reservationsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganisationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organisation"]>;
export type OrganisationSelectScalar = {
    id?: boolean;
    nom?: boolean;
    ifu?: boolean;
    type?: boolean;
    adresse?: boolean;
    telephone?: boolean;
    email?: boolean;
    actif?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrganisationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "ifu" | "type" | "adresse" | "telephone" | "email" | "actif" | "createdAt" | "updatedAt", ExtArgs["result"]["organisation"]>;
export type OrganisationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    utilisateurs?: boolean | Prisma.Organisation$utilisateursArgs<ExtArgs>;
    services?: boolean | Prisma.Organisation$servicesArgs<ExtArgs>;
    journalAudit?: boolean | Prisma.Organisation$journalAuditArgs<ExtArgs>;
    sessionsEvaluation?: boolean | Prisma.Organisation$sessionsEvaluationArgs<ExtArgs>;
    abonnementsModule?: boolean | Prisma.Organisation$abonnementsModuleArgs<ExtArgs>;
    patients?: boolean | Prisma.Organisation$patientsArgs<ExtArgs>;
    alertes?: boolean | Prisma.Organisation$alertesArgs<ExtArgs>;
    evenementsIndesirables?: boolean | Prisma.Organisation$evenementsIndesirablesArgs<ExtArgs>;
    reservations?: boolean | Prisma.Organisation$reservationsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganisationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $OrganisationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Organisation";
    objects: {
        utilisateurs: Prisma.$UtilisateurPayload<ExtArgs>[];
        services: Prisma.$ServicePayload<ExtArgs>[];
        journalAudit: Prisma.$JournalAuditPayload<ExtArgs>[];
        sessionsEvaluation: Prisma.$SessionEvaluationPayload<ExtArgs>[];
        abonnementsModule: Prisma.$AbonnementModulePayload<ExtArgs>[];
        patients: Prisma.$PatientPayload<ExtArgs>[];
        alertes: Prisma.$AlertePayload<ExtArgs>[];
        evenementsIndesirables: Prisma.$EvenementIndesirablePayload<ExtArgs>[];
        reservations: Prisma.$ReservationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        ifu: string;
        type: $Enums.TypeEtablissement;
        adresse: string | null;
        telephone: string | null;
        email: string | null;
        actif: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["organisation"]>;
    composites: {};
};
export type OrganisationGetPayload<S extends boolean | null | undefined | OrganisationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrganisationPayload, S>;
export type OrganisationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrganisationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrganisationCountAggregateInputType | true;
};
export interface OrganisationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Organisation'];
        meta: {
            name: 'Organisation';
        };
    };
    findUnique<T extends OrganisationFindUniqueArgs>(args: Prisma.SelectSubset<T, OrganisationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrganisationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrganisationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrganisationFindFirstArgs>(args?: Prisma.SelectSubset<T, OrganisationFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrganisationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrganisationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrganisationFindManyArgs>(args?: Prisma.SelectSubset<T, OrganisationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrganisationCreateArgs>(args: Prisma.SelectSubset<T, OrganisationCreateArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrganisationCreateManyArgs>(args?: Prisma.SelectSubset<T, OrganisationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends OrganisationDeleteArgs>(args: Prisma.SelectSubset<T, OrganisationDeleteArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrganisationUpdateArgs>(args: Prisma.SelectSubset<T, OrganisationUpdateArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrganisationDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrganisationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrganisationUpdateManyArgs>(args: Prisma.SelectSubset<T, OrganisationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends OrganisationUpsertArgs>(args: Prisma.SelectSubset<T, OrganisationUpsertArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrganisationCountArgs>(args?: Prisma.Subset<T, OrganisationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrganisationCountAggregateOutputType> : number>;
    aggregate<T extends OrganisationAggregateArgs>(args: Prisma.Subset<T, OrganisationAggregateArgs>): Prisma.PrismaPromise<GetOrganisationAggregateType<T>>;
    groupBy<T extends OrganisationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrganisationGroupByArgs['orderBy'];
    } : {
        orderBy?: OrganisationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrganisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrganisationFieldRefs;
}
export interface Prisma__OrganisationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    utilisateurs<T extends Prisma.Organisation$utilisateursArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organisation$utilisateursArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    services<T extends Prisma.Organisation$servicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organisation$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    journalAudit<T extends Prisma.Organisation$journalAuditArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organisation$journalAuditArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JournalAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessionsEvaluation<T extends Prisma.Organisation$sessionsEvaluationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organisation$sessionsEvaluationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    abonnementsModule<T extends Prisma.Organisation$abonnementsModuleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organisation$abonnementsModuleArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AbonnementModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    patients<T extends Prisma.Organisation$patientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organisation$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    alertes<T extends Prisma.Organisation$alertesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organisation$alertesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    evenementsIndesirables<T extends Prisma.Organisation$evenementsIndesirablesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organisation$evenementsIndesirablesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reservations<T extends Prisma.Organisation$reservationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organisation$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrganisationFieldRefs {
    readonly id: Prisma.FieldRef<"Organisation", 'String'>;
    readonly nom: Prisma.FieldRef<"Organisation", 'String'>;
    readonly ifu: Prisma.FieldRef<"Organisation", 'String'>;
    readonly type: Prisma.FieldRef<"Organisation", 'TypeEtablissement'>;
    readonly adresse: Prisma.FieldRef<"Organisation", 'String'>;
    readonly telephone: Prisma.FieldRef<"Organisation", 'String'>;
    readonly email: Prisma.FieldRef<"Organisation", 'String'>;
    readonly actif: Prisma.FieldRef<"Organisation", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Organisation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Organisation", 'DateTime'>;
}
export type OrganisationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    where: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    where: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    where?: Prisma.OrganisationWhereInput;
    orderBy?: Prisma.OrganisationOrderByWithRelationInput | Prisma.OrganisationOrderByWithRelationInput[];
    cursor?: Prisma.OrganisationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganisationScalarFieldEnum | Prisma.OrganisationScalarFieldEnum[];
};
export type OrganisationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    where?: Prisma.OrganisationWhereInput;
    orderBy?: Prisma.OrganisationOrderByWithRelationInput | Prisma.OrganisationOrderByWithRelationInput[];
    cursor?: Prisma.OrganisationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganisationScalarFieldEnum | Prisma.OrganisationScalarFieldEnum[];
};
export type OrganisationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    where?: Prisma.OrganisationWhereInput;
    orderBy?: Prisma.OrganisationOrderByWithRelationInput | Prisma.OrganisationOrderByWithRelationInput[];
    cursor?: Prisma.OrganisationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganisationScalarFieldEnum | Prisma.OrganisationScalarFieldEnum[];
};
export type OrganisationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganisationCreateInput, Prisma.OrganisationUncheckedCreateInput>;
};
export type OrganisationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrganisationCreateManyInput | Prisma.OrganisationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganisationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganisationUpdateInput, Prisma.OrganisationUncheckedUpdateInput>;
    where: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrganisationUpdateManyMutationInput, Prisma.OrganisationUncheckedUpdateManyInput>;
    where?: Prisma.OrganisationWhereInput;
    limit?: number;
};
export type OrganisationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    where: Prisma.OrganisationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganisationCreateInput, Prisma.OrganisationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrganisationUpdateInput, Prisma.OrganisationUncheckedUpdateInput>;
};
export type OrganisationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    where: Prisma.OrganisationWhereUniqueInput;
};
export type OrganisationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganisationWhereInput;
    limit?: number;
};
export type Organisation$utilisateursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurInclude<ExtArgs> | null;
    where?: Prisma.UtilisateurWhereInput;
    orderBy?: Prisma.UtilisateurOrderByWithRelationInput | Prisma.UtilisateurOrderByWithRelationInput[];
    cursor?: Prisma.UtilisateurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UtilisateurScalarFieldEnum | Prisma.UtilisateurScalarFieldEnum[];
};
export type Organisation$servicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
export type Organisation$journalAuditArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Organisation$sessionsEvaluationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SessionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SessionEvaluationInclude<ExtArgs> | null;
    where?: Prisma.SessionEvaluationWhereInput;
    orderBy?: Prisma.SessionEvaluationOrderByWithRelationInput | Prisma.SessionEvaluationOrderByWithRelationInput[];
    cursor?: Prisma.SessionEvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionEvaluationScalarFieldEnum | Prisma.SessionEvaluationScalarFieldEnum[];
};
export type Organisation$abonnementsModuleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonnementModuleSelect<ExtArgs> | null;
    omit?: Prisma.AbonnementModuleOmit<ExtArgs> | null;
    include?: Prisma.AbonnementModuleInclude<ExtArgs> | null;
    where?: Prisma.AbonnementModuleWhereInput;
    orderBy?: Prisma.AbonnementModuleOrderByWithRelationInput | Prisma.AbonnementModuleOrderByWithRelationInput[];
    cursor?: Prisma.AbonnementModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AbonnementModuleScalarFieldEnum | Prisma.AbonnementModuleScalarFieldEnum[];
};
export type Organisation$patientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithRelationInput | Prisma.PatientOrderByWithRelationInput[];
    cursor?: Prisma.PatientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientScalarFieldEnum | Prisma.PatientScalarFieldEnum[];
};
export type Organisation$alertesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    include?: Prisma.AlerteInclude<ExtArgs> | null;
    where?: Prisma.AlerteWhereInput;
    orderBy?: Prisma.AlerteOrderByWithRelationInput | Prisma.AlerteOrderByWithRelationInput[];
    cursor?: Prisma.AlerteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlerteScalarFieldEnum | Prisma.AlerteScalarFieldEnum[];
};
export type Organisation$evenementsIndesirablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Organisation$reservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where?: Prisma.ReservationWhereInput;
    orderBy?: Prisma.ReservationOrderByWithRelationInput | Prisma.ReservationOrderByWithRelationInput[];
    cursor?: Prisma.ReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservationScalarFieldEnum | Prisma.ReservationScalarFieldEnum[];
};
export type OrganisationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
};
