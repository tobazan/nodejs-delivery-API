const { Router } = require('express')
const router = Router()

const verifySignup = require("../middlewares/verifySignup")
const auth = require("../middlewares/auth")
const usersCtrl = require("../controllers/usersController")

// middleware check for duplicate on email and username
router.post("/signup", [verifySignup.checkDups], usersCtrl.createUser)

// middleware check for credentials
router.post("/login", [auth.basicAuth], usersCtrl.login)

// list of all users registered
router.get("/", [auth.basicAuth], usersCtrl.getUsers)

// anyone gets response (sensitive data is not exposed)
router.get("/:userEmail", [auth.basicAuth], usersCtrl.getUserByEmail)

// only the user can update his own data
router.patch("/modAddres/:username", [auth.basicAuth], usersCtrl.updateAddress)

// only admin can delete
router.delete("/delete/:userId", [auth.basicAuth, auth.isAdmin], usersCtrl.deleteUserById)

module.exports = router;
