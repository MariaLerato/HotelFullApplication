import express from 'express'
import HotelRoomCtrl from '../Controllers/hotelRooms.controllers.js'

const router = express.Router()

router.route("/").get(HotelRoomCtrl.apiGetHotelRooms)
.post(HotelRoomCtrl.apiPostHotelRooms)
.delete(HotelRoomCtrl.apiDeleteHotelRooms)
.post(HotelRoomCtrl.apiPostFacilities)

export default router