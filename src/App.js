import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';



class App extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
