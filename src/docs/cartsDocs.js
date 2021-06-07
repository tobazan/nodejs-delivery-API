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
* components:
*   schemas:
*     Cart:
*       type: object
*       properties:
*         id:
*           type: integer
*         user:
*           type: object
*           oneOf: 
*             - $ref: '#/components/schemas/User'
*         products:
*           type: array
*           items: 
*             oneOf:
*               - $ref: '#/components/schemas/Product'
*         total_price:
*           type: float      
*         patMethod:
*           type: object
*           oneOf: 
*             - $ref: '#/components/schemas/PayMethod'
*         delivery_address:
*           type: string
*         status:
*           type: string
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

/**
* @swagger
* paths:
*   /api/carts:
*     get:
*       security:
*        - basicAuth: []
*       summary: Gets every existing cart (only admins authorized)
*       tags: [Carts]
*       responses:
*         200:
*           description: Success
*         401:
*           description: Unauthorized
*         400:
*           description: Bad request
*/

/**
* @swagger
* paths:
*   /api/carts/:
*     post:
*       security:
*        - basicAuth: []
*       summary: Users create a new cart selecting products
*       tags: [Carts]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               properties:
*                 products:
*                   type: array
*                   items:
*                     properties:
*                       product_id:
*                         type: integer
*                         description: product id
*                       quantity:
*                         type: integer
*                         description: how many units of this product
*       responses:
*         201:
*           description: Success
*         401:
*           description: Unauthorized
*         400:
*           description: Bad request
*/

/**
* @swagger
* paths:
*   /api/carts/{cart_id}:
*     put:
*       security:
*        - basicAuth: []
*       summary: Add or remove items from cart (only if status is OPEN)
*       tags: [Carts]
*       parameters:
*        - in: query
*          name: cart_id
*          schema:
*           type: integer
*           description: ID of the cart to be updated
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               properties:
*                 products:
*                   type: array
*                   items:
*                     properties:
*                       product_id:
*                         type: integer
*                         description: product id
*                       quantity:
*                         type: integer
*                         description: how many units of this product
*       responses:
*         201:
*           description: Success
*         401:
*           description: Unauthorized
*         400:
*           description: Bad request
*/

/**
* @swagger
* paths:
*   /api/carts/checkOut/{cart_id}:
*     patch:
*       security:
*        - basicAuth: []
*       summary: For users to confirm a cart / status --> confirmed
*       tags: [Carts]
*       parameters:
*        - in: query
*          name: cart_id
*          schema:
*           type: integer
*           description: ID of the cart to be updated
*       responses:
*         202:
*           description: Success
*         401:
*           description: Cart already confirmed
*         400:
*           description: Bad request
*         409:
*           description: Not found
*/

/**
* @swagger
* paths:
*   /api/carts/deli_address/{cart_id}:
*     patch:
*       security:
*        - basicAuth: []
*       summary: For users to modify delivery address 
*       tags: [Carts]
*       parameters:
*        - in: query
*          name: cart_id
*          schema:
*           type: integer
*           description: ID of the cart to be updated
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               properties:
*                 address:
*                   type: string
*       responses:
*         202:
*           description: Success
*         401:
*           description: Unauthorized
*         400:
*           description: Bad request
*         409:
*           description: Not found
*/

/**
* @swagger
* paths:
*   /api/carts/payment/{cart_id}:
*     patch:
*       security:
*        - basicAuth: []
*       summary: For users to change payment method
*       tags: [Carts]
*       parameters:
*        - in: query
*          name: cart_id
*          schema:
*           type: integer
*           description: ID of the cart to be updated
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               properties:
*                 payMethod_id:
*                   type: integer
*       responses:
*         202:
*           description: Success
*         401:
*           description: Unauthorized
*         400:
*           description: Bad request
*         409:
*           description: Not found
*/

/**
* @swagger
* paths:
*   /api/carts/{cart_id}:
*     patch:
*       security:
*        - basicAuth: []
*       summary: For admins to modify a cart status
*       tags: [Carts]
*       parameters:
*        - in: query
*          name: cart_id
*          schema:
*           type: integer
*           description: ID of the cart to be updated
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               properties:
*                 status:
*                   type: string
*       responses:
*         202:
*           description: Success
*         401:
*           description: Unauthorized
*         400:
*           description: Bad request
*         409:
*           description: Not found
*/