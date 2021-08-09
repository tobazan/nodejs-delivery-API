const { Sequelize } = require('sequelize')
const { db } = require('../models/index')

const CartItem = db.define('Cart_Items', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    cart_id:{
      type: Sequelize.INTEGER,
    },
    product_id:{
      type: Sequelize.INTEGER,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    unit_price: {
      type: Sequelize.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    total_price: {
      type: Sequelize.FLOAT,
      allowNull: false,
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
    tableName: 'Cart_Items'    
}, {
    timestamps: true    
})

exports.CartItem = CartItem