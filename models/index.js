const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
//require('dotenv').config()
//const env = process.env.NODE_ENV || 'development'
const env = process.env.NODE_ENV
const config = require('../config/config')[env]
// const config = {
//     username: process.env.PROD_DB_USERNAME,
//     password: process.env.PROD_DB_PASSWORD,
//     database: process.env.PROD_DB_DATABASE,
//     host: 'deliapi-pg-db.cz75ulfblome.sa-east-1.rds.amazonaws.com',
//     dialect: 'postgres'
// }

const { Sequelize } = require('sequelize')

exports.db = new Sequelize(config)
