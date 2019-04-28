const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`
        <form action="/admin/add-product" method="POST">
            <input type="text" name="title">
            <button type="submit">Send</button>
        </form>
        `)
});

router.post('/add-product', (req,res) => {
    input = req.body
    res.send(`
        <h2>This it the products page</h2>
        <h4>Thank you for your input! You typed ${input.title}</h4>
    `)
    console.log(input)
});

module.exports = router;