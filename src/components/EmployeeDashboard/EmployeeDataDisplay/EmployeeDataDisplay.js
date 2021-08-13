import React, { Component } from 'react';
import UserDetail from '../UserDetail/UserDetail';
import HolidayList from '../HolidayList/HolidayList';
import TimeSheet from '../TimeSheet/TimeSheet';
import LeaveApplication from '../LeaveApplication/LeaveApplication';
import SalarySlip from '../SalarySlip/SalarySlip';

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
                break;
            case '/employeeDashboard/timeSheet':
                return <TimeSheet/>
                break;
            case  '/employeeDashboard/leaveApplication':
                return <LeaveApplication/> 
                break;
            case  '/employeeDashboard/salarySlip':
                return <SalarySlip/> 
                break;        
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
