import axios from 'axios'

export default axios.create({
    baseURL:"http://9a10-156-0-230-6.ngrok.io/api/v1/hotels",
    headers:{
        "Content-type" :"application/json"
    }
})