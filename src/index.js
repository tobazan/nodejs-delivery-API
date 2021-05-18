const express = require('express')

const app = express()

const usersRoutes = require("./routes/usersRoutes")
const productsRoutes = require("./routes/productsRoutes")
const payMethodsRoutes = require("./routes/payMethodsRoutes")


app.use(express.json());

// Routes
app.use("/api/users", usersRoutes)
app.use("/api/products", productsRoutes)
//app.use("/api/carts", authRoutes)
app.use("/api/payMethods", payMethodsRoutes)

// Home route
app.get('/', (req, res) => {
    res.send('Hola, esto es home')
})

app.listen(8000,
    () => console.log('Server escuchando en puerto 8000'))