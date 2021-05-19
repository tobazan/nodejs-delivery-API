const express = require('express')

const port = process.env.PORT || 8000

const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Deli API",
			version: "1.0.0",
			description: "A food ecom simple Node JS API",
		},
		servers: [
			{
				url: `http://localhost:${port}`,
			},
		],
	},
	apis: ["src/routes/*.js"],
};

const specs = swaggerJsDoc(options);

const usersRoutes = require("./routes/usersRoutes")
const productsRoutes = require("./routes/productsRoutes")
const payMethodsRoutes = require("./routes/payMethodsRoutes")

const app = express()
app.use(express.json())
// Routes
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use("/api/users", usersRoutes)
app.use("/api/products", productsRoutes)
//app.use("/api/carts", authRoutes)
app.use("/api/payMethods", payMethodsRoutes)

app.listen(port,
    () => console.log(`Server escuchando en puerto ${port}`))