import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Rate } from './interfaces/rate.interface'

@Injectable()
export class RatesService {
  constructor(@InjectModel('Rate') private readonly rateModel: Model<Rate>) {}

  async findAll(): Promise<Rate[]> {
    return await this.rateModel.find().exec()
  }
}
