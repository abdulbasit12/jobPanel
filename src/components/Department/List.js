import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'
import { Link } from 'react-router-dom'
import Axios from 'axios';
var apiUrl = "https://arcane-inlet-51731.herokuapp.com/"


export class ListDepartment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            department: [],
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: apiUrl,
        })
            .then(res => {
                this.setState({
                    department: res.data.dept,
                });
            })
            .catch(error => {
                console.log(error)
            });
    }

    editDept(id, e) {
        localStorage.setItem('deptId' , id)
        var editDeptUrl = "https://arcane-inlet-51731.herokuapp.com/departments/edit/"
        e.preventDefault();
        Axios({
            method: 'get',
            url: editDeptUrl + id,
        })
            .then((res) => {
                if(res.data.message === 'success'){
                    //this.props.history.push('/department/edit');
                    window.location.href = '/department/edit'
                } else {
                    this.props.history.push('/department/list');
                }
            })
    }

    deleteDept(id, e){
        e.preventDefault();
        var deleteDeptUrl = "https://arcane-inlet-51731.herokuapp.com/departments/"
        Axios({
            method: 'delete',
            url: deleteDeptUrl + id
        })
        .then((res) => {
            if(res.data.message === 'success'){
                window.location.reload();
            }
        })
    }




    render() {
        const Columns = [
            {
                Header: 'Department ID',
                sortable: true,
                accessor: 'deptId'
            },
            {
                Header: 'Department Name',
                sortable: true,
                accessor: 'deptname',
            },
            {
                Header: 'Actions',
                sortable: false,
                accessor: '_id',
                Cell: props =>
                    <span>
                        <button onClick={this.editDept.bind(this, props.value)} className="btn btn-edit">
                            <i className="fa fa-edit"></i>
                        </button>
                        <button onClick={this.deleteDept.bind(this, props.value)} className="btn btn-delete">
                            <i className="fa fa-trash"></i>
                        </button>
                    </span>
            },
        ]
        return (
            <div className="mainContent">
                <div className="pageBar">
                    <i className="fas fa-globe-europe"></i>
                    <div>
                        <h5>Department</h5>
                        <small>Department List</small>
                    </div>
                </div>
                <div className="contentBody">
                    <div className="row">
                        <div className="col-md-12 addForm">
                            <div className="card">
                                <div className="card-title">
                                    <Link to="/department/add"><button className="btn btn-success"><i className="fas fa-plus"></i>Add Department</button></Link>
                                </div>
                                <div className="card-body">
                                    <ReactTable
                                        data={this.state.department}
                                        columns={Columns}
                                        defaultPageSize={5}
                                        minRows={5}
                                    />
                                    {/* {this.state.department.map(deptid => (
                                        <ul>
                                            <li>{deptid._id}</li>
                                        </ul>
                                    ))} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListDepartment
