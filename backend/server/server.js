import express from 'express'
import cors from 'cors'
import mongodb from 'mongodb'
import hotels from './routes/hotelRoutes.js'
import hotelguests from "./routes/hotelGuests.route.js"
import hotelroom from './routes/hotelRooms.route.js'
import facility from './routes/hotelFacility.route.js'
import user from './routes/User.route.js'

import http from 'http'
import dotenv from 'dotenv'
import { URL } from 'url'

const app = express()
dotenv.config()
const port = process.env.PORT || 3000
const server = http.createServer(app)


app.use(cors())
app.use(express.json())
app.use(express.json({limit:"2000mb",extended:true}))
app.use(express.urlencoded({limit:"2000mb",extended:true}))

app.use("/api/v1/hotels",hotels)
app.use("/api/hotelGuests",hotelguests)
app.use("/api/v1/hotelRoom",hotelroom)
app.use("/facility",facility)
app.use("/user",user)
app.use("*",(req,res)=>res.status(404).json({error:"not found"}))
// app.post("/api/v1/hotels",(req,res)=>{
//     const data = req.body
//     console.log(data)
//     res.data(data)
// })
server.listen(port,()=>{
    console.log(`Connected to port ${port}`)
}
)
export default app

