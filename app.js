// Step 2 - Configure the Server

const express = require('express')
const morgan = require('morgan')
const app = express()

// Manaage my routes
const productsRoute = require('./api/routes/products')
// const ordersRoute = require('./api/routes/orders')

// Log the route in the console before it reaches to the app.use()
app.use(morgan('dev'))

// USING THE ROUTES
app.use('/products', productsRoute)
// app.use('/orders', ordersRoute)

module.exports = app