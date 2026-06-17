import { BMI_ROUTES } from '@constants/routes';
import { Controller, Get } from '@nestjs/common';

import { BmiService } from './bmi.service';

@Controller(BMI_ROUTES)
export class BmiController {
  constructor(private readonly bmiService: BmiService) {}

  @Get()
  getHello(): string {
    return this.bmiService.get();
  }
}
