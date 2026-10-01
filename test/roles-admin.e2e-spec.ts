import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// D4 — Rôles & Permissions (assignation). RBAC + comportements réels
// (doublon refusé, retrait d'un rôle absent refusé, cumul multi-rôle effectif).
describe("Rôles — assignation (admin, e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const motDePasse = "TestD4!2026";
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
      data: { nom: `Phase D4 Org ${suffixe}`, ifu: `phase-d4-${suffixe}`, type: TypeEtablissement.EH },
    });

    const adminCree = await prisma.utilisateur.create({
      data: {
        typeCompte: TypeCompte.ADMIN_PLATEFORME,
        email: `phase-d4-admin-${suffixe}@example.test`,
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
        email: `phase-d4-resp-${suffixe}@example.test`,
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

  it("POST /utilisateurs/:id/roles — non authentifié → 401", async () => {
    await request(app.getHttpServer())
      .post(`/utilisateurs/${responsableCompte.id}/roles`)
      .send({ role: "RESP_QUALITE" })
      .expect(401);
  });

  it("POST /utilisateurs/:id/roles — ajoute un second rôle (cumul multi-rôle réel)", async () => {
    const cookie = await connecter(admin.email);
    const res = await request(app.getHttpServer())
      .post(`/utilisateurs/${responsableCompte.id}/roles`)
      .set("Cookie", cookie)
      .send({ role: "RESP_QUALITE" })
      .expect(200);
    const roles = res.body.roles.map((r: { role: string }) => r.role);
    expect(roles).toContain("RESPONSABLE_COMPTE");
    expect(roles).toContain("RESP_QUALITE");
  });

  it("POST /utilisateurs/:id/roles — ajouter un rôle déjà présent → 409", async () => {
    const cookie = await connecter(admin.email);
    await request(app.getHttpServer())
      .post(`/utilisateurs/${responsableCompte.id}/roles`)
      .set("Cookie", cookie)
      .send({ role: "RESP_QUALITE" })
      .expect(409);
  });

  it("DELETE /utilisateurs/:id/roles/:role — retire le rôle ajouté", async () => {
    const cookie = await connecter(admin.email);
    const res = await request(app.getHttpServer())
      .delete(`/utilisateurs/${responsableCompte.id}/roles/RESP_QUALITE`)
      .set("Cookie", cookie)
      .expect(200);
    const roles = res.body.roles.map((r: { role: string }) => r.role);
    expect(roles).not.toContain("RESP_QUALITE");
    expect(roles).toContain("RESPONSABLE_COMPTE");
  });

  it("DELETE /utilisateurs/:id/roles/:role — retirer un rôle absent → 404", async () => {
    const cookie = await connecter(admin.email);
    await request(app.getHttpServer())
      .delete(`/utilisateurs/${responsableCompte.id}/roles/RESP_QUALITE`)
      .set("Cookie", cookie)
      .expect(404);
  });

  it("DELETE /utilisateurs/:id/roles/:role — rôle invalide → 400", async () => {
    const cookie = await connecter(admin.email);
    await request(app.getHttpServer())
      .delete(`/utilisateurs/${responsableCompte.id}/roles/PAS_UN_ROLE`)
      .set("Cookie", cookie)
      .expect(400);
  });
});
