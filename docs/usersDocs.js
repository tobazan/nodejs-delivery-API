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
* components:
*   schemas:
*     User:
*       type: object
*       required:
*         - username
*         - password
*         - email
*         - name
*         - phone
*       properties:
*         id:
*           type: integer
*         username:
*           type: string
*         password:
*           type: string
*         email:
*           type: string
*         name:
*           type: string
*         phone:
*           type: string
*         isAdmin:
*           type: boolean
*           default: false
*         isActive:
*           type: boolean
*           default: true
*       example:
*         id: 41
*         username: kwozencroft14
*         password: A8w5Wf
*         email: kwozencroft14@dailymotion.com
*         name: Kyle Wozencroft
*         phone: +86-727-335-3913
*         isActive: true
*         isAdmin: false
*/

/**
* @swagger
* tags:
*   name: Users
*   description: Endpoints for signing up, loginng, getting users profile and editing addresses
*/

/**
* @swagger
* paths:
*   /api/users/signup:
*     post:
*       summary: Creates a new user
*       tags: [Users]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/User'
*       responses:
*         201:
*           description: User registered
*         409:
*           description: Username/Email already exists
*         400:
*           description: Bad request
*/

/**
* @swagger
* paths:
*   /api/users/login:
*     post:
*       summary: Login posting basic credentials
*       tags: [Users]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               properties:
*                 username: 
*                   type: string
*                 password: 
*                   type: string
*       responses:
*         200:
*           description: Success
*         401:
*           description: Invalid credentials
*         400:
*           description: Bad request
*/

/**
* @swagger
* paths:
*   /api/users/all:
*     get:
*       security:
*        - bearerAuth: []
*       summary: Lists every user (only admins authorized)
*       tags: [Users]
*       responses:
*         200:
*           description: Success,
*         401:
*           description: Unauthorized
*         400:
*           description: Bad request
*/

/**
* @swagger
* paths:
*   /api/users/:
*     get:
*       security:
*        - bearerAuth: []
*       summary: Gets user profile (does not expose sensitive data)
*       tags: [Users]
*       parameters:
*        - in: query
*          name: userEmail
*          schema:
*           type: string
*           description: User email
*       responses:
*         200:
*           description: Success,
*         401:
*           description: Unauthorized
*         409:
*           description: Not found
*         400:
*           description: Bad request
*/