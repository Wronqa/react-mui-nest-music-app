import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

declare module 'express' {
  export interface Request {
    user: UserEntity;
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const email = req.session.email || null;

    if (email) {
      console.log(email);
      const user =
        (await this.userService.findOne(email)) || ({} as UserEntity);

      req.user = user;
    }
    next();
  }
}
