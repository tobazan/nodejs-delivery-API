const fs = require('fs')
const users_path = './src/mocks/users_mock.json'
const payMethods_path = './src/mocks/payMethods_mock.json'
const products_path = './src/mocks/products_mock.json'
const carts_path = './src/mocks/carts_mock.json'

exports.getCartsByEmail = (req, res) => {
    const b64Credentials = req.headers.authorization.split(' ')[1]
    const credentials = Buffer.from(b64Credentials, 'base64').toString('ascii')
    const [_username, _password] = credentials.split(':')

    const users_data = JSON.parse(fs.readFileSync(users_path, 'utf8'))
    const user = users_data.find(u => u.username === _username && u.email === req.query.userEmail)

    if(user === undefined){
        return res.status(401).json({
                    message: "Credentials doesn't match email in order to get carts"})
    }

    try{
        const carts_data = JSON.parse(fs.readFileSync(carts_path, 'utf8'))
        
        let userCarts = carts_data.filter(c => c.user.id === user.id) 
        
        return res.status(200).json(userCarts)
    }
    catch(err){
        return res.status(400).json(err)
    }
}
// exports.updateAddress = (req, res) => {
//     try{
//         const b64Credentials = req.headers.authorization.split(' ')[1]
//         const credentials = Buffer.from(b64Credentials, 'base64').toString('ascii');
//         const [_user, _pass] = credentials.split(':');

//         const newAddress = req.body
//         const username = req.params['username']

//         if(_user != username) {
//             return res.status(401).json({message: "Your are only allowed to modify your own address"})
//         }

//         const data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
        
//         const user_data = data.find(user => user.username === _user && user.password === _pass)
//         user_data['address'] = newAddress 

//         data.splice(user_data.id, 1, user_data)

//         fs.writeFileSync(file_path, JSON.stringify(data), 'utf8')
            
//         return res.status(202).json({user:user_data.username, message:"user deleted"})
//     }
//     catch(err) {
//         return res.status(400).json(err)
//     }
// }