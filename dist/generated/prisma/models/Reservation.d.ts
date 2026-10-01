import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReservationModel = runtime.Types.Result.DefaultSelection<Prisma.$ReservationPayload>;
export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null;
    _avg: ReservationAvgAggregateOutputType | null;
    _sum: ReservationSumAggregateOutputType | null;
    _min: ReservationMinAggregateOutputType | null;
    _max: ReservationMaxAggregateOutputType | null;
};
export type ReservationAvgAggregateOutputType = {
    tarifApplique: number | null;
};
export type ReservationSumAggregateOutputType = {
    tarifApplique: number | null;
};
export type ReservationMinAggregateOutputType = {
    id: string | null;
    formationId: string | null;
    utilisateurId: string | null;
    organisationId: string | null;
    formule: $Enums.FormuleFormation | null;
    tarifApplique: number | null;
    statut: $Enums.StatutReservation | null;
    kkiapayTransactionId: string | null;
    dateRdv: Date | null;
    presenceConfirmee: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ReservationMaxAggregateOutputType = {
    id: string | null;
    formationId: string | null;
    utilisateurId: string | null;
    organisationId: string | null;
    formule: $Enums.FormuleFormation | null;
    tarifApplique: number | null;
    statut: $Enums.StatutReservation | null;
    kkiapayTransactionId: string | null;
    dateRdv: Date | null;
    presenceConfirmee: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ReservationCountAggregateOutputType = {
    id: number;
    formationId: number;
    utilisateurId: number;
    organisationId: number;
    formule: number;
    tarifApplique: number;
    statut: number;
    kkiapayTransactionId: number;
    dateRdv: number;
    presenceConfirmee: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ReservationAvgAggregateInputType = {
    tarifApplique?: true;
};
export type ReservationSumAggregateInputType = {
    tarifApplique?: true;
};
export type ReservationMinAggregateInputType = {
    id?: true;
    formationId?: true;
    utilisateurId?: true;
    organisationId?: true;
    formule?: true;
    tarifApplique?: true;
    statut?: true;
    kkiapayTransactionId?: true;
    dateRdv?: true;
    presenceConfirmee?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ReservationMaxAggregateInputType = {
    id?: true;
    formationId?: true;
    utilisateurId?: true;
    organisationId?: true;
    formule?: true;
    tarifApplique?: true;
    statut?: true;
    kkiapayTransactionId?: true;
    dateRdv?: true;
    presenceConfirmee?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ReservationCountAggregateInputType = {
    id?: true;
    formationId?: true;
    utilisateurId?: true;
    organisationId?: true;
    formule?: true;
    tarifApplique?: true;
    statut?: true;
    kkiapayTransactionId?: true;
    dateRdv?: true;
    presenceConfirmee?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ReservationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationWhereInput;
    orderBy?: Prisma.ReservationOrderByWithRelationInput | Prisma.ReservationOrderByWithRelationInput[];
    cursor?: Prisma.ReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReservationCountAggregateInputType;
    _avg?: ReservationAvgAggregateInputType;
    _sum?: ReservationSumAggregateInputType;
    _min?: ReservationMinAggregateInputType;
    _max?: ReservationMaxAggregateInputType;
};
export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
    [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReservation[P]> : Prisma.GetScalarType<T[P], AggregateReservation[P]>;
};
export type ReservationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationWhereInput;
    orderBy?: Prisma.ReservationOrderByWithAggregationInput | Prisma.ReservationOrderByWithAggregationInput[];
    by: Prisma.ReservationScalarFieldEnum[] | Prisma.ReservationScalarFieldEnum;
    having?: Prisma.ReservationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReservationCountAggregateInputType | true;
    _avg?: ReservationAvgAggregateInputType;
    _sum?: ReservationSumAggregateInputType;
    _min?: ReservationMinAggregateInputType;
    _max?: ReservationMaxAggregateInputType;
};
export type ReservationGroupByOutputType = {
    id: string;
    formationId: string;
    utilisateurId: string;
    organisationId: string | null;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut: $Enums.StatutReservation;
    kkiapayTransactionId: string | null;
    dateRdv: Date | null;
    presenceConfirmee: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ReservationCountAggregateOutputType | null;
    _avg: ReservationAvgAggregateOutputType | null;
    _sum: ReservationSumAggregateOutputType | null;
    _min: ReservationMinAggregateOutputType | null;
    _max: ReservationMaxAggregateOutputType | null;
};
export type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReservationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReservationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReservationGroupByOutputType[P]>;
}>>;
export type ReservationWhereInput = {
    AND?: Prisma.ReservationWhereInput | Prisma.ReservationWhereInput[];
    OR?: Prisma.ReservationWhereInput[];
    NOT?: Prisma.ReservationWhereInput | Prisma.ReservationWhereInput[];
    id?: Prisma.StringFilter<"Reservation"> | string;
    formationId?: Prisma.StringFilter<"Reservation"> | string;
    utilisateurId?: Prisma.StringFilter<"Reservation"> | string;
    organisationId?: Prisma.StringNullableFilter<"Reservation"> | string | null;
    formule?: Prisma.EnumFormuleFormationFilter<"Reservation"> | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFilter<"Reservation"> | number;
    statut?: Prisma.EnumStatutReservationFilter<"Reservation"> | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.StringNullableFilter<"Reservation"> | string | null;
    dateRdv?: Prisma.DateTimeNullableFilter<"Reservation"> | Date | string | null;
    presenceConfirmee?: Prisma.BoolFilter<"Reservation"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    formation?: Prisma.XOR<Prisma.FormationScalarRelationFilter, Prisma.FormationWhereInput>;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    organisation?: Prisma.XOR<Prisma.OrganisationNullableScalarRelationFilter, Prisma.OrganisationWhereInput> | null;
    facture?: Prisma.XOR<Prisma.FactureNullableScalarRelationFilter, Prisma.FactureWhereInput> | null;
};
export type ReservationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    formationId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    formule?: Prisma.SortOrder;
    tarifApplique?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    kkiapayTransactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateRdv?: Prisma.SortOrderInput | Prisma.SortOrder;
    presenceConfirmee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    formation?: Prisma.FormationOrderByWithRelationInput;
    utilisateur?: Prisma.UtilisateurOrderByWithRelationInput;
    organisation?: Prisma.OrganisationOrderByWithRelationInput;
    facture?: Prisma.FactureOrderByWithRelationInput;
    _relevance?: Prisma.ReservationOrderByRelevanceInput;
};
export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    kkiapayTransactionId?: string;
    AND?: Prisma.ReservationWhereInput | Prisma.ReservationWhereInput[];
    OR?: Prisma.ReservationWhereInput[];
    NOT?: Prisma.ReservationWhereInput | Prisma.ReservationWhereInput[];
    formationId?: Prisma.StringFilter<"Reservation"> | string;
    utilisateurId?: Prisma.StringFilter<"Reservation"> | string;
    organisationId?: Prisma.StringNullableFilter<"Reservation"> | string | null;
    formule?: Prisma.EnumFormuleFormationFilter<"Reservation"> | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFilter<"Reservation"> | number;
    statut?: Prisma.EnumStatutReservationFilter<"Reservation"> | $Enums.StatutReservation;
    dateRdv?: Prisma.DateTimeNullableFilter<"Reservation"> | Date | string | null;
    presenceConfirmee?: Prisma.BoolFilter<"Reservation"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    formation?: Prisma.XOR<Prisma.FormationScalarRelationFilter, Prisma.FormationWhereInput>;
    utilisateur?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    organisation?: Prisma.XOR<Prisma.OrganisationNullableScalarRelationFilter, Prisma.OrganisationWhereInput> | null;
    facture?: Prisma.XOR<Prisma.FactureNullableScalarRelationFilter, Prisma.FactureWhereInput> | null;
}, "id" | "kkiapayTransactionId">;
export type ReservationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    formationId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    formule?: Prisma.SortOrder;
    tarifApplique?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    kkiapayTransactionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateRdv?: Prisma.SortOrderInput | Prisma.SortOrder;
    presenceConfirmee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ReservationCountOrderByAggregateInput;
    _avg?: Prisma.ReservationAvgOrderByAggregateInput;
    _max?: Prisma.ReservationMaxOrderByAggregateInput;
    _min?: Prisma.ReservationMinOrderByAggregateInput;
    _sum?: Prisma.ReservationSumOrderByAggregateInput;
};
export type ReservationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReservationScalarWhereWithAggregatesInput | Prisma.ReservationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReservationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReservationScalarWhereWithAggregatesInput | Prisma.ReservationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Reservation"> | string;
    formationId?: Prisma.StringWithAggregatesFilter<"Reservation"> | string;
    utilisateurId?: Prisma.StringWithAggregatesFilter<"Reservation"> | string;
    organisationId?: Prisma.StringNullableWithAggregatesFilter<"Reservation"> | string | null;
    formule?: Prisma.EnumFormuleFormationWithAggregatesFilter<"Reservation"> | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntWithAggregatesFilter<"Reservation"> | number;
    statut?: Prisma.EnumStatutReservationWithAggregatesFilter<"Reservation"> | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.StringNullableWithAggregatesFilter<"Reservation"> | string | null;
    dateRdv?: Prisma.DateTimeNullableWithAggregatesFilter<"Reservation"> | Date | string | null;
    presenceConfirmee?: Prisma.BoolWithAggregatesFilter<"Reservation"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Reservation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Reservation"> | Date | string;
};
export type ReservationCreateInput = {
    id?: string;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    formation: Prisma.FormationCreateNestedOneWithoutReservationsInput;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutReservationsInput;
    organisation?: Prisma.OrganisationCreateNestedOneWithoutReservationsInput;
    facture?: Prisma.FactureCreateNestedOneWithoutReservationInput;
};
export type ReservationUncheckedCreateInput = {
    id?: string;
    formationId: string;
    utilisateurId: string;
    organisationId?: string | null;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    facture?: Prisma.FactureUncheckedCreateNestedOneWithoutReservationInput;
};
export type ReservationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    formation?: Prisma.FormationUpdateOneRequiredWithoutReservationsNestedInput;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutReservationsNestedInput;
    organisation?: Prisma.OrganisationUpdateOneWithoutReservationsNestedInput;
    facture?: Prisma.FactureUpdateOneWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formationId?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facture?: Prisma.FactureUncheckedUpdateOneWithoutReservationNestedInput;
};
export type ReservationCreateManyInput = {
    id?: string;
    formationId: string;
    utilisateurId: string;
    organisationId?: string | null;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReservationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formationId?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationListRelationFilter = {
    every?: Prisma.ReservationWhereInput;
    some?: Prisma.ReservationWhereInput;
    none?: Prisma.ReservationWhereInput;
};
export type ReservationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReservationOrderByRelevanceInput = {
    fields: Prisma.ReservationOrderByRelevanceFieldEnum | Prisma.ReservationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ReservationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formationId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    formule?: Prisma.SortOrder;
    tarifApplique?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    kkiapayTransactionId?: Prisma.SortOrder;
    dateRdv?: Prisma.SortOrder;
    presenceConfirmee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ReservationAvgOrderByAggregateInput = {
    tarifApplique?: Prisma.SortOrder;
};
export type ReservationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formationId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    formule?: Prisma.SortOrder;
    tarifApplique?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    kkiapayTransactionId?: Prisma.SortOrder;
    dateRdv?: Prisma.SortOrder;
    presenceConfirmee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ReservationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formationId?: Prisma.SortOrder;
    utilisateurId?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    formule?: Prisma.SortOrder;
    tarifApplique?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    kkiapayTransactionId?: Prisma.SortOrder;
    dateRdv?: Prisma.SortOrder;
    presenceConfirmee?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ReservationSumOrderByAggregateInput = {
    tarifApplique?: Prisma.SortOrder;
};
export type ReservationScalarRelationFilter = {
    is?: Prisma.ReservationWhereInput;
    isNot?: Prisma.ReservationWhereInput;
};
export type ReservationCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutOrganisationInput, Prisma.ReservationUncheckedCreateWithoutOrganisationInput> | Prisma.ReservationCreateWithoutOrganisationInput[] | Prisma.ReservationUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutOrganisationInput | Prisma.ReservationCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.ReservationCreateManyOrganisationInputEnvelope;
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
};
export type ReservationUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutOrganisationInput, Prisma.ReservationUncheckedCreateWithoutOrganisationInput> | Prisma.ReservationCreateWithoutOrganisationInput[] | Prisma.ReservationUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutOrganisationInput | Prisma.ReservationCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.ReservationCreateManyOrganisationInputEnvelope;
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
};
export type ReservationUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutOrganisationInput, Prisma.ReservationUncheckedCreateWithoutOrganisationInput> | Prisma.ReservationCreateWithoutOrganisationInput[] | Prisma.ReservationUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutOrganisationInput | Prisma.ReservationCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.ReservationUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.ReservationUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.ReservationCreateManyOrganisationInputEnvelope;
    set?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    disconnect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    delete?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    update?: Prisma.ReservationUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.ReservationUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.ReservationUpdateManyWithWhereWithoutOrganisationInput | Prisma.ReservationUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
};
export type ReservationUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutOrganisationInput, Prisma.ReservationUncheckedCreateWithoutOrganisationInput> | Prisma.ReservationCreateWithoutOrganisationInput[] | Prisma.ReservationUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutOrganisationInput | Prisma.ReservationCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.ReservationUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.ReservationUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.ReservationCreateManyOrganisationInputEnvelope;
    set?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    disconnect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    delete?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    update?: Prisma.ReservationUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.ReservationUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.ReservationUpdateManyWithWhereWithoutOrganisationInput | Prisma.ReservationUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
};
export type ReservationCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutUtilisateurInput, Prisma.ReservationUncheckedCreateWithoutUtilisateurInput> | Prisma.ReservationCreateWithoutUtilisateurInput[] | Prisma.ReservationUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutUtilisateurInput | Prisma.ReservationCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.ReservationCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
};
export type ReservationUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutUtilisateurInput, Prisma.ReservationUncheckedCreateWithoutUtilisateurInput> | Prisma.ReservationCreateWithoutUtilisateurInput[] | Prisma.ReservationUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutUtilisateurInput | Prisma.ReservationCreateOrConnectWithoutUtilisateurInput[];
    createMany?: Prisma.ReservationCreateManyUtilisateurInputEnvelope;
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
};
export type ReservationUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutUtilisateurInput, Prisma.ReservationUncheckedCreateWithoutUtilisateurInput> | Prisma.ReservationCreateWithoutUtilisateurInput[] | Prisma.ReservationUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutUtilisateurInput | Prisma.ReservationCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.ReservationUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.ReservationUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.ReservationCreateManyUtilisateurInputEnvelope;
    set?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    disconnect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    delete?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    update?: Prisma.ReservationUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.ReservationUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.ReservationUpdateManyWithWhereWithoutUtilisateurInput | Prisma.ReservationUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
};
export type ReservationUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutUtilisateurInput, Prisma.ReservationUncheckedCreateWithoutUtilisateurInput> | Prisma.ReservationCreateWithoutUtilisateurInput[] | Prisma.ReservationUncheckedCreateWithoutUtilisateurInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutUtilisateurInput | Prisma.ReservationCreateOrConnectWithoutUtilisateurInput[];
    upsert?: Prisma.ReservationUpsertWithWhereUniqueWithoutUtilisateurInput | Prisma.ReservationUpsertWithWhereUniqueWithoutUtilisateurInput[];
    createMany?: Prisma.ReservationCreateManyUtilisateurInputEnvelope;
    set?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    disconnect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    delete?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    update?: Prisma.ReservationUpdateWithWhereUniqueWithoutUtilisateurInput | Prisma.ReservationUpdateWithWhereUniqueWithoutUtilisateurInput[];
    updateMany?: Prisma.ReservationUpdateManyWithWhereWithoutUtilisateurInput | Prisma.ReservationUpdateManyWithWhereWithoutUtilisateurInput[];
    deleteMany?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
};
export type ReservationCreateNestedManyWithoutFormationInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutFormationInput, Prisma.ReservationUncheckedCreateWithoutFormationInput> | Prisma.ReservationCreateWithoutFormationInput[] | Prisma.ReservationUncheckedCreateWithoutFormationInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutFormationInput | Prisma.ReservationCreateOrConnectWithoutFormationInput[];
    createMany?: Prisma.ReservationCreateManyFormationInputEnvelope;
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
};
export type ReservationUncheckedCreateNestedManyWithoutFormationInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutFormationInput, Prisma.ReservationUncheckedCreateWithoutFormationInput> | Prisma.ReservationCreateWithoutFormationInput[] | Prisma.ReservationUncheckedCreateWithoutFormationInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutFormationInput | Prisma.ReservationCreateOrConnectWithoutFormationInput[];
    createMany?: Prisma.ReservationCreateManyFormationInputEnvelope;
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
};
export type ReservationUpdateManyWithoutFormationNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutFormationInput, Prisma.ReservationUncheckedCreateWithoutFormationInput> | Prisma.ReservationCreateWithoutFormationInput[] | Prisma.ReservationUncheckedCreateWithoutFormationInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutFormationInput | Prisma.ReservationCreateOrConnectWithoutFormationInput[];
    upsert?: Prisma.ReservationUpsertWithWhereUniqueWithoutFormationInput | Prisma.ReservationUpsertWithWhereUniqueWithoutFormationInput[];
    createMany?: Prisma.ReservationCreateManyFormationInputEnvelope;
    set?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    disconnect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    delete?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    update?: Prisma.ReservationUpdateWithWhereUniqueWithoutFormationInput | Prisma.ReservationUpdateWithWhereUniqueWithoutFormationInput[];
    updateMany?: Prisma.ReservationUpdateManyWithWhereWithoutFormationInput | Prisma.ReservationUpdateManyWithWhereWithoutFormationInput[];
    deleteMany?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
};
export type ReservationUncheckedUpdateManyWithoutFormationNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutFormationInput, Prisma.ReservationUncheckedCreateWithoutFormationInput> | Prisma.ReservationCreateWithoutFormationInput[] | Prisma.ReservationUncheckedCreateWithoutFormationInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutFormationInput | Prisma.ReservationCreateOrConnectWithoutFormationInput[];
    upsert?: Prisma.ReservationUpsertWithWhereUniqueWithoutFormationInput | Prisma.ReservationUpsertWithWhereUniqueWithoutFormationInput[];
    createMany?: Prisma.ReservationCreateManyFormationInputEnvelope;
    set?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    disconnect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    delete?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    update?: Prisma.ReservationUpdateWithWhereUniqueWithoutFormationInput | Prisma.ReservationUpdateWithWhereUniqueWithoutFormationInput[];
    updateMany?: Prisma.ReservationUpdateManyWithWhereWithoutFormationInput | Prisma.ReservationUpdateManyWithWhereWithoutFormationInput[];
    deleteMany?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
};
export type EnumFormuleFormationFieldUpdateOperationsInput = {
    set?: $Enums.FormuleFormation;
};
export type EnumStatutReservationFieldUpdateOperationsInput = {
    set?: $Enums.StatutReservation;
};
export type ReservationCreateNestedOneWithoutFactureInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutFactureInput, Prisma.ReservationUncheckedCreateWithoutFactureInput>;
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutFactureInput;
    connect?: Prisma.ReservationWhereUniqueInput;
};
export type ReservationUpdateOneRequiredWithoutFactureNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutFactureInput, Prisma.ReservationUncheckedCreateWithoutFactureInput>;
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutFactureInput;
    upsert?: Prisma.ReservationUpsertWithoutFactureInput;
    connect?: Prisma.ReservationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReservationUpdateToOneWithWhereWithoutFactureInput, Prisma.ReservationUpdateWithoutFactureInput>, Prisma.ReservationUncheckedUpdateWithoutFactureInput>;
};
export type ReservationCreateWithoutOrganisationInput = {
    id?: string;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    formation: Prisma.FormationCreateNestedOneWithoutReservationsInput;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutReservationsInput;
    facture?: Prisma.FactureCreateNestedOneWithoutReservationInput;
};
export type ReservationUncheckedCreateWithoutOrganisationInput = {
    id?: string;
    formationId: string;
    utilisateurId: string;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    facture?: Prisma.FactureUncheckedCreateNestedOneWithoutReservationInput;
};
export type ReservationCreateOrConnectWithoutOrganisationInput = {
    where: Prisma.ReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutOrganisationInput, Prisma.ReservationUncheckedCreateWithoutOrganisationInput>;
};
export type ReservationCreateManyOrganisationInputEnvelope = {
    data: Prisma.ReservationCreateManyOrganisationInput | Prisma.ReservationCreateManyOrganisationInput[];
    skipDuplicates?: boolean;
};
export type ReservationUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.ReservationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReservationUpdateWithoutOrganisationInput, Prisma.ReservationUncheckedUpdateWithoutOrganisationInput>;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutOrganisationInput, Prisma.ReservationUncheckedCreateWithoutOrganisationInput>;
};
export type ReservationUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.ReservationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReservationUpdateWithoutOrganisationInput, Prisma.ReservationUncheckedUpdateWithoutOrganisationInput>;
};
export type ReservationUpdateManyWithWhereWithoutOrganisationInput = {
    where: Prisma.ReservationScalarWhereInput;
    data: Prisma.XOR<Prisma.ReservationUpdateManyMutationInput, Prisma.ReservationUncheckedUpdateManyWithoutOrganisationInput>;
};
export type ReservationScalarWhereInput = {
    AND?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
    OR?: Prisma.ReservationScalarWhereInput[];
    NOT?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
    id?: Prisma.StringFilter<"Reservation"> | string;
    formationId?: Prisma.StringFilter<"Reservation"> | string;
    utilisateurId?: Prisma.StringFilter<"Reservation"> | string;
    organisationId?: Prisma.StringNullableFilter<"Reservation"> | string | null;
    formule?: Prisma.EnumFormuleFormationFilter<"Reservation"> | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFilter<"Reservation"> | number;
    statut?: Prisma.EnumStatutReservationFilter<"Reservation"> | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.StringNullableFilter<"Reservation"> | string | null;
    dateRdv?: Prisma.DateTimeNullableFilter<"Reservation"> | Date | string | null;
    presenceConfirmee?: Prisma.BoolFilter<"Reservation"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
};
export type ReservationCreateWithoutUtilisateurInput = {
    id?: string;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    formation: Prisma.FormationCreateNestedOneWithoutReservationsInput;
    organisation?: Prisma.OrganisationCreateNestedOneWithoutReservationsInput;
    facture?: Prisma.FactureCreateNestedOneWithoutReservationInput;
};
export type ReservationUncheckedCreateWithoutUtilisateurInput = {
    id?: string;
    formationId: string;
    organisationId?: string | null;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    facture?: Prisma.FactureUncheckedCreateNestedOneWithoutReservationInput;
};
export type ReservationCreateOrConnectWithoutUtilisateurInput = {
    where: Prisma.ReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutUtilisateurInput, Prisma.ReservationUncheckedCreateWithoutUtilisateurInput>;
};
export type ReservationCreateManyUtilisateurInputEnvelope = {
    data: Prisma.ReservationCreateManyUtilisateurInput | Prisma.ReservationCreateManyUtilisateurInput[];
    skipDuplicates?: boolean;
};
export type ReservationUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.ReservationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReservationUpdateWithoutUtilisateurInput, Prisma.ReservationUncheckedUpdateWithoutUtilisateurInput>;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutUtilisateurInput, Prisma.ReservationUncheckedCreateWithoutUtilisateurInput>;
};
export type ReservationUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: Prisma.ReservationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReservationUpdateWithoutUtilisateurInput, Prisma.ReservationUncheckedUpdateWithoutUtilisateurInput>;
};
export type ReservationUpdateManyWithWhereWithoutUtilisateurInput = {
    where: Prisma.ReservationScalarWhereInput;
    data: Prisma.XOR<Prisma.ReservationUpdateManyMutationInput, Prisma.ReservationUncheckedUpdateManyWithoutUtilisateurInput>;
};
export type ReservationCreateWithoutFormationInput = {
    id?: string;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutReservationsInput;
    organisation?: Prisma.OrganisationCreateNestedOneWithoutReservationsInput;
    facture?: Prisma.FactureCreateNestedOneWithoutReservationInput;
};
export type ReservationUncheckedCreateWithoutFormationInput = {
    id?: string;
    utilisateurId: string;
    organisationId?: string | null;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    facture?: Prisma.FactureUncheckedCreateNestedOneWithoutReservationInput;
};
export type ReservationCreateOrConnectWithoutFormationInput = {
    where: Prisma.ReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutFormationInput, Prisma.ReservationUncheckedCreateWithoutFormationInput>;
};
export type ReservationCreateManyFormationInputEnvelope = {
    data: Prisma.ReservationCreateManyFormationInput | Prisma.ReservationCreateManyFormationInput[];
    skipDuplicates?: boolean;
};
export type ReservationUpsertWithWhereUniqueWithoutFormationInput = {
    where: Prisma.ReservationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReservationUpdateWithoutFormationInput, Prisma.ReservationUncheckedUpdateWithoutFormationInput>;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutFormationInput, Prisma.ReservationUncheckedCreateWithoutFormationInput>;
};
export type ReservationUpdateWithWhereUniqueWithoutFormationInput = {
    where: Prisma.ReservationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReservationUpdateWithoutFormationInput, Prisma.ReservationUncheckedUpdateWithoutFormationInput>;
};
export type ReservationUpdateManyWithWhereWithoutFormationInput = {
    where: Prisma.ReservationScalarWhereInput;
    data: Prisma.XOR<Prisma.ReservationUpdateManyMutationInput, Prisma.ReservationUncheckedUpdateManyWithoutFormationInput>;
};
export type ReservationCreateWithoutFactureInput = {
    id?: string;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    formation: Prisma.FormationCreateNestedOneWithoutReservationsInput;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutReservationsInput;
    organisation?: Prisma.OrganisationCreateNestedOneWithoutReservationsInput;
};
export type ReservationUncheckedCreateWithoutFactureInput = {
    id?: string;
    formationId: string;
    utilisateurId: string;
    organisationId?: string | null;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReservationCreateOrConnectWithoutFactureInput = {
    where: Prisma.ReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutFactureInput, Prisma.ReservationUncheckedCreateWithoutFactureInput>;
};
export type ReservationUpsertWithoutFactureInput = {
    update: Prisma.XOR<Prisma.ReservationUpdateWithoutFactureInput, Prisma.ReservationUncheckedUpdateWithoutFactureInput>;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutFactureInput, Prisma.ReservationUncheckedCreateWithoutFactureInput>;
    where?: Prisma.ReservationWhereInput;
};
export type ReservationUpdateToOneWithWhereWithoutFactureInput = {
    where?: Prisma.ReservationWhereInput;
    data: Prisma.XOR<Prisma.ReservationUpdateWithoutFactureInput, Prisma.ReservationUncheckedUpdateWithoutFactureInput>;
};
export type ReservationUpdateWithoutFactureInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    formation?: Prisma.FormationUpdateOneRequiredWithoutReservationsNestedInput;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutReservationsNestedInput;
    organisation?: Prisma.OrganisationUpdateOneWithoutReservationsNestedInput;
};
export type ReservationUncheckedUpdateWithoutFactureInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formationId?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationCreateManyOrganisationInput = {
    id?: string;
    formationId: string;
    utilisateurId: string;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReservationUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    formation?: Prisma.FormationUpdateOneRequiredWithoutReservationsNestedInput;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutReservationsNestedInput;
    facture?: Prisma.FactureUpdateOneWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formationId?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facture?: Prisma.FactureUncheckedUpdateOneWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateManyWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formationId?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationCreateManyUtilisateurInput = {
    id?: string;
    formationId: string;
    organisationId?: string | null;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReservationUpdateWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    formation?: Prisma.FormationUpdateOneRequiredWithoutReservationsNestedInput;
    organisation?: Prisma.OrganisationUpdateOneWithoutReservationsNestedInput;
    facture?: Prisma.FactureUpdateOneWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formationId?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facture?: Prisma.FactureUncheckedUpdateOneWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formationId?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationCreateManyFormationInput = {
    id?: string;
    utilisateurId: string;
    organisationId?: string | null;
    formule: $Enums.FormuleFormation;
    tarifApplique: number;
    statut?: $Enums.StatutReservation;
    kkiapayTransactionId?: string | null;
    dateRdv?: Date | string | null;
    presenceConfirmee?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReservationUpdateWithoutFormationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    utilisateur?: Prisma.UtilisateurUpdateOneRequiredWithoutReservationsNestedInput;
    organisation?: Prisma.OrganisationUpdateOneWithoutReservationsNestedInput;
    facture?: Prisma.FactureUpdateOneWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateWithoutFormationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facture?: Prisma.FactureUncheckedUpdateOneWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateManyWithoutFormationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    utilisateurId?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formule?: Prisma.EnumFormuleFormationFieldUpdateOperationsInput | $Enums.FormuleFormation;
    tarifApplique?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutReservationFieldUpdateOperationsInput | $Enums.StatutReservation;
    kkiapayTransactionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateRdv?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    presenceConfirmee?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    formationId?: boolean;
    utilisateurId?: boolean;
    organisationId?: boolean;
    formule?: boolean;
    tarifApplique?: boolean;
    statut?: boolean;
    kkiapayTransactionId?: boolean;
    dateRdv?: boolean;
    presenceConfirmee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    formation?: boolean | Prisma.FormationDefaultArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    organisation?: boolean | Prisma.Reservation$organisationArgs<ExtArgs>;
    facture?: boolean | Prisma.Reservation$factureArgs<ExtArgs>;
}, ExtArgs["result"]["reservation"]>;
export type ReservationSelectScalar = {
    id?: boolean;
    formationId?: boolean;
    utilisateurId?: boolean;
    organisationId?: boolean;
    formule?: boolean;
    tarifApplique?: boolean;
    statut?: boolean;
    kkiapayTransactionId?: boolean;
    dateRdv?: boolean;
    presenceConfirmee?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ReservationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "formationId" | "utilisateurId" | "organisationId" | "formule" | "tarifApplique" | "statut" | "kkiapayTransactionId" | "dateRdv" | "presenceConfirmee" | "createdAt" | "updatedAt", ExtArgs["result"]["reservation"]>;
export type ReservationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    formation?: boolean | Prisma.FormationDefaultArgs<ExtArgs>;
    utilisateur?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    organisation?: boolean | Prisma.Reservation$organisationArgs<ExtArgs>;
    facture?: boolean | Prisma.Reservation$factureArgs<ExtArgs>;
};
export type $ReservationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Reservation";
    objects: {
        formation: Prisma.$FormationPayload<ExtArgs>;
        utilisateur: Prisma.$UtilisateurPayload<ExtArgs>;
        organisation: Prisma.$OrganisationPayload<ExtArgs> | null;
        facture: Prisma.$FacturePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        formationId: string;
        utilisateurId: string;
        organisationId: string | null;
        formule: $Enums.FormuleFormation;
        tarifApplique: number;
        statut: $Enums.StatutReservation;
        kkiapayTransactionId: string | null;
        dateRdv: Date | null;
        presenceConfirmee: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["reservation"]>;
    composites: {};
};
export type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReservationPayload, S>;
export type ReservationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReservationCountAggregateInputType | true;
};
export interface ReservationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Reservation'];
        meta: {
            name: 'Reservation';
        };
    };
    findUnique<T extends ReservationFindUniqueArgs>(args: Prisma.SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReservationFindFirstArgs>(args?: Prisma.SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReservationFindManyArgs>(args?: Prisma.SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReservationCreateArgs>(args: Prisma.SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReservationCreateManyArgs>(args?: Prisma.SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ReservationDeleteArgs>(args: Prisma.SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReservationUpdateArgs>(args: Prisma.SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReservationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReservationUpdateManyArgs>(args: Prisma.SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ReservationUpsertArgs>(args: Prisma.SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReservationCountArgs>(args?: Prisma.Subset<T, ReservationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReservationCountAggregateOutputType> : number>;
    aggregate<T extends ReservationAggregateArgs>(args: Prisma.Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>;
    groupBy<T extends ReservationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReservationGroupByArgs['orderBy'];
    } : {
        orderBy?: ReservationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReservationFieldRefs;
}
export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    formation<T extends Prisma.FormationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FormationDefaultArgs<ExtArgs>>): Prisma.Prisma__FormationClient<runtime.Types.Result.GetResult<Prisma.$FormationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    utilisateur<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    organisation<T extends Prisma.Reservation$organisationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Reservation$organisationArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    facture<T extends Prisma.Reservation$factureArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Reservation$factureArgs<ExtArgs>>): Prisma.Prisma__FactureClient<runtime.Types.Result.GetResult<Prisma.$FacturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReservationFieldRefs {
    readonly id: Prisma.FieldRef<"Reservation", 'String'>;
    readonly formationId: Prisma.FieldRef<"Reservation", 'String'>;
    readonly utilisateurId: Prisma.FieldRef<"Reservation", 'String'>;
    readonly organisationId: Prisma.FieldRef<"Reservation", 'String'>;
    readonly formule: Prisma.FieldRef<"Reservation", 'FormuleFormation'>;
    readonly tarifApplique: Prisma.FieldRef<"Reservation", 'Int'>;
    readonly statut: Prisma.FieldRef<"Reservation", 'StatutReservation'>;
    readonly kkiapayTransactionId: Prisma.FieldRef<"Reservation", 'String'>;
    readonly dateRdv: Prisma.FieldRef<"Reservation", 'DateTime'>;
    readonly presenceConfirmee: Prisma.FieldRef<"Reservation", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Reservation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Reservation", 'DateTime'>;
}
export type ReservationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where: Prisma.ReservationWhereUniqueInput;
};
export type ReservationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where: Prisma.ReservationWhereUniqueInput;
};
export type ReservationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReservationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReservationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReservationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReservationCreateInput, Prisma.ReservationUncheckedCreateInput>;
};
export type ReservationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReservationCreateManyInput | Prisma.ReservationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReservationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReservationUpdateInput, Prisma.ReservationUncheckedUpdateInput>;
    where: Prisma.ReservationWhereUniqueInput;
};
export type ReservationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReservationUpdateManyMutationInput, Prisma.ReservationUncheckedUpdateManyInput>;
    where?: Prisma.ReservationWhereInput;
    limit?: number;
};
export type ReservationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where: Prisma.ReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationCreateInput, Prisma.ReservationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReservationUpdateInput, Prisma.ReservationUncheckedUpdateInput>;
};
export type ReservationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where: Prisma.ReservationWhereUniqueInput;
};
export type ReservationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationWhereInput;
    limit?: number;
};
export type Reservation$organisationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganisationSelect<ExtArgs> | null;
    omit?: Prisma.OrganisationOmit<ExtArgs> | null;
    include?: Prisma.OrganisationInclude<ExtArgs> | null;
    where?: Prisma.OrganisationWhereInput;
};
export type Reservation$factureArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FactureSelect<ExtArgs> | null;
    omit?: Prisma.FactureOmit<ExtArgs> | null;
    include?: Prisma.FactureInclude<ExtArgs> | null;
    where?: Prisma.FactureWhereInput;
};
export type ReservationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
};
