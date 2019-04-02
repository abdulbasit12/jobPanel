import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
var apiUrl = "https://arcane-inlet-51731.herokuapp.com/users/login"

export class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            role: '',
            error: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    // handleSubmit(event) {
    //     console.log(event.target.value)
    //     event.preventDefault();
    // }

    login(e) {
        e.preventDefault();
        var data = {
            "username": this.state.username,
            "password": this.state.password,
            "role": this.state.role
        }
        var error = document.getElementById('err');
        if (this.state.username === '' || this.state.password === '' || this.state.role === '') {
            this.setState({
                error: 'Please fill login fields carefully!'
            })
            error.classList.add('errorMsg');
        } else {
            axios({
                method: 'post',
                url: apiUrl,
                data: data
            })
                .catch((error) => {
                    this.setState({
                        error: 'Login Failed! Please try again'
                    })
                })
                .then((res) => {
                    //console.log(res.data.role +'-'+this.state.role)
                    localStorage.setItem('userId', res.data.userId)
                    if (res.data.message === 'success' && res.data.role === this.state.role) {
                        window.location.href = '/dashboard';
                    } else {
                        this.setState({
                            error: 'Invalid User Name or Password or Role',
                        })
                        error.classList.add('errorMsg');
                    }
                })
        }
    }


    render() {
        return (
            <div className="mainContent">
                <div className="login">
                    <div className="loginPanel">
                        <div className="loginHeader">
                            <i className="fas fa-user-lock"></i>
                            <span>
                                <h5>Brand Name</h5>
                                <small>Please Login</small>
                            </span>
                        </div>
                        <form id="loginform">
                            <div className="loginBody">
                                <div className="form-group">
                                    <label>User Name:</label>
                                    <input type="text" className="form-control" name="username" onChange={this.handleChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="password" className="form-control" name="password" onChange={this.handleChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label>User Role:</label>
                                    <select name="role" className="form-control" onChange={this.handleChange.bind(this)}>
                                        <option hidden>Select Role</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Dept_Admin">Department Admin</option>
                                    </select>
                                </div>
                            </div>
                            <div className="loginFooter">
                                <button onClick={this.login.bind(this)}>Login</button>
                            </div>
                            <div id="err">{this.state.error}</div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)
