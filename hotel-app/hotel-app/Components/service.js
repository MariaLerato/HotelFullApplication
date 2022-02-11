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
    
}
export default new BackendInfo()