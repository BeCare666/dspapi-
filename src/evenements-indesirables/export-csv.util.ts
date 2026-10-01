// D11 / §8.3 — export CSV, RFC 4180 minimal (guillemets systématiques,
// échappement des guillemets internes). Réutilise exactement les données
// renvoyées par EvenementsIndesirablesService.exporter.
import type {
  ActionCorrective,
  Cause,
  EvenementIndesirable,
  NiveauGraviteEi,
  Service,
  TypeEi,
} from "../generated/prisma/client.js";

type EvenementExportable = EvenementIndesirable & {
  typeEi: TypeEi | null;
  service: Service | null;
  niveauGravite: NiveauGraviteEi | null;
  causes: Cause[];
  actionsCorrectives: ActionCorrective[];
};

const ENTETES = [
  "id",
  "date_survenue",
  "date_declaration",
  "type_ei",
  "service",
  "lieu",
  "gravite",
  "priorite",
  "statut",
  "date_cloture",
  "description",
  "personnes_impliquees",
  "nombre_causes",
  "nombre_actions_correctives",
];

function champCsv(valeur: string): string {
  return `"${valeur.replace(/"/g, '""')}"`;
}

export function evenementsIndesirablesVersCsv(evenements: EvenementExportable[]): string {
  const lignes = evenements.map((e) =>
    [
      e.id,
      e.dateSurvenue.toISOString(),
      e.dateDeclaration.toISOString(),
      e.typeEi?.libelle ?? "",
      e.service?.nom ?? "",
      e.lieu ?? "",
      e.niveauGravite?.libelle ?? "",
      e.priorite ?? "",
      e.statut,
      e.dateCloture?.toISOString() ?? "",
      e.description,
      e.personnesImpliquees,
      String(e.causes.length),
      String(e.actionsCorrectives.length),
    ]
      .map(champCsv)
      .join(","),
  );

  return [ENTETES.map(champCsv).join(","), ...lignes].join("\r\n");
}
