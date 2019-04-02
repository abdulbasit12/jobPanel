import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
var userUrl = "https://arcane-inlet-51731.herokuapp.com/users/edit/"

export class UserEdit extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            gender: '',
            phone: '',

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        var userId = localStorage.getItem('userId')
        Axios({
            method: 'get',
            url: userUrl + userId
        })
            .then((res) => {
                if (res.data.message === 'success') {
                    this.setState({
                        'username': res.data.user.username,
                        'role': res.data.user.role,
                        'name': res.data.user.name,
                        'email': res.data.user.email,
                        'gender': res.data.user.gender,
                        'phone': res.data.user.phone,
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
            "gender": this.state.gender,
            "phone": this.state.phone,
        }
        Axios({
            method: 'post',
            url: userUrl + userId,
            data: data
        })
        .then((res) => {
            if(res.data.message === 'success'){
                window.location.href = '/profile/user'
            } else {
                console.log(res)
            }
        })
    }

    render() {
        return (
            <div className="mainContent">
                <div className="pageBar">
                    <i className="fas fa-globe-europe"></i>
                    <div>
                        <h5>Profile</h5>
                        <small>Edit Profile</small>
                    </div>
                </div>
                <div className="contentBody">
                    <div className="row">
                        <div className="col-md-12 addForm">
                            <div className="card">
                                <div className="card-title"><Link to="/profile/user"><button className="btn btn-primary"><i className="fa fa-list"></i>Profile</button></Link></div>
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Name</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Email</label>
                                        <div className="col-6">
                                            <input className="form-control" type="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Gender</label>
                                        <div className="col-6">
                                            <select className="form-control" value={this.state.gender} onChange={this.handleChange.bind(this)}>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Phone</label>
                                        <div className="col-6">
                                            <input className="form-control" type="number" value={this.state.phone} onChange={this.handleChange.bind(this)} />
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

export default UserEdit
