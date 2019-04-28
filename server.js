const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const server = express();
server.use(bodyParser.urlencoded({extended: false}));

server.use('/admin',adminRoutes);
server.use(shopRoutes);

server.use((req,res,rext) => {
    res.status(404).send(`
        <h3>Sorry, this page was not found</h3>
    `)
})


server.listen(3000)