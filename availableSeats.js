const axios = require('axios');

const getAvailableSeats = async (event_id) => {
    let dirtyArrayOfSeats = [];
    let merged = [];

    try{
        const allSeats = await axios.get('https://services.ticketmaster.com/api/ismds/event/' + event_id + '/facets?q=and(inventorytypes:%27primary%27,available)&show=places&apikey=b462oi7fic6pehcdkzony5bxhe&apisecret=pquzpfrfz7zd2ylvtz3w5dtyse');
        const data = allSeats.data;
        for (x = 0; x < data.facets.length; x++){
            dirtyArrayOfSeats.push(data.facets[x].places);
        }
        
        merged = [].concat.apply([], dirtyArrayOfSeats);
        
        
        } 
    catch (error) {
            console.log(error);
        }

        return merged;
}

module.exports = getAvailableSeats;

    


