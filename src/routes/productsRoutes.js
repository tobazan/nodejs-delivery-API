const { Router } = require('express')
const router = Router()

const auth = require("../middlewares/auth")
const productsCtrl = require("../controllers/productsController")

// middleware check if admin
router.post("/create", [auth.isAdmin, auth.basicAuth], productsCtrl.createProduct)

module.exports = router;
