const axios = require('axios');

const getVenueSeats = async (event_id) => {
    let venueSeats = [];
        const response = await axios.get('http://mapsapi.tmol.io/maps/geometry/3/event/' + event_id + '/placeDetail?systemId=HOST')
        const data = response.data;
        let segments = data.pages[0].segments;
        for (let x = 0; x < segments.length; x++){
            if (segments[x].name != 'LAWN'){
                    let section = segments[x];
                    delete section.shapes;
                for (let y = 0; y < section.segments[0].segments.length; y++){
        //             // console.log(`The section is: ${segments[x].name}`, '\n', `The row is: ${segments[x].segments[0].segments[y].name}`);

                    let row = segments[x].segments[0].segments[y];
                    for (let z = 0; z < row.places.length; z++)
                    {
                            let seat = segments[x].segments[0].segments[y].places[z];
                            venueSeats.push({name: seat.id, section:section.name, row:row.name, seatnumber: seat.name})
                    }   
                }
            }
        }
        return venueSeats;
    }


// request('http://mapsapi.tmol.io/maps/geometry/3/event/16005673C47439CC/placeDetail?systemId=HOST', (reponse, body) => {
//     let gotBack = body.body;
//     let parse = JSON.parse(gotBack);
//     let segments = parse.pages[0].segments;
//     for (let x = 0; x < segments.length; x++){
//         if (segments[x].name != 'LAWN'){
//             let segment = segments[x];
//             delete segment.shapes;
//         // console.log(`The section is: ${segments[x].name}`);
//         for (let y = 0; y < segments[x].segments[0].segments.length; y++){
//             // console.log(`The section is: ${segments[x].name}`, '\n', `The row is: ${segments[x].segments[0].segments[y].name}`);

        
//         for (let z = 0; z < segments[x].segments[0].segments[y].places.length; z++)
//         {
//             // console.log(`The section is: ${segments[x].name}`, `The row is: ${segments[x].segments[0].segments[y].name}`, `The seat numbers is: ${segments[x].segments[0].segments[y].places[z].name}`);

//             availableSeats.forEach(availableSeat => {
//                 if (availableSeat == segments[x].segments[0].segments[y].places[z].id){
//                     // console.log(`In section: ${segments[x].name} and row: ${segments[x].segments[0].segments[y].name}, the seat: ${segments[x].segments[0].segments[y].places[z].name} is available!`)
//                 }
                
//             });
//         }
//     }
//             venueSeats.push(segment);
//         }
//     }
//     // console.log(`The section is: ${segments[0].name}`);
//     // console.log(`The row is ${segments[0].segments[0].segments[10].name}`);
//     // console.log(`The place id is ${segments[0].segments[0].segments[0].places[0].id}`);
//     // console.log(`The seat number is ${segments[0].segments[0].segments[0].places[10].name}`);

//     // console.log(availableSeats);


// });

module.exports = getVenueSeats;