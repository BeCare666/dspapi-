// Charge apps/api/.env avant l'instanciation d'AppModule dans les tests e2e —
// sans ça, PrismaService plante au démarrage (DATABASE_URL undefined), même
// erreur que celle déjà documentée pour `nest start` dans ROADMAP.md.
// Miroir de la première ligne de src/main.ts.
import "dotenv/config";
