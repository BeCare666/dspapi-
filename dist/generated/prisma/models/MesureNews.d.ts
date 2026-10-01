import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MesureNewsModel = runtime.Types.Result.DefaultSelection<Prisma.$MesureNewsPayload>;
export type AggregateMesureNews = {
    _count: MesureNewsCountAggregateOutputType | null;
    _avg: MesureNewsAvgAggregateOutputType | null;
    _sum: MesureNewsSumAggregateOutputType | null;
    _min: MesureNewsMinAggregateOutputType | null;
    _max: MesureNewsMaxAggregateOutputType | null;
};
export type MesureNewsAvgAggregateOutputType = {
    frequenceRespiratoire: number | null;
    saturationOxygene: number | null;
    temperature: number | null;
    pressionArterielleSystolique: number | null;
    frequenceCardiaque: number | null;
    scoreTotal: number | null;
};
export type MesureNewsSumAggregateOutputType = {
    frequenceRespiratoire: number | null;
    saturationOxygene: number | null;
    temperature: number | null;
    pressionArterielleSystolique: number | null;
    frequenceCardiaque: number | null;
    scoreTotal: number | null;
};
export type MesureNewsMinAggregateOutputType = {
    id: string | null;
    patientId: string | null;
    saisieParId: string | null;
    frequenceRespiratoire: number | null;
    saturationOxygene: number | null;
    oxygenoSupplementation: boolean | null;
    temperature: number | null;
    pressionArterielleSystolique: number | null;
    frequenceCardiaque: number | null;
    niveauConscience: $Enums.NiveauConscience | null;
    scoreTotal: number | null;
    niveauRisque: $Enums.NiveauRisqueNews | null;
    dateMesure: Date | null;
    createdAt: Date | null;
};
export type MesureNewsMaxAggregateOutputType = {
    id: string | null;
    patientId: string | null;
    saisieParId: string | null;
    frequenceRespiratoire: number | null;
    saturationOxygene: number | null;
    oxygenoSupplementation: boolean | null;
    temperature: number | null;
    pressionArterielleSystolique: number | null;
    frequenceCardiaque: number | null;
    niveauConscience: $Enums.NiveauConscience | null;
    scoreTotal: number | null;
    niveauRisque: $Enums.NiveauRisqueNews | null;
    dateMesure: Date | null;
    createdAt: Date | null;
};
export type MesureNewsCountAggregateOutputType = {
    id: number;
    patientId: number;
    saisieParId: number;
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: number;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: number;
    scoreTotal: number;
    niveauRisque: number;
    dateMesure: number;
    createdAt: number;
    _all: number;
};
export type MesureNewsAvgAggregateInputType = {
    frequenceRespiratoire?: true;
    saturationOxygene?: true;
    temperature?: true;
    pressionArterielleSystolique?: true;
    frequenceCardiaque?: true;
    scoreTotal?: true;
};
export type MesureNewsSumAggregateInputType = {
    frequenceRespiratoire?: true;
    saturationOxygene?: true;
    temperature?: true;
    pressionArterielleSystolique?: true;
    frequenceCardiaque?: true;
    scoreTotal?: true;
};
export type MesureNewsMinAggregateInputType = {
    id?: true;
    patientId?: true;
    saisieParId?: true;
    frequenceRespiratoire?: true;
    saturationOxygene?: true;
    oxygenoSupplementation?: true;
    temperature?: true;
    pressionArterielleSystolique?: true;
    frequenceCardiaque?: true;
    niveauConscience?: true;
    scoreTotal?: true;
    niveauRisque?: true;
    dateMesure?: true;
    createdAt?: true;
};
export type MesureNewsMaxAggregateInputType = {
    id?: true;
    patientId?: true;
    saisieParId?: true;
    frequenceRespiratoire?: true;
    saturationOxygene?: true;
    oxygenoSupplementation?: true;
    temperature?: true;
    pressionArterielleSystolique?: true;
    frequenceCardiaque?: true;
    niveauConscience?: true;
    scoreTotal?: true;
    niveauRisque?: true;
    dateMesure?: true;
    createdAt?: true;
};
export type MesureNewsCountAggregateInputType = {
    id?: true;
    patientId?: true;
    saisieParId?: true;
    frequenceRespiratoire?: true;
    saturationOxygene?: true;
    oxygenoSupplementation?: true;
    temperature?: true;
    pressionArterielleSystolique?: true;
    frequenceCardiaque?: true;
    niveauConscience?: true;
    scoreTotal?: true;
    niveauRisque?: true;
    dateMesure?: true;
    createdAt?: true;
    _all?: true;
};
export type MesureNewsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MesureNewsWhereInput;
    orderBy?: Prisma.MesureNewsOrderByWithRelationInput | Prisma.MesureNewsOrderByWithRelationInput[];
    cursor?: Prisma.MesureNewsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MesureNewsCountAggregateInputType;
    _avg?: MesureNewsAvgAggregateInputType;
    _sum?: MesureNewsSumAggregateInputType;
    _min?: MesureNewsMinAggregateInputType;
    _max?: MesureNewsMaxAggregateInputType;
};
export type GetMesureNewsAggregateType<T extends MesureNewsAggregateArgs> = {
    [P in keyof T & keyof AggregateMesureNews]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMesureNews[P]> : Prisma.GetScalarType<T[P], AggregateMesureNews[P]>;
};
export type MesureNewsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MesureNewsWhereInput;
    orderBy?: Prisma.MesureNewsOrderByWithAggregationInput | Prisma.MesureNewsOrderByWithAggregationInput[];
    by: Prisma.MesureNewsScalarFieldEnum[] | Prisma.MesureNewsScalarFieldEnum;
    having?: Prisma.MesureNewsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MesureNewsCountAggregateInputType | true;
    _avg?: MesureNewsAvgAggregateInputType;
    _sum?: MesureNewsSumAggregateInputType;
    _min?: MesureNewsMinAggregateInputType;
    _max?: MesureNewsMaxAggregateInputType;
};
export type MesureNewsGroupByOutputType = {
    id: string;
    patientId: string;
    saisieParId: string;
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: $Enums.NiveauConscience;
    scoreTotal: number;
    niveauRisque: $Enums.NiveauRisqueNews;
    dateMesure: Date;
    createdAt: Date;
    _count: MesureNewsCountAggregateOutputType | null;
    _avg: MesureNewsAvgAggregateOutputType | null;
    _sum: MesureNewsSumAggregateOutputType | null;
    _min: MesureNewsMinAggregateOutputType | null;
    _max: MesureNewsMaxAggregateOutputType | null;
};
export type GetMesureNewsGroupByPayload<T extends MesureNewsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MesureNewsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MesureNewsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MesureNewsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MesureNewsGroupByOutputType[P]>;
}>>;
export type MesureNewsWhereInput = {
    AND?: Prisma.MesureNewsWhereInput | Prisma.MesureNewsWhereInput[];
    OR?: Prisma.MesureNewsWhereInput[];
    NOT?: Prisma.MesureNewsWhereInput | Prisma.MesureNewsWhereInput[];
    id?: Prisma.StringFilter<"MesureNews"> | string;
    patientId?: Prisma.StringFilter<"MesureNews"> | string;
    saisieParId?: Prisma.StringFilter<"MesureNews"> | string;
    frequenceRespiratoire?: Prisma.IntFilter<"MesureNews"> | number;
    saturationOxygene?: Prisma.IntFilter<"MesureNews"> | number;
    oxygenoSupplementation?: Prisma.BoolFilter<"MesureNews"> | boolean;
    temperature?: Prisma.FloatFilter<"MesureNews"> | number;
    pressionArterielleSystolique?: Prisma.IntFilter<"MesureNews"> | number;
    frequenceCardiaque?: Prisma.IntFilter<"MesureNews"> | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFilter<"MesureNews"> | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFilter<"MesureNews"> | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFilter<"MesureNews"> | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFilter<"MesureNews"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"MesureNews"> | Date | string;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
    saisiePar?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    alerte?: Prisma.XOR<Prisma.AlerteNullableScalarRelationFilter, Prisma.AlerteWhereInput> | null;
};
export type MesureNewsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    saisieParId?: Prisma.SortOrder;
    frequenceRespiratoire?: Prisma.SortOrder;
    saturationOxygene?: Prisma.SortOrder;
    oxygenoSupplementation?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    pressionArterielleSystolique?: Prisma.SortOrder;
    frequenceCardiaque?: Prisma.SortOrder;
    niveauConscience?: Prisma.SortOrder;
    scoreTotal?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    dateMesure?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    patient?: Prisma.PatientOrderByWithRelationInput;
    saisiePar?: Prisma.UtilisateurOrderByWithRelationInput;
    alerte?: Prisma.AlerteOrderByWithRelationInput;
    _relevance?: Prisma.MesureNewsOrderByRelevanceInput;
};
export type MesureNewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MesureNewsWhereInput | Prisma.MesureNewsWhereInput[];
    OR?: Prisma.MesureNewsWhereInput[];
    NOT?: Prisma.MesureNewsWhereInput | Prisma.MesureNewsWhereInput[];
    patientId?: Prisma.StringFilter<"MesureNews"> | string;
    saisieParId?: Prisma.StringFilter<"MesureNews"> | string;
    frequenceRespiratoire?: Prisma.IntFilter<"MesureNews"> | number;
    saturationOxygene?: Prisma.IntFilter<"MesureNews"> | number;
    oxygenoSupplementation?: Prisma.BoolFilter<"MesureNews"> | boolean;
    temperature?: Prisma.FloatFilter<"MesureNews"> | number;
    pressionArterielleSystolique?: Prisma.IntFilter<"MesureNews"> | number;
    frequenceCardiaque?: Prisma.IntFilter<"MesureNews"> | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFilter<"MesureNews"> | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFilter<"MesureNews"> | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFilter<"MesureNews"> | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFilter<"MesureNews"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"MesureNews"> | Date | string;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
    saisiePar?: Prisma.XOR<Prisma.UtilisateurScalarRelationFilter, Prisma.UtilisateurWhereInput>;
    alerte?: Prisma.XOR<Prisma.AlerteNullableScalarRelationFilter, Prisma.AlerteWhereInput> | null;
}, "id">;
export type MesureNewsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    saisieParId?: Prisma.SortOrder;
    frequenceRespiratoire?: Prisma.SortOrder;
    saturationOxygene?: Prisma.SortOrder;
    oxygenoSupplementation?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    pressionArterielleSystolique?: Prisma.SortOrder;
    frequenceCardiaque?: Prisma.SortOrder;
    niveauConscience?: Prisma.SortOrder;
    scoreTotal?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    dateMesure?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MesureNewsCountOrderByAggregateInput;
    _avg?: Prisma.MesureNewsAvgOrderByAggregateInput;
    _max?: Prisma.MesureNewsMaxOrderByAggregateInput;
    _min?: Prisma.MesureNewsMinOrderByAggregateInput;
    _sum?: Prisma.MesureNewsSumOrderByAggregateInput;
};
export type MesureNewsScalarWhereWithAggregatesInput = {
    AND?: Prisma.MesureNewsScalarWhereWithAggregatesInput | Prisma.MesureNewsScalarWhereWithAggregatesInput[];
    OR?: Prisma.MesureNewsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MesureNewsScalarWhereWithAggregatesInput | Prisma.MesureNewsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MesureNews"> | string;
    patientId?: Prisma.StringWithAggregatesFilter<"MesureNews"> | string;
    saisieParId?: Prisma.StringWithAggregatesFilter<"MesureNews"> | string;
    frequenceRespiratoire?: Prisma.IntWithAggregatesFilter<"MesureNews"> | number;
    saturationOxygene?: Prisma.IntWithAggregatesFilter<"MesureNews"> | number;
    oxygenoSupplementation?: Prisma.BoolWithAggregatesFilter<"MesureNews"> | boolean;
    temperature?: Prisma.FloatWithAggregatesFilter<"MesureNews"> | number;
    pressionArterielleSystolique?: Prisma.IntWithAggregatesFilter<"MesureNews"> | number;
    frequenceCardiaque?: Prisma.IntWithAggregatesFilter<"MesureNews"> | number;
    niveauConscience?: Prisma.EnumNiveauConscienceWithAggregatesFilter<"MesureNews"> | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntWithAggregatesFilter<"MesureNews"> | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsWithAggregatesFilter<"MesureNews"> | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeWithAggregatesFilter<"MesureNews"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MesureNews"> | Date | string;
};
export type MesureNewsCreateInput = {
    id?: string;
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: $Enums.NiveauConscience;
    scoreTotal: number;
    niveauRisque: $Enums.NiveauRisqueNews;
    dateMesure?: Date | string;
    createdAt?: Date | string;
    patient: Prisma.PatientCreateNestedOneWithoutMesuresInput;
    saisiePar: Prisma.UtilisateurCreateNestedOneWithoutMesuresSaisiesInput;
    alerte?: Prisma.AlerteCreateNestedOneWithoutMesureInput;
};
export type MesureNewsUncheckedCreateInput = {
    id?: string;
    patientId: string;
    saisieParId: string;
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: $Enums.NiveauConscience;
    scoreTotal: number;
    niveauRisque: $Enums.NiveauRisqueNews;
    dateMesure?: Date | string;
    createdAt?: Date | string;
    alerte?: Prisma.AlerteUncheckedCreateNestedOneWithoutMesureInput;
};
export type MesureNewsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    frequenceRespiratoire?: Prisma.IntFieldUpdateOperationsInput | number;
    saturationOxygene?: Prisma.IntFieldUpdateOperationsInput | number;
    oxygenoSupplementation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    pressionArterielleSystolique?: Prisma.IntFieldUpdateOperationsInput | number;
    frequenceCardiaque?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFieldUpdateOperationsInput | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneRequiredWithoutMesuresNestedInput;
    saisiePar?: Prisma.UtilisateurUpdateOneRequiredWithoutMesuresSaisiesNestedInput;
    alerte?: Prisma.AlerteUpdateOneWithoutMesureNestedInput;
};
export type MesureNewsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    saisieParId?: Prisma.StringFieldUpdateOperationsInput | string;
    frequenceRespiratoire?: Prisma.IntFieldUpdateOperationsInput | number;
    saturationOxygene?: Prisma.IntFieldUpdateOperationsInput | number;
    oxygenoSupplementation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    pressionArterielleSystolique?: Prisma.IntFieldUpdateOperationsInput | number;
    frequenceCardiaque?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFieldUpdateOperationsInput | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alerte?: Prisma.AlerteUncheckedUpdateOneWithoutMesureNestedInput;
};
export type MesureNewsCreateManyInput = {
    id?: string;
    patientId: string;
    saisieParId: string;
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: $Enums.NiveauConscience;
    scoreTotal: number;
    niveauRisque: $Enums.NiveauRisqueNews;
    dateMesure?: Date | string;
    createdAt?: Date | string;
};
export type MesureNewsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    frequenceRespiratoire?: Prisma.IntFieldUpdateOperationsInput | number;
    saturationOxygene?: Prisma.IntFieldUpdateOperationsInput | number;
    oxygenoSupplementation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    pressionArterielleSystolique?: Prisma.IntFieldUpdateOperationsInput | number;
    frequenceCardiaque?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFieldUpdateOperationsInput | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MesureNewsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    saisieParId?: Prisma.StringFieldUpdateOperationsInput | string;
    frequenceRespiratoire?: Prisma.IntFieldUpdateOperationsInput | number;
    saturationOxygene?: Prisma.IntFieldUpdateOperationsInput | number;
    oxygenoSupplementation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    pressionArterielleSystolique?: Prisma.IntFieldUpdateOperationsInput | number;
    frequenceCardiaque?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFieldUpdateOperationsInput | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MesureNewsListRelationFilter = {
    every?: Prisma.MesureNewsWhereInput;
    some?: Prisma.MesureNewsWhereInput;
    none?: Prisma.MesureNewsWhereInput;
};
export type MesureNewsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MesureNewsOrderByRelevanceInput = {
    fields: Prisma.MesureNewsOrderByRelevanceFieldEnum | Prisma.MesureNewsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type MesureNewsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    saisieParId?: Prisma.SortOrder;
    frequenceRespiratoire?: Prisma.SortOrder;
    saturationOxygene?: Prisma.SortOrder;
    oxygenoSupplementation?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    pressionArterielleSystolique?: Prisma.SortOrder;
    frequenceCardiaque?: Prisma.SortOrder;
    niveauConscience?: Prisma.SortOrder;
    scoreTotal?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    dateMesure?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MesureNewsAvgOrderByAggregateInput = {
    frequenceRespiratoire?: Prisma.SortOrder;
    saturationOxygene?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    pressionArterielleSystolique?: Prisma.SortOrder;
    frequenceCardiaque?: Prisma.SortOrder;
    scoreTotal?: Prisma.SortOrder;
};
export type MesureNewsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    saisieParId?: Prisma.SortOrder;
    frequenceRespiratoire?: Prisma.SortOrder;
    saturationOxygene?: Prisma.SortOrder;
    oxygenoSupplementation?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    pressionArterielleSystolique?: Prisma.SortOrder;
    frequenceCardiaque?: Prisma.SortOrder;
    niveauConscience?: Prisma.SortOrder;
    scoreTotal?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    dateMesure?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MesureNewsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    saisieParId?: Prisma.SortOrder;
    frequenceRespiratoire?: Prisma.SortOrder;
    saturationOxygene?: Prisma.SortOrder;
    oxygenoSupplementation?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    pressionArterielleSystolique?: Prisma.SortOrder;
    frequenceCardiaque?: Prisma.SortOrder;
    niveauConscience?: Prisma.SortOrder;
    scoreTotal?: Prisma.SortOrder;
    niveauRisque?: Prisma.SortOrder;
    dateMesure?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MesureNewsSumOrderByAggregateInput = {
    frequenceRespiratoire?: Prisma.SortOrder;
    saturationOxygene?: Prisma.SortOrder;
    temperature?: Prisma.SortOrder;
    pressionArterielleSystolique?: Prisma.SortOrder;
    frequenceCardiaque?: Prisma.SortOrder;
    scoreTotal?: Prisma.SortOrder;
};
export type MesureNewsScalarRelationFilter = {
    is?: Prisma.MesureNewsWhereInput;
    isNot?: Prisma.MesureNewsWhereInput;
};
export type MesureNewsCreateNestedManyWithoutSaisieParInput = {
    create?: Prisma.XOR<Prisma.MesureNewsCreateWithoutSaisieParInput, Prisma.MesureNewsUncheckedCreateWithoutSaisieParInput> | Prisma.MesureNewsCreateWithoutSaisieParInput[] | Prisma.MesureNewsUncheckedCreateWithoutSaisieParInput[];
    connectOrCreate?: Prisma.MesureNewsCreateOrConnectWithoutSaisieParInput | Prisma.MesureNewsCreateOrConnectWithoutSaisieParInput[];
    createMany?: Prisma.MesureNewsCreateManySaisieParInputEnvelope;
    connect?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
};
export type MesureNewsUncheckedCreateNestedManyWithoutSaisieParInput = {
    create?: Prisma.XOR<Prisma.MesureNewsCreateWithoutSaisieParInput, Prisma.MesureNewsUncheckedCreateWithoutSaisieParInput> | Prisma.MesureNewsCreateWithoutSaisieParInput[] | Prisma.MesureNewsUncheckedCreateWithoutSaisieParInput[];
    connectOrCreate?: Prisma.MesureNewsCreateOrConnectWithoutSaisieParInput | Prisma.MesureNewsCreateOrConnectWithoutSaisieParInput[];
    createMany?: Prisma.MesureNewsCreateManySaisieParInputEnvelope;
    connect?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
};
export type MesureNewsUpdateManyWithoutSaisieParNestedInput = {
    create?: Prisma.XOR<Prisma.MesureNewsCreateWithoutSaisieParInput, Prisma.MesureNewsUncheckedCreateWithoutSaisieParInput> | Prisma.MesureNewsCreateWithoutSaisieParInput[] | Prisma.MesureNewsUncheckedCreateWithoutSaisieParInput[];
    connectOrCreate?: Prisma.MesureNewsCreateOrConnectWithoutSaisieParInput | Prisma.MesureNewsCreateOrConnectWithoutSaisieParInput[];
    upsert?: Prisma.MesureNewsUpsertWithWhereUniqueWithoutSaisieParInput | Prisma.MesureNewsUpsertWithWhereUniqueWithoutSaisieParInput[];
    createMany?: Prisma.MesureNewsCreateManySaisieParInputEnvelope;
    set?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    disconnect?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    delete?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    connect?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    update?: Prisma.MesureNewsUpdateWithWhereUniqueWithoutSaisieParInput | Prisma.MesureNewsUpdateWithWhereUniqueWithoutSaisieParInput[];
    updateMany?: Prisma.MesureNewsUpdateManyWithWhereWithoutSaisieParInput | Prisma.MesureNewsUpdateManyWithWhereWithoutSaisieParInput[];
    deleteMany?: Prisma.MesureNewsScalarWhereInput | Prisma.MesureNewsScalarWhereInput[];
};
export type MesureNewsUncheckedUpdateManyWithoutSaisieParNestedInput = {
    create?: Prisma.XOR<Prisma.MesureNewsCreateWithoutSaisieParInput, Prisma.MesureNewsUncheckedCreateWithoutSaisieParInput> | Prisma.MesureNewsCreateWithoutSaisieParInput[] | Prisma.MesureNewsUncheckedCreateWithoutSaisieParInput[];
    connectOrCreate?: Prisma.MesureNewsCreateOrConnectWithoutSaisieParInput | Prisma.MesureNewsCreateOrConnectWithoutSaisieParInput[];
    upsert?: Prisma.MesureNewsUpsertWithWhereUniqueWithoutSaisieParInput | Prisma.MesureNewsUpsertWithWhereUniqueWithoutSaisieParInput[];
    createMany?: Prisma.MesureNewsCreateManySaisieParInputEnvelope;
    set?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    disconnect?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    delete?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    connect?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    update?: Prisma.MesureNewsUpdateWithWhereUniqueWithoutSaisieParInput | Prisma.MesureNewsUpdateWithWhereUniqueWithoutSaisieParInput[];
    updateMany?: Prisma.MesureNewsUpdateManyWithWhereWithoutSaisieParInput | Prisma.MesureNewsUpdateManyWithWhereWithoutSaisieParInput[];
    deleteMany?: Prisma.MesureNewsScalarWhereInput | Prisma.MesureNewsScalarWhereInput[];
};
export type MesureNewsCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.MesureNewsCreateWithoutPatientInput, Prisma.MesureNewsUncheckedCreateWithoutPatientInput> | Prisma.MesureNewsCreateWithoutPatientInput[] | Prisma.MesureNewsUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.MesureNewsCreateOrConnectWithoutPatientInput | Prisma.MesureNewsCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.MesureNewsCreateManyPatientInputEnvelope;
    connect?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
};
export type MesureNewsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.MesureNewsCreateWithoutPatientInput, Prisma.MesureNewsUncheckedCreateWithoutPatientInput> | Prisma.MesureNewsCreateWithoutPatientInput[] | Prisma.MesureNewsUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.MesureNewsCreateOrConnectWithoutPatientInput | Prisma.MesureNewsCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.MesureNewsCreateManyPatientInputEnvelope;
    connect?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
};
export type MesureNewsUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.MesureNewsCreateWithoutPatientInput, Prisma.MesureNewsUncheckedCreateWithoutPatientInput> | Prisma.MesureNewsCreateWithoutPatientInput[] | Prisma.MesureNewsUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.MesureNewsCreateOrConnectWithoutPatientInput | Prisma.MesureNewsCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.MesureNewsUpsertWithWhereUniqueWithoutPatientInput | Prisma.MesureNewsUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.MesureNewsCreateManyPatientInputEnvelope;
    set?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    disconnect?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    delete?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    connect?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    update?: Prisma.MesureNewsUpdateWithWhereUniqueWithoutPatientInput | Prisma.MesureNewsUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.MesureNewsUpdateManyWithWhereWithoutPatientInput | Prisma.MesureNewsUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.MesureNewsScalarWhereInput | Prisma.MesureNewsScalarWhereInput[];
};
export type MesureNewsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.MesureNewsCreateWithoutPatientInput, Prisma.MesureNewsUncheckedCreateWithoutPatientInput> | Prisma.MesureNewsCreateWithoutPatientInput[] | Prisma.MesureNewsUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.MesureNewsCreateOrConnectWithoutPatientInput | Prisma.MesureNewsCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.MesureNewsUpsertWithWhereUniqueWithoutPatientInput | Prisma.MesureNewsUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.MesureNewsCreateManyPatientInputEnvelope;
    set?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    disconnect?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    delete?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    connect?: Prisma.MesureNewsWhereUniqueInput | Prisma.MesureNewsWhereUniqueInput[];
    update?: Prisma.MesureNewsUpdateWithWhereUniqueWithoutPatientInput | Prisma.MesureNewsUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.MesureNewsUpdateManyWithWhereWithoutPatientInput | Prisma.MesureNewsUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.MesureNewsScalarWhereInput | Prisma.MesureNewsScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumNiveauConscienceFieldUpdateOperationsInput = {
    set?: $Enums.NiveauConscience;
};
export type EnumNiveauRisqueNewsFieldUpdateOperationsInput = {
    set?: $Enums.NiveauRisqueNews;
};
export type MesureNewsCreateNestedOneWithoutAlerteInput = {
    create?: Prisma.XOR<Prisma.MesureNewsCreateWithoutAlerteInput, Prisma.MesureNewsUncheckedCreateWithoutAlerteInput>;
    connectOrCreate?: Prisma.MesureNewsCreateOrConnectWithoutAlerteInput;
    connect?: Prisma.MesureNewsWhereUniqueInput;
};
export type MesureNewsUpdateOneRequiredWithoutAlerteNestedInput = {
    create?: Prisma.XOR<Prisma.MesureNewsCreateWithoutAlerteInput, Prisma.MesureNewsUncheckedCreateWithoutAlerteInput>;
    connectOrCreate?: Prisma.MesureNewsCreateOrConnectWithoutAlerteInput;
    upsert?: Prisma.MesureNewsUpsertWithoutAlerteInput;
    connect?: Prisma.MesureNewsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MesureNewsUpdateToOneWithWhereWithoutAlerteInput, Prisma.MesureNewsUpdateWithoutAlerteInput>, Prisma.MesureNewsUncheckedUpdateWithoutAlerteInput>;
};
export type MesureNewsCreateWithoutSaisieParInput = {
    id?: string;
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: $Enums.NiveauConscience;
    scoreTotal: number;
    niveauRisque: $Enums.NiveauRisqueNews;
    dateMesure?: Date | string;
    createdAt?: Date | string;
    patient: Prisma.PatientCreateNestedOneWithoutMesuresInput;
    alerte?: Prisma.AlerteCreateNestedOneWithoutMesureInput;
};
export type MesureNewsUncheckedCreateWithoutSaisieParInput = {
    id?: string;
    patientId: string;
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: $Enums.NiveauConscience;
    scoreTotal: number;
    niveauRisque: $Enums.NiveauRisqueNews;
    dateMesure?: Date | string;
    createdAt?: Date | string;
    alerte?: Prisma.AlerteUncheckedCreateNestedOneWithoutMesureInput;
};
export type MesureNewsCreateOrConnectWithoutSaisieParInput = {
    where: Prisma.MesureNewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.MesureNewsCreateWithoutSaisieParInput, Prisma.MesureNewsUncheckedCreateWithoutSaisieParInput>;
};
export type MesureNewsCreateManySaisieParInputEnvelope = {
    data: Prisma.MesureNewsCreateManySaisieParInput | Prisma.MesureNewsCreateManySaisieParInput[];
    skipDuplicates?: boolean;
};
export type MesureNewsUpsertWithWhereUniqueWithoutSaisieParInput = {
    where: Prisma.MesureNewsWhereUniqueInput;
    update: Prisma.XOR<Prisma.MesureNewsUpdateWithoutSaisieParInput, Prisma.MesureNewsUncheckedUpdateWithoutSaisieParInput>;
    create: Prisma.XOR<Prisma.MesureNewsCreateWithoutSaisieParInput, Prisma.MesureNewsUncheckedCreateWithoutSaisieParInput>;
};
export type MesureNewsUpdateWithWhereUniqueWithoutSaisieParInput = {
    where: Prisma.MesureNewsWhereUniqueInput;
    data: Prisma.XOR<Prisma.MesureNewsUpdateWithoutSaisieParInput, Prisma.MesureNewsUncheckedUpdateWithoutSaisieParInput>;
};
export type MesureNewsUpdateManyWithWhereWithoutSaisieParInput = {
    where: Prisma.MesureNewsScalarWhereInput;
    data: Prisma.XOR<Prisma.MesureNewsUpdateManyMutationInput, Prisma.MesureNewsUncheckedUpdateManyWithoutSaisieParInput>;
};
export type MesureNewsScalarWhereInput = {
    AND?: Prisma.MesureNewsScalarWhereInput | Prisma.MesureNewsScalarWhereInput[];
    OR?: Prisma.MesureNewsScalarWhereInput[];
    NOT?: Prisma.MesureNewsScalarWhereInput | Prisma.MesureNewsScalarWhereInput[];
    id?: Prisma.StringFilter<"MesureNews"> | string;
    patientId?: Prisma.StringFilter<"MesureNews"> | string;
    saisieParId?: Prisma.StringFilter<"MesureNews"> | string;
    frequenceRespiratoire?: Prisma.IntFilter<"MesureNews"> | number;
    saturationOxygene?: Prisma.IntFilter<"MesureNews"> | number;
    oxygenoSupplementation?: Prisma.BoolFilter<"MesureNews"> | boolean;
    temperature?: Prisma.FloatFilter<"MesureNews"> | number;
    pressionArterielleSystolique?: Prisma.IntFilter<"MesureNews"> | number;
    frequenceCardiaque?: Prisma.IntFilter<"MesureNews"> | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFilter<"MesureNews"> | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFilter<"MesureNews"> | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFilter<"MesureNews"> | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFilter<"MesureNews"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"MesureNews"> | Date | string;
};
export type MesureNewsCreateWithoutPatientInput = {
    id?: string;
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: $Enums.NiveauConscience;
    scoreTotal: number;
    niveauRisque: $Enums.NiveauRisqueNews;
    dateMesure?: Date | string;
    createdAt?: Date | string;
    saisiePar: Prisma.UtilisateurCreateNestedOneWithoutMesuresSaisiesInput;
    alerte?: Prisma.AlerteCreateNestedOneWithoutMesureInput;
};
export type MesureNewsUncheckedCreateWithoutPatientInput = {
    id?: string;
    saisieParId: string;
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: $Enums.NiveauConscience;
    scoreTotal: number;
    niveauRisque: $Enums.NiveauRisqueNews;
    dateMesure?: Date | string;
    createdAt?: Date | string;
    alerte?: Prisma.AlerteUncheckedCreateNestedOneWithoutMesureInput;
};
export type MesureNewsCreateOrConnectWithoutPatientInput = {
    where: Prisma.MesureNewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.MesureNewsCreateWithoutPatientInput, Prisma.MesureNewsUncheckedCreateWithoutPatientInput>;
};
export type MesureNewsCreateManyPatientInputEnvelope = {
    data: Prisma.MesureNewsCreateManyPatientInput | Prisma.MesureNewsCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type MesureNewsUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.MesureNewsWhereUniqueInput;
    update: Prisma.XOR<Prisma.MesureNewsUpdateWithoutPatientInput, Prisma.MesureNewsUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.MesureNewsCreateWithoutPatientInput, Prisma.MesureNewsUncheckedCreateWithoutPatientInput>;
};
export type MesureNewsUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.MesureNewsWhereUniqueInput;
    data: Prisma.XOR<Prisma.MesureNewsUpdateWithoutPatientInput, Prisma.MesureNewsUncheckedUpdateWithoutPatientInput>;
};
export type MesureNewsUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.MesureNewsScalarWhereInput;
    data: Prisma.XOR<Prisma.MesureNewsUpdateManyMutationInput, Prisma.MesureNewsUncheckedUpdateManyWithoutPatientInput>;
};
export type MesureNewsCreateWithoutAlerteInput = {
    id?: string;
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: $Enums.NiveauConscience;
    scoreTotal: number;
    niveauRisque: $Enums.NiveauRisqueNews;
    dateMesure?: Date | string;
    createdAt?: Date | string;
    patient: Prisma.PatientCreateNestedOneWithoutMesuresInput;
    saisiePar: Prisma.UtilisateurCreateNestedOneWithoutMesuresSaisiesInput;
};
export type MesureNewsUncheckedCreateWithoutAlerteInput = {
    id?: string;
    patientId: string;
    saisieParId: string;
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: $Enums.NiveauConscience;
    scoreTotal: number;
    niveauRisque: $Enums.NiveauRisqueNews;
    dateMesure?: Date | string;
    createdAt?: Date | string;
};
export type MesureNewsCreateOrConnectWithoutAlerteInput = {
    where: Prisma.MesureNewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.MesureNewsCreateWithoutAlerteInput, Prisma.MesureNewsUncheckedCreateWithoutAlerteInput>;
};
export type MesureNewsUpsertWithoutAlerteInput = {
    update: Prisma.XOR<Prisma.MesureNewsUpdateWithoutAlerteInput, Prisma.MesureNewsUncheckedUpdateWithoutAlerteInput>;
    create: Prisma.XOR<Prisma.MesureNewsCreateWithoutAlerteInput, Prisma.MesureNewsUncheckedCreateWithoutAlerteInput>;
    where?: Prisma.MesureNewsWhereInput;
};
export type MesureNewsUpdateToOneWithWhereWithoutAlerteInput = {
    where?: Prisma.MesureNewsWhereInput;
    data: Prisma.XOR<Prisma.MesureNewsUpdateWithoutAlerteInput, Prisma.MesureNewsUncheckedUpdateWithoutAlerteInput>;
};
export type MesureNewsUpdateWithoutAlerteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    frequenceRespiratoire?: Prisma.IntFieldUpdateOperationsInput | number;
    saturationOxygene?: Prisma.IntFieldUpdateOperationsInput | number;
    oxygenoSupplementation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    pressionArterielleSystolique?: Prisma.IntFieldUpdateOperationsInput | number;
    frequenceCardiaque?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFieldUpdateOperationsInput | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneRequiredWithoutMesuresNestedInput;
    saisiePar?: Prisma.UtilisateurUpdateOneRequiredWithoutMesuresSaisiesNestedInput;
};
export type MesureNewsUncheckedUpdateWithoutAlerteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    saisieParId?: Prisma.StringFieldUpdateOperationsInput | string;
    frequenceRespiratoire?: Prisma.IntFieldUpdateOperationsInput | number;
    saturationOxygene?: Prisma.IntFieldUpdateOperationsInput | number;
    oxygenoSupplementation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    pressionArterielleSystolique?: Prisma.IntFieldUpdateOperationsInput | number;
    frequenceCardiaque?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFieldUpdateOperationsInput | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MesureNewsCreateManySaisieParInput = {
    id?: string;
    patientId: string;
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: $Enums.NiveauConscience;
    scoreTotal: number;
    niveauRisque: $Enums.NiveauRisqueNews;
    dateMesure?: Date | string;
    createdAt?: Date | string;
};
export type MesureNewsUpdateWithoutSaisieParInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    frequenceRespiratoire?: Prisma.IntFieldUpdateOperationsInput | number;
    saturationOxygene?: Prisma.IntFieldUpdateOperationsInput | number;
    oxygenoSupplementation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    pressionArterielleSystolique?: Prisma.IntFieldUpdateOperationsInput | number;
    frequenceCardiaque?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFieldUpdateOperationsInput | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneRequiredWithoutMesuresNestedInput;
    alerte?: Prisma.AlerteUpdateOneWithoutMesureNestedInput;
};
export type MesureNewsUncheckedUpdateWithoutSaisieParInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    frequenceRespiratoire?: Prisma.IntFieldUpdateOperationsInput | number;
    saturationOxygene?: Prisma.IntFieldUpdateOperationsInput | number;
    oxygenoSupplementation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    pressionArterielleSystolique?: Prisma.IntFieldUpdateOperationsInput | number;
    frequenceCardiaque?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFieldUpdateOperationsInput | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alerte?: Prisma.AlerteUncheckedUpdateOneWithoutMesureNestedInput;
};
export type MesureNewsUncheckedUpdateManyWithoutSaisieParInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    frequenceRespiratoire?: Prisma.IntFieldUpdateOperationsInput | number;
    saturationOxygene?: Prisma.IntFieldUpdateOperationsInput | number;
    oxygenoSupplementation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    pressionArterielleSystolique?: Prisma.IntFieldUpdateOperationsInput | number;
    frequenceCardiaque?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFieldUpdateOperationsInput | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MesureNewsCreateManyPatientInput = {
    id?: string;
    saisieParId: string;
    frequenceRespiratoire: number;
    saturationOxygene: number;
    oxygenoSupplementation: boolean;
    temperature: number;
    pressionArterielleSystolique: number;
    frequenceCardiaque: number;
    niveauConscience: $Enums.NiveauConscience;
    scoreTotal: number;
    niveauRisque: $Enums.NiveauRisqueNews;
    dateMesure?: Date | string;
    createdAt?: Date | string;
};
export type MesureNewsUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    frequenceRespiratoire?: Prisma.IntFieldUpdateOperationsInput | number;
    saturationOxygene?: Prisma.IntFieldUpdateOperationsInput | number;
    oxygenoSupplementation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    pressionArterielleSystolique?: Prisma.IntFieldUpdateOperationsInput | number;
    frequenceCardiaque?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFieldUpdateOperationsInput | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saisiePar?: Prisma.UtilisateurUpdateOneRequiredWithoutMesuresSaisiesNestedInput;
    alerte?: Prisma.AlerteUpdateOneWithoutMesureNestedInput;
};
export type MesureNewsUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    saisieParId?: Prisma.StringFieldUpdateOperationsInput | string;
    frequenceRespiratoire?: Prisma.IntFieldUpdateOperationsInput | number;
    saturationOxygene?: Prisma.IntFieldUpdateOperationsInput | number;
    oxygenoSupplementation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    pressionArterielleSystolique?: Prisma.IntFieldUpdateOperationsInput | number;
    frequenceCardiaque?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFieldUpdateOperationsInput | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alerte?: Prisma.AlerteUncheckedUpdateOneWithoutMesureNestedInput;
};
export type MesureNewsUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    saisieParId?: Prisma.StringFieldUpdateOperationsInput | string;
    frequenceRespiratoire?: Prisma.IntFieldUpdateOperationsInput | number;
    saturationOxygene?: Prisma.IntFieldUpdateOperationsInput | number;
    oxygenoSupplementation?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    temperature?: Prisma.FloatFieldUpdateOperationsInput | number;
    pressionArterielleSystolique?: Prisma.IntFieldUpdateOperationsInput | number;
    frequenceCardiaque?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauConscience?: Prisma.EnumNiveauConscienceFieldUpdateOperationsInput | $Enums.NiveauConscience;
    scoreTotal?: Prisma.IntFieldUpdateOperationsInput | number;
    niveauRisque?: Prisma.EnumNiveauRisqueNewsFieldUpdateOperationsInput | $Enums.NiveauRisqueNews;
    dateMesure?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MesureNewsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patientId?: boolean;
    saisieParId?: boolean;
    frequenceRespiratoire?: boolean;
    saturationOxygene?: boolean;
    oxygenoSupplementation?: boolean;
    temperature?: boolean;
    pressionArterielleSystolique?: boolean;
    frequenceCardiaque?: boolean;
    niveauConscience?: boolean;
    scoreTotal?: boolean;
    niveauRisque?: boolean;
    dateMesure?: boolean;
    createdAt?: boolean;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    saisiePar?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    alerte?: boolean | Prisma.MesureNews$alerteArgs<ExtArgs>;
}, ExtArgs["result"]["mesureNews"]>;
export type MesureNewsSelectScalar = {
    id?: boolean;
    patientId?: boolean;
    saisieParId?: boolean;
    frequenceRespiratoire?: boolean;
    saturationOxygene?: boolean;
    oxygenoSupplementation?: boolean;
    temperature?: boolean;
    pressionArterielleSystolique?: boolean;
    frequenceCardiaque?: boolean;
    niveauConscience?: boolean;
    scoreTotal?: boolean;
    niveauRisque?: boolean;
    dateMesure?: boolean;
    createdAt?: boolean;
};
export type MesureNewsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "patientId" | "saisieParId" | "frequenceRespiratoire" | "saturationOxygene" | "oxygenoSupplementation" | "temperature" | "pressionArterielleSystolique" | "frequenceCardiaque" | "niveauConscience" | "scoreTotal" | "niveauRisque" | "dateMesure" | "createdAt", ExtArgs["result"]["mesureNews"]>;
export type MesureNewsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
    saisiePar?: boolean | Prisma.UtilisateurDefaultArgs<ExtArgs>;
    alerte?: boolean | Prisma.MesureNews$alerteArgs<ExtArgs>;
};
export type $MesureNewsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MesureNews";
    objects: {
        patient: Prisma.$PatientPayload<ExtArgs>;
        saisiePar: Prisma.$UtilisateurPayload<ExtArgs>;
        alerte: Prisma.$AlertePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        patientId: string;
        saisieParId: string;
        frequenceRespiratoire: number;
        saturationOxygene: number;
        oxygenoSupplementation: boolean;
        temperature: number;
        pressionArterielleSystolique: number;
        frequenceCardiaque: number;
        niveauConscience: $Enums.NiveauConscience;
        scoreTotal: number;
        niveauRisque: $Enums.NiveauRisqueNews;
        dateMesure: Date;
        createdAt: Date;
    }, ExtArgs["result"]["mesureNews"]>;
    composites: {};
};
export type MesureNewsGetPayload<S extends boolean | null | undefined | MesureNewsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MesureNewsPayload, S>;
export type MesureNewsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MesureNewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MesureNewsCountAggregateInputType | true;
};
export interface MesureNewsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MesureNews'];
        meta: {
            name: 'MesureNews';
        };
    };
    findUnique<T extends MesureNewsFindUniqueArgs>(args: Prisma.SelectSubset<T, MesureNewsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MesureNewsClient<runtime.Types.Result.GetResult<Prisma.$MesureNewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MesureNewsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MesureNewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MesureNewsClient<runtime.Types.Result.GetResult<Prisma.$MesureNewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MesureNewsFindFirstArgs>(args?: Prisma.SelectSubset<T, MesureNewsFindFirstArgs<ExtArgs>>): Prisma.Prisma__MesureNewsClient<runtime.Types.Result.GetResult<Prisma.$MesureNewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MesureNewsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MesureNewsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MesureNewsClient<runtime.Types.Result.GetResult<Prisma.$MesureNewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MesureNewsFindManyArgs>(args?: Prisma.SelectSubset<T, MesureNewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MesureNewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MesureNewsCreateArgs>(args: Prisma.SelectSubset<T, MesureNewsCreateArgs<ExtArgs>>): Prisma.Prisma__MesureNewsClient<runtime.Types.Result.GetResult<Prisma.$MesureNewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MesureNewsCreateManyArgs>(args?: Prisma.SelectSubset<T, MesureNewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MesureNewsDeleteArgs>(args: Prisma.SelectSubset<T, MesureNewsDeleteArgs<ExtArgs>>): Prisma.Prisma__MesureNewsClient<runtime.Types.Result.GetResult<Prisma.$MesureNewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MesureNewsUpdateArgs>(args: Prisma.SelectSubset<T, MesureNewsUpdateArgs<ExtArgs>>): Prisma.Prisma__MesureNewsClient<runtime.Types.Result.GetResult<Prisma.$MesureNewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MesureNewsDeleteManyArgs>(args?: Prisma.SelectSubset<T, MesureNewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MesureNewsUpdateManyArgs>(args: Prisma.SelectSubset<T, MesureNewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MesureNewsUpsertArgs>(args: Prisma.SelectSubset<T, MesureNewsUpsertArgs<ExtArgs>>): Prisma.Prisma__MesureNewsClient<runtime.Types.Result.GetResult<Prisma.$MesureNewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MesureNewsCountArgs>(args?: Prisma.Subset<T, MesureNewsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MesureNewsCountAggregateOutputType> : number>;
    aggregate<T extends MesureNewsAggregateArgs>(args: Prisma.Subset<T, MesureNewsAggregateArgs>): Prisma.PrismaPromise<GetMesureNewsAggregateType<T>>;
    groupBy<T extends MesureNewsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MesureNewsGroupByArgs['orderBy'];
    } : {
        orderBy?: MesureNewsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MesureNewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMesureNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MesureNewsFieldRefs;
}
export interface Prisma__MesureNewsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patient<T extends Prisma.PatientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    saisiePar<T extends Prisma.UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UtilisateurDefaultArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    alerte<T extends Prisma.MesureNews$alerteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MesureNews$alerteArgs<ExtArgs>>): Prisma.Prisma__AlerteClient<runtime.Types.Result.GetResult<Prisma.$AlertePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MesureNewsFieldRefs {
    readonly id: Prisma.FieldRef<"MesureNews", 'String'>;
    readonly patientId: Prisma.FieldRef<"MesureNews", 'String'>;
    readonly saisieParId: Prisma.FieldRef<"MesureNews", 'String'>;
    readonly frequenceRespiratoire: Prisma.FieldRef<"MesureNews", 'Int'>;
    readonly saturationOxygene: Prisma.FieldRef<"MesureNews", 'Int'>;
    readonly oxygenoSupplementation: Prisma.FieldRef<"MesureNews", 'Boolean'>;
    readonly temperature: Prisma.FieldRef<"MesureNews", 'Float'>;
    readonly pressionArterielleSystolique: Prisma.FieldRef<"MesureNews", 'Int'>;
    readonly frequenceCardiaque: Prisma.FieldRef<"MesureNews", 'Int'>;
    readonly niveauConscience: Prisma.FieldRef<"MesureNews", 'NiveauConscience'>;
    readonly scoreTotal: Prisma.FieldRef<"MesureNews", 'Int'>;
    readonly niveauRisque: Prisma.FieldRef<"MesureNews", 'NiveauRisqueNews'>;
    readonly dateMesure: Prisma.FieldRef<"MesureNews", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"MesureNews", 'DateTime'>;
}
export type MesureNewsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesureNewsSelect<ExtArgs> | null;
    omit?: Prisma.MesureNewsOmit<ExtArgs> | null;
    include?: Prisma.MesureNewsInclude<ExtArgs> | null;
    where: Prisma.MesureNewsWhereUniqueInput;
};
export type MesureNewsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesureNewsSelect<ExtArgs> | null;
    omit?: Prisma.MesureNewsOmit<ExtArgs> | null;
    include?: Prisma.MesureNewsInclude<ExtArgs> | null;
    where: Prisma.MesureNewsWhereUniqueInput;
};
export type MesureNewsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MesureNewsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MesureNewsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MesureNewsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesureNewsSelect<ExtArgs> | null;
    omit?: Prisma.MesureNewsOmit<ExtArgs> | null;
    include?: Prisma.MesureNewsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MesureNewsCreateInput, Prisma.MesureNewsUncheckedCreateInput>;
};
export type MesureNewsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MesureNewsCreateManyInput | Prisma.MesureNewsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MesureNewsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesureNewsSelect<ExtArgs> | null;
    omit?: Prisma.MesureNewsOmit<ExtArgs> | null;
    include?: Prisma.MesureNewsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MesureNewsUpdateInput, Prisma.MesureNewsUncheckedUpdateInput>;
    where: Prisma.MesureNewsWhereUniqueInput;
};
export type MesureNewsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MesureNewsUpdateManyMutationInput, Prisma.MesureNewsUncheckedUpdateManyInput>;
    where?: Prisma.MesureNewsWhereInput;
    limit?: number;
};
export type MesureNewsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesureNewsSelect<ExtArgs> | null;
    omit?: Prisma.MesureNewsOmit<ExtArgs> | null;
    include?: Prisma.MesureNewsInclude<ExtArgs> | null;
    where: Prisma.MesureNewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.MesureNewsCreateInput, Prisma.MesureNewsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MesureNewsUpdateInput, Prisma.MesureNewsUncheckedUpdateInput>;
};
export type MesureNewsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesureNewsSelect<ExtArgs> | null;
    omit?: Prisma.MesureNewsOmit<ExtArgs> | null;
    include?: Prisma.MesureNewsInclude<ExtArgs> | null;
    where: Prisma.MesureNewsWhereUniqueInput;
};
export type MesureNewsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MesureNewsWhereInput;
    limit?: number;
};
export type MesureNews$alerteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AlerteSelect<ExtArgs> | null;
    omit?: Prisma.AlerteOmit<ExtArgs> | null;
    include?: Prisma.AlerteInclude<ExtArgs> | null;
    where?: Prisma.AlerteWhereInput;
};
export type MesureNewsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MesureNewsSelect<ExtArgs> | null;
    omit?: Prisma.MesureNewsOmit<ExtArgs> | null;
    include?: Prisma.MesureNewsInclude<ExtArgs> | null;
};
