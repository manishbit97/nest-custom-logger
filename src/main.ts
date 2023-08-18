import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import { CustomLoggerService } from './core/custom-logger';

async function bootstrap() {
  const customLoggerService = new CustomLoggerService();
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(customLoggerService.createLoggerConfig),
  });
  await app.listen(3000);
}
bootstrap();
