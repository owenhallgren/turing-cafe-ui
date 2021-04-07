import React from 'react';
import './ResDisplay.css'
import Reservation from '../Reservation/Reservation'

const ResDisplay = ( { reservations } ) => {

    const resToShow = reservations.map(reservation => {
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
    return (
        <>
            {resToShow}
        </>
    )
}


export default ResDisplay;
