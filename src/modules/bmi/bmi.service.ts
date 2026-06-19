import { Repository } from 'typeorm';

import { BmiEntity } from '@database/entities';
import { CalculateBmiRequestDto } from '@modules/shared/dtos';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BmiService {
  constructor(
    @InjectRepository(BmiEntity)
    private readonly bmiRepository: Repository<BmiEntity>,
  ) {}

  async create(body: CalculateBmiRequestDto) {
    const calculateBmi = this.bmiRepository.create(body);
    return await this.bmiRepository.save(calculateBmi);
  }
}
