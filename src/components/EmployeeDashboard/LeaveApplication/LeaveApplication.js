import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import './LeaveApplication.css';
import axios from 'axios';

export default class LeaveApplication extends Component {
    constructor(props){
        super(props);
        this.state={
           firstName: '',
           lastName: '',
           empId: '',   
           email: '',
           position: '',
           manager: '',
           leaveStart: '',
           leaveEnd: '',
           leaveType: '',
           comments: '' 
        }
    }
    
    submit=(event)=> {    
        event.preventDefault();
        axios.post('http://localhost:3004/leaveData',this.state)
        .catch((error)=>{
            
        })

    } 

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        return (
            <div className='leaveContainer'>
                <Form onSubmit={this.submit}>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control type="text" placeholder="First" name='firstName' onChange ={this.onChange}/>
                        </Col>
                        <Col sm={5}>
                            <Form.Control type="text" placeholder="Last" name='lastName' onChange ={this.onChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="employeeId">
                        <Form.Label column sm={2}>
                            Employee ID
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Employee ID" name='empId' onChange ={this.onChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Email" name='email' onChange ={this.onChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Position
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Position" name='position' onChange ={this.onChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Manager
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Manager" name='manager' onChange ={this.onChange}/>
                        </Col>
                    </Form.Group>
                    <h3>Details of Leave</h3>
                    <hr></hr>
                    {/* <fieldset> */}
                    <Row className="mb-2">
                        <Form.Group as={Col} controlId="formHorizontalPassword">
                            <Form.Label column sm={5}>
                                Leave Start
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="date" name='leaveStart' onChange ={this.onChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formHorizontalPassword">
                            <Form.Label column sm={5}>
                                Leave End
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="date" name='leaveEnd' onChange ={this.onChange}/>
                            </Col>
                        </Form.Group>
                    </Row>
                    {/* </fieldset> */}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Leave Type
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Vacation"
                                name="leaveType"
                                id="formHorizontalRadios1"
                                onChange ={this.onChange}
                                value='Vacation'
                            />
                            <Form.Check
                                type="radio"
                                label="Sick"
                                name="leaveType"
                                id="formHorizontalRadios2"
                                onChange ={this.onChange}
                                value='Sick'
                            />
                            <Form.Check
                                type="radio"
                                label="Other"
                                name="leaveType"
                                id="formHorizontalRadios3"
                                onChange ={this.onChange}
                                value='Other'
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comments</Form.Label>
                        <Form.Control as="textarea" rows={3} name='comments' onChange ={this.onChange}/>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant="success" onClick={this.submit}>Request Leave</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
