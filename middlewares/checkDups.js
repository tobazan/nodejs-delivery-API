const { Op } = require("sequelize")
const { User } = require('../models/user')

exports.checkDups = async (req, res, next) => {
    dup = await User.findOne({
        where: {
            [Op.or]: {
                username: req.body.username,
                email: req.body.email
            }
        }
    })

    if(dup){
        return res.status(409).json({ message: "The user or email already exists" })
    }
    next()
}