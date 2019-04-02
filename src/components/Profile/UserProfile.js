import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userImg from '../../images/user.jpg'
import Axios from 'axios'
var userUrl = "http://localhost:5000/users/edit/"

export class UserProfile extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            username: '',
            role: '',
            email: '',
            gender: '',
            phone: '',

        }
    }
    componentDidMount() {
        var userId = localStorage.getItem('userId')
        Axios({
            method: 'get',
            url: userUrl + userId
        })
            .then((res) => {
                console.log(res)
                if (res.data.message === 'success') {
                    this.setState({
                        'username': res.data.user.username,
                        'role': res.data.user.role,
                        'name': res.data.user.name,
                        'email': res.data.user.email,
                        'gender': res.data.user.gender,
                        'phone' : res.data.user.phone,
                    })
                }
            })
    }

    editUser = (e) => {
        var userId = localStorage.getItem('userId')
        e.preventDefault();
        var editUserUrl = "http://localhost:5000/users/edit/";
        Axios({
            method: 'get',
            url: editUserUrl + userId,
        })
        .then((res) => {
            //console.log(res);
            if(res.data.message === 'success'){
                window.location.href = '/profile/edit'
            } else {
                this.props.history.push('/profile/user')
            }
        })
    }

    

    render() {
        var username = localStorage.setItem('username', this.state.name);
        return (
            <div className="mainContent">
                <div className="pageBar">
                    <i className="fas fa-globe-europe"></i>
                    <div>
                        <h5>Profile</h5>
                        <small>User Profile</small>
                    </div>
                </div>
                <div className="contentBody">
                    <div className="row">
                        <div className="col-md-12 addForm">
                            <div className="card">
                                {/* <div className="card-title"><button onClick={this.editUser.bind(this)} className="btn btn-primary"><i className="fa fa-edit"></i>Edit Profile</button></div> */}
                                <div className="card-body profile">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={userImg} alt="" />
                                            <h6>{this.state.name}({this.state.role})</h6>
                                        </div>
                                        <div className="col-md-8">
                                            <ul>
                                                <li>
                                                    <label>Email</label>
                                                    <span>{this.state.email}</span>
                                                </li>
                                                <li>
                                                    <label>User Name</label>
                                                    <span>{this.state.username}</span>
                                                </li>
                                                <li>
                                                    <label>Gender</label>
                                                    <span>{this.state.gender}</span>
                                                </li>
                                                <li>
                                                    <label>Phone</label>
                                                    <span>{this.state.phone}</span>
                                                </li>
                                            </ul>
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

export default UserProfile
