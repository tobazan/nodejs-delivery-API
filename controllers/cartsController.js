// const fs = require('fs')
// const users_path = './src/mocks/users_mock.json'
// const payMethods_path = './src/mocks/payMethods_mock.json'
// const products_path = './src/mocks/products_mock.json'
// const carts_path = './src/mocks/carts_mock.json'

// exports.getCartsByEmail = (req, res) => {

//     try{
//         const b64Credentials = req.headers.authorization.split(' ')[1]
//         const credentials = Buffer.from(b64Credentials, 'base64').toString('ascii')
//         const [_username, _password] = credentials.split(':')
    
//         const users_data = JSON.parse(fs.readFileSync(users_path, 'utf8'))
//         const user = users_data.find(u => u.username === _username && u.email === req.query.userEmail)
    
//         if(user === undefined){
//             return res.status(401).json({
//                         message: "Credentials doesn't match email in order to get carts"})
//         }

//         const carts_data = JSON.parse(fs.readFileSync(carts_path, 'utf8'))
        
//         let userCarts = carts_data.filter(c => c.user.id === user.id) 
        
//         return res.status(200).json(userCarts)
//     }
//     catch(err){
//         return res.status(400).json(err)
//     }
// }

// exports.getCarts = (req, res) => {

//     try{
//         const carts_data = JSON.parse(fs.readFileSync(carts_path, 'utf8'))

//         return res.status(200).json(carts_data)
//     }
//     catch(err){
//         return res.status(400).json(err)
//     }
// }

// exports.createCart = (req, res) => {
//     try{
//         const b64Credentials = req.headers.authorization.split(' ')[1]
//         const credentials = Buffer.from(b64Credentials, 'base64').toString('ascii')
//         const [_username, _password] = credentials.split(':')
    
//         const users_data = JSON.parse(fs.readFileSync(users_path, 'utf8'))
//         const user = users_data.find(u => u.username === _username)
        
//         prods_data = JSON.parse(fs.readFileSync(products_path, 'utf8'))
//         products = []
        
//         req.body.products.forEach(e => {
//             p = prods_data.find(p => p.id === e.product_id)
//             if(p != undefined) {
//                 for(let i = 0; i < e.quantity; i++) {
//                     products.push(p)
//                 }
//             }
//         })
       
//         total_price = 0
//         products.forEach(e => {
//             total_price = total_price + e.price
//         })

//         methods_data = JSON.parse(fs.readFileSync(payMethods_path, 'utf8'))
//         method_id = req.body.payMethod || 8
//         payMethod = methods_data.find(m => m.id === method_id)

//         address = req.body.dalivery_address || user.address

//         carts_data = JSON.parse(fs.readFileSync(carts_path, 'utf8'))

//         newCart = {
//             "id": (carts_data.length + 1),
//             "user": user,
//             "products": products,
//             "total_price": total_price,
//             "payMethod": payMethod,
//             "delivery_address": address,
//             "status": 'OPEN'
//         }
 
//         carts_data.push(newCart)
//         fs.writeFileSync(carts_path, JSON.stringify(carts_data), 'utf8')
        
//         return res.status(201).json({message: `Cart successfully created`, id: newCart.id})
//     }
//     catch(err){
//         return res.status(400).json(err)
//     }
// }

// exports.updateCartItems = (req, res) => {
//     try{
//         const carts_data = JSON.parse(fs.readFileSync(carts_path, 'utf8'))
//         const cart_id = parseInt(req.query.cart_id)
//         let cart = carts_data.find(c => c.id === cart_id) 

//         if(cart['status'] != "OPEN"){
//             return res.status(401).json({message:"unauthorized to edit this cart"})
//         }

//         if(cart === undefined){
//             return res.status(409).json({message:"cart not found"})
//         }

//         // change cart products and update total price
//         prods_data = JSON.parse(fs.readFileSync(products_path, 'utf8'))
        
//         new_products = []
//         req.body.products.forEach(e => {
//             p = prods_data.find(p => p.id === e.product_id)
//             if(p != undefined) {
//                 for(let i = 0; i < e.quantity; i++) {
//                     new_products.push(p)
//                 }
//             }
//         })
       
//         new_price = 0
//         new_products.forEach(e => {
//             new_price = new_price + e.price
//         })

