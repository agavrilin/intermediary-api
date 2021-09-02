/* eslint-disable import/no-extraneous-dependencies */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import supertest from 'supertest';
import { GenericContainer, StartedTestContainer } from 'testcontainers';

import AppModule from '../../../src/app.module';

describe('ProductsController (e2e)', () => {
  let app: INestApplication;
  let container: StartedTestContainer;
  const portMongo = 27017;
  jest.setTimeout(30000);

  beforeAll(async () => {
    container = await new GenericContainer('mongo')
      .withExposedPorts(portMongo)
      .withName('test')
      .start();
  });

  afterAll(() => {
    container.stop();
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule.foorRoot(),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (Post)', async () => {
    const response = await supertest(app.getHttpServer())
      .post('/intermediary/')
      .send({});

    expect(response.status).toBe(201);
    expect(response.body.id).not.toBeNull();
    expect(response.body.price).toBe(1000);
  });
});
