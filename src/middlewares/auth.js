const fs = require('fs')
const file_path = './src/mocks/users_mock.json'

exports.basicAuth = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Missing auth header' })
        }

        const b64Credentials = req.headers.authorization.split(' ')[1]
        const credentials = Buffer.from(b64Credentials, 'base64').toString('ascii')
        const [_username, _password] = credentials.split(':')

        const data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
        const registered_user = data.find(
            user => user.username === _username && user.password === _password)
        
        if (registered_user === undefined)
          return res.status(401).json({ message: "Invalid credentials" })

        next()
    } catch (error) {
        res.status(500).json({ message: "Internal error, please try again later" })
    }
}

exports.isAdmin = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Missing auth header' })
        }

        const b64Credentials = req.headers.authorization.split(' ')[1]
        const credentials = Buffer.from(b64Credentials, 'base64').toString('ascii');
        const [_username, _password] = credentials.split(':');

        const data = JSON.parse(fs.readFileSync(file_path, 'utf8'))
        const registered_user = data.find(
            user => user.username === _username && user.password === _password)
        
        if (!registered_user.isAdmin)
          return res.status(401).json({ message: "Only admins are allowed" })

        next()
    } catch (error) {
        res.status(500).json({ message: "Internal error, please try again later" })
    }
}