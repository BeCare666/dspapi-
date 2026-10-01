import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { MailerService } from "../src/notifications/mailer.service.js";
import { KkiapayService } from "../src/paiements/kkiapay.service.js";
import { AbonnementsService } from "../src/abonnements/abonnements.service.js";
import { ModuleMetier, RoleUtilisateur, StatutAbonnement, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// Conformité CDC §5, §10.4, §10.5, §11.1, §12.1 — abonnements NEWS/EI,
// paiement, webhook (paiement tardif), factures, comportement de fin d'essai,
// actions admin. KKiaPay est remplacé par un faux : un paiement réellement
// accepté ne peut pas être produit sans un vrai passage dans le widget. Le faux
// n'accepte que les identifiants « TX-OK-<montant> » (statut SUCCESS).
describe("Abonnements, paiements et factures (§5, §10, §11.1, §12.1, e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let abonnements: AbonnementsService;

  const motDePasse = "TestConfP5!2026";
  const suffixe = randomUUID().slice(0, 8);
  const idsUtilisateurs: string[] = [];
  const parametresInitiaux = new Map<string, string>();
  const CLES = ["prix_abonnement_news", "prix_abonnement_ei", "duree_abonnement_jours", "comportement_fin_essai"];

  let orgId: string;
  let autreOrgId: string;
  let respId: string;
  let paiement1: string;
  let factureId: string;

  const emails = {
    admin: `conf-p5-admin-${suffixe}@example.test`,
    resp: `conf-p5-resp-${suffixe}@example.test`,
    soignant: `conf-p5-soignant-${suffixe}@example.test`,
    autre: `conf-p5-autre-${suffixe}@example.test`,
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
        prenom: "P5",
        emailVerifieLe: new Date(),
        roles: { create: { role } },
      },
    });
    idsUtilisateurs.push(u.id);
    return u.id;
  }

  async function parametre(cle: string, valeur: string) {
    await request(app.getHttpServer())
      .patch(`/parametres/${cle}`)
      .set("Cookie", await connecter(emails.admin))
      .send({ valeur })
      .expect(200);
  }

  beforeAll(async () => {
    const kkiapayFactice = {
      verifierTransaction: vi.fn(async (transactionId: string) => {
        const m = /^TX-OK-(\d+)/.exec(transactionId);
        if (!m) throw new Error("Transaction Not Found");
        return { transactionId, status: "SUCCESS", amount: Number(m[1]) };
      }),
    };
    const mailerFactice = {
      sendNotificationGenerique: vi.fn(),
      sendRapportDisponible: vi.fn(),
      sendAlerteEiGraviteElevee: vi.fn(),
      sendAlerteNewsEmail: vi.fn(),
      sendInvitationEmail: vi.fn(),
      sendVerificationEmail: vi.fn(),
      sendPasswordResetEmail: vi.fn(),
    };
    const moduleFixture: TestingModule = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(KkiapayService)
      .useValue(kkiapayFactice)
      .overrideProvider(MailerService)
      .useValue(mailerFactice)
      .compile();
    app = moduleFixture.createNestApplication();
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    await app.init();
    prisma = moduleFixture.get(PrismaService);
    abonnements = moduleFixture.get(AbonnementsService);

    for (const p of await prisma.parametrePlateforme.findMany({ where: { cle: { in: CLES } } })) {
      parametresInitiaux.set(p.cle, p.valeur);
    }

    orgId = (await prisma.organisation.create({
      data: { nom: `Conf P5 ${suffixe}`, ifu: `confp5-${suffixe}`, type: TypeEtablissement.EH },
    })).id;
    autreOrgId = (await prisma.organisation.create({
      data: { nom: `Conf P5 autre ${suffixe}`, ifu: `confp5b-${suffixe}`, type: TypeEtablissement.EH },
    })).id;
    await creerUtilisateur(emails.admin, RoleUtilisateur.ADMIN_PLATEFORME, null);
    respId = await creerUtilisateur(emails.resp, RoleUtilisateur.RESPONSABLE_COMPTE, orgId);
    await creerUtilisateur(emails.soignant, RoleUtilisateur.PERSONNEL_SOIGNANT, orgId);
    await creerUtilisateur(emails.autre, RoleUtilisateur.RESPONSABLE_COMPTE, autreOrgId);
  });

  afterAll(async () => {
    for (const [cle, valeur] of parametresInitiaux) {
      await prisma.parametrePlateforme.update({ where: { cle }, data: { valeur } });
    }
    const orgs = [orgId, autreOrgId];
    await prisma.facture.deleteMany({
      where: { OR: [{ paiementAbonnement: { organisationId: { in: orgs } } }, { reservation: { organisationId: { in: orgs } } }] },
    });
    await prisma.paiementAbonnement.deleteMany({ where: { organisationId: { in: orgs } } });
    await prisma.reservation.deleteMany({ where: { organisationId: { in: orgs } } });
    await prisma.formation.deleteMany({ where: { titre: `Formation P5 ${suffixe}` } });
    await prisma.patient.deleteMany({ where: { organisationId: { in: orgs } } });
    await prisma.abonnementModule.deleteMany({ where: { organisationId: { in: orgs } } });
    await prisma.notification.deleteMany({ where: { destinataireId: { in: idsUtilisateurs } } });
    await prisma.journalAudit.deleteMany({ where: { OR: [{ organisationId: { in: orgs } }, { utilisateurId: { in: idsUtilisateurs } }] } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: idsUtilisateurs } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: idsUtilisateurs } } });
    await prisma.organisation.deleteMany({ where: { id: { in: orgs } } });
    await app.close();
  });

  // ------------------------------------------------------------ §10.5 offre

  it("§10.5 — tarif non paramétré : souscription indisponible (400)", async () => {
    await parametre("prix_abonnement_news", "0");
    const cookie = await connecter(emails.resp);
    const offre = await request(app.getHttpServer()).get("/abonnements/offre").set("Cookie", cookie).expect(200);
    expect(offre.body.modules.NEWS.disponible).toBe(false);
    await request(app.getHttpServer()).post("/abonnements/NEWS/souscrire").set("Cookie", cookie).expect(400);
  });

  it("§10.5 — valeurs invalides refusées par les paramètres (400)", async () => {
    const cookie = await connecter(emails.admin);
    await request(app.getHttpServer()).patch("/parametres/comportement_fin_essai").set("Cookie", cookie).send({ valeur: "PEUT-ETRE" }).expect(400);
    await request(app.getHttpServer()).patch("/parametres/prix_abonnement_news").set("Cookie", cookie).send({ valeur: "-5" }).expect(400);
  });

  // ------------------------------------------------------------ §5 souscription

  it("§5 — souscription par le responsable (tarif figé) ; soignant refusé (403)", async () => {
    await parametre("prix_abonnement_news", "15000");
    await parametre("duree_abonnement_jours", "30");
    await request(app.getHttpServer()).post("/abonnements/NEWS/souscrire").set("Cookie", await connecter(emails.soignant)).expect(403);

    const res = await request(app.getHttpServer())
      .post("/abonnements/NEWS/souscrire")
      .set("Cookie", await connecter(emails.resp))
      .expect(201);
    paiement1 = res.body.id;
    expect(res.body).toMatchObject({ montant: 15000, dureeJours: 30, devise: "XOF", statut: "EN_ATTENTE" });
  });

  it("RM11 — transaction inconnue ou montant différent refusés (400)", async () => {
    const cookie = await connecter(emails.resp);
    const url = `/abonnements/paiements/${paiement1}/verifier`;
    await request(app.getHttpServer()).post(url).set("Cookie", cookie).send({ transactionId: "inexistante" }).expect(400);
    await request(app.getHttpServer()).post(url).set("Cookie", cookie).send({ transactionId: "TX-OK-100" }).expect(400);
    await request(app.getHttpServer())
      .post(url)
      .set("Cookie", await connecter(emails.autre))
      .send({ transactionId: "TX-OK-15000" })
      .expect(404);
  });

  it("§5 / §11.1 — paiement vérifié : abonnement actif 30 jours, facture émise et téléchargeable", async () => {
    const cookie = await connecter(emails.resp);
    const res = await request(app.getHttpServer())
      .post(`/abonnements/paiements/${paiement1}/verifier`)
      .set("Cookie", cookie)
      .send({ transactionId: `TX-OK-15000-${suffixe}` })
      .expect(200);
    expect(res.body.statut).toBe("PAYE");

    const statut = await request(app.getHttpServer()).get("/abonnements/NEWS").set("Cookie", cookie).expect(200);
    expect(statut.body.statut).toBe("ACTIF");
    const jours = (new Date(statut.body.expireLe).getTime() - Date.now()) / 86_400_000;
    expect(jours).toBeGreaterThan(29.9);
    expect(jours).toBeLessThan(30.1);

    const factures = await request(app.getHttpServer()).get("/factures").set("Cookie", cookie).expect(200);
    expect(factures.body).toHaveLength(1);
    expect(factures.body[0]).toMatchObject({ montant: 15000, devise: "XOF" });
    factureId = factures.body[0].id;

    const pdf = await request(app.getHttpServer())
      .get(`/factures/${factureId}/pdf`)
      .set("Cookie", cookie)
      .buffer(true)
      .parse((r, callback) => {
        const morceaux: Buffer[] = [];
        r.on("data", (m: Buffer) => morceaux.push(m));
        r.on("end", () => callback(null, Buffer.concat(morceaux)));
      })
      .expect(200);
    expect((pdf.body as Buffer).subarray(0, 5).toString()).toBe("%PDF-");

    const notification = await prisma.notification.findFirst({ where: { destinataireId: respId, type: "PAIEMENT_ABONNEMENT" } });
    expect(notification).not.toBeNull();
  });

  it("RM7 — la facture d'un établissement est invisible pour un autre (404)", async () => {
    const cookie = await connecter(emails.autre);
    await request(app.getHttpServer()).get(`/factures/${factureId}/pdf`).set("Cookie", cookie).expect(404);
    const liste = await request(app.getHttpServer()).get("/factures").set("Cookie", cookie).expect(200);
    expect(liste.body).toEqual([]);
  });

  // ------------------------------------------------------------ §10.4 webhook

  it("§10.4 — webhook : paiement tardif d'abonnement rattaché par la référence ABO-…, signature obligatoire", async () => {
    await parametre("prix_abonnement_ei", "20000");
    const demande = await request(app.getHttpServer())
      .post("/abonnements/EI/souscrire")
      .set("Cookie", await connecter(emails.resp))
      .expect(201);

    const corps = {
      transactionId: `TX-OK-20000-webhook-${suffixe}`,
      isPaymentSucces: true,
      amount: 20000,
      partnerId: `ABO-${demande.body.id}`,
      event: "transaction.success",
    };
    await request(app.getHttpServer()).post("/paiements/kkiapay/webhook").set("x-kkiapay-secret", "faux").send(corps).expect(200);
    let paiement = await prisma.paiementAbonnement.findUniqueOrThrow({ where: { id: demande.body.id } });
    expect(paiement.statut).toBe("EN_ATTENTE");

    await request(app.getHttpServer())
      .post("/paiements/kkiapay/webhook")
      .set("x-kkiapay-secret", process.env.KKIAPAY_SECRET ?? "")
      .send(corps)
      .expect(200);
    paiement = await prisma.paiementAbonnement.findUniqueOrThrow({ where: { id: demande.body.id } });
    expect(paiement.statut).toBe("PAYE");
    const abonnement = await prisma.abonnementModule.findUniqueOrThrow({
      where: { organisationId_module: { organisationId: orgId, module: ModuleMetier.EI } },
    });
    expect(abonnement.statut).toBe("ACTIF");
  });

  it("§10.4 — webhook : paiement tardif de réservation rattaché par la référence RES-…", async () => {
    const formation = await prisma.formation.create({
      data: { titre: `Formation P5 ${suffixe}`, description: "Formation de test supprimée après exécution.", prixIndividuel: 5000, prixGroupe5: 20000, prixGroupe10: 35000 },
    });
    const reservation = await request(app.getHttpServer())
      .post("/reservations")
      .set("Cookie", await connecter(emails.resp))
      .send({ formationId: formation.id, formule: "INDIVIDUEL" })
      .expect(201);
    await request(app.getHttpServer())
      .post("/paiements/kkiapay/webhook")
      .set("x-kkiapay-secret", process.env.KKIAPAY_SECRET ?? "")
      .send({
        transactionId: `TX-OK-5000-res-${suffixe}`,
        isPaymentSucces: true,
        amount: 5000,
        partnerId: `RES-${reservation.body.id}`,
        event: "transaction.success",
      })
      .expect(200);
    const apres = await prisma.reservation.findUniqueOrThrow({ where: { id: reservation.body.id }, include: { facture: true } });
    expect(apres.statut).toBe("PAYEE");
    expect(apres.facture?.devise).toBe("XOF");
  });

  // ------------------------------------------------------------ §5 fin d'essai

  it("§5 / §10.5 — module expiré : lecture seule (GET 200, écriture 403) puis blocage complet selon le paramètre", async () => {
    await prisma.abonnementModule.update({
      where: { organisationId_module: { organisationId: orgId, module: ModuleMetier.NEWS } },
      data: { statut: StatutAbonnement.EXPIRE, expireLe: new Date(Date.now() - 86_400_000) },
    });
    const cookie = await connecter(emails.resp);
    await parametre("comportement_fin_essai", "LECTURE_SEULE");
    await request(app.getHttpServer()).get("/patients").set("Cookie", cookie).expect(200);
    await request(app.getHttpServer()).post("/patients").set("Cookie", cookie).send({ identifiantInterne: "P5-1" }).expect(403);
    await request(app.getHttpServer()).get("/alertes").set("Cookie", cookie).expect(200);

    await parametre("comportement_fin_essai", "BLOCAGE");
    await request(app.getHttpServer()).get("/patients").set("Cookie", cookie).expect(403);
    await request(app.getHttpServer()).get("/alertes").set("Cookie", cookie).expect(403);
  });

  // ------------------------------------------------------------ §12.1 admin

  it("§12.1 — admin : prolonger, suspendre (tout bloqué), reprendre ; actions journalisées ; réservé à l'admin", async () => {
    const admin = await connecter(emails.admin);
    const cookie = await connecter(emails.resp);
    await request(app.getHttpServer()).post(`/abonnements/${orgId}/NEWS/prolonger`).set("Cookie", cookie).send({ jours: 10 }).expect(403);

    const prolonge = await request(app.getHttpServer())
      .post(`/abonnements/${orgId}/NEWS/prolonger`)
      .set("Cookie", admin)
      .send({ jours: 10 })
      .expect(200);
    expect(prolonge.body.statut).toBe("ACTIF");
    await request(app.getHttpServer()).post("/patients").set("Cookie", cookie).send({ identifiantInterne: `P5-${suffixe}` }).expect(201);

    await request(app.getHttpServer()).post(`/abonnements/${orgId}/NEWS/suspendre`).set("Cookie", admin).expect(200);
    await parametre("comportement_fin_essai", "LECTURE_SEULE");
    await request(app.getHttpServer()).get("/patients").set("Cookie", cookie).expect(403);

    const repris = await request(app.getHttpServer()).post(`/abonnements/${orgId}/NEWS/reprendre`).set("Cookie", admin).expect(200);
    expect(repris.body.statut).toBe("ACTIF");
    await request(app.getHttpServer()).get("/patients").set("Cookie", cookie).expect(200);

    const audit = await prisma.journalAudit.findMany({ where: { organisationId: orgId, entite: "AbonnementModule" } });
    expect(audit.map((a) => a.action).sort()).toEqual(["abonnement.prolonger", "abonnement.reprendre", "abonnement.suspendre"]);

    const liste = await request(app.getHttpServer()).get("/organisations").set("Cookie", admin).expect(200);
    const ligne = liste.body.find((o: { id: string }) => o.id === orgId);
    expect(ligne.abonnementsModule.map((a: { module: string }) => a.module).sort()).toEqual(["EI", "NEWS"]);
  });

  it("§7.5 — tâche quotidienne : un abonnement arrivé à échéance passe en EXPIRE", async () => {
    await prisma.abonnementModule.update({
      where: { organisationId_module: { organisationId: orgId, module: ModuleMetier.EI } },
      data: { expireLe: new Date(Date.now() - 60_000) },
    });
    await abonnements.expirerEchus();
    const ei = await prisma.abonnementModule.findUniqueOrThrow({
      where: { organisationId_module: { organisationId: orgId, module: ModuleMetier.EI } },
    });
    expect(ei.statut).toBe("EXPIRE");
  });
});
