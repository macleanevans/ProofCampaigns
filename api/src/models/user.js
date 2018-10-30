// src / models / user.js
'use strict'

const mongoose = require('mongoose')

// User Collection
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  geo: String, 
  ip: String, 
  industry: String, 
  companySize: String, 
  campaigns: Array
});

// const User = mongoose.model('Users', UserSchema, "Users")
const User = mongoose.model("users", UserSchema, "users")


module.exports = User
