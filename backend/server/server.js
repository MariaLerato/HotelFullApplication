import express from 'express'
import cors from 'cors'
import mongodb from 'mongodb'
import hotels from './routes/hotelRoutes.js'
import hotelguests from "./routes/hotelGuests.route.js"
import hotelroom from './routes/hotelRooms.route.js'
import http from 'http'
import dotenv from 'dotenv'
import { URL } from 'url'

const app = express()
dotenv.config()
const port = process.env.PORT || 3000
const server = http.createServer(app)

app.use(cors({origin: new URL('https://server-app-new.herokuapp.com/api/v1/hotels'), credentials:true}))
app.use(express.json())
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))

app.use("/api/v1/hotels",hotels)
app.use("/api/hotelGuests",hotelguests)
app.use("/api/v1/hotelRoom",hotelroom)

app.use("*",(req,res)=>res.status(404).json({error:"not found"}))
app.post("/api/v1/hotels",(req,res)=>{
    const data = req.body
    console.log(data)
    res.data(data)
})
server.listen(port,()=>{
    console.log(`Connected to port ${port}`)
}
)
export default app

