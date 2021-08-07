const { Sequelize } = require('sequelize')
const { db } = require('../models/index')


const Address = db.define('Addresses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
            args: [2, 128],
            msg: "street debe tener minimamente dos caracters"
            }
        }
    },
    number:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 0
        }
    },
    user_id:{
      type: Sequelize.INTEGER,
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
    tableName: 'Addresses'    
}, {
    timestamps: true    
})



exports.Address = Address