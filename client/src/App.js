import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchData} from './actions';
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.parts.data
});

export default connect(mapStateToProps)(App);
