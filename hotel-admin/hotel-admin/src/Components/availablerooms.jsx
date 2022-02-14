import React, { useState, useEffect } from 'react';
import './Styles.css'
import profilepicture from '../images/male.png'
import { Link } from 'react-router-dom';
import Modal from "@material-ui/core/Modal";
import RoomData from './service/rooms'
import bed from '../images/room2.png'
import FileBase64 from 'react-file-base64'

const Rooms = () => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(null)
    const [image, setImage] = useState([])
    const [name, setName] = useState()
    const [Bedroom,setBedroom] = useState()
    const [lounge,setLounge] = useState()
    const [pool,setpool] = useState()
    const [text, setText] = useState()
    const [disabled, setDisplay] = useState(true)
    const [hotelrooms,setGuestList] = useState([])
    const [roomId,setId] = useState()
    const [province,setProvince] = useState()
    const [city,setCity] = useState()

    const retrieveGuest = (e)=>{
        RoomData.getAllRooms()
        .then((res)=>{
            console.log(res.data)
            setGuestList(res.data.hotelrooms)
        })
    }
    useEffect(()=>{
        retrieveGuest()
    },[])
 
    const Unavailable = (e)=>{
        console.log('roomId')
        RoomData.update(e, {status: true}).then(res=>{
            console.log('done')
        }).catch(err => console.log(err))
    }
    const renderItem = ({item,index}) =>{
        return(
            <>
                <div style={[
                    styles.item,{backgroundColor : data.status === true? "red" :"none"}
                ]}>
                </div>
            </>
        )
    }

    const handleOpen = () => {
        setOpen(!open)
    }
    const close = ()=>{
        setOpen(false)
    }  
    async  function addRoom(e){
        e.preventDefault()
        const newRoom = {name,text,roomId,image,province,city,lounge,pool}
        console.log(newRoom)
       RoomData.createRoom(newRoom)
        .then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })
    }
    const deleteHotelRoom = ()=>{
        RoomData.deleteRoom(roomId)
        .then((res)=>{
            console.log(res.data)
        })
    }
       return (
        <>
            <div className='GuestContainer'>
                <div className='link'>
                    <h1>
                        Montello
                    </h1>

                    <div className='dropdown' style={{ height: 45, color: '#519c84', alignContent: 'center', textAlign: 'center', paddingTop: '4%' }}>
                        Hotel @ Hatfield
                    </div>
                    <h2 className='subheading'>Reservations</h2>
                    <div className='reserv'>
                    <Link to='/guestlist'> <p> Guests</p></Link>
                    <Link to='/status'>  <p> Check In</p></Link>
                    </div>
                    <h2>Management</h2>
                    <div className='reserv'>
                    <p> Settings </p>
                    <p style={{ color: '#64D3BF' }}> Rooms </p>
                    </div>
                    <div className='user'>
                        <div className='profilepicture'>
                            <img src={profilepicture} alt={'admin'} ></img>
                        </div>

                        <div className='username'>
                            <h3>Richie Milliem</h3>
                        </div>
                    </div>
                </div>
                <div className='guests'>
                    <div className='header'>
                        <div className='input-icons'>
                            <i className='fa fa-search fa-2x' style={{ padding: '2.5%' }}></i>
                            <input type='text' name='search' placeholder='Search Rooms' className='search-input' />
                        </div>
                        <div className='alarm'>
                            <button type='submit' onClick={handleOpen}>Add New Room</button>
                        </div>
                    </div>
                    <div className='guestlist'>
                        <div className='icon-home'>
                            <i className='fa fa-bed' style={{ marginTop: 4, marginLeft: -3, color: '#5bad9b' }}></i>
                            <p>/Rooms</p>
                        </div>
                        <div className='hotel'>
                            <h2>Hotel Rooms</h2>
                            <p>Hotel @ Hatfield</p>
                        </div>
                        <div className='list'>
                            {
                               hotelrooms.map(data =>
                                    <li key={data._id}>
                                        <img src={data.image.image} alt={data.name} style={{width:144,height:94,borderRadius:10}}/>           
                                        <button type='submit' style={{ height: 40, width: 144, marginLeft: '35%' }} onClick={()=>Unavailable()}>Available</button>
                                        <button type='submit' style={{ height: 40, width: 144 }} onClick={deleteHotelRoom}>Not Available</button>
                                    </li>    
                                )
                            }

                        </div>

                    </div>
                    <div className='Container'>
                        <Modal
                            open={open}
                            onClose={close}
                            style={{
                                position: 'absolute',
                                width: '40%',
                                padding:'2%',
                                margin: 'auto',
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div className='ModalContainer'>
                                <form className='Add' onSubmit={addRoom}>
                                    <h2 style={{ marginLeft: '20%' }}>Add Hotel Room</h2>
                                    <div className='hotel-input-icons'>
                                        <i className='fa fa-bed fa-2x'></i>
                                        <input type='text' placeholder='Type Of Room'
                                            className='input-field'
                                            value={name}
                                            onChange={(e)=>setName(e.target.value)}
                                        />
                                        <i className='fa fa-address-card fa-2x'></i>
                                         <input type='text' placeholder='About Room'
                                            className='input-field'
                                            value={text}
                                            onChange={(e)=>setText(e.target.value)}
                                        />
                                        <i className='fa fa-address-card fa-2x'></i>
                                         <input type='text' placeholder='Room No.'
                                            className='input-field'
                                            value={roomId}
                                            onChange={(e)=>setId(e.target.value)}
                                        />
                                          <i className='fa fa-map-marker fa-2x'></i>
                                         <input type='text' placeholder=' Enter Province'
                                            className='input-field'
                                            value={province}
                                            onChange={(e)=>setProvince(e.target.value)}
                                        />
                                        <FileBase64
                                        type="file"
                                        multiple={false}
                                        onDone={({base64})=>setImage({image:base64})}
                                        />
                                         <FileBase64
                                        type="file"
                                        multiple={false}
                                        onDone={({base64})=>setLounge({lounge:base64})}
                                        />
                                         <FileBase64
                                        type="file"
                                        multiple={false}
                                        onDone={({base64})=>setpool({pool:base64})}
                                        />
                                    </div>
                                       

                                    <button type='button' className='addnew' style={{ width: 170, marginLeft: '55%', marginTop: '2%' }} onClick={addRoom} >Add New Room</button>
                                </form>
                          
                            </div>
                    
                </Modal>
            </div>
        </div>
        </div >
    </>
    )
}
export default Rooms
