import React, { Component } from 'react';
import UserDetail from '../UserDetail/UserDetail';
import HolidayList from '../HolidayList/HolidayList';
import TimeSheet from '../TimeSheet/TimeSheet';
import LeaveApplication from '../LeaveApplication/LeaveApplication';

export default class EmployeeDataDisplay extends Component {
    constructor(props){
        super(props)
        this.state={
            isUser:false,
            isHoliday:false
        }
    }
     showData=()=>{
        switch (this.props.data) {
            case '/employeeDashboard/userDetail':
                 return <UserDetail/> 
                break;
            case '/employeeDashboard/holidayList':
                return <HolidayList/>
            case '/employeeDashboard/timeSheet':
                return <TimeSheet/>
            case  '/employeeDashboard/leaveApplication':
                return <LeaveApplication/>   
            default:
                break;
        }
     }
    render() {
      let displayComponent= this.showData();
        return (
            <div>
               {displayComponent} 
            </div>
        )
    }
}
