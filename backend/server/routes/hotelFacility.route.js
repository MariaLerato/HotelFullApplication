import express from 'express'
import FacilityController from '../Controllers/hotelFacility.js'

const router = express.Router()

router.route('/facility').post(FacilityController.apiPostFacility)
.get(FacilityController.apiGetFacility)
export default router
