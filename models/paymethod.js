const { Sequelize } = require('sequelize')
const { db } = require('../models/index')

const PayMethod = db.define('PayMethods', {
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
          msg: "PayMethod 'name' debe tener minimamente de dos caracters"
        }
      }
    },
    isValid: {
      type: Sequelize.BOOLEAN,
      allowNull: false
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
    tableName: 'PayMethods'    
}, {
    timestamps: true    
})

exports.PayMethod = PayMethod