import { Injectable } from '@nestjs/common';

@Injectable()
export class BmiService {
  get(): string {
    return 'Hello World!';
  }
}
