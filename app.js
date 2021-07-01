// Step 2 - Configure the Server

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

// Manaage my routes
const productsRoute = require('./api/routes/products')
// const ordersRoute = require('./api/routes/orders')

// CONNECT THE DATABASE
mongoose.connect('mongodb+srv://arunkudiyal:' + 'examplepwd' + '@cluster0.2pssb.mongodb.net/shop-rest?retryWrites=true&w=majority')

// Log the route in the console before it reaches to the app.use()
app.use(morgan('dev'))

// body-parser being used a middleware & we are configuring it
// response will be coming as urlencoded & in format of JSON
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// USING THE ROUTES
app.use('/products', productsRoute)
// app.use('/orders', ordersRoute)

// HANDLE MY ERRORS -> a URL which is not a part of our API
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 400
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app