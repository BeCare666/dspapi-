import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatientModel = runtime.Types.Result.DefaultSelection<Prisma.$PatientPayload>;
export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
};
export type PatientMinAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    serviceId: string | null;
    nom: string | null;
    prenom: string | null;
    dateNaissance: Date | null;
    sexe: string | null;
    numeroDossier: string | null;
    statut: $Enums.StatutPatient | null;
    dateAdmission: Date | null;
    dateSortie: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PatientMaxAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    serviceId: string | null;
    nom: string | null;
    prenom: string | null;
    dateNaissance: Date | null;
    sexe: string | null;
    numeroDossier: string | null;
    statut: $Enums.StatutPatient | null;
    dateAdmission: Date | null;
    dateSortie: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PatientCountAggregateOutputType = {
    id: number;
    organisationId: number;
    serviceId: number;
    nom: number;
    prenom: number;
    dateNaissance: number;
    sexe: number;
    numeroDossier: number;
    statut: number;
    dateAdmission: number;
    dateSortie: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PatientMinAggregateInputType = {
    id?: true;
    organisationId?: true;
    serviceId?: true;
    nom?: true;
    prenom?: true;
    dateNaissance?: true;
    sexe?: true;
    numeroDossier?: true;
    statut?: true;
    dateAdmission?: true;
    dateSortie?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PatientMaxAggregateInputType = {
    id?: true;
    organisationId?: true;
    serviceId?: true;
    nom?: true;
    prenom?: true;
    dateNaissance?: true;
    sexe?: true;
    numeroDossier?: true;
    statut?: true;
    dateAdmission?: true;
    dateSortie?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PatientCountAggregateInputType = {
    id?: true;
    organisationId?: true;
    serviceId?: true;
    nom?: true;
    prenom?: true;
    dateNaissance?: true;
    sexe?: true;
    numeroDossier?: true;
    statut?: true;
    dateAdmission?: true;
    dateSortie?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PatientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithRelationInput | Prisma.PatientOrderByWithRelationInput[];
    cursor?: Prisma.PatientWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientCountAggregateInputType;
    _min?: PatientMinAggregateInputType;
    _max?: PatientMaxAggregateInputType;
};
export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
    [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatient[P]> : Prisma.GetScalarType<T[P], AggregatePatient[P]>;
};
export type PatientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithAggregationInput | Prisma.PatientOrderByWithAggregationInput[];
    by: Prisma.PatientScalarFieldEnum[] | Prisma.PatientScalarFieldEnum;
    having?: Prisma.PatientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientCountAggregateInputType | true;
    _min?: PatientMinAggregateInputType;
    _max?: PatientMaxAggregateInputType;
};
export type PatientGroupByOutputType = {
    id: string;
    organisationId: string;
    serviceId: string | null;
    nom: string;
    prenom: string;
    dateNaissance: Date | null;
    sexe: string | null;
    numeroDossier: string | null;
    statut: $Enums.StatutPatient;
    dateAdmission: Date;
    dateSortie: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
};
export type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientGroupByOutputType[P]>;
}>>;
export type PatientWhereInput = {
    AND?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    OR?: Prisma.PatientWhereInput[];
    NOT?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    id?: Prisma.StringFilter<"Patient"> | string;
    organisationId?: Prisma.StringFilter<"Patient"> | string;
    serviceId?: Prisma.StringNullableFilter<"Patient"> | string | null;
    nom?: Prisma.StringFilter<"Patient"> | string;
    prenom?: Prisma.StringFilter<"Patient"> | string;
    dateNaissance?: Prisma.DateTimeNullableFilter<"Patient"> | Date | string | null;
    sexe?: Prisma.StringNullableFilter<"Patient"> | string | null;
    numeroDossier?: Prisma.StringNullableFilter<"Patient"> | string | null;
    statut?: Prisma.EnumStatutPatientFilter<"Patient"> | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    dateSortie?: Prisma.DateTimeNullableFilter<"Patient"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
    service?: Prisma.XOR<Prisma.ServiceNullableScalarRelationFilter, Prisma.ServiceWhereInput> | null;
    mesures?: Prisma.MesureNewsListRelationFilter;
    alertes?: Prisma.AlerteListRelationFilter;
};
export type PatientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrderInput | Prisma.SortOrder;
    sexe?: Prisma.SortOrderInput | Prisma.SortOrder;
    numeroDossier?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateAdmission?: Prisma.SortOrder;
    dateSortie?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organisation?: Prisma.OrganisationOrderByWithRelationInput;
    service?: Prisma.ServiceOrderByWithRelationInput;
    mesures?: Prisma.MesureNewsOrderByRelationAggregateInput;
    alertes?: Prisma.AlerteOrderByRelationAggregateInput;
    _relevance?: Prisma.PatientOrderByRelevanceInput;
};
export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    OR?: Prisma.PatientWhereInput[];
    NOT?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    organisationId?: Prisma.StringFilter<"Patient"> | string;
    serviceId?: Prisma.StringNullableFilter<"Patient"> | string | null;
    nom?: Prisma.StringFilter<"Patient"> | string;
    prenom?: Prisma.StringFilter<"Patient"> | string;
    dateNaissance?: Prisma.DateTimeNullableFilter<"Patient"> | Date | string | null;
    sexe?: Prisma.StringNullableFilter<"Patient"> | string | null;
    numeroDossier?: Prisma.StringNullableFilter<"Patient"> | string | null;
    statut?: Prisma.EnumStatutPatientFilter<"Patient"> | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    dateSortie?: Prisma.DateTimeNullableFilter<"Patient"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
    service?: Prisma.XOR<Prisma.ServiceNullableScalarRelationFilter, Prisma.ServiceWhereInput> | null;
    mesures?: Prisma.MesureNewsListRelationFilter;
    alertes?: Prisma.AlerteListRelationFilter;
}, "id">;
export type PatientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrderInput | Prisma.SortOrder;
    sexe?: Prisma.SortOrderInput | Prisma.SortOrder;
    numeroDossier?: Prisma.SortOrderInput | Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateAdmission?: Prisma.SortOrder;
    dateSortie?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PatientCountOrderByAggregateInput;
    _max?: Prisma.PatientMaxOrderByAggregateInput;
    _min?: Prisma.PatientMinOrderByAggregateInput;
};
export type PatientScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatientScalarWhereWithAggregatesInput | Prisma.PatientScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatientScalarWhereWithAggregatesInput | Prisma.PatientScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    organisationId?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    serviceId?: Prisma.StringNullableWithAggregatesFilter<"Patient"> | string | null;
    nom?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    dateNaissance?: Prisma.DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null;
    sexe?: Prisma.StringNullableWithAggregatesFilter<"Patient"> | string | null;
    numeroDossier?: Prisma.StringNullableWithAggregatesFilter<"Patient"> | string | null;
    statut?: Prisma.EnumStatutPatientWithAggregatesFilter<"Patient"> | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeWithAggregatesFilter<"Patient"> | Date | string;
    dateSortie?: Prisma.DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Patient"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Patient"> | Date | string;
};
export type PatientCreateInput = {
    id?: string;
    nom: string;
    prenom: string;
    dateNaissance?: Date | string | null;
    sexe?: string | null;
    numeroDossier?: string | null;
    statut?: $Enums.StatutPatient;
    dateAdmission?: Date | string;
    dateSortie?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutPatientsInput;
    service?: Prisma.ServiceCreateNestedOneWithoutPatientsInput;
    mesures?: Prisma.MesureNewsCreateNestedManyWithoutPatientInput;
    alertes?: Prisma.AlerteCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateInput = {
    id?: string;
    organisationId: string;
    serviceId?: string | null;
    nom: string;
    prenom: string;
    dateNaissance?: Date | string | null;
    sexe?: string | null;
    numeroDossier?: string | null;
    statut?: $Enums.StatutPatient;
    dateAdmission?: Date | string;
    dateSortie?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mesures?: Prisma.MesureNewsUncheckedCreateNestedManyWithoutPatientInput;
    alertes?: Prisma.AlerteUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutPatientsNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutPatientsNestedInput;
    mesures?: Prisma.MesureNewsUpdateManyWithoutPatientNestedInput;
    alertes?: Prisma.AlerteUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mesures?: Prisma.MesureNewsUncheckedUpdateManyWithoutPatientNestedInput;
    alertes?: Prisma.AlerteUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientCreateManyInput = {
    id?: string;
    organisationId: string;
    serviceId?: string | null;
    nom: string;
    prenom: string;
    dateNaissance?: Date | string | null;
    sexe?: string | null;
    numeroDossier?: string | null;
    statut?: $Enums.StatutPatient;
    dateAdmission?: Date | string;
    dateSortie?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PatientUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientListRelationFilter = {
    every?: Prisma.PatientWhereInput;
    some?: Prisma.PatientWhereInput;
    none?: Prisma.PatientWhereInput;
};
export type PatientOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PatientOrderByRelevanceInput = {
    fields: Prisma.PatientOrderByRelevanceFieldEnum | Prisma.PatientOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type PatientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    numeroDossier?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateAdmission?: Prisma.SortOrder;
    dateSortie?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    numeroDossier?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateAdmission?: Prisma.SortOrder;
    dateSortie?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    dateNaissance?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    numeroDossier?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    dateAdmission?: Prisma.SortOrder;
    dateSortie?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatientScalarRelationFilter = {
    is?: Prisma.PatientWhereInput;
    isNot?: Prisma.PatientWhereInput;
};
export type PatientCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutOrganisationInput, Prisma.PatientUncheckedCreateWithoutOrganisationInput> | Prisma.PatientCreateWithoutOrganisationInput[] | Prisma.PatientUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutOrganisationInput | Prisma.PatientCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.PatientCreateManyOrganisationInputEnvelope;
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
};
export type PatientUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutOrganisationInput, Prisma.PatientUncheckedCreateWithoutOrganisationInput> | Prisma.PatientCreateWithoutOrganisationInput[] | Prisma.PatientUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutOrganisationInput | Prisma.PatientCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.PatientCreateManyOrganisationInputEnvelope;
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
};
export type PatientUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutOrganisationInput, Prisma.PatientUncheckedCreateWithoutOrganisationInput> | Prisma.PatientCreateWithoutOrganisationInput[] | Prisma.PatientUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutOrganisationInput | Prisma.PatientCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.PatientUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.PatientUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.PatientCreateManyOrganisationInputEnvelope;
    set?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    disconnect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    delete?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    update?: Prisma.PatientUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.PatientUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.PatientUpdateManyWithWhereWithoutOrganisationInput | Prisma.PatientUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
};
export type PatientUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutOrganisationInput, Prisma.PatientUncheckedCreateWithoutOrganisationInput> | Prisma.PatientCreateWithoutOrganisationInput[] | Prisma.PatientUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutOrganisationInput | Prisma.PatientCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.PatientUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.PatientUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.PatientCreateManyOrganisationInputEnvelope;
    set?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    disconnect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    delete?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    update?: Prisma.PatientUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.PatientUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.PatientUpdateManyWithWhereWithoutOrganisationInput | Prisma.PatientUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
};
export type PatientCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutServiceInput, Prisma.PatientUncheckedCreateWithoutServiceInput> | Prisma.PatientCreateWithoutServiceInput[] | Prisma.PatientUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutServiceInput | Prisma.PatientCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.PatientCreateManyServiceInputEnvelope;
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
};
export type PatientUncheckedCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutServiceInput, Prisma.PatientUncheckedCreateWithoutServiceInput> | Prisma.PatientCreateWithoutServiceInput[] | Prisma.PatientUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutServiceInput | Prisma.PatientCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.PatientCreateManyServiceInputEnvelope;
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
};
export type PatientUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutServiceInput, Prisma.PatientUncheckedCreateWithoutServiceInput> | Prisma.PatientCreateWithoutServiceInput[] | Prisma.PatientUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutServiceInput | Prisma.PatientCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.PatientUpsertWithWhereUniqueWithoutServiceInput | Prisma.PatientUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.PatientCreateManyServiceInputEnvelope;
    set?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    disconnect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    delete?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    update?: Prisma.PatientUpdateWithWhereUniqueWithoutServiceInput | Prisma.PatientUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.PatientUpdateManyWithWhereWithoutServiceInput | Prisma.PatientUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
};
export type PatientUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutServiceInput, Prisma.PatientUncheckedCreateWithoutServiceInput> | Prisma.PatientCreateWithoutServiceInput[] | Prisma.PatientUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutServiceInput | Prisma.PatientCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.PatientUpsertWithWhereUniqueWithoutServiceInput | Prisma.PatientUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.PatientCreateManyServiceInputEnvelope;
    set?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    disconnect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    delete?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    update?: Prisma.PatientUpdateWithWhereUniqueWithoutServiceInput | Prisma.PatientUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.PatientUpdateManyWithWhereWithoutServiceInput | Prisma.PatientUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
};
export type EnumStatutPatientFieldUpdateOperationsInput = {
    set?: $Enums.StatutPatient;
};
export type PatientCreateNestedOneWithoutMesuresInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutMesuresInput, Prisma.PatientUncheckedCreateWithoutMesuresInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutMesuresInput;
    connect?: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateOneRequiredWithoutMesuresNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutMesuresInput, Prisma.PatientUncheckedCreateWithoutMesuresInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutMesuresInput;
    upsert?: Prisma.PatientUpsertWithoutMesuresInput;
    connect?: Prisma.PatientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientUpdateToOneWithWhereWithoutMesuresInput, Prisma.PatientUpdateWithoutMesuresInput>, Prisma.PatientUncheckedUpdateWithoutMesuresInput>;
};
export type PatientCreateNestedOneWithoutAlertesInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutAlertesInput, Prisma.PatientUncheckedCreateWithoutAlertesInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutAlertesInput;
    connect?: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateOneRequiredWithoutAlertesNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutAlertesInput, Prisma.PatientUncheckedCreateWithoutAlertesInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutAlertesInput;
    upsert?: Prisma.PatientUpsertWithoutAlertesInput;
    connect?: Prisma.PatientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientUpdateToOneWithWhereWithoutAlertesInput, Prisma.PatientUpdateWithoutAlertesInput>, Prisma.PatientUncheckedUpdateWithoutAlertesInput>;
};
export type PatientCreateWithoutOrganisationInput = {
    id?: string;
    nom: string;
    prenom: string;
    dateNaissance?: Date | string | null;
    sexe?: string | null;
    numeroDossier?: string | null;
    statut?: $Enums.StatutPatient;
    dateAdmission?: Date | string;
    dateSortie?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    service?: Prisma.ServiceCreateNestedOneWithoutPatientsInput;
    mesures?: Prisma.MesureNewsCreateNestedManyWithoutPatientInput;
    alertes?: Prisma.AlerteCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateWithoutOrganisationInput = {
    id?: string;
    serviceId?: string | null;
    nom: string;
    prenom: string;
    dateNaissance?: Date | string | null;
    sexe?: string | null;
    numeroDossier?: string | null;
    statut?: $Enums.StatutPatient;
    dateAdmission?: Date | string;
    dateSortie?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mesures?: Prisma.MesureNewsUncheckedCreateNestedManyWithoutPatientInput;
    alertes?: Prisma.AlerteUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientCreateOrConnectWithoutOrganisationInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutOrganisationInput, Prisma.PatientUncheckedCreateWithoutOrganisationInput>;
};
export type PatientCreateManyOrganisationInputEnvelope = {
    data: Prisma.PatientCreateManyOrganisationInput | Prisma.PatientCreateManyOrganisationInput[];
    skipDuplicates?: boolean;
};
export type PatientUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.PatientWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatientUpdateWithoutOrganisationInput, Prisma.PatientUncheckedUpdateWithoutOrganisationInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutOrganisationInput, Prisma.PatientUncheckedCreateWithoutOrganisationInput>;
};
export type PatientUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.PatientWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutOrganisationInput, Prisma.PatientUncheckedUpdateWithoutOrganisationInput>;
};
export type PatientUpdateManyWithWhereWithoutOrganisationInput = {
    where: Prisma.PatientScalarWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateManyMutationInput, Prisma.PatientUncheckedUpdateManyWithoutOrganisationInput>;
};
export type PatientScalarWhereInput = {
    AND?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
    OR?: Prisma.PatientScalarWhereInput[];
    NOT?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
    id?: Prisma.StringFilter<"Patient"> | string;
    organisationId?: Prisma.StringFilter<"Patient"> | string;
    serviceId?: Prisma.StringNullableFilter<"Patient"> | string | null;
    nom?: Prisma.StringFilter<"Patient"> | string;
    prenom?: Prisma.StringFilter<"Patient"> | string;
    dateNaissance?: Prisma.DateTimeNullableFilter<"Patient"> | Date | string | null;
    sexe?: Prisma.StringNullableFilter<"Patient"> | string | null;
    numeroDossier?: Prisma.StringNullableFilter<"Patient"> | string | null;
    statut?: Prisma.EnumStatutPatientFilter<"Patient"> | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    dateSortie?: Prisma.DateTimeNullableFilter<"Patient"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
};
export type PatientCreateWithoutServiceInput = {
    id?: string;
    nom: string;
    prenom: string;
    dateNaissance?: Date | string | null;
    sexe?: string | null;
    numeroDossier?: string | null;
    statut?: $Enums.StatutPatient;
    dateAdmission?: Date | string;
    dateSortie?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutPatientsInput;
    mesures?: Prisma.MesureNewsCreateNestedManyWithoutPatientInput;
    alertes?: Prisma.AlerteCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateWithoutServiceInput = {
    id?: string;
    organisationId: string;
    nom: string;
    prenom: string;
    dateNaissance?: Date | string | null;
    sexe?: string | null;
    numeroDossier?: string | null;
    statut?: $Enums.StatutPatient;
    dateAdmission?: Date | string;
    dateSortie?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mesures?: Prisma.MesureNewsUncheckedCreateNestedManyWithoutPatientInput;
    alertes?: Prisma.AlerteUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientCreateOrConnectWithoutServiceInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutServiceInput, Prisma.PatientUncheckedCreateWithoutServiceInput>;
};
export type PatientCreateManyServiceInputEnvelope = {
    data: Prisma.PatientCreateManyServiceInput | Prisma.PatientCreateManyServiceInput[];
    skipDuplicates?: boolean;
};
export type PatientUpsertWithWhereUniqueWithoutServiceInput = {
    where: Prisma.PatientWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatientUpdateWithoutServiceInput, Prisma.PatientUncheckedUpdateWithoutServiceInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutServiceInput, Prisma.PatientUncheckedCreateWithoutServiceInput>;
};
export type PatientUpdateWithWhereUniqueWithoutServiceInput = {
    where: Prisma.PatientWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutServiceInput, Prisma.PatientUncheckedUpdateWithoutServiceInput>;
};
export type PatientUpdateManyWithWhereWithoutServiceInput = {
    where: Prisma.PatientScalarWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateManyMutationInput, Prisma.PatientUncheckedUpdateManyWithoutServiceInput>;
};
export type PatientCreateWithoutMesuresInput = {
    id?: string;
    nom: string;
    prenom: string;
    dateNaissance?: Date | string | null;
    sexe?: string | null;
    numeroDossier?: string | null;
    statut?: $Enums.StatutPatient;
    dateAdmission?: Date | string;
    dateSortie?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutPatientsInput;
    service?: Prisma.ServiceCreateNestedOneWithoutPatientsInput;
    alertes?: Prisma.AlerteCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateWithoutMesuresInput = {
    id?: string;
    organisationId: string;
    serviceId?: string | null;
    nom: string;
    prenom: string;
    dateNaissance?: Date | string | null;
    sexe?: string | null;
    numeroDossier?: string | null;
    statut?: $Enums.StatutPatient;
    dateAdmission?: Date | string;
    dateSortie?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    alertes?: Prisma.AlerteUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientCreateOrConnectWithoutMesuresInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutMesuresInput, Prisma.PatientUncheckedCreateWithoutMesuresInput>;
};
export type PatientUpsertWithoutMesuresInput = {
    update: Prisma.XOR<Prisma.PatientUpdateWithoutMesuresInput, Prisma.PatientUncheckedUpdateWithoutMesuresInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutMesuresInput, Prisma.PatientUncheckedCreateWithoutMesuresInput>;
    where?: Prisma.PatientWhereInput;
};
export type PatientUpdateToOneWithWhereWithoutMesuresInput = {
    where?: Prisma.PatientWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutMesuresInput, Prisma.PatientUncheckedUpdateWithoutMesuresInput>;
};
export type PatientUpdateWithoutMesuresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutPatientsNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutPatientsNestedInput;
    alertes?: Prisma.AlerteUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateWithoutMesuresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alertes?: Prisma.AlerteUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientCreateWithoutAlertesInput = {
    id?: string;
    nom: string;
    prenom: string;
    dateNaissance?: Date | string | null;
    sexe?: string | null;
    numeroDossier?: string | null;
    statut?: $Enums.StatutPatient;
    dateAdmission?: Date | string;
    dateSortie?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutPatientsInput;
    service?: Prisma.ServiceCreateNestedOneWithoutPatientsInput;
    mesures?: Prisma.MesureNewsCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateWithoutAlertesInput = {
    id?: string;
    organisationId: string;
    serviceId?: string | null;
    nom: string;
    prenom: string;
    dateNaissance?: Date | string | null;
    sexe?: string | null;
    numeroDossier?: string | null;
    statut?: $Enums.StatutPatient;
    dateAdmission?: Date | string;
    dateSortie?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mesures?: Prisma.MesureNewsUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientCreateOrConnectWithoutAlertesInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutAlertesInput, Prisma.PatientUncheckedCreateWithoutAlertesInput>;
};
export type PatientUpsertWithoutAlertesInput = {
    update: Prisma.XOR<Prisma.PatientUpdateWithoutAlertesInput, Prisma.PatientUncheckedUpdateWithoutAlertesInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutAlertesInput, Prisma.PatientUncheckedCreateWithoutAlertesInput>;
    where?: Prisma.PatientWhereInput;
};
export type PatientUpdateToOneWithWhereWithoutAlertesInput = {
    where?: Prisma.PatientWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutAlertesInput, Prisma.PatientUncheckedUpdateWithoutAlertesInput>;
};
export type PatientUpdateWithoutAlertesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutPatientsNestedInput;
    service?: Prisma.ServiceUpdateOneWithoutPatientsNestedInput;
    mesures?: Prisma.MesureNewsUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateWithoutAlertesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mesures?: Prisma.MesureNewsUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientCreateManyOrganisationInput = {
    id?: string;
    serviceId?: string | null;
    nom: string;
    prenom: string;
    dateNaissance?: Date | string | null;
    sexe?: string | null;
    numeroDossier?: string | null;
    statut?: $Enums.StatutPatient;
    dateAdmission?: Date | string;
    dateSortie?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PatientUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    service?: Prisma.ServiceUpdateOneWithoutPatientsNestedInput;
    mesures?: Prisma.MesureNewsUpdateManyWithoutPatientNestedInput;
    alertes?: Prisma.AlerteUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mesures?: Prisma.MesureNewsUncheckedUpdateManyWithoutPatientNestedInput;
    alertes?: Prisma.AlerteUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateManyWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientCreateManyServiceInput = {
    id?: string;
    organisationId: string;
    nom: string;
    prenom: string;
    dateNaissance?: Date | string | null;
    sexe?: string | null;
    numeroDossier?: string | null;
    statut?: $Enums.StatutPatient;
    dateAdmission?: Date | string;
    dateSortie?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PatientUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutPatientsNestedInput;
    mesures?: Prisma.MesureNewsUpdateManyWithoutPatientNestedInput;
    alertes?: Prisma.AlerteUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mesures?: Prisma.MesureNewsUncheckedUpdateManyWithoutPatientNestedInput;
    alertes?: Prisma.AlerteUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateManyWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    dateNaissance?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numeroDossier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    statut?: Prisma.EnumStatutPatientFieldUpdateOperationsInput | $Enums.StatutPatient;
    dateAdmission?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dateSortie?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientCountOutputType = {
    mesures: number;
    alertes: number;
};
export type PatientCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mesures?: boolean | PatientCountOutputTypeCountMesuresArgs;
    alertes?: boolean | PatientCountOutputTypeCountAlertesArgs;
};
export type PatientCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientCountOutputTypeSelect<ExtArgs> | null;
};
export type PatientCountOutputTypeCountMesuresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MesureNewsWhereInput;
};
export type PatientCountOutputTypeCountAlertesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlerteWhereInput;
};
export type PatientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organisationId?: boolean;
    serviceId?: boolean;
    nom?: boolean;
    prenom?: boolean;
    dateNaissance?: boolean;
    sexe?: boolean;
    numeroDossier?: boolean;
    statut?: boolean;
    dateAdmission?: boolean;
    dateSortie?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.Patient$serviceArgs<ExtArgs>;
    mesures?: boolean | Prisma.Patient$mesuresArgs<ExtArgs>;
    alertes?: boolean | Prisma.Patient$alertesArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patient"]>;
export type PatientSelectScalar = {
    id?: boolean;
    organisationId?: boolean;
    serviceId?: boolean;
    nom?: boolean;
    prenom?: boolean;
    dateNaissance?: boolean;
    sexe?: boolean;
    numeroDossier?: boolean;
    statut?: boolean;
    dateAdmission?: boolean;
    dateSortie?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PatientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organisationId" | "serviceId" | "nom" | "prenom" | "dateNaissance" | "sexe" | "numeroDossier" | "statut" | "dateAdmission" | "dateSortie" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>;
export type PatientInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.Patient$serviceArgs<ExtArgs>;
    mesures?: boolean | Prisma.Patient$mesuresArgs<ExtArgs>;
    alertes?: boolean | Prisma.Patient$alertesArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $PatientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Patient";
    objects: {
        organisation: Prisma.$OrganisationPayload<ExtArgs>;
        service: Prisma.$ServicePayload<ExtArgs> | null;
        mesures: Prisma.$MesureNewsPayload<ExtArgs>[];
        alertes: Prisma.$AlertePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organisationId: string;
        serviceId: string | null;
        nom: string;
        prenom: string;
        dateNaissance: Date | null;
        sexe: string | null;
        numeroDossier: string | null;
        statut: $Enums.StatutPatient;
        dateAdmission: Date;
        dateSortie: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["patient"]>;
    composites: {};
};
export type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatientPayload, S>;
export type PatientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientCountAggregateInputType | true;
};
export interface PatientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Patient'];
        meta: {
            name: 'Patient';
        };
    };
    findUnique<T extends PatientFindUniqueArgs>(args: Prisma.SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatientFindFirstArgs>(args?: Prisma.SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatientFindManyArgs>(args?: Prisma.SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatientCreateArgs>(args: Prisma.SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatientCreateManyArgs>(args?: Prisma.SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends PatientDeleteArgs>(args: Prisma.SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatientUpdateArgs>(args: Prisma.SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatientDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatientUpdateManyArgs>(args: Prisma.SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends PatientUpsertArgs>(args: Prisma.SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatientCountArgs>(args?: Prisma.Subset<T, PatientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientCountAggregateOutputType> : number>;
    aggregate<T extends PatientAggregateArgs>(args: Prisma.Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>;
    groupBy<T extends PatientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatientGroupByArgs['orderBy'];
    } : {
        orderBy?: PatientGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatientFieldRefs;
}
export interface Prisma__PatientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organisation<T extends Prisma.OrganisationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganisationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    service<T extends Prisma.Patient$serviceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Patient$serviceArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    mesures<T extends Prisma.Patient$mesuresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Patient$mesuresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MesureNewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    alertes<T extends Prisma.Patient$alertesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Patient$alertesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatientFieldRefs {
    readonly id: Prisma.FieldRef<"Patient", 'String'>;
    readonly organisationId: Prisma.FieldRef<"Patient", 'String'>;
    readonly serviceId: Prisma.FieldRef<"Patient", 'String'>;
    readonly nom: Prisma.FieldRef<"Patient", 'String'>;
    readonly prenom: Prisma.FieldRef<"Patient", 'String'>;
    readonly dateNaissance: Prisma.FieldRef<"Patient", 'DateTime'>;
    readonly sexe: Prisma.FieldRef<"Patient", 'String'>;
    readonly numeroDossier: Prisma.FieldRef<"Patient", 'String'>;
    readonly statut: Prisma.FieldRef<"Patient", 'StatutPatient'>;
    readonly dateAdmission: Prisma.FieldRef<"Patient", 'DateTime'>;
    readonly dateSortie: Prisma.FieldRef<"Patient", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Patient", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Patient", 'DateTime'>;
}
export type PatientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientCreateInput, Prisma.PatientUncheckedCreateInput>;
};
export type PatientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatientCreateManyInput | Prisma.PatientCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientUpdateInput, Prisma.PatientUncheckedUpdateInput>;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatientUpdateManyMutationInput, Prisma.PatientUncheckedUpdateManyInput>;
    where?: Prisma.PatientWhereInput;
    limit?: number;
};
export type PatientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateInput, Prisma.PatientUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatientUpdateInput, Prisma.PatientUncheckedUpdateInput>;
};
export type PatientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
    limit?: number;
};
export type Patient$serviceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where?: Prisma.ServiceWhereInput;
};
export type Patient$mesuresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesureNewsSelect<ExtArgs> | null;
    omit?: Prisma.MesureNewsOmit<ExtArgs> | null;
    include?: Prisma.MesureNewsInclude<ExtArgs> | null;
    where?: Prisma.MesureNewsWhereInput;
    orderBy?: Prisma.MesureNewsOrderByWithRelationInput | Prisma.MesureNewsOrderByWithRelationInput[];
    cursor?: Prisma.MesureNewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MesureNewsScalarFieldEnum | Prisma.MesureNewsScalarFieldEnum[];
};
export type Patient$alertesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
};
