const { Product } = require('../models/product')
const {ValidationError} = require('sequelize')
const redis = require('redis')
const client = redis.createClient()

exports.listProducts = async (req, res) => {

    try {
        client.get('cached_prods', async (err, prods) => {
            if (err) throw err
    
            if (prods) {
                console.log('Got products catalogue from cache layer')
                res.status(200).json(JSON.parse(prods))
            } else {

                await Product.findAll()
                    .then( products => {
                        try{
                            client.setex('cached_prods', 3600, JSON.stringify(products))
                            console.log('Saved products catalogue on cache layer')
                        }catch(err){
                            return res.status(500).json({msg:"Could not save on cache layer"})
                        }
                        res.status(200).json(products)
                    })
                    .catch (err => {
                        return res.status(500).json(err)
                    })
            }
        }) 
    } catch(error) {
        res.status(500).json(error)
    }
}

exports.createProduct = async (req, res) => {

    await Product.create({
        name: req.body.name,
        price: req.body.price
        })
        .then(async p => {
            // update cache layer
            await Product.findAll()
                .then( products => {
                    try{
                        client.setex('cached_prods', 3600, JSON.stringify(products))
                        console.log('products catalogue on cache layer were updated')
                    }catch(err){
                        console.log("Could not update cache layer")
                    }
                })
                .catch (err => {
                    return res.status(500).json(err)
                })
            
            // response
            res.status(201).json({
                product: p.name,
                message: "Product successfully created"
            })
        })
        .catch(err => {
            if(err instanceof ValidationError) {
                res.status(400).json({ msg:"Bad Request", error:err })
            }
            res.status(500).json(err)
        })
}

exports.deleteProduct = async (req, res) => {
    
    await Product.destroy({
        where: { id: req.query.prodId }
        })
        .then(async p => {
            // update cache layer
            await Product.findAll()
                .then( products => {
                    try{
                        client.setex('cached_prods', 3600, JSON.stringify(products))
                        console.log('products catalogue on cache layer were updated')
                    }catch(err){
                        console.log("Could not update cache layer")
                    }
                })
                .catch (err => {
                    return res.status(500).json(err)
                })
            // response
            res.status(202).json({
                product: p.name,
                message: "successfully deleted"})
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

exports.updateProduct = async (req, res) => {
    
    await Product.update({ 
        name: req.body.name,
        price: req.body.price
    },{
        where: { id: req.query.prodId }
    })
      .then(async p => {
        // update cache layer
        await Product.findAll()
        .then( products => {
            try{
                client.setex('cached_prods', 3600, JSON.stringify(products))
                console.log('products catalogue on cache layer were updated')
            }catch(err){
                console.log("Could not update cache layer")
            }
        })
        .catch (err => {
            return res.status(500).json(err)
        })
        // response
        res.status(200).json({
            product: p.id,
            message:"Successfully updated"})
      })
      .catch(err => {
        res.status(500).json(err)
      })
}

exports.redis_client = client