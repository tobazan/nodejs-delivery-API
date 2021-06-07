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
*     Product:
*       type: object
*       required:
*         - product
*         - price
*       properties:
*         id:
*           type: integer
*           description: The auto-generated id
*         product:
*           type: string
*           description: Product name
*         price:
*           type: float
*           description: Unit price
*         image:
*           type: str
*           description: URL for product image
*       example:
*         id: 3
*         product: Salmon Steak - Cohoe 12 Oz
*         price: 655.32
*         image: https://drive.google.com/file/d/1O5I1DMIh_1DQgh-fLedDzF3amHipl_Ya/view?usp=sharing
*/

/**
* @swagger
* tags:
*   name: Products
*   description: Products endpoints for admins - GET method is for users too
*/

/**
* @swagger
* paths:
*   /api/products:
*     post:
*       security:
*        - basicAuth: []
*       summary: Creates a new product
*       tags: [Products]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Product'
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

/**
* @swagger
* paths:
*   /api/products/:
*     get:
*       security:
*        - basicAuth: []
*       summary: Lists every product
*       tags: [Products]
*       responses:
*         200:
*           description: Success,
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/PayMethod'
*         401:
*           description: Unauthorized
*         400:
*           description: Bad request
*/

/**
* @swagger
* paths:
*   /api/products/{prodId}:
*     delete:
*       security:
*        - basicAuth: []
*       summary: Deletes specified product
*       tags: [Products]
*       parameters:
*        - in: query
*          name: prodId
*          schema:
*           type: string
*          description: The id of the product to be deleted
*       responses:
*         202:
*           description: Successfull deletion
*         401:
*           description: Unauthorized
*         409:
*           description: Method does not exists
*         400:
*           description: Bad request
*/

/**
* @swagger
* paths:
*   /api/products/{prodId}:
*     put:
*       security:
*        - basicAuth: []
*       summary: Modifies the name, price and/or image URL of the specified product
*       tags: [Products]
*       parameters:
*        - in: query
*          name: prodId
*          schema:
*           type: string
*          description: The id of the product to be updated
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Product'
*       responses:
*         202:
*           description: Successfully updated
*         401:
*           description: Unauthorized
*         409:
*           description: Method does not exists
*         400:
*           description: Bad request
*/