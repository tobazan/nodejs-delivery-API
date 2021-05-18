const fs = require('fs')
const file_path = './src/mocks/payMethods_mock.json'

exports.createPayMethod = (req, res) => {
    try {
        const { payMethod, isValid } = req.body
        
        let data = JSON.parse(fs.readFileSync(file_path, 'utf8'))

        const dup = data.find(method => method.payMethod === payMethod)
        if(dup) {
            return res.status(409).json({ message: `${payMethod} already exists` })
        }

        const newPayMethod = {
            id: (data.length + 1),
            payMethod: payMethod,
            isValid: (typeof isValid === Boolean ? isValid : false)
        }

        data.push(newPayMethod)

        fs.writeFileSync(file_path, JSON.stringify(data), 'utf8')
        
        return res.status(201).json({ message: `Agregaste ${payMethod}` })
    }
    catch(err) {
        return res.status(400).json(err)
    }
}

exports.listPayMethods = (req, res) => {
    try {
        let data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
 
        return res.status(200).json(data)
    }
    catch(err) {
        return res.status(400).json(err)
    }
}

exports.deletePayMethod = (req, res) => {
    const methodId = parseInt(req.params['methodId'])
    try{
        const data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
        const method_data = data.find(method => method.id === methodId)

        if(method_data === undefined){
            return res.status(409).json({message:"method does not exists"})
        }

        data.splice(methodId - 1, 1)

        fs.writeFileSync(file_path, JSON.stringify(data), 'utf8')
        
        return res.status(202).json({method:method_data.payMethod, message:"succesfully deleted"})
    }
    catch(err) {
        return res.status(400).json(err)
    }
}

exports.updatePayMethod = (req, res) => {
    try{
        const methodId = parseInt(req.params['methodId'])

        const data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
        const method_data = data.find(method => method.id === methodId)

        if(method_data === undefined){
            return res.status(409).json({message:"method does not exists"})
        }

        const { payMethod, isValid } = req.body

        if(payMethod != undefined) {
            method_data['payMethod'] = payMethod
        } 

        if(isValid != undefined) {
            method_data['isValid'] = isValid
        }        
        
        data.splice(methodId - 1, 1, method_data)

        fs.writeFileSync(file_path, JSON.stringify(data), 'utf8')
            
        return res.status(202).json({method:method_data.payMethod, message:"succesfully updated"})
    }
    catch(err) {
        return res.status(400).json(err)
    }
}