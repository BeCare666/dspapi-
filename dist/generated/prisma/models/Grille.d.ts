import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GrilleModel = runtime.Types.Result.DefaultSelection<Prisma.$GrillePayload>;
export type AggregateGrille = {
    _count: GrilleCountAggregateOutputType | null;
    _avg: GrilleAvgAggregateOutputType | null;
    _sum: GrilleSumAggregateOutputType | null;
    _min: GrilleMinAggregateOutputType | null;
    _max: GrilleMaxAggregateOutputType | null;
};
export type GrilleAvgAggregateOutputType = {
    version: number | null;
};
export type GrilleSumAggregateOutputType = {
    version: number | null;
};
export type GrilleMinAggregateOutputType = {
    id: string | null;
    nom: string | null;
    type: $Enums.TypeEtablissement | null;
    version: number | null;
    statut: $Enums.StatutGrille | null;
    publieeLe: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GrilleMaxAggregateOutputType = {
    id: string | null;
    nom: string | null;
    type: $Enums.TypeEtablissement | null;
    version: number | null;
    statut: $Enums.StatutGrille | null;
    publieeLe: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GrilleCountAggregateOutputType = {
    id: number;
    nom: number;
    type: number;
    version: number;
    statut: number;
    publieeLe: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GrilleAvgAggregateInputType = {
    version?: true;
};
export type GrilleSumAggregateInputType = {
    version?: true;
};
export type GrilleMinAggregateInputType = {
    id?: true;
    nom?: true;
    type?: true;
    version?: true;
    statut?: true;
    publieeLe?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GrilleMaxAggregateInputType = {
    id?: true;
    nom?: true;
    type?: true;
    version?: true;
    statut?: true;
    publieeLe?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GrilleCountAggregateInputType = {
    id?: true;
    nom?: true;
    type?: true;
    version?: true;
    statut?: true;
    publieeLe?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GrilleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GrilleWhereInput;
    orderBy?: Prisma.GrilleOrderByWithRelationInput | Prisma.GrilleOrderByWithRelationInput[];
    cursor?: Prisma.GrilleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GrilleCountAggregateInputType;
    _avg?: GrilleAvgAggregateInputType;
    _sum?: GrilleSumAggregateInputType;
    _min?: GrilleMinAggregateInputType;
    _max?: GrilleMaxAggregateInputType;
};
export type GetGrilleAggregateType<T extends GrilleAggregateArgs> = {
    [P in keyof T & keyof AggregateGrille]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGrille[P]> : Prisma.GetScalarType<T[P], AggregateGrille[P]>;
};
export type GrilleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GrilleWhereInput;
    orderBy?: Prisma.GrilleOrderByWithAggregationInput | Prisma.GrilleOrderByWithAggregationInput[];
    by: Prisma.GrilleScalarFieldEnum[] | Prisma.GrilleScalarFieldEnum;
    having?: Prisma.GrilleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GrilleCountAggregateInputType | true;
    _avg?: GrilleAvgAggregateInputType;
    _sum?: GrilleSumAggregateInputType;
    _min?: GrilleMinAggregateInputType;
    _max?: GrilleMaxAggregateInputType;
};
export type GrilleGroupByOutputType = {
    id: string;
    nom: string;
    type: $Enums.TypeEtablissement;
    version: number;
    statut: $Enums.StatutGrille;
    publieeLe: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: GrilleCountAggregateOutputType | null;
    _avg: GrilleAvgAggregateOutputType | null;
    _sum: GrilleSumAggregateOutputType | null;
    _min: GrilleMinAggregateOutputType | null;
    _max: GrilleMaxAggregateOutputType | null;
};
export type GetGrilleGroupByPayload<T extends GrilleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GrilleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GrilleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GrilleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GrilleGroupByOutputType[P]>;
}>>;
export type GrilleWhereInput = {
    AND?: Prisma.GrilleWhereInput | Prisma.GrilleWhereInput[];
    OR?: Prisma.GrilleWhereInput[];
    NOT?: Prisma.GrilleWhereInput | Prisma.GrilleWhereInput[];
    id?: Prisma.StringFilter<"Grille"> | string;
    nom?: Prisma.StringFilter<"Grille"> | string;
    type?: Prisma.EnumTypeEtablissementFilter<"Grille"> | $Enums.TypeEtablissement;
    version?: Prisma.IntFilter<"Grille"> | number;
    statut?: Prisma.EnumStatutGrilleFilter<"Grille"> | $Enums.StatutGrille;
    publieeLe?: Prisma.DateTimeNullableFilter<"Grille"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Grille"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Grille"> | Date | string;
    domaines?: Prisma.DomaineListRelationFilter;
    sessionsEvaluation?: Prisma.SessionEvaluationListRelationFilter;
};
export type GrilleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    publieeLe?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    domaines?: Prisma.DomaineOrderByRelationAggregateInput;
    sessionsEvaluation?: Prisma.SessionEvaluationOrderByRelationAggregateInput;
    _relevance?: Prisma.GrilleOrderByRelevanceInput;
};
export type GrilleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nom_version?: Prisma.GrilleNomVersionCompoundUniqueInput;
    AND?: Prisma.GrilleWhereInput | Prisma.GrilleWhereInput[];
    OR?: Prisma.GrilleWhereInput[];
    NOT?: Prisma.GrilleWhereInput | Prisma.GrilleWhereInput[];
    nom?: Prisma.StringFilter<"Grille"> | string;
    type?: Prisma.EnumTypeEtablissementFilter<"Grille"> | $Enums.TypeEtablissement;
    version?: Prisma.IntFilter<"Grille"> | number;
    statut?: Prisma.EnumStatutGrilleFilter<"Grille"> | $Enums.StatutGrille;
    publieeLe?: Prisma.DateTimeNullableFilter<"Grille"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Grille"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Grille"> | Date | string;
    domaines?: Prisma.DomaineListRelationFilter;
    sessionsEvaluation?: Prisma.SessionEvaluationListRelationFilter;
}, "id" | "nom_version">;
export type GrilleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    publieeLe?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GrilleCountOrderByAggregateInput;
    _avg?: Prisma.GrilleAvgOrderByAggregateInput;
    _max?: Prisma.GrilleMaxOrderByAggregateInput;
    _min?: Prisma.GrilleMinOrderByAggregateInput;
    _sum?: Prisma.GrilleSumOrderByAggregateInput;
};
export type GrilleScalarWhereWithAggregatesInput = {
    AND?: Prisma.GrilleScalarWhereWithAggregatesInput | Prisma.GrilleScalarWhereWithAggregatesInput[];
    OR?: Prisma.GrilleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GrilleScalarWhereWithAggregatesInput | Prisma.GrilleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Grille"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Grille"> | string;
    type?: Prisma.EnumTypeEtablissementWithAggregatesFilter<"Grille"> | $Enums.TypeEtablissement;
    version?: Prisma.IntWithAggregatesFilter<"Grille"> | number;
    statut?: Prisma.EnumStatutGrilleWithAggregatesFilter<"Grille"> | $Enums.StatutGrille;
    publieeLe?: Prisma.DateTimeNullableWithAggregatesFilter<"Grille"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Grille"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Grille"> | Date | string;
};
export type GrilleCreateInput = {
    id?: string;
    nom: string;
    type: $Enums.TypeEtablissement;
    version: number;
    statut?: $Enums.StatutGrille;
    publieeLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    domaines?: Prisma.DomaineCreateNestedManyWithoutGrilleInput;
    sessionsEvaluation?: Prisma.SessionEvaluationCreateNestedManyWithoutGrilleInput;
};
export type GrilleUncheckedCreateInput = {
    id?: string;
    nom: string;
    type: $Enums.TypeEtablissement;
    version: number;
    statut?: $Enums.StatutGrille;
    publieeLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    domaines?: Prisma.DomaineUncheckedCreateNestedManyWithoutGrilleInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedCreateNestedManyWithoutGrilleInput;
};
export type GrilleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutGrilleFieldUpdateOperationsInput | $Enums.StatutGrille;
    publieeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    domaines?: Prisma.DomaineUpdateManyWithoutGrilleNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUpdateManyWithoutGrilleNestedInput;
};
export type GrilleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutGrilleFieldUpdateOperationsInput | $Enums.StatutGrille;
    publieeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    domaines?: Prisma.DomaineUncheckedUpdateManyWithoutGrilleNestedInput;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedUpdateManyWithoutGrilleNestedInput;
};
export type GrilleCreateManyInput = {
    id?: string;
    nom: string;
    type: $Enums.TypeEtablissement;
    version: number;
    statut?: $Enums.StatutGrille;
    publieeLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GrilleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutGrilleFieldUpdateOperationsInput | $Enums.StatutGrille;
    publieeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GrilleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutGrilleFieldUpdateOperationsInput | $Enums.StatutGrille;
    publieeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GrilleOrderByRelevanceInput = {
    fields: Prisma.GrilleOrderByRelevanceFieldEnum | Prisma.GrilleOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type GrilleNomVersionCompoundUniqueInput = {
    nom: string;
    version: number;
};
export type GrilleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    publieeLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GrilleAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type GrilleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    publieeLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GrilleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    statut?: Prisma.SortOrder;
    publieeLe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GrilleSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type GrilleScalarRelationFilter = {
    is?: Prisma.GrilleWhereInput;
    isNot?: Prisma.GrilleWhereInput;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumStatutGrilleFieldUpdateOperationsInput = {
    set?: $Enums.StatutGrille;
};
export type GrilleCreateNestedOneWithoutDomainesInput = {
    create?: Prisma.XOR<Prisma.GrilleCreateWithoutDomainesInput, Prisma.GrilleUncheckedCreateWithoutDomainesInput>;
    connectOrCreate?: Prisma.GrilleCreateOrConnectWithoutDomainesInput;
    connect?: Prisma.GrilleWhereUniqueInput;
};
export type GrilleUpdateOneRequiredWithoutDomainesNestedInput = {
    create?: Prisma.XOR<Prisma.GrilleCreateWithoutDomainesInput, Prisma.GrilleUncheckedCreateWithoutDomainesInput>;
    connectOrCreate?: Prisma.GrilleCreateOrConnectWithoutDomainesInput;
    upsert?: Prisma.GrilleUpsertWithoutDomainesInput;
    connect?: Prisma.GrilleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GrilleUpdateToOneWithWhereWithoutDomainesInput, Prisma.GrilleUpdateWithoutDomainesInput>, Prisma.GrilleUncheckedUpdateWithoutDomainesInput>;
};
export type GrilleCreateNestedOneWithoutSessionsEvaluationInput = {
    create?: Prisma.XOR<Prisma.GrilleCreateWithoutSessionsEvaluationInput, Prisma.GrilleUncheckedCreateWithoutSessionsEvaluationInput>;
    connectOrCreate?: Prisma.GrilleCreateOrConnectWithoutSessionsEvaluationInput;
    connect?: Prisma.GrilleWhereUniqueInput;
};
export type GrilleUpdateOneRequiredWithoutSessionsEvaluationNestedInput = {
    create?: Prisma.XOR<Prisma.GrilleCreateWithoutSessionsEvaluationInput, Prisma.GrilleUncheckedCreateWithoutSessionsEvaluationInput>;
    connectOrCreate?: Prisma.GrilleCreateOrConnectWithoutSessionsEvaluationInput;
    upsert?: Prisma.GrilleUpsertWithoutSessionsEvaluationInput;
    connect?: Prisma.GrilleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GrilleUpdateToOneWithWhereWithoutSessionsEvaluationInput, Prisma.GrilleUpdateWithoutSessionsEvaluationInput>, Prisma.GrilleUncheckedUpdateWithoutSessionsEvaluationInput>;
};
export type GrilleCreateWithoutDomainesInput = {
    id?: string;
    nom: string;
    type: $Enums.TypeEtablissement;
    version: number;
    statut?: $Enums.StatutGrille;
    publieeLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessionsEvaluation?: Prisma.SessionEvaluationCreateNestedManyWithoutGrilleInput;
};
export type GrilleUncheckedCreateWithoutDomainesInput = {
    id?: string;
    nom: string;
    type: $Enums.TypeEtablissement;
    version: number;
    statut?: $Enums.StatutGrille;
    publieeLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedCreateNestedManyWithoutGrilleInput;
};
export type GrilleCreateOrConnectWithoutDomainesInput = {
    where: Prisma.GrilleWhereUniqueInput;
    create: Prisma.XOR<Prisma.GrilleCreateWithoutDomainesInput, Prisma.GrilleUncheckedCreateWithoutDomainesInput>;
};
export type GrilleUpsertWithoutDomainesInput = {
    update: Prisma.XOR<Prisma.GrilleUpdateWithoutDomainesInput, Prisma.GrilleUncheckedUpdateWithoutDomainesInput>;
    create: Prisma.XOR<Prisma.GrilleCreateWithoutDomainesInput, Prisma.GrilleUncheckedCreateWithoutDomainesInput>;
    where?: Prisma.GrilleWhereInput;
};
export type GrilleUpdateToOneWithWhereWithoutDomainesInput = {
    where?: Prisma.GrilleWhereInput;
    data: Prisma.XOR<Prisma.GrilleUpdateWithoutDomainesInput, Prisma.GrilleUncheckedUpdateWithoutDomainesInput>;
};
export type GrilleUpdateWithoutDomainesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutGrilleFieldUpdateOperationsInput | $Enums.StatutGrille;
    publieeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessionsEvaluation?: Prisma.SessionEvaluationUpdateManyWithoutGrilleNestedInput;
};
export type GrilleUncheckedUpdateWithoutDomainesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutGrilleFieldUpdateOperationsInput | $Enums.StatutGrille;
    publieeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessionsEvaluation?: Prisma.SessionEvaluationUncheckedUpdateManyWithoutGrilleNestedInput;
};
export type GrilleCreateWithoutSessionsEvaluationInput = {
    id?: string;
    nom: string;
    type: $Enums.TypeEtablissement;
    version: number;
    statut?: $Enums.StatutGrille;
    publieeLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    domaines?: Prisma.DomaineCreateNestedManyWithoutGrilleInput;
};
export type GrilleUncheckedCreateWithoutSessionsEvaluationInput = {
    id?: string;
    nom: string;
    type: $Enums.TypeEtablissement;
    version: number;
    statut?: $Enums.StatutGrille;
    publieeLe?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    domaines?: Prisma.DomaineUncheckedCreateNestedManyWithoutGrilleInput;
};
export type GrilleCreateOrConnectWithoutSessionsEvaluationInput = {
    where: Prisma.GrilleWhereUniqueInput;
    create: Prisma.XOR<Prisma.GrilleCreateWithoutSessionsEvaluationInput, Prisma.GrilleUncheckedCreateWithoutSessionsEvaluationInput>;
};
export type GrilleUpsertWithoutSessionsEvaluationInput = {
    update: Prisma.XOR<Prisma.GrilleUpdateWithoutSessionsEvaluationInput, Prisma.GrilleUncheckedUpdateWithoutSessionsEvaluationInput>;
    create: Prisma.XOR<Prisma.GrilleCreateWithoutSessionsEvaluationInput, Prisma.GrilleUncheckedCreateWithoutSessionsEvaluationInput>;
    where?: Prisma.GrilleWhereInput;
};
export type GrilleUpdateToOneWithWhereWithoutSessionsEvaluationInput = {
    where?: Prisma.GrilleWhereInput;
    data: Prisma.XOR<Prisma.GrilleUpdateWithoutSessionsEvaluationInput, Prisma.GrilleUncheckedUpdateWithoutSessionsEvaluationInput>;
};
export type GrilleUpdateWithoutSessionsEvaluationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutGrilleFieldUpdateOperationsInput | $Enums.StatutGrille;
    publieeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    domaines?: Prisma.DomaineUpdateManyWithoutGrilleNestedInput;
};
export type GrilleUncheckedUpdateWithoutSessionsEvaluationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumTypeEtablissementFieldUpdateOperationsInput | $Enums.TypeEtablissement;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    statut?: Prisma.EnumStatutGrilleFieldUpdateOperationsInput | $Enums.StatutGrille;
    publieeLe?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    domaines?: Prisma.DomaineUncheckedUpdateManyWithoutGrilleNestedInput;
};
export type GrilleCountOutputType = {
    domaines: number;
    sessionsEvaluation: number;
};
export type GrilleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    domaines?: boolean | GrilleCountOutputTypeCountDomainesArgs;
    sessionsEvaluation?: boolean | GrilleCountOutputTypeCountSessionsEvaluationArgs;
};
export type GrilleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrilleCountOutputTypeSelect<ExtArgs> | null;
};
export type GrilleCountOutputTypeCountDomainesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DomaineWhereInput;
};
export type GrilleCountOutputTypeCountSessionsEvaluationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionEvaluationWhereInput;
};
export type GrilleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    type?: boolean;
    version?: boolean;
    statut?: boolean;
    publieeLe?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    domaines?: boolean | Prisma.Grille$domainesArgs<ExtArgs>;
    sessionsEvaluation?: boolean | Prisma.Grille$sessionsEvaluationArgs<ExtArgs>;
    _count?: boolean | Prisma.GrilleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["grille"]>;
