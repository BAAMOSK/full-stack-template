import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchData} from './actions';


class App extends Component {
  componentDidMount() {
  this.props.dispatch(fetchData());
  }

  render() {
    return (
      <div className="App">
        <ul>{() => console.log(this.props.data)}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.parts.data
});

export default connect(mapStateToProps)(App);
