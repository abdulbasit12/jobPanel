import React, { Component } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const Columns = [
    {
        name: 'Index',
        sortable: true,
        selector: 'id'
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'User Name',
        selector: 'username',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'Address',
        selector: 'address.city',
        sortable: true,
    },
]


export class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    persons: res.data,
                });
            })
    }

    render() {
        var data = this.state.persons;
        return (
            <div className="mainContent">
                <h1>Dashboard One content</h1>
                <DataTable
                    title="User Data"
                    columns={Columns}
                    data={this.state.persons}
                    pagination={true}
                    paginationPerPage={5}
                />
                {this.state.persons.map(person => (
                    <div>
                        <ul key={person.id}>
                            <li>{person.name}</li>
                            <li>{person.username}</li>
                            <li>{person.email}</li>
                        </ul>
                        <div>
                        </div>
                    </div>
                )
                )}
            </div>
        )
    }
}

export default Content
