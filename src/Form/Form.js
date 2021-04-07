import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      data: '',
      time: '',
      number: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
        />

        <input
          type='text'
          placeholder='Date'
          name='date'
          value={this.state.date}
        />

        <input
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
        />

        <input
          type='text'
          placeholder='Number of Guests'
          name='number'
          value={this.state.number}
        />

        <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form;