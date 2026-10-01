import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// Phase 1 (permissions/RBAC) — preuve automatisée que @Roles()/RolesGuard
// continuent de fonctionner sans régression après l'ajout de PermissionsGuard
// (qui doit rester no-op sur ces contrôleurs, aucun n'ayant @Permissions()).
describe("RBAC — rôle autorisé / non autorisé / non authentifié (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const motDePasse = "TestPhase1!2026";
  const suffixe = randomUUID().slice(0, 8);

  let organisation: { id: string };
  let responsableCompte: { email: string };
  let gestionnaireFormation: { email: string };
  let respQualite: { email: string };
  let personnelSoignant: { email: string };

  const idsUtilisateurs: string[] = [];

  async function creerUtilisateur(label: string, role: RoleUtilisateur): Promise<{ id: string; email: string }> {
    const email = `phase1-rbac-${label}-${suffixe}@example.test`;
    const utilisateur = await prisma.utilisateur.create({
      data: {
        organisationId: organisation.id,
        typeCompte: TypeCompte.ORGANISATION,
        email,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: label,
        emailVerifieLe: new Date(),
        roles: { create: { role } },
      },
    });
    idsUtilisateurs.push(utilisateur.id);
    return { id: utilisateur.id, email };
  }

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
      data: { nom: `Phase1 RBAC Org ${suffixe}`, ifu: `phase1-rbac-${suffixe}`, type: TypeEtablissement.EH },
    });

    responsableCompte = await creerUtilisateur("responsable", RoleUtilisateur.RESPONSABLE_COMPTE);
    gestionnaireFormation = await creerUtilisateur("gestionnaire-formation", RoleUtilisateur.GESTIONNAIRE_FORMATION);
    respQualite = await creerUtilisateur("resp-qualite", RoleUtilisateur.RESP_QUALITE);
    personnelSoignant = await creerUtilisateur("personnel-soignant", RoleUtilisateur.PERSONNEL_SOIGNANT);
  });

  afterAll(async () => {
    await prisma.journalAudit.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.organisation.delete({ where: { id: organisation.id } });
    await app.close();
  });

  describe("PatientsController (module NEWS)", () => {
    it("non authentifié → 401", async () => {
      await request(app.getHttpServer()).get("/patients").expect(401);
    });

    it("rôle autorisé (RESPONSABLE_COMPTE) → 200", async () => {
      const cookie = await connecter(responsableCompte.email);
      await request(app.getHttpServer()).get("/patients").set("Cookie", cookie).expect(200);
    });

    it("rôle non autorisé (GESTIONNAIRE_FORMATION) → 403", async () => {
      const cookie = await connecter(gestionnaireFormation.email);
      await request(app.getHttpServer()).get("/patients").set("Cookie", cookie).expect(403);
    });
  });

  describe("EvenementsIndesirablesController — file d'attente (traitement RESP_QUALITE/RESPONSABLE_COMPTE)", () => {
    it("non authentifié → 401", async () => {
      await request(app.getHttpServer()).get("/evenements-indesirables/file-attente").expect(401);
    });

    it("rôle autorisé (RESP_QUALITE) → 200", async () => {
      const cookie = await connecter(respQualite.email);
      await request(app.getHttpServer())
        .get("/evenements-indesirables/file-attente")
        .set("Cookie", cookie)
        .expect(200);
    });

    it("rôle non autorisé (PERSONNEL_SOIGNANT) → 403", async () => {
      const cookie = await connecter(personnelSoignant.email);
      await request(app.getHttpServer())
        .get("/evenements-indesirables/file-attente")
        .set("Cookie", cookie)
        .expect(403);
    });
  });
});
