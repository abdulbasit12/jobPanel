import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
var apiUrl = "https://arcane-inlet-51731.herokuapp.com/users/edit/"

export class EditUser extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            username: '',
            gender: '',
            phone: '',
            profession: '',
            role: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        var userId = localStorage.getItem('userId');
        Axios({
            method: 'get',
            url: apiUrl + userId
        })
            .then((res) => {
                if (res.data.message === 'success') {
                    this.setState({
                        name: res.data.user.name,
                        email: res.data.user.email,
                        username: res.data.user.username,
                        gender: res.data.user.gender,
                        phone: res.data.user.phone,
                        profession: res.data.user.profession,
                        role: res.data.user.role,
                    })
                }
            })

    }

    updateUser = (e) => {
        e.preventDefault();
        var userId = localStorage.getItem('userId');
        var data = {
            "name": this.state.name,
            "email": this.state.email,
            "username": this.state.username,
            "gender": this.state.gender,
            "phone": this.state.phone,
            "profession": this.state.profession,
            "role": this.state.role,
        }
        Axios({
            method: 'post',
            url: apiUrl + userId,
            data: data
        })
        .then((res) => {
            if(res.data.message === 'success'){
                window.location.href = '/user/list'
            }
        })
    }

    render() {
        return (
            <div className="mainContent">
                <div className="pageBar">
                    <i className="fas fa-globe-europe"></i>
                    <div>
                        <h5>User</h5>
                        <small>Edit User</small>
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
                                            <input className="form-control" type="text" value={this.state.name} name="name" onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Email</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" value={this.state.email} name="email" onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">User Name</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" value={this.state.username} name="username" onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Gender</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" value={this.state.gender} name="gender" onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Phone</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" value={this.state.phone} name="phone" onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Profession</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" value={this.state.profession} name="profession" onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="offset-md-2"></div>
                                        <div className="col-md-6 action">
                                            <button className="btn btn-reset">Reset</button>
                                            <button onClick={this.updateUser.bind(this)} className="btn btn-success">Save</button>
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

export default EditUser
