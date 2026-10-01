import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { MailerService } from "../src/notifications/mailer.service.js";
import { RoleUtilisateur, StatutReservation, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// Conformité CDC §12 (tableau de bord administrateur) : fiche établissement
// détaillée (§12.1), désactivation effective d'un établissement (§12.1),
// statistiques par période et évolution (§12.6), objectifs des formations et
// suivi des présences (§9, §12.5).
describe("Tableau de bord administrateur — conformité CDC §12 (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const motDePasse = "TestConfP7!2026";
  const suffixe = randomUUID().slice(0, 8);
  const idsUtilisateurs: string[] = [];
  let orgId: string;
  let respId: string;
  let formationId: string;

  const emails = {
    admin: `conf-p7-admin-${suffixe}@example.test`,
    resp: `conf-p7-resp-${suffixe}@example.test`,
  };

  const cache = new Map<string, string>();
  async function connecter(email: string): Promise<string> {
    if (cache.has(email)) return cache.get(email)!;
    const res = await request(app.getHttpServer()).post("/auth/login").send({ email, motDePasse }).expect(200);
    const cookie = (res.headers["set-cookie"] as unknown as string[]).map((c) => c.split(";")[0]).join("; ");
    cache.set(email, cookie);
    return cookie;
  }

  beforeAll(async () => {
    const mailerFactice = { sendNotificationGenerique: vi.fn(), sendAlerteNewsEmail: vi.fn(), sendAlerteEiGraviteElevee: vi.fn() };
    const moduleFixture: TestingModule = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(MailerService)
      .useValue(mailerFactice)
      .compile();
    app = moduleFixture.createNestApplication();
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    await app.init();
    prisma = moduleFixture.get(PrismaService);

    orgId = (await prisma.organisation.create({
      data: { nom: `Conf P7 ${suffixe}`, ifu: `confp7-${suffixe}`, type: TypeEtablissement.EH, telephone: "+22901000000" },
    })).id;
    for (const [email, role, org] of [
      [emails.admin, RoleUtilisateur.ADMIN_PLATEFORME, null],
      [emails.resp, RoleUtilisateur.RESPONSABLE_COMPTE, orgId],
    ] as const) {
      const u = await prisma.utilisateur.create({
        data: {
          organisationId: org,
          typeCompte: org ? TypeCompte.ORGANISATION : TypeCompte.ADMIN_PLATEFORME,
          email,
          motDePasseHash: await bcrypt.hash(motDePasse, 4),
          nom: "Test",
          prenom: "P7",
          emailVerifieLe: new Date(),
          roles: { create: { role } },
        },
      });
      idsUtilisateurs.push(u.id);
      if (role === RoleUtilisateur.RESPONSABLE_COMPTE) respId = u.id;
    }
  });

  afterAll(async () => {
    await prisma.reservation.deleteMany({ where: { organisationId: orgId } });
    if (formationId) await prisma.formation.delete({ where: { id: formationId } });
    await prisma.evenementIndesirable.deleteMany({ where: { organisationId: orgId } });
    await prisma.notification.deleteMany({ where: { destinataireId: { in: idsUtilisateurs } } });
    await prisma.journalAudit.deleteMany({ where: { OR: [{ organisationId: orgId }, { utilisateurId: { in: idsUtilisateurs } }] } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.organisation.delete({ where: { id: orgId } });
    await app.close();
  });

  it("§9 / §12.5 — objectifs de formation ; clôture de session avec nombre de présents (au plus la formule)", async () => {
    const admin = await connecter(emails.admin);
    const formation = await request(app.getHttpServer())
      .post("/formations")
      .set("Cookie", admin)
      .send({
        titre: `Formation P7 ${suffixe}`,
        description: "Formation de test supprimée après exécution.",
        objectifs: "Savoir déclarer un événement indésirable.",
        prixIndividuel: 1000,
        prixGroupe5: 4000,
        prixGroupe10: 7000,
      })
      .expect(201);
    formationId = formation.body.id;
    const publique = await request(app.getHttpServer()).get(`/formations/${formationId}`).expect(200);
    expect(publique.body.objectifs).toBe("Savoir déclarer un événement indésirable.");

    const reservation = await prisma.reservation.create({
      data: {
        formationId,
        utilisateurId: respId,
        organisationId: orgId,
        formule: "GROUPE_5",
        tarifApplique: 4000,
        statut: StatutReservation.CONFIRMEE,
        dateRdv: new Date(),
      },
    });
    await request(app.getHttpServer()).post(`/reservations/${reservation.id}/realiser`).set("Cookie", admin).send({ participantsPresents: 6 }).expect(400);
    const realisee = await request(app.getHttpServer())
      .post(`/reservations/${reservation.id}/realiser`)
      .set("Cookie", admin)
      .send({ participantsPresents: 4 })
      .expect(201);
    expect(realisee.body).toMatchObject({ statut: "REALISEE", participantsPresents: 4, presenceConfirmee: true });
  });

  it("§12.1 — fiche établissement : alertes et EI agrégés, formations réservées, modules", async () => {
    await prisma.evenementIndesirable.create({
      data: {
        organisationId: orgId,
        declareParId: respId,
        description: `EI P7 ${suffixe}`,
        dateSurvenue: new Date(),
        personnesImpliquees: "Donnée de test",
      },
    });
    const res = await request(app.getHttpServer()).get(`/organisations/${orgId}`).set("Cookie", await connecter(emails.admin)).expect(200);
    expect(res.body.evenementsParStatut).toEqual({ DECLARE: 1 });
    expect(res.body.alertesNews).toEqual([]);
    expect(res.body.reservationsFormations).toEqual([expect.objectContaining({ statut: "REALISEE", formation: { titre: `Formation P7 ${suffixe}` } })]);
    expect(res.body.telephone).toBe("+22901000000");
    // Aucune donnée individuelle d'EI (description) n'est exposée dans la fiche.
    expect(JSON.stringify(res.body)).not.toContain(`EI P7 ${suffixe}`);
  });

  it("§12.6 — activité par période : totaux, série mensuelle, établissements par module ; réservé à l'admin", async () => {
    const aujourdhui = new Date().toISOString().slice(0, 10);
    const res = await request(app.getHttpServer())
      .get(`/analytics/activite?debut=${aujourdhui}&fin=${aujourdhui}`)
      .set("Cookie", await connecter(emails.admin))
      .expect(200);
    expect(res.body.mois).toEqual([aujourdhui.slice(0, 7)]);
    expect(res.body.totaux.etablissementsInscrits).toBeGreaterThanOrEqual(1);
    expect(res.body.totaux.evenementsIndesirables).toBeGreaterThanOrEqual(1);
    expect(res.body.totaux.reservations).toBeGreaterThanOrEqual(1);
    expect(res.body.series.etablissementsInscrits[0]).toBe(res.body.totaux.etablissementsInscrits);

    const vide = await request(app.getHttpServer())
      .get("/analytics/activite?debut=2020-01-01&fin=2020-03-31")
      .set("Cookie", await connecter(emails.admin))
      .expect(200);
    expect(vide.body.mois).toEqual(["2020-01", "2020-02", "2020-03"]);
    expect(vide.body.series.reservations).toEqual([0, 0, 0]);

    await request(app.getHttpServer()).get("/analytics/activite").set("Cookie", await connecter(emails.resp)).expect(403);
  });

  it("§12.1 — désactivation d'un établissement : connexion refusée et sessions fermées ; réactivation", async () => {
    const cookieResp = await connecter(emails.resp);
    const admin = await connecter(emails.admin);
    await request(app.getHttpServer()).post(`/organisations/${orgId}/desactiver`).set("Cookie", admin).expect(200);

    await request(app.getHttpServer()).post("/auth/refresh").set("Cookie", cookieResp).expect(401);
    const refus = await request(app.getHttpServer()).post("/auth/login").send({ email: emails.resp, motDePasse }).expect(403);
    expect(refus.body.message).toContain("suspendu");

    await request(app.getHttpServer()).post(`/organisations/${orgId}/activer`).set("Cookie", admin).expect(200);
    await request(app.getHttpServer()).post("/auth/login").send({ email: emails.resp, motDePasse }).expect(200);
  });
});
