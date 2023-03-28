const Breweries = require('./models/breweries.js');

app.post('/breweries', (req, res)=>{
    Breweries.create(req.body, (err, createdBrewery)=>{
        res.json(createdBrewery); 
    });
});
