import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ credentials: true, origin: true });
  app.use(
    cookieSession({
      keys: [process.env.COOKIE_KEY],
    }),
  );
  await app.listen(5000);
}
bootstrap();
