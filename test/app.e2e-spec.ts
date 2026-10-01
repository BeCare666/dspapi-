import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module.js';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // Test scaffold d'origine (Nest CLI) mis à jour : JwtAuthGuard est global
  // dans cette application (voir AuthModule) et "/" ne porte pas @Public(),
  // donc une requête non authentifiée est refusée — c'est le comportement
  // réel et correct, pas une régression.
  it('/ (GET) sans authentification → 401', () => {
    return request(app.getHttpServer()).get('/').expect(401);
  });

  afterEach(async () => {
    await app.close();
  });
});
