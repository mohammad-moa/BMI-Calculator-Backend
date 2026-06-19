import { BMI_ROUTES } from '@constants/routes';
import { BmiEntity } from '@database/entities';
import { CalculateBmiRequestDto } from '@modules/shared/dtos';
import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

import { BmiService } from './bmi.service';

@Controller(BMI_ROUTES)
export class BmiController {
  constructor(private readonly bmiService: BmiService) {}

  @Post()
  @ApiOperation({
    description: 'Calculate Bmi',
  })
  @ApiResponse({
    status: 200,
  })
  async create(@Body() body: CalculateBmiRequestDto): Promise<BmiEntity> {
    return this.bmiService.create(body);
  }
}
