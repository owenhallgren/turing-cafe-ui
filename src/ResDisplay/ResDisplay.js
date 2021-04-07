import './ResDisplay.css'
import Reservation from '../Reservation/Reservation'
import React from 'react';

const ResDisplay = ( { reservations } ) => {
    reservations.map(reservation => {
        return (
            <Reservation 
                date={reservation.date}
                id={reservation.id}
                name={reservation.name}
                number={reservation.number}
                time={reservation.time}
                />
        )
    })
    
}


export default ResDisplay;
