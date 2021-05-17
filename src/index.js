const express = require('express')

const app = express()

const usersRoutes = require("./routes/usersRoutes")
const productRoutes = require("./routes/productsRoutes")
//import authRoutes from "./routes/auth.routes";


app.use(express.json());

// Routes
app.use("/api/users", usersRoutes)
app.use("/api/products", productRoutes)
//app.use("/api/carts", authRoutes)
//app.use("/api/payMethods", authRoutes)

// Home route
app.get('/', (req, res) => {
    res.send('Hola, esto es home')
})

app.listen(8000,
    () => console.log('Server escuchando en puerto 8000'))