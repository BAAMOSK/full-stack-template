import React from 'react';
import { connect } from 'react-redux';

function CheeseList(props) {
  return(
    <ul>
      {this.props.data.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  )
}

const mapStateToProps = state => {
  state: this.props.data
}

export default connect(mapStateToProps)(CheeseList);