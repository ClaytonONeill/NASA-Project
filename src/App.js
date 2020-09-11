// IMPORTS //
import React, { Component } from 'react';

// COMPONENTS // 
import Data from './Components/Data.jsx';
import Header from './Components/Header.jsx'

// STYLES // 
import './App.css';

class App extends Component {
  state = {
    info: false,
    date: '',
    data: [],
    errorMessage: false
  };

  displayInfo = () => {
    this.setState({
      info: !this.state.info
    })
    console.log(this.state.info)
  }

  randomDate = () => {
    // Get random year, month, and day:
    let year = Math.ceil(Math.random() * (2020 - 1995) + 1995);
    let month = Math.ceil(Math.random() * (12 - 1) + 1);
    let day = Math.ceil(Math.random() * (31 - 1) + 1);

    // set up date variables:
    let date = new Date(`${year}-${month}-${day}`)
    let ms = date.getTime();
    let earliest = new Date('06/20/1995').getTime();
    let today = new Date().getTime();

    // If date is too early or too late, run this function again:
    if (ms < earliest || ms > today) this.randomDate();

    let formattedDate = date.toISOString().split('T')[0];

    this.handleSubmit(formattedDate)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }


  handleSubmit = (date) => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&hd=true&api_key=w1yWNsstPdbQ72g5P3hBytvj4ZnsnPA83YRwYy0Q`)
    .then(res => res.json())
    .then(json => {
      if (json.code === 404) {
        console.log('ran into 404: ', json.msg)
        this.setState({
          errorMessage: true
        })
      } else {
        this.setState({
           data: json,
           date
        })
      }
    })
    .catch((error) => console.log(error))
  };



  render () {
    let maxDate = new Date().toISOString().split('T')[0];
    return (
      <React.Fragment>
        <Header
          displayInfo={this.displayInfo}
          showMe={this.state.info}
        />
        <div className='search-contain'>
          <input
            type='date'
            min='1995-06-20'
            max={maxDate}
            id='date'
            value={this.state.date}
            onChange={this.handleChange}/>
          <input
            type='submit'
            id='submit'
            value='GO'
            disabled={!this.state.date}
            onClick={() => this.handleSubmit(this.state.date)}/>
          <button
            className='random-button'
            onClick={this.randomDate}>
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
