const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path.js');


const products = [];

// Products page, Get request
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add Product'});
});

// Products page, POST request
router.post('/add-product', (req,res) => {
    input = req.body.title;
    products.push({title: input});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;