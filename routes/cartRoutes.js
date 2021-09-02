const { Router } = require('express')
const router = Router()

const auth = require("../middlewares/auth")
const cartsCtrl = require("../controllers/cartsController")

// for users to get their own carts (userEmail as query param)
router.get("/", [auth.authenticateToken], cartsCtrl.getCartsByEmail)

// for admins to get every cart
router.get("/all", [auth.authenticateToken, auth.isAdmin], cartsCtrl.getCarts)

// for users to create a cart
router.post("/", [auth.authenticateToken], cartsCtrl.createCart)

// for users to add or remove items from cart (param cart_id)
router.put("/", [auth.authenticateToken], cartsCtrl.updateCartItems)

// for users to confirm a cart (param cart_id)
router.patch("/checkOut/", [auth.authenticateToken], cartsCtrl.confirmCart)

// for admins to modify cart status (param cart_id)
router.patch("/", [auth.authenticateToken, auth.isAdmin], cartsCtrl.updateCartStatus)

// for users to modify delivery address (param cart_id and addres_id)
router.patch("/deli_address", [auth.authenticateToken], cartsCtrl.updateDeliveryAddress)

// for users to modify payment method (param cart_id and payMethod)
router.patch("/payment", [auth.authenticateToken], cartsCtrl.updatePaymentMethod)

module.exports = router;