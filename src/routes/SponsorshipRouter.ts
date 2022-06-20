import express from 'express'
import { authNeeded } from '../auth'
import SponsorshipController from '../controllers/SponsorshipController'
import paginate from '../utils/pagination'
const SponsorshipRouter = express.Router()

SponsorshipRouter.get('/', authNeeded, paginate, SponsorshipController.getAll)

export default SponsorshipRouter
