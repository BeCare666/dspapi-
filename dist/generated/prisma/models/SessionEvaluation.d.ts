import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SessionEvaluationModel = runtime.Types.Result.DefaultSelection<Prisma.$SessionEvaluationPayload>;
export type AggregateSessionEvaluation = {
    _count: SessionEvaluationCountAggregateOutputType | null;
    _avg: SessionEvaluationAvgAggregateOutputType | null;
    _sum: SessionEvaluationSumAggregateOutputType | null;
    _min: SessionEvaluationMinAggregateOutputType | null;
    _max: SessionEvaluationMaxAggregateOutputType | null;
};
export type SessionEvaluationAvgAggregateOutputType = {
    scoreGlobal: number | null;
};
export type SessionEvaluationSumAggregateOutputType = {
    scoreGlobal: number | null;
};
export type SessionEvaluationMinAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    grilleId: string | null;
    demarreeParId: string | null;
    soumiseParId: string | null;
    statut: $Enums.StatutSessionEvaluation | null;
    scoreGlobal: number | null;
    dateDebut: Date | null;
    dateSoumission: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SessionEvaluationMaxAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    grilleId: string | null;
    demarreeParId: string | null;
    soumiseParId: string | null;
    statut: $Enums.StatutSessionEvaluation | null;
    scoreGlobal: number | null;
    dateDebut: Date | null;
    dateSoumission: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SessionEvaluationCountAggregateOutputType = {
    id: number;
    organisationId: number;
    grilleId: number;
    demarreeParId: number;
    soumiseParId: number;
    statut: number;
    scoreGlobal: number;
    dateDebut: number;
    dateSoumission: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SessionEvaluationAvgAggregateInputType = {
    scoreGlobal?: true;
};
export type SessionEvaluationSumAggregateInputType = {
    scoreGlobal?: true;
};
export type SessionEvaluationMinAggregateInputType = {
    id?: true;
    organisationId?: true;
    grilleId?: true;
    demarreeParId?: true;
    soumiseParId?: true;
    statut?: true;
    scoreGlobal?: true;
    dateDebut?: true;
    dateSoumission?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SessionEvaluationMaxAggregateInputType = {
    id?: true;
    organisationId?: true;
    grilleId?: true;
    demarreeParId?: true;
    soumiseParId?: true;
    statut?: true;
    scoreGlobal?: true;
    dateDebut?: true;
    dateSoumission?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SessionEvaluationCountAggregateInputType = {
    id?: true;
    organisationId?: true;
    grilleId?: true;
    demarreeParId?: true;
    soumiseParId?: true;
    statut?: true;
    scoreGlobal?: true;
    dateDebut?: true;
    dateSoumission?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SessionEvaluationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionEvaluationWhereInput;
    orderBy?: Prisma.SessionEvaluationOrderByWithRelationInput | Prisma.SessionEvaluationOrderByWithRelationInput[];
    cursor?: Prisma.SessionEvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SessionEvaluationCountAggregateInputType;
    _avg?: SessionEvaluationAvgAggregateInputType;
    _sum?: SessionEvaluationSumAggregateInputType;
    _min?: SessionEvaluationMinAggregateInputType;
    _max?: SessionEvaluationMaxAggregateInputType;
};
export type GetSessionEvaluationAggregateType<T extends SessionEvaluationAggregateArgs> = {
    [P in keyof T & keyof AggregateSessionEvaluation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSessionEvaluation[P]> : Prisma.GetScalarType<T[P], AggregateSessionEvaluation[P]>;
};
export type SessionEvaluationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionEvaluationWhereInput;
    orderBy?: Prisma.SessionEvaluationOrderByWithAggregationInput | Prisma.SessionEvaluationOrderByWithAggregationInput[];
    by: Prisma.SessionEvaluationScalarFieldEnum[] | Prisma.SessionEvaluationScalarFieldEnum;
    having?: Prisma.SessionEvaluationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SessionEvaluationCountAggregateInputType | true;
    _avg?: SessionEvaluationAvgAggregateInputType;
    _sum?: SessionEvaluationSumAggregateInputType;
    _min?: SessionEvaluationMinAggregateInputType;
    _max?: SessionEvaluationMaxAggregateInputType;
};
export type SessionEvaluationGroupByOutputType = {
    id: string;
    organisationId: string;
    grilleId: string;
    demarreeParId: string;
    soumiseParId: string | null;
    statut: $Enums.StatutSessionEvaluation;
    scoreGlobal: number | null;
    dateDebut: Date;
    dateSoumission: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SessionEvaluationCountAggregateOutputType | null;
    _avg: SessionEvaluationAvgAggregateOutputType | null;
    _sum: SessionEvaluationSumAggregateOutputType | null;
    _min: SessionEvaluationMinAggregateOutputType | null;
    _max: SessionEvaluationMaxAggregateOutputType | null;
};
export type GetSessionEvaluationGroupByPayload<T extends SessionEvaluationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SessionEvaluationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SessionEvaluationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SessionEvaluationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SessionEvaluationGroupByOutputType[P]>;
}>>;
export type SessionEvaluationWhereInput = {
    AND?: Prisma.SessionEvaluationWhereInput | Prisma.SessionEvaluationWhereInput[];
    OR?: Prisma.SessionEvaluationWhereInput[];
    NOT?: Prisma.SessionEvaluationWhereInput | Prisma.SessionEvaluationWhereInput[];
    id?: Prisma.StringFilter<"SessionEvaluation"> | string;
    organisationId?: Prisma.StringFilter<"SessionEvaluation"> | string;
    grilleId?: Prisma.StringFilter<"SessionEvaluation"> | string;
    demarreeParId?: Prisma.StringFilter<"SessionEvaluation"> | string;
    soumiseParId?: Prisma.StringNullableFilter<"SessionEvaluation"> | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationFilter<"SessionEvaluation"> | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.FloatNullableFilter<"SessionEvaluation"> | number | null;
    dateDebut?: Prisma.DateTimeFilter<"SessionEvaluation"> | Date | string;
    dateSoumission?: Prisma.DateTimeNullableFilter<"SessionEvaluation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SessionEvaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SessionEvaluation"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
    grille?: Prisma.XOR<Prisma.GrilleScalarRelationFilter, Prisma.GrilleWhereInput>;
    demarreePar?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    soumisePar?: Prisma.XOR<Prisma.UtilisateurNullableScalarRelationFilter, Prisma.UtilisateurWhereInput> | null;
    reponses?: Prisma.ReponseListRelationFilter;
    rapportPdf?: Prisma.XOR<Prisma.RapportPdfNullableScalarRelationFilter, Prisma.RapportPdfWhereInput> | null;
};
export type SessionEvaluationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    grilleId?: Prisma.SortOrder;
    demarreeParId?: Prisma.SortOrder;
    soumiseParId?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    scoreGlobal?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateSoumission?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organisation?: Prisma.OrganisationOrderByWithRelationInput;
    grille?: Prisma.GrilleOrderByWithRelationInput;
    demarreePar?: Prisma.UtilisateurOrderByWithRelationInput;
    soumisePar?: Prisma.UtilisateurOrderByWithRelationInput;
    reponses?: Prisma.ReponseOrderByRelationAggregateInput;
    rapportPdf?: Prisma.RapportPdfOrderByWithRelationInput;
    _relevance?: Prisma.SessionEvaluationOrderByRelevanceInput;
};
export type SessionEvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SessionEvaluationWhereInput | Prisma.SessionEvaluationWhereInput[];
    OR?: Prisma.SessionEvaluationWhereInput[];
    NOT?: Prisma.SessionEvaluationWhereInput | Prisma.SessionEvaluationWhereInput[];
    organisationId?: Prisma.StringFilter<"SessionEvaluation"> | string;
    grilleId?: Prisma.StringFilter<"SessionEvaluation"> | string;
    demarreeParId?: Prisma.StringFilter<"SessionEvaluation"> | string;
    soumiseParId?: Prisma.StringNullableFilter<"SessionEvaluation"> | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationFilter<"SessionEvaluation"> | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.FloatNullableFilter<"SessionEvaluation"> | number | null;
    dateDebut?: Prisma.DateTimeFilter<"SessionEvaluation"> | Date | string;
    dateSoumission?: Prisma.DateTimeNullableFilter<"SessionEvaluation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SessionEvaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SessionEvaluation"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
    grille?: Prisma.XOR<Prisma.GrilleScalarRelationFilter, Prisma.GrilleWhereInput>;
    demarreePar?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    soumisePar?: Prisma.XOR<Prisma.UtilisateurNullableScalarRelationFilter, Prisma.UtilisateurWhereInput> | null;
    reponses?: Prisma.ReponseListRelationFilter;
    rapportPdf?: Prisma.XOR<Prisma.RapportPdfNullableScalarRelationFilter, Prisma.RapportPdfWhereInput> | null;
}, "id">;
export type SessionEvaluationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    grilleId?: Prisma.SortOrder;
    demarreeParId?: Prisma.SortOrder;
    soumiseParId?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    scoreGlobal?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateSoumission?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SessionEvaluationCountOrderByAggregateInput;
    _avg?: Prisma.SessionEvaluationAvgOrderByAggregateInput;
    _max?: Prisma.SessionEvaluationMaxOrderByAggregateInput;
    _min?: Prisma.SessionEvaluationMinOrderByAggregateInput;
    _sum?: Prisma.SessionEvaluationSumOrderByAggregateInput;
};
export type SessionEvaluationScalarWhereWithAggregatesInput = {
    AND?: Prisma.SessionEvaluationScalarWhereWithAggregatesInput | Prisma.SessionEvaluationScalarWhereWithAggregatesInput[];
    OR?: Prisma.SessionEvaluationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SessionEvaluationScalarWhereWithAggregatesInput | Prisma.SessionEvaluationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SessionEvaluation"> | string;
    organisationId?: Prisma.StringWithAggregatesFilter<"SessionEvaluation"> | string;
    grilleId?: Prisma.StringWithAggregatesFilter<"SessionEvaluation"> | string;
    demarreeParId?: Prisma.StringWithAggregatesFilter<"SessionEvaluation"> | string;
    soumiseParId?: Prisma.StringNullableWithAggregatesFilter<"SessionEvaluation"> | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationWithAggregatesFilter<"SessionEvaluation"> | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.FloatNullableWithAggregatesFilter<"SessionEvaluation"> | number | null;
    dateDebut?: Prisma.DateTimeWithAggregatesFilter<"SessionEvaluation"> | Date | string;
    dateSoumission?: Prisma.DateTimeNullableWithAggregatesFilter<"SessionEvaluation"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SessionEvaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SessionEvaluation"> | Date | string;
};
export type SessionEvaluationCreateInput = {
    id?: string;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutSessionsEvaluationInput;
    grille: Prisma.GrilleCreateNestedOneWithoutSessionsEvaluationInput;
    demarreePar: Prisma.UtilisateurCreateNestedOneWithoutSessionsDemarreesInput;
    soumisePar?: Prisma.UtilisateurCreateNestedOneWithoutSessionsSoumisesInput;
    reponses?: Prisma.ReponseCreateNestedManyWithoutSessionInput;
    rapportPdf?: Prisma.RapportPdfCreateNestedOneWithoutSessionInput;
};
export type SessionEvaluationUncheckedCreateInput = {
    id?: string;
    organisationId: string;
    grilleId: string;
    demarreeParId: string;
    soumiseParId?: string | null;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reponses?: Prisma.ReponseUncheckedCreateNestedManyWithoutSessionInput;
    rapportPdf?: Prisma.RapportPdfUncheckedCreateNestedOneWithoutSessionInput;
};
export type SessionEvaluationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutSessionsEvaluationNestedInput;
    grille?: Prisma.GrilleUpdateOneRequiredWithoutSessionsEvaluationNestedInput;
    demarreePar?: Prisma.UtilisateurUpdateOneRequiredWithoutSessionsDemarreesNestedInput;
    soumisePar?: Prisma.UtilisateurUpdateOneWithoutSessionsSoumisesNestedInput;
    reponses?: Prisma.ReponseUpdateManyWithoutSessionNestedInput;
    rapportPdf?: Prisma.RapportPdfUpdateOneWithoutSessionNestedInput;
};
export type SessionEvaluationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    grilleId?: Prisma.StringFieldUpdateOperationsInput | string;
    demarreeParId?: Prisma.StringFieldUpdateOperationsInput | string;
    soumiseParId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reponses?: Prisma.ReponseUncheckedUpdateManyWithoutSessionNestedInput;
    rapportPdf?: Prisma.RapportPdfUncheckedUpdateOneWithoutSessionNestedInput;
};
export type SessionEvaluationCreateManyInput = {
    id?: string;
    organisationId: string;
    grilleId: string;
    demarreeParId: string;
    soumiseParId?: string | null;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SessionEvaluationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionEvaluationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    grilleId?: Prisma.StringFieldUpdateOperationsInput | string;
    demarreeParId?: Prisma.StringFieldUpdateOperationsInput | string;
    soumiseParId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionEvaluationListRelationFilter = {
    every?: Prisma.SessionEvaluationWhereInput;
    some?: Prisma.SessionEvaluationWhereInput;
    none?: Prisma.SessionEvaluationWhereInput;
};
export type SessionEvaluationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SessionEvaluationOrderByRelevanceInput = {
    fields: Prisma.SessionEvaluationOrderByRelevanceFieldEnum | Prisma.SessionEvaluationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type SessionEvaluationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    grilleId?: Prisma.SortOrder;
    demarreeParId?: Prisma.SortOrder;
    soumiseParId?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    scoreGlobal?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateSoumission?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SessionEvaluationAvgOrderByAggregateInput = {
    scoreGlobal?: Prisma.SortOrder;
};
export type SessionEvaluationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    grilleId?: Prisma.SortOrder;
    demarreeParId?: Prisma.SortOrder;
    soumiseParId?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    scoreGlobal?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateSoumission?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SessionEvaluationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    grilleId?: Prisma.SortOrder;
    demarreeParId?: Prisma.SortOrder;
    soumiseParId?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    scoreGlobal?: Prisma.SortOrder;
    dateDebut?: Prisma.SortOrder;
    dateSoumission?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SessionEvaluationSumOrderByAggregateInput = {
    scoreGlobal?: Prisma.SortOrder;
};
export type SessionEvaluationScalarRelationFilter = {
    is?: Prisma.SessionEvaluationWhereInput;
    isNot?: Prisma.SessionEvaluationWhereInput;
};
export type SessionEvaluationCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutOrganisationInput, Prisma.SessionEvaluationUncheckedCreateWithoutOrganisationInput> | Prisma.SessionEvaluationCreateWithoutOrganisationInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutOrganisationInput | Prisma.SessionEvaluationCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.SessionEvaluationCreateManyOrganisationInputEnvelope;
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
};
export type SessionEvaluationUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutOrganisationInput, Prisma.SessionEvaluationUncheckedCreateWithoutOrganisationInput> | Prisma.SessionEvaluationCreateWithoutOrganisationInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutOrganisationInput | Prisma.SessionEvaluationCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.SessionEvaluationCreateManyOrganisationInputEnvelope;
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
};
export type SessionEvaluationUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutOrganisationInput, Prisma.SessionEvaluationUncheckedCreateWithoutOrganisationInput> | Prisma.SessionEvaluationCreateWithoutOrganisationInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutOrganisationInput | Prisma.SessionEvaluationCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.SessionEvaluationCreateManyOrganisationInputEnvelope;
    set?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    disconnect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    delete?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    update?: Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.SessionEvaluationUpdateManyWithWhereWithoutOrganisationInput | Prisma.SessionEvaluationUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.SessionEvaluationScalarWhereInput | Prisma.SessionEvaluationScalarWhereInput[];
};
export type SessionEvaluationUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutOrganisationInput, Prisma.SessionEvaluationUncheckedCreateWithoutOrganisationInput> | Prisma.SessionEvaluationCreateWithoutOrganisationInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutOrganisationInput | Prisma.SessionEvaluationCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.SessionEvaluationCreateManyOrganisationInputEnvelope;
    set?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    disconnect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    delete?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    update?: Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.SessionEvaluationUpdateManyWithWhereWithoutOrganisationInput | Prisma.SessionEvaluationUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.SessionEvaluationScalarWhereInput | Prisma.SessionEvaluationScalarWhereInput[];
};
export type SessionEvaluationCreateNestedManyWithoutDemarreeParInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutDemarreeParInput, Prisma.SessionEvaluationUncheckedCreateWithoutDemarreeParInput> | Prisma.SessionEvaluationCreateWithoutDemarreeParInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutDemarreeParInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutDemarreeParInput | Prisma.SessionEvaluationCreateOrConnectWithoutDemarreeParInput[];
    createMany?: Prisma.SessionEvaluationCreateManyDemarreeParInputEnvelope;
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
};
export type SessionEvaluationCreateNestedManyWithoutSoumiseParInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutSoumiseParInput, Prisma.SessionEvaluationUncheckedCreateWithoutSoumiseParInput> | Prisma.SessionEvaluationCreateWithoutSoumiseParInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutSoumiseParInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutSoumiseParInput | Prisma.SessionEvaluationCreateOrConnectWithoutSoumiseParInput[];
    createMany?: Prisma.SessionEvaluationCreateManySoumiseParInputEnvelope;
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
};
export type SessionEvaluationUncheckedCreateNestedManyWithoutDemarreeParInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutDemarreeParInput, Prisma.SessionEvaluationUncheckedCreateWithoutDemarreeParInput> | Prisma.SessionEvaluationCreateWithoutDemarreeParInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutDemarreeParInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutDemarreeParInput | Prisma.SessionEvaluationCreateOrConnectWithoutDemarreeParInput[];
    createMany?: Prisma.SessionEvaluationCreateManyDemarreeParInputEnvelope;
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
};
export type SessionEvaluationUncheckedCreateNestedManyWithoutSoumiseParInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutSoumiseParInput, Prisma.SessionEvaluationUncheckedCreateWithoutSoumiseParInput> | Prisma.SessionEvaluationCreateWithoutSoumiseParInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutSoumiseParInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutSoumiseParInput | Prisma.SessionEvaluationCreateOrConnectWithoutSoumiseParInput[];
    createMany?: Prisma.SessionEvaluationCreateManySoumiseParInputEnvelope;
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
};
export type SessionEvaluationUpdateManyWithoutDemarreeParNestedInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutDemarreeParInput, Prisma.SessionEvaluationUncheckedCreateWithoutDemarreeParInput> | Prisma.SessionEvaluationCreateWithoutDemarreeParInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutDemarreeParInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutDemarreeParInput | Prisma.SessionEvaluationCreateOrConnectWithoutDemarreeParInput[];
    upsert?: Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutDemarreeParInput | Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutDemarreeParInput[];
    createMany?: Prisma.SessionEvaluationCreateManyDemarreeParInputEnvelope;
    set?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    disconnect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    delete?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    update?: Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutDemarreeParInput | Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutDemarreeParInput[];
    updateMany?: Prisma.SessionEvaluationUpdateManyWithWhereWithoutDemarreeParInput | Prisma.SessionEvaluationUpdateManyWithWhereWithoutDemarreeParInput[];
    deleteMany?: Prisma.SessionEvaluationScalarWhereInput | Prisma.SessionEvaluationScalarWhereInput[];
};
export type SessionEvaluationUpdateManyWithoutSoumiseParNestedInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutSoumiseParInput, Prisma.SessionEvaluationUncheckedCreateWithoutSoumiseParInput> | Prisma.SessionEvaluationCreateWithoutSoumiseParInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutSoumiseParInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutSoumiseParInput | Prisma.SessionEvaluationCreateOrConnectWithoutSoumiseParInput[];
    upsert?: Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutSoumiseParInput | Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutSoumiseParInput[];
    createMany?: Prisma.SessionEvaluationCreateManySoumiseParInputEnvelope;
    set?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    disconnect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    delete?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    update?: Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutSoumiseParInput | Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutSoumiseParInput[];
    updateMany?: Prisma.SessionEvaluationUpdateManyWithWhereWithoutSoumiseParInput | Prisma.SessionEvaluationUpdateManyWithWhereWithoutSoumiseParInput[];
    deleteMany?: Prisma.SessionEvaluationScalarWhereInput | Prisma.SessionEvaluationScalarWhereInput[];
};
export type SessionEvaluationUncheckedUpdateManyWithoutDemarreeParNestedInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutDemarreeParInput, Prisma.SessionEvaluationUncheckedCreateWithoutDemarreeParInput> | Prisma.SessionEvaluationCreateWithoutDemarreeParInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutDemarreeParInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutDemarreeParInput | Prisma.SessionEvaluationCreateOrConnectWithoutDemarreeParInput[];
    upsert?: Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutDemarreeParInput | Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutDemarreeParInput[];
    createMany?: Prisma.SessionEvaluationCreateManyDemarreeParInputEnvelope;
    set?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    disconnect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    delete?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    update?: Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutDemarreeParInput | Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutDemarreeParInput[];
    updateMany?: Prisma.SessionEvaluationUpdateManyWithWhereWithoutDemarreeParInput | Prisma.SessionEvaluationUpdateManyWithWhereWithoutDemarreeParInput[];
    deleteMany?: Prisma.SessionEvaluationScalarWhereInput | Prisma.SessionEvaluationScalarWhereInput[];
};
export type SessionEvaluationUncheckedUpdateManyWithoutSoumiseParNestedInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutSoumiseParInput, Prisma.SessionEvaluationUncheckedCreateWithoutSoumiseParInput> | Prisma.SessionEvaluationCreateWithoutSoumiseParInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutSoumiseParInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutSoumiseParInput | Prisma.SessionEvaluationCreateOrConnectWithoutSoumiseParInput[];
    upsert?: Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutSoumiseParInput | Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutSoumiseParInput[];
    createMany?: Prisma.SessionEvaluationCreateManySoumiseParInputEnvelope;
    set?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    disconnect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    delete?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    update?: Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutSoumiseParInput | Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutSoumiseParInput[];
    updateMany?: Prisma.SessionEvaluationUpdateManyWithWhereWithoutSoumiseParInput | Prisma.SessionEvaluationUpdateManyWithWhereWithoutSoumiseParInput[];
    deleteMany?: Prisma.SessionEvaluationScalarWhereInput | Prisma.SessionEvaluationScalarWhereInput[];
};
export type SessionEvaluationCreateNestedManyWithoutGrilleInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutGrilleInput, Prisma.SessionEvaluationUncheckedCreateWithoutGrilleInput> | Prisma.SessionEvaluationCreateWithoutGrilleInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutGrilleInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutGrilleInput | Prisma.SessionEvaluationCreateOrConnectWithoutGrilleInput[];
    createMany?: Prisma.SessionEvaluationCreateManyGrilleInputEnvelope;
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
};
export type SessionEvaluationUncheckedCreateNestedManyWithoutGrilleInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutGrilleInput, Prisma.SessionEvaluationUncheckedCreateWithoutGrilleInput> | Prisma.SessionEvaluationCreateWithoutGrilleInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutGrilleInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutGrilleInput | Prisma.SessionEvaluationCreateOrConnectWithoutGrilleInput[];
    createMany?: Prisma.SessionEvaluationCreateManyGrilleInputEnvelope;
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
};
export type SessionEvaluationUpdateManyWithoutGrilleNestedInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutGrilleInput, Prisma.SessionEvaluationUncheckedCreateWithoutGrilleInput> | Prisma.SessionEvaluationCreateWithoutGrilleInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutGrilleInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutGrilleInput | Prisma.SessionEvaluationCreateOrConnectWithoutGrilleInput[];
    upsert?: Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutGrilleInput | Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutGrilleInput[];
    createMany?: Prisma.SessionEvaluationCreateManyGrilleInputEnvelope;
    set?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    disconnect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    delete?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    update?: Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutGrilleInput | Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutGrilleInput[];
    updateMany?: Prisma.SessionEvaluationUpdateManyWithWhereWithoutGrilleInput | Prisma.SessionEvaluationUpdateManyWithWhereWithoutGrilleInput[];
    deleteMany?: Prisma.SessionEvaluationScalarWhereInput | Prisma.SessionEvaluationScalarWhereInput[];
};
export type SessionEvaluationUncheckedUpdateManyWithoutGrilleNestedInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutGrilleInput, Prisma.SessionEvaluationUncheckedCreateWithoutGrilleInput> | Prisma.SessionEvaluationCreateWithoutGrilleInput[] | Prisma.SessionEvaluationUncheckedCreateWithoutGrilleInput[];
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutGrilleInput | Prisma.SessionEvaluationCreateOrConnectWithoutGrilleInput[];
    upsert?: Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutGrilleInput | Prisma.SessionEvaluationUpsertWithWhereUniqueWithoutGrilleInput[];
    createMany?: Prisma.SessionEvaluationCreateManyGrilleInputEnvelope;
    set?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    disconnect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    delete?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    connect?: Prisma.SessionEvaluationWhereUniqueInput | Prisma.SessionEvaluationWhereUniqueInput[];
    update?: Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutGrilleInput | Prisma.SessionEvaluationUpdateWithWhereUniqueWithoutGrilleInput[];
    updateMany?: Prisma.SessionEvaluationUpdateManyWithWhereWithoutGrilleInput | Prisma.SessionEvaluationUpdateManyWithWhereWithoutGrilleInput[];
    deleteMany?: Prisma.SessionEvaluationScalarWhereInput | Prisma.SessionEvaluationScalarWhereInput[];
};
export type EnumStatutSessionEvaluationFieldUpdateOperationsInput = {
    set?: $Enums.StatutSessionEvaluation;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SessionEvaluationCreateNestedOneWithoutReponsesInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutReponsesInput, Prisma.SessionEvaluationUncheckedCreateWithoutReponsesInput>;
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutReponsesInput;
    connect?: Prisma.SessionEvaluationWhereUniqueInput;
};
export type SessionEvaluationUpdateOneRequiredWithoutReponsesNestedInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutReponsesInput, Prisma.SessionEvaluationUncheckedCreateWithoutReponsesInput>;
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutReponsesInput;
    upsert?: Prisma.SessionEvaluationUpsertWithoutReponsesInput;
    connect?: Prisma.SessionEvaluationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SessionEvaluationUpdateToOneWithWhereWithoutReponsesInput, Prisma.SessionEvaluationUpdateWithoutReponsesInput>, Prisma.SessionEvaluationUncheckedUpdateWithoutReponsesInput>;
};
export type SessionEvaluationCreateNestedOneWithoutRapportPdfInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutRapportPdfInput, Prisma.SessionEvaluationUncheckedCreateWithoutRapportPdfInput>;
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutRapportPdfInput;
    connect?: Prisma.SessionEvaluationWhereUniqueInput;
};
export type SessionEvaluationUpdateOneRequiredWithoutRapportPdfNestedInput = {
    create?: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutRapportPdfInput, Prisma.SessionEvaluationUncheckedCreateWithoutRapportPdfInput>;
    connectOrCreate?: Prisma.SessionEvaluationCreateOrConnectWithoutRapportPdfInput;
    upsert?: Prisma.SessionEvaluationUpsertWithoutRapportPdfInput;
    connect?: Prisma.SessionEvaluationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SessionEvaluationUpdateToOneWithWhereWithoutRapportPdfInput, Prisma.SessionEvaluationUpdateWithoutRapportPdfInput>, Prisma.SessionEvaluationUncheckedUpdateWithoutRapportPdfInput>;
};
export type SessionEvaluationCreateWithoutOrganisationInput = {
    id?: string;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    grille: Prisma.GrilleCreateNestedOneWithoutSessionsEvaluationInput;
    demarreePar: Prisma.UtilisateurCreateNestedOneWithoutSessionsDemarreesInput;
    soumisePar?: Prisma.UtilisateurCreateNestedOneWithoutSessionsSoumisesInput;
    reponses?: Prisma.ReponseCreateNestedManyWithoutSessionInput;
    rapportPdf?: Prisma.RapportPdfCreateNestedOneWithoutSessionInput;
};
export type SessionEvaluationUncheckedCreateWithoutOrganisationInput = {
    id?: string;
    grilleId: string;
    demarreeParId: string;
    soumiseParId?: string | null;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reponses?: Prisma.ReponseUncheckedCreateNestedManyWithoutSessionInput;
    rapportPdf?: Prisma.RapportPdfUncheckedCreateNestedOneWithoutSessionInput;
};
export type SessionEvaluationCreateOrConnectWithoutOrganisationInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutOrganisationInput, Prisma.SessionEvaluationUncheckedCreateWithoutOrganisationInput>;
};
export type SessionEvaluationCreateManyOrganisationInputEnvelope = {
    data: Prisma.SessionEvaluationCreateManyOrganisationInput | Prisma.SessionEvaluationCreateManyOrganisationInput[];
    skipDuplicates?: boolean;
};
export type SessionEvaluationUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    update: Prisma.XOR<Prisma.SessionEvaluationUpdateWithoutOrganisationInput, Prisma.SessionEvaluationUncheckedUpdateWithoutOrganisationInput>;
    create: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutOrganisationInput, Prisma.SessionEvaluationUncheckedCreateWithoutOrganisationInput>;
};
export type SessionEvaluationUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    data: Prisma.XOR<Prisma.SessionEvaluationUpdateWithoutOrganisationInput, Prisma.SessionEvaluationUncheckedUpdateWithoutOrganisationInput>;
};
export type SessionEvaluationUpdateManyWithWhereWithoutOrganisationInput = {
    where: Prisma.SessionEvaluationScalarWhereInput;
    data: Prisma.XOR<Prisma.SessionEvaluationUpdateManyMutationInput, Prisma.SessionEvaluationUncheckedUpdateManyWithoutOrganisationInput>;
};
export type SessionEvaluationScalarWhereInput = {
    AND?: Prisma.SessionEvaluationScalarWhereInput | Prisma.SessionEvaluationScalarWhereInput[];
    OR?: Prisma.SessionEvaluationScalarWhereInput[];
    NOT?: Prisma.SessionEvaluationScalarWhereInput | Prisma.SessionEvaluationScalarWhereInput[];
    id?: Prisma.StringFilter<"SessionEvaluation"> | string;
    organisationId?: Prisma.StringFilter<"SessionEvaluation"> | string;
    grilleId?: Prisma.StringFilter<"SessionEvaluation"> | string;
    demarreeParId?: Prisma.StringFilter<"SessionEvaluation"> | string;
    soumiseParId?: Prisma.StringNullableFilter<"SessionEvaluation"> | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationFilter<"SessionEvaluation"> | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.FloatNullableFilter<"SessionEvaluation"> | number | null;
    dateDebut?: Prisma.DateTimeFilter<"SessionEvaluation"> | Date | string;
    dateSoumission?: Prisma.DateTimeNullableFilter<"SessionEvaluation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"SessionEvaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SessionEvaluation"> | Date | string;
};
export type SessionEvaluationCreateWithoutDemarreeParInput = {
    id?: string;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutSessionsEvaluationInput;
    grille: Prisma.GrilleCreateNestedOneWithoutSessionsEvaluationInput;
    soumisePar?: Prisma.UtilisateurCreateNestedOneWithoutSessionsSoumisesInput;
    reponses?: Prisma.ReponseCreateNestedManyWithoutSessionInput;
    rapportPdf?: Prisma.RapportPdfCreateNestedOneWithoutSessionInput;
};
export type SessionEvaluationUncheckedCreateWithoutDemarreeParInput = {
    id?: string;
    organisationId: string;
    grilleId: string;
    soumiseParId?: string | null;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reponses?: Prisma.ReponseUncheckedCreateNestedManyWithoutSessionInput;
    rapportPdf?: Prisma.RapportPdfUncheckedCreateNestedOneWithoutSessionInput;
};
export type SessionEvaluationCreateOrConnectWithoutDemarreeParInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutDemarreeParInput, Prisma.SessionEvaluationUncheckedCreateWithoutDemarreeParInput>;
};
export type SessionEvaluationCreateManyDemarreeParInputEnvelope = {
    data: Prisma.SessionEvaluationCreateManyDemarreeParInput | Prisma.SessionEvaluationCreateManyDemarreeParInput[];
    skipDuplicates?: boolean;
};
export type SessionEvaluationCreateWithoutSoumiseParInput = {
    id?: string;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutSessionsEvaluationInput;
    grille: Prisma.GrilleCreateNestedOneWithoutSessionsEvaluationInput;
    demarreePar: Prisma.UtilisateurCreateNestedOneWithoutSessionsDemarreesInput;
    reponses?: Prisma.ReponseCreateNestedManyWithoutSessionInput;
    rapportPdf?: Prisma.RapportPdfCreateNestedOneWithoutSessionInput;
};
export type SessionEvaluationUncheckedCreateWithoutSoumiseParInput = {
    id?: string;
    organisationId: string;
    grilleId: string;
    demarreeParId: string;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reponses?: Prisma.ReponseUncheckedCreateNestedManyWithoutSessionInput;
    rapportPdf?: Prisma.RapportPdfUncheckedCreateNestedOneWithoutSessionInput;
};
export type SessionEvaluationCreateOrConnectWithoutSoumiseParInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutSoumiseParInput, Prisma.SessionEvaluationUncheckedCreateWithoutSoumiseParInput>;
};
export type SessionEvaluationCreateManySoumiseParInputEnvelope = {
    data: Prisma.SessionEvaluationCreateManySoumiseParInput | Prisma.SessionEvaluationCreateManySoumiseParInput[];
    skipDuplicates?: boolean;
};
export type SessionEvaluationUpsertWithWhereUniqueWithoutDemarreeParInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    update: Prisma.XOR<Prisma.SessionEvaluationUpdateWithoutDemarreeParInput, Prisma.SessionEvaluationUncheckedUpdateWithoutDemarreeParInput>;
    create: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutDemarreeParInput, Prisma.SessionEvaluationUncheckedCreateWithoutDemarreeParInput>;
};
export type SessionEvaluationUpdateWithWhereUniqueWithoutDemarreeParInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    data: Prisma.XOR<Prisma.SessionEvaluationUpdateWithoutDemarreeParInput, Prisma.SessionEvaluationUncheckedUpdateWithoutDemarreeParInput>;
};
export type SessionEvaluationUpdateManyWithWhereWithoutDemarreeParInput = {
    where: Prisma.SessionEvaluationScalarWhereInput;
    data: Prisma.XOR<Prisma.SessionEvaluationUpdateManyMutationInput, Prisma.SessionEvaluationUncheckedUpdateManyWithoutDemarreeParInput>;
};
export type SessionEvaluationUpsertWithWhereUniqueWithoutSoumiseParInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    update: Prisma.XOR<Prisma.SessionEvaluationUpdateWithoutSoumiseParInput, Prisma.SessionEvaluationUncheckedUpdateWithoutSoumiseParInput>;
    create: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutSoumiseParInput, Prisma.SessionEvaluationUncheckedCreateWithoutSoumiseParInput>;
};
export type SessionEvaluationUpdateWithWhereUniqueWithoutSoumiseParInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    data: Prisma.XOR<Prisma.SessionEvaluationUpdateWithoutSoumiseParInput, Prisma.SessionEvaluationUncheckedUpdateWithoutSoumiseParInput>;
};
export type SessionEvaluationUpdateManyWithWhereWithoutSoumiseParInput = {
    where: Prisma.SessionEvaluationScalarWhereInput;
    data: Prisma.XOR<Prisma.SessionEvaluationUpdateManyMutationInput, Prisma.SessionEvaluationUncheckedUpdateManyWithoutSoumiseParInput>;
};
export type SessionEvaluationCreateWithoutGrilleInput = {
    id?: string;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutSessionsEvaluationInput;
    demarreePar: Prisma.UtilisateurCreateNestedOneWithoutSessionsDemarreesInput;
    soumisePar?: Prisma.UtilisateurCreateNestedOneWithoutSessionsSoumisesInput;
    reponses?: Prisma.ReponseCreateNestedManyWithoutSessionInput;
    rapportPdf?: Prisma.RapportPdfCreateNestedOneWithoutSessionInput;
};
export type SessionEvaluationUncheckedCreateWithoutGrilleInput = {
    id?: string;
    organisationId: string;
    demarreeParId: string;
    soumiseParId?: string | null;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reponses?: Prisma.ReponseUncheckedCreateNestedManyWithoutSessionInput;
    rapportPdf?: Prisma.RapportPdfUncheckedCreateNestedOneWithoutSessionInput;
};
export type SessionEvaluationCreateOrConnectWithoutGrilleInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutGrilleInput, Prisma.SessionEvaluationUncheckedCreateWithoutGrilleInput>;
};
export type SessionEvaluationCreateManyGrilleInputEnvelope = {
    data: Prisma.SessionEvaluationCreateManyGrilleInput | Prisma.SessionEvaluationCreateManyGrilleInput[];
    skipDuplicates?: boolean;
};
export type SessionEvaluationUpsertWithWhereUniqueWithoutGrilleInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    update: Prisma.XOR<Prisma.SessionEvaluationUpdateWithoutGrilleInput, Prisma.SessionEvaluationUncheckedUpdateWithoutGrilleInput>;
    create: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutGrilleInput, Prisma.SessionEvaluationUncheckedCreateWithoutGrilleInput>;
};
export type SessionEvaluationUpdateWithWhereUniqueWithoutGrilleInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    data: Prisma.XOR<Prisma.SessionEvaluationUpdateWithoutGrilleInput, Prisma.SessionEvaluationUncheckedUpdateWithoutGrilleInput>;
};
export type SessionEvaluationUpdateManyWithWhereWithoutGrilleInput = {
    where: Prisma.SessionEvaluationScalarWhereInput;
    data: Prisma.XOR<Prisma.SessionEvaluationUpdateManyMutationInput, Prisma.SessionEvaluationUncheckedUpdateManyWithoutGrilleInput>;
};
export type SessionEvaluationCreateWithoutReponsesInput = {
    id?: string;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutSessionsEvaluationInput;
    grille: Prisma.GrilleCreateNestedOneWithoutSessionsEvaluationInput;
    demarreePar: Prisma.UtilisateurCreateNestedOneWithoutSessionsDemarreesInput;
    soumisePar?: Prisma.UtilisateurCreateNestedOneWithoutSessionsSoumisesInput;
    rapportPdf?: Prisma.RapportPdfCreateNestedOneWithoutSessionInput;
};
export type SessionEvaluationUncheckedCreateWithoutReponsesInput = {
    id?: string;
    organisationId: string;
    grilleId: string;
    demarreeParId: string;
    soumiseParId?: string | null;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rapportPdf?: Prisma.RapportPdfUncheckedCreateNestedOneWithoutSessionInput;
};
export type SessionEvaluationCreateOrConnectWithoutReponsesInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutReponsesInput, Prisma.SessionEvaluationUncheckedCreateWithoutReponsesInput>;
};
export type SessionEvaluationUpsertWithoutReponsesInput = {
    update: Prisma.XOR<Prisma.SessionEvaluationUpdateWithoutReponsesInput, Prisma.SessionEvaluationUncheckedUpdateWithoutReponsesInput>;
    create: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutReponsesInput, Prisma.SessionEvaluationUncheckedCreateWithoutReponsesInput>;
    where?: Prisma.SessionEvaluationWhereInput;
};
export type SessionEvaluationUpdateToOneWithWhereWithoutReponsesInput = {
    where?: Prisma.SessionEvaluationWhereInput;
    data: Prisma.XOR<Prisma.SessionEvaluationUpdateWithoutReponsesInput, Prisma.SessionEvaluationUncheckedUpdateWithoutReponsesInput>;
};
export type SessionEvaluationUpdateWithoutReponsesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutSessionsEvaluationNestedInput;
    grille?: Prisma.GrilleUpdateOneRequiredWithoutSessionsEvaluationNestedInput;
    demarreePar?: Prisma.UtilisateurUpdateOneRequiredWithoutSessionsDemarreesNestedInput;
    soumisePar?: Prisma.UtilisateurUpdateOneWithoutSessionsSoumisesNestedInput;
    rapportPdf?: Prisma.RapportPdfUpdateOneWithoutSessionNestedInput;
};
export type SessionEvaluationUncheckedUpdateWithoutReponsesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    grilleId?: Prisma.StringFieldUpdateOperationsInput | string;
    demarreeParId?: Prisma.StringFieldUpdateOperationsInput | string;
    soumiseParId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rapportPdf?: Prisma.RapportPdfUncheckedUpdateOneWithoutSessionNestedInput;
};
export type SessionEvaluationCreateWithoutRapportPdfInput = {
    id?: string;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutSessionsEvaluationInput;
    grille: Prisma.GrilleCreateNestedOneWithoutSessionsEvaluationInput;
    demarreePar: Prisma.UtilisateurCreateNestedOneWithoutSessionsDemarreesInput;
    soumisePar?: Prisma.UtilisateurCreateNestedOneWithoutSessionsSoumisesInput;
    reponses?: Prisma.ReponseCreateNestedManyWithoutSessionInput;
};
export type SessionEvaluationUncheckedCreateWithoutRapportPdfInput = {
    id?: string;
    organisationId: string;
    grilleId: string;
    demarreeParId: string;
    soumiseParId?: string | null;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reponses?: Prisma.ReponseUncheckedCreateNestedManyWithoutSessionInput;
};
export type SessionEvaluationCreateOrConnectWithoutRapportPdfInput = {
    where: Prisma.SessionEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutRapportPdfInput, Prisma.SessionEvaluationUncheckedCreateWithoutRapportPdfInput>;
};
export type SessionEvaluationUpsertWithoutRapportPdfInput = {
    update: Prisma.XOR<Prisma.SessionEvaluationUpdateWithoutRapportPdfInput, Prisma.SessionEvaluationUncheckedUpdateWithoutRapportPdfInput>;
    create: Prisma.XOR<Prisma.SessionEvaluationCreateWithoutRapportPdfInput, Prisma.SessionEvaluationUncheckedCreateWithoutRapportPdfInput>;
    where?: Prisma.SessionEvaluationWhereInput;
};
export type SessionEvaluationUpdateToOneWithWhereWithoutRapportPdfInput = {
    where?: Prisma.SessionEvaluationWhereInput;
    data: Prisma.XOR<Prisma.SessionEvaluationUpdateWithoutRapportPdfInput, Prisma.SessionEvaluationUncheckedUpdateWithoutRapportPdfInput>;
};
export type SessionEvaluationUpdateWithoutRapportPdfInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutSessionsEvaluationNestedInput;
    grille?: Prisma.GrilleUpdateOneRequiredWithoutSessionsEvaluationNestedInput;
    demarreePar?: Prisma.UtilisateurUpdateOneRequiredWithoutSessionsDemarreesNestedInput;
    soumisePar?: Prisma.UtilisateurUpdateOneWithoutSessionsSoumisesNestedInput;
    reponses?: Prisma.ReponseUpdateManyWithoutSessionNestedInput;
};
export type SessionEvaluationUncheckedUpdateWithoutRapportPdfInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    grilleId?: Prisma.StringFieldUpdateOperationsInput | string;
    demarreeParId?: Prisma.StringFieldUpdateOperationsInput | string;
    soumiseParId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reponses?: Prisma.ReponseUncheckedUpdateManyWithoutSessionNestedInput;
};
export type SessionEvaluationCreateManyOrganisationInput = {
    id?: string;
    grilleId: string;
    demarreeParId: string;
    soumiseParId?: string | null;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SessionEvaluationUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    grille?: Prisma.GrilleUpdateOneRequiredWithoutSessionsEvaluationNestedInput;
    demarreePar?: Prisma.UtilisateurUpdateOneRequiredWithoutSessionsDemarreesNestedInput;
    soumisePar?: Prisma.UtilisateurUpdateOneWithoutSessionsSoumisesNestedInput;
    reponses?: Prisma.ReponseUpdateManyWithoutSessionNestedInput;
    rapportPdf?: Prisma.RapportPdfUpdateOneWithoutSessionNestedInput;
};
export type SessionEvaluationUncheckedUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grilleId?: Prisma.StringFieldUpdateOperationsInput | string;
    demarreeParId?: Prisma.StringFieldUpdateOperationsInput | string;
    soumiseParId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reponses?: Prisma.ReponseUncheckedUpdateManyWithoutSessionNestedInput;
    rapportPdf?: Prisma.RapportPdfUncheckedUpdateOneWithoutSessionNestedInput;
};
export type SessionEvaluationUncheckedUpdateManyWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grilleId?: Prisma.StringFieldUpdateOperationsInput | string;
    demarreeParId?: Prisma.StringFieldUpdateOperationsInput | string;
    soumiseParId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionEvaluationCreateManyDemarreeParInput = {
    id?: string;
    organisationId: string;
    grilleId: string;
    soumiseParId?: string | null;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SessionEvaluationCreateManySoumiseParInput = {
    id?: string;
    organisationId: string;
    grilleId: string;
    demarreeParId: string;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SessionEvaluationUpdateWithoutDemarreeParInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutSessionsEvaluationNestedInput;
    grille?: Prisma.GrilleUpdateOneRequiredWithoutSessionsEvaluationNestedInput;
    soumisePar?: Prisma.UtilisateurUpdateOneWithoutSessionsSoumisesNestedInput;
    reponses?: Prisma.ReponseUpdateManyWithoutSessionNestedInput;
    rapportPdf?: Prisma.RapportPdfUpdateOneWithoutSessionNestedInput;
};
export type SessionEvaluationUncheckedUpdateWithoutDemarreeParInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    grilleId?: Prisma.StringFieldUpdateOperationsInput | string;
    soumiseParId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reponses?: Prisma.ReponseUncheckedUpdateManyWithoutSessionNestedInput;
    rapportPdf?: Prisma.RapportPdfUncheckedUpdateOneWithoutSessionNestedInput;
};
export type SessionEvaluationUncheckedUpdateManyWithoutDemarreeParInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    grilleId?: Prisma.StringFieldUpdateOperationsInput | string;
    soumiseParId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionEvaluationUpdateWithoutSoumiseParInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutSessionsEvaluationNestedInput;
    grille?: Prisma.GrilleUpdateOneRequiredWithoutSessionsEvaluationNestedInput;
    demarreePar?: Prisma.UtilisateurUpdateOneRequiredWithoutSessionsDemarreesNestedInput;
    reponses?: Prisma.ReponseUpdateManyWithoutSessionNestedInput;
    rapportPdf?: Prisma.RapportPdfUpdateOneWithoutSessionNestedInput;
};
export type SessionEvaluationUncheckedUpdateWithoutSoumiseParInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    grilleId?: Prisma.StringFieldUpdateOperationsInput | string;
    demarreeParId?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reponses?: Prisma.ReponseUncheckedUpdateManyWithoutSessionNestedInput;
    rapportPdf?: Prisma.RapportPdfUncheckedUpdateOneWithoutSessionNestedInput;
};
export type SessionEvaluationUncheckedUpdateManyWithoutSoumiseParInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    grilleId?: Prisma.StringFieldUpdateOperationsInput | string;
    demarreeParId?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionEvaluationCreateManyGrilleInput = {
    id?: string;
    organisationId: string;
    demarreeParId: string;
    soumiseParId?: string | null;
    statut?: $Enums.StatutSessionEvaluation;
    scoreGlobal?: number | null;
    dateDebut?: Date | string;
    dateSoumission?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SessionEvaluationUpdateWithoutGrilleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutSessionsEvaluationNestedInput;
    demarreePar?: Prisma.UtilisateurUpdateOneRequiredWithoutSessionsDemarreesNestedInput;
    soumisePar?: Prisma.UtilisateurUpdateOneWithoutSessionsSoumisesNestedInput;
    reponses?: Prisma.ReponseUpdateManyWithoutSessionNestedInput;
    rapportPdf?: Prisma.RapportPdfUpdateOneWithoutSessionNestedInput;
};
export type SessionEvaluationUncheckedUpdateWithoutGrilleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    demarreeParId?: Prisma.StringFieldUpdateOperationsInput | string;
    soumiseParId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reponses?: Prisma.ReponseUncheckedUpdateManyWithoutSessionNestedInput;
    rapportPdf?: Prisma.RapportPdfUncheckedUpdateOneWithoutSessionNestedInput;
};
export type SessionEvaluationUncheckedUpdateManyWithoutGrilleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    demarreeParId?: Prisma.StringFieldUpdateOperationsInput | string;
    soumiseParId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutSessionEvaluationFieldUpdateOperationsInput | $Enums.StatutSessionEvaluation;
    scoreGlobal?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    dateDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSoumission?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionEvaluationCountOutputType = {
    reponses: number;
};
export type SessionEvaluationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reponses?: boolean | SessionEvaluationCountOutputTypeCountReponsesArgs;
};
export type SessionEvaluationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionEvaluationCountOutputTypeSelect<ExtArgs> | null;
};
export type SessionEvaluationCountOutputTypeCountReponsesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReponseWhereInput;
};
export type SessionEvaluationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organisationId?: boolean;
    grilleId?: boolean;
    demarreeParId?: boolean;
    soumiseParId?: boolean;
    statut?: boolean;
    scoreGlobal?: boolean;
    dateDebut?: boolean;
    dateSoumission?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    grille?: boolean | Prisma.GrilleDefaultArgs<ExtArgs>;
    demarreePar?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    soumisePar?: boolean | Prisma.SessionEvaluation$soumiseParArgs<ExtArgs>;
    reponses?: boolean | Prisma.SessionEvaluation$reponsesArgs<ExtArgs>;
    rapportPdf?: boolean | Prisma.SessionEvaluation$rapportPdfArgs<ExtArgs>;
    _count?: boolean | Prisma.SessionEvaluationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sessionEvaluation"]>;
