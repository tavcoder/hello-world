'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar archivos de rutas
var project_routes = require('./routes/project');

//middlewares
app.use(bodyParser.urlencoded({extende:false}));
app.use(bodyParser.json());

//cors

//rutas
app.use('/api', project_routes);

//exportar el módulo
module.exports = app;