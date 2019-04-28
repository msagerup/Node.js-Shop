const path = require('path');
const express = require('express');
const rootDir = require('../util/path.js');

//Gets the data from admin.js. Including products
const adminData = require('./admin.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: 'Shop', path: '/', hadProducts: products.length > 0})    
    console.log(products);
});

module.exports = router;