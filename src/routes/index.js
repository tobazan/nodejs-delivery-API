const { Router } = require('express')
const routes = Router()

routes.post('/users')
routes.get('/users/:user_id')

routes.post('/login')
routes.post('/singup')

routes.get('/products')
routes.post('/products')
routes.patch('/products/:product_id')
routes.delete('/products/:product_id')

routes.post('/carts/:user_id')
routes.get('/carts/:user_id')
routes.get('/carts/:user_id/:cart_id')
routes.patch('/carts/:user_id/:cart_id')

module.exports = routes