import React from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Dropdown from 'react-bootstrap/Dropdown'

const Login = ()=>{
    return(
        <div className='loginContainer'>
            <div className='link'>
                <h1>
                    Montello
                </h1>

                <div className='dropdown' style={{height:45,color:'#519c84',alignContent:'center',textAlign:'center',paddingTop:'4%'}}>
                    Hotel Name
                </div>
                <h2>Reservations</h2>
                <h2>Management</h2>
                    
                    <div className='user'>
                        <div className='profile'>
                            <i className='fa fa-user fa-3x' ></i>
                        </div>

                        <div className='username'>
                            <h3>Admin Name</h3>
                        </div>
                    </div>
            </div>
            <div className='content'>
                <div className='heading'>
                    <h1>Welcome Admin</h1>
                </div>
                <div className='log' style={{justifyContent:'center',alignContent:'center',marginTop:8,marginLeft:'38%'}}>
                    <h2>E-mail</h2>
                   <div className='input-icons'>
                   <i className='fa fa-envelope fa-2x'></i>
                    <input type='email' placeholder='Hotel Email Address'
                    className='input-field'
                    />
                   </div>
                    <h2>Password</h2>
                    <div className='input-icons'>
                   <i className='fa fa-lock fa-2x'></i>
                    <input type='password' placeholder='Ref. Number'
                    className='input-field'
                    />
                    <i className='fa fa-eye fa-2x' style={{marginLeft:'-3%'}}></i>
                   </div>
                    <Link to='/guestlist'>  <button type='submit' name='submit' className='logbutton'>Submit</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Login

