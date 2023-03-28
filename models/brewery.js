const mongoose = require('mongoose')

const brewerySchema = new mongoose.Schema({
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

const Brewery = mongoose.model('Brewery', brewerySchema)

module.exports = Brewery