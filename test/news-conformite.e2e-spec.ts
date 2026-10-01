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

// Conformité CDC §7 (module NEWS) : fiche patient minimale, filtrage par
// service, fréquence de surveillance suggérée, seuils paramétrables (§12.3),
// alerte au personnel désigné, correction tracée (§13.4), export de la fiche
// (§7.4), journalisation création/clôture (§13.2).
describe("Module NEWS — conformité CDC §7 (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;
  // §7.5 / §8.5 — les notifications partent de façon asynchrone (bus d'événements) :
  // on attend la fin des traitements avant de vérifier les envois.
  let evenements: EvenementsMetierService;

  const motDePasse = "TestConfP2!2026";
  const suffixe = randomUUID().slice(0, 8);
  const alertesEnvoyees: { email: string; libelle: string; niveau: string; service: string | null }[] = [];
  const idsUtilisateurs: string[] = [];
  const parametresInitiaux = new Map<string, string>();

  let orgId: string;
  let autreOrgId: string;
  let serviceS1: string;
  let serviceS2: string;
  let serviceAutreOrg: string;
  let patientS1: string;
  let patientS2: string;
  let mesureNormale: string;

  const emails = {
    resp: `conf-p2-resp-${suffixe}@example.test`,
    qualite: `conf-p2-qualite-${suffixe}@example.test`,
    soignantS1: `conf-p2-soignant1-${suffixe}@example.test`,
    soignantS2: `conf-p2-soignant2-${suffixe}@example.test`,
    admin: `conf-p2-admin-${suffixe}@example.test`,
  };

  const cache = new Map<string, string>();
  async function connecter(email: string): Promise<string> {
    if (cache.has(email)) return cache.get(email)!;
    const res = await request(app.getHttpServer()).post("/auth/login").send({ email, motDePasse }).expect(200);
    const cookie = (res.headers["set-cookie"] as unknown as string[]).map((c) => c.split(";")[0]).join("; ");
    cache.set(email, cookie);
    return cookie;
  }

  async function creerUtilisateur(email: string, role: RoleUtilisateur, organisationId: string | null, serviceId?: string) {
    const u = await prisma.utilisateur.create({
      data: {
        organisationId,
        serviceId,
        typeCompte: organisationId ? TypeCompte.ORGANISATION : TypeCompte.ADMIN_PLATEFORME,
        email,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "P2",
        emailVerifieLe: new Date(),
        roles: { create: { role } },
      },
    });
    idsUtilisateurs.push(u.id);
    return u.id;
  }

  const mesureNormaleDto = {
    frequenceRespiratoire: 16,
    saturationOxygene: 98,
    oxygenoSupplementation: false,
    temperature: 37,
    pressionArterielleSystolique: 120,
    frequenceCardiaque: 70,
    niveauConscience: "ALERTE",
  };
  // 3 (FR ≤ 8) + 3 (SpO2 ≤ 91) + 3 (FC ≥ 131) = 9 → risque élevé
  const mesureEleveeDto = { ...mesureNormaleDto, frequenceRespiratoire: 8, saturationOxygene: 90, frequenceCardiaque: 135 };

  beforeAll(async () => {
    const mailerFactice = {
      sendAlerteNewsEmail: vi.fn(async (email: string, libelle: string, niveau: string, service: string | null) => {
        alertesEnvoyees.push({ email, libelle, niveau, service });
      }),
      sendInvitationEmail: vi.fn(),
      sendVerificationEmail: vi.fn(),
      sendPasswordResetEmail: vi.fn(),
      sendAlerteEiGraviteElevee: vi.fn(),
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

    for (const p of await prisma.parametrePlateforme.findMany({ where: { cle: { startsWith: "news_" } } })) {
      parametresInitiaux.set(p.cle, p.valeur);
    }

    orgId = (await prisma.organisation.create({
      data: { nom: `Conf P2 ${suffixe}`, ifu: `confp2-${suffixe}`, type: TypeEtablissement.EH },
    })).id;
    autreOrgId = (await prisma.organisation.create({
      data: { nom: `Conf P2 autre ${suffixe}`, ifu: `confp2b-${suffixe}`, type: TypeEtablissement.EH },
    })).id;
    serviceS1 = (await prisma.service.create({ data: { organisationId: orgId, nom: `Urgences ${suffixe}` } })).id;
    serviceS2 = (await prisma.service.create({ data: { organisationId: orgId, nom: `Maternité ${suffixe}` } })).id;
    serviceAutreOrg = (await prisma.service.create({ data: { organisationId: autreOrgId, nom: `Autre ${suffixe}` } })).id;

    await creerUtilisateur(emails.resp, RoleUtilisateur.RESPONSABLE_COMPTE, orgId);
    await creerUtilisateur(emails.qualite, RoleUtilisateur.RESP_QUALITE, orgId);
    await creerUtilisateur(emails.soignantS1, RoleUtilisateur.PERSONNEL_SOIGNANT, orgId, serviceS1);
    await creerUtilisateur(emails.soignantS2, RoleUtilisateur.PERSONNEL_SOIGNANT, orgId, serviceS2);
    await creerUtilisateur(emails.admin, RoleUtilisateur.ADMIN_PLATEFORME, null);
  });

  afterAll(async () => {
    for (const [cle, valeur] of parametresInitiaux) {
      await prisma.parametrePlateforme.update({ where: { cle }, data: { valeur } });
    }
    const orgs = [orgId, autreOrgId];
    const patients = await prisma.patient.findMany({ where: { organisationId: { in: orgs } }, select: { id: true } });
    const idsPatients = patients.map((p) => p.id);
    await prisma.intervention.deleteMany({ where: { alerte: { patientId: { in: idsPatients } } } });
    await prisma.alerte.deleteMany({ where: { patientId: { in: idsPatients } } });
    await prisma.correctionMesureNews.deleteMany({ where: { mesure: { patientId: { in: idsPatients } } } });
    await prisma.mesureNews.deleteMany({ where: { patientId: { in: idsPatients } } });
    await prisma.patient.deleteMany({ where: { id: { in: idsPatients } } });
    await prisma.abonnementModule.deleteMany({ where: { organisationId: { in: orgs } } });
    await prisma.journalAudit.deleteMany({ where: { OR: [{ organisationId: { in: orgs } }, { utilisateurId: { in: idsUtilisateurs } }] } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.service.deleteMany({ where: { organisationId: { in: orgs } } });
    await prisma.organisation.deleteMany({ where: { id: { in: orgs } } });
    await app.close();
  });

  // ------------------------------------------------------------- §7.1 fiche

  it("§7.1 — les champs d'identité sont refusés (400)", async () => {
    const cookie = await connecter(emails.resp);
    await request(app.getHttpServer())
      .post("/patients")
      .set("Cookie", cookie)
      .send({ identifiantInterne: "P-001", nom: "Doe", prenom: "Jane" })
      .expect(400);
  });

  it("§7.1 — fiche minimale créée (identifiant, service, lit), aucune donnée d'identité renvoyée, création journalisée", async () => {
    const cookie = await connecter(emails.resp);
    const res = await request(app.getHttpServer())
      .post("/patients")
      .set("Cookie", cookie)
      .send({ identifiantInterne: `P1-${suffixe}`, serviceId: serviceS1, numeroLit: "12B" })
      .expect(201);
    patientS1 = res.body.id;
    expect(res.body).toMatchObject({ identifiantInterne: `P1-${suffixe}`, numeroLit: "12B", serviceId: serviceS1 });
    expect(res.body.service).toEqual({ id: serviceS1, nom: `Urgences ${suffixe}` });
    for (const champ of ["nom", "prenom", "dateNaissance", "sexe", "numeroDossier"]) {
      expect(res.body).not.toHaveProperty(champ);
    }
    const audit = await prisma.journalAudit.findFirst({ where: { action: "patient.creer", entiteId: patientS1 } });
    expect(audit?.organisationId).toBe(orgId);
  });

  it("§7.1 — même identifiant pour un patient déjà hospitalisé → 409 ; service d'un autre établissement → 404", async () => {
    const cookie = await connecter(emails.resp);
    await request(app.getHttpServer())
      .post("/patients")
      .set("Cookie", cookie)
      .send({ identifiantInterne: `P1-${suffixe}` })
      .expect(409);
    await request(app.getHttpServer())
      .post("/patients")
      .set("Cookie", cookie)
      .send({ identifiantInterne: `PX-${suffixe}`, serviceId: serviceAutreOrg })
      .expect(404);
  });

  it("7.10 — un soignant rattaché à un service ne voit que les patients de son service", async () => {
    const cookieResp = await connecter(emails.resp);
    const res = await request(app.getHttpServer())
      .post("/patients")
      .set("Cookie", cookieResp)
      .send({ identifiantInterne: `P2-${suffixe}`, serviceId: serviceS2 })
      .expect(201);
    patientS2 = res.body.id;

    const cookieS1 = await connecter(emails.soignantS1);
    const liste = await request(app.getHttpServer()).get("/patients").set("Cookie", cookieS1).expect(200);
    expect(liste.body.map((p: { id: string }) => p.id)).toEqual([patientS1]);
    await request(app.getHttpServer()).get(`/patients/${patientS2}`).set("Cookie", cookieS1).expect(404);
  });

  // ------------------------------------------------- §7.3 / §12.3 surveillance

  it("§7.3 — paramétrage exposé et fréquence suggérée figée sur la mesure", async () => {
    const cookie = await connecter(emails.soignantS1);
    const param = await request(app.getHttpServer()).get("/patients/parametrage-news").set("Cookie", cookie).expect(200);
    expect(param.body.seuils).toEqual({
      moyen: Number(parametresInitiaux.get("news_seuil_moyen") ?? 5),
      eleve: Number(parametresInitiaux.get("news_seuil_eleve") ?? 7),
    });

    const res = await request(app.getHttpServer())
      .post(`/patients/${patientS1}/mesures`)
      .set("Cookie", cookie)
      .send(mesureNormaleDto)
      .expect(201);
    mesureNormale = res.body.id;
    expect(res.body.scoreTotal).toBe(0);
    expect(res.body.niveauRisque).toBe("BAS");
    expect(res.body.frequenceSurveillance).toBe(param.body.frequences.BAS);
  });

  it("§12.3 — l'admin modifie la fréquence ; seuils incohérents refusés (400) ; seule la mesure suivante est concernée", async () => {
    const cookieAdmin = await connecter(emails.admin);
    const seuilEleve = parametresInitiaux.get("news_seuil_eleve") ?? "7";
    await request(app.getHttpServer())
      .patch("/parametres/news_seuil_moyen")
      .set("Cookie", cookieAdmin)
      .send({ valeur: seuilEleve })
      .expect(400);
    await request(app.getHttpServer())
      .patch("/parametres/news_frequence_bas")
      .set("Cookie", cookieAdmin)
      .send({ valeur: `Toutes les 8 heures ${suffixe}` })
      .expect(200);

    const cookie = await connecter(emails.soignantS1);
    const res = await request(app.getHttpServer())
      .post(`/patients/${patientS1}/mesures`)
      .set("Cookie", cookie)
      .send(mesureNormaleDto)
      .expect(201);
    expect(res.body.frequenceSurveillance).toBe(`Toutes les 8 heures ${suffixe}`);

    const ancienne = await prisma.mesureNews.findUniqueOrThrow({ where: { id: mesureNormale } });
    expect(ancienne.frequenceSurveillance).not.toBe(`Toutes les 8 heures ${suffixe}`);
  });

  it("§7.3 — alerte élevée envoyée au personnel désigné (soignants du service + responsables), sans identité", async () => {
    alertesEnvoyees.length = 0;
    const cookie = await connecter(emails.soignantS1);
    const res = await request(app.getHttpServer())
      .post(`/patients/${patientS1}/mesures`)
      .set("Cookie", cookie)
      .send(mesureEleveeDto)
      .expect(201);
    expect(res.body.scoreTotal).toBe(9);
    expect(res.body.niveauRisque).toBe("ELEVE");

    await evenements.attendreTraitements();
    const destinataires = alertesEnvoyees.map((a) => a.email).sort();
    expect(destinataires).toEqual([emails.qualite, emails.resp, emails.soignantS1].sort());
    expect(alertesEnvoyees[0].libelle).toBe(`patient P1-${suffixe} (lit 12B)`);
    expect(alertesEnvoyees[0].service).toBe(`Urgences ${suffixe}`);

    // La liste des alertes du soignant S2 ne contient pas cette alerte (autre service).
    const cookieS2 = await connecter(emails.soignantS2);
    const alertesS2 = await request(app.getHttpServer()).get("/alertes").set("Cookie", cookieS2).expect(200);
    expect(alertesS2.body).toEqual([]);
    const alertesS1 = await request(app.getHttpServer()).get("/alertes").set("Cookie", cookie).expect(200);
    expect(alertesS1.body).toHaveLength(1);
    expect(alertesS1.body[0].patient).not.toHaveProperty("nom");
  });

  // ------------------------------------------------------ §13.4 correction

  it("§13.4 — correction sans motif refusée (400)", async () => {
    const cookie = await connecter(emails.soignantS1);
    await request(app.getHttpServer())
      .patch(`/patients/${patientS1}/mesures/${mesureNormale}`)
      .set("Cookie", cookie)
      .send(mesureEleveeDto)
      .expect(400);
  });

  it("§13.4 — correction tracée : score recalculé, valeurs avant/après conservées, alerte créée si le risque devient élevé", async () => {
    alertesEnvoyees.length = 0;
    const cookie = await connecter(emails.soignantS1);
    const res = await request(app.getHttpServer())
      .patch(`/patients/${patientS1}/mesures/${mesureNormale}`)
      .set("Cookie", cookie)
      .send({ ...mesureEleveeDto, motif: "Erreur de saisie de la FR et de la SpO2" })
      .expect(200);
    expect(res.body.scoreTotal).toBe(9);
    expect(res.body.niveauRisque).toBe("ELEVE");

    const corrections = await prisma.correctionMesureNews.findMany({ where: { mesureId: mesureNormale } });
    expect(corrections).toHaveLength(1);
    expect(corrections[0].motif).toBe("Erreur de saisie de la FR et de la SpO2");
    expect(corrections[0].valeursAvant).toMatchObject({ frequenceRespiratoire: 16, scoreTotal: 0, niveauRisque: "BAS" });
    expect(corrections[0].valeursApres).toMatchObject({ frequenceRespiratoire: 8, scoreTotal: 9, niveauRisque: "ELEVE" });

    const alerte = await prisma.alerte.findUnique({ where: { mesureId: mesureNormale } });
    expect(alerte?.niveauRisque).toBe("ELEVE");
    await evenements.attendreTraitements();
    expect(alertesEnvoyees.length).toBeGreaterThan(0);
  });

  // ---------------------------------------------------------- §7.4 export

  it("§7.4 — fiche de surveillance complète, sans identité", async () => {
    const cookie = await connecter(emails.resp);
    const res = await request(app.getHttpServer()).get(`/patients/${patientS1}/export`).set("Cookie", cookie).expect(200);
    expect(res.body.identifiantInterne).toBe(`P1-${suffixe}`);
    expect(res.body).not.toHaveProperty("nom");
    expect(res.body.mesures).toHaveLength(3);
    const corrigee = res.body.mesures.find((m: { id: string }) => m.id === mesureNormale);
    expect(corrigee.corrections).toHaveLength(1);
    expect(res.body.alertes).toHaveLength(2);
  });

  // ------------------------------------------------- §13.2 clôture journalisée

  it("§13.2 — clôture de la fiche journalisée", async () => {
    const cookie = await connecter(emails.resp);
    await request(app.getHttpServer()).post(`/patients/${patientS2}/cloturer`).set("Cookie", cookie).expect(201);
    const audit = await prisma.journalAudit.findFirst({ where: { action: "patient.cloturer", entiteId: patientS2 } });
    expect(audit?.donneesApres).toMatchObject({ statut: "SORTI" });
  });
});
