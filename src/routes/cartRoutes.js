const { Router } = require('express')
const router = Router()

const auth = require("../middlewares/auth")
const cartsCtrl = require("../controllers/cartsController")

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
  * tags:
  *   name: Carts
  *   description: Every cart ever created
  */
/**
 * @swagger
 * paths:
 *   /api/carts/{userEmail}:
 *     get:
 *       security:
 *        - basicAuth: []
 *       summary: Gets every cart from a given user
 *       tags: [Carts]
 *       parameters:
 *        - in: query
 *          name: userEmail
 *          schema:
 *           type: string
 *          description: User requesting all his/her carts
 *       responses:
 *         200:
 *           description: Success
 *         401:
 *           description: Unauthorized
 *         400:
 *           description: Bad request
 */
router.get("/:userEmail", [auth.basicAuth], cartsCtrl.getCartsByEmail)

// router.post("/create", [auth.basicAuth], cartsCtrl.createPayMethod)

// router.delete("/delete/:methodId", 
//         [auth.basicAuth], 
//         cartsCtrl.)

// router.put("/update/:methodId", 
//         [auth.basicAuth], 
//         cartsCtrl.)

module.exports = router;