import React, { Component } from 'react';
import './App.css';
import { resFetch } from '../apiCall';
import ResDisplay from '../ResDisplay/ResDisplay';



class App extends Component {
  constructor() {
    super() 
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
     resFetch().then(data => this.setState({ reservations: data }))
  }
   
      
  

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        {this.state.reservations.length && <div className='resy-container'>
          <ResDisplay reservations={this.state.reservations}/>
        </div>}
      </div>
    )
  }
}

export default App;
