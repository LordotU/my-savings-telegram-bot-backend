import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    telegram_id: Number,
    first_name: String,
    last_name: String,
    username: String,
    language_code: String,
    base: String,
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

UserSchema.virtual('savings', {
  ref: 'Saving',
  localField: 'telegram_id',
  foreignField: 'telegram_id',
  justOne: false,
})

export { UserSchema }
