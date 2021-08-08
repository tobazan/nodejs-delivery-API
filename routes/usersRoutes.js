const { Router } = require('express')
const router = Router()

const usersCtrl = require("../controllers/usersController")
const auth = require("../middlewares/auth")
const dups = require("../middlewares/checkDups")

// USER REGISTRATION
router.post("/signup", [dups.checkDups], usersCtrl.registerUser)

// USER LOGIN RETURNS AN ACCESS TOKEN
router.post("/login",  usersCtrl.login)

// RETURNS EVERY USER IN DB 
router.get("/all", [auth.authenticateToken, auth.isAdmin], usersCtrl.getUsers)

// RETURNS ONE USER (NOT EXPOSING SENSITIVE DATA)
router.get('/', [auth.authenticateToken], usersCtrl.getUserByEmail)

// RETURNS EVERY ADDRESS FOR A GIVEN USER (email as query param)
router.get('/addresses', [auth.authenticateToken], usersCtrl.getUserAddresses)

// FOR USERS TO ADD AN ADDRESS TO THEIR PROFILE
router.post('/addresses', [auth.authenticateToken], usersCtrl.addAddress)

// FOR ADMINS TO BAN SOME USER
router.patch("/ban", [auth.authenticateToken, auth.isAdmin], usersCtrl.banUserByUsername)

// FOR ADMINS TO RESTORE PERMISSIONS
router.patch("/restore", [auth.authenticateToken, auth.isAdmin], usersCtrl.restoreUserByUsername)

module.exports = router;