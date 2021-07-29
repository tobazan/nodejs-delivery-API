// const fs = require('fs')
// const file_path = './src/mocks/payMethods_mock.json'

// exports.createPayMethod = (req, res) => {
//     try {
//         const payMethod = req.body.payMethod
//         const isValid = req.body.isValid || false
    
//         if(payMethod===undefined) {
//             return res.status(400).json(err)
//         }

//         let data = JSON.parse(fs.readFileSync(file_path, 'utf8'))

//         const dup = data.find(method => method.payMethod === payMethod)
//         if(dup) {
//             return res.status(409).json({ message: `${payMethod} already exists` })
//         }

//         const newPayMethod = {
//             id: (data.length + 1),
//             payMethod: payMethod,
//             isValid: isValid
//         }

//         data.push(newPayMethod)

//         fs.writeFileSync(file_path, JSON.stringify(data), 'utf8')
        
//         return res.status(201).json({ message: `Successfully created ${payMethod}` })
//     }
//     catch(err) {
//         return res.status(400).json(err)
//     }
// }

// exports.listPayMethods = (req, res) => {
//     try {
//         let data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
 
//         return res.status(200).json(data)
//     }
//     catch(err) {
//         return res.status(400).json(err)
//     }
// }

// exports.deletePayMethod = (req, res) => {
//     const methodId = parseInt(req.query.methodId)
//     try{
//         const data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
//         const method_data = data.find(method => method.id === methodId)

//         if(method_data === undefined){
//             return res.status(409).json({message:"method does not exists"})
//         }

//         data.splice(methodId - 1, 1)

//         fs.writeFileSync(file_path, JSON.stringify(data), 'utf8')
        
//         return res.status(202).json({method:method_data.payMethod, message:"succesfully deleted"})
//     }
//     catch(err) {
//         return res.status(400).json(err)
//     }
// }

// exports.updatePayMethod = (req, res) => {
//     try{
//         const methodId = parseInt(req.query.methodId)

//         const data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
//         const method_data = data.find(method => method.id === methodId)

//         if(method_data === undefined){
//             return res.status(409).json({message:"method does not exists"})
//         }

//         if(req.body.payMethod != undefined && req.body.isValid != undefined) {
//             method_data['payMethod'] = req.body.payMethod
//             method_data['isValid'] = req.body.isValid
//         } else {
//             res.status(400).json({message:"bad request"})
//         }

//         data.splice(methodId - 1, 1, method_data)
//         fs.writeFileSync(file_path, JSON.stringify(data), 'utf8')
            
//         return res.status(202).json({method:method_data.payMethod, message:"succesfully updated"})
//     }
//     catch(err) {
//         return res.status(400).json(err)
//     }
// }