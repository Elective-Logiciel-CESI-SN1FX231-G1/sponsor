import { Handler } from 'express'
import SponsorshipModel from '../models/SponsorshipModel'

export const getAll: Handler = async (req, res) => {
  const query = { 'sponsor._id': req.user?._id }
  const [results, count] = await Promise.all([
    SponsorshipModel.find(query).skip(req.pagination.skip).limit(req.pagination.size).exec(),
    SponsorshipModel.countDocuments(query).exec()
  ])
  res.send({
    count,
    results
  })
}

export default {
  getAll
}
