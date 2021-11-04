const express = require('express')
const { db } = require('./models/index')
require('./models/associations')

const helmet = require('helmet')
const morgan = require('morgan')

require('dotenv').config()
const port = process.env.PORT || 8000

// const swaggerUI = require("swagger-ui-express")
// const swaggerJsDoc = require("swagger-jsdoc")

// const options = {
// 	definition: {
// 		openapi: "3.0.0",
// 		info: {
// 			title: "Deli API",
// 			version: "1.0.2",
// 			description: "A food ecom simple Node JS API",
// 		},
// 		servers: [
// 			{
// 				url: `http://localhost:5000`,
// 			},
// 		],
// 	},
// 	apis: ["./docs/*.js"],
// };

// const specs = swaggerJsDoc(options);

const usersRoutes = require("./routes/usersRoutes")
const productsRoutes = require("./routes/productsRoutes")
const payMethodsRoutes = require("./routes/payMethodsRoutes")
const cartsRoutes = require("./routes/cartRoutes")

const app = express()

// Middlewares
// -----------------------------------------
app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))

// Routes
// -----------------------------------------
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use("/api/users", usersRoutes)
app.use("/api/products", productsRoutes)
app.use("/api/payMethods", payMethodsRoutes)
app.use("/api/carts", cartsRoutes)


server = app.listen(port, async () => {
	
		console.log(`Server escuchando en puerto http://localhost:${port}/api`)
		console.log(`Swagger UI en http://localhost:5000/api-docs`)
		try {
			await db.authenticate()
			console.log('Conectado a BD exitosamente')
		} catch (error) {
			console.error('No pudo conectarse a la BD: ', error)}
		})

// to avoid 502 Bad Gateway given ELB -> nginx -> server
server.keepAliveTimeout = 65000
server.headersTimeout = 65000

module.exports = app