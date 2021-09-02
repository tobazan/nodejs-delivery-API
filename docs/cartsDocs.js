/**
* @swagger
* components:
*   securitySchemes:
*     bearerAuth:
*      type: http
*      scheme: bearer
*      bearerFormat: JWT
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
*         user_id:
*           type: integer
*         address_id:
*           type: integer
*         payMethod_id:
*           type: integer
*         total_price:
*           type: float      
*         status:
*           type: string
*/

/**
* @swagger
* components:
*   schemas:
*     CartItem:
*       type: object
*       properties:
*         id:
*           type: integer
*         cart_id:
*           type: integer
*         product_id:
*           type: integer
*         quantity:
*           type: integer
*         unit_price:
*           type: float  
*         total_price:
*           type: float
*/

/**
* @swagger
* paths:
*   /api/carts/{userEmail}:
*     get:
*       security:
*        - bearerAuth: []
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
*   /api/carts/all:
*     get:
*       security:
*        - bearerAuth: []
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
*        - bearerAuth: []
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
*                       price:
*                         type: number
*                         description: current price of a single unit 
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
*        - bearerAuth: []
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
*                       price:
*                         type: number
*                         description: current price of a single unit 
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
*        - bearerAuth: []
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
*   /api/carts/deli_address:
*     patch:
*       security:
*        - bearerAuth: []
*       summary: For users to modify delivery address 
*       tags: [Carts]
*       parameters:
*        - in: query
*          name: cart_id
*          schema:
*           type: integer
*           description: ID of the cart to be updated
*        - in: query
*          name: address_id
*          schema:
*           type: integer
*           description: ID of the address to be updated
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
*   /api/carts/payment:
*     patch:
*       security:
*        - bearerAuth: []
*       summary: For users to change payment method
*       tags: [Carts]
*       parameters:
*        - in: query
*          name: cart_id
*          schema:
*           type: integer
*           description: ID of the cart to be updated
*        - in: query
*          name: payMethod_id
*          schema:
*           type: integer
*           description: ID of the chosen payment method
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
*        - bearerAuth: []
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