'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = Schema({
  name: String,
  mail: String,
  age: Number,
  description: String,
  password: String,
  username: String
})

module.exports = mongoose.model('User', UserSchema)