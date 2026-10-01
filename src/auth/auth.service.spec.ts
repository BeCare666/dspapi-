import { Test, type TestingModule } from "@nestjs/testing";
import { JwtModule } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { AuthService } from "./auth.service.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { MailerService } from "../notifications/mailer.service.js";
import { NotificationsInternesService } from "../notifications-internes/notifications-internes.service.js";
import { Civilite, RoleUtilisateur, TypeCompte, TypeEtablissement, TypeStructure } from "../generated/prisma/enums.js";

process.env.JWT_SECRET = "test-access-secret";
process.env.JWT_REFRESH_SECRET = "test-refresh-secret";
process.env.JWT_ACCESS_TTL = "15m";
process.env.JWT_REFRESH_TTL = "30d";

function buildPrismaMock() {
  const orgTx = { create: vi.fn() };
  const userTx = { create: vi.fn() };

  return {
    organisation: { findUnique: vi.fn(), create: orgTx.create },
    utilisateur: { findUnique: vi.fn(), findUniqueOrThrow: vi.fn(), create: userTx.create, update: vi.fn() },
    refreshToken: { findUnique: vi.fn(), create: vi.fn(), update: vi.fn(), updateMany: vi.fn() },
    passwordResetToken: { findUnique: vi.fn(), create: vi.fn(), update: vi.fn() },
    emailVerificationToken: { findUnique: vi.fn(), create: vi.fn(), update: vi.fn() },
    journalAudit: { create: vi.fn() },
    $transaction: vi.fn(async (arg: unknown) => {
      if (typeof arg === "function") {
        return arg({ organisation: orgTx, utilisateur: userTx });
      }
      return Promise.all(arg as Promise<unknown>[]);
    }),
  };
}

