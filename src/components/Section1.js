import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Axios from 'axios';
var apiUrl = "https://arcane-inlet-51731.herokuapp.com/users/logout"

class Header extends Component {

    logout = (e) => {
        e.preventDefault();
        Axios({
            method: 'get',
            url: apiUrl,
        })
        .then((res) => {
            if(res.data.message === 'success'){
                this.props.history.push('/');
            }
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    render() {
        if (window.location.pathname === '/') return null;
        return (
            <nav className="navbar navbar-default header">
                <div className="headBody">
                    <div className="menuToggle">
                        <div className="logoname">
                            <span className="logo"><strong>Admin</strong>LTE</span>
                            <span className="logoMini"><strong>A</strong>LT</span>
                        </div>
                    </div>
                    <div className="headerContent">
                        <span className="menuToggler">
                            <i className="fas fa-ellipsis-v"></i>
                            <i className="fas fa-ellipsis-v"></i>
                            <i className="fas fa-ellipsis-v"></i>
                        </span>
                        <div className="notification">
                            <ul>
                                {/* <div className="dropParent">
                                <li id="dropdownMessageMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-envelope"><span className="badge badge-success">4</span></i>
                                </li>
                                <div id="message" className="dropdown-menu messages animated" aria-labelledby="dropdownMessageMenu">
                                    <p>You have four messages</p>
                                    <ul className="menu">
                                        <li>
                                            <img src={userImg} alt="" />
                                            <label>
                                                <h5>Support Team
                                                        <small>1min</small>
                                                </h5>
                                                <small>Why not buy a new awesome theme?</small>
                                            </label>
                                        </li>
                                    </ul>
                                    <p>See all messages</p>
                                </div>
                            </div>
                            <div className="dropParent">
                                <li id="dropdownNotifyMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-bell"><span className="badge badge-warning">10</span></i>
                                </li>
                                <div id="notify" className="dropdown-menu notifications animated" aria-labelledby="dropdownNotifyMenu">
                                    <p>You have 10 notifications</p>
                                    <ul className="menu">
                                        <li>
                                            <i className="fa fa-users text-primary"></i>
                                            <h5>5 new members added</h5>
                                        </li>
                                    </ul>
                                    <p>View all</p>
                                </div>
                            </div>
                            <li>
                                <i className="fas fa-flag"><span className="badge badge-danger">9</span></i>
                            </li> */}
                                <div className="dropParent">
                                    <li id="dropdownProfileMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-cog"></i>
                                    </li>
                                    <div className="dropdown-menu userProfile animated" aria-labelledby="dropdownProfileMenu">
                                        <ul>
                                            <li><i className="fa fa-user"></i><Link to="/profile/user">Profile</Link></li>
                                            <li onClick={this.logout.bind(this)}><i className="fa fa-key"></i>Logout</li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Header);
