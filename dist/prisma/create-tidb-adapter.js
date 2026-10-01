import { readFileSync } from "node:fs";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
export function createTidbAdapter(databaseUrl, caPath) {
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
//# sourceMappingURL=create-tidb-adapter.js.map