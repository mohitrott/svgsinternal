import React, { Component } from 'react';
import './LoginForm.css'
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class LoginForm extends Component {
    constructor(props){
        super();
        this.state={
            username:'',
            password:'',
            error:''
        }
    }

    onChangeHandler =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
    }

    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.username=='employee' && this.state.password=='pass'){
          window.location.pathname='/employeeDashboard'
        }
        else if(this.state.username=='admin' && this.state.password=='pass'){
          window.location.pathname='/adminDashboard'
        }
        else{
          this.setState({error:'invalid username or password!'})
        }
    }
    render() {
        return (
            <div className='loginContainer'>
            <div className='errorMsg'>{this.state.error}</div>
      <form className='loginForm' onSubmit={this.onSubmit}>
        <label>
          <p>Username</p>
          <input type="text" value={this.state.username} onChange={this.onChangeHandler} name='username'  />
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={this.state.password} onChange={this.onChangeHandler} name='password' />
        </label>
        <div>
          <button type="submit" onClick={this.onSubmit}>Submit</button>
        </div>
      </form>
            </div>
        )
    }
}
