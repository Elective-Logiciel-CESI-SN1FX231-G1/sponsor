import express from 'express'
import { authNeeded, restrictedToRoles } from '../auth'
import SponsorCodeController from '../controllers/SponsorCodeController'
const SponsorCodeRouter = express.Router()

/**
 * @api {get} /sponsor/api/sponsor-code/ Request code information for connected user
 * @apiName GetOne
 * @apiGroup Sponsor-code
 *
 * @apiSuccess {String} _id Sponsorship's unique ID.
 * @apiSuccess {Object} user User linked to the requested code.
 * @apiSuccess {String} code User's code.
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *         "_id": "2WEKaVNO",
 *         "user": {
 *             "_id": "Wp4vULfGv",
 *             "firstname": "Restaurant - 2",
 *             "lastname": "Test",
 *             "phone": "0606060606",
 *             "email": "2@restaurateur.com",
 *             "role": "restaurateur"
 *         },
 *         "code": "Dk5SULfGv"
 *    }
 */
SponsorCodeRouter.get('/', authNeeded, restrictedToRoles(['client', 'deliverer', 'restaurateur']), SponsorCodeController.get)

/**
 * @api {get} /sponsor/api/sponsor-code/ Use coupon to get sponsorship
 * @apiName UseOne
 * @apiGroup Sponsor-code
 *
 * @apiBody {String} code Code to use.
 *
 * @apiExample {json} Request-Example:
 *    {
 *      "code": "64DoaVGO"
 *    }
 *
 * @apiSuccess {String} _id Sponsorship's unique ID.
 * @apiSuccess {Object} sponsor User sponsoring.
 * @apiSuccess {Object} sponsored User getting sponsored.
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 201 OK
 *    {
 *          "_id": "2WEKaVNO",
 *          "sponsor": {
 *             "_id": "Wp4vULfGv",
 *             "firstname": "Restaurant - 2",
 *             "lastname": "Test",
 *             "phone": "0606060606",
 *             "email": "2@restaurateur.com",
 *             "role": "restaurateur"
 *          },
 *          "sponsored": {
 *                  "_id": "Po5SULfGv",
 *                  "firstname": "Restaurant - 3",
 *                  "lastname": "Test",
 *                  "phone": "0606060604",
 *                  "email": "3@restaurateur.com",
 *                  "role": "restaurateur"
 *          }
 *    }
 */
SponsorCodeRouter.post('/', authNeeded, express.json(), SponsorCodeController.post)

export default SponsorCodeRouter
