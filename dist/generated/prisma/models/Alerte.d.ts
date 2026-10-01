import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AlerteModel = runtime.Types.Result.DefaultSelection<Prisma.$AlertePayload>;
export type AggregateAlerte = {
    _count: AlerteCountAggregateOutputType | null;
    _min: AlerteMinAggregateOutputType | null;
    _max: AlerteMaxAggregateOutputType | null;
};
export type AlerteMinAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    patientId: string | null;
    mesureId: string | null;
    niveauRisque: $Enums.NiveauRisqueNews | null;
    statut: $Enums.StatutAlerte | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AlerteMaxAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    patientId: string | null;
    mesureId: string | null;
    niveauRisque: $Enums.NiveauRisqueNews | null;
    statut: $Enums.StatutAlerte | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AlerteCountAggregateOutputType = {
    id: number;
    organisationId: number;
    patientId: number;
    mesureId: number;
    niveauRisque: number;
    statut: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AlerteMinAggregateInputType = {
    id?: true;
    organisationId?: true;
    patientId?: true;
    mesureId?: true;
    niveauRisque?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AlerteMaxAggregateInputType = {
    id?: true;
    organisationId?: true;
    patientId?: true;
    mesureId?: true;
    niveauRisque?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AlerteCountAggregateInputType = {
    id?: true;
    organisationId?: true;
    patientId?: true;
    mesureId?: true;
    niveauRisque?: true;
    statut?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AlerteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlerteWhereInput;
    orderBy?: Prisma.AlerteOrderByWithRelationInput | Prisma.AlerteOrderByWithRelationInput[];
    cursor?: Prisma.AlerteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AlerteCountAggregateInputType;
    _min?: AlerteMinAggregateInputType;
    _max?: AlerteMaxAggregateInputType;
};
export type GetAlerteAggregateType<T extends AlerteAggregateArgs> = {
    [P in keyof T & keyof AggregateAlerte]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlerte[P]> : Prisma.GetScalarType<T[P], AggregateAlerte[P]>;
};
export type AlerteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlerteWhereInput;
    orderBy?: Prisma.AlerteOrderByWithAggregationInput | Prisma.AlerteOrderByWithAggregationInput[];
    by: Prisma.AlerteScalarFieldEnum[] | Prisma.AlerteScalarFieldEnum;
    having?: Prisma.AlerteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AlerteCountAggregateInputType | true;
    _min?: AlerteMinAggregateInputType;
    _max?: AlerteMaxAggregateInputType;
};
export type AlerteGroupByOutputType = {
    id: string;
    organisationId: string;
    patientId: string;
    mesureId: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut: $Enums.StatutAlerte;
    createdAt: Date;
    updatedAt: Date;
    _count: AlerteCountAggregateOutputType | null;
    _min: AlerteMinAggregateOutputType | null;
    _max: AlerteMaxAggregateOutputType | null;
};
export type GetAlerteGroupByPayload<T extends AlerteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AlerteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AlerteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AlerteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AlerteGroupByOutputType[P]>;
}>>;
export type AlerteWhereInput = {
    AND?: Prisma.AlerteWhereInput | Prisma.AlerteWhereInput[];
    OR?: Prisma.AlerteWhereInput[];
    NOT?: Prisma.AlerteWhereInput | Prisma.AlerteWhereInput[];
    id?: Prisma.StringFilter<"Alerte"> | string;
    organisationId?: Prisma.StringFilter<"Alerte"> | string;
    patientId?: Prisma.StringFilter<"Alerte"> | string;
    mesureId?: Prisma.StringFilter<"Alerte"> | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFilter<"Alerte"> | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFilter<"Alerte"> | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFilter<"Alerte"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Alerte"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
    mesure?: Prisma.XOR<Prisma.MesureNewsScalarRelationFilter, Prisma.MesureNewsWhereInput>;
    interventions?: Prisma.InterventionListRelationFilter;
};
export type AlerteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    mesureId?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organisation?: Prisma.OrganisationOrderByWithRelationInput;
    patient?: Prisma.PatientOrderByWithRelationInput;
    mesure?: Prisma.MesureNewsOrderByWithRelationInput;
    interventions?: Prisma.InterventionOrderByRelationAggregateInput;
    _relevance?: Prisma.AlerteOrderByRelevanceInput;
};
export type AlerteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    mesureId?: string;
    AND?: Prisma.AlerteWhereInput | Prisma.AlerteWhereInput[];
    OR?: Prisma.AlerteWhereInput[];
    NOT?: Prisma.AlerteWhereInput | Prisma.AlerteWhereInput[];
    organisationId?: Prisma.StringFilter<"Alerte"> | string;
    patientId?: Prisma.StringFilter<"Alerte"> | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFilter<"Alerte"> | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFilter<"Alerte"> | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFilter<"Alerte"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Alerte"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
    mesure?: Prisma.XOR<Prisma.MesureNewsScalarRelationFilter, Prisma.MesureNewsWhereInput>;
    interventions?: Prisma.InterventionListRelationFilter;
}, "id" | "mesureId">;
export type AlerteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    mesureId?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AlerteCountOrderByAggregateInput;
    _max?: Prisma.AlerteMaxOrderByAggregateInput;
    _min?: Prisma.AlerteMinOrderByAggregateInput;
};
export type AlerteScalarWhereWithAggregatesInput = {
    AND?: Prisma.AlerteScalarWhereWithAggregatesInput | Prisma.AlerteScalarWhereWithAggregatesInput[];
    OR?: Prisma.AlerteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AlerteScalarWhereWithAggregatesInput | Prisma.AlerteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Alerte"> | string;
    organisationId?: Prisma.StringWithAggregatesFilter<"Alerte"> | string;
    patientId?: Prisma.StringWithAggregatesFilter<"Alerte"> | string;
    mesureId?: Prisma.StringWithAggregatesFilter<"Alerte"> | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsWithAggregatesFilter<"Alerte"> | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteWithAggregatesFilter<"Alerte"> | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Alerte"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Alerte"> | Date | string;
};
export type AlerteCreateInput = {
    id?: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutAlertesInput;
    patient: Prisma.PatientCreateNestedOneWithoutAlertesInput;
    mesure: Prisma.MesureNewsCreateNestedOneWithoutAlerteInput;
    interventions?: Prisma.InterventionCreateNestedManyWithoutAlerteInput;
};
export type AlerteUncheckedCreateInput = {
    id?: string;
    organisationId: string;
    patientId: string;
    mesureId: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    interventions?: Prisma.InterventionUncheckedCreateNestedManyWithoutAlerteInput;
};
export type AlerteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutAlertesNestedInput;
    patient?: Prisma.PatientUpdateOneRequiredWithoutAlertesNestedInput;
    mesure?: Prisma.MesureNewsUpdateOneRequiredWithoutAlerteNestedInput;
    interventions?: Prisma.InterventionUpdateManyWithoutAlerteNestedInput;
};
export type AlerteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    mesureId?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    interventions?: Prisma.InterventionUncheckedUpdateManyWithoutAlerteNestedInput;
};
export type AlerteCreateManyInput = {
    id?: string;
    organisationId: string;
    patientId: string;
    mesureId: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AlerteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    mesureId?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteListRelationFilter = {
    every?: Prisma.AlerteWhereInput;
    some?: Prisma.AlerteWhereInput;
    none?: Prisma.AlerteWhereInput;
};
export type AlerteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AlerteNullableScalarRelationFilter = {
    is?: Prisma.AlerteWhereInput | null;
    isNot?: Prisma.AlerteWhereInput | null;
};
export type AlerteOrderByRelevanceInput = {
    fields: Prisma.AlerteOrderByRelevanceFieldEnum | Prisma.AlerteOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AlerteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    mesureId?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AlerteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    mesureId?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AlerteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    mesureId?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AlerteScalarRelationFilter = {
    is?: Prisma.AlerteWhereInput;
    isNot?: Prisma.AlerteWhereInput;
};
export type AlerteCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutOrganisationInput, Prisma.AlerteUncheckedCreateWithoutOrganisationInput> | Prisma.AlerteCreateWithoutOrganisationInput[] | Prisma.AlerteUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutOrganisationInput | Prisma.AlerteCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.AlerteCreateManyOrganisationInputEnvelope;
    connect?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
};
export type AlerteUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutOrganisationInput, Prisma.AlerteUncheckedCreateWithoutOrganisationInput> | Prisma.AlerteCreateWithoutOrganisationInput[] | Prisma.AlerteUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutOrganisationInput | Prisma.AlerteCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.AlerteCreateManyOrganisationInputEnvelope;
    connect?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
};
export type AlerteUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutOrganisationInput, Prisma.AlerteUncheckedCreateWithoutOrganisationInput> | Prisma.AlerteCreateWithoutOrganisationInput[] | Prisma.AlerteUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutOrganisationInput | Prisma.AlerteCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.AlerteUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.AlerteUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.AlerteCreateManyOrganisationInputEnvelope;
    set?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    disconnect?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    delete?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    connect?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    update?: Prisma.AlerteUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.AlerteUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.AlerteUpdateManyWithWhereWithoutOrganisationInput | Prisma.AlerteUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.AlerteScalarWhereInput | Prisma.AlerteScalarWhereInput[];
};
export type AlerteUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutOrganisationInput, Prisma.AlerteUncheckedCreateWithoutOrganisationInput> | Prisma.AlerteCreateWithoutOrganisationInput[] | Prisma.AlerteUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutOrganisationInput | Prisma.AlerteCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.AlerteUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.AlerteUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.AlerteCreateManyOrganisationInputEnvelope;
    set?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    disconnect?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    delete?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    connect?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    update?: Prisma.AlerteUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.AlerteUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.AlerteUpdateManyWithWhereWithoutOrganisationInput | Prisma.AlerteUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.AlerteScalarWhereInput | Prisma.AlerteScalarWhereInput[];
};
export type AlerteCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutPatientInput, Prisma.AlerteUncheckedCreateWithoutPatientInput> | Prisma.AlerteCreateWithoutPatientInput[] | Prisma.AlerteUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutPatientInput | Prisma.AlerteCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.AlerteCreateManyPatientInputEnvelope;
    connect?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
};
export type AlerteUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutPatientInput, Prisma.AlerteUncheckedCreateWithoutPatientInput> | Prisma.AlerteCreateWithoutPatientInput[] | Prisma.AlerteUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutPatientInput | Prisma.AlerteCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.AlerteCreateManyPatientInputEnvelope;
    connect?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
};
export type AlerteUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutPatientInput, Prisma.AlerteUncheckedCreateWithoutPatientInput> | Prisma.AlerteCreateWithoutPatientInput[] | Prisma.AlerteUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutPatientInput | Prisma.AlerteCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.AlerteUpsertWithWhereUniqueWithoutPatientInput | Prisma.AlerteUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.AlerteCreateManyPatientInputEnvelope;
    set?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    disconnect?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    delete?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    connect?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    update?: Prisma.AlerteUpdateWithWhereUniqueWithoutPatientInput | Prisma.AlerteUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.AlerteUpdateManyWithWhereWithoutPatientInput | Prisma.AlerteUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.AlerteScalarWhereInput | Prisma.AlerteScalarWhereInput[];
};
export type AlerteUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutPatientInput, Prisma.AlerteUncheckedCreateWithoutPatientInput> | Prisma.AlerteCreateWithoutPatientInput[] | Prisma.AlerteUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutPatientInput | Prisma.AlerteCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.AlerteUpsertWithWhereUniqueWithoutPatientInput | Prisma.AlerteUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.AlerteCreateManyPatientInputEnvelope;
    set?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    disconnect?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    delete?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    connect?: Prisma.AlerteWhereUniqueInput | Prisma.AlerteWhereUniqueInput[];
    update?: Prisma.AlerteUpdateWithWhereUniqueWithoutPatientInput | Prisma.AlerteUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.AlerteUpdateManyWithWhereWithoutPatientInput | Prisma.AlerteUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.AlerteScalarWhereInput | Prisma.AlerteScalarWhereInput[];
};
export type AlerteCreateNestedOneWithoutMesureInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutMesureInput, Prisma.AlerteUncheckedCreateWithoutMesureInput>;
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutMesureInput;
    connect?: Prisma.AlerteWhereUniqueInput;
};
export type AlerteUncheckedCreateNestedOneWithoutMesureInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutMesureInput, Prisma.AlerteUncheckedCreateWithoutMesureInput>;
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutMesureInput;
    connect?: Prisma.AlerteWhereUniqueInput;
};
export type AlerteUpdateOneWithoutMesureNestedInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutMesureInput, Prisma.AlerteUncheckedCreateWithoutMesureInput>;
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutMesureInput;
    upsert?: Prisma.AlerteUpsertWithoutMesureInput;
    disconnect?: Prisma.AlerteWhereInput | boolean;
    delete?: Prisma.AlerteWhereInput | boolean;
    connect?: Prisma.AlerteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AlerteUpdateToOneWithWhereWithoutMesureInput, Prisma.AlerteUpdateWithoutMesureInput>, Prisma.AlerteUncheckedUpdateWithoutMesureInput>;
};
export type AlerteUncheckedUpdateOneWithoutMesureNestedInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutMesureInput, Prisma.AlerteUncheckedCreateWithoutMesureInput>;
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutMesureInput;
    upsert?: Prisma.AlerteUpsertWithoutMesureInput;
    disconnect?: Prisma.AlerteWhereInput | boolean;
    delete?: Prisma.AlerteWhereInput | boolean;
    connect?: Prisma.AlerteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AlerteUpdateToOneWithWhereWithoutMesureInput, Prisma.AlerteUpdateWithoutMesureInput>, Prisma.AlerteUncheckedUpdateWithoutMesureInput>;
};
export type EnumStatutAlerteFieldUpdateOperationsInput = {
    set?: $Enums.StatutAlerte;
};
export type AlerteCreateNestedOneWithoutInterventionsInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutInterventionsInput, Prisma.AlerteUncheckedCreateWithoutInterventionsInput>;
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutInterventionsInput;
    connect?: Prisma.AlerteWhereUniqueInput;
};
export type AlerteUpdateOneRequiredWithoutInterventionsNestedInput = {
    create?: Prisma.XOR<Prisma.AlerteCreateWithoutInterventionsInput, Prisma.AlerteUncheckedCreateWithoutInterventionsInput>;
    connectOrCreate?: Prisma.AlerteCreateOrConnectWithoutInterventionsInput;
    upsert?: Prisma.AlerteUpsertWithoutInterventionsInput;
    connect?: Prisma.AlerteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AlerteUpdateToOneWithWhereWithoutInterventionsInput, Prisma.AlerteUpdateWithoutInterventionsInput>, Prisma.AlerteUncheckedUpdateWithoutInterventionsInput>;
};
export type AlerteCreateWithoutOrganisationInput = {
    id?: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.PatientCreateNestedOneWithoutAlertesInput;
    mesure: Prisma.MesureNewsCreateNestedOneWithoutAlerteInput;
    interventions?: Prisma.InterventionCreateNestedManyWithoutAlerteInput;
};
export type AlerteUncheckedCreateWithoutOrganisationInput = {
    id?: string;
    patientId: string;
    mesureId: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    interventions?: Prisma.InterventionUncheckedCreateNestedManyWithoutAlerteInput;
};
export type AlerteCreateOrConnectWithoutOrganisationInput = {
    where: Prisma.AlerteWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlerteCreateWithoutOrganisationInput, Prisma.AlerteUncheckedCreateWithoutOrganisationInput>;
};
export type AlerteCreateManyOrganisationInputEnvelope = {
    data: Prisma.AlerteCreateManyOrganisationInput | Prisma.AlerteCreateManyOrganisationInput[];
    skipDuplicates?: boolean;
};
export type AlerteUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.AlerteWhereUniqueInput;
    update: Prisma.XOR<Prisma.AlerteUpdateWithoutOrganisationInput, Prisma.AlerteUncheckedUpdateWithoutOrganisationInput>;
    create: Prisma.XOR<Prisma.AlerteCreateWithoutOrganisationInput, Prisma.AlerteUncheckedCreateWithoutOrganisationInput>;
};
export type AlerteUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.AlerteWhereUniqueInput;
    data: Prisma.XOR<Prisma.AlerteUpdateWithoutOrganisationInput, Prisma.AlerteUncheckedUpdateWithoutOrganisationInput>;
};
export type AlerteUpdateManyWithWhereWithoutOrganisationInput = {
    where: Prisma.AlerteScalarWhereInput;
    data: Prisma.XOR<Prisma.AlerteUpdateManyMutationInput, Prisma.AlerteUncheckedUpdateManyWithoutOrganisationInput>;
};
export type AlerteScalarWhereInput = {
    AND?: Prisma.AlerteScalarWhereInput | Prisma.AlerteScalarWhereInput[];
    OR?: Prisma.AlerteScalarWhereInput[];
    NOT?: Prisma.AlerteScalarWhereInput | Prisma.AlerteScalarWhereInput[];
    id?: Prisma.StringFilter<"Alerte"> | string;
    organisationId?: Prisma.StringFilter<"Alerte"> | string;
    patientId?: Prisma.StringFilter<"Alerte"> | string;
    mesureId?: Prisma.StringFilter<"Alerte"> | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFilter<"Alerte"> | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFilter<"Alerte"> | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFilter<"Alerte"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Alerte"> | Date | string;
};
export type AlerteCreateWithoutPatientInput = {
    id?: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutAlertesInput;
    mesure: Prisma.MesureNewsCreateNestedOneWithoutAlerteInput;
    interventions?: Prisma.InterventionCreateNestedManyWithoutAlerteInput;
};
export type AlerteUncheckedCreateWithoutPatientInput = {
    id?: string;
    organisationId: string;
    mesureId: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    interventions?: Prisma.InterventionUncheckedCreateNestedManyWithoutAlerteInput;
};
export type AlerteCreateOrConnectWithoutPatientInput = {
    where: Prisma.AlerteWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlerteCreateWithoutPatientInput, Prisma.AlerteUncheckedCreateWithoutPatientInput>;
};
export type AlerteCreateManyPatientInputEnvelope = {
    data: Prisma.AlerteCreateManyPatientInput | Prisma.AlerteCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type AlerteUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.AlerteWhereUniqueInput;
    update: Prisma.XOR<Prisma.AlerteUpdateWithoutPatientInput, Prisma.AlerteUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.AlerteCreateWithoutPatientInput, Prisma.AlerteUncheckedCreateWithoutPatientInput>;
};
export type AlerteUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.AlerteWhereUniqueInput;
    data: Prisma.XOR<Prisma.AlerteUpdateWithoutPatientInput, Prisma.AlerteUncheckedUpdateWithoutPatientInput>;
};
export type AlerteUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.AlerteScalarWhereInput;
    data: Prisma.XOR<Prisma.AlerteUpdateManyMutationInput, Prisma.AlerteUncheckedUpdateManyWithoutPatientInput>;
};
export type AlerteCreateWithoutMesureInput = {
    id?: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutAlertesInput;
    patient: Prisma.PatientCreateNestedOneWithoutAlertesInput;
    interventions?: Prisma.InterventionCreateNestedManyWithoutAlerteInput;
};
export type AlerteUncheckedCreateWithoutMesureInput = {
    id?: string;
    organisationId: string;
    patientId: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    interventions?: Prisma.InterventionUncheckedCreateNestedManyWithoutAlerteInput;
};
export type AlerteCreateOrConnectWithoutMesureInput = {
    where: Prisma.AlerteWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlerteCreateWithoutMesureInput, Prisma.AlerteUncheckedCreateWithoutMesureInput>;
};
export type AlerteUpsertWithoutMesureInput = {
    update: Prisma.XOR<Prisma.AlerteUpdateWithoutMesureInput, Prisma.AlerteUncheckedUpdateWithoutMesureInput>;
    create: Prisma.XOR<Prisma.AlerteCreateWithoutMesureInput, Prisma.AlerteUncheckedCreateWithoutMesureInput>;
    where?: Prisma.AlerteWhereInput;
};
export type AlerteUpdateToOneWithWhereWithoutMesureInput = {
    where?: Prisma.AlerteWhereInput;
    data: Prisma.XOR<Prisma.AlerteUpdateWithoutMesureInput, Prisma.AlerteUncheckedUpdateWithoutMesureInput>;
};
export type AlerteUpdateWithoutMesureInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutAlertesNestedInput;
    patient?: Prisma.PatientUpdateOneRequiredWithoutAlertesNestedInput;
    interventions?: Prisma.InterventionUpdateManyWithoutAlerteNestedInput;
};
export type AlerteUncheckedUpdateWithoutMesureInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    interventions?: Prisma.InterventionUncheckedUpdateManyWithoutAlerteNestedInput;
};
export type AlerteCreateWithoutInterventionsInput = {
    id?: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutAlertesInput;
    patient: Prisma.PatientCreateNestedOneWithoutAlertesInput;
    mesure: Prisma.MesureNewsCreateNestedOneWithoutAlerteInput;
};
export type AlerteUncheckedCreateWithoutInterventionsInput = {
    id?: string;
    organisationId: string;
    patientId: string;
    mesureId: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AlerteCreateOrConnectWithoutInterventionsInput = {
    where: Prisma.AlerteWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlerteCreateWithoutInterventionsInput, Prisma.AlerteUncheckedCreateWithoutInterventionsInput>;
};
export type AlerteUpsertWithoutInterventionsInput = {
    update: Prisma.XOR<Prisma.AlerteUpdateWithoutInterventionsInput, Prisma.AlerteUncheckedUpdateWithoutInterventionsInput>;
    create: Prisma.XOR<Prisma.AlerteCreateWithoutInterventionsInput, Prisma.AlerteUncheckedCreateWithoutInterventionsInput>;
    where?: Prisma.AlerteWhereInput;
};
export type AlerteUpdateToOneWithWhereWithoutInterventionsInput = {
    where?: Prisma.AlerteWhereInput;
    data: Prisma.XOR<Prisma.AlerteUpdateWithoutInterventionsInput, Prisma.AlerteUncheckedUpdateWithoutInterventionsInput>;
};
export type AlerteUpdateWithoutInterventionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutAlertesNestedInput;
    patient?: Prisma.PatientUpdateOneRequiredWithoutAlertesNestedInput;
    mesure?: Prisma.MesureNewsUpdateOneRequiredWithoutAlerteNestedInput;
};
export type AlerteUncheckedUpdateWithoutInterventionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    mesureId?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteCreateManyOrganisationInput = {
    id?: string;
    patientId: string;
    mesureId: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AlerteUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneRequiredWithoutAlertesNestedInput;
    mesure?: Prisma.MesureNewsUpdateOneRequiredWithoutAlerteNestedInput;
    interventions?: Prisma.InterventionUpdateManyWithoutAlerteNestedInput;
};
export type AlerteUncheckedUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    mesureId?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    interventions?: Prisma.InterventionUncheckedUpdateManyWithoutAlerteNestedInput;
};
export type AlerteUncheckedUpdateManyWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    mesureId?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteCreateManyPatientInput = {
    id?: string;
    organisationId: string;
    mesureId: string;
    niveauRisque: $Enums.NiveauRisqueNews;
    statut?: $Enums.StatutAlerte;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AlerteUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutAlertesNestedInput;
    mesure?: Prisma.MesureNewsUpdateOneRequiredWithoutAlerteNestedInput;
    interventions?: Prisma.InterventionUpdateManyWithoutAlerteNestedInput;
};
export type AlerteUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    mesureId?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    interventions?: Prisma.InterventionUncheckedUpdateManyWithoutAlerteNestedInput;
};
export type AlerteUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    mesureId?: Prisma.StringFieldUpdateOperationsInput | string;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    statut?: Prisma.EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlerteCountOutputType = {
    interventions: number;
};
export type AlerteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    interventions?: boolean | AlerteCountOutputTypeCountInterventionsArgs;
};
export type AlerteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteCountOutputTypeSelect<ExtArgs> | null;
};
export type AlerteCountOutputTypeCountInterventionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InterventionWhereInput;
};
export type AlerteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organisationId?: boolean;
    patientId?: boolean;
    mesureId?: boolean;
    niveauRisque?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    mesure?: boolean | Prisma.MesureNewsDefaultArgs<ExtArgs>;
    interventions?: boolean | Prisma.Alerte$interventionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AlerteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["alerte"]>;
