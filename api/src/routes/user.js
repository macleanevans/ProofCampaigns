// src / routes / user.js
'use strict'

// Imports
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const config = require('./../config')
let authMiddleware = require('./middlewares/auth')
let User = require('../models/user');

//Helpers
const Queries = require('../utils/index').Queries;

// Common Routes
let userRoutes = express.Router()

// Login
userRoutes.post('/login', authMiddleware, (request, response) => {
  Queries.findUser(request)
    .then((responseData) => response.json(responseData))
    .catch(err => {
      console.log('error running login --->', error);
    });
})

// Login
userRoutes.put('/updateCampaignList', authMiddleware, (request, response) => {
  Queries.updateUserCampaigns(request)
    .then((responseData) => response.json(responseData))
    .catch(error => {
      console.log('error --->', error);
  });
})


// Export
module.exports = userRoutes
