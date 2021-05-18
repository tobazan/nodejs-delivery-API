const fs = require('fs')
const file_path = './src/mocks/users_mock.json'


exports.createUser = (req, res) => {
    try {
        const { username, name, email, password, phone, address } = req.body
        
        let data = JSON.parse(fs.readFileSync(file_path, 'utf8'))

        const newUser = {
            id: (data.length + 1),
            username: username,
            name: name,
            email: email,
            password: password,
            phone: phone,
            address: address,
            isAdmin: false
        }

        data.push(newUser)

        fs.writeFileSync(file_path, JSON.stringify(data), 'utf8')
        
        return res.status(201).json({ user:newUser.username, email:newUser.email })
    }
    catch(err) {
        return res.status(400).json(err)
    }
}

exports.login = (req, res) => {
    const { username, password } = req.body

    try{
        const data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
        const registered_user = data.find(
            user => user.username === username && user.password === password)
        
        if (registered_user === undefined)
          return res.status(401).json({ message: "Invalid credentials" })
        
        return res.status(200).json({message: `Welcome ${username}`})
    }
    catch(err) {
        return res.status(500).json({message: "Internal error, please try again"})
    }
}

exports.getUsers = (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
        return res.status(200).json(data) 
    } catch (err) {
        return res.status(400).json(err)
    }
}

exports.getUserByEmail = (req, res) => {
    const userEmail = req.params['userEmail']

    try{
        const data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
        const user_data = data.find(user => user.email === userEmail)

        if (!user_data) {
            return res.status(409).send({message: 'User does not exists'})
        }

        return res.status(200).json({
            username: user_data.username,
            name: user_data.name,
            email: user_data.email,
            address: user_data.address,
            phone: user_data.phone
        })
    }
    catch(err) {
        return res.status(400).json(err)
    }
}

exports.deleteUserById = (req, res) => {
    const userId = parseInt(req.params['userId'])
    try{
        const data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
        const user_data = data.find(user => user.id === userId)

        if(user_data === undefined){
            return res.status(409).json({message:"user does not exists"})
        }

        data.splice(userId - 1, 1)

        fs.writeFileSync(file_path, JSON.stringify(data), 'utf8')
        
        return res.status(202).json({user:user_data.username, message:"user deleted"})
    }
    catch(err) {
        return res.status(400).json(err)
    }
}