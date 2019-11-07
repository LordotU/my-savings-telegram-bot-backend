import { Document } from 'mongoose'

export interface Rate extends Document {
  readonly rate: number
}
