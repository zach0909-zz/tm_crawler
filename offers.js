const axios = require ('axios');

const getOffers = async (event_id) => {
    let offers = [];
        const response = await axios.get('https://services.ticketmaster.com/api/ismds/event/' + event_id + '/facets?show=listpricerange&by=offers&oq=not(locked)&q=available&apikey=b462oi7fic6pehcdkzony5bxhe&apisecret=pquzpfrfz7zd2ylvtz3w5dtyse')
        const facets = response.data.facets;
        facets.forEach(offer => {
                    for (let x = 0; x < offer.offers.length; x++){
                        offers.push({name: offer.offers[x], priceMin: offer.listPriceRange[0].min, priceMax: offer.listPriceRange[0].max});
                    }
                });
        return offers;


// request('https://services.ticketmaster.com/api/ismds/event/16005673C47439CC/facets?show=listpricerange&by=offers&oq=not(locked)&q=available&apikey=b462oi7fic6pehcdkzony5bxhe&apisecret=pquzpfrfz7zd2ylvtz3w5dtyse', (response, body) => {
//     let offers = [];    
// let gotback = body.body;
//     let parse = JSON.parse(gotback);
//     let facets = parse.facets;
//     facets.forEach(offer => {
//         for (let x = 0; x < offer.offers.length; x++){
//             offers.push({name: offer.offers[x], priceMin: offer.listPriceRange[0].min, priceMax: offer.listPriceRange[0].max});
//         }
//     });
}

module.exports = getOffers;