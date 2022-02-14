import httpHotel from "./http-hotel";

class Hotels{
    getAll(page = 0){
        return httpHotel.get(`?page=${page}`);
    }
    get(id){
        return httpHotel.get(`/id/${id}`)
    }
}
export default new Hotels()