export type GrilleSelectScalar = {
    id?: boolean;
    nom?: boolean;
    type?: boolean;
    version?: boolean;
    statut?: boolean;
    publieeLe?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GrilleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "type" | "version" | "statut" | "publieeLe" | "createdAt" | "updatedAt", ExtArgs["result"]["grille"]>;
export type GrilleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    domaines?: boolean | Prisma.Grille$domainesArgs<ExtArgs>;
    sessionsEvaluation?: boolean | Prisma.Grille$sessionsEvaluationArgs<ExtArgs>;
    _count?: boolean | Prisma.GrilleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $GrillePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Grille";
    objects: {
        domaines: Prisma.$DomainePayload<ExtArgs>[];
        sessionsEvaluation: Prisma.$SessionEvaluationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nom: string;
        type: $Enums.TypeEtablissement;
        version: number;
        statut: $Enums.StatutGrille;
        publieeLe: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["grille"]>;
    composites: {};
};
export type GrilleGetPayload<S extends boolean | null | undefined | GrilleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GrillePayload, S>;
export type GrilleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GrilleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GrilleCountAggregateInputType | true;
};
export interface GrilleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Grille'];
        meta: {
            name: 'Grille';
        };
    };
    findUnique<T extends GrilleFindUniqueArgs>(args: Prisma.SelectSubset<T, GrilleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GrilleClient<runtime.Types.Result.GetResult<Prisma.$GrillePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GrilleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GrilleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GrilleClient<runtime.Types.Result.GetResult<Prisma.$GrillePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GrilleFindFirstArgs>(args?: Prisma.SelectSubset<T, GrilleFindFirstArgs<ExtArgs>>): Prisma.Prisma__GrilleClient<runtime.Types.Result.GetResult<Prisma.$GrillePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GrilleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GrilleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GrilleClient<runtime.Types.Result.GetResult<Prisma.$GrillePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GrilleFindManyArgs>(args?: Prisma.SelectSubset<T, GrilleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GrillePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GrilleCreateArgs>(args: Prisma.SelectSubset<T, GrilleCreateArgs<ExtArgs>>): Prisma.Prisma__GrilleClient<runtime.Types.Result.GetResult<Prisma.$GrillePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GrilleCreateManyArgs>(args?: Prisma.SelectSubset<T, GrilleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends GrilleDeleteArgs>(args: Prisma.SelectSubset<T, GrilleDeleteArgs<ExtArgs>>): Prisma.Prisma__GrilleClient<runtime.Types.Result.GetResult<Prisma.$GrillePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GrilleUpdateArgs>(args: Prisma.SelectSubset<T, GrilleUpdateArgs<ExtArgs>>): Prisma.Prisma__GrilleClient<runtime.Types.Result.GetResult<Prisma.$GrillePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GrilleDeleteManyArgs>(args?: Prisma.SelectSubset<T, GrilleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GrilleUpdateManyArgs>(args: Prisma.SelectSubset<T, GrilleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends GrilleUpsertArgs>(args: Prisma.SelectSubset<T, GrilleUpsertArgs<ExtArgs>>): Prisma.Prisma__GrilleClient<runtime.Types.Result.GetResult<Prisma.$GrillePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GrilleCountArgs>(args?: Prisma.Subset<T, GrilleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GrilleCountAggregateOutputType> : number>;
    aggregate<T extends GrilleAggregateArgs>(args: Prisma.Subset<T, GrilleAggregateArgs>): Prisma.PrismaPromise<GetGrilleAggregateType<T>>;
    groupBy<T extends GrilleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GrilleGroupByArgs['orderBy'];
    } : {
        orderBy?: GrilleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GrilleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrilleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GrilleFieldRefs;
}
export interface Prisma__GrilleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    domaines<T extends Prisma.Grille$domainesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Grille$domainesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessionsEvaluation<T extends Prisma.Grille$sessionsEvaluationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Grille$sessionsEvaluationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GrilleFieldRefs {
    readonly id: Prisma.FieldRef<"Grille", 'String'>;
    readonly nom: Prisma.FieldRef<"Grille", 'String'>;
    readonly type: Prisma.FieldRef<"Grille", 'TypeEtablissement'>;
    readonly version: Prisma.FieldRef<"Grille", 'Int'>;
    readonly statut: Prisma.FieldRef<"Grille", 'StatutGrille'>;
    readonly publieeLe: Prisma.FieldRef<"Grille", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Grille", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Grille", 'DateTime'>;
}
export type GrilleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrilleSelect<ExtArgs> | null;
    omit?: Prisma.GrilleOmit<ExtArgs> | null;
    include?: Prisma.GrilleInclude<ExtArgs> | null;
    where: Prisma.GrilleWhereUniqueInput;
};
export type GrilleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrilleSelect<ExtArgs> | null;
    omit?: Prisma.GrilleOmit<ExtArgs> | null;
    include?: Prisma.GrilleInclude<ExtArgs> | null;
    where: Prisma.GrilleWhereUniqueInput;
};
export type GrilleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrilleSelect<ExtArgs> | null;
    omit?: Prisma.GrilleOmit<ExtArgs> | null;
    include?: Prisma.GrilleInclude<ExtArgs> | null;
    where?: Prisma.GrilleWhereInput;
    orderBy?: Prisma.GrilleOrderByWithRelationInput | Prisma.GrilleOrderByWithRelationInput[];
    cursor?: Prisma.GrilleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GrilleScalarFieldEnum | Prisma.GrilleScalarFieldEnum[];
};
export type GrilleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrilleSelect<ExtArgs> | null;
    omit?: Prisma.GrilleOmit<ExtArgs> | null;
    include?: Prisma.GrilleInclude<ExtArgs> | null;
    where?: Prisma.GrilleWhereInput;
    orderBy?: Prisma.GrilleOrderByWithRelationInput | Prisma.GrilleOrderByWithRelationInput[];
    cursor?: Prisma.GrilleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GrilleScalarFieldEnum | Prisma.GrilleScalarFieldEnum[];
};
export type GrilleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrilleSelect<ExtArgs> | null;
    omit?: Prisma.GrilleOmit<ExtArgs> | null;
    include?: Prisma.GrilleInclude<ExtArgs> | null;
    where?: Prisma.GrilleWhereInput;
    orderBy?: Prisma.GrilleOrderByWithRelationInput | Prisma.GrilleOrderByWithRelationInput[];
    cursor?: Prisma.GrilleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GrilleScalarFieldEnum | Prisma.GrilleScalarFieldEnum[];
};
export type GrilleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrilleSelect<ExtArgs> | null;
    omit?: Prisma.GrilleOmit<ExtArgs> | null;
    include?: Prisma.GrilleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GrilleCreateInput, Prisma.GrilleUncheckedCreateInput>;
};
export type GrilleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GrilleCreateManyInput | Prisma.GrilleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GrilleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrilleSelect<ExtArgs> | null;
    omit?: Prisma.GrilleOmit<ExtArgs> | null;
    include?: Prisma.GrilleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GrilleUpdateInput, Prisma.GrilleUncheckedUpdateInput>;
    where: Prisma.GrilleWhereUniqueInput;
};
export type GrilleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GrilleUpdateManyMutationInput, Prisma.GrilleUncheckedUpdateManyInput>;
    where?: Prisma.GrilleWhereInput;
    limit?: number;
};
export type GrilleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrilleSelect<ExtArgs> | null;
    omit?: Prisma.GrilleOmit<ExtArgs> | null;
    include?: Prisma.GrilleInclude<ExtArgs> | null;
    where: Prisma.GrilleWhereUniqueInput;
    create: Prisma.XOR<Prisma.GrilleCreateInput, Prisma.GrilleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GrilleUpdateInput, Prisma.GrilleUncheckedUpdateInput>;
};
export type GrilleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrilleSelect<ExtArgs> | null;
    omit?: Prisma.GrilleOmit<ExtArgs> | null;
    include?: Prisma.GrilleInclude<ExtArgs> | null;
    where: Prisma.GrilleWhereUniqueInput;
};
export type GrilleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GrilleWhereInput;
    limit?: number;
};
export type Grille$domainesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DomaineSelect<ExtArgs> | null;
    omit?: Prisma.DomaineOmit<ExtArgs> | null;
    include?: Prisma.DomaineInclude<ExtArgs> | null;
    where?: Prisma.DomaineWhereInput;
    orderBy?: Prisma.DomaineOrderByWithRelationInput | Prisma.DomaineOrderByWithRelationInput[];
    cursor?: Prisma.DomaineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DomaineScalarFieldEnum | Prisma.DomaineScalarFieldEnum[];
};
export type Grille$sessionsEvaluationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GrilleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GrilleSelect<ExtArgs> | null;
    omit?: Prisma.GrilleOmit<ExtArgs> | null;
    include?: Prisma.GrilleInclude<ExtArgs> | null;
};