describe("AuthService", () => {
  let service: AuthService;
  let prisma: ReturnType<typeof buildPrismaMock>;
  let mailer: { sendPasswordResetEmail: ReturnType<typeof vi.fn>; sendVerificationEmail: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    prisma = buildPrismaMock();
    mailer = { sendPasswordResetEmail: vi.fn(), sendVerificationEmail: vi.fn() };

    const module: TestingModule = await Test.createTestingModule({
      imports: [JwtModule.register({})],
      providers: [
        AuthService,
        { provide: PrismaService, useValue: prisma },
        { provide: MailerService, useValue: mailer },
        { provide: NotificationsInternesService, useValue: { creerPour: vi.fn() } },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  describe("registerOrganisation", () => {
    it("crée l'organisation et le responsable, envoie l'email de vérification, ne connecte pas automatiquement", async () => {
      prisma.organisation.findUnique.mockResolvedValue(null);
      prisma.utilisateur.findUnique.mockResolvedValueOnce(null); // check email dispo
      prisma.organisation.create.mockResolvedValue({ id: "org-1" });
      prisma.utilisateur.create.mockResolvedValue({
        id: "user-1",
        email: "jane@example.com",
        prenom: "Jane",
        organisationId: "org-1",
        typeCompte: TypeCompte.ORGANISATION,
        roles: [{ role: RoleUtilisateur.RESPONSABLE_COMPTE }],
      });
      prisma.emailVerificationToken.create.mockResolvedValue({});

      const resultat = await service.registerOrganisation({
        organisationNom: "Hôpital Test",
        organisationRaisonSociale: "Hôpital Test SA",
        organisationTypeStructure: TypeStructure.HOPITAL,
        organisationIfu: "1234567890123",
        organisationType: TypeEtablissement.EH,
        organisationVille: "Cotonou",
        organisationPays: "Bénin",
        organisationTelephone: "+22990000000",
        organisationEmail: "contact@hopital-test.example",
        responsableCivilite: Civilite.MME,
        responsableNom: "Doe",
        responsablePrenom: "Jane",
        responsableEmail: "jane@example.com",
        motDePasse: "MotDePasse123!",
      });

      expect(resultat.utilisateur.roles).toEqual([{ role: RoleUtilisateur.RESPONSABLE_COMPTE }]);
      expect((resultat as unknown as { accessToken?: string }).accessToken).toBeUndefined();
      expect(prisma.refreshToken.create).not.toHaveBeenCalled();
      expect(prisma.emailVerificationToken.create).toHaveBeenCalledOnce();
      expect(mailer.sendVerificationEmail).toHaveBeenCalledWith("jane@example.com", "Jane", expect.any(String));
    });

    it("rejette si l'IFU existe déjà", async () => {
      prisma.organisation.findUnique.mockResolvedValue({ id: "org-existant" });
      prisma.utilisateur.findUnique.mockResolvedValue(null);

      await expect(
        service.registerOrganisation({
          organisationNom: "Hôpital Test",
          organisationRaisonSociale: "Hôpital Test SA",
          organisationTypeStructure: TypeStructure.HOPITAL,
          organisationIfu: "1234567890123",
          organisationType: TypeEtablissement.EH,
          organisationVille: "Cotonou",
          organisationPays: "Bénin",
          organisationTelephone: "+22990000000",
          organisationEmail: "contact@hopital-test.example",
          responsableCivilite: Civilite.MME,
          responsableNom: "Doe",
          responsablePrenom: "Jane",
          responsableEmail: "jane@example.com",
          motDePasse: "MotDePasse123!",
        }),
      ).rejects.toThrow("Une organisation avec cet IFU existe déjà");
    });
  });

  describe("login", () => {
    it("rejette un email inconnu", async () => {
      prisma.utilisateur.findUnique.mockResolvedValue(null);
      await expect(service.login({ email: "inconnu@example.com", motDePasse: "x".repeat(8) })).rejects.toThrow(
        "Identifiants invalides",
      );
    });

    it("rejette un mauvais mot de passe", async () => {
      const hash = await bcrypt.hash("BonMotDePasse1", 4);
      prisma.utilisateur.findUnique.mockResolvedValue({
        id: "user-1",
        actif: true,
        motDePasseHash: hash,
        organisationId: null,
        typeCompte: TypeCompte.INDIVIDUEL,
        emailVerifieLe: new Date(),
        roles: [],
      });

      await expect(
        service.login({ email: "jane@example.com", motDePasse: "MauvaisMotDePasse1" }),
      ).rejects.toThrow("Identifiants invalides");
    });

    it("rejette un email non vérifié malgré un bon mot de passe", async () => {
      const hash = await bcrypt.hash("BonMotDePasse1", 4);
      prisma.utilisateur.findUnique.mockResolvedValue({
        id: "user-1",
        actif: true,
        motDePasseHash: hash,
        organisationId: null,
        typeCompte: TypeCompte.INDIVIDUEL,
        emailVerifieLe: null,
        roles: [],
      });

      await expect(
        service.login({ email: "jane@example.com", motDePasse: "BonMotDePasse1" }),
      ).rejects.toThrow("confirmer votre adresse email");
      expect(prisma.refreshToken.create).not.toHaveBeenCalled();
    });

    it("accepte un bon mot de passe avec email vérifié et journalise la connexion", async () => {
      const hash = await bcrypt.hash("BonMotDePasse1", 4);
      prisma.utilisateur.findUnique.mockResolvedValue({
        id: "user-1",
        actif: true,
        motDePasseHash: hash,
        organisationId: null,
        typeCompte: TypeCompte.INDIVIDUEL,
        emailVerifieLe: new Date(),
        roles: [],
      });
      prisma.refreshToken.create.mockResolvedValue({});

      const resultat = await service.login({ email: "jane@example.com", motDePasse: "BonMotDePasse1" });

      expect(resultat.accessToken).toBeTruthy();
      expect(prisma.journalAudit.create).toHaveBeenCalledOnce();
    });

    it("rejette un compte désactivé", async () => {
      prisma.utilisateur.findUnique.mockResolvedValue({
        id: "user-1",
        actif: false,
        motDePasseHash: "peu importe",
        roles: [],
      });

      await expect(
        service.login({ email: "jane@example.com", motDePasse: "BonMotDePasse1" }),
      ).rejects.toThrow("Identifiants invalides");
    });
  });

  describe("refresh", () => {
    it("rejette un refresh token inconnu", async () => {
      prisma.refreshToken.findUnique.mockResolvedValue(null);
      await expect(service.refresh("token-inconnu")).rejects.toThrow("Session expirée");
    });

    it("rejette un refresh token révoqué", async () => {
      prisma.refreshToken.findUnique.mockResolvedValue({
        id: "rt-1",
        utilisateurId: "user-1",
        revokedAt: new Date(),
        expiresAt: new Date(Date.now() + 1000 * 60 * 60),
      });
      await expect(service.refresh("token-revoque")).rejects.toThrow("Session expirée");
    });

    it("rejette un refresh token expiré", async () => {
      prisma.refreshToken.findUnique.mockResolvedValue({
        id: "rt-1",
        utilisateurId: "user-1",
        revokedAt: null,
        expiresAt: new Date(Date.now() - 1000),
      });
      await expect(service.refresh("token-expire")).rejects.toThrow("Session expirée");
    });

    it("effectue une rotation du refresh token valide", async () => {
      prisma.refreshToken.findUnique.mockResolvedValue({
        id: "rt-1",
        utilisateurId: "user-1",
        revokedAt: null,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60),
      });
      prisma.utilisateur.findUnique.mockResolvedValue({
        id: "user-1",
        actif: true,
        organisationId: null,
        typeCompte: TypeCompte.INDIVIDUEL,
        emailVerifieLe: new Date(),
        roles: [],
      });
      prisma.refreshToken.create.mockResolvedValue({});

      const resultat = await service.refresh("token-valide");

      expect(prisma.refreshToken.update).toHaveBeenCalledWith({
        where: { id: "rt-1" },
        data: { revokedAt: expect.any(Date) },
      });
      expect(resultat.accessToken).toBeTruthy();
    });
  });

  describe("forgotPassword / resetPassword", () => {
    it("ne fait rien silencieusement si l'email est inconnu", async () => {
      prisma.utilisateur.findUnique.mockResolvedValue(null);
      await service.forgotPassword("inconnu@example.com");
      expect(mailer.sendPasswordResetEmail).not.toHaveBeenCalled();
    });

    it("crée un token et envoie l'email si le compte existe", async () => {
      prisma.utilisateur.findUnique.mockResolvedValue({ id: "user-1", actif: true, email: "jane@example.com" });
      prisma.passwordResetToken.create.mockResolvedValue({});

      await service.forgotPassword("jane@example.com");

      expect(prisma.passwordResetToken.create).toHaveBeenCalledOnce();
      expect(mailer.sendPasswordResetEmail).toHaveBeenCalledWith("jane@example.com", expect.any(String));
    });

    it("rejette un token de réinitialisation expiré ou déjà utilisé", async () => {
      prisma.passwordResetToken.findUnique.mockResolvedValue({
        id: "prt-1",
        utilisateurId: "user-1",
        usedAt: new Date(),
        expiresAt: new Date(Date.now() + 1000 * 60 * 60),
      });

      await expect(service.resetPassword("token-utilise", "NouveauMdp123!")).rejects.toThrow(
        "Lien de réinitialisation invalide ou expiré",
      );
    });

    it("met à jour le mot de passe et révoque les refresh tokens existants", async () => {
      prisma.passwordResetToken.findUnique.mockResolvedValue({
        id: "prt-1",
        utilisateurId: "user-1",
        usedAt: null,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60),
      });

      prisma.utilisateur.findUniqueOrThrow.mockResolvedValue({ id: "user-1", emailVerifieLe: new Date("2026-01-01") });

      await service.resetPassword("token-valide", "NouveauMdp123!");

      expect(prisma.$transaction).toHaveBeenCalledOnce();
      const operations = prisma.$transaction.mock.calls[0][0];
      expect(operations).toHaveLength(3);
      // Email déjà vérifié : la date d'origine est conservée.
      expect(prisma.utilisateur.update).toHaveBeenCalledWith(
        expect.objectContaining({ data: expect.objectContaining({ emailVerifieLe: new Date("2026-01-01") }) }),
      );
    });

    it("active un compte invité jamais vérifié (email marqué vérifié au premier mot de passe)", async () => {
      prisma.passwordResetToken.findUnique.mockResolvedValue({
        id: "prt-2",
        utilisateurId: "user-2",
        usedAt: null,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60),
      });
      prisma.utilisateur.findUniqueOrThrow.mockResolvedValue({ id: "user-2", emailVerifieLe: null });

      await service.resetPassword("token-invitation", "NouveauMdp123!");

      expect(prisma.utilisateur.update).toHaveBeenCalledWith(
        expect.objectContaining({ data: expect.objectContaining({ emailVerifieLe: expect.any(Date) }) }),
      );
    });
  });

  describe("verifyEmail / resendVerificationEmail", () => {
    it("rejette un token de vérification expiré ou déjà utilisé", async () => {
      prisma.emailVerificationToken.findUnique.mockResolvedValue({
        id: "evt-1",
        utilisateurId: "user-1",
        usedAt: new Date(),
        expiresAt: new Date(Date.now() + 1000 * 60 * 60),
      });

      await expect(service.verifyEmail("token-utilise")).rejects.toThrow(
        "Lien de vérification invalide ou expiré",
      );
    });

    it("marque l'email vérifié et le token utilisé", async () => {
      prisma.emailVerificationToken.findUnique.mockResolvedValue({
        id: "evt-1",
        utilisateurId: "user-1",
        usedAt: null,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60),
      });

      await service.verifyEmail("token-valide");

      expect(prisma.$transaction).toHaveBeenCalledOnce();
      const operations = prisma.$transaction.mock.calls[0][0];
      expect(operations).toHaveLength(2);
    });

    it("resendVerificationEmail ne fait rien si le compte est déjà vérifié", async () => {
      prisma.utilisateur.findUnique.mockResolvedValue({
        id: "user-1",
        email: "jane@example.com",
        emailVerifieLe: new Date(),
      });

      await service.resendVerificationEmail("jane@example.com");

      expect(mailer.sendVerificationEmail).not.toHaveBeenCalled();
    });

    it("resendVerificationEmail renvoie un nouveau token si non vérifié", async () => {
      prisma.utilisateur.findUnique.mockResolvedValue({
        id: "user-1",
        email: "jane@example.com",
        prenom: "Jane",
        emailVerifieLe: null,
      });
      prisma.emailVerificationToken.create.mockResolvedValue({});

      await service.resendVerificationEmail("jane@example.com");

      expect(mailer.sendVerificationEmail).toHaveBeenCalledWith("jane@example.com", "Jane", expect.any(String));
    });
  });
});
