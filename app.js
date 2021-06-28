// Step 2 - Configure the Server

const express = require('express')
const app = express()

const productsRoute = require('./api/routes/products')

app.use('/products', productsRoute)

module.exports = app