export type SessionEvaluationSelectScalar = {
    id?: boolean;
    organisationId?: boolean;
    grilleId?: boolean;
    demarreeParId?: boolean;
    soumiseParId?: boolean;
    statut?: boolean;
    scoreGlobal?: boolean;
    dateDebut?: boolean;
    dateSoumission?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SessionEvaluationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organisationId" | "grilleId" | "demarreeParId" | "soumiseParId" | "statut" | "scoreGlobal" | "dateDebut" | "dateSoumission" | "createdAt" | "updatedAt", ExtArgs["result"]["sessionEvaluation"]>;
export type SessionEvaluationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    grille?: boolean | Prisma.GrilleDefaultArgs<ExtArgs>;
    demarreePar?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    soumisePar?: boolean | Prisma.SessionEvaluation$soumiseParArgs<ExtArgs>;
    reponses?: boolean | Prisma.SessionEvaluation$reponsesArgs<ExtArgs>;
    rapportPdf?: boolean | Prisma.SessionEvaluation$rapportPdfArgs<ExtArgs>;
    _count?: boolean | Prisma.SessionEvaluationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $SessionEvaluationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SessionEvaluation";
    objects: {
        organisation: Prisma.$OrganisationPayload<ExtArgs>;
        grille: Prisma.$GrillePayload<ExtArgs>;
        demarreePar: Prisma.$UtilisateurPayload<ExtArgs>;
        soumisePar: Prisma.$UtilisateurPayload<ExtArgs> | null;
        reponses: Prisma.$ReponsePayload<ExtArgs>[];
        rapportPdf: Prisma.$RapportPdfPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organisationId: string;
        grilleId: string;
        demarreeParId: string;
        soumiseParId: string | null;
        statut: $Enums.StatutSessionEvaluation;
        scoreGlobal: number | null;
        dateDebut: Date;
        dateSoumission: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["sessionEvaluation"]>;
    composites: {};
};
export type SessionEvaluationGetPayload<S extends boolean | null | undefined | SessionEvaluationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload, S>;
export type SessionEvaluationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SessionEvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SessionEvaluationCountAggregateInputType | true;
};
export interface SessionEvaluationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SessionEvaluation'];
        meta: {
            name: 'SessionEvaluation';
        };
    };
    findUnique<T extends SessionEvaluationFindUniqueArgs>(args: Prisma.SelectSubset<T, SessionEvaluationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SessionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SessionEvaluationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SessionEvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SessionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SessionEvaluationFindFirstArgs>(args?: Prisma.SelectSubset<T, SessionEvaluationFindFirstArgs<ExtArgs>>): Prisma.Prisma__SessionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SessionEvaluationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SessionEvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SessionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SessionEvaluationFindManyArgs>(args?: Prisma.SelectSubset<T, SessionEvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SessionEvaluationCreateArgs>(args: Prisma.SelectSubset<T, SessionEvaluationCreateArgs<ExtArgs>>): Prisma.Prisma__SessionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SessionEvaluationCreateManyArgs>(args?: Prisma.SelectSubset<T, SessionEvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends SessionEvaluationDeleteArgs>(args: Prisma.SelectSubset<T, SessionEvaluationDeleteArgs<ExtArgs>>): Prisma.Prisma__SessionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SessionEvaluationUpdateArgs>(args: Prisma.SelectSubset<T, SessionEvaluationUpdateArgs<ExtArgs>>): Prisma.Prisma__SessionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SessionEvaluationDeleteManyArgs>(args?: Prisma.SelectSubset<T, SessionEvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SessionEvaluationUpdateManyArgs>(args: Prisma.SelectSubset<T, SessionEvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends SessionEvaluationUpsertArgs>(args: Prisma.SelectSubset<T, SessionEvaluationUpsertArgs<ExtArgs>>): Prisma.Prisma__SessionEvaluationClient<runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SessionEvaluationCountArgs>(args?: Prisma.Subset<T, SessionEvaluationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SessionEvaluationCountAggregateOutputType> : number>;
    aggregate<T extends SessionEvaluationAggregateArgs>(args: Prisma.Subset<T, SessionEvaluationAggregateArgs>): Prisma.PrismaPromise<GetSessionEvaluationAggregateType<T>>;
    groupBy<T extends SessionEvaluationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SessionEvaluationGroupByArgs['orderBy'];
    } : {
        orderBy?: SessionEvaluationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SessionEvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SessionEvaluationFieldRefs;
}
export interface Prisma__SessionEvaluationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organisation<T extends Prisma.OrganisationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganisationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    grille<T extends Prisma.GrilleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GrilleDefaultArgs<ExtArgs>>): Prisma.Prisma__GrilleClient<runtime.Types.Result.GetResult<Prisma.$GrillePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    demarreePar<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    soumisePar<T extends Prisma.SessionEvaluation$soumiseParArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SessionEvaluation$soumiseParArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    reponses<T extends Prisma.SessionEvaluation$reponsesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SessionEvaluation$reponsesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rapportPdf<T extends Prisma.SessionEvaluation$rapportPdfArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SessionEvaluation$rapportPdfArgs<ExtArgs>>): Prisma.Prisma__RapportPdfClient<runtime.Types.Result.GetResult<Prisma.$RapportPdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SessionEvaluationFieldRefs {
    readonly id: Prisma.FieldRef<"SessionEvaluation", 'String'>;
    readonly organisationId: Prisma.FieldRef<"SessionEvaluation", 'String'>;
    readonly grilleId: Prisma.FieldRef<"SessionEvaluation", 'String'>;
    readonly demarreeParId: Prisma.FieldRef<"SessionEvaluation", 'String'>;
    readonly soumiseParId: Prisma.FieldRef<"SessionEvaluation", 'String'>;
    readonly statut: Prisma.FieldRef<"SessionEvaluation", 'StatutSessionEvaluation'>;
    readonly scoreGlobal: Prisma.FieldRef<"SessionEvaluation", 'Float'>;
    readonly dateDebut: Prisma.FieldRef<"SessionEvaluation", 'DateTime'>;
    readonly dateSoumission: Prisma.FieldRef<"SessionEvaluation", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"SessionEvaluation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SessionEvaluation", 'DateTime'>;
}
export type SessionEvaluationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SessionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SessionEvaluationInclude<ExtArgs> | null;
    where: Prisma.SessionEvaluationWhereUniqueInput;
};
export type SessionEvaluationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SessionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SessionEvaluationInclude<ExtArgs> | null;
    where: Prisma.SessionEvaluationWhereUniqueInput;
};
export type SessionEvaluationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SessionEvaluationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SessionEvaluationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SessionEvaluationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SessionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SessionEvaluationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessionEvaluationCreateInput, Prisma.SessionEvaluationUncheckedCreateInput>;
};
export type SessionEvaluationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SessionEvaluationCreateManyInput | Prisma.SessionEvaluationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SessionEvaluationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SessionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SessionEvaluationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SessionEvaluationUpdateInput, Prisma.SessionEvaluationUncheckedUpdateInput>;
    where: Prisma.SessionEvaluationWhereUniqueInput;
};
export type SessionEvaluationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SessionEvaluationUpdateManyMutationInput, Prisma.SessionEvaluationUncheckedUpdateManyInput>;
    where?: Prisma.SessionEvaluationWhereInput;
    limit?: number;
};
export type SessionEvaluationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SessionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SessionEvaluationInclude<ExtArgs> | null;
    where: Prisma.SessionEvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessionEvaluationCreateInput, Prisma.SessionEvaluationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SessionEvaluationUpdateInput, Prisma.SessionEvaluationUncheckedUpdateInput>;
};
export type SessionEvaluationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SessionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SessionEvaluationInclude<ExtArgs> | null;
    where: Prisma.SessionEvaluationWhereUniqueInput;
};
export type SessionEvaluationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionEvaluationWhereInput;
    limit?: number;
};
export type SessionEvaluation$soumiseParArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurInclude<ExtArgs> | null;
    where?: Prisma.UtilisateurWhereInput;
};
export type SessionEvaluation$reponsesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SessionEvaluation$rapportPdfArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RapportPdfSelect<ExtArgs> | null;
    omit?: Prisma.RapportPdfOmit<ExtArgs> | null;
    include?: Prisma.RapportPdfInclude<ExtArgs> | null;
    where?: Prisma.RapportPdfWhereInput;
};
export type SessionEvaluationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SessionEvaluationSelect<ExtArgs> | null;
    omit?: Prisma.SessionEvaluationOmit<ExtArgs> | null;
    include?: Prisma.SessionEvaluationInclude<ExtArgs> | null;
};
