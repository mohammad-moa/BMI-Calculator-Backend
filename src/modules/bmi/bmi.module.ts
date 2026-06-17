import { DatabaseModule } from '@database/database.module';
import { Module } from '@nestjs/common';

import { BmiController } from './bmi.controller';
import { BmiService } from './bmi.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BmiController],
  providers: [BmiService],
})
export class BmiModule {}
