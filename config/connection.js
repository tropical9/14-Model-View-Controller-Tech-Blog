const Sequelize = require('sequelize');
require ('dotenv').config();

const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JASWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'myswl',
    port: 3306
});

module.exports = sequelize;