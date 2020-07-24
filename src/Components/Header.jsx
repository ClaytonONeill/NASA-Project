import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='header-contain'>
          <h1>NASA Daily Image Search</h1>
          <h2 id='more-info'>What is this?</h2>
        </div>
      </React.Fragment>
    )
  }
}



export default Header;
