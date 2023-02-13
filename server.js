const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const expressHandlebars = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');
const helpers = require('./utils/helpers');




const app = express();
const PORT = process.env.PORT || 3001;

const handlebars = exphbs.create({ helpers });

