const jwt = require('jsonwebtoken')
const JWT_SEC = process.env.JWT_SECRET

exports.authenticateToken = (req, res, next) => {
  
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  
  if (token == null) {
    return res.status(401).json({error:"Null token"})
  }
  
  jwt.verify(token, JWT_SEC, (error, user) => {
    if (error) {
        return res.status(403).json(error)
    }
    req.user = user
    console.log(user)
    next()
  })
}