export type AlerteSelectScalar = {
    id?: boolean;
    organisationId?: boolean;
    patientId?: boolean;
    mesureId?: boolean;
    niveauRisque?: boolean;
    statut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AlerteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organisationId" | "patientId" | "mesureId" | "niveauRisque" | "statut" | "createdAt" | "updatedAt", ExtArgs["result"]["alerte"]>;
export type AlerteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    mesure?: boolean | Prisma.MesureNewsDefaultArgs<ExtArgs>;
    interventions?: boolean | Prisma.Alerte$interventionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AlerteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $AlertePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Alerte";
    objects: {
        organisation: Prisma.$OrganisationPayload<ExtArgs>;
        patient: Prisma.$PatientPayload<ExtArgs>;
        mesure: Prisma.$MesureNewsPayload<ExtArgs>;
        interventions: Prisma.$InterventionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organisationId: string;
        patientId: string;
        mesureId: string;
        niveauRisque: $Enums.NiveauRisqueNews;
        statut: $Enums.StatutAlerte;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["alerte"]>;
    composites: {};
};
export type AlerteGetPayload<S extends boolean | null | undefined | AlerteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AlertePayload, S>;
export type AlerteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AlerteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AlerteCountAggregateInputType | true;
};
export interface AlerteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Alerte'];
        meta: {
            name: 'Alerte';
        };
    };
    findUnique<T extends AlerteFindUniqueArgs>(args: Prisma.SelectSubset<T, AlerteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AlerteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AlerteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AlerteFindFirstArgs>(args?: Prisma.SelectSubset<T, AlerteFindFirstArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AlerteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AlerteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AlerteFindManyArgs>(args?: Prisma.SelectSubset<T, AlerteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AlerteCreateArgs>(args: Prisma.SelectSubset<T, AlerteCreateArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AlerteCreateManyArgs>(args?: Prisma.SelectSubset<T, AlerteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends AlerteDeleteArgs>(args: Prisma.SelectSubset<T, AlerteDeleteArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AlerteUpdateArgs>(args: Prisma.SelectSubset<T, AlerteUpdateArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AlerteDeleteManyArgs>(args?: Prisma.SelectSubset<T, AlerteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AlerteUpdateManyArgs>(args: Prisma.SelectSubset<T, AlerteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends AlerteUpsertArgs>(args: Prisma.SelectSubset<T, AlerteUpsertArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AlerteCountArgs>(args?: Prisma.Subset<T, AlerteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AlerteCountAggregateOutputType> : number>;
    aggregate<T extends AlerteAggregateArgs>(args: Prisma.Subset<T, AlerteAggregateArgs>): Prisma.PrismaPromise<GetAlerteAggregateType<T>>;
    groupBy<T extends AlerteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AlerteGroupByArgs['orderBy'];
    } : {
        orderBy?: AlerteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AlerteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlerteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AlerteFieldRefs;
}
export interface Prisma__AlerteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organisation<T extends Prisma.OrganisationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganisationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    patient<T extends Prisma.PatientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    mesure<T extends Prisma.MesureNewsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MesureNewsDefaultArgs<ExtArgs>>): Prisma.Prisma__MesureNewsClient<runtime.Types.Result.GetResult<Prisma.$MesureNewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    interventions<T extends Prisma.Alerte$interventionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Alerte$interventionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InterventionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AlerteFieldRefs {
    readonly id: Prisma.FieldRef<"Alerte", 'String'>;
    readonly organisationId: Prisma.FieldRef<"Alerte", 'String'>;
    readonly patientId: Prisma.FieldRef<"Alerte", 'String'>;
    readonly mesureId: Prisma.FieldRef<"Alerte", 'String'>;
    readonly niveauRisque: Prisma.FieldRef<"Alerte", 'NiveauRisqueNews'>;
    readonly statut: Prisma.FieldRef<"Alerte", 'StatutAlerte'>;
    readonly createdAt: Prisma.FieldRef<"Alerte", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Alerte", 'DateTime'>;
}
export type AlerteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    include?: Prisma.AlerteInclude<ExtArgs> | null;
    where: Prisma.AlerteWhereUniqueInput;
};
export type AlerteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    include?: Prisma.AlerteInclude<ExtArgs> | null;
    where: Prisma.AlerteWhereUniqueInput;
};
export type AlerteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AlerteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AlerteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AlerteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    include?: Prisma.AlerteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlerteCreateInput, Prisma.AlerteUncheckedCreateInput>;
};
export type AlerteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AlerteCreateManyInput | Prisma.AlerteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AlerteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    include?: Prisma.AlerteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AlerteUpdateInput, Prisma.AlerteUncheckedUpdateInput>;
    where: Prisma.AlerteWhereUniqueInput;
};
export type AlerteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AlerteUpdateManyMutationInput, Prisma.AlerteUncheckedUpdateManyInput>;
    where?: Prisma.AlerteWhereInput;
    limit?: number;
};
export type AlerteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    include?: Prisma.AlerteInclude<ExtArgs> | null;
    where: Prisma.AlerteWhereUniqueInput;
    create: Prisma.XOR<Prisma.AlerteCreateInput, Prisma.AlerteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AlerteUpdateInput, Prisma.AlerteUncheckedUpdateInput>;
};
export type AlerteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    include?: Prisma.AlerteInclude<ExtArgs> | null;
    where: Prisma.AlerteWhereUniqueInput;
};
export type AlerteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlerteWhereInput;
    limit?: number;
};
export type Alerte$interventionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InterventionSelect<ExtArgs> | null;
    omit?: Prisma.InterventionOmit<ExtArgs> | null;
    include?: Prisma.InterventionInclude<ExtArgs> | null;
    where?: Prisma.InterventionWhereInput;
    orderBy?: Prisma.InterventionOrderByWithRelationInput | Prisma.InterventionOrderByWithRelationInput[];
    cursor?: Prisma.InterventionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InterventionScalarFieldEnum | Prisma.InterventionScalarFieldEnum[];
};
export type AlerteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    include?: Prisma.AlerteInclude<ExtArgs> | null;
};
