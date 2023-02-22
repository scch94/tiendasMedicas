const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routes=require('./src/routes/index.routes')
const cors =require('cors')
//creamos el servidor con exprees
var app=express();
app.use(cors())
app.use(logger("dev"));
app.use(express.json())
// app.use(fileupload({
//     //archivos temporales que no se guarden en memoria si no en una carpeta luego la enviaremos a la nube
//     useTempFiles: true,
//     tempFileDir:'./files'
// }))
//routes
// app.use(routes)

// app.use(cors());
// //el logger de morgan permite replicar en consola los codigos respuesta de las solicitudes que aran en tu back
// app.use(logger("dev"));
// //el express.json() permite recivir datos json desde una solicitud por el protocolo http y el otro prmite recivir formularios con archivos
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/",routes)



module.exports = app;