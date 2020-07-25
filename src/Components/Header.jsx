import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='header-contain'>
          <h1>NASA Daily Image Search</h1>
          <h2
            id='more-info'
            onClick={this.props.displayInfo}>
            What is this?
          </h2>
          <div className={this.props.showMe ? 'how-to-info' : 'how-to-info-hide'}>
            <p>
              Select a date between June 20th, 1995 (06-20-1995) and todays date then hit the GO button.
              (To get today's date, just click the calendar adn hit today!) This will generate a unique image from that date and also provide an explanation telling you whats going on.

              Hit the random button to, you guessed it, grab a random image!

              <br/>Enjoy!
            </p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}



export default Header;
