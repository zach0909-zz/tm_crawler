const offers = require('./offers');
const offersToSeats = require('./offersToSeats');

const combine = async (event_id) => {
    let pricesForSeats = [];
    let allOffers = await offers(event_id);
    let ots = await offersToSeats(event_id);
    allOffers.forEach(offer => {
        ots.forEach (offerToSeat => {
            if (offer.name == offerToSeat.offer){
                pricesForSeats.push({place: offerToSeat.place, price: offer.priceMax})
            }
        });
    });

    return pricesForSeats;
}

module.exports = combine;
