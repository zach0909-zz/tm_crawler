const as = require('./availableSeats');
const vs = require('./venueSeats');

const fasn = async (event_id) => {
    const availableSeats = await as(event_id);
    const venueSeats = await vs(event_id);
    let final = [];

    availableSeats.forEach(availableSeat => {
        for (x = 0; x < venueSeats.length; x++){
            if (availableSeat == venueSeats[x].name){
                final.push(venueSeats[x]);
            }
        }
    }); 
    return final;  
}

module.exports = fasn;