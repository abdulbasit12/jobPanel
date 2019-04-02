import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
var apiUrl = "https://arcane-inlet-51731.herokuapp.com/users/register"

export class AddUser extends Component {

    constructor(){
        super();
        this.state = {
            name : '',
            email : '',
            username : '',
            gender : '',
            phone : '',
            role : '',
            profession : '',
            password : '',
            password2: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    postUser  = (e) => {
        e.preventDefault();
        var data = {
            name : this.state.name,
            email : this.state.email,
            username : this.state.username,
            gender : this.state.gender,
            phone : this.state.phone,
            role : this.state.role,
            profession : this.state.profession,
            password : this.state.password,
            password2: this.state.password2
        }
        console.log(data)
        axios({
            method: 'post',
            url: apiUrl,
            data: data
        })
        .then((res) => {
            console.log(res)
        })
    }

    render() {
        return (
            <div className="mainContent">
                <div className="pageBar">
                    <i className="fas fa-globe-europe"></i>
                    <div>
                        <h5>User</h5>
                        <small>Add User</small>
                    </div>
                </div>
                <div className="contentBody">
                    <div className="row">
                        <div className="col-md-12 addForm">
                            <div className="card">
                                <div className="card-title"><Link to="/user/list"><button className="btn btn-primary"><i className="fa fa-list"></i>User List</button></Link></div>
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Name</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="name" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Email</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="email" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">User Name</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="username" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Gender</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="gender" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Phone</label>
                                        <div className="col-6">
                                            <input className="form-control" type="number" name="phone" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Department</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="profession" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Role</label>
                                        <div className="col-6">
                                            <select className="form-control" name="role" onChange={this.handleChange} >
                                                <option value="Department Admin">Department Admin</option>
                                                <option value="User">User</option>
                                                <option value="Worker">Worker</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Password</label>
                                        <div className="col-6">
                                            <input className="form-control" type="password" name="password" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Confirm Password</label>
                                        <div className="col-6">
                                            <input className="form-control" type="password" name="password2" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="offset-md-2"></div>
                                        <div className="col-md-6 action">
                                            <button className="btn btn-reset">Reset</button>
                                            <button className="btn btn-success" onClick={this.postUser.bind()}>Save</button>
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

export default AddUser
