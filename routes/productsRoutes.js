const { Router } = require('express')
const router = Router()

const auth = require("../middlewares/auth")
const productsCtrl = require("../controllers/productsController")

// ANYONE CAN GET PRODUCTS CATALOGUE (cache layer)
router.get("/", [auth.authenticateToken], productsCtrl.listProducts)

// ADMINS CAN ADD NEW PRODUCTS
router.post("/", [auth.authenticateToken, auth.isAdmin], productsCtrl.createProduct)

// ADMINS CAN REMOVE PRODUCTS (prodId query param)
router.delete("/", [auth.authenticateToken, auth.isAdmin], productsCtrl.deleteProduct)

// ADMINS CAN EDIT PRODUCTS (prodId query param)
router.put("/", [auth.authenticateToken, auth.isAdmin], productsCtrl.updateProduct)

module.exports = router;
