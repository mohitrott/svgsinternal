import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import './LeaveApplication.css';
export default class LeaveApplication extends Component {
    render() {
        return (
            <div className='leaveContainer'>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control type="text" placeholder="First" />
                        </Col>
                        <Col sm={5}>
                            <Form.Control type="text" placeholder="Last" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Employee ID
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Employee ID" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Position
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Position" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Manager
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Manager" />
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
                                <Form.Control type="date" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formHorizontalPassword">
                            <Form.Label column sm={5}>
                                Leave End
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="date" />
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
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="Sick"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Other"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comments</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant="success">Request Leave</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
