import React, { Component } from 'react';
import axios from 'axios';
import './UserDetail.css';
import EmployeeImage from '../../../assets/images/dummy.jpg'

export default class UserDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            jobTitle:'',
            mobileNumber:'',
            emailAddress:'',
            imageUrl:''
        }
    }
    componentDidMount(){
      axios.get('http://localhost:3004/employees')
      .then((userData)=>{
          this.setState({
            firstName:userData.data[0].firstName,
            lastName:userData.data[0].lastName,
            jobTitle:userData.data[0].jobTitleName,
            mobileNumber:userData.data[0].phoneNumber,
            emailAddress:userData.data[0].emailAddress,
            imageUrl:userData.data[0].imageUrl
          })
      })  
    }
    render() {
        return (
            <div className='userDataContainer'>
                <div className='userData'>
                <div>First Name : {this.state.firstName}</div>
                <div>Last Name : {this.state.lastName}</div>
                <div>Job Title : {this.state.jobTitle}</div>
                <div>Mobile no. : {this.state.mobileNumber}</div>
                <div>Email ID : {this.state.emailAddress}</div>
                </div>
                <div className='userImage'>
                    <img src={this.state.imageUrl} alt='user profile'></img>
                </div>
            </div>
        )
    }
}
