// registers aliases, DON'T REMOVE THIS LINE!
import 'module-alias/register';

import { NestFactory } from '@nestjs/core';
import { ValidationPipe, ValidationError } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import AppModule from './app.module';
import ValidationExceptions from './infrastructure/exceptions/validation.exceptions';
import AllExceptionsFilter from './infrastructure/filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.foorRoot());

  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors: ValidationError[]) => new ValidationExceptions(errors),
  }));
  app.useGlobalFilters(new AllExceptionsFilter());

  const port = process.env.SERVER_PORT || 3000;

  const options = new DocumentBuilder()
    .setTitle('Api v1')
    .setDescription('The boilerplate API for nestjs devs')
    .setVersion('1.0')
    .addBearerAuth({ in: 'header', type: 'http' })
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(port, async () => {
    console.log(`The server is running on ${port} port: http://localhost:${port}`);
  });
}
bootstrap();
