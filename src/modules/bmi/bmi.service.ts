import { Repository } from 'typeorm';

import { BmiEntity } from '@database/entities';
import { CalculateBmiRequestDto } from '@modules/shared/dtos';
import {
  convertHeightToCentimeter,
  convertWeightToKilogram,
} from '@modules/shared/utils';
import {
  Injectable,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  calculateBmiCore,
  calculateBodyFatCore,
  generateBmiStatus,
} from './bmi.util';

@Injectable()
export class BmiService {
  constructor(
    @InjectRepository(BmiEntity)
    private readonly bmiRepository: Repository<BmiEntity>,
  ) {}

  async create(body: CalculateBmiRequestDto) {
    const weight = convertWeightToKilogram(body.weight, body.weightUnit);
    const height = convertHeightToCentimeter(body.height, body.heightUnit);
    const bmi = calculateBmiCore(weight, height);
    const bodyFat = calculateBodyFatCore(bmi, body.age, body.gender);

    Logger.log(`bmi: ${bmi}, bodyfat: ${bodyFat}`);

    const createCalculateBmi = this.bmiRepository.create({
      ...body,
      bmi,
      bodyFat,
      status: generateBmiStatus(bmi),
    });
    return await this.bmiRepository.save(createCalculateBmi);
  }
}
