import React from 'react';
import './Reservation.css'
const Reservation = ({ date, id, name, number, time}) => {

    return (
        <div className='res-card'>
            <h4>{name}</h4>
            <p>{date}</p>
            <p>{time} PM</p>
            <p>Number of guests:{number}</p>   
      </div>
    )
}

export default Reservation