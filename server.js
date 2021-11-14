const express = require('express')
const { db } = require('./models/index')
require('./models/associations')

const helmet = require('helmet')
const morgan = require('morgan')
//const cors = require('cors')

const path = require('path'); 
require('dotenv').config({ path: path.join(__dirname, '.env') });
//require('dotenv').config()
const port = process.env.PORT || 8000

// const swaggerUI = require("swagger-ui-express")
// const swaggerJsDoc = require("swagger-jsdoc")

// const options = {
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
//app.use(cors()) - to avoid CORS issue on Swagger Client


// Routes
// -----------------------------------------
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use("/api/users", usersRoutes)
app.use("/api/products", productsRoutes)
app.use("/api/payMethods", payMethodsRoutes)
app.use("/api/carts", cartsRoutes)


server = app.listen(port, async () => {

	console.log(`DELI API - modo ${process.env.NODE_ENV || 'development'}\n--------------------\n`)
	console.log(`Server escuchando en --> http://localhost:${port}/api`)
	console.log(`A traves del ALB --> http://www.mebdeliap.cf/api`)
	console.log(`Swagger UI en --> https://dbpsbx2e83s2m.cloudfront.net/\n`)
	try {
		await db.authenticate()
		console.log('Conectado a BD exitosamente')
	} catch (error) {
		console.error('No pudo conectarse a la BD: ', error)
	}
})

// to avoid 502 Bad Gateway - ELB -> nginx -> server
server.keepAliveTimeout = 65000
server.headersTimeout = 65000

module.exports = app
