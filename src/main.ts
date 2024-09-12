import { NestFactory } from '@nestjs/core';
import { CatAppModule } from './cats/app.module';

async function bootstrap() {
  const app = await NestFactory.create(CatAppModule);
  await app.listen(3000);
}

bootstrap();
