const { Router } = require('express')
const router = Router()

const usersCtrl = require("../controllers/usersController")
const auth = require("../middlewares/auth")
const dups = require("../middlewares/checkDups")

router.post("/signup", [dups.checkDups], usersCtrl.registerUser)

router.post("/login",  usersCtrl.login)

router.get("/all", [auth.authenticateToken], usersCtrl.getUsers)

router.get('/', [auth.authenticateToken], usersCtrl.getUserByEmail)

router.get('/addresses', [auth.authenticateToken], usersCtrl.getUserAddresses)

router.post('/addresses', [auth.authenticateToken], usersCtrl.addAddress)

module.exports = router;