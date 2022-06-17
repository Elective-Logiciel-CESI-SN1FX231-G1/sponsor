import { Handler } from 'express'
import SponsorCodeModel from '../models/SponsorCodeModel'
import shortid from 'shortid'
import SponsorshipModel from '../models/SponsorshipModel'

export const get: Handler = async (req, res) => {
  let sponsorCode = await SponsorCodeModel.findOne({ user: { _id: req.user?._id } }).exec()
  if (!sponsorCode) {
    sponsorCode = new SponsorCodeModel({
      _id: shortid(),
      user: req.user,
      code: shortid()
    })
    await sponsorCode.save()
  }
  res.send(sponsorCode)
}

export const post: Handler = async (req, res) => {
  const sponsorCode = await SponsorCodeModel.findOne({ code: req.body.code }).exec()
  if (!sponsorCode) return res.send(400).send('Wrong sponsor code')
  const sponsored = req.user
  const sponsor = sponsorCode.user
  if (sponsored?._id === sponsor._id) return res.status(400).send('You cannot be sponsored by yourself')
  if (sponsored?.role !== sponsor.role) return res.status(400).send('You cannot be sponsored by an other role')
  if (await SponsorshipModel.findOne({ sponsored: { _id: req.user?._id } }).exec()) return res.status(400).send('You have been sponsored already')
  const sponsorships = new SponsorshipModel({
    _id: shortid(),
    sponsor,
    sponsored
  })
  await sponsorships.save()
  res.status(201).send(sponsorships)
}

export default {
  post,
  get
}
