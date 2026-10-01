import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { MailerService } from "../src/notifications/mailer.service.js";
import { EvenementsMetierService } from "../src/evenements-metier/evenements-metier.service.js";
import { RappelsService } from "../src/rappels/rappels.service.js";
import { ModuleMetier, RoleUtilisateur, StatutAbonnement, StatutReservation, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// Conformité CDC §11.2 — notifications email ET visibles dans l'espace
// personnel : inscription confirmée, alerte NEWS (personnel désigné), EI de
// gravité élevée, date de RDV de formation, rappels avant fin d'essai et
// avant session. §7.5 / §8.5 : alertes publiées comme événements métier.
describe("Notifications — conformité CDC §11.2 (e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let evenements: EvenementsMetierService;
  let rappels: RappelsService;

  const motDePasse = "TestConfP6!2026";
  const suffixe = randomUUID().slice(0, 8);
  const envois: { type: string; email: string; lien?: string }[] = [];
  const idsUtilisateurs: string[] = [];

  let orgId: string;
  let serviceId: string;
  let ids: Record<string, string> = {};
  let formationId: string;

  const emails = {
    resp: `conf-p6-resp-${suffixe}@example.test`,
    qualite: `conf-p6-qualite-${suffixe}@example.test`,
    soignant: `conf-p6-soignant-${suffixe}@example.test`,
    admin: `conf-p6-admin-${suffixe}@example.test`,
    nouveau: `conf-p6-nouveau-${suffixe}@example.test`,
  };

  const cache = new Map<string, string>();
  async function connecter(email: string): Promise<string> {
    if (cache.has(email)) return cache.get(email)!;
    const res = await request(app.getHttpServer()).post("/auth/login").send({ email, motDePasse }).expect(200);
    const cookie = (res.headers["set-cookie"] as unknown as string[]).map((c) => c.split(";")[0]).join("; ");
    cache.set(email, cookie);
    return cookie;
  }

  async function creerUtilisateur(cle: string, email: string, role: RoleUtilisateur, organisationId: string | null, service?: string) {
    const u = await prisma.utilisateur.create({
      data: {
        organisationId,
        serviceId: service,
        typeCompte: organisationId ? TypeCompte.ORGANISATION : TypeCompte.ADMIN_PLATEFORME,
        email,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "P6",
        emailVerifieLe: new Date(),
        roles: { create: { role } },
      },
    });
    idsUtilisateurs.push(u.id);
    ids[cle] = u.id;
  }

  const notificationsDe = (utilisateurId: string, type: string) =>
    prisma.notification.findMany({ where: { destinataireId: utilisateurId, type } });

  beforeAll(async () => {
    const enregistrer = (type: string) => vi.fn(async (email: string, ...reste: string[]) => {
      envois.push({ type, email, lien: reste.find((r) => typeof r === "string" && r.startsWith("http")) });
    });
    const mailerFactice = {
      sendVerificationEmail: enregistrer("verification"),
      sendInscriptionConfirmee: enregistrer("inscription"),
      sendAlerteNewsEmail: enregistrer("news"),
      sendAlerteEiGraviteElevee: enregistrer("ei"),
      sendNotificationGenerique: enregistrer("generique"),
      sendRappelFinEssai: enregistrer("rappel-essai"),
      sendRappelFormation: enregistrer("rappel-formation"),
      sendRapportDisponible: enregistrer("rapport"),
      sendInvitationEmail: enregistrer("invitation"),
      sendPasswordResetEmail: enregistrer("reset"),
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
    rappels = moduleFixture.get(RappelsService);

    orgId = (await prisma.organisation.create({
      data: { nom: `Conf P6 ${suffixe}`, ifu: `confp6-${suffixe}`, type: TypeEtablissement.EH },
    })).id;
    serviceId = (await prisma.service.create({ data: { organisationId: orgId, nom: `Réanimation ${suffixe}` } })).id;
    await creerUtilisateur("resp", emails.resp, RoleUtilisateur.RESPONSABLE_COMPTE, orgId);
    await creerUtilisateur("qualite", emails.qualite, RoleUtilisateur.RESP_QUALITE, orgId);
    await creerUtilisateur("soignant", emails.soignant, RoleUtilisateur.PERSONNEL_SOIGNANT, orgId, serviceId);
    await creerUtilisateur("admin", emails.admin, RoleUtilisateur.ADMIN_PLATEFORME, null);
  });

  afterAll(async () => {
    const nouveau = await prisma.utilisateur.findUnique({ where: { email: emails.nouveau } });
    const tous = [...idsUtilisateurs, ...(nouveau ? [nouveau.id] : [])];
    const patients = await prisma.patient.findMany({ where: { organisationId: orgId }, select: { id: true } });
    const idsPatients = patients.map((p) => p.id);
    await prisma.alerte.deleteMany({ where: { patientId: { in: idsPatients } } });
    await prisma.mesureNews.deleteMany({ where: { patientId: { in: idsPatients } } });
    await prisma.patient.deleteMany({ where: { id: { in: idsPatients } } });
    await prisma.evenementIndesirable.deleteMany({ where: { organisationId: orgId } });
    await prisma.reservation.deleteMany({ where: { utilisateurId: { in: tous } } });
    if (formationId) await prisma.formation.delete({ where: { id: formationId } });
    await prisma.abonnementModule.deleteMany({ where: { organisationId: orgId } });
    await prisma.notification.deleteMany({ where: { destinataireId: { in: tous } } });
    await prisma.journalAudit.deleteMany({ where: { OR: [{ organisationId: orgId }, { utilisateurId: { in: tous } }] } });
    await prisma.emailVerificationToken.deleteMany({ where: { utilisateurId: { in: tous } } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: tous } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: tous } } });
    await prisma.service.deleteMany({ where: { organisationId: orgId } });
    await prisma.organisation.delete({ where: { id: orgId } });
    await app.close();
  });

  it("§11.2 — confirmation d'inscription : email + notification dans l'espace personnel", async () => {
    await request(app.getHttpServer())
      .post("/auth/register/individuel")
      .send({ nom: "Nouveau", prenom: "Compte", email: emails.nouveau, motDePasse })
      .expect(201);
    const lien = envois.find((e) => e.type === "verification" && e.email === emails.nouveau)?.lien;
    expect(lien).toBeDefined();
    const token = new URL(lien!).searchParams.get("token");
    await request(app.getHttpServer()).get(`/auth/verify-email?token=${token}`).expect(302);

    expect(envois.some((e) => e.type === "inscription" && e.email === emails.nouveau)).toBe(true);
    const nouveau = await prisma.utilisateur.findUniqueOrThrow({ where: { email: emails.nouveau } });
    expect(await notificationsDe(nouveau.id, "INSCRIPTION_CONFIRMEE")).toHaveLength(1);
  });

  it("§7.3 / §7.5 — alerte NEWS : événement métier → email + in-app au personnel désigné, visible par le soignant", async () => {
    const cookie = await connecter(emails.soignant);
    const patient = await request(app.getHttpServer())
      .post("/patients")
      .set("Cookie", cookie)
      .send({ identifiantInterne: `P6-${suffixe}` })
      .expect(201);
    await request(app.getHttpServer())
      .post(`/patients/${patient.body.id}/mesures`)
      .set("Cookie", cookie)
      .send({
        frequenceRespiratoire: 8,
        saturationOxygene: 90,
        oxygenoSupplementation: false,
        temperature: 37,
        pressionArterielleSystolique: 120,
        frequenceCardiaque: 135,
        niveauConscience: "ALERTE",
      })
      .expect(201);
    await evenements.attendreTraitements();

    expect(envois.filter((e) => e.type === "news").map((e) => e.email).sort()).toEqual(
      [emails.qualite, emails.resp, emails.soignant].sort(),
    );
    const liste = await request(app.getHttpServer()).get("/notifications-internes").set("Cookie", cookie).expect(200);
    expect(liste.body.map((n: { type: string }) => n.type)).toContain("ALERTE_NEWS");
  });

  it("§8.3 / §8.5 — EI de gravité élevée : même mécanisme, in-app pour le responsable qualité et la direction", async () => {
    await request(app.getHttpServer())
      .post("/evenements-indesirables")
      .set("Cookie", await connecter(emails.soignant))
      .send({
        dateSurvenue: new Date(Date.now() - 600_000).toISOString(),
        serviceId,
        description: "Erreur d'administration d'un médicament.",
        niveauGraviteId: "gravite-eig",
        personnesImpliquees: "Infirmier de nuit",
      })
      .expect(201);
    await evenements.attendreTraitements();
    expect(await notificationsDe(ids.qualite, "EI_GRAVITE_ELEVEE")).toHaveLength(1);
    expect(await notificationsDe(ids.resp, "EI_GRAVITE_ELEVEE")).toHaveLength(1);
    expect(await notificationsDe(ids.soignant, "EI_GRAVITE_ELEVEE")).toHaveLength(0);
  });

  it("§11.2 — rappel avant la fin de l'essai, envoyé une seule fois", async () => {
    await prisma.abonnementModule.update({
      where: { organisationId_module: { organisationId: orgId, module: ModuleMetier.NEWS } },
      data: { statut: StatutAbonnement.ESSAI, essaiFin: new Date(Date.now() + 3 * 86_400_000) },
    });
    await rappels.rappelerFinsEssai();
    expect(envois.filter((e) => e.type === "rappel-essai" && e.email === emails.resp)).toHaveLength(1);
    expect(await notificationsDe(ids.resp, "RAPPEL_FIN_ESSAI")).toHaveLength(1);

    await rappels.rappelerFinsEssai();
    expect(envois.filter((e) => e.type === "rappel-essai" && e.email === emails.resp)).toHaveLength(1);
  });

  it("§9.1 / §11.2 — date de RDV fixée puis rappel avant la session (email + in-app)", async () => {
    formationId = (await prisma.formation.create({
      data: { titre: `Formation P6 ${suffixe}`, description: "Formation de test supprimée après exécution.", prixIndividuel: 1000, prixGroupe5: 4000, prixGroupe10: 7000 },
    })).id;
    const reservation = await prisma.reservation.create({
      data: { formationId, utilisateurId: ids.resp, organisationId: orgId, formule: "INDIVIDUEL", tarifApplique: 1000, statut: StatutReservation.PAYEE },
    });
    const dateRdv = new Date(Date.now() + 86_400_000).toISOString();
    await request(app.getHttpServer())
      .patch(`/reservations/${reservation.id}/date-rdv`)
      .set("Cookie", await connecter(emails.admin))
      .send({ dateRdv })
      .expect(200);
    expect((await notificationsDe(ids.resp, "FORMATION")).map((n) => n.titre)).toContain("Date de formation fixée");

    await rappels.rappelerFormations();
    expect(envois.filter((e) => e.type === "rappel-formation" && e.email === emails.resp)).toHaveLength(1);
    expect(await notificationsDe(ids.resp, "RAPPEL_FORMATION")).toHaveLength(1);
    const apres = await prisma.reservation.findUniqueOrThrow({ where: { id: reservation.id } });
    expect(apres.rappelEnvoyeLe).not.toBeNull();
  });
});
