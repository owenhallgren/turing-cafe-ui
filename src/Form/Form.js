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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addRes = e => {
    e.preventDefault();
    const res = {
      ...this.state
    }

    this.props.addRes(res)
  }


  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />

        <input
          type='text'
          placeholder='Date'
          name='date'
          value={this.state.date}
          onChange={e => this.handleChange(e)}
        />

        <input
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={e => this.handleChange(e)}
        />

        <input
          type='text'
          placeholder='Number of Guests'
          name='number'
          value={this.state.number}
          onChange={e => this.handleChange(e)}
        />

        <button onClick={e => this.addRes(e)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;