import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

import {
  GenderEnum,
  HeightEnum,
  WeightEnum,
} from '../enums';

export class CalculateBmiRequestDto {
  @IsEnum(GenderEnum)
  @IsNotEmpty()
  gender: GenderEnum;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @IsEnum(WeightEnum)
  @IsNotEmpty()
  weightUnit: WeightEnum;

  @IsNumber()
  @IsNotEmpty()
  height: number;

  @IsEnum(HeightEnum)
  @IsNotEmpty()
  heightUnit: HeightEnum;
}
