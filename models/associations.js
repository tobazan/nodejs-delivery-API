const { User } = require('./user')
const { Address } = require('./address')

Address.belongsTo(User, {foreignKey: 'user_id'})
User.hasMany(Address, {foreignKey: 'user_id'})