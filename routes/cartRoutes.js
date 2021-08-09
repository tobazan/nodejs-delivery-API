const { Router } = require('express')
const router = Router()

const auth = require("../middlewares/auth")
const cartsCtrl = require("../controllers/cartsController")

// for users to get their own carts (email as query param)
router.get("/", [auth.authenticateToken], cartsCtrl.getCartsByEmail)

// for admins to get every cart
router.get("/all", [auth.authenticateToken, auth.isAdmin], cartsCtrl.getCarts)

// // for users to create a cart
// router.post("/", [auth.authenticateToken], cartsCtrl.createCart)

// // for users to add or remove items from cart
// router.put("/:cart_id", [auth.authenticateToken], cartsCtrl.updateCartItems)

// // for users to modify delivery address
// router.patch("/deli_address/:cart_id", [auth.authenticateToken], cartsCtrl.updateDeliveryAddress)

// // for users to modify payment method
// router.patch("/payment/:cart_id", [auth.authenticateToken], cartsCtrl.updatePaymentMethod)

// // for users to confirm a cart
// router.patch("/checkOut/:cart_id", [auth.authenticateToken], cartsCtrl.confirmCart)

// // for admins to modify cart status
// router.patch("/:cart_id", [auth.authenticateToken, auth.isAdmin], cartsCtrl.updateCartStatus)

module.exports = router;