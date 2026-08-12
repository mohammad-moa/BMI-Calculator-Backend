import { Repository } from 'typeorm';

import { BmiEntity } from '@database/entities';
import { CalculateBmiRequestDto } from '@modules/shared/dtos';
import {
  convertHeightToCentimeter,
  convertWeightToKilogram,
  pagination,
} from '@modules/shared/utils';
import { Injectable } from '@nestjs/common';
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

  async create(body: CalculateBmiRequestDto, userId: string) {
    const weight = convertWeightToKilogram(body.weight, body.weightUnit);
    const height = convertHeightToCentimeter(body.height, body.heightUnit);
    const bmi = calculateBmiCore(weight, height);
    const bodyFat = calculateBodyFatCore(bmi, body.age, body.gender);

    const createCalculateBmi = this.bmiRepository.create({
      ...body,
      bmi,
      bodyFat,
      status: generateBmiStatus(bmi),
      userId,
    });
    return await this.bmiRepository.save(createCalculateBmi);
  }

  async findHistories(userId: string) {
    const queryBuilder = this.bmiRepository
      .createQueryBuilder('bmi')
      .where('bmi.userId = :userId', { userId });

    return await pagination(queryBuilder);
  }
}
