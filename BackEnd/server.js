const express = require("express")
const config = require("./src/config/config")
const userRouters = require("./src/routes/usersRouters")
const actividadesRouters = require("./src/routes/actividadesRouters")
const asistenciaRouters = require("./src/routes/asistenciaRouters")
const configRouters = require("./src/routes/configRouters")
const encargadoAlumnosRouters = require("./src/routes/encargadoAlumnosRouters")
const horariosRouters = require("./src/routes/horariosRouters")
const materiaProfesoresRouters = require("./src/routes/materiaProfesoresRouters")
const materiasRouters = require("./src/routes/materiasRouters")
const mensajesRouters = require("./src/routes/mensajesRouters")
const notasRouters = require("./src/routes/notasRouters")
const rolesRouters = require("./src/routes/rolesRouters")
const seccionAlumnosRouters = require("./src/routes/seccionAlumnosRouters")
const seccionesRouters = require("./src/routes/seccionesRouters")
const seccionProfesoresRouters = require("./src/routes/seccionProfesoresRouters")

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
app.use(`/users`, userRouters)
app.use(`/actividades`, actividadesRouters)
//app.use(`/asistencia`, asistenciaRouters)
//app.use(`/config`, configRouters)
app.use(`/encargadoAlumnos`, encargadoAlumnosRouters)
app.use(`/horarios`, horariosRouters)
app.use(`/materiaProfesores`, materiaProfesoresRouters)
app.use(`/materias`, materiasRouters)
app.use(`/mensajes`, mensajesRouters)
app.use(`/notas`, notasRouters)
app.use(`/roles`, rolesRouters)
app.use(`/seccionAlumnos`, seccionAlumnosRouters)
app.use(`/secciones`, seccionesRouters)
app.use(`/seccionProfesores`, seccionProfesoresRouters)

app.listen(PORT, function(){
    console.log(`La app esta escuchando por http://localhost:${PORT}`)
})