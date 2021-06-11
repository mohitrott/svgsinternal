import React, { Component } from 'react';
import './LoginForm.css'
import { Form, Button, Row, Col } from 'react-bootstrap';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class LoginForm extends Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.username == 'employee' && this.state.password == 'pass') {
      window.location.pathname = '/employeeDashboard'
    }
    else if (this.state.username == 'admin' && this.state.password == 'pass') {
      window.location.pathname = '/adminDashboard'
    }
    else {
      this.setState({ error: 'invalid username or password!' })
    }
  }
  render() {
    return (
      <div className='loginContainer'>
        <div className='errorMsg'>{this.state.error}</div>
        <Form className='loginForm' onSubmit={this.onSubmit}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={5}>
              <h5>Username</h5>
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" value={this.state.username} placeholder="username" onChange={this.onChangeHandler} name='username' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={5}>
              <h5>Password</h5>
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" value={this.state.password} placeholder="password" onChange={this.onChangeHandler} name='password' />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" variant="success" onClick={this.onSubmit}>Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
