import { readFileSync } from "node:fs";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

// TiDB Cloud impose TLS. Le pilote `mariadb` ne comprend pas le paramètre
// `?sslaccept=strict` de l'URL (spécifique à mysql2) : on construit donc une
// config explicite avec le CA plutôt que de passer la chaîne DATABASE_URL brute.
export function createTidbAdapter(databaseUrl: string, caPath: string) {
  const url = new URL(databaseUrl);

  return new PrismaMariaDb({
    host: url.hostname,
    port: Number(url.port || 4000),
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: url.pathname.replace(/^\//, ""),
    ssl: { ca: readFileSync(caPath, "utf8"), minVersion: "TLSv1.2" },
    connectionLimit: 5,
  });
}
