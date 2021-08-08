const { User } = require('../models/user')
const { Address } = require('../models/address')

var bcrypt = require("bcrypt")
var jwt = require("jsonwebtoken")
const JWT_SEC = process.env.JWT_SECRET

exports.registerUser = async (req, res) => {

    await User.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8),
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone
        })
        .then(user => {
            res.status(201).json({
                user: user.username,
                message: "User registered successfully"
            })
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

exports.login = async (req, res) => {
    
    await User.findOne({
      where: {
        username: req.body.username
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User not found" })
        }
  
        let validPassword = bcrypt.compareSync(
          req.body.password,
          user.password
        )
  
        if (!validPassword) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid password"
          })
        }
  
        let token = jwt.sign({ id: user.id },
                            JWT_SEC,
                            {expiresIn: '8h'})
  
        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            accessToken: token})
    
    }).catch(err => {
        res.status(500).send(err)
    })
}

exports.getUsers = async (req, res) => {
    
    await User.findAll().then(
        users => {res.status(200).json(users) }
    ).catch (err => {
        return res.status(400).json(err)
    })
}

exports.getUserByEmail = async (req, res) => {

    await User.findOne({
        where: {email: req.query.userEmail}
    }).then(u => {
        res.status(200).json({
            username: u.username,
            email: u.email,
            name: u.name
        })
    }).catch(() => {
        res.status(409).json({
            message: 'User does not exists'
        })
    })
}

exports.getUserAddresses = async (req, res) => {
    
    await Address.findAll({
        include: [{
            model: User,
            where: {email: req.query.userEmail}
        }]
    }).then(a => {
        res.status(200).json(a) 
    }).catch (err => {
        res.status(400).json(err)
    })
}   

exports.addAddress = async (req, res) => {
    
    await Address.create({
        street: req.body.street,
        number: req.body.number,
        user_id: req.user.id
    }).then(a => {
        res.status(201).json({
            msg:'New address added successfully',
            address: `${a.street} ${a.number}`
        })
    }).catch (err => {
        res.status(500).json(err)
    })
}

exports.banUserByUsername = async (req, res) => {
    console.log(req.query.username)
    await User.update({ isActive: false }, {
        where: { username: req.query.username }
    })
      .then(u => {
        res.status(200).json({
            user: u,
            message:"Successfully banned"})
      })
      .catch(err => {
        res.status(500).json(err)
      })
}

exports.restoreUserByUsername = async (req, res) => {
    await User.update({ isActive: true }, {
        where: { username: req.query.username }
    })
      .then(u => {
        res.status(200).json({
            user: u,
            message:"Permissions restored"})
      })
      .catch(err => {
        res.status(500).json(err)
      })
}
