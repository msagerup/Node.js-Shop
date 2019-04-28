const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h2>Home</h2>')
    
    console.log('this is the req body from home')
});

module.exports = router;