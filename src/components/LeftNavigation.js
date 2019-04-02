import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userImg from '../images/user.jpg'
import Axios from 'axios';
var userUrl = "http://localhost:5000/users/edit/"


export class LeftNavigation extends Component {

    NavBarLink = props => {
        return <Link {...props} activeClassName="active" />
    }

    constructor(){
        super();
        this.state = {
            name : '',
            role : ''
        }
    }

    componentDidMount(){
        var userId = localStorage.getItem('userId')
        Axios({
            method: 'get',
            url: userUrl + userId
        })
        .then((res) => {
            if(res.data.message === 'success'){
                this.setState({
                    'name' : res.data.user.name,
                    'role' : res.data.user.role
                })
            }
        })
    }

    render() {
        if (window.location.pathname === '/') return null;
        return (
            <div className="leftNavigation">
                <div className="user">
                    <img src={userImg} alt="" />
                    <div className="detail">
                        <label>{this.state.name}</label>
                        <label className="role"><i className="fas fa-dot-circle"></i><small>{this.state.role}</small></label>
                    </div>
                </div>
                <ul className="navigationlLinks">
                    <li>
                        <span>
                            <label>
                                <i className="fas fa-sitemap"></i>
                                <b>Department</b>
                            </label>
                            <i className="fa fa-angle-left"></i>
                        </span>
                        <ul>
                            <div className="mini-sidebar">Department
                                <i className="fa fa-angle-down"></i>
                            </div>
                            <li><NavLink to="/department/add">Add Department</NavLink></li>
                            <li><NavLink to="/department/list">Department list</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <span>
                            <label>
                                <i className="fas fa-briefcase"></i>
                                <b>Jobs</b>
                            </label>
                            <i className="fa fa-angle-left"></i>
                        </span>
                        <ul>
                            <div className="mini-sidebar">Jobs</div>
                            <li><NavLink to="/job/add">Add Job</NavLink></li>
                            <li><NavLink to="/job/list">Job List</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <span>
                            <label><i className="fas fa-users"></i><b>Users</b></label>
                            <i className="fa fa-angle-left"></i>
                        </span>
                        <ul>
                            <div className="mini-sidebar">Users</div>
                            <li><NavLink to="/user/add">Add User</NavLink></li>
                            <li><NavLink to="/user/list">User List</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/feedback">
                            <span>
                                <label><i className="far fa-comment-alt"></i><b>Feedback</b></label>
                            </span>
                        </NavLink>
                        <div className="mini-sidebar">Feedback</div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LeftNavigation
