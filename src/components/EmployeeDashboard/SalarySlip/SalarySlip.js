import React, { Component } from 'react';
import axios from 'axios';
import './SalarySlip.css';
import GoogleDocsViewer from 'react-google-docs-viewer';

export default class SalarySlip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3004/salarySlip')
            .then((salarySlip) => {
                console.log(salarySlip.data)
                this.setState({
                    data: salarySlip.data
                })
            })
    }

    render() {
        return ( 
            <div>
                <GoogleDocsViewer
                    width="400px"
                    height="600px"
                    fileUrl={this.state.data.salarySlip}
                />

            </div>
        )
    }
}
