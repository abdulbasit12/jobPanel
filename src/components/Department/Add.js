import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
var apiUrl = "https://arcane-inlet-51731.herokuapp.com/departments/add"

export class AddDepartment extends Component {

    constructor(){
        super();
        this.state = {
            deptId : '',
            deptname : ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    postDept = (e) => {
        e.preventDefault();
        var data = {
            "deptId" : this.state.deptId,
            "deptname" : this.state.deptname
        }
        axios({
            method: 'post',
            url: apiUrl,
            data: data
        })
        .then((res) => {
            if(res.data.message === 'success'){
                this.props.history.push('/department/list')
            } else{
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
                        <h5>Department</h5>
                        <small>Add Department</small>
                    </div>
                </div>
                <div className="contentBody">
                    <div className="row">
                        <div className="col-md-12 addForm">
                            <div className="card">
                                <div className="card-title"><Link to="/department/list"><button className="btn btn-primary"><i className="fa fa-list"></i>Department List</button></Link></div>
                                <div className="card-body">
                                    <form id="deptPost">
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Department ID</label>
                                            <div className="col-6">
                                                <input className="form-control" type="number" name="deptId" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Department Name</label>
                                            <div className="col-6">
                                                <input className="form-control" type="text" name="deptname" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="offset-md-2"></div>
                                            <div className="col-md-6 action">
                                                <button className="btn btn-reset">Reset</button>
                                                <button className="btn btn-success" onClick={this.postDept.bind(this)} >Save</button>
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

export default AddDepartment
