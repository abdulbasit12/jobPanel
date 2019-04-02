import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';
var apiUrl = "https://arcane-inlet-51731.herokuapp.com/departments/edit/"

export class Edit extends Component {

    constructor(){
        super();
        this.state = {
            deptId : '',
            deptname : '' 
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    componentDidMount(){
        var deptId = localStorage.getItem('deptId');
        Axios({
            method: 'get',
            url: apiUrl + deptId
        })
        .then((res) => {
            if(res.data.message === 'success'){
                this.setState({
                    deptId : res.data.dept.deptId,
                    deptname : res.data.dept.deptname
                })
            }  
        })
    }

    UpdateDept(e){
        e.preventDefault();
        var deptId = localStorage.getItem('deptId');
        var data = {
            "deptId" : this.state.deptId,
            "deptname" : this.state.deptname
        }
        Axios({
            method: 'post',
            url: apiUrl + deptId,
            data: data
        })
        .then((res) => {
            if(res.data.message === 'success'){
                window.location.href = '/department/list'
            }
        })
    }



    render() {
        return (
            <div className="mainContent">
                <div className="pageBar">
                    <i className="fas fa-globe-europe"></i>
                    <div>
                        <h5>Department</h5>
                        <small>Edit Department</small>
                    </div>
                </div>
                <div className="contentBody">
                    <div className="row">
                        <div className="col-md-12 addForm">
                            <div className="card">
                                <div className="card-title"><Link to="/department/list"><button className="btn btn-primary"><i className="fa fa-list"></i>Department List</button></Link></div>
                                <div className="card-body">
                                <div className="form-group row">
                                        <label className="col-2 col-form-label">Department ID</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="deptId" value={this.state.deptId} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Department Name</label>
                                        <div className="col-6">
                                            <input className="form-control" type="text" name="deptname" value={this.state.deptname} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="offset-md-2"></div>
                                        <div className="col-md-6 action">
                                            <button className="btn btn-reset">Reset</button>
                                            <button className="btn btn-success" onClick={this.UpdateDept.bind(this)}>Save</button>
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

export default Edit
