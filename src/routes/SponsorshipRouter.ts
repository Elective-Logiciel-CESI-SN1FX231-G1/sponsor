import express from 'express'
import { authNeeded } from '../auth'
import SponsorshipController from '../controllers/SponsorshipController'
import paginate from '../utils/pagination'
const SponsorshipRouter = express.Router()

/**
 * @api {get} /sponsor/api/sponsorships/ Request Sponsorships information
 * @apiName GetAll
 * @apiGroup Sponsorship
 *
 * @apiQuery {Number} size=10 Number of elements per page.
 * @apiQuery {Number} skip=0 Number of elements to skip.
 * @apiQuery {Number} page=1 The page to get.
 *
 * @apiSuccess {Number} count Number of products returned.
 * @apiSuccess {Array} results Array of products.
 * @apiSuccess {String} _id Sponsorship's unique ID.
 * @apiSuccess {Object} sponsor User sponsoring.
 * @apiSuccess {Object} sponsored User getting sponsored.
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "count": "1",
 *      "results": [
 *          {
 *               "_id": "2WEKaVNO",
 *               "sponsor": {
 *                  "_id": "Wp4vULfGv",
 *                  "firstname": "Restaurant - 2",
 *                  "lastname": "Test",
 *                  "phone": "0606060606",
 *                  "email": "2@restaurateur.com",
 *                  "role": "restaurateur"
 *              },
 *              "sponsored": {
 *                  "_id": "Po5SULfGv",
 *                  "firstname": "Restaurant - 3",
 *                  "lastname": "Test",
 *                  "phone": "0606060604",
 *                  "email": "3@restaurateur.com",
 *                  "role": "restaurateur"
 *              }
 *          }
 *      ]
 *    }
 */
SponsorshipRouter.get('/', authNeeded, paginate, SponsorshipController.getAll)

export default SponsorshipRouter
