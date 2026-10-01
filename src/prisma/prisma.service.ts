import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { join } from "node:path";
import { PrismaClient } from "../generated/prisma/client.js";
import { createTidbAdapter } from "./create-tidb-adapter.js";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      adapter: createTidbAdapter(
        process.env.DATABASE_URL!,
        join(process.cwd(), "certs", "tidb-ca.pem"),
      ),
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
