'use strict'

var express = require('express')
var bodyParser = require('body-parser')

var app = express()

//archivos de rutas
var project_routes = require('./routes/project')
var user_routes = require('./routes/user')
var service_routes = require('./routes/service')
var article_routes = require('./routes/article')
var category_routes = require('./routes/category')

//midlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//CORDS
app.use((req, res, next)=>{
  res.header("*", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//rutas
app.use('/api/', project_routes)
app.use('/api/', user_routes)
app.use('/api/', service_routes)
app.use('/api/', article_routes)
app.use('/api/', category_routes)

//exportar
module.exports = app