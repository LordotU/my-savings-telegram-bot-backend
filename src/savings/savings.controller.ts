import { Controller, Get } from '@nestjs/common'
import { SavingsService } from './savings.service'
import { Saving } from './interfaces/saving.interface'

@Controller('savings')
export class SavingsController {
  constructor(private readonly savingsService: SavingsService) {}

  @Get()
  async findAll(): Promise<Saving[]> {
    return this.savingsService.findAll()
  }
}