//         cart['products'] = new_products
//         cart['total_price'] = new_price

//         // replace cart in json file
//         carts_data.splice(cart_id - 1, 1, cart)
//         fs.writeFileSync(carts_path, JSON.stringify(carts_data), 'utf8')

//         return res.status(202).json({message:"cart items successfully updated"})
//     }
//     catch(err){
//         return res.status(400).json(err)
//     }
// }

// exports.updateDeliveryAddress = (req, res) => {
//     try{
//         const carts_data = JSON.parse(fs.readFileSync(carts_path, 'utf8'))
//         const cart_id = parseInt(req.query.cart_id)
//         let cart = carts_data.find(c => c.id === cart_id) 

//         if(cart === undefined){
//             return res.status(409).json({message:"cart not found"})
//         }

//         if(cart['status'] != "OPEN"){
//             return res.status(401).json({message:"unauthorized to edit this cart"})
//         }

//         if(req.body.address != undefined){
//             cart['delivery_address'] = req.body.address
//         } else {
//             res.status(400).json({message:"bad request"})
//         }

//         carts_data.splice(cart_id - 1, 1, cart)
//         fs.writeFileSync(carts_path, JSON.stringify(carts_data), 'utf8')

//         return res.status(202).json({message:"delivery address successfully updated"})
//     }
//     catch(err){
//         return res.status(400).json(err)
//     }
// }

// exports.updatePaymentMethod = (req, res) => {
//     try{
//         const payMethods_data = JSON.parse(fs.readFileSync(payMethods_path, 'utf8')) 
//         const carts_data = JSON.parse(fs.readFileSync(carts_path, 'utf8'))
//         const cart_id = parseInt(req.query.cart_id)
//         let cart = carts_data.find(c => c.id === cart_id) 

//         if(cart['status'] != "OPEN"){
//             return res.status(401).json({message:"unauthorized to edit this cart"})
//         }

//         if(cart === undefined){
//             return res.status(409).json({message:"cart not found"})
//         }

//         if(req.body.payMethod_id != undefined){
//             const method_id = parseInt(req.body.payMethod_id)
//             const newMethod = payMethods_data.find(m => m.id === method_id)
//             cart['payMethod'] = newMethod
//         } else {
//             res.status(400).json({message:"bad request"})
//         }

//         carts_data.splice(cart_id - 1, 1, cart)
//         fs.writeFileSync(carts_path, JSON.stringify(carts_data), 'utf8')

//         return res.status(202).json({message:"payment method successfully updated"})
//     }
//     catch(err){
//         return res.status(400).json(err)
//     }
// }

// exports.confirmCart = (req, res) => {
//     try{
//         const carts_data = JSON.parse(fs.readFileSync(carts_path, 'utf8'))
//         const cart_id = parseInt(req.query.cart_id)
//         let cart = carts_data.find(c => c.id === cart_id) 

//         if(cart['status'] != "OPEN"){
//             return res.status(401).json({message:"cart already confirmed", cart_satus: cart['status']})
//         }

//         if(cart === undefined){
//             return res.status(409).json({message:"cart not found"})
//         }

//         cart['status'] = "CONFIRMED"

//         carts_data.splice(cart_id - 1, 1, cart)
//         fs.writeFileSync(carts_path, JSON.stringify(carts_data), 'utf8')

//         return res.status(202).json({message:"cart successfully confirmed"})
//     }
//     catch(err){
//         return res.status(400).json(err)
//     }
// }

// exports.updateCartStatus = (req, res) => {
//     try{
//         const carts_data = JSON.parse(fs.readFileSync(carts_path, 'utf8'))
//         const cart_id = parseInt(req.query.cart_id)
//         let cart = carts_data.find(c => c.id === cart_id) 

//         if(cart === undefined){
//             return res.status(409).json({message:"cart not found"})
//         }

//         if(req.body.status != undefined){
//             cart['status'] = req.body.status
//         } else {
//             res.status(400).json({message:"bad request"})
//         }

//         carts_data.splice(cart_id - 1, 1, cart)
//         fs.writeFileSync(carts_path, JSON.stringify(carts_data), 'utf8')

//         return res.status(202).json({message:"cart status successfully updated"})
//     }
//     catch(err){
//         return res.status(400).json(err)
//     }
// }
