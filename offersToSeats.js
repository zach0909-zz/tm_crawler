const axios = require ('axios');

const getOffersToSeats = async (event_id) => {
    let offersToSeats = [];
        const response = await axios.get('https://services.ticketmaster.com/api/ismds/event/' + event_id + '/facets?q=and(inventorytypes:%27primary%27,available)&show=places&apikey=b462oi7fic6pehcdkzony5bxhe&apisecret=pquzpfrfz7zd2ylvtz3w5dtyse',);
        const facets = response.data.facets;
        facets.forEach(facet => {
                    for (let x = 0; x < facet.places.length; x++){
                    offersToSeats.push({offer: facet.offers[0], place: facet.places[x]});
                    }
                });
        return offersToSeats;
}




// request('https://services.ticketmaster.com/api/ismds/event/16005673C47439CC/facets?q=and(inventorytypes:%27primary%27,available)&show=places&apikey=b462oi7fic6pehcdkzony5bxhe&apisecret=pquzpfrfz7zd2ylvtz3w5dtyse', (response, body) => {
    
//     let offersToSeats = [];
//     let gotBack = body.body;
//     let parse = JSON.parse(gotBack);
//     parse.facets.forEach(facet => {
//         for (let x = 0; x < facet.places.length; x++){
//         offersToSeats.push({offer: facet.offers[0], place: facet.places[x]});
//         }
//     });
// })

module.exports = getOffersToSeats;