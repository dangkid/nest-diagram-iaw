import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  // Validación global para DTOs
  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  console.log(`✅ Aplicación ejecutándose en http://localhost:${port}`);
}
bootstrap();
