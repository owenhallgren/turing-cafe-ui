export const resFetch = () => {
    return fetch('http://localhost:3001/api/v1/reservations	')
        .then((res) => {
        if(!res.ok) {
            throw Error('Error on our end, refresh and try again!')
        }
        return res.json() 
        })
        
} 