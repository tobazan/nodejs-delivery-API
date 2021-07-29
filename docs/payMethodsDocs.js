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
*   name: PayMethods
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
*       tags: [PayMethods]
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

/**
* @swagger
* paths:
*   /api/payMethods/:
*     get:
*       security:
*        - basicAuth: []
*       summary: Lists every payment method
*       tags: [PayMethods]
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
*   /api/payMethods/:
*     get:
*       security:
*        - basicAuth: []
*       summary: Lists every payment method
*       tags: [PayMethods]
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
*   /api/payMethods/{methodId}:
*     delete:
*       security:
*        - basicAuth: []
*       summary: Deletes specified payment method
*       tags: [PayMethods]
*       parameters:
*        - in: query
*          name: methodId
*          schema:
*           type: string
*          description: The id of the payment method to be deleted
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
*   /api/payMethods/{methodId}:
*     put:
*       security:
*        - basicAuth: []
*       summary: Modifies the name and/or validity of the specified payment method
*       tags: [PayMethods]
*       parameters:
*        - in: query
*          name: methodId
*          schema:
*           type: string
*          description: The id of the payment method to be updated
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               properties:
*                 payMethod: 
*                   description: Payment method's name
*                   type: string
*                 isValid:
*                   description: Is this method currently accepted?
*                   type: boolean
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