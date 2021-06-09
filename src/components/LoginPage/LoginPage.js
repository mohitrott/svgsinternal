import React from 'react';
import './LoginPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm';

export default function LoginPage() {
    return (
        <div className='loginPage'>
        <Header heading='WELCOME TO SVGS LOGIN'/>
        <LoginForm/>
        <Footer/>
        </div>
    )
}
