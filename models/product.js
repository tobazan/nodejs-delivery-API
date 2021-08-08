const { Sequelize } = require('sequelize')
const { db } = require('../models/index')

const Product = db.define('Products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [2, 128],
          msg: "Product 'name' debe tener minimamente de dos caracters"
        }
      }
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
      unique: false,
      validate: {
        min: 0
      }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
}, {
    tableName: 'Products'    
}, {
    timestamps: true    
})

exports.Product = Product