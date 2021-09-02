const { User } = require('../models/user')
const { Address } = require('../models/address')
const { Product } = require('../models/product')
const { PayMethod } = require('../models/paymethod')
const { Cart } = require('../models/cart')
const { CartItem } = require('../models/cart_item')

const { db } = require('../models/index')
const { Op } = require("sequelize")
const {ValidationError} = require('sequelize')

exports.getCartsByEmail = async (req, res) => {

    await Cart.findAll({
        include: [{
            model: CartItem
        },{
            model: User,
            where: {email: req.query.userEmail}
        }]
    }).then(c => {
        res.status(200).json(c) 
    }).catch (err => {
        res.status(500).json(err)
    })
}

exports.getCarts = async (req, res) => {
    
    await Cart.findAll({
        include: [{
            model: CartItem
        }]
    }).then(c => {
        res.status(200).json(c) 
    }).catch (err => {
        res.status(500).json(err)
    })
}

exports.createCart = async (req, res) => {
    
    const user = req.user.id
    const address = await Address.findOne({ where: {user_id: req.user.id} })
    const payMethod = await PayMethod.findOne({ where: {isValid: true} })

    theCart = await Cart.create({
                        user_id: user,
                        address_id: address.id,
                        payMethod_id: payMethod.id,
                        total_price:  0,
                        status:  "NUEVO"
    })

    // with a new cart created, transaction to write every product in it
    await db.transaction(async t => {
                
        let promises = []
        let t_price = 0

        req.body.products.forEach(prod => {
            promises.push(
                CartItem.create({
                    cart_id: theCart.id,
                    product_id: prod.product_id,
                    quantity: prod.quantity,
                    unit_price: prod.price,
                    total_price: prod.quantity * prod.price
                }, {transaction: t})
            )
            t_price = t_price + prod.quantity * prod.price
        })

        // update cart total price once cart items are created
        promises.push(
            Cart.update({
                total_price: t_price
            },{
                where: { id: theCart.id }
            }, {transaction: t})
        )
        
        // unless every item is successfully created rollback the transaction
        return Promise.all(promises)
    })
        .then(c_items => {
            console.log('Cart and Items created --db commit')
            res.status(201).json({msg:"Cart successfully created",
                                cart_id: theCart.id,
                                status: theCart.status,
                                items: c_items})
    })  .catch(err => {
            console.log('Could not create every cart items --db rollback')

            if(err instanceof ValidationError) {
                res.status(400).json({ msg:"Bad Request", error:err })
            }
            res.status(500).json({msg:'Internal error while creating Cart Items', error:err})
    })
}

exports.updateCartItems = async (req, res) => {

    const user = req.user.id

    theCart = await Cart.findOne({
        where: { 
            [Op.and]: [
                {user_id: user},
                {id: req.query.cart_id}
            ]}
    })
    
    if(!theCart.status === "NUEVO") {
        res.status(404).json({message:"Cannot edit an already confirmed cart"})
    }

    if(!theCart) {
        return res.status(404).json({message:"Cart not found"})
    } else { 

        // transaction to delete old items, write new ones and update cart total price
        await db.transaction(async t => {
                    
            let promises = []
            let t_price = 0

            // delete items
            promises.push(
                CartItem.destroy({
                    where: { cart_id: theCart.id }},
                    {transaction: t})
            )        
            
            // write new ones
            req.body.products.forEach(prod => {
                promises.push(
                    CartItem.create({
                        cart_id: theCart.id,
                        product_id: prod.product_id,
                        quantity: prod.quantity,
                        unit_price: prod.price,
                        total_price: prod.quantity * prod.price
                    }, {transaction: t})
                )
                t_price = t_price + prod.quantity * prod.price
            })

            // update cart total price once cart items are created
            promises.push(
                Cart.update({
                    total_price: t_price
                },{
                    where: { id: theCart.id }
                }, {transaction: t})
            )
            
            // unless every promises is successfully resolved, t rollback
            return Promise.all(promises)
        })
            .then(c_items => {
                console.log('Cart and Items updated --db commit')
                res.status(201).json({msg:"Cart successfully updated",
                                    cart_id: theCart.id,
                                    status: theCart.status,
                                    items: c_items})
        })  .catch(err => {
                console.log('Could not update cart items --db rollback')

                if(err instanceof ValidationError) {
                    res.status(400).json({ msg:"Bad Request", error:err })
                }
                res.status(500).json({msg:'Internal error while updating Cart Items', error:err})
        })
    }    
}

exports.updateDeliveryAddress = async (req, res) => {
    
    const user = req.user.id

    await Address.findOne({
        where: {
            [Op.and]: [
                {user_id: user},
                {id: req.query.address_id}
            ]}
        }).then(async a => {
            await Cart.update({
                address_id: a.id
            },{
                where: { 
                    [Op.and]: [
                        {user_id: user},
                        {id: req.query.cart_id}
                    ]}
            })
            .then(c => {
                if(c.status === "NUEVO") {
                    res.status(404).json({message:"Cannot edit an already confirmed cart"})
                }

                if(c != 0){
                    res.status(200).json({ 
                        msg:`Delivery address successfully updated`,
                        address: a,
                        cart: c
                    })
                } else {
                    res.status(404).json({ msg:`Not a valid cart for user ${user}`})
                }
            })
            .catch(err => {
                res.status(404).json({ msg:`Not a valid cart for user ${user}`, error:err })
            })  
        })
        .catch(err => {
            res.status(404).json({ msg:`Not a valid address for user ${user}`, error:err })
        })

}

exports.updatePaymentMethod = async (req, res) => {
    const user = req.user.id

    await PayMethod.findOne({
        where: {
            [Op.and]: [
                {isValid: true},
                {id: req.query.payMethod_id}
            ]}
        }).then(async p => {
            await Cart.update({
                payMethod_id: p.id
            },{
                where: { 
                    [Op.and]: [
                        {user_id: user},
                        {id: req.query.cart_id}
                    ]}
            })
            .then(c => {
                if(c.status === "NUEVO") {
                    res.status(404).json({message:"Cannot edit an already confirmed cart"})
                }

                if(c != 0){
                    res.status(200).json({ 
                        msg:`Pay Method successfully updated`,
                        method: p,
                        cart: c
                    })
                } else {
                    res.status(404).json({ msg:`Not a valid cart for user ${user}`})
                }
            })
            .catch(err => {
                res.status(404).json({ msg:`Not a valid cart for user ${user}`, error:err })
            })  
        })
        .catch(err => {
            res.status(404).json({ msg:`Not a valid pay method currently`, error:err })
        })

}

exports.confirmCart = async (req, res) => {
    const user = req.user.id
    await Cart.update({
        status: "p.id"
    },{
        where: { 
            [Op.and]: [
                {user_id: user},
                {id: req.query.cart_id}
            ]}
    })
    .then(c => {
        if(c.status === "NUEVO") {
            res.status(404).json({message:`Cannot confirm a cart with ${c.status} status`})
        }

        if(c != 0){
            res.status(200).json({ 
                msg:`Cart successfully confirmed`,
                cart: c
            })
        } else {
            res.status(404).json({ msg:`Not a valid cart for user ${user}`})
        }
    })
    .catch(err => {
        res.status(404).json({ msg:`Not a valid cart for user ${user}`, error:err })
    })
}

exports.updateCartStatus = async (req, res) => {
    await Cart.update({
        status: req.body.status
    },{
        where: { id: req.query.cart_id }
    })
    .then(c => {
        res.status(200).json({ 
            msg:`Cart status updated successfully`,
            cart: c
        })
    })
    .catch(err => {
        res.status(404).json(err)
    })
}
