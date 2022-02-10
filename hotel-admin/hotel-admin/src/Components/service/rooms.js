import httpCommon from "./http-common";

class RoomData {
    getAllRooms(page=0){
        return httpCommon.get(`?page=${page}`)
    }
    createRoom(data){
        return httpCommon.post("/",data)
    }
    deleteRoom(id){
        return httpCommon.delete(`?id=${id}`)
    }
    createFacility(data){
        return httpCommon.post("/",data)
    }
}
export default new RoomData()