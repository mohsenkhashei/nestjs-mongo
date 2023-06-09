import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main (main.ts)');

  const app = await NestFactory.create(AppModule);
  logger.log(`Server running on port 3000`);
  await app.listen(3000);
}
bootstrap();
