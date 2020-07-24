// IMPORTS //
import React, { Component } from 'react';
import Data from './Components/Data.jsx';
import Header from './Components/Header.jsx'
import './App.css';

class App extends Component {
  state = {
    date: '2020-05-09',
    hd: true,
    data: []
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.nasa.gov/planetary/apod?date=${this.state.date}&hd=${this.state.hd}&api_key=w1yWNsstPdbQ72g5P3hBytvj4ZnsnPA83YRwYy0Q`)
    .then(res => res.json())
    .then(data => {
      this.setState( {data} )
    })
    console.log(this.state)
  };

  render () {
    return (
      <React.Fragment>
        <Header />
        <div className='search-contain'>
          <input
            type='date'
            id='date'
            onChange={this.handleChange}/>
          <input
            type='submit'
            id='submit'
            value='GO'
            onClick={this.handleSubmit}/>
        </div>
        <Data
          data={this.state.data}
         />
      </React.Fragment>
    )
  }
}

export default App;
