import axios from "axios";

export default axios.create({
    baseURL:"http://ef4a-105-245-104-33.ngrok.io/api/v1/hotels",
    headers:{
        "Content-Type":"application/json"
    }
})