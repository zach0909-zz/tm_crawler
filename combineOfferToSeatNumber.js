const venueSeats = require ('./venueSeats');
const findavailableSeatNumber = require('./findavailableSeatNumber');
const combineOfferAndSeats = require('./combineOffersAndSeats');
const combineOfferToSeat = async (event_id) => {
    let fasn = await findavailableSeatNumber(event_id);
    let pricesForSeats = await combineOfferAndSeats(event_id);

    pricesForSeats.forEach(seat => {
        fasn.forEach(availableSeat => {
            if (seat.place == availableSeat.name){
                availableSeat.price = seat.price;
            }
        });
    });
    console.log(fasn);
    return fasn;

}

combineOfferToSeat('3A00556C06357185');

// https://www1.ticketmaster.com/ipa/tmol/json/isc?command=start_reserve&edp=https%3A%2F%2Fwww1.ticketmaster.com%2Fevent%3A00556C06357185&event_id=3A00556C06357185&ccp_channel=0&ccp_src=3&seat[0][begin]=121&seat[0][end]=121&seat[0][extended_ticket_type][0]=004065800007&seat[0][quantity][0]=1&seat[0][row]=M&seat[0][section]=100&callback=superagentCallback1559285932717