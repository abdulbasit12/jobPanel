import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Content from './Content';
import LeftNavigation from './LeftNavigation';
import Header from './Section1';
import AddDepartment from './Department/Add';
import ListDepartment from './Department/List';
import Edit from './Department/Edit';
import Add from './Job/Add';
import List from './Job/List';
import EditJob from './Job/Edit';
import AddUser from './User/AddUser';
import ListUser from './User/ListUser';
import EditUser from './User/EditUser';
import UserProfile from './Profile/UserProfile';
import UserEdit from './Profile/UserEdit';
import Login from './Login';
import Feedback from './Feedback';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div className="main">
                    <Header />
                    <div className="mainBody">
                        <LeftNavigation />
                        <Route exact path="/" component={Login} />
                        <Route path="/dashboard" component={Content} />
                        <Route path="/department/add" component={AddDepartment} />
                        <Route path="/department/list" component={ListDepartment} />
                        <Route path="/department/edit" component={Edit} />
                        <Route path="/job/add" component={Add} />
                        <Route path="/job/list" component={List} />
                        <Route path="/job/edit" component={EditJob} />
                        <Route path="/user/add" component={AddUser} />
                        <Route path="/user/list" component={ListUser} />
                        <Route path="/user/edit" component={EditUser} />
                        <Route path="/profile/user" component={UserProfile} />
                        <Route path="/profile/edit" component={UserEdit} />
                        <Route path="/feedback" component={Feedback} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default Routes;
