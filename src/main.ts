import { API_ROUTES, SWAGGER_ROUTES } from '@constants/routes';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(API_ROUTES);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('BMI Calculator')
    .setDescription('Api For BMI Calculator')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(SWAGGER_ROUTES, app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'BMI Calculator Api',
  });

  await app.listen(process.env.PORT ?? 4001);

  Logger.log(`Swagger run with http://localhost:4001${SWAGGER_ROUTES}`);
}
bootstrap();
