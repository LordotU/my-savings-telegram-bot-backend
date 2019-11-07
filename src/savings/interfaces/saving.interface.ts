import { Document } from 'mongoose'

export interface Saving extends Document {
  readonly telegram_id: number
  readonly amount: number
  readonly currency: string
}
