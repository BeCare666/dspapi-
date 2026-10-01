import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { MailerService } from "../src/notifications/mailer.service.js";
import { RapportsPdfService } from "../src/sessions-evaluation/rapports-pdf.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// Conformité CDC §6 (auto-évaluation) : éléments typés (document à examiner /
// entretien / observation), score limité aux documents (§6.3), documents non
// validés + recommandations (§6.4), EI liés (§8.4), rapport PDF asynchrone
// (§6.4/§6.6) avec notification (§11.2), vue admin comparative (§6.5).
describe("Auto-évaluation — conformité CDC §6 (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let rapports: RapportsPdfService;

  const motDePasse = "TestConfP4!2026";
  const suffixe = randomUUID().slice(0, 8);
  const rapportsAnnonces: string[] = [];
  const idsUtilisateurs: string[] = [];

  let orgId: string;
  let autreOrgId: string;
  let respId: string;
  let grilleId: string;
  let sessionId: string;
  const elements: Record<string, string> = {};
  const criteres: Record<string, string> = {};

  const emails = {
    admin: `conf-p4-admin-${suffixe}@example.test`,
    resp: `conf-p4-resp-${suffixe}@example.test`,
    autre: `conf-p4-autre-${suffixe}@example.test`,
  };

  const cache = new Map<string, string>();
  async function connecter(email: string): Promise<string> {
    if (cache.has(email)) return cache.get(email)!;
    const res = await request(app.getHttpServer()).post("/auth/login").send({ email, motDePasse }).expect(200);
    const cookie = (res.headers["set-cookie"] as unknown as string[]).map((c) => c.split(";")[0]).join("; ");
    cache.set(email, cookie);
    return cookie;
  }

  async function creerUtilisateur(email: string, role: RoleUtilisateur, organisationId: string | null) {
    const u = await prisma.utilisateur.create({
      data: {
        organisationId,
        typeCompte: organisationId ? TypeCompte.ORGANISATION : TypeCompte.ADMIN_PLATEFORME,
        email,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "P4",
        emailVerifieLe: new Date(),
        roles: { create: { role } },
      },
    });
    idsUtilisateurs.push(u.id);
    return u.id;
  }

  beforeAll(async () => {
    const mailerFactice = {
      sendRapportDisponible: vi.fn(async (email: string) => {
        rapportsAnnonces.push(email);
      }),
      sendAlerteEiGraviteElevee: vi.fn(),
      sendAlerteNewsEmail: vi.fn(),
      sendInvitationEmail: vi.fn(),
      sendVerificationEmail: vi.fn(),
      sendPasswordResetEmail: vi.fn(),
      sendNotificationGenerique: vi.fn(),
    };
    const moduleFixture: TestingModule = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(MailerService)
      .useValue(mailerFactice)
      .compile();
    app = moduleFixture.createNestApplication();
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    await app.init();
    prisma = moduleFixture.get(PrismaService);
    rapports = moduleFixture.get(RapportsPdfService);

    orgId = (await prisma.organisation.create({
      data: { nom: `Conf P4 ${suffixe}`, ifu: `confp4-${suffixe}`, type: TypeEtablissement.ESPC },
    })).id;
    autreOrgId = (await prisma.organisation.create({
      data: { nom: `Conf P4 autre ${suffixe}`, ifu: `confp4b-${suffixe}`, type: TypeEtablissement.ESPC },
    })).id;
    await creerUtilisateur(emails.admin, RoleUtilisateur.ADMIN_PLATEFORME, null);
    respId = await creerUtilisateur(emails.resp, RoleUtilisateur.RESPONSABLE_COMPTE, orgId);
    await creerUtilisateur(emails.autre, RoleUtilisateur.RESPONSABLE_COMPTE, autreOrgId);
  });

  afterAll(async () => {
    const orgs = [orgId, autreOrgId];
    const sessions = await prisma.sessionEvaluation.findMany({ where: { organisationId: { in: orgs } }, select: { id: true } });
    const ids = sessions.map((s) => s.id);
    await prisma.rapportPdf.deleteMany({ where: { sessionId: { in: ids } } });
    await prisma.reponse.deleteMany({ where: { sessionId: { in: ids } } });
    await prisma.sessionEvaluation.deleteMany({ where: { id: { in: ids } } });
    await prisma.evenementIndesirable.deleteMany({ where: { organisationId: { in: orgs } } });
    if (grilleId) await prisma.grille.deleteMany({ where: { nom: `Grille test P4 ${suffixe}` } });
    await prisma.notification.deleteMany({ where: { destinataireId: { in: idsUtilisateurs } } });
    await prisma.journalAudit.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.organisation.deleteMany({ where: { id: { in: orgs } } });
    await app.close();
  });

  it("§6.1 / §6.6 — l'admin crée et publie une grille aux éléments typés ; un entretien n'entre pas dans le score par défaut", async () => {
    const cookie = await connecter(emails.admin);
    const res = await request(app.getHttpServer())
      .post("/grilles")
      .set("Cookie", cookie)
      .send({
        nom: `Grille test P4 ${suffixe}`,
        type: "ESPC",
        domaines: [
          {
            nom: "Organisation",
            ordre: 0,
            normes: [
              {
                code: "N1",
                libelle: "Prévention des risques",
                ordre: 0,
                criteres: [
                  {
                    code: "C1",
                    libelle: "Procédure chutes",
                    categorie: "essentiel",
                    ordre: 0,
                    elementsMesurables: [
                      { libelle: "Procédure écrite", ordre: 0 },
                      { libelle: "Registre des chutes", ordre: 1 },
                      { libelle: "Entretien avec le cadre", typeElement: "ENTRETIEN", ordre: 2 },
                    ],
                  },
                  {
                    code: "C2",
                    libelle: "Observation des locaux",
                    ordre: 1,
                    elementsMesurables: [{ libelle: "Sols secs", typeElement: "OBSERVATION", ordre: 0 }],
                  },
                  {
                    code: "C3",
                    libelle: "Hygiène des mains",
                    recommandation: "Afficher et diffuser le protocole d'hygiène des mains.",
                    ordre: 2,
                    elementsMesurables: [{ libelle: "Protocole hygiène des mains", ordre: 0 }],
                  },
                ],
              },
            ],
          },
        ],
      })
      .expect(201);
    grilleId = res.body.id;
    const tous = res.body.domaines[0].normes[0].criteres;
    for (const c of tous) {
      criteres[c.code] = c.id;
      for (const e of c.elementsMesurables) elements[e.libelle] = e.id;
    }
    const entretien = tous[0].elementsMesurables.find((e: { libelle: string }) => e.libelle === "Entretien avec le cadre");
    expect(entretien).toMatchObject({ typeElement: "ENTRETIEN", entreDansScore: false });
    expect(tous[0].elementsMesurables[0]).toMatchObject({ typeElement: "DOCUMENT_A_EXAMINER", entreDansScore: true });
    expect(tous[0].categorie).toBe("essentiel");

    await request(app.getHttpServer()).post(`/grilles/${grilleId}/publier`).set("Cookie", cookie).expect(201);
  });

  it("§6.3 — score calculé sur les seuls documents à examiner", async () => {
    const cookie = await connecter(emails.resp);
    const session = await request(app.getHttpServer())
      .post("/sessions-evaluation")
      .set("Cookie", cookie)
      .send({ grilleId })
      .expect(201);
    sessionId = session.body.id;

    const repondre = (libelle: string, valeur: boolean) =>
      request(app.getHttpServer())
        .put(`/sessions-evaluation/${sessionId}/reponses/${elements[libelle]}`)
        .set("Cookie", cookie)
        .send({ valeur })
        .expect(200);
    await repondre("Procédure écrite", true);
    await repondre("Registre des chutes", true);
    await repondre("Entretien avec le cadre", false); // n'invalide pas C1
    await repondre("Sols secs", true); // C2 : aucun document → non validé
    await repondre("Protocole hygiène des mains", false); // C3 : document manquant

    // §8.4 — EI de l'établissement rattaché au critère C3.
    await prisma.evenementIndesirable.create({
      data: {
        organisationId: orgId,
        declareParId: respId,
        description: `Absence de solution hydro-alcoolique ${suffixe}`,
        dateSurvenue: new Date(),
        personnesImpliquees: "Équipe de soins",
        critereId: criteres.C3,
      },
    });

    const soumise = await request(app.getHttpServer())
      .post(`/sessions-evaluation/${sessionId}/soumettre`)
      .set("Cookie", cookie)
      .expect(201);
    expect(soumise.body.scoreGlobal).toBeCloseTo(33.33, 1);
  });

  it("§6.4 / §8.4 — résultats : documents non validés, recommandation, EI liés, rapport en file d'attente", async () => {
    const cookie = await connecter(emails.resp);
    const res = await request(app.getHttpServer()).get(`/sessions-evaluation/${sessionId}/resultats`).set("Cookie", cookie).expect(200);
    const parCode = Object.fromEntries(res.body.criteresNonValides.map((c: { code: string }) => [c.code, c]));
    expect(Object.keys(parCode).sort()).toEqual(["C2", "C3"]);
    expect(parCode.C2.documentsNonValides).toEqual([]);
    expect(parCode.C3.documentsNonValides).toEqual([
      { elementMesurableId: elements["Protocole hygiène des mains"], libelle: "Protocole hygiène des mains", reponse: "NON" },
    ]);
    expect(parCode.C3.recommandation).toBe("Afficher et diffuser le protocole d'hygiène des mains.");
    expect(res.body.eiLies).toEqual([expect.objectContaining({ critereId: criteres.C3 })]);
    expect(res.body.rapport.statut).toBe("EN_COURS");

    await request(app.getHttpServer()).get(`/sessions-evaluation/${sessionId}/rapport.pdf`).set("Cookie", cookie).expect(409);
  });

  it("§6.6 / §11.2 — la file génère le PDF ; notification email + in-app ; téléchargement authentifié", async () => {
    await rapports.traiterFile();
    const cookie = await connecter(emails.resp);
    const etat = await request(app.getHttpServer()).get(`/sessions-evaluation/${sessionId}/rapport`).set("Cookie", cookie).expect(200);
    expect(etat.body.statut).toBe("DISPONIBLE");

    const pdf = await request(app.getHttpServer())
      .get(`/sessions-evaluation/${sessionId}/rapport.pdf`)
      .set("Cookie", cookie)
      .buffer(true)
      .parse((res, callback) => {
        const morceaux: Buffer[] = [];
        res.on("data", (m: Buffer) => morceaux.push(m));
        res.on("end", () => callback(null, Buffer.concat(morceaux)));
      })
      .expect(200);
    expect(pdf.headers["content-type"]).toContain("application/pdf");
    expect((pdf.body as Buffer).subarray(0, 5).toString()).toBe("%PDF-");

    expect(rapportsAnnonces).toContain(emails.resp);
    const notification = await prisma.notification.findFirst({
      where: { destinataireId: respId, type: "RAPPORT_AUTO_EVALUATION" },
    });
    expect(notification?.lienUrl).toBe(`/auto-evaluation/${sessionId}/resultats`);
  });

  it("RM7 — un autre établissement ne peut pas télécharger le rapport (404)", async () => {
    const cookie = await connecter(emails.autre);
    await request(app.getHttpServer()).get(`/sessions-evaluation/${sessionId}/rapport.pdf`).set("Cookie", cookie).expect(404);
  });

  it("§6.5 — vue admin comparative et historique des évaluations de l'établissement", async () => {
    const cookie = await connecter(emails.admin);
    const conformite = await request(app.getHttpServer()).get("/analytics/conformite").set("Cookie", cookie).expect(200);
    const ligne = conformite.body.find((l: { organisationId: string }) => l.organisationId === orgId);
    expect(ligne).toMatchObject({ grille: `Grille test P4 ${suffixe}`, nombreEvaluations: 1, scorePrecedent: null });
    expect(ligne.dernierScore).toBeCloseTo(33.33, 1);

    const detail = await request(app.getHttpServer()).get(`/organisations/${orgId}`).set("Cookie", cookie).expect(200);
    expect(detail.body.sessionsEvaluation).toHaveLength(1);

    await request(app.getHttpServer()).get("/analytics/conformite").set("Cookie", await connecter(emails.resp)).expect(403);
  });
});
