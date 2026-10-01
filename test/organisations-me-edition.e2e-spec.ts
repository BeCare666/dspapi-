import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// D8.1 — auto-édition des coordonnées d'établissement par RESPONSABLE_COMPTE
// (PATCH /organisations/me). Portée intentionnellement stricte : aucun
// paramètre d'URL, l'organisation cible vient exclusivement de `user.organisationId`.
describe("Organisations — auto-édition /organisations/me (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const motDePasse = "TestD8_1!2026";
  const suffixe = randomUUID().slice(0, 8);

  let orgA: { id: string; email: string | null };
  let orgB: { id: string; email: string | null };
  let respA: { email: string };
  let respB: { email: string };
  let respQualiteA: { email: string };

  const idsUtilisateurs: string[] = [];
  const idsOrganisations: string[] = [];

  const cacheConnexion = new Map<string, string>();

  async function connecter(email: string): Promise<string> {
    const dejaConnecte = cacheConnexion.get(email);
    if (dejaConnecte) return dejaConnecte;
    const res = await request(app.getHttpServer()).post("/auth/login").send({ email, motDePasse }).expect(200);
    const cookies = res.headers["set-cookie"] as unknown as string[];
    const cookie = cookies.map((c) => c.split(";")[0]).join("; ");
    cacheConnexion.set(email, cookie);
    return cookie;
  }

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleFixture.createNestApplication();
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    await app.init();
    prisma = moduleFixture.get(PrismaService);

    const orgACreee = await prisma.organisation.create({
      data: {
        nom: `Phase D8.1 Org A ${suffixe}`,
        ifu: `phase-d8-1-a-${suffixe}`,
        type: TypeEtablissement.EH,
        email: `org-a-d8-1-${suffixe}@example.test`,
      },
    });
    orgA = { id: orgACreee.id, email: orgACreee.email };
    idsOrganisations.push(orgA.id);

    const orgBCreee = await prisma.organisation.create({
      data: {
        nom: `Phase D8.1 Org B ${suffixe}`,
        ifu: `phase-d8-1-b-${suffixe}`,
        type: TypeEtablissement.EH,
        email: `org-b-d8-1-${suffixe}@example.test`,
      },
    });
    orgB = { id: orgBCreee.id, email: orgBCreee.email };
    idsOrganisations.push(orgB.id);

    const respACree = await prisma.utilisateur.create({
      data: {
        organisationId: orgA.id,
        typeCompte: TypeCompte.ORGANISATION,
        email: `phase-d8-1-respa-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "RespA",
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.RESPONSABLE_COMPTE } },
      },
    });
    respA = { email: respACree.email };
    idsUtilisateurs.push(respACree.id);

    const respBCree = await prisma.utilisateur.create({
      data: {
        organisationId: orgB.id,
        typeCompte: TypeCompte.ORGANISATION,
        email: `phase-d8-1-respb-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "RespB",
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.RESPONSABLE_COMPTE } },
      },
    });
    respB = { email: respBCree.email };
    idsUtilisateurs.push(respBCree.id);

    const respQualiteACree = await prisma.utilisateur.create({
      data: {
        organisationId: orgA.id,
        typeCompte: TypeCompte.ORGANISATION,
        email: `phase-d8-1-rqa-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "RQA",
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.RESP_QUALITE } },
      },
    });
    respQualiteA = { email: respQualiteACree.email };
    idsUtilisateurs.push(respQualiteACree.id);
  });

  afterAll(async () => {
    await prisma.journalAudit.deleteMany({ where: { organisationId: { in: idsOrganisations } } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.organisation.deleteMany({ where: { id: { in: idsOrganisations } } });
    await app.close();
  });

  it("PATCH /organisations/me — non authentifié → 401", async () => {
    await request(app.getHttpServer()).patch("/organisations/me").send({ nom: "X" }).expect(401);
  });

  it("PATCH /organisations/me — rôle non autorisé (RESP_QUALITE) → 403", async () => {
    const cookie = await connecter(respQualiteA.email);
    await request(app.getHttpServer()).patch("/organisations/me").set("Cookie", cookie).send({ nom: "X" }).expect(403);
  });

  it("PATCH /organisations/me — RESPONSABLE_COMPTE modifie sa propre organisation, persistance réelle", async () => {
    const cookie = await connecter(respA.email);
    const nouveauNom = `Org A modifiée ${suffixe}`;
    const res = await request(app.getHttpServer())
      .patch("/organisations/me")
      .set("Cookie", cookie)
      .send({ nom: nouveauNom, adresse: "123 Rue Test", telephone: "+22900000000" })
      .expect(200);
    expect(res.body.nom).toBe(nouveauNom);
    expect(res.body.adresse).toBe("123 Rue Test");

    const relue = await request(app.getHttpServer()).get("/organisations/me").set("Cookie", cookie).expect(200);
    expect(relue.body.nom).toBe(nouveauNom);
    expect(relue.body.telephone).toBe("+22900000000");
  });

  it("PATCH /organisations/me — champ non autorisé (type) rejeté (400)", async () => {
    const cookie = await connecter(respA.email);
    await request(app.getHttpServer())
      .patch("/organisations/me")
      .set("Cookie", cookie)
      .send({ nom: "Encore un nom", type: "ESPC" })
      .expect(400);
  });

  it("PATCH /organisations/me — email déjà utilisé par une autre organisation → 409", async () => {
    const cookie = await connecter(respA.email);
    await request(app.getHttpServer())
      .patch("/organisations/me")
      .set("Cookie", cookie)
      .send({ email: orgB.email })
      .expect(409);
  });

  it("PATCH /organisations/me — respB ne peut modifier que sa propre organisation (orgA reste inchangée)", async () => {
    const cookie = await connecter(respB.email);
    const nomOrgAAvant = (await prisma.organisation.findUniqueOrThrow({ where: { id: orgA.id } })).nom;

    await request(app.getHttpServer())
      .patch("/organisations/me")
      .set("Cookie", cookie)
      .send({ nom: `Org B modifiée ${suffixe}` })
      .expect(200);

    const orgAApres = await prisma.organisation.findUniqueOrThrow({ where: { id: orgA.id } });
    const orgBApres = await prisma.organisation.findUniqueOrThrow({ where: { id: orgB.id } });
    expect(orgAApres.nom).toBe(nomOrgAAvant);
    expect(orgBApres.nom).toBe(`Org B modifiée ${suffixe}`);
  });

  it("GET /organisations/me — non-régression, toujours fonctionnel", async () => {
    const cookie = await connecter(respA.email);
    const res = await request(app.getHttpServer()).get("/organisations/me").set("Cookie", cookie).expect(200);
    expect(res.body.id).toBe(orgA.id);
  });

  it("audit — la modification des coordonnées est tracée avec le bon acteur et la bonne organisation", async () => {
    const entrees = await prisma.journalAudit.findMany({
      where: { organisationId: orgA.id, action: "etablissement.modifier_coordonnees" },
    });
    expect(entrees.length).toBeGreaterThan(0);
    const derniere = entrees[entrees.length - 1];
    expect(derniere.entite).toBe("Organisation");
    expect(derniere.entiteId).toBe(orgA.id);
  });
});
