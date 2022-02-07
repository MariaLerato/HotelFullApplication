// import httpCommon from "./http-common";
// import httpGuest from "./http-guest";
import httpHotel from "./http-hotel";

class BackendInfo{
    getAllHotels(page=0){
        httpHotel.get(`?page=${page}`)
    }
    
    // getAllRooms(page=0){
    //     return httpCommon.get(`?page=${page}`)
    // }
    // createClient(data){
    //     return httpGuest.post("/",data)
    // }
    // deleteRoom(id){
    //     return httpCommon.delete(`?id=${id}`)
    // }
}
export default new BackendInfo()