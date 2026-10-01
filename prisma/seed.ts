// Seed de développement — dps.bj
// - Compte admin plateforme initial
// - Grilles EH/ESPC PLACEHOLDER (structure minimale) pour débloquer le développement
//   des sessions d'auto-évaluation avant que le contenu réel du CDC soit fourni.
//   ⚠️ À remplacer par le vrai référentiel avant toute mise en production.
import "dotenv/config";
import bcrypt from "bcrypt";
import { randomBytes } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { PrismaClient, TypeCompte, RoleUtilisateur, TypeEtablissement, StatutGrille, TypeReponse } from "../src/generated/prisma/client.js";
import { createTidbAdapter } from "../src/prisma/create-tidb-adapter.js";

const certsDir = join(dirname(fileURLToPath(import.meta.url)), "..", "certs");
const adapter = createTidbAdapter(process.env.DATABASE_URL!, join(certsDir, "tidb-ca.pem"));
const prisma = new PrismaClient({ adapter });

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL ?? "houedonou.fils@gmail.com";
  const existing = await prisma.utilisateur.findUnique({ where: { email } });
  if (existing) {
    console.log(`Admin plateforme déjà présent (${email}), aucune modification.`);
    return;
  }

  const password = process.env.ADMIN_PASSWORD ?? randomBytes(9).toString("base64url");
  const motDePasseHash = await bcrypt.hash(password, 12);

  const admin = await prisma.utilisateur.create({
    data: {
      typeCompte: TypeCompte.ADMIN_PLATEFORME,
      email,
      motDePasseHash,
      nom: "Admin",
      prenom: "Plateforme",
      emailVerifieLe: new Date(), // provisionné directement par la plateforme, pas via l'inscription publique
      roles: { create: { role: RoleUtilisateur.ADMIN_PLATEFORME } },
    },
  });

  console.log(`Compte admin plateforme créé : ${admin.email}`);
  if (!process.env.ADMIN_PASSWORD) {
    console.log(`Mot de passe généré (à noter, non réaffiché) : ${password}`);
  }
}

async function seedGrillePlaceholder(type: TypeEtablissement) {
  const nom = `Grille ${type} — placeholder`;
  const existing = await prisma.grille.findUnique({ where: { nom_version: { nom, version: 1 } } });
  if (existing) {
    console.log(`${nom} v1 déjà présente, aucune modification.`);
    return;
  }

  await prisma.grille.create({
    data: {
      nom,
      type,
      version: 1,
      statut: StatutGrille.PUBLIEE,
      publieeLe: new Date(),
      domaines: {
        create: [
          {
            nom: "Domaine placeholder 1",
            ordre: 1,
            normes: {
              create: [
                {
                  code: "N1",
                  libelle: "Norme placeholder 1",
                  ordre: 1,
                  criteres: {
                    create: [
                      {
                        code: "C1",
                        libelle: "Critère placeholder 1",
                        ordre: 1,
                        elementsMesurables: {
                          create: [
                            { libelle: "Élément mesurable placeholder 1.1", typeReponse: TypeReponse.OUI_NON, ordre: 1 },
                            { libelle: "Élément mesurable placeholder 1.2", typeReponse: TypeReponse.OUI_NON, ordre: 2 },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log(`${nom} v1 créée.`);
}

// D8 — provisionne la seule ligne de paramètre validée à ce jour. Le
// paramètre n'existe qu'ici : l'API ne permet jamais de créer une nouvelle
// clé, seulement de modifier une clé déjà seedée (voir ParametresService).
async function seedParametres() {
  const cle = "duree_essai_module_jours";
  const existant = await prisma.parametrePlateforme.findUnique({ where: { cle } });
  if (existant) {
    console.log(`Paramètre ${cle} déjà présent, aucune modification.`);
    return;
  }

  const valeurDefaut = process.env.DUREE_ESSAI_MODULE_JOURS ?? "90";
  await prisma.parametrePlateforme.create({
    data: {
      cle,
      valeur: valeurDefaut,
      type: "entier",
      description: "Durée (en jours) de l'essai gratuit accordé à un établissement à la première utilisation d'un module NEWS ou EI (RM6).",
      valeurDefaut,
    },
  });
  console.log(`Paramètre ${cle} créé (valeur : ${valeurDefaut}).`);
}

async function main() {
  await seedAdmin();
  await seedGrillePlaceholder(TypeEtablissement.EH);
  await seedGrillePlaceholder(TypeEtablissement.ESPC);
  await seedParametres();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
