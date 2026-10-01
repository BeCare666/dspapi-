import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// D2 — Établissements (admin). Couvre RBAC sur les nouveaux endpoints et la
// non-régression de GET /organisations/me (endpoint organisation existant,
// non touché par cette phase).
describe("Établissements — admin (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const motDePasse = "TestD2!2026";
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
      data: { nom: `Phase D2 Org ${suffixe}`, ifu: `phase-d2-${suffixe}`, type: TypeEtablissement.EH },
    });

    const adminCree = await prisma.utilisateur.create({
      data: {
        typeCompte: TypeCompte.ADMIN_PLATEFORME,
        email: `phase-d2-admin-${suffixe}@example.test`,
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
        email: `phase-d2-resp-${suffixe}@example.test`,
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

  it("GET /organisations — non authentifié → 401", async () => {
    await request(app.getHttpServer()).get("/organisations").expect(401);
  });

  it("GET /organisations — rôle non autorisé (RESPONSABLE_COMPTE) → 403", async () => {
    const cookie = await connecter(responsableCompte.email);
    await request(app.getHttpServer()).get("/organisations").set("Cookie", cookie).expect(403);
  });

  it("GET /organisations — ADMIN_PLATEFORME → 200, contient l'établissement de test", async () => {
    const cookie = await connecter(admin.email);
    const res = await request(app.getHttpServer()).get("/organisations").set("Cookie", cookie).expect(200);
    expect(res.body.some((o: { id: string }) => o.id === organisation.id)).toBe(true);
  });

  it("GET /organisations/:id — ADMIN_PLATEFORME → 200 avec compteurs", async () => {
    const cookie = await connecter(admin.email);
    const res = await request(app.getHttpServer())
      .get(`/organisations/${organisation.id}`)
      .set("Cookie", cookie)
      .expect(200);
    expect(res.body._count).toEqual({ utilisateurs: 1, patients: 0, evenementsIndesirables: 0, reservations: 0 });
  });

  it("POST /organisations/:id/desactiver puis /activer — bascule bien actif", async () => {
    const cookie = await connecter(admin.email);
    const desactive = await request(app.getHttpServer())
      .post(`/organisations/${organisation.id}/desactiver`)
      .set("Cookie", cookie)
      .expect(200);
    expect(desactive.body.actif).toBe(false);

    const reactive = await request(app.getHttpServer())
      .post(`/organisations/${organisation.id}/activer`)
      .set("Cookie", cookie)
      .expect(200);
    expect(reactive.body.actif).toBe(true);
  });

  it("GET /organisations/me — non-régression, toujours fonctionnel pour un compte organisation", async () => {
    const cookie = await connecter(responsableCompte.email);
    const res = await request(app.getHttpServer()).get("/organisations/me").set("Cookie", cookie).expect(200);
    expect(res.body.id).toBe(organisation.id);
  });
});
