import { Injectable } from '@nestjs/common'
import { Request } from 'express'
import { ConfigService } from '../config/config.service'

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getUsedMemory(): object {
    const usedMemory = process.memoryUsage()
    return Object.keys(usedMemory).reduce(
      (result, type) => ({
        ...result,
        [type]: `${Math.round((usedMemory[type] / 1024 / 1024) * 100) /
          100} MB`,
      }),
      {},
    )
  }

  isAuthorized(req: Request): boolean {
    const XAuthToken = req.get('X-Auth-Token') || req.cookies['X-Auth-Token']

    return XAuthToken === this.configService.get('BACKEND_AUTH_TOKEN')
  }
}
