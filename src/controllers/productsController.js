const fs = require('fs')
const file_path = './src/mocks/products_mock.json'

exports.listProducts = (req, res) => {
    try {    
        let data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
        
        return res.status(200).json(data)
    }
    catch(err) {
        return res.status(400).json(err)
    }
}

exports.createProduct = (req, res) => {
    try {
        const { product, price, image } = req.body
        
        let data = JSON.parse(fs.readFileSync(file_path, 'utf8'))

        const dup = data.find(prod => prod.product === product)
        if(dup) {
            return res.status(400).json({ message: `${product} already exists` })
        }

        if(product === undefined || price === undefined){
            return res.status(400).json(err)
        }

        const newProduct = {
            id: (data.length + 1),
            product: product,
            price: parseFloat(price),
            image: image
        }

        data.push(newProduct)

        fs.writeFileSync(file_path, JSON.stringify(data), 'utf8')
        
        return res.status(201).json({ message: `Creado ${newProduct.product}` })
    }
    catch(err) {
        return res.status(400).json(err)
    }
}

exports.deleteProduct = (req, res) => {
    const prodId = parseInt(req.params['prodId'])
    try{
        const data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
        const prod_data = data.find(product => product.id === prodId)

        if(prod_data === undefined){
            return res.status(409).json({message:"there is not such product"})
        }

        data.splice(prodId - 1, 1)

        fs.writeFileSync(file_path, JSON.stringify(data), 'utf8')
        
        return res.status(202).json({product:prod_data.product, message:"successfully deleted"})
    }
    catch(err) {
        return res.status(400).json(err)
    }
}

exports.updateProduct = (req, res) => {
    try{
        const prodId = parseInt(req.params['prodId'])

        const data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
        const prod_data = data.find(prod => prod.id === prodId)

        if(prod_data === undefined){
            return res.status(409).json({message:"product does not exists"})
        }

        if(req.body.product != undefined) {
            prod_data['product'] = req.body.product
        } 

        if(req.body.price != undefined) {
            prod_data['price'] = parseFloat(req.body.price)
        } 

        if(req.body.image != undefined) {
            prod_data['image'] = req.body.image
        }        
        
        data.splice(prodId - 1, 1, prod_data)

        fs.writeFileSync(file_path, JSON.stringify(data), 'utf8')
            
        return res.status(202).json({product:prod_data.product, message:"succesfully updated"})
    }
    catch(err) {
        return res.status(400).json(err)
    }
}