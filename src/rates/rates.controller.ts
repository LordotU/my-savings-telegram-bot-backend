import { Controller, Get } from '@nestjs/common'
import { RatesService } from './rates.service'
import { Rate } from './interfaces/rate.interface'

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Get()
  async findAll(): Promise<Rate[]> {
    return this.ratesService.findAll()
  }
}
