const { Router } = require('express')
const router = Router()

const auth = require("../middlewares/auth")
const payMethodsCtrl = require("../controllers/payMethodsController")
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     basicAuth:
 *      type: http
 *      description: b64Auth
 *      scheme: basic
 *      in: header
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PayMethod:
 *       type: object
 *       required:
 *         - payMethod
 *         - isValid
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id
 *         payMethod:
 *           type: string
 *           description: The payment method name
 *         isValid:
 *           type: boolean
 *           description: true if it's currently accepted
 *       example:
 *         id: 3
 *         payMethod: Mastercard ICBC
 *         isValid: true
 */

 /**
  * @swagger
  * tags:
  *   name: PayMethod
  *   description: Payment methods created by admin
  */

/**
 * @swagger
 * paths:
 *   /api/payMethods/create:
 *     post:
 *       security:
 *        - basicAuth: []
 *       summary: Creates a new payment method
 *       tags: [PayMethod]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PayMethod'
 *       responses:
 *         201:
 *           description: Successfully created
 *         401:
 *           description: Unauthorized
 *         409:
 *           description: Already exists
 *         400:
 *           description: Bad request
 */

router.post("/create", [auth.basicAuth, auth.isAdmin], payMethodsCtrl.createPayMethod)

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