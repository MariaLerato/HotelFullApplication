// import httpCommon from "./http-common";
// import httpGuest from "./http-guest";
import httpHotel from "./http-hotel"

class BackendInfo {
   
    getAll(page=0){
        return httpHotel.get(`?page=${page}`)
    }
    createGuest(data){
        return httpHotel.post("/",data)
    }
    deleteBooking(id){
        return httpHotel.delete(`/hotelGuest?id=${id}`)
    }
    getHotels(id){
        return httpHotel.get(`/id/${id}`)
    }
    
}
export default new BackendInfo()