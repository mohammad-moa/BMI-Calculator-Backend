import {
  NextFunction,
  Request,
  Response,
} from 'express';

import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const guestId = req.headers['x-guest-id'];

    if (!guestId) {
      throw new BadRequestException('X-Guest-ID header is required');
    }

    req['user'] = { id: guestId, isGuest: true };

    next();
  }
}
