const fs = require('fs')
const file_path = './src/mocks/users_mock.json'

exports.checkDups = (req, res, next) => {
    try {
        const newUser = req.body

        let data = JSON.parse(fs.readFileSync(file_path, 'utf8'))

        const dup = data.find(user => user.user === newUser.user || user.email === newUser.email)
        
        if (dup)
          return res.status(400).json({ message: "The user or email already exists" })

        next()
    } catch (error) {
        res.status(500).json({ message: "Internal error, please try again later" })
    }
}

