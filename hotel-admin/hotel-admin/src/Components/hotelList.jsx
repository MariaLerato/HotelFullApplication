import React from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import toastr from 'toastr'

const HotelList = ({data,Check,users}) => {
    toast.configure()

    const navigate = useNavigate()
    console.log('user',users)
    const Navigating = (e)=>{
        if(data.email === users ){
            navigate('/guestlist')
            console.log('email',data.email)
        }else{
            toast(`User Not Authenticated To Access ${data.name} Information. Please Check Credientials `)
        }
    }
   return (
    <div>  
        <div class="card" style={{width: '20rem',margin:'2%'}}>
            <img src={data.image.image}  style={{width:'100%',height:200}}  class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{data.name}</h5>
              <p class="card-text">{data.province}, {data.city}</p>
              <button  className="btn btn-primary" users={data.name} onClick={Navigating}>Select Your Hotel</button>
            </div>
        </div>
    </div>
  )
}

export default HotelList