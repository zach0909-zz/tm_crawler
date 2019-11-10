const express = require('express');
const app = express();

app.get('https://services.ticketmaster.com/api/ismds/event/16005673C47439CC/?apikey=b462oi7fic6pehcdkzony5bxhe&apisecret=pquzpfrfz7zd2ylvtz3w5dtyse', (req, res) => {
    res.send('asdfasdasdf');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Waiting for port ${port}`));