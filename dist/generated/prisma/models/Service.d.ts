import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ServiceModel = runtime.Types.Result.DefaultSelection<Prisma.$ServicePayload>;
export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
};
export type ServiceMinAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    nom: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ServiceMaxAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    nom: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ServiceCountAggregateOutputType = {
    id: number;
    organisationId: number;
    nom: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ServiceMinAggregateInputType = {
    id?: true;
    organisationId?: true;
    nom?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ServiceMaxAggregateInputType = {
    id?: true;
    organisationId?: true;
    nom?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ServiceCountAggregateInputType = {
    id?: true;
    organisationId?: true;
    nom?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ServiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ServiceCountAggregateInputType;
    _min?: ServiceMinAggregateInputType;
    _max?: ServiceMaxAggregateInputType;
};
export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
    [P in keyof T & keyof AggregateService]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateService[P]> : Prisma.GetScalarType<T[P], AggregateService[P]>;
};
export type ServiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithAggregationInput | Prisma.ServiceOrderByWithAggregationInput[];
    by: Prisma.ServiceScalarFieldEnum[] | Prisma.ServiceScalarFieldEnum;
    having?: Prisma.ServiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceCountAggregateInputType | true;
    _min?: ServiceMinAggregateInputType;
    _max?: ServiceMaxAggregateInputType;
};
export type ServiceGroupByOutputType = {
    id: string;
    organisationId: string;
    nom: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ServiceCountAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
};
export type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServiceGroupByOutputType[P]>;
}>>;
export type ServiceWhereInput = {
    AND?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    OR?: Prisma.ServiceWhereInput[];
    NOT?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    id?: Prisma.StringFilter<"Service"> | string;
    organisationId?: Prisma.StringFilter<"Service"> | string;
    nom?: Prisma.StringFilter<"Service"> | string;
    description?: Prisma.StringNullableFilter<"Service"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Service"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Service"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
    patients?: Prisma.PatientListRelationFilter;
    utilisateurs?: Prisma.UtilisateurListRelationFilter;
    evenementsIndesirables?: Prisma.EvenementIndesirableListRelationFilter;
};
export type ServiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organisation?: Prisma.OrganisationOrderByWithRelationInput;
    patients?: Prisma.PatientOrderByRelationAggregateInput;
    utilisateurs?: Prisma.UtilisateurOrderByRelationAggregateInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableOrderByRelationAggregateInput;
    _relevance?: Prisma.ServiceOrderByRelevanceInput;
};
export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    organisationId_nom?: Prisma.ServiceOrganisationIdNomCompoundUniqueInput;
    AND?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    OR?: Prisma.ServiceWhereInput[];
    NOT?: Prisma.ServiceWhereInput | Prisma.ServiceWhereInput[];
    organisationId?: Prisma.StringFilter<"Service"> | string;
    nom?: Prisma.StringFilter<"Service"> | string;
    description?: Prisma.StringNullableFilter<"Service"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Service"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Service"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
    patients?: Prisma.PatientListRelationFilter;
    utilisateurs?: Prisma.UtilisateurListRelationFilter;
    evenementsIndesirables?: Prisma.EvenementIndesirableListRelationFilter;
}, "id" | "organisationId_nom">;
export type ServiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ServiceCountOrderByAggregateInput;
    _max?: Prisma.ServiceMaxOrderByAggregateInput;
    _min?: Prisma.ServiceMinOrderByAggregateInput;
};
export type ServiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.ServiceScalarWhereWithAggregatesInput | Prisma.ServiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.ServiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ServiceScalarWhereWithAggregatesInput | Prisma.ServiceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Service"> | string;
    organisationId?: Prisma.StringWithAggregatesFilter<"Service"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Service"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Service"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Service"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Service"> | Date | string;
};
export type ServiceCreateInput = {
    id?: string;
    nom: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutServicesInput;
    patients?: Prisma.PatientCreateNestedManyWithoutServiceInput;
    utilisateurs?: Prisma.UtilisateurCreateNestedManyWithoutServiceInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutServiceInput;
};
export type ServiceUncheckedCreateInput = {
    id?: string;
    organisationId: string;
    nom: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutServiceInput;
    utilisateurs?: Prisma.UtilisateurUncheckedCreateNestedManyWithoutServiceInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutServiceInput;
};
export type ServiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutServicesNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutServiceNestedInput;
    utilisateurs?: Prisma.UtilisateurUpdateManyWithoutServiceNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutServiceNestedInput;
    utilisateurs?: Prisma.UtilisateurUncheckedUpdateManyWithoutServiceNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutServiceNestedInput;
};
export type ServiceCreateManyInput = {
    id?: string;
    organisationId: string;
    nom: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ServiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceListRelationFilter = {
    every?: Prisma.ServiceWhereInput;
    some?: Prisma.ServiceWhereInput;
    none?: Prisma.ServiceWhereInput;
};
export type ServiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ServiceNullableScalarRelationFilter = {
    is?: Prisma.ServiceWhereInput | null;
    isNot?: Prisma.ServiceWhereInput | null;
};
export type ServiceOrderByRelevanceInput = {
    fields: Prisma.ServiceOrderByRelevanceFieldEnum | Prisma.ServiceOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ServiceOrganisationIdNomCompoundUniqueInput = {
    organisationId: string;
    nom: string;
};
export type ServiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ServiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ServiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ServiceCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutOrganisationInput, Prisma.ServiceUncheckedCreateWithoutOrganisationInput> | Prisma.ServiceCreateWithoutOrganisationInput[] | Prisma.ServiceUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutOrganisationInput | Prisma.ServiceCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.ServiceCreateManyOrganisationInputEnvelope;
    connect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
};
export type ServiceUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutOrganisationInput, Prisma.ServiceUncheckedCreateWithoutOrganisationInput> | Prisma.ServiceCreateWithoutOrganisationInput[] | Prisma.ServiceUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutOrganisationInput | Prisma.ServiceCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.ServiceCreateManyOrganisationInputEnvelope;
    connect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
};
export type ServiceUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutOrganisationInput, Prisma.ServiceUncheckedCreateWithoutOrganisationInput> | Prisma.ServiceCreateWithoutOrganisationInput[] | Prisma.ServiceUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutOrganisationInput | Prisma.ServiceCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.ServiceUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.ServiceUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.ServiceCreateManyOrganisationInputEnvelope;
    set?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    disconnect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    delete?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    connect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    update?: Prisma.ServiceUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.ServiceUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.ServiceUpdateManyWithWhereWithoutOrganisationInput | Prisma.ServiceUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.ServiceScalarWhereInput | Prisma.ServiceScalarWhereInput[];
};
export type ServiceUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutOrganisationInput, Prisma.ServiceUncheckedCreateWithoutOrganisationInput> | Prisma.ServiceCreateWithoutOrganisationInput[] | Prisma.ServiceUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutOrganisationInput | Prisma.ServiceCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.ServiceUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.ServiceUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.ServiceCreateManyOrganisationInputEnvelope;
    set?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    disconnect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    delete?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    connect?: Prisma.ServiceWhereUniqueInput | Prisma.ServiceWhereUniqueInput[];
    update?: Prisma.ServiceUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.ServiceUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.ServiceUpdateManyWithWhereWithoutOrganisationInput | Prisma.ServiceUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.ServiceScalarWhereInput | Prisma.ServiceScalarWhereInput[];
};
export type ServiceCreateNestedOneWithoutUtilisateursInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutUtilisateursInput, Prisma.ServiceUncheckedCreateWithoutUtilisateursInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutUtilisateursInput;
    connect?: Prisma.ServiceWhereUniqueInput;
};
export type ServiceUpdateOneWithoutUtilisateursNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutUtilisateursInput, Prisma.ServiceUncheckedCreateWithoutUtilisateursInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutUtilisateursInput;
    upsert?: Prisma.ServiceUpsertWithoutUtilisateursInput;
    disconnect?: Prisma.ServiceWhereInput | boolean;
    delete?: Prisma.ServiceWhereInput | boolean;
    connect?: Prisma.ServiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServiceUpdateToOneWithWhereWithoutUtilisateursInput, Prisma.ServiceUpdateWithoutUtilisateursInput>, Prisma.ServiceUncheckedUpdateWithoutUtilisateursInput>;
};
export type ServiceCreateNestedOneWithoutPatientsInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutPatientsInput, Prisma.ServiceUncheckedCreateWithoutPatientsInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutPatientsInput;
    connect?: Prisma.ServiceWhereUniqueInput;
};
export type ServiceUpdateOneWithoutPatientsNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutPatientsInput, Prisma.ServiceUncheckedCreateWithoutPatientsInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutPatientsInput;
    upsert?: Prisma.ServiceUpsertWithoutPatientsInput;
    disconnect?: Prisma.ServiceWhereInput | boolean;
    delete?: Prisma.ServiceWhereInput | boolean;
    connect?: Prisma.ServiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServiceUpdateToOneWithWhereWithoutPatientsInput, Prisma.ServiceUpdateWithoutPatientsInput>, Prisma.ServiceUncheckedUpdateWithoutPatientsInput>;
};
export type ServiceCreateNestedOneWithoutEvenementsIndesirablesInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutEvenementsIndesirablesInput, Prisma.ServiceUncheckedCreateWithoutEvenementsIndesirablesInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutEvenementsIndesirablesInput;
    connect?: Prisma.ServiceWhereUniqueInput;
};
export type ServiceUpdateOneWithoutEvenementsIndesirablesNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceCreateWithoutEvenementsIndesirablesInput, Prisma.ServiceUncheckedCreateWithoutEvenementsIndesirablesInput>;
    connectOrCreate?: Prisma.ServiceCreateOrConnectWithoutEvenementsIndesirablesInput;
    upsert?: Prisma.ServiceUpsertWithoutEvenementsIndesirablesInput;
    disconnect?: Prisma.ServiceWhereInput | boolean;
    delete?: Prisma.ServiceWhereInput | boolean;
    connect?: Prisma.ServiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServiceUpdateToOneWithWhereWithoutEvenementsIndesirablesInput, Prisma.ServiceUpdateWithoutEvenementsIndesirablesInput>, Prisma.ServiceUncheckedUpdateWithoutEvenementsIndesirablesInput>;
};
export type ServiceCreateWithoutOrganisationInput = {
    id?: string;
    nom: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patients?: Prisma.PatientCreateNestedManyWithoutServiceInput;
    utilisateurs?: Prisma.UtilisateurCreateNestedManyWithoutServiceInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutServiceInput;
};
export type ServiceUncheckedCreateWithoutOrganisationInput = {
    id?: string;
    nom: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutServiceInput;
    utilisateurs?: Prisma.UtilisateurUncheckedCreateNestedManyWithoutServiceInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutServiceInput;
};
export type ServiceCreateOrConnectWithoutOrganisationInput = {
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutOrganisationInput, Prisma.ServiceUncheckedCreateWithoutOrganisationInput>;
};
export type ServiceCreateManyOrganisationInputEnvelope = {
    data: Prisma.ServiceCreateManyOrganisationInput | Prisma.ServiceCreateManyOrganisationInput[];
    skipDuplicates?: boolean;
};
export type ServiceUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.ServiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.ServiceUpdateWithoutOrganisationInput, Prisma.ServiceUncheckedUpdateWithoutOrganisationInput>;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutOrganisationInput, Prisma.ServiceUncheckedCreateWithoutOrganisationInput>;
};
export type ServiceUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.ServiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.ServiceUpdateWithoutOrganisationInput, Prisma.ServiceUncheckedUpdateWithoutOrganisationInput>;
};
export type ServiceUpdateManyWithWhereWithoutOrganisationInput = {
    where: Prisma.ServiceScalarWhereInput;
    data: Prisma.XOR<Prisma.ServiceUpdateManyMutationInput, Prisma.ServiceUncheckedUpdateManyWithoutOrganisationInput>;
};
export type ServiceScalarWhereInput = {
    AND?: Prisma.ServiceScalarWhereInput | Prisma.ServiceScalarWhereInput[];
    OR?: Prisma.ServiceScalarWhereInput[];
    NOT?: Prisma.ServiceScalarWhereInput | Prisma.ServiceScalarWhereInput[];
    id?: Prisma.StringFilter<"Service"> | string;
    organisationId?: Prisma.StringFilter<"Service"> | string;
    nom?: Prisma.StringFilter<"Service"> | string;
    description?: Prisma.StringNullableFilter<"Service"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Service"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Service"> | Date | string;
};
export type ServiceCreateWithoutUtilisateursInput = {
    id?: string;
    nom: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutServicesInput;
    patients?: Prisma.PatientCreateNestedManyWithoutServiceInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutServiceInput;
};
export type ServiceUncheckedCreateWithoutUtilisateursInput = {
    id?: string;
    organisationId: string;
    nom: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutServiceInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutServiceInput;
};
export type ServiceCreateOrConnectWithoutUtilisateursInput = {
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutUtilisateursInput, Prisma.ServiceUncheckedCreateWithoutUtilisateursInput>;
};
export type ServiceUpsertWithoutUtilisateursInput = {
    update: Prisma.XOR<Prisma.ServiceUpdateWithoutUtilisateursInput, Prisma.ServiceUncheckedUpdateWithoutUtilisateursInput>;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutUtilisateursInput, Prisma.ServiceUncheckedCreateWithoutUtilisateursInput>;
    where?: Prisma.ServiceWhereInput;
};
export type ServiceUpdateToOneWithWhereWithoutUtilisateursInput = {
    where?: Prisma.ServiceWhereInput;
    data: Prisma.XOR<Prisma.ServiceUpdateWithoutUtilisateursInput, Prisma.ServiceUncheckedUpdateWithoutUtilisateursInput>;
};
export type ServiceUpdateWithoutUtilisateursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutServicesNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutServiceNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateWithoutUtilisateursInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutServiceNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutServiceNestedInput;
};
export type ServiceCreateWithoutPatientsInput = {
    id?: string;
    nom: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutServicesInput;
    utilisateurs?: Prisma.UtilisateurCreateNestedManyWithoutServiceInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableCreateNestedManyWithoutServiceInput;
};
export type ServiceUncheckedCreateWithoutPatientsInput = {
    id?: string;
    organisationId: string;
    nom: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedCreateNestedManyWithoutServiceInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedCreateNestedManyWithoutServiceInput;
};
export type ServiceCreateOrConnectWithoutPatientsInput = {
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutPatientsInput, Prisma.ServiceUncheckedCreateWithoutPatientsInput>;
};
export type ServiceUpsertWithoutPatientsInput = {
    update: Prisma.XOR<Prisma.ServiceUpdateWithoutPatientsInput, Prisma.ServiceUncheckedUpdateWithoutPatientsInput>;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutPatientsInput, Prisma.ServiceUncheckedCreateWithoutPatientsInput>;
    where?: Prisma.ServiceWhereInput;
};
export type ServiceUpdateToOneWithWhereWithoutPatientsInput = {
    where?: Prisma.ServiceWhereInput;
    data: Prisma.XOR<Prisma.ServiceUpdateWithoutPatientsInput, Prisma.ServiceUncheckedUpdateWithoutPatientsInput>;
};
export type ServiceUpdateWithoutPatientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutServicesNestedInput;
    utilisateurs?: Prisma.UtilisateurUpdateManyWithoutServiceNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateWithoutPatientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateurs?: Prisma.UtilisateurUncheckedUpdateManyWithoutServiceNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutServiceNestedInput;
};
export type ServiceCreateWithoutEvenementsIndesirablesInput = {
    id?: string;
    nom: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutServicesInput;
    patients?: Prisma.PatientCreateNestedManyWithoutServiceInput;
    utilisateurs?: Prisma.UtilisateurCreateNestedManyWithoutServiceInput;
};
export type ServiceUncheckedCreateWithoutEvenementsIndesirablesInput = {
    id?: string;
    organisationId: string;
    nom: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutServiceInput;
    utilisateurs?: Prisma.UtilisateurUncheckedCreateNestedManyWithoutServiceInput;
};
export type ServiceCreateOrConnectWithoutEvenementsIndesirablesInput = {
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutEvenementsIndesirablesInput, Prisma.ServiceUncheckedCreateWithoutEvenementsIndesirablesInput>;
};
export type ServiceUpsertWithoutEvenementsIndesirablesInput = {
    update: Prisma.XOR<Prisma.ServiceUpdateWithoutEvenementsIndesirablesInput, Prisma.ServiceUncheckedUpdateWithoutEvenementsIndesirablesInput>;
    create: Prisma.XOR<Prisma.ServiceCreateWithoutEvenementsIndesirablesInput, Prisma.ServiceUncheckedCreateWithoutEvenementsIndesirablesInput>;
    where?: Prisma.ServiceWhereInput;
};
export type ServiceUpdateToOneWithWhereWithoutEvenementsIndesirablesInput = {
    where?: Prisma.ServiceWhereInput;
    data: Prisma.XOR<Prisma.ServiceUpdateWithoutEvenementsIndesirablesInput, Prisma.ServiceUncheckedUpdateWithoutEvenementsIndesirablesInput>;
};
export type ServiceUpdateWithoutEvenementsIndesirablesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutServicesNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutServiceNestedInput;
    utilisateurs?: Prisma.UtilisateurUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateWithoutEvenementsIndesirablesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutServiceNestedInput;
    utilisateurs?: Prisma.UtilisateurUncheckedUpdateManyWithoutServiceNestedInput;
};
export type ServiceCreateManyOrganisationInput = {
    id?: string;
    nom: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ServiceUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patients?: Prisma.PatientUpdateManyWithoutServiceNestedInput;
    utilisateurs?: Prisma.UtilisateurUpdateManyWithoutServiceNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutServiceNestedInput;
    utilisateurs?: Prisma.UtilisateurUncheckedUpdateManyWithoutServiceNestedInput;
    evenementsIndesirables?: Prisma.EvenementIndesirableUncheckedUpdateManyWithoutServiceNestedInput;
};
export type ServiceUncheckedUpdateManyWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServiceCountOutputType = {
    patients: number;
    utilisateurs: number;
    evenementsIndesirables: number;
};
export type ServiceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patients?: boolean | ServiceCountOutputTypeCountPatientsArgs;
    utilisateurs?: boolean | ServiceCountOutputTypeCountUtilisateursArgs;
    evenementsIndesirables?: boolean | ServiceCountOutputTypeCountEvenementsIndesirablesArgs;
};
export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceCountOutputTypeSelect<ExtArgs> | null;
};
export type ServiceCountOutputTypeCountPatientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
};
export type ServiceCountOutputTypeCountUtilisateursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UtilisateurWhereInput;
};
export type ServiceCountOutputTypeCountEvenementsIndesirablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvenementIndesirableWhereInput;
};
export type ServiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organisationId?: boolean;
    nom?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    patients?: boolean | Prisma.Service$patientsArgs<ExtArgs>;
    utilisateurs?: boolean | Prisma.Service$utilisateursArgs<ExtArgs>;
    evenementsIndesirables?: boolean | Prisma.Service$evenementsIndesirablesArgs<ExtArgs>;
    _count?: boolean | Prisma.ServiceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["service"]>;
