import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// D3 — Utilisateurs (admin). RBAC, non-exposition du hash de mot de passe,
// désactivation régresse bien sur le login existant, révocation de session.
describe("Utilisateurs — admin (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const motDePasse = "TestD3!2026";
  const suffixe = randomUUID().slice(0, 8);

  let organisation: { id: string };
  let admin: { email: string };
  let responsableCompte: { id: string; email: string };

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
      data: { nom: `Phase D3 Org ${suffixe}`, ifu: `phase-d3-${suffixe}`, type: TypeEtablissement.EH },
    });

    const adminCree = await prisma.utilisateur.create({
      data: {
        typeCompte: TypeCompte.ADMIN_PLATEFORME,
        email: `phase-d3-admin-${suffixe}@example.test`,
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
        email: `phase-d3-resp-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "Resp",
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.RESPONSABLE_COMPTE } },
      },
    });
    responsableCompte = { id: responsableCree.id, email: responsableCree.email };
    idsUtilisateurs.push(responsableCree.id);
  });

  afterAll(async () => {
    await prisma.journalAudit.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.organisation.delete({ where: { id: organisation.id } });
    await app.close();
  });

  it("GET /utilisateurs — non authentifié → 401", async () => {
    await request(app.getHttpServer()).get("/utilisateurs").expect(401);
  });

  it("GET /utilisateurs — rôle non autorisé (RESPONSABLE_COMPTE) → 403", async () => {
    const cookie = await connecter(responsableCompte.email);
    await request(app.getHttpServer()).get("/utilisateurs").set("Cookie", cookie).expect(403);
  });

  it("GET /utilisateurs — ADMIN_PLATEFORME → 200, ne renvoie jamais motDePasseHash", async () => {
    const cookie = await connecter(admin.email);
    const res = await request(app.getHttpServer()).get("/utilisateurs").set("Cookie", cookie).expect(200);
    const trouve = res.body.find((u: { id: string }) => u.id === responsableCompte.id);
    expect(trouve).toBeDefined();
    expect(trouve.motDePasseHash).toBeUndefined();
    expect(trouve.roles).toEqual([{ role: "RESPONSABLE_COMPTE" }]);
  });

  it("POST /utilisateurs/:id/desactiver — bloque ensuite la connexion (régression sur AuthService.login)", async () => {
    const cookieAdmin = await connecter(admin.email);
    await request(app.getHttpServer())
      .post(`/utilisateurs/${responsableCompte.id}/desactiver`)
      .set("Cookie", cookieAdmin)
      .expect(200);

    await request(app.getHttpServer())
      .post("/auth/login")
      .send({ email: responsableCompte.email, motDePasse })
      .expect(401);

    // Réactivation pour ne pas fausser un test suivant qui réutiliserait ce compte.
    await request(app.getHttpServer())
      .post(`/utilisateurs/${responsableCompte.id}/reactiver`)
      .set("Cookie", cookieAdmin)
      .expect(200);
    await request(app.getHttpServer())
      .post("/auth/login")
      .send({ email: responsableCompte.email, motDePasse })
      .expect(200);
  });

  it("GET /utilisateurs/:id/sessions puis révocation — la session révoquée n'est plus utilisable pour refresh", async () => {
    const cookieAdmin = await connecter(admin.email);
    const loginRes = await request(app.getHttpServer())
      .post("/auth/login")
      .send({ email: responsableCompte.email, motDePasse })
      .expect(200);
    const cookiesLogin = (loginRes.headers["set-cookie"] as unknown as string[]).map((c) => c.split(";")[0]);
    const cookieRefresh = cookiesLogin.join("; ");

    const sessions = await request(app.getHttpServer())
      .get(`/utilisateurs/${responsableCompte.id}/sessions`)
      .set("Cookie", cookieAdmin)
      .expect(200);
    const sessionActive = sessions.body.find((s: { revokedAt: string | null }) => !s.revokedAt);
    expect(sessionActive).toBeDefined();

    await request(app.getHttpServer())
      .post(`/utilisateurs/${responsableCompte.id}/sessions/${sessionActive.id}/revoquer`)
      .set("Cookie", cookieAdmin)
      .expect(200);

    await request(app.getHttpServer()).post("/auth/refresh").set("Cookie", cookieRefresh).expect(401);
  });
});
