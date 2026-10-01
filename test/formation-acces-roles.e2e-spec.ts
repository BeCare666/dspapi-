import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// Conformité CDC §4.2 — dans un compte Organisation, le module Formation est
// ouvert au responsable du compte et au gestionnaire formation ; le personnel
// soignant n'y a pas accès. Un compte Individuel garde l'accès à ses réservations.
describe("Module Formation — accès selon le rôle (§4.2, e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const motDePasse = "TestConfP1b!2026";
  const suffixe = randomUUID().slice(0, 8);
  const idsUtilisateurs: string[] = [];
  let orgId: string;
  let formationId: string;
  const emails = {
    soignant: `conf-p1b-soignant-${suffixe}@example.test`,
    gestionnaire: `conf-p1b-gestionnaire-${suffixe}@example.test`,
    individuel: `conf-p1b-individuel-${suffixe}@example.test`,
  };

  const cache = new Map<string, string>();
  async function connecter(email: string): Promise<string> {
    if (cache.has(email)) return cache.get(email)!;
    const res = await request(app.getHttpServer()).post("/auth/login").send({ email, motDePasse }).expect(200);
    const cookie = (res.headers["set-cookie"] as unknown as string[]).map((c) => c.split(";")[0]).join("; ");
    cache.set(email, cookie);
    return cookie;
  }

  async function creerUtilisateur(email: string, typeCompte: TypeCompte, role?: RoleUtilisateur) {
    const u = await prisma.utilisateur.create({
      data: {
        organisationId: typeCompte === TypeCompte.ORGANISATION ? orgId : null,
        typeCompte,
        email,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "P1b",
        emailVerifieLe: new Date(),
        roles: role ? { create: { role } } : undefined,
      },
    });
    idsUtilisateurs.push(u.id);
  }

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleFixture.createNestApplication();
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    await app.init();
    prisma = moduleFixture.get(PrismaService);

    const org = await prisma.organisation.create({
      data: { nom: `Conf P1b ${suffixe}`, ifu: `confp1b-${suffixe}`, type: TypeEtablissement.ESPC },
    });
    orgId = org.id;
    await creerUtilisateur(emails.soignant, TypeCompte.ORGANISATION, RoleUtilisateur.PERSONNEL_SOIGNANT);
    await creerUtilisateur(emails.gestionnaire, TypeCompte.ORGANISATION, RoleUtilisateur.GESTIONNAIRE_FORMATION);
    await creerUtilisateur(emails.individuel, TypeCompte.INDIVIDUEL);

    const formation = await prisma.formation.create({
      data: {
        titre: `Formation test P1b ${suffixe}`,
        description: "Formation de test, supprimée après exécution.",
        prixIndividuel: 1000,
        prixGroupe5: 4000,
        prixGroupe10: 7000,
      },
    });
    formationId = formation.id;
  });

  afterAll(async () => {
    await prisma.reservation.deleteMany({ where: { formationId } });
    await prisma.formation.delete({ where: { id: formationId } });
    await prisma.journalAudit.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.organisation.delete({ where: { id: orgId } });
    await app.close();
  });

  it("personnel soignant : ni réservation ni consultation des réservations de l'établissement (403)", async () => {
    const cookie = await connecter(emails.soignant);
    await request(app.getHttpServer())
      .post("/reservations")
      .set("Cookie", cookie)
      .send({ formationId, formule: "INDIVIDUEL" })
      .expect(403);
    await request(app.getHttpServer()).get("/reservations").set("Cookie", cookie).expect(403);
  });

  it("gestionnaire formation : réserve pour l'établissement et voit la réservation", async () => {
    const cookie = await connecter(emails.gestionnaire);
    const res = await request(app.getHttpServer())
      .post("/reservations")
      .set("Cookie", cookie)
      .send({ formationId, formule: "GROUPE_5" })
      .expect(201);
    expect(res.body.organisationId).toBe(orgId);
    expect(res.body.tarifApplique).toBe(4000);

    const liste = await request(app.getHttpServer()).get("/reservations").set("Cookie", cookie).expect(200);
    expect(liste.body.map((r: { id: string }) => r.id)).toContain(res.body.id);

    // Le soignant ne peut pas non plus la lire individuellement.
    const cookieSoignant = await connecter(emails.soignant);
    await request(app.getHttpServer()).get(`/reservations/${res.body.id}`).set("Cookie", cookieSoignant).expect(403);
  });

  it("compte individuel (sans rôle) : accès inchangé à ses propres réservations", async () => {
    const cookie = await connecter(emails.individuel);
    const res = await request(app.getHttpServer())
      .post("/reservations")
      .set("Cookie", cookie)
      .send({ formationId, formule: "INDIVIDUEL" })
      .expect(201);
    expect(res.body.organisationId).toBeNull();
    await request(app.getHttpServer()).get(`/reservations/${res.body.id}`).set("Cookie", cookie).expect(200);
  });
});
