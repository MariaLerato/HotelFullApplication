import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Rooms from "./availablerooms";
import BookingHistory from "./bookings";
import Guests from "./guestlist";
import Login from "./login";
import SearchGuest from "./newroom";

import Notifications from "./notifications";
import Splash from "./splash";
import Status from "./status";

const Menu = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path={'/login'} element={<Login/>}/>
                    <Route exact path={'/guestlist'} element={<Guests/>}/>
                    <Route exact path={'/availablerooms'} element={<Rooms/>}/>
                    <Route exact path={'/status'} element={<Status/>}/>
                    <Route exact path={'/notifications'} element={<Notifications/>}/>
                    <Route exact path={'/newroom'} element={<SearchGuest/>}/>
                    {/* <Route exact path={'/message'} element={<MessageAlert/>}/> */}
                    <Route exact path={'/'} element={<Splash/>}/>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Menu