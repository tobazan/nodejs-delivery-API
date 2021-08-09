const { User } = require('./user')
const { Address } = require('./address')
const { Product } = require('./product')
const { PayMethod } = require('./paymethod')
const { Cart } = require('./cart')
const { CartItem } = require('./cart_item')

Address.belongsTo(User, {foreignKey: 'user_id'})
User.hasMany(Address, {foreignKey: 'user_id'})

Cart.belongsTo(User, {foreignKey: 'user_id'})
User.hasMany(Cart, {foreignKey: 'user_id'})

Cart.belongsTo(Address, {foreignKey: 'address_id'})
Address.hasMany(Cart, {foreignKey: 'address_id'})

Cart.belongsTo(PayMethod, {foreignKey: 'payMethod_id'})
PayMethod.hasMany(Cart, {foreignKey: 'payMethod_id'})

CartItem.belongsTo(Cart, {foreignKey: 'cart_id'})
Cart.hasMany(CartItem, {foreignKey: 'cart_id'})

CartItem.belongsTo(Product, {foreignKey: 'product_id'})
Product.hasMany(CartItem, {foreignKey: 'product_id'})