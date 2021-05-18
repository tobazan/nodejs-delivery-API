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