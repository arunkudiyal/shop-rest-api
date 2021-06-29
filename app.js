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