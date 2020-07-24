import React, { Component } from 'react';


class Data extends Component {
  render () {
    return (
      <React.Fragment>
        <h1>{this.props.data.date}</h1>
        <img src={this.props.data.hdurl}></img>
        <p className='data-p'>{this.props.data.explanation}</p>
      </React.Fragment>
    )
  }
}


export default Data;
