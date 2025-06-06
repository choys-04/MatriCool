const express = require("express")
const config = require("./src/config/config")
const userRouter = require("./src/routes/usersRoutes")
const dataUserRouter = require("./src/routes/dataUsersRoutes")
const app = express()

const { sequelize } = require("./src/database/models/index")

//Setting
const PORT = config.aport

//Middleware
//Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended:false}))

//Rutas
app.get("/", (req, res) => res.json({ foo: "bar" }));
app.use(`/users`, userRouter)
app.use(`/dataUsers`, dataUserRouter)

app.listen(PORT, function(){
    console.log(`La app esta escuchando por http://localhost:${PORT}`)

    sequelize.sync({force: false}).then(()=>{
        console.log("La conexion a la db fue exitosa.")
    })
})