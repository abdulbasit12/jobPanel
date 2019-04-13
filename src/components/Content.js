import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import ReactSvgPieChart from "react-svg-piechart"
var apiUrl = 'https://arcane-inlet-51731.herokuapp.com/'

export class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            users: [],
            depts: [],
            feeds: [],
            pendingJobs: [],
            completedJobs: []
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: apiUrl
        })
            .then((res) => {
                this.setState({
                    jobs: res.data.jobs,
                    users: res.data.user,
                    depts: res.data.dept,
                    feeds: res.data.feed,
                    pendingJobs: res.data.pending,
                    completedJobs: res.data.completed
                })
            })
    }

    render() {
        var jobCount = this.state.jobs.length;
        var userCount = this.state.users.length;
        var deptCount = this.state.depts.length;
        var feedCount = this.state.feeds.length;
        var pendingCount = this.state.pendingJobs.length;
        var completedCount = this.state.completedJobs.length
        const data = [
            { title: pendingCount, value: pendingCount, color: "#e66269" },
            { title: completedCount, value: completedCount, color: "#d8e662" },
        ]
        return (
            <div className="mainContent">
                <div className="pageBar">
                    <i className="fas fa-globe-europe"></i>
                    <div>
                        <h5>Dashboard</h5>
                        <small>Home</small>
                    </div>
                </div>
                <div className="contentBody">
                    <div className="col-md-12 dashlets">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="bords bcolor1">
                                    <div>
                                        <span>
                                            <h6>{jobCount}</h6>
                                            <label>Total Jobs</label>
                                        </span>
                                        <i className="fas fa-briefcase color1"></i>
                                    </div>
                                    <Link to="/job/list">Check all Jobs >></Link>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="bords bcolor2">
                                    <div>
                                        <span>
                                            <h6>{userCount}</h6>
                                            <label>Users</label>
                                        </span>
                                        <i className="fas fa-briefcase color2"></i>
                                    </div>
                                    <Link to="/user/list">View Users >></Link>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="bords bcolor3">
                                    <div>
                                        <span>
                                            <h6>{deptCount}</h6>
                                            <label>Departments</label>
                                        </span>
                                        <i className="fas fa-briefcase color3"></i>
                                    </div>
                                    <Link to="/department/list">Visit Departments >></Link>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="bords bcolor4">
                                    <div>
                                        <span>
                                            <h6>{feedCount}</h6>
                                            <label>Feedbacks</label>
                                        </span>
                                        <i className="fas fa-briefcase color4"></i>
                                    </div>
                                    <Link to="/feedback">Manage Feedbacks >></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 chartsSection">
                        <div className="">
                            <div className="col-md-6 mt-4 pieChart">
                                <h3 className="heading">Jobs Status</h3>
                                <div className="row">
                                    <div className="chart col-md-8">
                                        <ReactSvgPieChart
                                            data={data}
                                            expandOnHover
                                        />
                                    </div>
                                    <div className="col-md-4 chartDefine">
                                        <div>
                                            <span className="pending"></span>
                                            <label>Pending</label>
                                        </div>
                                        <div>
                                            <span className="completed"></span>
                                            <label>Completed</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content
