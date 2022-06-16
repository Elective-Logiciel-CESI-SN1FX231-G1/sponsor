import { Schema, model } from 'mongoose'
import { User } from '../auth'

export interface Sponsorship {
  _id: string,
  sponsor: User,
  sponsored: User
}

export default model('Sponsorship', new Schema<Sponsorship>({
  _id: { type: String, required: true },
  sponsor: {
    _id: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true }
  },
  sponsored: {
    _id: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true }
  }
}))
