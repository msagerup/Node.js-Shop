const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
// Helper function
const rootDir = require('./util/path');
// Routes import
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const server = express();
server.engine('hbs', expressHbs());
server.set('view engine', 'hbs');
server.set('views', 'views');


server.use(bodyParser.urlencoded({extended: false}));

// Have to use this in order  to get access from the Public folder
// Gets static files
server.use(express.static(path.join(__dirname, 'public')));

// This loading POST AND GET routes to load data. Comes from ./routes 
server.use('/admin',adminData.routes);
server.use(shopRoutes);

server.use((req,res,rext) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})


server.listen(3000)