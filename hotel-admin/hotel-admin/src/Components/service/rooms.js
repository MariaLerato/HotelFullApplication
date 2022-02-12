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
    update(data,id){
        console.log(data)
        return httpCommon.put("/",data)
    }
}
export default new RoomData()