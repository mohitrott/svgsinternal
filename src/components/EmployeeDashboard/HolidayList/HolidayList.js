import React, { Component } from 'react';
import axios from 'axios';
import './HolidayList.css'
export default class HolidayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3004/holiday')
            .then((holidayList) => {
                this.setState({
                    data: holidayList.data
                })
            })
    }

    renderList = ({ data }) => {
        return data.map((item, index) => {
            return (<tr key={index}>
                <td style={{ textAlign: "center", width: "4%" }}>{index + 1}</td>
                <td style={{ textAlign: "center" }}>{item.festival}</td>
                <td style={{ textAlign: "center" }}>{item.date}</td>
                <td style={{ width: "10%",textAlign: "center" }}>{item.day}</td>
            </tr>)
        })
    }
    render() {
        let holidayTable = <table>
            <thead>
                <tr>
                    <th style={{ textAlign: "center", width: "4%" }}>Seral no.</th>
                    <th style={{ textAlign: "center" }}>Festival</th>
                    <th style={{ textAlign: "center" }}>Date</th>
                    <th style={{ width: "10%",textAlign: "center" }}>day</th>
                </tr>
            </thead>
            <tbody>
                {this.renderList(this.state)}
            </tbody>
        </table>
        return (
            <div className='holiday_list_table'>
                <div className='holiday_display'>
                {holidayTable}
                </div>      
            </div>
        )
    }

}
