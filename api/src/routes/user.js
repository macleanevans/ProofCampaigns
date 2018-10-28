// src / routes / user.js
'use strict'

// Imports
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const config = require('./../config')
let authMiddleware = require('./middlewares/auth')
let User = require('../models/user')

// Common Routes
let userRoutes = express.Router()

// Login
userRoutes.post('/login', authMiddleware, (request, response) => {
  let responseData = {
    success: false,
    data: {},
    errors: []
  }

  if (request.body.username) {
    User.findOne({username: request.body.username}, (error, document) => {

      if (error) {
        responseData.errors.push({type: 'critical', message: error})

        response.json(responseData)
      } else {
        if (!document) {
          responseData.errors.push({type: 'warning', message: 'No user exists with this username.'})

          response.json(responseData)
        } else {
          bcrypt.compare(request.body.password, document.password, function (hashError, hashPasswordCheck) {
            if (!hashError) {
              if (hashPasswordCheck) {
                responseData.data.token = jwt.sign(document._doc, config.secret)
                responseData.success = true
              } else {
                responseData.errors.push({type: 'critical', message: 'The password is incorrect.'})
              }

              response.json(responseData)
            } else {
              responseData.errors.push({type: 'critical', message: 'Please try again.'})

              response.json(responseData)
            }
          })
        }
      }
    })
  } else {
    responseData.errors.push({type: 'critical', message: 'Username not provided.'})

    response.json(responseData)
  }
})


// Export
module.exports = userRoutes
