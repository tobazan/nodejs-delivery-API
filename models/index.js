require('dotenv').config()
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')[env]

const { Sequelize } = require('sequelize')

exports.db = new Sequelize(config)
