import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchData} from './actions';


class App extends Component {
  // test(){
  // const parts = fetchData();
  // this.props.dispatch(fetchData());
  // console.log(this.props.data);
  // }
  componentDidMount(){
    // return dispatch =>{
    this.props.dispatch(fetchData());
    //let arr = this.props.data[0]; console.log(arr)
    // this.props.data.map((item, index) => <li key={index}>{item}</li>)
    // .then(()=> console.log(this.props.data));
  }
  // componentDidMount(){
  //   display =  )
  // }

  render() {
    return (
      <div className="App">
        <ul>

{this.props.data.map((item, index) => <li key={index}>{item}</li>)}


        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) =>   return {
    data: state.parts.data
  };
}

export default connect(mapStateToProps)(App);
