import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Saving } from './interfaces/saving.interface'

@Injectable()
export class SavingsService {
  constructor(
    @InjectModel('Saving') private readonly savingModel: Model<Saving>,
  ) {}

  async findAll(): Promise<Saving[]> {
    return await this.savingModel
      .find()
      .populate('user')
      .exec()
  }
}
