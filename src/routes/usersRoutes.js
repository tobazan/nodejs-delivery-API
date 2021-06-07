const { Router } = require('express')
const router = Router()

const verifySignup = require("../middlewares/verifySignup")
const auth = require("../middlewares/auth")
const usersCtrl = require("../controllers/usersController")

// middleware check for duplicate on email and username
router.post("/signup", [verifySignup.checkDups], usersCtrl.createUser)

// middleware check for credentials
router.post("/login", usersCtrl.login)

// list of all users registered
router.get("/", [auth.basicAuth, auth.isAdmin], usersCtrl.getUsers)

// anyone gets response (sensitive data is not exposed)
router.get("/:userEmail", [auth.basicAuth], usersCtrl.getUserByEmail)

module.exports = router;
