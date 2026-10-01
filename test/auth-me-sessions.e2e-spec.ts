import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// D8.2 (U-01) — auto-gestion des sessions (/auth/me/sessions). Réutilise
// UtilisateursService.listerSessions/revoquerSession (D3), scopées ici sur
// user.sub uniquement : jamais un :id d'utilisateur dans l'URL.
describe("Auth — auto-gestion des sessions /auth/me/sessions (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const motDePasse = "TestD8_2!2026";
  const suffixe = randomUUID().slice(0, 8);

  let orgId: string;
  let respA: { id: string; email: string };
  let respB: { id: string; email: string };

  const idsUtilisateurs: string[] = [];

  function extraireCookie(res: request.Response): string {
    const cookies = res.headers["set-cookie"] as unknown as string[];
    return cookies.map((c) => c.split(";")[0]).join("; ");
  }

  const cacheConnexion = new Map<string, string>();

  async function connecter(email: string): Promise<string> {
    const dejaConnecte = cacheConnexion.get(email);
    if (dejaConnecte) return dejaConnecte;
    const res = await request(app.getHttpServer()).post("/auth/login").send({ email, motDePasse }).expect(200);
    const cookie = extraireCookie(res);
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

    const org = await prisma.organisation.create({
      data: {
        nom: `Phase D8.2 Org ${suffixe}`,
        ifu: `phase-d8-2-${suffixe}`,
        type: TypeEtablissement.EH,
      },
    });
    orgId = org.id;

    const respACree = await prisma.utilisateur.create({
      data: {
        organisationId: orgId,
        typeCompte: TypeCompte.ORGANISATION,
        email: `phase-d8-2-respa-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "RespA",
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.RESPONSABLE_COMPTE } },
      },
    });
    respA = { id: respACree.id, email: respACree.email };
    idsUtilisateurs.push(respA.id);

    const respBCree = await prisma.utilisateur.create({
      data: {
        organisationId: orgId,
        typeCompte: TypeCompte.ORGANISATION,
        email: `phase-d8-2-respb-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "RespB",
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.RESPONSABLE_COMPTE } },
      },
    });
    respB = { id: respBCree.id, email: respBCree.email };
    idsUtilisateurs.push(respB.id);
  });

  afterAll(async () => {
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.organisation.delete({ where: { id: orgId } });
    await app.close();
  });

  it("GET /auth/me/sessions — non authentifié → 401", async () => {
    await request(app.getHttpServer()).get("/auth/me/sessions").expect(401);
  });

  it("POST /auth/me/sessions/:id/revoquer — non authentifié → 401", async () => {
    await request(app.getHttpServer()).post("/auth/me/sessions/inexistant/revoquer").expect(401);
  });

  it("GET /auth/me/sessions — retourne la session courante, jamais le token brut", async () => {
    const cookie = await connecter(respA.email);
    const res = await request(app.getHttpServer()).get("/auth/me/sessions").set("Cookie", cookie).expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    const session = res.body[0];
    expect(Object.keys(session).sort()).toEqual(["createdAt", "expiresAt", "id", "revokedAt"]);
  });

  it("POST /auth/me/sessions/:id/revoquer — un utilisateur ne peut pas révoquer la session d'un autre (404)", async () => {
    const cookieA = await connecter(respA.email);
    const cookieB = await connecter(respB.email);

    const sessionsA = await request(app.getHttpServer()).get("/auth/me/sessions").set("Cookie", cookieA).expect(200);
    const sessionIdA = sessionsA.body[0].id as string;

    await request(app.getHttpServer())
      .post(`/auth/me/sessions/${sessionIdA}/revoquer`)
      .set("Cookie", cookieB)
      .expect(404);

    const sessionRelue = await prisma.refreshToken.findUniqueOrThrow({ where: { id: sessionIdA } });
    expect(sessionRelue.revokedAt).toBeNull();
  });

  it("POST /auth/me/sessions/:id/revoquer — révocation réelle de sa propre session, persistée en base", async () => {
    // Login dédié (pas le cookie mis en cache) pour ne pas invalider la session
    // utilisée par les autres tests de ce fichier.
    const resLogin = await request(app.getHttpServer())
      .post("/auth/login")
      .send({ email: respA.email, motDePasse })
      .expect(200);
    const cookieDedie = extraireCookie(resLogin);

    const sessions = await request(app.getHttpServer()).get("/auth/me/sessions").set("Cookie", cookieDedie).expect(200);
    // La session la plus récente correspond à ce login dédié.
    const sessionId = sessions.body.sort(
      (a: { createdAt: string }, b: { createdAt: string }) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )[0].id as string;

    await request(app.getHttpServer())
      .post(`/auth/me/sessions/${sessionId}/revoquer`)
      .set("Cookie", cookieDedie)
      .expect(200);

    const sessionRelue = await prisma.refreshToken.findUniqueOrThrow({ where: { id: sessionId } });
    expect(sessionRelue.revokedAt).not.toBeNull();
  });

  it("GET /auth/me et /auth/me/profil — non-régression", async () => {
    const cookie = await connecter(respA.email);
    const me = await request(app.getHttpServer()).get("/auth/me").set("Cookie", cookie).expect(200);
    expect(me.body.sub).toBe(respA.id);
    const profil = await request(app.getHttpServer()).get("/auth/me/profil").set("Cookie", cookie).expect(200);
    expect(profil.body.id).toBe(respA.id);
  });
});
