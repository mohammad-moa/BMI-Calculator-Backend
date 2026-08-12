import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export abstract class AbstractBaseRequestDto {
  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  page: number = 1;

  @IsNumber()
  @IsPositive()
  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  limit: number = 10;
}
