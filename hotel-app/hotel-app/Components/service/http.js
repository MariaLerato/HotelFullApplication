import axios from "axios";

export default axios.create({
    baseURL:"http://ee14-197-185-98-127.ngrok.io/api/v1/hotels",
    headers:{
        "Content-Type":"application/json"
    }
})