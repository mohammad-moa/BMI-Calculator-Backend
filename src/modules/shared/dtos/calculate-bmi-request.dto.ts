import {
  IsEnum,
  IsNotEmpty,
  IsString,
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

  @IsString()
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  weight: number;

  @IsEnum(WeightEnum)
  @IsNotEmpty()
  weightUnit: WeightEnum;

  @IsString()
  @IsNotEmpty()
  height: number;

  @IsEnum(HeightEnum)
  @IsNotEmpty()
  heightUnit: HeightEnum;
}
