import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// D7 (audit) + D10 (intégrations) — regroupés dans un seul fichier pour
// limiter le nombre de boots complets d'AppModule (coût machine).
describe("Audit & Intégrations — admin (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const motDePasse = "TestD7D10!2026";
  const suffixe = randomUUID().slice(0, 8);

  let organisation: { id: string };
  let admin: { email: string };
  let responsableCompte: { email: string };

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
      data: { nom: `Phase D7D10 Org ${suffixe}`, ifu: `phase-d7d10-${suffixe}`, type: TypeEtablissement.EH },
    });

    const adminCree = await prisma.utilisateur.create({
      data: {
        typeCompte: TypeCompte.ADMIN_PLATEFORME,
        email: `phase-d7d10-admin-${suffixe}@example.test`,
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
        email: `phase-d7d10-resp-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "Resp",
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.RESPONSABLE_COMPTE } },
      },
    });
    responsableCompte = { email: responsableCree.email };
    idsUtilisateurs.push(responsableCree.id);
  });

  afterAll(async () => {
    await prisma.journalAudit.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.organisation.delete({ where: { id: organisation.id } });
    await app.close();
  });

  it("GET /audit — non authentifié → 401", async () => {
    await request(app.getHttpServer()).get("/audit").expect(401);
  });

  it("GET /audit — rôle non autorisé (RESPONSABLE_COMPTE) → 403", async () => {
    const cookie = await connecter(responsableCompte.email);
    await request(app.getHttpServer()).get("/audit").set("Cookie", cookie).expect(403);
  });

  it("une désactivation d'établissement crée bien une entrée d'audit avec le bon acteur", async () => {
    const cookie = await connecter(admin.email);
    await request(app.getHttpServer())
      .post(`/organisations/${organisation.id}/desactiver`)
      .set("Cookie", cookie)
      .expect(200);
    // Réactivation pour laisser l'organisation dans un état propre.
    await request(app.getHttpServer())
      .post(`/organisations/${organisation.id}/activer`)
      .set("Cookie", cookie)
      .expect(200);

    const res = await request(app.getHttpServer())
      .get("/audit")
      .query({ entite: "Organisation", organisationId: organisation.id })
      .set("Cookie", cookie)
      .expect(200);
    const actions = res.body.map((e: { action: string }) => e.action);
    expect(actions).toContain("etablissement.desactiver");
    expect(actions).toContain("etablissement.activer");
    expect(res.body[0].utilisateur).toBeDefined();
  });

  it("une connexion crée bien une entrée d'audit 'connexion' (Phase 1, non-régression)", async () => {
    const cookieAdmin = await connecter(admin.email);
    await connecter(responsableCompte.email);
    const res = await request(app.getHttpServer())
      .get("/audit")
      .query({ action: "connexion" })
      .set("Cookie", cookieAdmin)
      .expect(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("GET /integrations — non authentifié → 401", async () => {
    await request(app.getHttpServer()).get("/integrations").expect(401);
  });

  it("GET /integrations — rôle non autorisé → 403", async () => {
    const cookie = await connecter(responsableCompte.email);
    await request(app.getHttpServer()).get("/integrations").set("Cookie", cookie).expect(403);
  });

  it("GET /integrations — ADMIN_PLATEFORME → 200, TiDB vérifié en direct, Redis honnêtement absent", async () => {
    const cookie = await connecter(admin.email);
    const res = await request(app.getHttpServer()).get("/integrations").set("Cookie", cookie).expect(200);
    const tidb = res.body.find((e: { nom: string }) => e.nom.includes("TiDB"));
    expect(tidb.statut).toBe("verifie_ok");
    const redis = res.body.find((e: { nom: string }) => e.nom.includes("Redis"));
    expect(redis.statut).toBe("non_configure");
  });
});
