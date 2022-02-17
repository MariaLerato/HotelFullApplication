import express from 'express'
import HotelsCtrl from '../Controllers/hotelControllers.js'
import HotelRoomCtrl from '../Controllers/hotelRooms.controllers.js'
import HotelGuestCtrl from "../Controllers/hotelGuests.controller.js"
import FacilityController from '../Controllers/hotelFacility.js'
import UserController from '../Controllers/User.controllers.js'

const router = express.Router()

router.route("/")
.get(HotelsCtrl.apiGetHotels)
.post(HotelsCtrl.apiPostHotel)

.delete(HotelsCtrl.apiDeleteHotel)
.put(HotelsCtrl.apiUpdateHotel)

router.route("/id/:id")
.get(HotelsCtrl.apiGetRestaurantById)

router.route("/room").get(HotelRoomCtrl.apiGetHotelRooms)
.post(HotelRoomCtrl.apiPostHotelRooms)
.delete(HotelRoomCtrl.apiDeleteHotelRooms)
.put(HotelRoomCtrl.apiUpdateHotelRooms)

router.route("/user").get(UserController.apiGetUser)
.post(UserController.apiPostUser)
router.route("/log").get(UserController.apiGetUser)
.post(UserController.apiLogUser)

router.route("/guests").get(HotelGuestCtrl.apiGetHotelGuests)
.post(HotelGuestCtrl.apiPostHotelGuests)
.delete(HotelGuestCtrl.apiDeleteHotelGuests)

router.route('/facility').post(FacilityController.apiPostFacility)
.get(FacilityController.apiGetFacility)


export default router

