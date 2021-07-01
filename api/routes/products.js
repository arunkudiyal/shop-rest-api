const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Product = require('../models/product')

// app.js - /products --> /products/products
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /products"
    })
})   

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        quantity: req.body.quantity
    })

    product
    .save()
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: err})
    })

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
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log(doc)
        res.status(200).json(doc)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: err})
    })
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