import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchData} from './actions';


class App extends Component {
  test(){
  const parts = fetchData();
  console.log(this.props.data);
  };

  render() {
    return (
      <div className="App">
        <ul>{test()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.parts.data
});

export default connect(mapStateToProps)(App);
