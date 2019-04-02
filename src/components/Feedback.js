import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'
import { Link } from 'react-router-dom'

export class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Feedback: [],
        }
    }

    componentDidMount() {
        axios.get('https://arcane-inlet-51731.herokuapp.com/feedbacks/feedbackList')
            .then(res => {
                this.setState({
                    Feedback: res.data.feeds,
                });
            })
    }

    deleteFeed = (id, e) => {
        e.preventDefault();
        axios.delete('https://arcane-inlet-51731.herokuapp.com/feedbacks/'+ id)
            .then(res => {
                if(res.data.message === 'success'){
                    window.location.reload();
                } else {
                    console.log(res)
                }
            })
    }

    render() {
        const Columns = [
            {
                Header: 'User Name',
                sortable: true,
                accessor: 'username',
            },
            {
                Header: 'Feedback',
                sortable: true,
                accessor: 'feedback'
            },
            {
                Header: 'Actions',
                sortable: false,
                accessor: '_id',
                Cell: props => <span><button onClick={this.deleteFeed.bind(this, props.value)} className="btn btn-delete"><i className="fa fa-trash"></i></button></span>
            },
        ]
        return (
            <div className="mainContent">
                <div className="pageBar">
                    <i className="fas fa-globe-europe"></i>
                    <div>
                        <h5>Feedback</h5>
                        <small>List Feedback</small>
                    </div>
                </div>
                <div className="contentBody">
                    <div className="row">
                        <div className="col-md-12 addForm">
                            <div className="card">
                                <div className="card-body">
                                    <ReactTable
                                        data={this.state.Feedback}
                                        columns={Columns}
                                        defaultPageSize={5}
                                        minRows={5}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedback
