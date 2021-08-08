const express = require('express')
const { db } = require('./models/index')
require('./models/associations')

const helmet = require('helmet')

require('dotenv').config()
const port = process.env.PORT || 8000

const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Deli API",
			version: "1.0.2",
			description: "A food ecom simple Node JS API",
		},
		servers: [
			{
				url: `http://localhost:${port}`,
			},
		],
	},
	apis: ["./docs/*.js"],
};

const specs = swaggerJsDoc(options);

const usersRoutes = require("./routes/usersRoutes")
const productsRoutes = require("./routes/productsRoutes")
const payMethodsRoutes = require("./routes/payMethodsRoutes")
// const cartsRoutes = require("./routes/cartRoutes")

const app = express()

// Middlewares
app.use(express.json())
app.use(helmet())

// Routes
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use("/api/users", usersRoutes)
app.use("/api/products", productsRoutes)
app.use("/api/payMethods", payMethodsRoutes)
// app.use("/api/carts", cartsRoutes)


app.listen(port, async () => {
	console.log(`Server escuchando en puerto http://localhost:${port}/api-docs`)
	
	try {
		
		await db.authenticate()
		console.log('Conectado a BD exitosamente')

	}catch (error) {
		console.error('No pudo conectarse a la BD: ', error)
	}
})

module.exports = app