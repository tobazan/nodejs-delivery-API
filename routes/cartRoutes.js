// const { Router } = require('express')
// const router = Router()

// const auth = require("../middlewares/auth")
// const cartsCtrl = require("../controllers/cartsController")

// // for users to get their own carts
// router.get("/:userEmail", [auth.basicAuth], cartsCtrl.getCartsByEmail)

// // for admins to get every cart
// router.get("/", [auth.basicAuth, auth.isAdmin], cartsCtrl.getCarts)

// // for users to create a cart
// router.post("/", [auth.basicAuth], cartsCtrl.createCart)

// // for users to add or remove items from cart
// router.put("/:cart_id", [auth.basicAuth], cartsCtrl.updateCartItems)

// // for users to modify delivery address
// router.patch("/deli_address/:cart_id", [auth.basicAuth], cartsCtrl.updateDeliveryAddress)

// // for users to modify payment method
// router.patch("/payment/:cart_id", [auth.basicAuth], cartsCtrl.updatePaymentMethod)

// // for users to confirm a cart
// router.patch("/checkOut/:cart_id", [auth.basicAuth], cartsCtrl.confirmCart)

// // for admins to modify cart status
// router.patch("/:cart_id", [auth.basicAuth, auth.isAdmin], cartsCtrl.updateCartStatus)

// module.exports = router;