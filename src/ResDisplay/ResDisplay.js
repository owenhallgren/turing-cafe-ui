import React from 'react';
import './ResDisplay.css'
import Reservation from '../Reservation/Reservation'

const ResDisplay = ( { reservations } ) => {

    const resToShow = reservations.map(reservation => {
        return (
            <Reservation 
                date={reservation.date}
                name={reservation.name}
                number={reservation.number}
                time={reservation.time}
                />
        )
    })
    return (
        <div className='res-display'>
            {resToShow}
        </div>
    )
}


export default ResDisplay;
