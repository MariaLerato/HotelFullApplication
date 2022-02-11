import axios from "axios";

export default axios.create({
    baseURL:"http://b244-156-0-230-6.ngrok.io/api/hotelGuests",
    headers:{
        "Content-Type":"application/json"
    }
})