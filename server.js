//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const cors = require('cors')
const db = mongoose.connection;
const Brewery = require('./models/brewery')
require('dotenv').config()
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI)

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

app.use(cors())
//___________________
// Routes
//___________________
//localhost:3000
app.get('/' , (req, res) => {
  res.redirect('/breweries')
});

app.get('/breweries', (req, res) => {
  Brewery.find({})
  .then((foundBreweries) => {
    res.json(foundBreweries)
  })
})

app.post('/breweries', (req, res) => {
  Brewery.create(req.body)
  .then((createdBrewery) => {
    res.json(createdBrewery)
  })
})

app.delete('/breweries/:id', (req, res) => {
  Brewery.findByIdAndRemove(req.params.id)
  .then((deletedBrewery) => {
    res.json(deletedBrewery)
  })
})

app.put('/breweries/:id', (req, res) => {
  Brewery.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((updatedBrewery) => {
    res.json(updatedBrewery)
  })
})

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));