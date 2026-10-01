const ENTETES = [
    "id",
    "date_declaration",
    "type_ei",
    "service",
    "gravite",
    "statut",
    "date_cloture",
    "description",
    "nombre_causes",
    "nombre_actions_correctives",
];
function champCsv(valeur) {
    return `"${valeur.replace(/"/g, '""')}"`;
}
export function evenementsIndesirablesVersCsv(evenements) {
    const lignes = evenements.map((e) => [
        e.id,
        e.dateDeclaration.toISOString(),
        e.typeEi?.libelle ?? "",
        e.service?.nom ?? "",
        e.gravite ?? "",
        e.statut,
        e.dateCloture?.toISOString() ?? "",
        e.description,
        String(e.causes.length),
        String(e.actionsCorrectives.length),
    ]
        .map(champCsv)
        .join(","));
    return [ENTETES.map(champCsv).join(","), ...lignes].join("\r\n");
}
//# sourceMappingURL=export-csv.util.js.map