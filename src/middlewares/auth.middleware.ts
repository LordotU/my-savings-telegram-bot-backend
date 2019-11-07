import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { AppService } from '../app/app.service'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly appService: AppService) {}

  use(req: Request, res: Response, next: () => void) {
    if (!this.appService.isAuthorized(req)) {
      throw new UnauthorizedException()
    }

    next()
  }
}
