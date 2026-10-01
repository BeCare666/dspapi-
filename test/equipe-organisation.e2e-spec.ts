import { Test, type TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import request from "supertest";
import bcrypt from "bcrypt";
import { randomUUID } from "node:crypto";
import { AppModule } from "../src/app.module.js";
import { PrismaService } from "../src/prisma/prisma.service.js";
import { MailerService } from "../src/notifications/mailer.service.js";
import { RoleUtilisateur, TypeCompte, TypeEtablissement } from "../src/generated/prisma/enums.js";

// Conformité CDC §4.2 — services et utilisateurs internes gérés par
// l'établissement lui-même. MailerService est remplacé par un faux : aucun
// email réel n'est envoyé, et le lien d'activation est récupéré pour tester
// le parcours complet (invitation → mot de passe personnel → connexion).
describe("Équipe de l'établissement — services et membres (§4.2, e2e)", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const motDePasse = "TestConfP1!2026";
  const suffixe = randomUUID().slice(0, 8);
  const invitations: { email: string; lien: string }[] = [];

  const idsOrganisations: string[] = [];
  const idsUtilisateurs: string[] = [];

  let orgA: string;
  let orgB: string;
  let respA: { id: string; email: string };
  let respB: { id: string; email: string };
  let qualiteA: { id: string; email: string };
  let serviceA: string;
  let serviceB: string;
  let membreId: string;
  const emailMembre = `conf-p1-membre-${suffixe}@example.test`;

  const cacheConnexion = new Map<string, string>();
  async function connecter(email: string, mdp = motDePasse): Promise<string> {
    const dejaConnecte = cacheConnexion.get(email);
    if (dejaConnecte) return dejaConnecte;
    const res = await request(app.getHttpServer()).post("/auth/login").send({ email, motDePasse: mdp }).expect(200);
    const cookie = (res.headers["set-cookie"] as unknown as string[]).map((c) => c.split(";")[0]).join("; ");
    cacheConnexion.set(email, cookie);
    return cookie;
  }

  async function creerOrganisationAvecResponsable(lettre: string) {
    const org = await prisma.organisation.create({
      data: { nom: `Conf P1 Org ${lettre} ${suffixe}`, ifu: `confp1-${lettre}-${suffixe}`, type: TypeEtablissement.EH },
    });
    idsOrganisations.push(org.id);
    const resp = await prisma.utilisateur.create({
      data: {
        organisationId: org.id,
        typeCompte: TypeCompte.ORGANISATION,
        email: `conf-p1-resp-${lettre}-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: `Resp${lettre}`,
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.RESPONSABLE_COMPTE } },
      },
    });
    idsUtilisateurs.push(resp.id);
    return { orgId: org.id, resp: { id: resp.id, email: resp.email } };
  }

  beforeAll(async () => {
    const mailerFactice = {
      sendInvitationEmail: vi.fn(async (email: string, _prenom: string, _org: string, lien: string) => {
        invitations.push({ email, lien });
      }),
      sendVerificationEmail: vi.fn(),
      sendPasswordResetEmail: vi.fn(),
      sendAlerteNewsEmail: vi.fn(),
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

    ({ orgId: orgA, resp: respA } = await creerOrganisationAvecResponsable("A"));
    ({ orgId: orgB, resp: respB } = await creerOrganisationAvecResponsable("B"));

    const qualite = await prisma.utilisateur.create({
      data: {
        organisationId: orgA,
        typeCompte: TypeCompte.ORGANISATION,
        email: `conf-p1-qualite-${suffixe}@example.test`,
        motDePasseHash: await bcrypt.hash(motDePasse, 4),
        nom: "Test",
        prenom: "Qualite",
        emailVerifieLe: new Date(),
        roles: { create: { role: RoleUtilisateur.RESP_QUALITE } },
      },
    });
    idsUtilisateurs.push(qualite.id);
    qualiteA = { id: qualite.id, email: qualite.email };

    const sB = await prisma.service.create({ data: { organisationId: orgB, nom: `Urgences ${suffixe}` } });
    serviceB = sB.id;
  });

  afterAll(async () => {
    const membres = await prisma.utilisateur.findMany({ where: { organisationId: { in: idsOrganisations } }, select: { id: true } });
    const tousLesIds = [...new Set([...idsUtilisateurs, ...membres.map((m) => m.id)])];
    await prisma.journalAudit.deleteMany({ where: { organisationId: { in: idsOrganisations } } });
    await prisma.journalAudit.deleteMany({ where: { utilisateurId: { in: tousLesIds } } });
    await prisma.refreshToken.deleteMany({ where: { utilisateurId: { in: tousLesIds } } });
    await prisma.passwordResetToken.deleteMany({ where: { utilisateurId: { in: tousLesIds } } });
    await prisma.utilisateur.deleteMany({ where: { id: { in: tousLesIds } } });
    await prisma.service.deleteMany({ where: { organisationId: { in: idsOrganisations } } });
    await prisma.organisation.deleteMany({ where: { id: { in: idsOrganisations } } });
    await app.close();
  });

  // ---------------------------------------------------------------- services

  it("non authentifié → 401", async () => {
    await request(app.getHttpServer()).get("/organisation/services").expect(401);
    await request(app.getHttpServer()).get("/organisation/membres").expect(401);
  });

  it("le responsable crée un service ; doublon de nom → 409", async () => {
    const cookie = await connecter(respA.email);
    const res = await request(app.getHttpServer())
      .post("/organisation/services")
      .set("Cookie", cookie)
      .send({ nom: `Maternité ${suffixe}`, description: "Bloc mère-enfant" })
      .expect(201);
    serviceA = res.body.id;
    expect(res.body.organisationId).toBe(orgA);

    await request(app.getHttpServer())
      .post("/organisation/services")
      .set("Cookie", cookie)
      .send({ nom: `Maternité ${suffixe}` })
      .expect(409);
  });

  it("le responsable qualité lit les services mais ne peut pas en créer (403)", async () => {
    const cookie = await connecter(qualiteA.email);
    const res = await request(app.getHttpServer()).get("/organisation/services").set("Cookie", cookie).expect(200);
    expect(res.body.map((s: { id: string }) => s.id)).toEqual([serviceA]);
    await request(app.getHttpServer()).post("/organisation/services").set("Cookie", cookie).send({ nom: "X service" }).expect(403);
  });

  it("isolation : l'organisation B ne peut ni voir ni modifier un service de A (404)", async () => {
    const cookieB = await connecter(respB.email);
    const liste = await request(app.getHttpServer()).get("/organisation/services").set("Cookie", cookieB).expect(200);
    expect(liste.body.map((s: { id: string }) => s.id)).toEqual([serviceB]);
    await request(app.getHttpServer())
      .patch(`/organisation/services/${serviceA}`)
      .set("Cookie", cookieB)
      .send({ nom: "Piraté" })
      .expect(404);
    await request(app.getHttpServer()).post(`/organisation/services/${serviceA}/desactiver`).set("Cookie", cookieB).expect(404);
  });

  // ----------------------------------------------------------------- membres

  it("création d'un membre : rôle ADMIN_PLATEFORME refusé (400), service d'une autre organisation refusé (404)", async () => {
    const cookie = await connecter(respA.email);
    const base = { civilite: "MME", nom: "Soignante", prenom: "Awa", email: emailMembre };
    await request(app.getHttpServer())
      .post("/organisation/membres")
      .set("Cookie", cookie)
      .send({ ...base, roles: ["ADMIN_PLATEFORME"] })
      .expect(400);
    await request(app.getHttpServer())
      .post("/organisation/membres")
      .set("Cookie", cookie)
      .send({ ...base, roles: ["PERSONNEL_SOIGNANT"], serviceId: serviceB })
      .expect(404);
  });

  it("le responsable crée un membre : aucun mot de passe exposé, invitation envoyée, audit écrit", async () => {
    const cookie = await connecter(respA.email);
    const res = await request(app.getHttpServer())
      .post("/organisation/membres")
      .set("Cookie", cookie)
      .send({
        civilite: "MME",
        nom: "Soignante",
        prenom: "Awa",
        email: emailMembre,
        roles: ["PERSONNEL_SOIGNANT"],
        serviceId: serviceA,
      })
      .expect(201);
    membreId = res.body.id;
    expect(res.body.motDePasseHash).toBeUndefined();
    expect(res.body.serviceId).toBe(serviceA);
    expect(res.body.civilite).toBe("MME");
    expect(res.body.roles).toEqual([{ role: "PERSONNEL_SOIGNANT" }]);
    expect(invitations.filter((i) => i.email === emailMembre)).toHaveLength(1);

    const audit = await prisma.journalAudit.findFirst({ where: { action: "membre.creer", entiteId: membreId } });
    expect(audit?.utilisateurId).toBe(respA.id);
    expect(audit?.organisationId).toBe(orgA);
  });

  it("email déjà utilisé → 409", async () => {
    const cookie = await connecter(respA.email);
    await request(app.getHttpServer())
      .post("/organisation/membres")
      .set("Cookie", cookie)
      .send({ civilite: "M", nom: "Doublon", prenom: "Test", email: emailMembre, roles: ["RESP_QUALITE"] })
      .expect(409);
  });

  it("le membre invité ne peut pas se connecter avant activation (401, aucun mot de passe connu)", async () => {
    // Aucun mot de passe connu de quiconque : même le bon email échoue.
    await request(app.getHttpServer()).post("/auth/login").send({ email: emailMembre, motDePasse }).expect(401);
  });

  it("activation via le lien reçu, puis connexion avec son mot de passe personnel (rôle et service dans le jeton)", async () => {
    const invitation = invitations.find((i) => i.email === emailMembre)!;
    const token = new URL(invitation.lien).searchParams.get("token");
    expect(invitation.lien).toContain("/activer-compte?token=");
    await request(app.getHttpServer())
      .post("/auth/reset-password")
      .send({ token, nouveauMotDePasse: motDePasse })
      .expect(200);

    const enBase = await prisma.utilisateur.findUniqueOrThrow({ where: { id: membreId } });
    expect(enBase.emailVerifieLe).not.toBeNull();

    const cookie = await connecter(emailMembre);
    const moi = await request(app.getHttpServer()).get("/auth/me").set("Cookie", cookie).expect(200);
    expect(moi.body.roles).toEqual(["PERSONNEL_SOIGNANT"]);
    expect(moi.body.serviceId).toBe(serviceA);
    expect(moi.body.organisationId).toBe(orgA);

    // Le personnel soignant ne gère pas l'équipe.
    await request(app.getHttpServer()).get("/organisation/membres").set("Cookie", cookie).expect(403);
  });

  it("renvoi d'invitation refusé pour un compte déjà activé (409)", async () => {
    const cookie = await connecter(respA.email);
    await request(app.getHttpServer())
      .post(`/organisation/membres/${membreId}/renvoyer-invitation`)
      .set("Cookie", cookie)
      .expect(409);
  });

  it("le responsable qualité peut lister les membres (choix d'un responsable d'action) mais pas en créer", async () => {
    const cookie = await connecter(qualiteA.email);
    const res = await request(app.getHttpServer()).get("/organisation/membres").set("Cookie", cookie).expect(200);
    const ids = res.body.map((m: { id: string }) => m.id);
    expect(ids).toEqual(expect.arrayContaining([respA.id, qualiteA.id, membreId]));
    expect(ids).not.toContain(respB.id);
    for (const m of res.body) expect(m.motDePasseHash).toBeUndefined();
    await request(app.getHttpServer())
      .post("/organisation/membres")
      .set("Cookie", cookie)
      .send({ civilite: "M", nom: "X", prenom: "Y", email: `x-${suffixe}@example.test`, roles: ["RESP_QUALITE"] })
      .expect(403);
  });

  it("modification des rôles et du service d'un membre, tracée dans l'audit", async () => {
    const cookie = await connecter(respA.email);
    const res = await request(app.getHttpServer())
      .patch(`/organisation/membres/${membreId}`)
      .set("Cookie", cookie)
      .send({ roles: ["PERSONNEL_SOIGNANT", "RESP_QUALITE"], serviceId: null })
      .expect(200);
    expect(res.body.roles.map((r: { role: string }) => r.role).sort()).toEqual(["PERSONNEL_SOIGNANT", "RESP_QUALITE"]);
    expect(res.body.serviceId).toBeNull();
    const audit = await prisma.journalAudit.findFirst({ where: { action: "membre.modifier", entiteId: membreId } });
    expect(audit).not.toBeNull();
  });

  it("le responsable ne peut ni retirer son propre rôle de responsable ni se désactiver (400)", async () => {
    const cookie = await connecter(respA.email);
    await request(app.getHttpServer())
      .patch(`/organisation/membres/${respA.id}`)
      .set("Cookie", cookie)
      .send({ roles: ["RESP_QUALITE"] })
      .expect(400);
    await request(app.getHttpServer()).post(`/organisation/membres/${respA.id}/desactiver`).set("Cookie", cookie).expect(400);
  });

  it("isolation : l'organisation B ne peut ni lire ni modifier un membre de A (404)", async () => {
    const cookieB = await connecter(respB.email);
    await request(app.getHttpServer()).get(`/organisation/membres/${membreId}`).set("Cookie", cookieB).expect(404);
    await request(app.getHttpServer())
      .patch(`/organisation/membres/${membreId}`)
      .set("Cookie", cookieB)
      .send({ nom: "Piraté" })
      .expect(404);
    await request(app.getHttpServer()).post(`/organisation/membres/${membreId}/desactiver`).set("Cookie", cookieB).expect(404);
  });

  it("désactivation d'un membre : sessions révoquées immédiatement", async () => {
    const cookieMembre = await connecter(emailMembre);
    const cookieResp = await connecter(respA.email);
    const res = await request(app.getHttpServer())
      .post(`/organisation/membres/${membreId}/desactiver`)
      .set("Cookie", cookieResp)
      .expect(200);
    expect(res.body.actif).toBe(false);

    // Le refresh token de la session du membre ne fonctionne plus.
    await request(app.getHttpServer()).post("/auth/refresh").set("Cookie", cookieMembre).expect(401);

    await request(app.getHttpServer()).post(`/organisation/membres/${membreId}/reactiver`).set("Cookie", cookieResp).expect(200);
  });

  it("un service désactivé n'est plus proposé et ne peut plus être affecté", async () => {
    const cookie = await connecter(respA.email);
    await request(app.getHttpServer()).post(`/organisation/services/${serviceA}/desactiver`).set("Cookie", cookie).expect(200);
    const actifs = await request(app.getHttpServer()).get("/organisation/services").set("Cookie", cookie).expect(200);
    expect(actifs.body).toEqual([]);
    const tous = await request(app.getHttpServer())
      .get("/organisation/services?inclureInactifs=true")
      .set("Cookie", cookie)
      .expect(200);
    expect(tous.body.map((s: { id: string }) => s.id)).toEqual([serviceA]);
    await request(app.getHttpServer())
      .patch(`/organisation/membres/${membreId}`)
      .set("Cookie", cookie)
      .send({ serviceId: serviceA })
      .expect(400);
  });
});
