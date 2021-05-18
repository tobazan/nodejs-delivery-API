const { Router } = require('express')
const router = Router()

const auth = require("../middlewares/auth")
const payMethodsCtrl = require("../controllers/payMethodsController")

// middleware check if admin
router.post("/create", 
        [auth.basicAuth, auth.isAdmin], 
        payMethodsCtrl.createPayMethod)

router.get("/", 
        [auth.basicAuth, auth.isAdmin], 
        payMethodsCtrl.listPayMethods)

router.delete("/delete/:methodId", 
        [auth.basicAuth, auth.isAdmin], 
        payMethodsCtrl.deletePayMethod)

router.put("/update/:methodId", 
        [auth.basicAuth, auth.isAdmin], 
        payMethodsCtrl.updatePayMethod)

module.exports = router;