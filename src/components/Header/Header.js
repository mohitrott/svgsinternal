import React from 'react';
import './Header.css';
import logo from '../../assets/images/SVGS logo.jpg';
import {Button} from 'react-bootstrap';

function Header(props) {
    // console.log(props)
    // logout=()=>{
    //     window.location.pathname='/'
    // }
    let logoutButton=props.showLogout?<div><Button variant="danger" className='logout' onClick={()=>{window.location.pathname='/'}}>logout</Button></div>:''
    return (
        <div>
            <div className='header-container'>
                <div className='logo'>
                <img src={logo} alt='company logo'/>
                </div>
                <div className='comp-welcome'>
                    <h1>{props.heading}</h1>
                </div>
                {logoutButton}
            </div>
        </div>
    )
}

export default Header
