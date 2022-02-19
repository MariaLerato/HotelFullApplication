import axios from "axios";

export default axios.create({
    baseURL:"http://d19c-105-12-6-6.ngrok.io/api/v1/hotels",
    headers:{
        "Content-Type":"application/json"
    }
})