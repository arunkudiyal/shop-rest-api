const express = require('express')
const router = express.Router()

// app.js - /products --> /products/products
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /products"
    })
})   

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        quantity: req.body.quantity
    }
    res.status(200).json({
        message: "Handling POST requests to /products",
        createdProduct: product
    })
})

// GET - /products/productID 
// PATCH - /products/productID -> Edit the product
// DETEE - /products/productId -> Delete the product

// /products/{something}
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    if(id === 'special') {
        res.status(200).json({
            message: 'You have a Special ID',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You have an Ordinary ID',
            id: id
        })
    }
})

// Patch/Edit the products
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Handling PATCH request to /products/productId',
        id: req.params.productId
    })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Handling DELETE request to /products/productId',
        id: req.params.productId
    })
})

module.exports = router