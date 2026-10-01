import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement, StatutEi } from "../src/generated/prisma/enums.js";

// D5 (alertes plateforme) + D6 (analytics) + D8 (paramètres) + D9 (sécurité :
// rate limiting réel + endpoint de lecture) + D11 (export CSV EI) — regroupés
// dans un seul fichier pour limiter le nombre de boots complets d'AppModule
// (même raison que audit-integrations-admin.e2e-spec.ts pour D7+D10).
describe("Alertes / Analytics / Paramètres / Sécurité / Export CSV — admin (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const motDePasse = "TestD5D12!2026";
  const suffixe = randomUUID().slice(0, 8);
  const cleParametre = "duree_essai_module_jours";

  let organisation: { id: string };
  let admin: { email: string };
  let responsableCompte: { id: string; email: string };
  let valeurOriginaleParametre: string;

  const idsUtilisateurs: string[] = [];

  // Un cache par email évite de recréer une session à chaque appel : au-delà de 5
  // connexions/60s sur le même compte, le rate-limiting D9 (@Throttle sur /auth/login)
  // renvoie 429, ce qui casserait les tests sans refléter un vrai bug applicatif.
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

    organisation = await prisma.organisation.create({
      data: { nom: `Phase D5D12 Org ${suffixe}`, ifu: `phase-d5d12-${suffixe}`, type: TypeEtablissement.EH },
    });

    const adminCree = await prisma.utilisateur.create({
      data: {
        typeCompte: TypeCompte.ADMIN_PLATEFORME,
        email: `phase-d5d12-admin-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "Admin",
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.ADMIN_PLATEFORME } },
      },
    });
    admin = { email: adminCree.email };
    idsUtilisateurs.push(adminCree.id);

    const responsableCree = await prisma.utilisateur.create({
      data: {
        organisationId: organisation.id,
        typeCompte: TypeCompte.ORGANISATION,
        email: `phase-d5d12-resp-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "Resp",
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.RESPONSABLE_COMPTE } },
      },
    });
    responsableCompte = { id: responsableCree.id, email: responsableCree.email };
    idsUtilisateurs.push(responsableCree.id);

    // Alimente les agrégats D5/D6 avec un EI réel (gravité élevée — niveau
    // « Événement indésirable grave », critique — non clôturé)
    // — pas de dépendance Patient/MesureNews nécessaire pour cette table.
    await prisma.evenementIndesirable.create({
      data: {
        organisationId: organisation.id,
        declareParId: responsableCompte.id,
        description: `Phase D5D12 EI ${suffixe}`,
        niveauGraviteId: "gravite-eig",
        dateSurvenue: new Date(),
        personnesImpliquees: "Donnée de test",
        statut: StatutEi.DECLARE,
      },
    });

    // Le paramètre est une ligne seedée partagée (pas une donnée jetable de ce
    // fichier) — on capture sa valeur d'origine pour la restaurer après test.
    const parametreExistant = await prisma.parametrePlateforme.findUnique({ where: { cle: cleParametre } });
    valeurOriginaleParametre = parametreExistant?.valeur ?? "90";
  });

  afterAll(async () => {
    await prisma.parametrePlateforme.update({
      where: { cle: cleParametre },
      data: { valeur: valeurOriginaleParametre },
    });
    await prisma.evenementIndesirable.deleteMany({ where: { organisationId: organisation.id } });
    await prisma.journalAudit.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.organisation.delete({ where: { id: organisation.id } });
    await app.close();
  });

  // --- D5 — Centre d'alertes ---

  it("GET /alertes-plateforme — non authentifié → 401", async () => {
    await request(app.getHttpServer()).get("/alertes-plateforme").expect(401);
  });

  it("GET /alertes-plateforme — rôle non autorisé (RESPONSABLE_COMPTE) → 403", async () => {
    const cookie = await connecter(responsableCompte.email);
    await request(app.getHttpServer()).get("/alertes-plateforme").set("Cookie", cookie).expect(403);
  });

  it("GET /alertes-plateforme — ADMIN_PLATEFORME → 200, agrégé, aucune donnée patient/incident nominative", async () => {
    const cookie = await connecter(admin.email);
    const res = await request(app.getHttpServer()).get("/alertes-plateforme").set("Cookie", cookie).expect(200);
    expect(res.body.totalEi).toBeGreaterThan(0);
    const ligneEi = res.body.lignes.find((l: { organisationId: string; source: string }) => l.organisationId === organisation.id && l.source === "EI");
    expect(ligneEi).toBeDefined();
    const clefs = Object.keys(ligneEi);
    expect(clefs).not.toContain("description");
    expect(clefs).not.toContain("patientId");
    expect(clefs).not.toContain("nom");
  });

  // --- D6 — Analytics ---

  it("GET /analytics — non authentifié → 401", async () => {
    await request(app.getHttpServer()).get("/analytics").expect(401);
  });

  it("GET /analytics — rôle non autorisé (RESPONSABLE_COMPTE) → 403", async () => {
    const cookie = await connecter(responsableCompte.email);
    await request(app.getHttpServer()).get("/analytics").set("Cookie", cookie).expect(403);
  });

  it("GET /analytics — ADMIN_PLATEFORME → 200, 7 métriques agrégées présentes", async () => {
    const cookie = await connecter(admin.email);
    const res = await request(app.getHttpServer()).get("/analytics").set("Cookie", cookie).expect(200);
    expect(res.body.etablissements.total).toBeGreaterThan(0);
    expect(res.body.utilisateurs.total).toBeGreaterThan(0);
    expect(res.body.reservationsParStatut).toBeDefined();
    expect(res.body.formations).toBeDefined();
    expect(res.body.autoEvaluation).toBeDefined();
    expect(res.body.evenementsIndesirables.total).toBeGreaterThan(0);
    expect(res.body.evenementsIndesirables.parGravite["Événement indésirable grave"]).toBeGreaterThan(0);
    expect(res.body.mesuresNewsParNiveau).toBeDefined();
  });

  // --- D8 — Paramètres ---

  it("GET /parametres — non authentifié → 401", async () => {
    await request(app.getHttpServer()).get("/parametres").expect(401);
  });

  it("GET /parametres — rôle non autorisé (RESPONSABLE_COMPTE) → 403", async () => {
    const cookie = await connecter(responsableCompte.email);
    await request(app.getHttpServer()).get("/parametres").set("Cookie", cookie).expect(403);
  });

  it("GET /parametres — ADMIN_PLATEFORME → 200, contient le paramètre seedé", async () => {
    const cookie = await connecter(admin.email);
    const res = await request(app.getHttpServer()).get("/parametres").set("Cookie", cookie).expect(200);
    const parametre = res.body.find((p: { cle: string }) => p.cle === cleParametre);
    expect(parametre).toBeDefined();
  });

  it("PATCH /parametres/:cle — valeur valide → 200, persistée, tracée dans l'audit", async () => {
    const cookie = await connecter(admin.email);
    const res = await request(app.getHttpServer())
      .patch(`/parametres/${cleParametre}`)
      .set("Cookie", cookie)
      .send({ valeur: "120" })
      .expect(200);
    expect(res.body.valeur).toBe("120");

    const audit = await request(app.getHttpServer())
      .get("/audit")
      .query({ entite: "ParametrePlateforme" })
      .set("Cookie", cookie)
      .expect(200);
    expect(audit.body.some((e: { action: string; entiteId: string }) => e.action === "parametre.modifier" && e.entiteId === cleParametre)).toBe(true);
  });

  it("PATCH /parametres/:cle — clé inconnue → 404 (aucune création de clé arbitraire permise)", async () => {
    const cookie = await connecter(admin.email);
    await request(app.getHttpServer())
      .patch("/parametres/cle_inexistante")
      .set("Cookie", cookie)
      .send({ valeur: "1" })
      .expect(404);
  });

  it("PATCH /parametres/:cle — valeur hors bornes → 400 (validation métier appliquée)", async () => {
    const cookie = await connecter(admin.email);
    await request(app.getHttpServer())
      .patch(`/parametres/${cleParametre}`)
      .set("Cookie", cookie)
      .send({ valeur: "0" })
      .expect(400);
  });

  // --- D11 — Export CSV EI ---

  it("GET /evenements-indesirables/export.csv — non authentifié → 401", async () => {
    await request(app.getHttpServer()).get("/evenements-indesirables/export.csv").expect(401);
  });

  it("GET /evenements-indesirables/export.csv — RESPONSABLE_COMPTE → 200, CSV bien formé", async () => {
    const cookie = await connecter(responsableCompte.email);
    const res = await request(app.getHttpServer())
      .get("/evenements-indesirables/export.csv")
      .set("Cookie", cookie)
      .expect(200);
    expect(res.headers["content-type"]).toContain("text/csv");
    expect(res.headers["content-disposition"]).toContain("attachment");
    expect(res.text.split("\n")[0]).toContain("id");
  });

  // --- D9 — Sécurité (endpoint de lecture) ---

  it("GET /securite — non authentifié → 401", async () => {
    await request(app.getHttpServer()).get("/securite").expect(401);
  });

  it("GET /securite — rôle non autorisé (RESPONSABLE_COMPTE) → 403", async () => {
    const cookie = await connecter(responsableCompte.email);
    await request(app.getHttpServer()).get("/securite").set("Cookie", cookie).expect(403);
  });

  it("GET /securite — ADMIN_PLATEFORME → 200, TTL JWT et rate limiting présents", async () => {
    const cookie = await connecter(admin.email);
    const res = await request(app.getHttpServer()).get("/securite").set("Cookie", cookie).expect(200);
    expect(res.body.session.jwtAccessTtl).toBeDefined();
    expect(res.body.rateLimiting.length).toBeGreaterThan(0);
  });

  // --- D9 — Rate limiting réel sur /auth/login ---
  // Placé en dernier : consomme volontairement le reste du budget de la
  // fenêtre de 60s (2 connexions déjà mises en cache par les tests ci-dessus)
  // pour vérifier qu'un 6e essai est bien rejeté (429), sans casser les tests
  // précédents qui réutilisent leurs cookies déjà obtenus.
  it("POST /auth/login — la 6e tentative en moins de 60s est rejetée (429)", async () => {
    for (let i = 0; i < 3; i++) {
      await request(app.getHttpServer()).post("/auth/login").send({ email: admin.email, motDePasse }).expect(200);
    }
    await request(app.getHttpServer()).post("/auth/login").send({ email: admin.email, motDePasse }).expect(429);
  });
});
