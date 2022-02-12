import httpUser from "./http-user";

class User{
    getUser(page=0){
        httpUser.get(`?page=${page}`)
    }
    createUser(data){
        httpUser.post("/",data)
    }
}
export default new User()