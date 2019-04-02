import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'
import { Link } from 'react-router-dom'
import Axios from 'axios';
var apiUrl = "https://arcane-inlet-51731.herokuapp.com/"

export class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: apiUrl,
        })
            .then(res => {
                this.setState({
                    jobs: res.data.jobs,
                });
            })
            .catch(error => {
                console.log(error)
            });
    }

    editJob(id, e){
        localStorage.setItem('jobId' , id)
        e.preventDefault();
        var editJobUrl = "https://arcane-inlet-51731.herokuapp.com/jobs/edit/"
        Axios({
            method: 'get',
            url: editJobUrl + id,
        })
        .then((res) => {
            if(res.data.message === 'success'){
                window.location.href = '/job/edit'
            }
        })
    }

    deleteJob(id, e){
        e.preventDefault();
        var deleteJobUrl = "https://arcane-inlet-51731.herokuapp.com/jobs/"
        Axios({
            method: 'delete',
            url: deleteJobUrl + id
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
                Header: 'Job Name',
                sortable: true,
                accessor: 'jobname'
            },
            {
                Header: 'Department ID',
                sortable: true,
                accessor: 'departmentId',
            },
            {
                Header: 'Building',
                sortable: true,
                accessor: 'building',
            },
            {
                Header: 'Floor',
                sortable: true,
                accessor: 'floor',
            },
            {
                Header: 'Room',
                sortable: true,
                accessor: 'room',
            },
            {
                Header: 'Instructions',
                sortable: true,
                accessor: 'instructions',
            },
            {
                Header: 'Deadline',
                sortable: true,
                accessor: 'deadline',
            },
            {
                Header: 'Priority',
                sortable: true,
                accessor: 'priority',
            },
            {
                Header: 'File Status',
                sortable: true,
                accessor: 'filestatus',
            },
            {
                Header: 'Creater Name',
                sortable: true,
                accessor: 'creatername',
            },
            {
                Header: 'Worker Name',
                sortable: true,
                accessor: 'workername',
            },
            {
                Header: 'Actions',
                sortable: false,
                accessor: '_id',
                Cell: props =>
                    <span>
                        <button onClick={this.editJob.bind(this, props.value)} className="btn btn-edit">
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="btn btn-delete" onClick={this.deleteJob.bind(this, props.value)}>
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
                        <h5>Job</h5>
                        <small>Job List</small>
                    </div>
                </div>
                <div className="contentBody">
                    <div className="row">
                        <div className="col-md-12 addForm">
                            <div className="card">
                                <div className="card-title">
                                    <Link to="/job/add"><button className="btn btn-success"><i className="fas fa-plus"></i>Add Job</button></Link>
                                </div>
                                <div className="card-body">
                                    <ReactTable
                                        data={this.state.jobs}
                                        columns={Columns}
                                        defaultPageSize={5}
                                        minRows={5}
                                    />
                                    {/* <DataTable
                                        columns={Columns}
                                        data={this.state.jobs}
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

export default List
