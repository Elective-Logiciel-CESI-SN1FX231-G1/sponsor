import { Handler } from 'express'
import SponsorshipModel from '../models/SponsorshipModel'

export const getAll: Handler = async (req, res) => {
  const Sponsorships = await SponsorshipModel.find({ sponsor: { _id: req.user?._id } })
  res.send(Sponsorships)
}

export default {
  getAll
}
