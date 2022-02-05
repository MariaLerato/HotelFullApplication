import React, { useState, useEffect } from 'react'
import './Styles.css'
import k from '../images/male.png'
import { Link } from 'react-router-dom'
import { GuestListCard } from './GuestListCard'
import BackendInfo from './service/guest'

const SearchGuest = () => {
    const [adminId, setAdmin] = useState()
    const [province, setProvince] = useState()
    const [city, setCity] = useState()
    const [hotelGuest, setGuest] = useState([])
    const [id, setId] = useState()
    const [name,setName] = useState('')

    const retrieveGuest = (e) => {
        BackendInfo.getAll()
            .then((res) => {
                console.log(res.data)
                setGuest(res.data.hotelGuest)
            })
    }
    useEffect(() => {
        retrieveGuest()
    }, [])

    const Search = ()=>{
        return(
            <>
                <div>
                    {
                        hotelGuest.filter(data=>
                            data.province.includes(name).map(action=> (
                                <h1>{action.name}</h1>
                            ))
                            
                            )
                    }
                </div>
            </>
        )
    }

    return (
        <>
            <div className='link'>
                <h1>
                    Montello
                </h1>

                <div className='dropdown' style={{ height: 45, color: '#519c84', alignContent: 'center', textAlign: 'center', paddingTop: '4%' }}>
                    Hotel @ Hatfield
                </div>
                <h2 className='subheading'>Reservations</h2>
                <div className='reserv'>
                <p className='activity2'> Guests</p>
                <Link to='/status'>  <p> Check In</p></Link>
                </div>
              
                <h2>Management</h2>
                <div className='reserv'>
                    <p className='settings'> Settings </p>
                   <Link to='/availablerooms'> <p> Rooms </p></Link>
                </div>
                <div className='user'>
                    <div className='profilepicture'>
                        <img src={k} alt={'admin'} ></img>
                    </div>

                    <div className='username'>
                        <h3>Richie Milliem</h3>
                    </div>
                </div>
            </div>
            <div className='guests'>
                <div className='header'>
                    <div className='input-icons'>
                        <i className='fa fa-search fa-2x' style={{ padding: '1.8%' }}></i>
                        <input type='text' name='search' placeholder='Search Guest' className='search-input' />
                    </div>
                    <div className='alarmNotfication'>
                        <Link to='/notifications'> <i className='fa fa-bell  ' style={{ color: '#256b5e' }} ></i></Link>
                    </div>
                </div>
                <div className='guestlist'>
                    <div className='icon-home'>
                        <i className='fa fa-home' style={{ marginTop: 4, marginLeft: -3, color: '#5bad9b' }}></i>
                        <p>/Guests</p>
                    </div>
                    <div className='hotel'>
                        <h2>Hotel Guests</h2>
                        <p>Hotel @ Hatfield</p>
                    </div>
                    <div className='list'>
                       <Search/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default  SearchGuest