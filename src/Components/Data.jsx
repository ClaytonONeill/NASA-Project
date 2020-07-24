import React, { Component } from 'react';


class Data extends Component {
  render () {
    return (
      <React.Fragment>
      <div className='data-contain-all'>
        <div className='data-title-contain'>
          <h1
            className='data-title'>{this.props.data.title}
          </h1>
        </div>
        <div className='data-image-contain'>
          <img
            src={this.props.data.hdurl}
            className='data-image'>
          </img>
        </div>  
        <div className='data-info-contain'>
          <p
            className='data-p'>{this.props.data.explanation}
          </p>
        </div>
      </div>
      </React.Fragment>
    )
  }
}


export default Data;
