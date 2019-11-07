import { Document } from 'mongoose'

export interface User extends Document {
  readonly telegram_id: number
  readonly first_name: string
  readonly last_name: string
  readonly username: string
  readonly language_code: string
}
