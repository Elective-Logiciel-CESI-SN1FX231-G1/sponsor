import express from 'express'
import { authNeeded } from '../auth'
import SponsorshipController from '../controllers/SponsorshipController'
const SponsorshipRouter = express.Router()

SponsorshipRouter.get('/', authNeeded, SponsorshipController.getAll)

export default SponsorshipRouter
