import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { SavingsController } from './savings.controller'
import { SavingsService } from './savings.service'
import { SavingSchema } from './schemas/saving.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Saving', schema: SavingSchema }]),
  ],
  controllers: [SavingsController],
  providers: [SavingsService],
})
export class SavingsModule {}
