import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// Phase 1 (permissions/RBAC) — preuve automatisée de l'isolation multi-tenant
// (RM7) et de l'absence de bypass organisationId pour ADMIN_PLATEFORME.
// Crée des données jetables (préfixe "phase1-test-") contre la vraie base de
// dev, nettoyées dans afterAll.
describe("Isolation multi-tenant (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const motDePasse = "TestPhase1!2026";
  const suffixe = randomUUID().slice(0, 8);

  let organisationA: { id: string };
  let organisationB: { id: string };
  let utilisateurA: { id: string; email: string };
  let utilisateurB: { id: string; email: string };
  let admin: { id: string; email: string };
  let adminAvecRoleOrganisation: { id: string; email: string };
  let individuel: { id: string; email: string };
  let patientA: { id: string };

  const idsUtilisateurs: string[] = [];
  const idsOrganisations: string[] = [];

  async function creerUtilisateurOrganisation(
    label: string,
    organisationId: string,
    role: RoleUtilisateur,
  ): Promise<{ id: string; email: string }> {
    const email = `phase1-test-${label}-${suffixe}@example.test`;
    const utilisateur = await prisma.utilisateur.create({
      data: {
        organisationId,
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
    const res = await request(app.getHttpServer())
      .post("/auth/login")
      .send({ email, motDePasse })
      .expect(200);
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

    organisationA = await prisma.organisation.create({
      data: { nom: `Phase1 Org A ${suffixe}`, ifu: `phase1-a-${suffixe}`, type: TypeEtablissement.EH },
    });
    organisationB = await prisma.organisation.create({
      data: { nom: `Phase1 Org B ${suffixe}`, ifu: `phase1-b-${suffixe}`, type: TypeEtablissement.EH },
    });
    idsOrganisations.push(organisationA.id, organisationB.id);

    utilisateurA = await creerUtilisateurOrganisation("A", organisationA.id, RoleUtilisateur.RESPONSABLE_COMPTE);
    utilisateurB = await creerUtilisateurOrganisation("B", organisationB.id, RoleUtilisateur.RESPONSABLE_COMPTE);

    const adminCree = await prisma.utilisateur.create({
      data: {
        typeCompte: TypeCompte.ADMIN_PLATEFORME,
        email: `phase1-test-admin-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "Admin",
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.ADMIN_PLATEFORME } },
      },
    });
    admin = { id: adminCree.id, email: adminCree.email };
    idsUtilisateurs.push(admin.id);

    // Cas volontairement artificiel (cumul de rôle non réaliste en usage normal) :
    // un compte ADMIN_PLATEFORME qui porte AUSSI un rôle de traitement EI, pour
    // isoler la vérification "aucun bypass organisationId" de la vérification
    // de rôle — si ce compte passait quand même, ce serait la preuve d'un
    // bypass caché dans exigerOrganisation(), pas juste un refus de rôle.
    const adminRoleCree = await prisma.utilisateur.create({
      data: {
        typeCompte: TypeCompte.ADMIN_PLATEFORME,
        email: `phase1-test-admin-role-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "AdminRole",
        emailVerifieLe: new Date(),
        roles: { create: [{ role: RoleUtilisateur.ADMIN_PLATEFORME }, { role: RoleUtilisateur.RESP_QUALITE }] },
      },
    });
    adminAvecRoleOrganisation = { id: adminRoleCree.id, email: adminRoleCree.email };
    idsUtilisateurs.push(adminAvecRoleOrganisation.id);

    const individuelCree = await prisma.utilisateur.create({
      data: {
        typeCompte: TypeCompte.INDIVIDUEL,
        email: `phase1-test-individuel-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "Individuel",
        emailVerifieLe: new Date(),
      },
    });
    individuel = { id: individuelCree.id, email: individuelCree.email };
    idsUtilisateurs.push(individuel.id);

    patientA = await prisma.patient.create({
      data: { organisationId: organisationA.id, identifiantInterne: "MT-PATIENT-A" },
    });
  });

  afterAll(async () => {
    await prisma.patient.deleteMany({ where: { id: patientA?.id } });
    await prisma.journalAudit.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.organisation.deleteMany({ where: { id: { in: idsOrganisations } } });
    await app.close();
  });

  it("Utilisateur A → sa propre donnée (patient A) = autorisé", async () => {
    const cookie = await connecter(utilisateurA.email);
    const res = await request(app.getHttpServer())
      .get(`/patients/${patientA.id}`)
      .set("Cookie", cookie)
      .expect(200);
    expect(res.body.id).toBe(patientA.id);
  });

  it("Utilisateur B → donnée de l'organisation A = refusé (404, jamais 403 — RM7)", async () => {
    const cookie = await connecter(utilisateurB.email);
    await request(app.getHttpServer()).get(`/patients/${patientA.id}`).set("Cookie", cookie).expect(404);
  });

  it("Utilisateur sans organisation (compte individuel) → endpoint organisation = refusé", async () => {
    const cookie = await connecter(individuel.email);
    // 403 : RolesGuard bloque déjà (le compte individuel ne porte aucun des
    // rôles PatientsController), avant même d'atteindre exigerOrganisation().
    await request(app.getHttpServer()).get("/patients").set("Cookie", cookie).expect(403);
  });

  it("ADMIN_PLATEFORME → endpoint organisation nécessitant organisationId = refusé (RolesGuard)", async () => {
    const cookie = await connecter(admin.email);
    await request(app.getHttpServer()).get("/patients").set("Cookie", cookie).expect(403);
  });

  it("ADMIN_PLATEFORME avec un rôle de traitement EI cumulé → toujours refusé (exigerOrganisation, aucun bypass)", async () => {
    const cookie = await connecter(adminAvecRoleOrganisation.email);
    // Ce compte PASSE le RolesGuard (il porte RESP_QUALITE), donc si la
    // requête aboutissait quand même, ce serait un vrai bypass de
    // l'isolation — c'est exigerOrganisation() qui doit le refuser.
    const res = await request(app.getHttpServer())
      .get("/evenements-indesirables/tableau-de-bord")
      .set("Cookie", cookie)
      .expect(403);
    expect(res.body.message).toMatch(/organisation/i);
  });
});
