// import httpCommon from "./http-common";
// import httpGuest from "./http-guest
import http from "./http"

class BackendInfo {
   
    getAll(page=0){
        return http.get(`?page=${page}`)
    }
    getRooms(page=0){
        return http.get(`/room?page=${page}`)
    }
    getClient(page=0){
        return http.get(`/client?page=${page}`)
    }
    createGuest(data){
        return http.post("/guests",data)
    }
    postClient(data){
        return http.post("/client",data)
    }
    deleteBooking(id){
        return http.delete(`/hotelGuest?id=${id}`)
    }
    getHotels(id){
        return http.get(`/:id/${id}`)
    }
    updateClient(data){
        return http.put("/client",data)
    }
    
}
export default new BackendInfo()