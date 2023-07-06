//Express: su objetivo es la de poder crear un servidor web en un puerto cualqiera
// creamos una instancia de express, es basicamente un objeto ;

const express = require('express');

//     ---- MODULOS ----     //

const logger = require("morgan");
const compression =require("compression");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

//     ---- Rutas ----     //

const pacientes = require ('./routes/pacientes')
const login = require ('./routes/login')
const dentista = require ('./routes/dentista')
const historial = require ('./routes/historial')
const turno = require ('./routes/turno')
const join = require ('./routes/join')
// const agenda = require ('./routes/agenda')

const app = express();

app.use(bodyParser.json());
app.use(compression());  // de aca para abajo toda la app tendra la compresion de paquetes
app.use(logger("dev")); // activo todos los logs en modo desarrollo (dev)
app.use(cors())



//     ---- PUERTOS ----      //
//  localhost:puerto/ definimos el puerto

app.listen(8000)

//     ---- basicamente nuestro servidor web va a estar levantado ----     //

app.use("/pacientes", pacientes)
app.use("/dentista", dentista)
app.use("/historial", historial)
app.use("/turno", turno)
app.use("/login", login)
app.use("/join", join)
