import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
var apiUrl = "https://arcane-inlet-51731.herokuapp.com/jobs/job"

export class Add extends Component {

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
            filestatus: 'Pending',
            creatername: localStorage.getItem('username'),
            workername: '',
            department: [],
            worker: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        var deptUrl = "https://arcane-inlet-51731.herokuapp.com/"
        var userList = "https://arcane-inlet-51731.herokuapp.com/users/userList"
        axios({
            method: 'get',
            url: deptUrl,
        })
            .then(res => {
                this.setState({
                    department: res.data.dept,
                });
            })
            .catch(error => {
                console.log(error)
            });

        axios({
            method: 'get',
            url: userList
        })
        .then((res) => {
            if(res.data.message === 'success'){
                this.setState({
                    worker: res.data.user
                })
            }
            
        })
    }

    postJob(e) {
        e.preventDefault();
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
        axios({
            method: 'post',
            url: apiUrl,
            data: data
        })
            .then((res) => {
                //console.log(res);
                if (res.data.message === 'success') {
                    var clear = document.getElementById('jobPost');
                    clear.reset();
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
                        <small>Add Job</small>
                    </div>
                </div>
                <div className="contentBody">
                    <div className="row">
                        <div className="col-md-12 addForm">
                            <div className="card">
                                <div className="card-title"><Link to="/job/list"><button className="btn btn-primary"><i className="fa fa-list"></i>Jobs List</button></Link></div>
                                <div className="card-body">
                                    <form id="jobPost">
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Job Name</label>
                                            <div className="col-6">
                                                <input className="form-control" type="text" name="jobname" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Department</label>
                                            <div className="col-6">
                                                {/* <input className="form-control" type="String" name="department" onChange={this.handleChange} /> */}
                                                <select className="form-control" name="departmentId" onChange={this.handleChange}>
                                                    {this.state.department.map(dept => (
                                                        <option key={dept._id}>{dept.deptname}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Building</label>
                                            <div className="col-6">
                                                <input className="form-control" type="text" name="building" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Room</label>
                                            <div className="col-6">
                                                <input className="form-control" type="number" name="room" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Floor</label>
                                            <div className="col-6">
                                                <input className="form-control" type="text" name="floor" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Instructions</label>
                                            <div className="col-6">
                                                <input className="form-control" type="text" name="instructions" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Deadline</label>
                                            <div className="col-6">
                                                <input className="form-control" type="date" name="deadline" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Priority</label>
                                            <div className="col-6">
                                                <select className="form-control" name="priority" onChange={this.handleChange}>
                                                    <option hidden>Select Priority</option>
                                                    <option>Low</option>
                                                    <option>Medium</option>
                                                    <option>High</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Status</label>
                                            <div className="col-6">
                                                <input className="form-control" type="text" name="filestatus" value={this.state.filestatus} onChange={this.handleChange} readOnly />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Creater Name</label>
                                            <div className="col-6">
                                                <input className="form-control" type="text" value={this.state.creatername} name="creatername" onChange={this.handleChange} readOnly />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Worker Name</label>
                                            <div className="col-6">
                                                {/* <input className="form-control" type="text" name="workername" onChange={this.handleChange} /> */}
                                                <select className="form-control" name="workername" onChange={this.handleChange}>
                                                    {this.state.worker.map(user => (
                                                        <option key={user._id}>{user.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="offset-md-2"></div>
                                            <div className="col-md-6 action">
                                                <button className="btn btn-reset">Reset</button>
                                                <button className="btn btn-success" onClick={this.postJob.bind(this)}>Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add
