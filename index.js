'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Portfolio')
    .then(() => {
        console.log("conexión a la base de datos establecida con éxito...");
        //creación del servidor
        app.listen(port, () => {
            console.log ("Servidor corriendo correctamente en el puerto 3700...");

        })
    })
    .catch(err => console.log(err));