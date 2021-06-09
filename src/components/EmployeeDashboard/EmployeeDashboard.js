import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import EmployeeDataDisplay from './EmployeeDataDisplay/EmployeeDataDisplay';

function EmployeeDashboard(props) {
    console.log(props.location.pathname)
    return (
        <div>
            <Header heading='Welcome Employee' showLogout='true'/>
            <div className='main_content'>
            <SideBar link1='Holiday List'/>
            <EmployeeDataDisplay data={props.location.pathname}/>
            </div>
            <Footer/>
        </div>
    )
}

export default EmployeeDashboard
