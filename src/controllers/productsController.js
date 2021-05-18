const fs = require('fs')
const file_path = './src/mocks/products_mock.json'

exports.createProduct = (req, res) => {
    try {
        const { product, price, image } = req.body
        
        let data = JSON.parse(fs.readFileSync(file_path, 'utf8'))

        const dup = data.find(prod => prod.product === product)
        if(dup) {
            return res.status(400).json({ message: `${product} already exists` })
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