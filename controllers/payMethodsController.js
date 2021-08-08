const { PayMethod } = require('../models/paymethod')
const {ValidationError} = require('sequelize')

exports.createPayMethod = async (req, res) => {

    await PayMethod.create({
            name: req.body.name,
            isValid: req.body.isValid || true
        })
        .then(p => {
            res.status(201).json({
                pay_method: p,
                message: "Pay method successfully created"
            })
        })
        .catch(err => {
            if(err instanceof ValidationError) {
                res.status(400).json({ msg:"Bad Request", error:err })
            }
            res.status(500).json(err)
        })
}

exports.listPayMethods = async (req, res) => {

    await PayMethod.findAll()
        .then( m => {
            res.status(200).json(m)
        })
        .catch (err => {
            return res.status(500).json(err)
        })
}

exports.deletePayMethod = async (req, res) => {

    await PayMethod.destroy({
        where: { id: req.query.methodId }
        })
        .then(m => {
            res.status(202).json({
                pay_method: m.name,
                message: "Successfully deleted"})
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

exports.updatePayMethod = async (req, res) => {

    await PayMethod.update({ 
        name: req.body.name,
        isValid: req.body.isValid || true
    },{
        where: { id: req.query.methodId }
    })
      .then(m => {
        res.status(200).json({
            pay_method: m.name,
            message:"Successfully updated"})
      })
      .catch(err => {
        res.status(500).json(err)
      })
}