import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'
import { Link } from 'react-router-dom'
import Axios from 'axios';
var apiUrl = "https://arcane-inlet-51731.herokuapp.com/users/userList"

export class ListUser extends Component {

    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: apiUrl
        })
            .then((res) => {
                if (res.data.message === 'success') {
                    this.setState({
                        users: res.data.user
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    editUser = (id, e) => {
        localStorage.setItem('userId' , id)
        console.log(id);
        e.preventDefault();
        var editUserUrl = "https://arcane-inlet-51731.herokuapp.com/users/edit/";
        Axios({
            method: 'get',
            url: editUserUrl + id,
        })
        .then((res) => {
            //console.log(res);
            if(res.data.message === 'success'){
                window.location.href = '/user/edit'
            } else {
                this.props.history.push('/user/list')
            }
        })
    }

    deleteUser = (id, e) => {
        e.preventDefault();
        var deleteUrl = "https://arcane-inlet-51731.herokuapp.com/users/"
        Axios({
            method: 'delete',
            url: deleteUrl + id
        })
        .then((res) => {
            if(res.data.message === 'success'){
                window.location.reload()
            }
        })
    }

    render() {
        const Columns = [
            {
                Header: 'Name',
                sortable: true,
                accessor: 'name'
            },
            {
                Header: 'Email',
                sortable: true,
                accessor: 'email',
            },
            {
                Header: 'User Name',
                sortable: true,
                accessor: 'username',
            },
            {
                Header: 'Gender',
                sortable: true,
                accessor: 'gender',
            },
            {
                Header: 'Phone',
                sortable: true,
                accessor: 'phone',
            },
            {
                Header: 'Profession',
                sortable: true,
                accessor: 'profession',
            },
            {
                Header: 'Actions',
                sortable: false,
                accessor: '_id',
                Cell: props =>
                    <span>
                        <button onClick={this.editUser.bind(this, props.value)} className="btn btn-edit">
                            <i className="fa fa-edit"></i>
                        </button>
                        <button onClick={this.deleteUser.bind(this, props.value)} className="btn btn-delete">
                            <i className="fa fa-trash"></i>
                        </button>
                    </span>
            }
        ]
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
                                <div className="card-title">
                                    <Link to="/user/add"><button className="btn btn-success"><i className="fas fa-plus"></i>Add User</button></Link>
                                </div>
                                <div className="card-body">
                                    <ReactTable
                                        data={this.state.users}
                                        columns={Columns}
                                        defaultPageSize={5}
                                        minRows={5}
                                    />
                                    {/* <DataTable
                                        columns={Columns}
                                        pagination={true}
                                        paginationPerPage={5}
                                        paginationRowsPerPageOptions={[5, 10, 15, 20]}
                                        responsive={true}
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListUser
