import React from 'react';

export default CheeseList(props) {
  return(
    <ul>
      {this.props.data.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  )
}