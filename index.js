'use strict'

var mongoose = require('mongoose')
var app = require('./app')
var port = 3700

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://javier123:javier123@cluster0.vshzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log('Coneccion exitosa')
    app.listen(port, () => {
      console.log('Servidor corriendo correctamente en -> localhost:3700')
    })
  })
  .catch(err => console.log(err))