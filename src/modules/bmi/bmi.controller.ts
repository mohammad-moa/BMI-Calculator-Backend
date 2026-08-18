import { CurrentUserId } from '@common/decorators';
import { BMI_HISTORY_ROUTES, BMI_ROUTES } from '@constants/routes';
import { BmiEntity } from '@database/entities';
import {
  CalculateBmiRequestDto,
  GetBmiHistoryListRequestDto,
} from '@modules/shared/dtos';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiSecurity } from '@nestjs/swagger';

import { BmiService } from './bmi.service';

@ApiSecurity('X-Guest-ID')
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
  async create(
    @Body() body: CalculateBmiRequestDto,
    @CurrentUserId() userId: string,
  ): Promise<BmiEntity> {
    return this.bmiService.create(body, userId);
  }

  @Get(BMI_HISTORY_ROUTES)
  @ApiOperation({
    description: 'Get History Bmi',
  })
  @ApiResponse({
    status: 200,
  })
  async getHistories(
    @Query() query: GetBmiHistoryListRequestDto,
    @CurrentUserId() userId: string,
  ) {
    return this.bmiService.findHistories(query, userId);
  }
}
