import http from "./http-guest";

class BackendInfo{
 getAll(page=0){
     return http.get(`?page=${page}`)
 }
 createGuest(data){
     return http.post("/",data)
 }
 deleteUser(id){
    return http.delete(`hotel?id=${id}`)
}
find(query,by = "guest", page = 0){
    return http.get(`?${by}=${query}&page=${page}`)
}

}
export default new BackendInfo()