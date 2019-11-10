const RequestQueue = require ('node-request-queue');

let rq = new RequestQueue();
let request = {
    method: 'GET',
    uri: 'https://ev2.evenue.net/cgi-bin/ncommerce3/SEPyos?linkID=global-uaa&get=sect&itC=GS:UAA:AAC18:P0614C:'
}

rq.on('resolved', (res) => {
console.log(res); // Print the response status code if a response was received
});
rq.on('rejected', () => {
    rq.push(request);
});
rq.on('completed', () => {
    console.log('You did it!');
});



