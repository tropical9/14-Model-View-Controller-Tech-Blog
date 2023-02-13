const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });



const app = express();
const PORT = process.env.PORT || 3001;

const sess  = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
}

const handlebars = exphbs.create({ helpers });

app.use (session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  


