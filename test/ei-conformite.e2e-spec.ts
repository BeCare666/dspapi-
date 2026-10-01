import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { EvenementsMetierService } from "../src/evenements-metier/evenements-metier.service.js";
import { MailerService } from "../src/notifications/mailer.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// Conformité CDC §8 (module EI) : fiche de déclaration complète, circuit à
// 5 statuts historisé, qualification (gravité/type/priorité), causes guidées,
// responsable d'action choisi dans l'établissement, clôture conditionnée,
// alerte immédiate, correction tracée (§13.4), échelle de gravité admin (§12.4).
describe("Module EI — conformité CDC §8 (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;
  // §7.5 / §8.5 — les notifications partent de façon asynchrone (bus d'événements) :
  // on attend la fin des traitements avant de vérifier les envois.
  let evenements: EvenementsMetierService;

  const motDePasse = "TestConfP3!2026";
  const suffixe = randomUUID().slice(0, 8);
  const alertes: { email: string; evenementId: string; gravite: string }[] = [];
  const idsUtilisateurs: string[] = [];
  const idsNiveauxCrees: string[] = [];

  let orgId: string;
  let autreOrgId: string;
  let serviceId: string;
  let membreAutreOrg: string;
  let qualiteId: string;
  let eiCritique: string;
  let eiSimple: string;

  const GRAVITE_SANS_CONSEQUENCE = "gravite-sans-consequence";
  const GRAVITE_EIG = "gravite-eig";
  const GRAVITE_DECES = "gravite-deces";
  const TYPE_CHUTE = "type-ei-chute";

  const emails = {
    resp: `conf-p3-resp-${suffixe}@example.test`,
    qualite: `conf-p3-qualite-${suffixe}@example.test`,
    soignant: `conf-p3-soignant-${suffixe}@example.test`,
    admin: `conf-p3-admin-${suffixe}@example.test`,
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
        prenom: "P3",
        emailVerifieLe: new Date(),
        roles: { create: { role } },
      },
    });
    idsUtilisateurs.push(u.id);
    return u.id;
  }

  const declaration = () => ({
    dateSurvenue: new Date(Date.now() - 3_600_000).toISOString(),
    serviceId,
    typeEiId: TYPE_CHUTE,
    description: "Chute d'un patient lors d'un transfert lit-fauteuil.",
    niveauGraviteId: GRAVITE_SANS_CONSEQUENCE,
    personnesImpliquees: "Aide-soignant de garde ; témoin : infirmier du poste.",
  });

  beforeAll(async () => {
    const mailerFactice = {
      sendAlerteEiGraviteElevee: vi.fn(async (email: string, evenementId: string, gravite: string) => {
        alertes.push({ email, evenementId, gravite });
      }),
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
    evenements = moduleFixture.get(EvenementsMetierService);

    orgId = (await prisma.organisation.create({
      data: { nom: `Conf P3 ${suffixe}`, ifu: `confp3-${suffixe}`, type: TypeEtablissement.ESPC },
    })).id;
    autreOrgId = (await prisma.organisation.create({
      data: { nom: `Conf P3 autre ${suffixe}`, ifu: `confp3b-${suffixe}`, type: TypeEtablissement.ESPC },
    })).id;
    serviceId = (await prisma.service.create({ data: { organisationId: orgId, nom: `Bloc ${suffixe}` } })).id;

    await creerUtilisateur(emails.resp, RoleUtilisateur.RESPONSABLE_COMPTE, orgId);
    qualiteId = await creerUtilisateur(emails.qualite, RoleUtilisateur.RESP_QUALITE, orgId);
    await creerUtilisateur(emails.soignant, RoleUtilisateur.PERSONNEL_SOIGNANT, orgId);
    await creerUtilisateur(emails.admin, RoleUtilisateur.ADMIN_PLATEFORME, null);
    membreAutreOrg = await creerUtilisateur(`conf-p3-autre-${suffixe}@example.test`, RoleUtilisateur.RESP_QUALITE, autreOrgId);
  });

  afterAll(async () => {
    const orgs = [orgId, autreOrgId];
    const evenements = await prisma.evenementIndesirable.findMany({ where: { organisationId: { in: orgs } }, select: { id: true } });
    const ids = evenements.map((e) => e.id);
    await prisma.correctionEi.deleteMany({ where: { evenementId: { in: ids } } });
    await prisma.evenementTransition.deleteMany({ where: { evenementId: { in: ids } } });
    await prisma.actionCorrective.deleteMany({ where: { evenementId: { in: ids } } });
    await prisma.cause.deleteMany({ where: { evenementId: { in: ids } } });
    await prisma.evenementIndesirable.deleteMany({ where: { id: { in: ids } } });
    await prisma.niveauGraviteEi.deleteMany({ where: { id: { in: idsNiveauxCrees } } });
    await prisma.abonnementModule.deleteMany({ where: { organisationId: { in: orgs } } });
    await prisma.journalAudit.deleteMany({ where: { OR: [{ organisationId: { in: orgs } }, { utilisateurId: { in: idsUtilisateurs } }] } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.service.deleteMany({ where: { organisationId: { in: orgs } } });
    await prisma.organisation.deleteMany({ where: { id: { in: orgs } } });
    await app.close();
  });

  // ------------------------------------------------------------ §8.1

  it("§8.1 — champs obligatoires : personnes impliquées, service ou lieu, date non future (400)", async () => {
    const cookie = await connecter(emails.soignant);
    const { personnesImpliquees: _p, ...sansPersonnes } = declaration();
    await request(app.getHttpServer()).post("/evenements-indesirables").set("Cookie", cookie).send(sansPersonnes).expect(400);
    await request(app.getHttpServer())
      .post("/evenements-indesirables")
      .set("Cookie", cookie)
      .send({ ...declaration(), serviceId: undefined })
      .expect(400);
    await request(app.getHttpServer())
      .post("/evenements-indesirables")
      .set("Cookie", cookie)
      .send({ ...declaration(), dateSurvenue: new Date(Date.now() + 86_400_000).toISOString() })
      .expect(400);
  });

  it("§8.1 — déclaration complète (gravité non élevée) : statut « déclaré », aucune alerte", async () => {
    alertes.length = 0;
    const cookie = await connecter(emails.soignant);
    const res = await request(app.getHttpServer()).post("/evenements-indesirables").set("Cookie", cookie).send(declaration()).expect(201);
    eiSimple = res.body.id;
    expect(res.body.statut).toBe("DECLARE");
    expect(res.body.personnesImpliquees).toContain("témoin");
    expect(res.body.niveauGravite.libelle).toBe("Incident sans conséquence");
    await evenements.attendreTraitements();
    expect(alertes).toEqual([]);
  });

  it("§8.3 — gravité élevée : alerte immédiate dès la déclaration (responsable qualité + direction)", async () => {
    alertes.length = 0;
    const cookie = await connecter(emails.soignant);
    const res = await request(app.getHttpServer())
      .post("/evenements-indesirables")
      .set("Cookie", cookie)
      .send({ ...declaration(), serviceId: undefined, lieu: "Couloir du 2e étage", niveauGraviteId: GRAVITE_EIG })
      .expect(201);
    eiCritique = res.body.id;
    await evenements.attendreTraitements();
    expect(alertes.map((a) => a.email).sort()).toEqual([emails.qualite, emails.resp].sort());
    expect(alertes[0]).toMatchObject({ evenementId: eiCritique, gravite: "Événement indésirable grave" });
  });

  it("§8.2 — file d'attente : EI déclarés, les plus graves d'abord", async () => {
    const cookie = await connecter(emails.qualite);
    const res = await request(app.getHttpServer()).get("/evenements-indesirables/file-attente").set("Cookie", cookie).expect(200);
    expect(res.body.map((e: { id: string }) => e.id)).toEqual([eiCritique, eiSimple]);
  });

  // ------------------------------------------------------------ §8.2 qualification

  it("§8.2 — qualification : soignant refusé (403) ; confirmation gravité/type/priorité, transition historisée ; pas deux fois (409)", async () => {
    const corps = { niveauGraviteId: GRAVITE_DECES, typeEiId: TYPE_CHUTE, priorite: "HAUTE" };
    await request(app.getHttpServer())
      .patch(`/evenements-indesirables/${eiSimple}/qualifier`)
      .set("Cookie", await connecter(emails.soignant))
      .send(corps)
      .expect(403);

    alertes.length = 0;
    const cookie = await connecter(emails.qualite);
    const res = await request(app.getHttpServer())
      .patch(`/evenements-indesirables/${eiSimple}/qualifier`)
      .set("Cookie", cookie)
      .send(corps)
      .expect(200);
    expect(res.body).toMatchObject({ statut: "QUALIFIE", priorite: "HAUTE", niveauGraviteId: GRAVITE_DECES });
    // Gravité réévaluée à la hausse → alerte envoyée à ce moment-là.
    await evenements.attendreTraitements();
    expect(alertes.length).toBe(2);

    const transitions = await prisma.evenementTransition.findMany({ where: { evenementId: eiSimple } });
    expect(transitions).toEqual([expect.objectContaining({ ancienStatut: "DECLARE", nouveauStatut: "QUALIFIE", utilisateurId: qualiteId })]);

    await request(app.getHttpServer())
      .patch(`/evenements-indesirables/${eiSimple}/qualifier`)
      .set("Cookie", cookie)
      .send(corps)
      .expect(409);
  });

  // ------------------------------------------------------------ §8.2 circuit

  it("§8.5 — circuit strict : pas de saut d'étape, causes seulement en analyse, plan d'action seulement avec une cause", async () => {
    const cookie = await connecter(emails.qualite);
    const url = `/evenements-indesirables/${eiSimple}`;
    await request(app.getHttpServer()).post(`${url}/causes`).set("Cookie", cookie).send({ type: "IMMEDIATE", description: "Sol glissant" }).expect(409);
    await request(app.getHttpServer()).patch(`${url}/statut`).set("Cookie", cookie).send({ statut: "PLAN_ACTION" }).expect(409);
    await request(app.getHttpServer()).patch(`${url}/statut`).set("Cookie", cookie).send({ statut: "EN_ANALYSE" }).expect(200);
    await request(app.getHttpServer()).patch(`${url}/statut`).set("Cookie", cookie).send({ statut: "PLAN_ACTION" }).expect(409);
  });

  it("§8.2 — cause guidée (« 5 pourquoi ») enregistrée", async () => {
    const cookie = await connecter(emails.qualite);
    const res = await request(app.getHttpServer())
      .post(`/evenements-indesirables/${eiSimple}/causes`)
      .set("Cookie", cookie)
      .send({
        type: "PROFONDE",
        pourquois: ["Le patient a glissé", "Le sol était mouillé", "Le nettoyage a eu lieu pendant les transferts", ""],
        description: "Planning de nettoyage non coordonné avec les soins",
      })
      .expect(201);
    expect(res.body.pourquois).toEqual([
      "Le patient a glissé",
      "Le sol était mouillé",
      "Le nettoyage a eu lieu pendant les transferts",
    ]);
    await request(app.getHttpServer())
      .patch(`/evenements-indesirables/${eiSimple}/statut`)
      .set("Cookie", cookie)
      .send({ statut: "PLAN_ACTION" })
      .expect(200);
  });

  it("§8.2 — responsable d'action : membre d'un autre établissement refusé (400), membre de l'établissement accepté", async () => {
    const cookie = await connecter(emails.qualite);
    const url = `/evenements-indesirables/${eiSimple}/actions-correctives`;
    const echeance = new Date(Date.now() + 7 * 86_400_000).toISOString();
    await request(app.getHttpServer())
      .post(url)
      .set("Cookie", cookie)
      .send({ description: "Revoir le planning de nettoyage", responsableId: membreAutreOrg, echeance })
      .expect(400);
    const res = await request(app.getHttpServer())
      .post(url)
      .set("Cookie", cookie)
      .send({ description: "Revoir le planning de nettoyage", responsableId: qualiteId, echeance })
      .expect(201);
    expect(res.body.responsable.id).toBe(qualiteId);
  });

  it("§8.2 — clôture refusée tant qu'une action n'est pas réalisée (409), puis acceptée et journalisée", async () => {
    const cookie = await connecter(emails.qualite);
    const url = `/evenements-indesirables/${eiSimple}`;
    await request(app.getHttpServer()).patch(`${url}/statut`).set("Cookie", cookie).send({ statut: "CLOTURE" }).expect(409);

    const action = await prisma.actionCorrective.findFirstOrThrow({ where: { evenementId: eiSimple } });
    await request(app.getHttpServer())
      .patch(`${url}/actions-correctives/${action.id}`)
      .set("Cookie", cookie)
      .send({ statut: "REALISEE" })
      .expect(200);
    const res = await request(app.getHttpServer()).patch(`${url}/statut`).set("Cookie", cookie).send({ statut: "CLOTURE" }).expect(200);
    expect(res.body.statut).toBe("CLOTURE");
    expect(res.body.dateCloture).not.toBeNull();

    const transitions = await prisma.evenementTransition.findMany({ where: { evenementId: eiSimple }, orderBy: { createdAt: "asc" } });
    expect(transitions.map((t) => t.nouveauStatut)).toEqual(["QUALIFIE", "EN_ANALYSE", "PLAN_ACTION", "CLOTURE"]);
    const audit = await prisma.journalAudit.findFirst({ where: { action: "ei.cloturer", entiteId: eiSimple } });
    expect(audit?.utilisateurId).toBe(qualiteId);
  });

  // ------------------------------------------------------------ §13.4

  it("§13.4 — correction tracée de la fiche : motif obligatoire, valeurs avant/après conservées", async () => {
    const cookie = await connecter(emails.qualite);
    const url = `/evenements-indesirables/${eiCritique}/corriger`;
    await request(app.getHttpServer()).patch(url).set("Cookie", cookie).send({ description: "Description corrigée" }).expect(400);
    await request(app.getHttpServer()).patch(url).set("Cookie", cookie).send({ motif: "Rien ne change ici" }).expect(400);
    await request(app.getHttpServer())
      .patch(url)
      .set("Cookie", cookie)
      .send({ description: "Chute d'un patient dans le couloir du 2e étage.", motif: "Précision du lieu exact" })
      .expect(200);
    const corrections = await prisma.correctionEi.findMany({ where: { evenementId: eiCritique } });
    expect(corrections).toHaveLength(1);
    expect(corrections[0].valeursAvant).toEqual({ description: "Chute d'un patient lors d'un transfert lit-fauteuil." });
    expect(corrections[0].valeursApres).toEqual({ description: "Chute d'un patient dans le couloir du 2e étage." });
  });

  // ------------------------------------------------------------ §8.3

  it("§8.3 — tableau de bord par typologie, gravité, statut ; export sur période (date de survenue)", async () => {
    const cookie = await connecter(emails.qualite);
    const tdb = await request(app.getHttpServer()).get("/evenements-indesirables/tableau-de-bord").set("Cookie", cookie).expect(200);
    expect(tdb.body.parType[TYPE_CHUTE]).toBe(2);
    expect(tdb.body.parStatut).toEqual({ CLOTURE: 1, DECLARE: 1 });
    expect(tdb.body.parGravite).toEqual({ [GRAVITE_DECES]: 1, [GRAVITE_EIG]: 1 });

    const aujourdhui = new Date().toISOString().slice(0, 10);
    const dedans = await request(app.getHttpServer())
      .get(`/evenements-indesirables/export?debut=${aujourdhui}&fin=${aujourdhui}`)
      .set("Cookie", cookie)
      .expect(200);
    expect(dedans.body).toHaveLength(2);
    const dehors = await request(app.getHttpServer())
      .get("/evenements-indesirables/export?debut=2020-01-01&fin=2020-12-31")
      .set("Cookie", cookie)
      .expect(200);
    expect(dehors.body).toHaveLength(0);
  });

  // ------------------------------------------------------------ §12.4

  it("§12.4 — échelle de gravité : création par l'admin, refus pour un soignant (403), niveau utilisé non modifiable (409)", async () => {
    const cookieAdmin = await connecter(emails.admin);
    const res = await request(app.getHttpServer())
      .post("/niveaux-gravite-ei")
      .set("Cookie", cookieAdmin)
      .send({ libelle: `Niveau test ${suffixe}`, ordre: 50, critique: false })
      .expect(201);
    idsNiveauxCrees.push(res.body.id);

    await request(app.getHttpServer())
      .post("/niveaux-gravite-ei")
      .set("Cookie", await connecter(emails.soignant))
      .send({ libelle: `Autre ${suffixe}`, ordre: 51, critique: false })
      .expect(403);

    await request(app.getHttpServer())
      .patch(`/niveaux-gravite-ei/${GRAVITE_EIG}`)
      .set("Cookie", cookieAdmin)
      .send({ libelle: "Renommé" })
      .expect(409);
    await request(app.getHttpServer())
      .patch(`/niveaux-gravite-ei/${res.body.id}`)
      .set("Cookie", cookieAdmin)
      .send({ ordre: 52 })
      .expect(200);
  });
});
