// import httpCommon from "./http-common";
// import httpGuest from "./http-guest";
import httpHotel from "./http-hotel"

class BackendInfo {
    getAllHotels(page=0){
        httpHotel.get(`?page=${page}`)
    }
    getAll(page=0){
        return httpHotel.get(`?page=${page}`)
    }
    createHotel(data){
        return httpHotel.post("/",data)
    }
    
}
export default new BackendInfo()