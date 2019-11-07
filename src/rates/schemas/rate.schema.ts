import * as mongoose from 'mongoose'

export const RateSchema = new mongoose.Schema(
  {
    _id: String,
    base: String,
    rate: Number,
  },
  {
    minimize: false,
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
)
