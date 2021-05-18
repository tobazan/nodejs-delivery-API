const { Router } = require('express')
const router = Router()

const auth = require("../middlewares/auth")
const productsCtrl = require("../controllers/productsController")

// middleware check if admin
router.post("/create", [auth.basicAuth, auth.isAdmin], productsCtrl.createProduct)

module.exports = router;
