import BSON from 'bson'
import HotelGuestDAO from '../Dao/hotelGuests.dao.js'

const ObjectId = BSON.ObjectId

export default class HotelGuestController{
    static async apiPostHotelGuests(req,res,next){
        try{
            const {name,guestsNo,roomNo,Room,guestId,status,Totalprice,dateIn,dateOut,location} = req.body
            console.log("Details",req.body)
            const HotelGuestResponse = await HotelGuestDAO.addHotelGuests(
                name,
                guestsNo,                                            
                roomNo,
                Room,
                Totalprice,
                dateIn,
                dateOut,
            )
            console.log(HotelGuestResponse)
            res.json({status:"Success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
    static async apiGetHotelGuests(req,res,next){
        const GuestsPerPage = req.query.GuestsPerPage ? parseInt(req.GuestsPerPage, 10) :20
        const page = req.query.page  ? parseInt(req.query.page, 10): 0
       
        let filters = {}
        if(req.query.name){
            filters.name = req.query.name
        }
        const {GuestList,totalNumGuests} = await HotelGuestDAO.getHotelGuests(
            filters,
            page,
            GuestsPerPage
        )
            let response = {
                hotelGuest:GuestList,
                page:page,
                filters:filters,
                entries_per_page:GuestsPerPage,
                total_results:totalNumGuests
            }
            res.json(response)
            console.log(response)
    }
    static async apiDeleteHotelGuests(req,res,next){
        try{
            const hotelId = req.query.id
            const adminId = req.body.adminId
            console.log(hotelId)
            const HotelResponse = await HotelGuestDAO.deleteHotel(
              hotelId,
              adminId
            )
                console.log(HotelResponse)
            res.json({ status :"success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }

    }
}
