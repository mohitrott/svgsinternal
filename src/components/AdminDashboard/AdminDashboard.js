import React from 'react'
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
export default function AdminDashboard() {
    return (
        <div>
            <Header heading='Welcome Admin'/>
            <div className='main_content'>
            <SideBar/>
            {/* <EmployeeDataDisplay data={props.location.pathname}/> */}
            </div>
            <Footer/>
        </div>
    )
}
