import axios from "axios";

export default axios.create({
    baseURL:"http://fe78-105-12-0-114.ngrok.io/api/v1/hotels",
    headers:{
        "Content-Type":"application/json"
    }
})