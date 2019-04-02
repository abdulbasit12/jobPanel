import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'
var apiUrl = "https://arcane-inlet-51731.herokuapp.com/jobs/edit/"

export class EditJob extends Component {

    constructor() {
        super();
        this.state = {
            jobname: '',
            departmentId: '',
            building: '',
            room: '',
            floor: '',
            instructions: '',
            deadline: '',
            priority: '',
            filestatus: '',
            creatername: '',
            workername: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        var jobId = localStorage.getItem('jobId');
        Axios({
            method: 'get',
            url: apiUrl + jobId,
        })
            .then((res) => {
                if (res.data.message === 'success') {
                    this.setState({
                        jobname: res.data.job.jobname,
                        departmentId: res.data.job.departmentId,
                        building: res.data.job.building,
                        room: res.data.job.room,
                        floor: res.data.job.floor,
                        instructions: res.data.job.instructions,
                        deadline: res.data.job.deadline,
                        priority: res.data.job.priority,
                        filestatus: res.data.job.filestatus,
                        creatername: res.data.job.creatername,
                        workername: res.data.job.workername,
                    })
                }
            })
    }

    udpateJob(e) {
        e.preventDefault();
        var jobId = localStorage.getItem('jobId');
        var data = {
            "jobname": this.state.jobname,
            "departmentId": this.state.departmentId,
            "building": this.state.building,
            "room": this.state.room,
            "floor": this.state.floor,
            "instructions": this.state.instructions,
            "deadline": this.state.deadline,
            "priority": this.state.priority,
            "filestatus": this.state.filestatus,
            "creatername": this.state.creatername,
            "workername": this.state.workername,
        }
        Axios({
            method: 'post',
            url: apiUrl + jobId,
            data: data
        })
        .then((res) => {
            if(res.data.message === 'success'){
                window.location.href = '/job/list'
            }
        })
    }

    render() {
        return (
            <div className="mainContent">
                <div className="pageBar">
                    <i className="fas fa-globe-europe"></i>
                    <div>
                        <h5>Job</h5>
                        <small>Edit Job</small>
                    </div>
                </div>
                <div className="contentBody">
                    <div className="row">
                        <div className="col-md-12 addForm">
                            <div className="card">
                                <div className="card-title"><Link to="/job/list"><button className="btn btn-primary"><i className="fa fa-list"></i>Jobs List</button></Link></div>
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Job Name</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="jobname" value={this.state.jobname} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Department ID</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="departmentId" value={this.state.departmentId} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Building</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="building" value={this.state.building} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Room</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="room" value={this.state.room} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Floor</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="floor" value={this.state.floor} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Instructions</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="instructions" value={this.state.instructions} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Deadline</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="deadline" value={this.state.deadline} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Priority</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="priority" value={this.state.priority} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">File Status</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="filestatus" value={this.state.filestatus} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Creater Name</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="creatername" value={this.state.creatername} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Worker Name</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="workername" value={this.state.workername} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="offset-md-2"></div>
                                        <div className="col-md-6 action">
                                            <button className="btn btn-reset">Reset</button>
                                            <button className="btn btn-success" onClick={this.udpateJob.bind(this)}>Save</button>
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

export default EditJob
