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

/**
* @swagger
* paths:
*   /api/carts:
*     get:
*       security:
*        - basicAuth: []
*       summary: Gets every existing cart
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
*          description: ID of the cart to be updated
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