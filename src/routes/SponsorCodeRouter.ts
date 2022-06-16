import express from 'express'
import { authNeeded, restrictedToRoles } from '../auth'
import SponsorCodeController from '../controllers/SponsorCodeController'
const SponsorCodeRouter = express.Router()

SponsorCodeRouter.get('/', authNeeded, restrictedToRoles(['client', 'deliverer', 'restaurateur']), SponsorCodeController.get)

SponsorCodeRouter.post('/', authNeeded, express.json(), SponsorCodeController.post)

export default SponsorCodeRouter
