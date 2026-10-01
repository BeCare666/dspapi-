import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { RegisterOrganisationDto } from "./register-organisation.dto.js";

const valide = {
  organisationNom: "Clinique Test",
  organisationRaisonSociale: "Clinique Test SARL",
  organisationTypeStructure: "CLINIQUE",
  organisationIfu: "1234567890123",
  organisationType: "ESPC",
  organisationVille: "Porto-Novo",
  organisationPays: "Bénin",
  organisationTelephone: "+22990000000",
  organisationEmail: "contact@clinique.example",
  responsableCivilite: "M",
  responsableNom: "Doe",
  responsablePrenom: "John",
  responsableEmail: "john@clinique.example",
  motDePasse: "MotDePasse123!",
};

async function erreursPour(surcharge: Record<string, unknown>) {
  const dto = plainToInstance(RegisterOrganisationDto, { ...valide, ...surcharge });
  const erreurs = await validate(dto);
  return erreurs.map((e) => e.property);
}

describe("RegisterOrganisationDto (§4.1)", () => {
  it("accepte une inscription complète", async () => {
    expect(await erreursPour({})).toEqual([]);
  });

  it.each(["123456789012", "12345678901234", "12345678901A3", ""])("rejette l'IFU %j (13 chiffres exigés)", async (ifu) => {
    expect(await erreursPour({ organisationIfu: ifu })).toEqual(["organisationIfu"]);
  });

  it.each([
    "organisationRaisonSociale",
    "organisationTypeStructure",
    "organisationVille",
    "organisationPays",
    "organisationTelephone",
    "organisationEmail",
    "responsableCivilite",
  ])("exige %s", async (champ) => {
    expect(await erreursPour({ [champ]: undefined })).toContain(champ);
  });

  it("rejette une civilité ou un type de structure hors liste", async () => {
    expect(await erreursPour({ responsableCivilite: "DR", organisationTypeStructure: "SPA" })).toEqual([
      "organisationTypeStructure",
      "responsableCivilite",
    ]);
  });
});
