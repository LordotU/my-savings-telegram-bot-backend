import * as mongoose from 'mongoose'

const SavingSchema = new mongoose.Schema(
  {
    telegram_id: Number,
    amount: Number,
    currency: String,
  },
  {
    minimize: false,
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  },
)

SavingSchema.virtual('user', {
  ref: 'User',
  localField: 'telegram_id',
  foreignField: 'telegram_id',
  justOne: true,
})

export { SavingSchema }
