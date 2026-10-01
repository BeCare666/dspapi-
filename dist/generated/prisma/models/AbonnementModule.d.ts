import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AbonnementModuleModel = runtime.Types.Result.DefaultSelection<Prisma.$AbonnementModulePayload>;
export type AggregateAbonnementModule = {
    _count: AbonnementModuleCountAggregateOutputType | null;
    _min: AbonnementModuleMinAggregateOutputType | null;
    _max: AbonnementModuleMaxAggregateOutputType | null;
};
export type AbonnementModuleMinAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    module: $Enums.ModuleMetier | null;
    statut: $Enums.StatutAbonnement | null;
    essaiDebut: Date | null;
    essaiFin: Date | null;
    activeLe: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AbonnementModuleMaxAggregateOutputType = {
    id: string | null;
    organisationId: string | null;
    module: $Enums.ModuleMetier | null;
    statut: $Enums.StatutAbonnement | null;
    essaiDebut: Date | null;
    essaiFin: Date | null;
    activeLe: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AbonnementModuleCountAggregateOutputType = {
    id: number;
    organisationId: number;
    module: number;
    statut: number;
    essaiDebut: number;
    essaiFin: number;
    activeLe: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AbonnementModuleMinAggregateInputType = {
    id?: true;
    organisationId?: true;
    module?: true;
    statut?: true;
    essaiDebut?: true;
    essaiFin?: true;
    activeLe?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AbonnementModuleMaxAggregateInputType = {
    id?: true;
    organisationId?: true;
    module?: true;
    statut?: true;
    essaiDebut?: true;
    essaiFin?: true;
    activeLe?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AbonnementModuleCountAggregateInputType = {
    id?: true;
    organisationId?: true;
    module?: true;
    statut?: true;
    essaiDebut?: true;
    essaiFin?: true;
    activeLe?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AbonnementModuleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AbonnementModuleWhereInput;
    orderBy?: Prisma.AbonnementModuleOrderByWithRelationInput | Prisma.AbonnementModuleOrderByWithRelationInput[];
    cursor?: Prisma.AbonnementModuleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AbonnementModuleCountAggregateInputType;
    _min?: AbonnementModuleMinAggregateInputType;
    _max?: AbonnementModuleMaxAggregateInputType;
};
export type GetAbonnementModuleAggregateType<T extends AbonnementModuleAggregateArgs> = {
    [P in keyof T & keyof AggregateAbonnementModule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAbonnementModule[P]> : Prisma.GetScalarType<T[P], AggregateAbonnementModule[P]>;
};
export type AbonnementModuleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AbonnementModuleWhereInput;
    orderBy?: Prisma.AbonnementModuleOrderByWithAggregationInput | Prisma.AbonnementModuleOrderByWithAggregationInput[];
    by: Prisma.AbonnementModuleScalarFieldEnum[] | Prisma.AbonnementModuleScalarFieldEnum;
    having?: Prisma.AbonnementModuleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AbonnementModuleCountAggregateInputType | true;
    _min?: AbonnementModuleMinAggregateInputType;
    _max?: AbonnementModuleMaxAggregateInputType;
};
export type AbonnementModuleGroupByOutputType = {
    id: string;
    organisationId: string;
    module: $Enums.ModuleMetier;
    statut: $Enums.StatutAbonnement;
    essaiDebut: Date;
    essaiFin: Date;
    activeLe: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AbonnementModuleCountAggregateOutputType | null;
    _min: AbonnementModuleMinAggregateOutputType | null;
    _max: AbonnementModuleMaxAggregateOutputType | null;
};
export type GetAbonnementModuleGroupByPayload<T extends AbonnementModuleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AbonnementModuleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AbonnementModuleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AbonnementModuleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AbonnementModuleGroupByOutputType[P]>;
}>>;
export type AbonnementModuleWhereInput = {
    AND?: Prisma.AbonnementModuleWhereInput | Prisma.AbonnementModuleWhereInput[];
    OR?: Prisma.AbonnementModuleWhereInput[];
    NOT?: Prisma.AbonnementModuleWhereInput | Prisma.AbonnementModuleWhereInput[];
    id?: Prisma.StringFilter<"AbonnementModule"> | string;
    organisationId?: Prisma.StringFilter<"AbonnementModule"> | string;
    module?: Prisma.EnumModuleMetierFilter<"AbonnementModule"> | $Enums.ModuleMetier;
    statut?: Prisma.EnumStatutAbonnementFilter<"AbonnementModule"> | $Enums.StatutAbonnement;
    essaiDebut?: Prisma.DateTimeFilter<"AbonnementModule"> | Date | string;
    essaiFin?: Prisma.DateTimeFilter<"AbonnementModule"> | Date | string;
    activeLe?: Prisma.DateTimeNullableFilter<"AbonnementModule"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AbonnementModule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AbonnementModule"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
};
export type AbonnementModuleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    essaiDebut?: Prisma.SortOrder;
    essaiFin?: Prisma.SortOrder;
    activeLe?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organisation?: Prisma.OrganisationOrderByWithRelationInput;
    _relevance?: Prisma.AbonnementModuleOrderByRelevanceInput;
};
export type AbonnementModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    organisationId_module?: Prisma.AbonnementModuleOrganisationIdModuleCompoundUniqueInput;
    AND?: Prisma.AbonnementModuleWhereInput | Prisma.AbonnementModuleWhereInput[];
    OR?: Prisma.AbonnementModuleWhereInput[];
    NOT?: Prisma.AbonnementModuleWhereInput | Prisma.AbonnementModuleWhereInput[];
    organisationId?: Prisma.StringFilter<"AbonnementModule"> | string;
    module?: Prisma.EnumModuleMetierFilter<"AbonnementModule"> | $Enums.ModuleMetier;
    statut?: Prisma.EnumStatutAbonnementFilter<"AbonnementModule"> | $Enums.StatutAbonnement;
    essaiDebut?: Prisma.DateTimeFilter<"AbonnementModule"> | Date | string;
    essaiFin?: Prisma.DateTimeFilter<"AbonnementModule"> | Date | string;
    activeLe?: Prisma.DateTimeNullableFilter<"AbonnementModule"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AbonnementModule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AbonnementModule"> | Date | string;
    organisation?: Prisma.XOR<Prisma.OrganisationScalarRelationFilter, Prisma.OrganisationWhereInput>;
}, "id" | "organisationId_module">;
export type AbonnementModuleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    essaiDebut?: Prisma.SortOrder;
    essaiFin?: Prisma.SortOrder;
    activeLe?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AbonnementModuleCountOrderByAggregateInput;
    _max?: Prisma.AbonnementModuleMaxOrderByAggregateInput;
    _min?: Prisma.AbonnementModuleMinOrderByAggregateInput;
};
export type AbonnementModuleScalarWhereWithAggregatesInput = {
    AND?: Prisma.AbonnementModuleScalarWhereWithAggregatesInput | Prisma.AbonnementModuleScalarWhereWithAggregatesInput[];
    OR?: Prisma.AbonnementModuleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AbonnementModuleScalarWhereWithAggregatesInput | Prisma.AbonnementModuleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AbonnementModule"> | string;
    organisationId?: Prisma.StringWithAggregatesFilter<"AbonnementModule"> | string;
    module?: Prisma.EnumModuleMetierWithAggregatesFilter<"AbonnementModule"> | $Enums.ModuleMetier;
    statut?: Prisma.EnumStatutAbonnementWithAggregatesFilter<"AbonnementModule"> | $Enums.StatutAbonnement;
    essaiDebut?: Prisma.DateTimeWithAggregatesFilter<"AbonnementModule"> | Date | string;
    essaiFin?: Prisma.DateTimeWithAggregatesFilter<"AbonnementModule"> | Date | string;
    activeLe?: Prisma.DateTimeNullableWithAggregatesFilter<"AbonnementModule"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AbonnementModule"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AbonnementModule"> | Date | string;
};
export type AbonnementModuleCreateInput = {
    id?: string;
    module: $Enums.ModuleMetier;
    statut?: $Enums.StatutAbonnement;
    essaiDebut: Date | string;
    essaiFin: Date | string;
    activeLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organisation: Prisma.OrganisationCreateNestedOneWithoutAbonnementsModuleInput;
};
export type AbonnementModuleUncheckedCreateInput = {
    id?: string;
    organisationId: string;
    module: $Enums.ModuleMetier;
    statut?: $Enums.StatutAbonnement;
    essaiDebut: Date | string;
    essaiFin: Date | string;
    activeLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AbonnementModuleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.EnumModuleMetierFieldUpdateOperationsInput | $Enums.ModuleMetier;
    statut?: Prisma.EnumStatutAbonnementFieldUpdateOperationsInput | $Enums.StatutAbonnement;
    essaiDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    essaiFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisation?: Prisma.OrganisationUpdateOneRequiredWithoutAbonnementsModuleNestedInput;
};
export type AbonnementModuleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.EnumModuleMetierFieldUpdateOperationsInput | $Enums.ModuleMetier;
    statut?: Prisma.EnumStatutAbonnementFieldUpdateOperationsInput | $Enums.StatutAbonnement;
    essaiDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    essaiFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AbonnementModuleCreateManyInput = {
    id?: string;
    organisationId: string;
    module: $Enums.ModuleMetier;
    statut?: $Enums.StatutAbonnement;
    essaiDebut: Date | string;
    essaiFin: Date | string;
    activeLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AbonnementModuleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.EnumModuleMetierFieldUpdateOperationsInput | $Enums.ModuleMetier;
    statut?: Prisma.EnumStatutAbonnementFieldUpdateOperationsInput | $Enums.StatutAbonnement;
    essaiDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    essaiFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AbonnementModuleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organisationId?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.EnumModuleMetierFieldUpdateOperationsInput | $Enums.ModuleMetier;
    statut?: Prisma.EnumStatutAbonnementFieldUpdateOperationsInput | $Enums.StatutAbonnement;
    essaiDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    essaiFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AbonnementModuleListRelationFilter = {
    every?: Prisma.AbonnementModuleWhereInput;
    some?: Prisma.AbonnementModuleWhereInput;
    none?: Prisma.AbonnementModuleWhereInput;
};
export type AbonnementModuleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AbonnementModuleOrderByRelevanceInput = {
    fields: Prisma.AbonnementModuleOrderByRelevanceFieldEnum | Prisma.AbonnementModuleOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AbonnementModuleOrganisationIdModuleCompoundUniqueInput = {
    organisationId: string;
    module: $Enums.ModuleMetier;
};
export type AbonnementModuleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    essaiDebut?: Prisma.SortOrder;
    essaiFin?: Prisma.SortOrder;
    activeLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AbonnementModuleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    essaiDebut?: Prisma.SortOrder;
    essaiFin?: Prisma.SortOrder;
    activeLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AbonnementModuleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organisationId?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    essaiDebut?: Prisma.SortOrder;
    essaiFin?: Prisma.SortOrder;
    activeLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AbonnementModuleCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.AbonnementModuleCreateWithoutOrganisationInput, Prisma.AbonnementModuleUncheckedCreateWithoutOrganisationInput> | Prisma.AbonnementModuleCreateWithoutOrganisationInput[] | Prisma.AbonnementModuleUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.AbonnementModuleCreateOrConnectWithoutOrganisationInput | Prisma.AbonnementModuleCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.AbonnementModuleCreateManyOrganisationInputEnvelope;
    connect?: Prisma.AbonnementModuleWhereUniqueInput | Prisma.AbonnementModuleWhereUniqueInput[];
};
export type AbonnementModuleUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: Prisma.XOR<Prisma.AbonnementModuleCreateWithoutOrganisationInput, Prisma.AbonnementModuleUncheckedCreateWithoutOrganisationInput> | Prisma.AbonnementModuleCreateWithoutOrganisationInput[] | Prisma.AbonnementModuleUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.AbonnementModuleCreateOrConnectWithoutOrganisationInput | Prisma.AbonnementModuleCreateOrConnectWithoutOrganisationInput[];
    createMany?: Prisma.AbonnementModuleCreateManyOrganisationInputEnvelope;
    connect?: Prisma.AbonnementModuleWhereUniqueInput | Prisma.AbonnementModuleWhereUniqueInput[];
};
export type AbonnementModuleUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.AbonnementModuleCreateWithoutOrganisationInput, Prisma.AbonnementModuleUncheckedCreateWithoutOrganisationInput> | Prisma.AbonnementModuleCreateWithoutOrganisationInput[] | Prisma.AbonnementModuleUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.AbonnementModuleCreateOrConnectWithoutOrganisationInput | Prisma.AbonnementModuleCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.AbonnementModuleUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.AbonnementModuleUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.AbonnementModuleCreateManyOrganisationInputEnvelope;
    set?: Prisma.AbonnementModuleWhereUniqueInput | Prisma.AbonnementModuleWhereUniqueInput[];
    disconnect?: Prisma.AbonnementModuleWhereUniqueInput | Prisma.AbonnementModuleWhereUniqueInput[];
    delete?: Prisma.AbonnementModuleWhereUniqueInput | Prisma.AbonnementModuleWhereUniqueInput[];
    connect?: Prisma.AbonnementModuleWhereUniqueInput | Prisma.AbonnementModuleWhereUniqueInput[];
    update?: Prisma.AbonnementModuleUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.AbonnementModuleUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.AbonnementModuleUpdateManyWithWhereWithoutOrganisationInput | Prisma.AbonnementModuleUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.AbonnementModuleScalarWhereInput | Prisma.AbonnementModuleScalarWhereInput[];
};
export type AbonnementModuleUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: Prisma.XOR<Prisma.AbonnementModuleCreateWithoutOrganisationInput, Prisma.AbonnementModuleUncheckedCreateWithoutOrganisationInput> | Prisma.AbonnementModuleCreateWithoutOrganisationInput[] | Prisma.AbonnementModuleUncheckedCreateWithoutOrganisationInput[];
    connectOrCreate?: Prisma.AbonnementModuleCreateOrConnectWithoutOrganisationInput | Prisma.AbonnementModuleCreateOrConnectWithoutOrganisationInput[];
    upsert?: Prisma.AbonnementModuleUpsertWithWhereUniqueWithoutOrganisationInput | Prisma.AbonnementModuleUpsertWithWhereUniqueWithoutOrganisationInput[];
    createMany?: Prisma.AbonnementModuleCreateManyOrganisationInputEnvelope;
    set?: Prisma.AbonnementModuleWhereUniqueInput | Prisma.AbonnementModuleWhereUniqueInput[];
    disconnect?: Prisma.AbonnementModuleWhereUniqueInput | Prisma.AbonnementModuleWhereUniqueInput[];
    delete?: Prisma.AbonnementModuleWhereUniqueInput | Prisma.AbonnementModuleWhereUniqueInput[];
    connect?: Prisma.AbonnementModuleWhereUniqueInput | Prisma.AbonnementModuleWhereUniqueInput[];
    update?: Prisma.AbonnementModuleUpdateWithWhereUniqueWithoutOrganisationInput | Prisma.AbonnementModuleUpdateWithWhereUniqueWithoutOrganisationInput[];
    updateMany?: Prisma.AbonnementModuleUpdateManyWithWhereWithoutOrganisationInput | Prisma.AbonnementModuleUpdateManyWithWhereWithoutOrganisationInput[];
    deleteMany?: Prisma.AbonnementModuleScalarWhereInput | Prisma.AbonnementModuleScalarWhereInput[];
};
export type EnumModuleMetierFieldUpdateOperationsInput = {
    set?: $Enums.ModuleMetier;
};
export type EnumStatutAbonnementFieldUpdateOperationsInput = {
    set?: $Enums.StatutAbonnement;
};
export type AbonnementModuleCreateWithoutOrganisationInput = {
    id?: string;
    module: $Enums.ModuleMetier;
    statut?: $Enums.StatutAbonnement;
    essaiDebut: Date | string;
    essaiFin: Date | string;
    activeLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AbonnementModuleUncheckedCreateWithoutOrganisationInput = {
    id?: string;
    module: $Enums.ModuleMetier;
    statut?: $Enums.StatutAbonnement;
    essaiDebut: Date | string;
    essaiFin: Date | string;
    activeLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AbonnementModuleCreateOrConnectWithoutOrganisationInput = {
    where: Prisma.AbonnementModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AbonnementModuleCreateWithoutOrganisationInput, Prisma.AbonnementModuleUncheckedCreateWithoutOrganisationInput>;
};
export type AbonnementModuleCreateManyOrganisationInputEnvelope = {
    data: Prisma.AbonnementModuleCreateManyOrganisationInput | Prisma.AbonnementModuleCreateManyOrganisationInput[];
    skipDuplicates?: boolean;
};
export type AbonnementModuleUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.AbonnementModuleWhereUniqueInput;
    update: Prisma.XOR<Prisma.AbonnementModuleUpdateWithoutOrganisationInput, Prisma.AbonnementModuleUncheckedUpdateWithoutOrganisationInput>;
    create: Prisma.XOR<Prisma.AbonnementModuleCreateWithoutOrganisationInput, Prisma.AbonnementModuleUncheckedCreateWithoutOrganisationInput>;
};
export type AbonnementModuleUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: Prisma.AbonnementModuleWhereUniqueInput;
    data: Prisma.XOR<Prisma.AbonnementModuleUpdateWithoutOrganisationInput, Prisma.AbonnementModuleUncheckedUpdateWithoutOrganisationInput>;
};
export type AbonnementModuleUpdateManyWithWhereWithoutOrganisationInput = {
    where: Prisma.AbonnementModuleScalarWhereInput;
    data: Prisma.XOR<Prisma.AbonnementModuleUpdateManyMutationInput, Prisma.AbonnementModuleUncheckedUpdateManyWithoutOrganisationInput>;
};
export type AbonnementModuleScalarWhereInput = {
    AND?: Prisma.AbonnementModuleScalarWhereInput | Prisma.AbonnementModuleScalarWhereInput[];
    OR?: Prisma.AbonnementModuleScalarWhereInput[];
    NOT?: Prisma.AbonnementModuleScalarWhereInput | Prisma.AbonnementModuleScalarWhereInput[];
    id?: Prisma.StringFilter<"AbonnementModule"> | string;
    organisationId?: Prisma.StringFilter<"AbonnementModule"> | string;
    module?: Prisma.EnumModuleMetierFilter<"AbonnementModule"> | $Enums.ModuleMetier;
    statut?: Prisma.EnumStatutAbonnementFilter<"AbonnementModule"> | $Enums.StatutAbonnement;
    essaiDebut?: Prisma.DateTimeFilter<"AbonnementModule"> | Date | string;
    essaiFin?: Prisma.DateTimeFilter<"AbonnementModule"> | Date | string;
    activeLe?: Prisma.DateTimeNullableFilter<"AbonnementModule"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AbonnementModule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AbonnementModule"> | Date | string;
};
export type AbonnementModuleCreateManyOrganisationInput = {
    id?: string;
    module: $Enums.ModuleMetier;
    statut?: $Enums.StatutAbonnement;
    essaiDebut: Date | string;
    essaiFin: Date | string;
    activeLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AbonnementModuleUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.EnumModuleMetierFieldUpdateOperationsInput | $Enums.ModuleMetier;
    statut?: Prisma.EnumStatutAbonnementFieldUpdateOperationsInput | $Enums.StatutAbonnement;
    essaiDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    essaiFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AbonnementModuleUncheckedUpdateWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.EnumModuleMetierFieldUpdateOperationsInput | $Enums.ModuleMetier;
    statut?: Prisma.EnumStatutAbonnementFieldUpdateOperationsInput | $Enums.StatutAbonnement;
    essaiDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    essaiFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AbonnementModuleUncheckedUpdateManyWithoutOrganisationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.EnumModuleMetierFieldUpdateOperationsInput | $Enums.ModuleMetier;
    statut?: Prisma.EnumStatutAbonnementFieldUpdateOperationsInput | $Enums.StatutAbonnement;
    essaiDebut?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    essaiFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AbonnementModuleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organisationId?: boolean;
    module?: boolean;
    statut?: boolean;
    essaiDebut?: boolean;
    essaiFin?: boolean;
    activeLe?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["abonnementModule"]>;
export type AbonnementModuleSelectScalar = {
    id?: boolean;
    organisationId?: boolean;
    module?: boolean;
    statut?: boolean;
    essaiDebut?: boolean;
    essaiFin?: boolean;
    activeLe?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AbonnementModuleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organisationId" | "module" | "statut" | "essaiDebut" | "essaiFin" | "activeLe" | "createdAt" | "updatedAt", ExtArgs["result"]["abonnementModule"]>;
export type AbonnementModuleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisation?: boolean | Prisma.OrganisationDefaultArgs<ExtArgs>;
};
export type $AbonnementModulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AbonnementModule";
    objects: {
        organisation: Prisma.$OrganisationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organisationId: string;
        module: $Enums.ModuleMetier;
        statut: $Enums.StatutAbonnement;
        essaiDebut: Date;
        essaiFin: Date;
        activeLe: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["abonnementModule"]>;
    composites: {};
};
export type AbonnementModuleGetPayload<S extends boolean | null | undefined | AbonnementModuleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AbonnementModulePayload, S>;
export type AbonnementModuleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AbonnementModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AbonnementModuleCountAggregateInputType | true;
};
export interface AbonnementModuleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AbonnementModule'];
        meta: {
            name: 'AbonnementModule';
        };
    };
    findUnique<T extends AbonnementModuleFindUniqueArgs>(args: Prisma.SelectSubset<T, AbonnementModuleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AbonnementModuleClient<runtime.Types.Result.GetResult<Prisma.$AbonnementModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AbonnementModuleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AbonnementModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AbonnementModuleClient<runtime.Types.Result.GetResult<Prisma.$AbonnementModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AbonnementModuleFindFirstArgs>(args?: Prisma.SelectSubset<T, AbonnementModuleFindFirstArgs<ExtArgs>>): Prisma.Prisma__AbonnementModuleClient<runtime.Types.Result.GetResult<Prisma.$AbonnementModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AbonnementModuleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AbonnementModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AbonnementModuleClient<runtime.Types.Result.GetResult<Prisma.$AbonnementModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AbonnementModuleFindManyArgs>(args?: Prisma.SelectSubset<T, AbonnementModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AbonnementModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AbonnementModuleCreateArgs>(args: Prisma.SelectSubset<T, AbonnementModuleCreateArgs<ExtArgs>>): Prisma.Prisma__AbonnementModuleClient<runtime.Types.Result.GetResult<Prisma.$AbonnementModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AbonnementModuleCreateManyArgs>(args?: Prisma.SelectSubset<T, AbonnementModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends AbonnementModuleDeleteArgs>(args: Prisma.SelectSubset<T, AbonnementModuleDeleteArgs<ExtArgs>>): Prisma.Prisma__AbonnementModuleClient<runtime.Types.Result.GetResult<Prisma.$AbonnementModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AbonnementModuleUpdateArgs>(args: Prisma.SelectSubset<T, AbonnementModuleUpdateArgs<ExtArgs>>): Prisma.Prisma__AbonnementModuleClient<runtime.Types.Result.GetResult<Prisma.$AbonnementModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AbonnementModuleDeleteManyArgs>(args?: Prisma.SelectSubset<T, AbonnementModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AbonnementModuleUpdateManyArgs>(args: Prisma.SelectSubset<T, AbonnementModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends AbonnementModuleUpsertArgs>(args: Prisma.SelectSubset<T, AbonnementModuleUpsertArgs<ExtArgs>>): Prisma.Prisma__AbonnementModuleClient<runtime.Types.Result.GetResult<Prisma.$AbonnementModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AbonnementModuleCountArgs>(args?: Prisma.Subset<T, AbonnementModuleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AbonnementModuleCountAggregateOutputType> : number>;
    aggregate<T extends AbonnementModuleAggregateArgs>(args: Prisma.Subset<T, AbonnementModuleAggregateArgs>): Prisma.PrismaPromise<GetAbonnementModuleAggregateType<T>>;
    groupBy<T extends AbonnementModuleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AbonnementModuleGroupByArgs['orderBy'];
    } : {
        orderBy?: AbonnementModuleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AbonnementModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbonnementModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AbonnementModuleFieldRefs;
}
export interface Prisma__AbonnementModuleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organisation<T extends Prisma.OrganisationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganisationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganisationClient<runtime.Types.Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AbonnementModuleFieldRefs {
    readonly id: Prisma.FieldRef<"AbonnementModule", 'String'>;
    readonly organisationId: Prisma.FieldRef<"AbonnementModule", 'String'>;
    readonly module: Prisma.FieldRef<"AbonnementModule", 'ModuleMetier'>;
    readonly statut: Prisma.FieldRef<"AbonnementModule", 'StatutAbonnement'>;
    readonly essaiDebut: Prisma.FieldRef<"AbonnementModule", 'DateTime'>;
    readonly essaiFin: Prisma.FieldRef<"AbonnementModule", 'DateTime'>;
    readonly activeLe: Prisma.FieldRef<"AbonnementModule", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"AbonnementModule", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AbonnementModule", 'DateTime'>;
}
export type AbonnementModuleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonnementModuleSelect<ExtArgs> | null;
    omit?: Prisma.AbonnementModuleOmit<ExtArgs> | null;
    include?: Prisma.AbonnementModuleInclude<ExtArgs> | null;
    where: Prisma.AbonnementModuleWhereUniqueInput;
};
export type AbonnementModuleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonnementModuleSelect<ExtArgs> | null;
    omit?: Prisma.AbonnementModuleOmit<ExtArgs> | null;
    include?: Prisma.AbonnementModuleInclude<ExtArgs> | null;
    where: Prisma.AbonnementModuleWhereUniqueInput;
};
export type AbonnementModuleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AbonnementModuleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AbonnementModuleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AbonnementModuleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonnementModuleSelect<ExtArgs> | null;
    omit?: Prisma.AbonnementModuleOmit<ExtArgs> | null;
    include?: Prisma.AbonnementModuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AbonnementModuleCreateInput, Prisma.AbonnementModuleUncheckedCreateInput>;
};
export type AbonnementModuleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AbonnementModuleCreateManyInput | Prisma.AbonnementModuleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AbonnementModuleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonnementModuleSelect<ExtArgs> | null;
    omit?: Prisma.AbonnementModuleOmit<ExtArgs> | null;
    include?: Prisma.AbonnementModuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AbonnementModuleUpdateInput, Prisma.AbonnementModuleUncheckedUpdateInput>;
    where: Prisma.AbonnementModuleWhereUniqueInput;
};
export type AbonnementModuleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AbonnementModuleUpdateManyMutationInput, Prisma.AbonnementModuleUncheckedUpdateManyInput>;
    where?: Prisma.AbonnementModuleWhereInput;
    limit?: number;
};
export type AbonnementModuleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonnementModuleSelect<ExtArgs> | null;
    omit?: Prisma.AbonnementModuleOmit<ExtArgs> | null;
    include?: Prisma.AbonnementModuleInclude<ExtArgs> | null;
    where: Prisma.AbonnementModuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AbonnementModuleCreateInput, Prisma.AbonnementModuleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AbonnementModuleUpdateInput, Prisma.AbonnementModuleUncheckedUpdateInput>;
};
export type AbonnementModuleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonnementModuleSelect<ExtArgs> | null;
    omit?: Prisma.AbonnementModuleOmit<ExtArgs> | null;
    include?: Prisma.AbonnementModuleInclude<ExtArgs> | null;
    where: Prisma.AbonnementModuleWhereUniqueInput;
};
export type AbonnementModuleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AbonnementModuleWhereInput;
    limit?: number;
};
export type AbonnementModuleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AbonnementModuleSelect<ExtArgs> | null;
    omit?: Prisma.AbonnementModuleOmit<ExtArgs> | null;
    include?: Prisma.AbonnementModuleInclude<ExtArgs> | null;
};
