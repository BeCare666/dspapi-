import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type EnumTypeEtablissementFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEtablissement | Prisma.EnumTypeEtablissementFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeEtablissement[];
    notIn?: $Enums.TypeEtablissement[];
    not?: Prisma.NestedEnumTypeEtablissementFilter<$PrismaModel> | $Enums.TypeEtablissement;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type EnumTypeEtablissementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEtablissement | Prisma.EnumTypeEtablissementFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeEtablissement[];
    notIn?: $Enums.TypeEtablissement[];
    not?: Prisma.NestedEnumTypeEtablissementWithAggregatesFilter<$PrismaModel> | $Enums.TypeEtablissement;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeEtablissementFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeEtablissementFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumTypeCompteFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCompte | Prisma.EnumTypeCompteFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeCompte[];
    notIn?: $Enums.TypeCompte[];
    not?: Prisma.NestedEnumTypeCompteFilter<$PrismaModel> | $Enums.TypeCompte;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type EnumTypeCompteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCompte | Prisma.EnumTypeCompteFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeCompte[];
    notIn?: $Enums.TypeCompte[];
    not?: Prisma.NestedEnumTypeCompteWithAggregatesFilter<$PrismaModel> | $Enums.TypeCompte;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeCompteFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeCompteFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumRoleUtilisateurFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUtilisateur | Prisma.EnumRoleUtilisateurFieldRefInput<$PrismaModel>;
    in?: $Enums.RoleUtilisateur[];
    notIn?: $Enums.RoleUtilisateur[];
    not?: Prisma.NestedEnumRoleUtilisateurFilter<$PrismaModel> | $Enums.RoleUtilisateur;
};
export type EnumRoleUtilisateurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUtilisateur | Prisma.EnumRoleUtilisateurFieldRefInput<$PrismaModel>;
    in?: $Enums.RoleUtilisateur[];
    notIn?: $Enums.RoleUtilisateur[];
    not?: Prisma.NestedEnumRoleUtilisateurWithAggregatesFilter<$PrismaModel> | $Enums.RoleUtilisateur;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleUtilisateurFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleUtilisateurFilter<$PrismaModel>;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string;
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue;
    lte?: runtime.InputJsonValue;
    gt?: runtime.InputJsonValue;
    gte?: runtime.InputJsonValue;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string;
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue;
    lte?: runtime.InputJsonValue;
    gt?: runtime.InputJsonValue;
    gte?: runtime.InputJsonValue;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumStatutGrilleFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutGrille | Prisma.EnumStatutGrilleFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutGrille[];
    notIn?: $Enums.StatutGrille[];
    not?: Prisma.NestedEnumStatutGrilleFilter<$PrismaModel> | $Enums.StatutGrille;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumStatutGrilleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutGrille | Prisma.EnumStatutGrilleFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutGrille[];
    notIn?: $Enums.StatutGrille[];
    not?: Prisma.NestedEnumStatutGrilleWithAggregatesFilter<$PrismaModel> | $Enums.StatutGrille;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutGrilleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutGrilleFilter<$PrismaModel>;
};
export type EnumTypeReponseFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeReponse | Prisma.EnumTypeReponseFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeReponse[];
    notIn?: $Enums.TypeReponse[];
    not?: Prisma.NestedEnumTypeReponseFilter<$PrismaModel> | $Enums.TypeReponse;
};
export type EnumTypeReponseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeReponse | Prisma.EnumTypeReponseFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeReponse[];
    notIn?: $Enums.TypeReponse[];
    not?: Prisma.NestedEnumTypeReponseWithAggregatesFilter<$PrismaModel> | $Enums.TypeReponse;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeReponseFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeReponseFilter<$PrismaModel>;
};
export type EnumStatutSessionEvaluationFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutSessionEvaluation | Prisma.EnumStatutSessionEvaluationFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutSessionEvaluation[];
    notIn?: $Enums.StatutSessionEvaluation[];
    not?: Prisma.NestedEnumStatutSessionEvaluationFilter<$PrismaModel> | $Enums.StatutSessionEvaluation;
};
export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type EnumStatutSessionEvaluationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutSessionEvaluation | Prisma.EnumStatutSessionEvaluationFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutSessionEvaluation[];
    notIn?: $Enums.StatutSessionEvaluation[];
    not?: Prisma.NestedEnumStatutSessionEvaluationWithAggregatesFilter<$PrismaModel> | $Enums.StatutSessionEvaluation;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutSessionEvaluationFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutSessionEvaluationFilter<$PrismaModel>;
};
export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type JsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>, Required<JsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
export type JsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string;
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue;
    lte?: runtime.InputJsonValue;
    gt?: runtime.InputJsonValue;
    gte?: runtime.InputJsonValue;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type JsonWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string;
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue;
    lte?: runtime.InputJsonValue;
    gt?: runtime.InputJsonValue;
    gte?: runtime.InputJsonValue;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonFilter<$PrismaModel>;
};
export type EnumStatutRapportPdfFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutRapportPdf | Prisma.EnumStatutRapportPdfFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutRapportPdf[];
    notIn?: $Enums.StatutRapportPdf[];
    not?: Prisma.NestedEnumStatutRapportPdfFilter<$PrismaModel> | $Enums.StatutRapportPdf;
};
export type EnumStatutRapportPdfWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutRapportPdf | Prisma.EnumStatutRapportPdfFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutRapportPdf[];
    notIn?: $Enums.StatutRapportPdf[];
    not?: Prisma.NestedEnumStatutRapportPdfWithAggregatesFilter<$PrismaModel> | $Enums.StatutRapportPdf;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutRapportPdfFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutRapportPdfFilter<$PrismaModel>;
};
export type EnumModuleMetierFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleMetier | Prisma.EnumModuleMetierFieldRefInput<$PrismaModel>;
    in?: $Enums.ModuleMetier[];
    notIn?: $Enums.ModuleMetier[];
    not?: Prisma.NestedEnumModuleMetierFilter<$PrismaModel> | $Enums.ModuleMetier;
};
export type EnumStatutAbonnementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAbonnement | Prisma.EnumStatutAbonnementFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutAbonnement[];
    notIn?: $Enums.StatutAbonnement[];
    not?: Prisma.NestedEnumStatutAbonnementFilter<$PrismaModel> | $Enums.StatutAbonnement;
};
export type EnumModuleMetierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleMetier | Prisma.EnumModuleMetierFieldRefInput<$PrismaModel>;
    in?: $Enums.ModuleMetier[];
    notIn?: $Enums.ModuleMetier[];
    not?: Prisma.NestedEnumModuleMetierWithAggregatesFilter<$PrismaModel> | $Enums.ModuleMetier;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumModuleMetierFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumModuleMetierFilter<$PrismaModel>;
};
export type EnumStatutAbonnementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAbonnement | Prisma.EnumStatutAbonnementFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutAbonnement[];
    notIn?: $Enums.StatutAbonnement[];
    not?: Prisma.NestedEnumStatutAbonnementWithAggregatesFilter<$PrismaModel> | $Enums.StatutAbonnement;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutAbonnementFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutAbonnementFilter<$PrismaModel>;
};
export type EnumStatutPatientFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPatient | Prisma.EnumStatutPatientFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutPatient[];
    notIn?: $Enums.StatutPatient[];
    not?: Prisma.NestedEnumStatutPatientFilter<$PrismaModel> | $Enums.StatutPatient;
};
export type EnumStatutPatientWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPatient | Prisma.EnumStatutPatientFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutPatient[];
    notIn?: $Enums.StatutPatient[];
    not?: Prisma.NestedEnumStatutPatientWithAggregatesFilter<$PrismaModel> | $Enums.StatutPatient;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutPatientFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutPatientFilter<$PrismaModel>;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type EnumNiveauConscienceFilter<$PrismaModel = never> = {
    equals?: $Enums.NiveauConscience | Prisma.EnumNiveauConscienceFieldRefInput<$PrismaModel>;
    in?: $Enums.NiveauConscience[];
    notIn?: $Enums.NiveauConscience[];
    not?: Prisma.NestedEnumNiveauConscienceFilter<$PrismaModel> | $Enums.NiveauConscience;
};
export type EnumNiveauRisqueNewsFilter<$PrismaModel = never> = {
    equals?: $Enums.NiveauRisqueNews | Prisma.EnumNiveauRisqueNewsFieldRefInput<$PrismaModel>;
    in?: $Enums.NiveauRisqueNews[];
    notIn?: $Enums.NiveauRisqueNews[];
    not?: Prisma.NestedEnumNiveauRisqueNewsFilter<$PrismaModel> | $Enums.NiveauRisqueNews;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type EnumNiveauConscienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NiveauConscience | Prisma.EnumNiveauConscienceFieldRefInput<$PrismaModel>;
    in?: $Enums.NiveauConscience[];
    notIn?: $Enums.NiveauConscience[];
    not?: Prisma.NestedEnumNiveauConscienceWithAggregatesFilter<$PrismaModel> | $Enums.NiveauConscience;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNiveauConscienceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNiveauConscienceFilter<$PrismaModel>;
};
export type EnumNiveauRisqueNewsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NiveauRisqueNews | Prisma.EnumNiveauRisqueNewsFieldRefInput<$PrismaModel>;
    in?: $Enums.NiveauRisqueNews[];
    notIn?: $Enums.NiveauRisqueNews[];
    not?: Prisma.NestedEnumNiveauRisqueNewsWithAggregatesFilter<$PrismaModel> | $Enums.NiveauRisqueNews;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNiveauRisqueNewsFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNiveauRisqueNewsFilter<$PrismaModel>;
};
export type EnumStatutAlerteFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAlerte | Prisma.EnumStatutAlerteFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutAlerte[];
    notIn?: $Enums.StatutAlerte[];
    not?: Prisma.NestedEnumStatutAlerteFilter<$PrismaModel> | $Enums.StatutAlerte;
};
export type EnumStatutAlerteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAlerte | Prisma.EnumStatutAlerteFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutAlerte[];
    notIn?: $Enums.StatutAlerte[];
    not?: Prisma.NestedEnumStatutAlerteWithAggregatesFilter<$PrismaModel> | $Enums.StatutAlerte;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutAlerteFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutAlerteFilter<$PrismaModel>;
};
export type EnumGraviteEiNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GraviteEi | Prisma.EnumGraviteEiFieldRefInput<$PrismaModel> | null;
    in?: $Enums.GraviteEi[] | null;
    notIn?: $Enums.GraviteEi[] | null;
    not?: Prisma.NestedEnumGraviteEiNullableFilter<$PrismaModel> | $Enums.GraviteEi | null;
};
export type EnumStatutEiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutEi | Prisma.EnumStatutEiFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutEi[];
    notIn?: $Enums.StatutEi[];
    not?: Prisma.NestedEnumStatutEiFilter<$PrismaModel> | $Enums.StatutEi;
};
export type EnumGraviteEiNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GraviteEi | Prisma.EnumGraviteEiFieldRefInput<$PrismaModel> | null;
    in?: $Enums.GraviteEi[] | null;
    notIn?: $Enums.GraviteEi[] | null;
    not?: Prisma.NestedEnumGraviteEiNullableWithAggregatesFilter<$PrismaModel> | $Enums.GraviteEi | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGraviteEiNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGraviteEiNullableFilter<$PrismaModel>;
};
export type EnumStatutEiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutEi | Prisma.EnumStatutEiFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutEi[];
    notIn?: $Enums.StatutEi[];
    not?: Prisma.NestedEnumStatutEiWithAggregatesFilter<$PrismaModel> | $Enums.StatutEi;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutEiFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutEiFilter<$PrismaModel>;
};
export type EnumTypeCauseFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCause | Prisma.EnumTypeCauseFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeCause[];
    notIn?: $Enums.TypeCause[];
    not?: Prisma.NestedEnumTypeCauseFilter<$PrismaModel> | $Enums.TypeCause;
};
export type EnumTypeCauseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCause | Prisma.EnumTypeCauseFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeCause[];
    notIn?: $Enums.TypeCause[];
    not?: Prisma.NestedEnumTypeCauseWithAggregatesFilter<$PrismaModel> | $Enums.TypeCause;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeCauseFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeCauseFilter<$PrismaModel>;
};
export type EnumStatutActionCorrectiveFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutActionCorrective | Prisma.EnumStatutActionCorrectiveFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutActionCorrective[];
    notIn?: $Enums.StatutActionCorrective[];
    not?: Prisma.NestedEnumStatutActionCorrectiveFilter<$PrismaModel> | $Enums.StatutActionCorrective;
};
export type EnumStatutActionCorrectiveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutActionCorrective | Prisma.EnumStatutActionCorrectiveFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutActionCorrective[];
    notIn?: $Enums.StatutActionCorrective[];
    not?: Prisma.NestedEnumStatutActionCorrectiveWithAggregatesFilter<$PrismaModel> | $Enums.StatutActionCorrective;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutActionCorrectiveFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutActionCorrectiveFilter<$PrismaModel>;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumFormuleFormationFilter<$PrismaModel = never> = {
    equals?: $Enums.FormuleFormation | Prisma.EnumFormuleFormationFieldRefInput<$PrismaModel>;
    in?: $Enums.FormuleFormation[];
    notIn?: $Enums.FormuleFormation[];
    not?: Prisma.NestedEnumFormuleFormationFilter<$PrismaModel> | $Enums.FormuleFormation;
};
export type EnumStatutReservationFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutReservation | Prisma.EnumStatutReservationFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutReservation[];
    notIn?: $Enums.StatutReservation[];
    not?: Prisma.NestedEnumStatutReservationFilter<$PrismaModel> | $Enums.StatutReservation;
};
export type EnumFormuleFormationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormuleFormation | Prisma.EnumFormuleFormationFieldRefInput<$PrismaModel>;
    in?: $Enums.FormuleFormation[];
    notIn?: $Enums.FormuleFormation[];
    not?: Prisma.NestedEnumFormuleFormationWithAggregatesFilter<$PrismaModel> | $Enums.FormuleFormation;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFormuleFormationFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFormuleFormationFilter<$PrismaModel>;
};
export type EnumStatutReservationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutReservation | Prisma.EnumStatutReservationFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutReservation[];
    notIn?: $Enums.StatutReservation[];
    not?: Prisma.NestedEnumStatutReservationWithAggregatesFilter<$PrismaModel> | $Enums.StatutReservation;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutReservationFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutReservationFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedEnumTypeEtablissementFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEtablissement | Prisma.EnumTypeEtablissementFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeEtablissement[];
    notIn?: $Enums.TypeEtablissement[];
    not?: Prisma.NestedEnumTypeEtablissementFilter<$PrismaModel> | $Enums.TypeEtablissement;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedEnumTypeEtablissementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEtablissement | Prisma.EnumTypeEtablissementFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeEtablissement[];
    notIn?: $Enums.TypeEtablissement[];
    not?: Prisma.NestedEnumTypeEtablissementWithAggregatesFilter<$PrismaModel> | $Enums.TypeEtablissement;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeEtablissementFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeEtablissementFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumTypeCompteFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCompte | Prisma.EnumTypeCompteFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeCompte[];
    notIn?: $Enums.TypeCompte[];
    not?: Prisma.NestedEnumTypeCompteFilter<$PrismaModel> | $Enums.TypeCompte;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedEnumTypeCompteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCompte | Prisma.EnumTypeCompteFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeCompte[];
    notIn?: $Enums.TypeCompte[];
    not?: Prisma.NestedEnumTypeCompteWithAggregatesFilter<$PrismaModel> | $Enums.TypeCompte;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeCompteFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeCompteFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumRoleUtilisateurFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUtilisateur | Prisma.EnumRoleUtilisateurFieldRefInput<$PrismaModel>;
    in?: $Enums.RoleUtilisateur[];
    notIn?: $Enums.RoleUtilisateur[];
    not?: Prisma.NestedEnumRoleUtilisateurFilter<$PrismaModel> | $Enums.RoleUtilisateur;
};
export type NestedEnumRoleUtilisateurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUtilisateur | Prisma.EnumRoleUtilisateurFieldRefInput<$PrismaModel>;
    in?: $Enums.RoleUtilisateur[];
    notIn?: $Enums.RoleUtilisateur[];
    not?: Prisma.NestedEnumRoleUtilisateurWithAggregatesFilter<$PrismaModel> | $Enums.RoleUtilisateur;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleUtilisateurFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleUtilisateurFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string;
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue;
    lte?: runtime.InputJsonValue;
    gt?: runtime.InputJsonValue;
    gte?: runtime.InputJsonValue;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumStatutGrilleFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutGrille | Prisma.EnumStatutGrilleFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutGrille[];
    notIn?: $Enums.StatutGrille[];
    not?: Prisma.NestedEnumStatutGrilleFilter<$PrismaModel> | $Enums.StatutGrille;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumStatutGrilleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutGrille | Prisma.EnumStatutGrilleFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutGrille[];
    notIn?: $Enums.StatutGrille[];
    not?: Prisma.NestedEnumStatutGrilleWithAggregatesFilter<$PrismaModel> | $Enums.StatutGrille;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutGrilleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutGrilleFilter<$PrismaModel>;
};
export type NestedEnumTypeReponseFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeReponse | Prisma.EnumTypeReponseFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeReponse[];
    notIn?: $Enums.TypeReponse[];
    not?: Prisma.NestedEnumTypeReponseFilter<$PrismaModel> | $Enums.TypeReponse;
};
export type NestedEnumTypeReponseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeReponse | Prisma.EnumTypeReponseFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeReponse[];
    notIn?: $Enums.TypeReponse[];
    not?: Prisma.NestedEnumTypeReponseWithAggregatesFilter<$PrismaModel> | $Enums.TypeReponse;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeReponseFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeReponseFilter<$PrismaModel>;
};
export type NestedEnumStatutSessionEvaluationFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutSessionEvaluation | Prisma.EnumStatutSessionEvaluationFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutSessionEvaluation[];
    notIn?: $Enums.StatutSessionEvaluation[];
    not?: Prisma.NestedEnumStatutSessionEvaluationFilter<$PrismaModel> | $Enums.StatutSessionEvaluation;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumStatutSessionEvaluationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutSessionEvaluation | Prisma.EnumStatutSessionEvaluationFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutSessionEvaluation[];
    notIn?: $Enums.StatutSessionEvaluation[];
    not?: Prisma.NestedEnumStatutSessionEvaluationWithAggregatesFilter<$PrismaModel> | $Enums.StatutSessionEvaluation;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutSessionEvaluationFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutSessionEvaluationFilter<$PrismaModel>;
};
export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type NestedJsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string;
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue;
    lte?: runtime.InputJsonValue;
    gt?: runtime.InputJsonValue;
    gte?: runtime.InputJsonValue;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumStatutRapportPdfFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutRapportPdf | Prisma.EnumStatutRapportPdfFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutRapportPdf[];
    notIn?: $Enums.StatutRapportPdf[];
    not?: Prisma.NestedEnumStatutRapportPdfFilter<$PrismaModel> | $Enums.StatutRapportPdf;
};
export type NestedEnumStatutRapportPdfWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutRapportPdf | Prisma.EnumStatutRapportPdfFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutRapportPdf[];
    notIn?: $Enums.StatutRapportPdf[];
    not?: Prisma.NestedEnumStatutRapportPdfWithAggregatesFilter<$PrismaModel> | $Enums.StatutRapportPdf;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutRapportPdfFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutRapportPdfFilter<$PrismaModel>;
};
export type NestedEnumModuleMetierFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleMetier | Prisma.EnumModuleMetierFieldRefInput<$PrismaModel>;
    in?: $Enums.ModuleMetier[];
    notIn?: $Enums.ModuleMetier[];
    not?: Prisma.NestedEnumModuleMetierFilter<$PrismaModel> | $Enums.ModuleMetier;
};
export type NestedEnumStatutAbonnementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAbonnement | Prisma.EnumStatutAbonnementFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutAbonnement[];
    notIn?: $Enums.StatutAbonnement[];
    not?: Prisma.NestedEnumStatutAbonnementFilter<$PrismaModel> | $Enums.StatutAbonnement;
};
export type NestedEnumModuleMetierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleMetier | Prisma.EnumModuleMetierFieldRefInput<$PrismaModel>;
    in?: $Enums.ModuleMetier[];
    notIn?: $Enums.ModuleMetier[];
    not?: Prisma.NestedEnumModuleMetierWithAggregatesFilter<$PrismaModel> | $Enums.ModuleMetier;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumModuleMetierFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumModuleMetierFilter<$PrismaModel>;
};
export type NestedEnumStatutAbonnementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAbonnement | Prisma.EnumStatutAbonnementFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutAbonnement[];
    notIn?: $Enums.StatutAbonnement[];
    not?: Prisma.NestedEnumStatutAbonnementWithAggregatesFilter<$PrismaModel> | $Enums.StatutAbonnement;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutAbonnementFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutAbonnementFilter<$PrismaModel>;
};
export type NestedEnumStatutPatientFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPatient | Prisma.EnumStatutPatientFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutPatient[];
    notIn?: $Enums.StatutPatient[];
    not?: Prisma.NestedEnumStatutPatientFilter<$PrismaModel> | $Enums.StatutPatient;
};
export type NestedEnumStatutPatientWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPatient | Prisma.EnumStatutPatientFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutPatient[];
    notIn?: $Enums.StatutPatient[];
    not?: Prisma.NestedEnumStatutPatientWithAggregatesFilter<$PrismaModel> | $Enums.StatutPatient;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutPatientFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutPatientFilter<$PrismaModel>;
};
export type NestedEnumNiveauConscienceFilter<$PrismaModel = never> = {
    equals?: $Enums.NiveauConscience | Prisma.EnumNiveauConscienceFieldRefInput<$PrismaModel>;
    in?: $Enums.NiveauConscience[];
    notIn?: $Enums.NiveauConscience[];
    not?: Prisma.NestedEnumNiveauConscienceFilter<$PrismaModel> | $Enums.NiveauConscience;
};
export type NestedEnumNiveauRisqueNewsFilter<$PrismaModel = never> = {
    equals?: $Enums.NiveauRisqueNews | Prisma.EnumNiveauRisqueNewsFieldRefInput<$PrismaModel>;
    in?: $Enums.NiveauRisqueNews[];
    notIn?: $Enums.NiveauRisqueNews[];
    not?: Prisma.NestedEnumNiveauRisqueNewsFilter<$PrismaModel> | $Enums.NiveauRisqueNews;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedEnumNiveauConscienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NiveauConscience | Prisma.EnumNiveauConscienceFieldRefInput<$PrismaModel>;
    in?: $Enums.NiveauConscience[];
    notIn?: $Enums.NiveauConscience[];
    not?: Prisma.NestedEnumNiveauConscienceWithAggregatesFilter<$PrismaModel> | $Enums.NiveauConscience;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNiveauConscienceFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNiveauConscienceFilter<$PrismaModel>;
};
export type NestedEnumNiveauRisqueNewsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NiveauRisqueNews | Prisma.EnumNiveauRisqueNewsFieldRefInput<$PrismaModel>;
    in?: $Enums.NiveauRisqueNews[];
    notIn?: $Enums.NiveauRisqueNews[];
    not?: Prisma.NestedEnumNiveauRisqueNewsWithAggregatesFilter<$PrismaModel> | $Enums.NiveauRisqueNews;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNiveauRisqueNewsFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNiveauRisqueNewsFilter<$PrismaModel>;
};
export type NestedEnumStatutAlerteFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAlerte | Prisma.EnumStatutAlerteFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutAlerte[];
    notIn?: $Enums.StatutAlerte[];
    not?: Prisma.NestedEnumStatutAlerteFilter<$PrismaModel> | $Enums.StatutAlerte;
};
export type NestedEnumStatutAlerteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAlerte | Prisma.EnumStatutAlerteFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutAlerte[];
    notIn?: $Enums.StatutAlerte[];
    not?: Prisma.NestedEnumStatutAlerteWithAggregatesFilter<$PrismaModel> | $Enums.StatutAlerte;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutAlerteFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutAlerteFilter<$PrismaModel>;
};
export type NestedEnumGraviteEiNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GraviteEi | Prisma.EnumGraviteEiFieldRefInput<$PrismaModel> | null;
    in?: $Enums.GraviteEi[] | null;
    notIn?: $Enums.GraviteEi[] | null;
    not?: Prisma.NestedEnumGraviteEiNullableFilter<$PrismaModel> | $Enums.GraviteEi | null;
};
export type NestedEnumStatutEiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutEi | Prisma.EnumStatutEiFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutEi[];
    notIn?: $Enums.StatutEi[];
    not?: Prisma.NestedEnumStatutEiFilter<$PrismaModel> | $Enums.StatutEi;
};
export type NestedEnumGraviteEiNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GraviteEi | Prisma.EnumGraviteEiFieldRefInput<$PrismaModel> | null;
    in?: $Enums.GraviteEi[] | null;
    notIn?: $Enums.GraviteEi[] | null;
    not?: Prisma.NestedEnumGraviteEiNullableWithAggregatesFilter<$PrismaModel> | $Enums.GraviteEi | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGraviteEiNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGraviteEiNullableFilter<$PrismaModel>;
};
export type NestedEnumStatutEiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutEi | Prisma.EnumStatutEiFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutEi[];
    notIn?: $Enums.StatutEi[];
    not?: Prisma.NestedEnumStatutEiWithAggregatesFilter<$PrismaModel> | $Enums.StatutEi;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutEiFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutEiFilter<$PrismaModel>;
};
export type NestedEnumTypeCauseFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCause | Prisma.EnumTypeCauseFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeCause[];
    notIn?: $Enums.TypeCause[];
    not?: Prisma.NestedEnumTypeCauseFilter<$PrismaModel> | $Enums.TypeCause;
};
export type NestedEnumTypeCauseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCause | Prisma.EnumTypeCauseFieldRefInput<$PrismaModel>;
    in?: $Enums.TypeCause[];
    notIn?: $Enums.TypeCause[];
    not?: Prisma.NestedEnumTypeCauseWithAggregatesFilter<$PrismaModel> | $Enums.TypeCause;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTypeCauseFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTypeCauseFilter<$PrismaModel>;
};
export type NestedEnumStatutActionCorrectiveFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutActionCorrective | Prisma.EnumStatutActionCorrectiveFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutActionCorrective[];
    notIn?: $Enums.StatutActionCorrective[];
    not?: Prisma.NestedEnumStatutActionCorrectiveFilter<$PrismaModel> | $Enums.StatutActionCorrective;
};
export type NestedEnumStatutActionCorrectiveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutActionCorrective | Prisma.EnumStatutActionCorrectiveFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutActionCorrective[];
    notIn?: $Enums.StatutActionCorrective[];
    not?: Prisma.NestedEnumStatutActionCorrectiveWithAggregatesFilter<$PrismaModel> | $Enums.StatutActionCorrective;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutActionCorrectiveFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutActionCorrectiveFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedEnumFormuleFormationFilter<$PrismaModel = never> = {
    equals?: $Enums.FormuleFormation | Prisma.EnumFormuleFormationFieldRefInput<$PrismaModel>;
    in?: $Enums.FormuleFormation[];
    notIn?: $Enums.FormuleFormation[];
    not?: Prisma.NestedEnumFormuleFormationFilter<$PrismaModel> | $Enums.FormuleFormation;
};
export type NestedEnumStatutReservationFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutReservation | Prisma.EnumStatutReservationFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutReservation[];
    notIn?: $Enums.StatutReservation[];
    not?: Prisma.NestedEnumStatutReservationFilter<$PrismaModel> | $Enums.StatutReservation;
};
export type NestedEnumFormuleFormationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormuleFormation | Prisma.EnumFormuleFormationFieldRefInput<$PrismaModel>;
    in?: $Enums.FormuleFormation[];
    notIn?: $Enums.FormuleFormation[];
    not?: Prisma.NestedEnumFormuleFormationWithAggregatesFilter<$PrismaModel> | $Enums.FormuleFormation;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFormuleFormationFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFormuleFormationFilter<$PrismaModel>;
};
export type NestedEnumStatutReservationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutReservation | Prisma.EnumStatutReservationFieldRefInput<$PrismaModel>;
    in?: $Enums.StatutReservation[];
    notIn?: $Enums.StatutReservation[];
    not?: Prisma.NestedEnumStatutReservationWithAggregatesFilter<$PrismaModel> | $Enums.StatutReservation;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatutReservationFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatutReservationFilter<$PrismaModel>;
};
