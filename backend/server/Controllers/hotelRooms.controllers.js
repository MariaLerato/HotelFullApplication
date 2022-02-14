import BSON from 'bson'
import HotelRoomDAO from '../Dao/hotelRoom.dao.js'

const ObjectId = BSON.ObjectId
export default class HotelRoomController{
    static async apiPostHotelRooms(req,res,next){
        try{
            const hotelId = req.body.hotel_id
             const name=  req.body.name
             const price = req.body.price
             const province = req.body.province
             const city = req.body.city 
             const image = req.body.image
             const lounge = req.body.lounge
            const pool = req.body.pool
             const roomId = req.body.roomId
            const description = req.body.text
            const status = req.body.status
            const date = new Date()
            const HotelRoomResponse = await HotelRoomDAO.addHotelRoom(
                ObjectId(hotelId),
                name,
                price,
                province,
                city,
                image,
                lounge,
                pool,
                roomId,
                description,
                status,
                date,
           
                
                
                
                
            )
            console.log(HotelRoomResponse)
            res.json({status:"Success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
  
    static async apiGetHotelRooms(req,res,next){
        const  hotelRoomPerPage = req.query. hotelRoomPerPage ? parseInt(req. hotelRoomPerPage, 10) :20
        const page = req.query.page  ? parseInt(req.query.page, 10): 0
        const filters = {}
        if(req.query.name){
            filters.name = req.query.name
        }
        const { hotelRoomList,totalNumHotelRoom} = await HotelRoomDAO.getHotelRoom(
            filters,
            page,
            hotelRoomPerPage
        )
            let response = {
                hotelrooms: hotelRoomList,
                page:page,
                filters:filters,
                entries_per_page:hotelRoomPerPage,
                total_results:totalNumHotelRoom
            }
            res.json(response)
            console.log(response)
    }
    static async apiDeleteHotelRooms(req,res,next){
        try{
            const hotelId = req.query.id
            const roomId = req.body.roomId
            console.log(hotelId)
            const HotelResponse = await HotelRoomDAO.deleteHotelRoom(
              hotelId,
              roomId
            )
                console.log(HotelResponse)
            res.json({ status :"success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiUpdateHotelRooms(req,res,next){
        try{
            const roomId = req.body.room_id
            const status = req.body.status
            const date = new Date()
            const roomResponse = await HotelRoomDAO.updateHotelRoom(
                roomId,
                req.body.hotel_id,
                status,
                date
            )
            console.log(roomResponse)
            var {error} = roomResponse
            if(error){
                res.status(400).json({error})
            }
            if (roomResponse.modifiedCount === 0){
                throw new Error(
                    "unable to update hotel room"
                )
            }
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
}