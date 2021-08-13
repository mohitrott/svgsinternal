import React from 'react';
import './SideBar.css';
import {Link} from 'react-router-dom'

function SideBar(props) {
    return (
        <div>
        <div className='sideBarContainer'>
            <ul>
                <li><Link to='/employeeDashboard/holidayList'>{props.link1}</Link></li>
                <li><Link to='/employeeDashboard/timeSheet'>Time Sheet</Link></li>
                <li><Link to='/employeeDashboard/leaveApplication'>Leave Application</Link></li>
                <li><Link to='/employeeDashboard/salarySlip'>Salary Slip</Link></li>
                <li><Link to='#timesheet'>Time Sheet</Link></li>
                <li><Link to='/employeeDashboard/userDetail'>User Detail</Link></li>
            </ul>
        </div>
        </div>
    )
}

export default SideBar
