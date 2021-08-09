const { Sequelize } = require('sequelize')
const { db } = require('../models/index')

const Cart = db.define('Carts', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  user_id:{
    type: Sequelize.INTEGER,
  },
  address_id:{
    type: Sequelize.INTEGER,
  },
  payMethod_id: {
    type: Sequelize.INTEGER,
  },
  total_price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  status: {
    type: Sequelize.ENUM('NUEVO', 'CONFIRMADO','PREPARACION','ENVIADO','ENTREGADO','CANCELADO')
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
  tableName: 'Carts'    
}, {
  timestamps: true    
})

exports.Cart = Cart