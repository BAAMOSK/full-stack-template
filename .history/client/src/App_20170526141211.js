import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchData} from './actions';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(fetchData());
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.props.data.map((item, index) => <li key={index}>{item}</li>)}
        {console.log(`YoloOne`,this.props.data)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.parts.data
});

export default connect(mapStateToProps)(App);
