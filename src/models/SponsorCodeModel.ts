import { Schema, model } from 'mongoose'
import { User } from '../auth'

export interface SponsorCode {
  _id: string,
  user: User,
  code: string
}

export default model('SponsorCode', new Schema<SponsorCode>({
  _id: { type: String, required: true },
  user: {
    _id: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true }
  },
  code: { type: String, required: true, unique: true }
}))
