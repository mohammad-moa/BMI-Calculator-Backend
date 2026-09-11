import { IsEnum, IsIn, IsOptional, IsString } from 'class-validator';
import { AbstractBaseRequestDto } from './abstract-base-request.dto';
import { BmiStatusEnum } from '../enums';

export class GetBmiHistoryListRequestDto extends AbstractBaseRequestDto {
  @IsString()
  @IsOptional()
  search?: string;

  @IsEnum(BmiStatusEnum)
  @IsOptional()
  status?: BmiStatusEnum;
}
