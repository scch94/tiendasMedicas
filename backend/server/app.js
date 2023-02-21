const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// creamos el servidor con exprees
var app=express();
//el logger de morgan permite replicar en consola los codigos respuesta de las solicitudes que aran en tu back
app.use(logger("dev"));
//el express.json() permite recivir datos json desde una solicitud por el protocolo http y el otro prmite recivir formularios con archivos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(function(req,res,next){
    next(createError(404));
})

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;