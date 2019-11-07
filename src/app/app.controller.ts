import { All, Controller, Res, HttpStatus } from '@nestjs/common'
import { Response } from 'express'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All('/healthcheck')
  healthcheck(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.appService.getUsedMemory())
  }
}
