import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// Phase 5 (refonte frontend) — auto-édition du profil personnel
// (PATCH /auth/me/profil), même convention que D8.1/D8.2 : scope strictement
// user.sub, aucune permission ni @Roles(), whitelist stricte (nom/prenom/telephone,
// jamais email — voir ModifierProfilDto).
describe("Auth — auto-édition du profil /auth/me/profil (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const motDePasse = "TestPhase5Profil!2026";
  const suffixe = randomUUID().slice(0, 8);

  let orgId: string;
  let userA: { id: string; email: string };
  let userB: { id: string; email: string };

  const idsUtilisateurs: string[] = [];

  function extraireCookie(res: request.Response): string {
    const cookies = res.headers["set-cookie"] as unknown as string[];
    return cookies.map((c) => c.split(";")[0]).join("; ");
  }

  async function connecter(email: string): Promise<string> {
    const res = await request(app.getHttpServer()).post("/auth/login").send({ email, motDePasse }).expect(200);
    return extraireCookie(res);
  }

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleFixture.createNestApplication();
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    await app.init();
    prisma = moduleFixture.get(PrismaService);

    const org = await prisma.organisation.create({
      data: { nom: `Phase5 Profil Org ${suffixe}`, ifu: `phase5-profil-${suffixe}`, type: TypeEtablissement.EH },
    });
    orgId = org.id;

    const userACree = await prisma.utilisateur.create({
      data: {
        organisationId: orgId,
        typeCompte: TypeCompte.ORGANISATION,
        email: `phase5-profil-a-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Avant",
        prenom: "TestA",
        telephone: "+229 00 00 00 00",
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.RESPONSABLE_COMPTE } },
      },
    });
    userA = { id: userACree.id, email: userACree.email };
    idsUtilisateurs.push(userA.id);

    const userBCree = await prisma.utilisateur.create({
      data: {
        organisationId: orgId,
        typeCompte: TypeCompte.ORGANISATION,
        email: `phase5-profil-b-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Avant",
        prenom: "TestB",
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.RESPONSABLE_COMPTE } },
      },
    });
    userB = { id: userBCree.id, email: userBCree.email };
    idsUtilisateurs.push(userB.id);
  });

  afterAll(async () => {
    await prisma.journalAudit.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.organisation.delete({ where: { id: orgId } });
    await app.close();
  });

  it("PATCH /auth/me/profil — non authentifié → 401", async () => {
    await request(app.getHttpServer()).patch("/auth/me/profil").send({ nom: "X" }).expect(401);
  });

  it("PATCH /auth/me/profil — modifie nom/prenom/telephone, persisté en base", async () => {
    const cookie = await connecter(userA.email);
    const res = await request(app.getHttpServer())
      .patch("/auth/me/profil")
      .set("Cookie", cookie)
      .send({ nom: "Après", prenom: "TestAModifie", telephone: "+229 99 99 99 99" })
      .expect(200);

    expect(res.body).toMatchObject({ nom: "Après", prenom: "TestAModifie", telephone: "+229 99 99 99 99" });

    const relu = await prisma.utilisateur.findUniqueOrThrow({ where: { id: userA.id } });
    expect(relu.nom).toBe("Après");
    expect(relu.prenom).toBe("TestAModifie");
    expect(relu.telephone).toBe("+229 99 99 99 99");
  });

  it("PATCH /auth/me/profil — un champ non whitelisté (email) est rejeté en 400", async () => {
    const cookie = await connecter(userA.email);
    await request(app.getHttpServer())
      .patch("/auth/me/profil")
      .set("Cookie", cookie)
      .send({ nom: "X", email: "autre@example.test" })
      .expect(400);
  });

  it("PATCH /auth/me/profil — scope strictement user.sub, n'affecte jamais un autre utilisateur", async () => {
    const cookieA = await connecter(userA.email);
    await request(app.getHttpServer())
      .patch("/auth/me/profil")
      .set("Cookie", cookieA)
      .send({ nom: "EncoreModifie" })
      .expect(200);

    const userBInchange = await prisma.utilisateur.findUniqueOrThrow({ where: { id: userB.id } });
    expect(userBInchange.nom).toBe("Avant");
  });

  it("PATCH /auth/me/profil — entrée d'audit créée (acteur = cible, self-service)", async () => {
    const cookie = await connecter(userB.email);
    await request(app.getHttpServer()).patch("/auth/me/profil").set("Cookie", cookie).send({ nom: "AvecAudit" }).expect(200);

    const entree = await prisma.journalAudit.findFirst({
      where: { utilisateurId: userB.id, action: "utilisateur.modifier_profil", entiteId: userB.id },
      orderBy: { createdAt: "desc" },
    });
    expect(entree).not.toBeNull();
  });

  it("GET /auth/me/profil — non-régression, inclut désormais telephone", async () => {
    const cookie = await connecter(userA.email);
    const res = await request(app.getHttpServer()).get("/auth/me/profil").set("Cookie", cookie).expect(200);
    expect(res.body.id).toBe(userA.id);
    expect(res.body).toHaveProperty("telephone");
  });
});
