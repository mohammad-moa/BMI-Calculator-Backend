import { DatabaseModule } from '@database/database.module';
import { BmiModule } from '@modules/bmi/bmi.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    BmiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
