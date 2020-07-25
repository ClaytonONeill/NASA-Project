// IMPORTS //
import React, { Component } from 'react';
import Data from './Components/Data.jsx';
import Header from './Components/Header.jsx'
import './App.css';

class App extends Component {
  state = {
    info: false,
    date: '',
    data: []
  };

  displayInfo = () => {
    this.setState({
      info: !this.state.info
    })
    console.log(this.state.info)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }


  handleSubmit = (e) => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${this.state.date}&hd=true&api_key=w1yWNsstPdbQ72g5P3hBytvj4ZnsnPA83YRwYy0Q`)
    .then(res => res.json())
    .then(data => {
      this.setState({ data })
    })

  };

  randomImage = () => {
    let year = Math.ceil(Math.random() * (2020 - 1995) + 1995);
    let month = Math.ceil(Math.random() * (12 - 1) + 1);
    let day = Math.ceil(Math.random() * (31 - 1) + 1);

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    this.setState({
      date: `${year}-${month}-${day}`}, this.handleSubmit);
  }


  render () {
    return (
      <React.Fragment>
        <Header
          displayInfo={this.displayInfo}
          showMe={this.state.info}
        />
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
          <button
            className='random-button'
            onClick={this.randomImage}>
            Random Image
          </button>
        </div>
        <Data
          data={this.state.data}
         />
      </React.Fragment>
    )
  }
}

export default App;
