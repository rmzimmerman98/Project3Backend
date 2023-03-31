const mongoose = require('mongoose')

const breweriesSchema = new mongoose.Schema({
    name: String,
    brewery_type: String,
    address_1: String,
    city: String,
    state_province: String,
    country: String,
    phone: String,
    website_url: String,
    state: String,
    street: String
})

const Breweries = mongoose.model('Breweries', breweriesSchema)

module.exports = Breweries