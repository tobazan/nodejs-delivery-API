const { Sequelize } = require('sequelize')
const { db } = require('../models/index')

const User = db.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: {
            args: [2, 128],
            msg: "username debe tener minimamente de dos caracters"
            }
        }
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8, 128],
            msg: "password debe tener minimamente 8 caracteres"
          }
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "email debe ser un correo valido"
          }
        }
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "name es campo obligatorio"
          }
        }
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 128],
            msg: "phone debe tener minimamente 6 caracteres"
          }
        }
    },
    isAdmin:{
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isActive:{
      type: Sequelize.BOOLEAN,
      defaultValue: true,
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
    tableName: 'Users'    
}, {
    timestamps: true    
})



exports.User = User