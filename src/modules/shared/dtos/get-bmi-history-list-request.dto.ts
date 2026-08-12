import { IsOptional, IsString } from 'class-validator';
import { AbstractBaseRequestDto } from './abstract-base-request.dto';

export class GetBmiHistoryListRequestDto extends AbstractBaseRequestDto {
  @IsString()
  @IsOptional()
  search?: string;
}
