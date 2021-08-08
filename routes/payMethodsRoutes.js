const { Router } = require('express')
const router = Router()

const auth = require("../middlewares/auth")
const payMethodsCtrl = require("../controllers/payMethodsController")

// FOR ADMINS TO CREATE NEW PAY METHODS
router.post("/create", [auth.authenticateToken, auth.isAdmin], payMethodsCtrl.createPayMethod)

// FOR ANYONE TO LIST PAY METHODS
router.get("/", [auth.authenticateToken], payMethodsCtrl.listPayMethods)

// FOR ADMINS TO DELETE PAY METHODS
router.delete("/", [auth.authenticateToken, auth.isAdmin], payMethodsCtrl.deletePayMethod)

// FOR ADMINS TO EDIT PAY METHODS
router.put("/", [auth.authenticateToken, auth.isAdmin], payMethodsCtrl.updatePayMethod)

module.exports = router;