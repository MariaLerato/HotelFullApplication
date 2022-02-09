import axios from "axios";

export default axios.create({
    baseURL:"https://server-app-new.herokuapp.com/api/v1/hotels",
    headers:{
        "Content-Type":"application/json"
    }
})