export type ServiceSelectScalar = {
    id?: boolean;
    organisationId?: boolean;
    nom?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ServiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organisationId" | "nom" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>;
export type ServiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
    patients?: boolean | Prisma.Service$patientsArgs<ExtArgs>;
    utilisateurs?: boolean | Prisma.Service$utilisateursArgs<ExtArgs>;
    evenementsIndesirables?: boolean | Prisma.Service$evenementsIndesirablesArgs<ExtArgs>;
    _count?: boolean | Prisma.ServiceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ServicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Service";
    objects: {
        organisation: Prisma.$OrganisationPayload<ExtArgs>;
        patients: Prisma.$PatientPayload<ExtArgs>[];
        utilisateurs: Prisma.$UtilisateurPayload<ExtArgs>[];
        evenementsIndesirables: Prisma.$EvenementIndesirablePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organisationId: string;
        nom: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["service"]>;
    composites: {};
};
export type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ServicePayload, S>;
export type ServiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServiceCountAggregateInputType | true;
};
export interface ServiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Service'];
        meta: {
            name: 'Service';
        };
    };
    findUnique<T extends ServiceFindUniqueArgs>(args: Prisma.SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ServiceFindFirstArgs>(args?: Prisma.SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ServiceFindManyArgs>(args?: Prisma.SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ServiceCreateArgs>(args: Prisma.SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ServiceCreateManyArgs>(args?: Prisma.SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ServiceDeleteArgs>(args: Prisma.SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ServiceUpdateArgs>(args: Prisma.SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ServiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ServiceUpdateManyArgs>(args: Prisma.SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ServiceUpsertArgs>(args: Prisma.SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ServiceCountArgs>(args?: Prisma.Subset<T, ServiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServiceCountAggregateOutputType> : number>;
    aggregate<T extends ServiceAggregateArgs>(args: Prisma.Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>;
    groupBy<T extends ServiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ServiceGroupByArgs['orderBy'];
    } : {
        orderBy?: ServiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ServiceFieldRefs;
}
export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organisation<T extends Prisma.OrganisationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganisationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    patients<T extends Prisma.Service$patientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Service$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    utilisateurs<T extends Prisma.Service$utilisateursArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Service$utilisateursArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    evenementsIndesirables<T extends Prisma.Service$evenementsIndesirablesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Service$evenementsIndesirablesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvenementIndesirablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ServiceFieldRefs {
    readonly id: Prisma.FieldRef<"Service", 'String'>;
    readonly organisationId: Prisma.FieldRef<"Service", 'String'>;
    readonly nom: Prisma.FieldRef<"Service", 'String'>;
    readonly description: Prisma.FieldRef<"Service", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Service", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Service", 'DateTime'>;
}
export type ServiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where: Prisma.ServiceWhereUniqueInput;
};
export type ServiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where: Prisma.ServiceWhereUniqueInput;
};
export type ServiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServiceCreateInput, Prisma.ServiceUncheckedCreateInput>;
};
export type ServiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ServiceCreateManyInput | Prisma.ServiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ServiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServiceUpdateInput, Prisma.ServiceUncheckedUpdateInput>;
    where: Prisma.ServiceWhereUniqueInput;
};
export type ServiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ServiceUpdateManyMutationInput, Prisma.ServiceUncheckedUpdateManyInput>;
    where?: Prisma.ServiceWhereInput;
    limit?: number;
};
export type ServiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where: Prisma.ServiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceCreateInput, Prisma.ServiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ServiceUpdateInput, Prisma.ServiceUncheckedUpdateInput>;
};
export type ServiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where: Prisma.ServiceWhereUniqueInput;
};
export type ServiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
    limit?: number;
};
export type Service$patientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Service$utilisateursArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Service$evenementsIndesirablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
};
