const jwt = require('jsonwebtoken')
const JWT_SEC = process.env.JWT_SECRET
const { User } = require('../models/user')

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
    
    next()
  })
}

exports.isAdmin = async (req, res, next) => {
  
  user = req.user
  
  await User.findOne({
    where: {id: user.id}
  })
    .then(u => {
      if(u.isAdmin){
        next()
      }
      else{
        return res.status(403).json({error:"Only admins allowed"})
      }
    })
    .catch(err => {
      return res.status(500).json(err)
    })
}